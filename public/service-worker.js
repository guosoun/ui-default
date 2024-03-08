/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./service-worker.ts ***!
  \***************************/
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const map = /* @__PURE__ */ new Map();
function createStream(port) {
  return new ReadableStream({
    start(controller) {
      port.onmessage = ({ data }) => {
        if (data === "end")
          return controller.close();
        if (data === "abort")
          return controller.error("Aborted the download");
        return controller.enqueue(data);
      };
    },
    cancel(reason) {
      console.log("user aborted", reason);
      port.postMessage({ abort: true });
    }
  });
}
self.onmessage = (event) => {
  if (event.data === "ping")
    return;
  const data = event.data;
  const downloadUrl = data.url || `${self.registration.scope + Math.random()}/${typeof data === "string" ? data : data.filename}`;
  const port = event.ports[0];
  const metadata = new Array(3);
  metadata[1] = data;
  metadata[2] = port;
  if (event.data.readableStream) {
    metadata[0] = event.data.readableStream;
  } else if (event.data.transferringReadable) {
    port.onmessage = (evt) => {
      port.onmessage = null;
      metadata[0] = evt.data.readableStream;
    };
  } else
    metadata[0] = createStream(port);
  map.set(downloadUrl, metadata);
  port.postMessage({ download: downloadUrl });
};
function streamsaver(event) {
  const hijacke = map.get(event.request.url);
  const [stream, data, port] = hijacke;
  map.delete(event.request.url);
  const responseHeaders = new Headers({
    "Content-Type": "application/octet-stream; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'",
    "X-Content-Security-Policy": "default-src 'none'",
    "X-WebKit-CSP": "default-src 'none'",
    "X-XSS-Protection": "1; mode=block"
  });
  const headers = new Headers(data.headers || {});
  if (headers.has("Content-Length")) {
    responseHeaders.set("Content-Length", headers.get("Content-Length"));
  }
  if (headers.has("Content-Disposition")) {
    responseHeaders.set("Content-Disposition", headers.get("Content-Disposition"));
  }
  if (data.size) {
    console.warn("Depricated");
    responseHeaders.set("Content-Length", data.size);
  }
  let fileName = typeof data === "string" ? data : data.filename;
  if (fileName) {
    console.warn("Depricated");
    fileName = encodeURIComponent(fileName).replace(/['()]/g, escape).replace(/\*/g, "%2A");
    responseHeaders.set("Content-Disposition", `attachment; filename*=UTF-8''${fileName}`);
  }
  event.respondWith(new Response(stream, { headers: responseHeaders }));
  port.postMessage({ debug: "Download started" });
}
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();
  if (!event.notification.tag.startsWith("message-"))
    return;
  event.waitUntil(self.clients.matchAll({ type: "window" }).then((clientList) => {
    for (const client of clientList) {
      if (client.url === "/home/messages" && "focus" in client)
        return client.focus();
    }
    if (self.clients.openWindow)
      self.clients.openWindow("/home/messages");
    return null;
  }));
});
const PRECACHE = `precache-${"4.49.5"}`;
const DO_NOT_PRECACHE = ["vditor", ".worker.js", "fonts", "i.monaco"];
function shouldCachePath(path) {
  if (!path.split("?")[0].split("/").pop())
    return false;
  if (!path.split("?")[0].split("/").pop().includes("."))
    return false;
  if ( true && (path.includes(".hot-update.") || path.includes("?version=")))
    return false;
  return true;
}
function shouldCache(request) {
  if (!shouldCachePath(request.url))
    return false;
  if (request.headers.get("Pragma") === "no-cache")
    return false;
  return ["get", "head", "options"].includes(request.method.toLowerCase());
}
function shouldPreCache(name) {
  if (!shouldCachePath(name))
    return false;
  if (DO_NOT_PRECACHE.filter((i) => name.includes(i)).length)
    return false;
  return true;
}
let config = null;
function initConfig() {
  var _a;
  config = JSON.parse(new URLSearchParams(location.search).get("config"));
  config.hosts || (config.hosts = []);
  if (!((_a = config.domains) == null ? void 0 : _a.length))
    config.domains = [location.host];
  console.log("Config:", config);
}
self.addEventListener("install", (event) => event.waitUntil((() => __async(void 0, null, function* () {
  initConfig();
  if (false) {}
  self.skipWaiting();
}))()));
self.addEventListener("activate", (event) => {
  initConfig();
  event.waitUntil(self.clients.claim());
  const valid = [PRECACHE];
  caches.keys().then((names) => names.filter((name) => name.startsWith("precache-")).filter((name) => !valid.includes(name)).map((p) => caches.delete(p)));
});
function get(request) {
  return __async(this, null, function* () {
    const isResource = shouldCache(request);
    for (const target of config.domains || []) {
      const source = new URL(request.url);
      source.host = target;
      try {
        console.log("From ", source.toString());
        const r = yield fetch(source, {
          method: request.method,
          credentials: isResource ? "same-origin" : "include",
          headers: request.headers,
          body: request.body,
          redirect: request.redirect,
          keepalive: request.keepalive,
          referrer: request.referrer,
          referrerPolicy: request.referrerPolicy,
          signal: request.signal
        });
        if (r.ok) {
          console.log("Load success from ", source.toString());
          return r;
        }
      } catch (error) {
        console.warn(source.toString(), " Load fail ", error);
      }
    }
    return fetch(request);
  });
}
function transformUrl(url) {
  const urlObject = new URL(url);
  if (urlObject.pathname.startsWith("/fs/"))
    urlObject.search = "";
  return urlObject.toString();
}
function cachedRespond(request) {
  return __async(this, null, function* () {
    const url = transformUrl(request.url);
    const cachedResponse = yield caches.match(url);
    if (cachedResponse)
      return cachedResponse;
    console.log(`Caching ${url}`);
    const [cache, response] = yield Promise.all([
      caches.open(PRECACHE),
      get(request)
    ]);
    if (response.ok) {
      cache.put(url, response.clone());
      return response;
    }
    return fetch(request);
  });
}
self.addEventListener("fetch", (event) => {
  if (event.request.url.endsWith("/ping")) {
    event.respondWith(new Response("pong"));
    return;
  }
  if (map.get(event.request.url)) {
    streamsaver(event);
    return;
  }
  if (!["get", "post", "head"].includes(event.request.method.toLowerCase()))
    return;
  if (!config)
    return;
  const url = new URL(event.request.url);
  const rewritable = config.domains.length > 1 && config.domains.includes(url.hostname) && url.origin === location.origin;
  if (!config.hosts.some((i) => event.request.url.startsWith(i)))
    return;
  if (shouldCache(event.request)) {
    event.respondWith((() => __async(void 0, null, function* () {
      if (rewritable) {
        const targets = config.domains.map((i) => {
          const t = new URL(event.request.url);
          t.host = i;
          return transformUrl(t.toString());
        });
        const results = yield Promise.all(targets.map((i) => caches.match(i)));
        return results.find((i) => i) || cachedRespond(event.request);
      }
      const transformedUrl = transformUrl(event.request.url);
      const cachedResponse = yield caches.match(transformedUrl);
      if (cachedResponse)
        return cachedResponse;
      console.log(`Caching ${transformedUrl}`);
      const [cache, response] = yield Promise.all([
        caches.open(PRECACHE),
        fetch(url, {
          method: event.request.method,
          headers: event.request.headers,
          redirect: event.request.redirect,
          keepalive: event.request.keepalive,
          referrer: event.request.referrer,
          referrerPolicy: event.request.referrerPolicy,
          signal: event.request.signal
        })
        // Fetch from url to prevent opaque response
      ]);
      if (response.ok) {
        cache.put(transformedUrl, response.clone());
        return response;
      }
      console.log(`Failed to cache ${transformedUrl}`, response);
      return fetch(event.request);
    }))());
  } else if (rewritable)
    event.respondWith(get(event.request));
});

/******/ })()
;