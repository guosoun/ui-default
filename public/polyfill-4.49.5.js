/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/browser-update/update.npm.full.js":
/*!************************************************************!*\
  !*** ../../node_modules/browser-update/update.npm.full.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";

var $bu_ = new function() {
  var s = this;
  this.version = "3.3.51npm";
  this.vsakt = { c: "122", f: "123", s: "17.3.1", e: "122", i: "12", ios: "15.6", samsung: "23", o: "105", e_a: "120", o_a: "79", y: "22.11.0", v: "6.4", uc: "13.5.8" };
  this.vsinsecure_below = { c: "119", f: "115", s: "11.1.1", e: "119", i: 11, ios: "12.3", samsung: 12, o: 62, o_a: 78, y: "20", v: "6.0", uc: "13.4" };
  this.vsdefault = { c: -3, f: -3, s: -2, e: 17, i: 11, ios: 10, samsung: 9.9, o: -3, o_a: -3, y: 20.4, v: 2.6, uc: 13, a: 535 };
  this.names = { c: "Chrome", f: "Firefox", s: "Safari", e: "Edge", i: "Internet Explorer", ios: "iOS", samsung: "Samsung Internet", o: "Opera", o_a: "Opera", e_a: "Edge", y: "Yandex Browser", v: "Vivaldi", uc: "UC Browser", a: "Android Browser", x: "Other", silk: "Silk" };
  this.get_browser = function(ua) {
    var n, ua = (ua || navigator.userAgent).replace("_", "."), r = { n: "x", v: 0, t: "other browser", age_years: void 0, no_device_update: false, available: s.vsakt };
    function ignore(reason, pattern) {
      if (new RegExp(pattern, "i").test(ua))
        return reason;
      return false;
    }
    r.other = ignore("bot", "Pagespeed|pingdom|Preview|ktxn|dynatrace|Ruxit|PhantomJS|Headless|Lighthouse|bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor") || ignore("TV", "SMART-TV|SmartTV") || ignore("niche browser", "motorola edge|Comodo.Dragon|OculusBrowser|Falkon|Brave|Classic Browser|Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|Basilisk|QupZilla|Otter|Midori|qutebrowser|slimjet") || ignore("mobile without upgrade path or landing page", "OPR/44.12.2246|cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10");
    r.embedded = /"QtWebEngine|Teams|Electron/i.test(ua);
    r.mobile = /iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(ua);
    r.discontinued = /netscape|greenbrowser|camino|flot|fennec|galeon|coolnovo/i.test(ua);
    var pats = [
      ["CriOS.VV", "c", "ios"],
      ["FxiOS.VV", "f", "ios"],
      ["Trident.*rv:VV", "i", "i"],
      ["Trident.VV", "i", "i"],
      ["UCBrowser.VV", "uc", "c"],
      ["MSIE.VV", "i", "i"],
      ["Edge.VV", "e", "e"],
      ["Edg.VV", "e", "c"],
      ["EdgA.VV", "e_a", "c"],
      ["Vivaldi.VV", "v", "c"],
      ["Android.*OPR.VV", "o_a", "c"],
      ["OPR.VV", "o", "c"],
      ["YaBrowser.VV", "y", "c"],
      ["SamsungBrowser.VV", "samsung", "c"],
      ["Silk.VV", "silk", "c"],
      ["Chrome.VV", "c", "c"],
      ["Firefox.VV", "f", "f"],
      [" OS.VV.*Safari", "ios", "ios"],
      ["Version.VV.*Safari", "s", "s"],
      ["Safari.VV", "s", "s"],
      ["Opera.*Version.VV", "o"],
      ["Opera.VV", "o"]
    ];
    var VV = "(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)";
    for (var i = 0; i < pats.length; i++) {
      if (ua.match(new RegExp(pats[i][0].replace("VV", VV), "i"))) {
        r.n = pats[i][1];
        r.engine = pats[i][2];
        break;
      }
    }
    r.fullv = RegExp.$1;
    r.v = parseFloat(r.fullv);
    if (/windows.nt.5|windows.nt.4|windows.nt.6.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5/i.test(ua)) {
      r.no_device_update = true;
      r.available = {};
    }
    if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
      r.n = "ios";
      r.engine = "ios";
      r.fullv = r.v = 13;
      r.no_device_update = true;
    }
    if (/iphone|ipod|ipad|ios/i.test(ua)) {
      ua.match(new RegExp("OS." + VV, "i"));
      r.n = "ios";
      r.fullv = RegExp.$1;
      r.v = parseFloat(r.fullv);
      r.engine = "ios";
      var av = s.available_ios(ua, r.v);
      if (av < 12 && Math.round(r.v) === 11)
        av = 12;
      r.available = { "ios": av };
      if (parseFloat(r.available.ios) < 11)
        r.no_device_update = true;
    }
    if (/windows.nt.5.1|windows.nt.5.2|windows.nt.6.0/i.test(ua)) {
      r.available = { "c": 49.9, "f": 52.9 };
      r.no_device_update = true;
    }
    if (/os x 10.6/i.test(ua)) {
      r.available = { "s": "5.1.10", "c": 49.9, "f": 48 };
      r.no_device_update = true;
    }
    if (/os x 10.7|os x 10.8/i.test(ua)) {
      r.available = { "s": "6.2.8", "c": 49.9, "f": 48 };
      r.no_device_update = true;
    }
    if (/os x 10.9/i.test(ua))
      r.available.s = "9.1.3";
    if (/os x 10.10/i.test(ua))
      r.available.s = "10.1.2";
    if (ua.indexOf("Android") > -1 && r.n === "s") {
      var v = parseInt((/WebKit\/([0-9]+)/i.exec(ua) || 0)[1], 10) || 2e3;
      if (v <= 534) {
        r.n = "a";
        r.fullv = r.v = v;
        r.is_insecure = true;
      }
    }
    r.t = s.names[r.n] + " " + r.v;
    r.is_supported = r.is_latest = !s.vsakt[r.n] ? void 0 : s.less(r.fullv, s.vsakt[r.n]) <= 0;
    r.vmaj = Math.round(r.v);
    r.is_insecure = r.is_insecure || !s.vsinsecure_below[r.n] ? void 0 : s.less(r.fullv, s.vsinsecure_below[r.n]) === 1;
    if (r.n === "f" && r.vmaj === 115 || r.n === "c" && r.vmaj === 114) {
      r.is_supported = true;
      r.is_insecure = false;
      if (r.n === "f")
        r.esr = true;
    }
    if (r.n === "ios" && r.v > 10.3)
      r.is_supported = true;
    if (r.n === "a" || r.n === "x")
      r.t = s.names[r.n];
    if (r.n === "e") {
      r.t = s.names[r.n] + " " + r.vmaj;
      r.is_supported = s.less(r.fullv, "18.15063") != 1;
    }
    if (r.n in ["c", "f", "o", "e"] && s.less(r.fullv, parseFloat(s.vsakt[r.n]) - 1) <= 0)
      r.is_supported = true;
    var releases_per_year = { "f": 7, "c": 8, "o": 8, "i": 1, "e": 1, "s": 1 };
    if (releases_per_year[r.n]) {
      r.age_years = Math.round((s.vsakt[r.n] - r.v) / releases_per_year[r.n] * 10) / 10 || 0;
    }
    var engines = { e: "Edge.VV", c: "Chrome.VV", f: "Firefox.VV", s: "Version.VV", i: "MSIE.VV", "ios": " OS.VV" };
    if (r.engine) {
      ua.match(new RegExp(engines[r.engine].replace("VV", VV), "i"));
      r.engine_version = parseFloat(RegExp.$1);
    }
    return r;
  };
  this.semver = function(vstr) {
    if (vstr instanceof Array)
      return vstr;
    var x = (vstr + ".0.0.0").split(".");
    return [parseInt(x[0]) || 0, parseInt(x[1]) || 0, parseInt(x[2]) || 0, parseInt(x[3]) || 0];
  };
  this.less = function(v1, v2) {
    v1 = s.semver(v1);
    v2 = s.semver(v2);
    for (var i = 0; ; i++) {
      if (i >= v1.length)
        return i >= v2.length ? 0 : 1;
      if (i >= v2.length)
        return -1;
      var diff = v2[i] - v1[i];
      if (diff)
        return diff > 0 ? 1 : -1;
    }
  };
  this.available_ios = function(ua, v) {
    var h = Math.max(window.screen.height, window.screen.width), pr = window.devicePixelRatio;
    if (/ipad/i.test(ua)) {
      if (h == 1024 && pr == 2)
        return 10;
      if (h == 1112)
        return 15;
      if (h == 1366)
        return 15;
      if (h == 1024 && v < 6)
        return 5;
      return 9;
    }
    if (pr == 1)
      return 6;
    if (pr == 3)
      return 15;
    if (h == 812)
      return 15;
    if (h == 736 || h == 667)
      return 15;
    if (h == 568)
      return 10;
    if (h == 480)
      return 7;
    return 6;
  };
}();
window.$bu_getBrowser = $bu_.get_browser;
var $buo = function(op, test) {
  var n = window.navigator, b;
  op = window._buorgres = op || {};
  var ll = op.l || (n.languages ? n.languages[0] : null) || n.language || n.browserLanguage || n.userLanguage || document.documentElement.getAttribute("lang") || "en";
  op.llfull = ll.replace("_", "-").toLowerCase().substr(0, 5);
  op.ll = op.llfull.substr(0, 2);
  op.domain = op.domain !== void 0 ? op.domain : (/file:/.test(location.href) ? "https:" : "") + "//browser-update.org";
  op.apiver = op.api || op.c || -1;
  op.jsv = $bu_.version;
  var required_min = op.apiver < 2018 && { i: 10, f: 11, o: 21, s: 8, c: 30 } || {};
  var vs = op.notify || op.vs || {};
  if (vs.e !== 0)
    vs.e = vs.e || vs.i;
  vs.i = vs.i || vs.e;
  var required = op.required || {};
  if (required.e !== 0)
    required.e = required.e || required.i;
  if (!required.i) {
    required.i = required.e;
    $bu_.vsakt.i = $bu_.vsakt.e;
  }
  for (b in $bu_.vsdefault) {
    if (vs[b]) {
      if ($bu_.less(vs[b], 0) >= 0)
        required[b] = parseFloat($bu_.vsakt[b]) + parseFloat(vs[b]) + 0.01;
      else
        required[b] = parseFloat(vs[b]) + 0.01;
    }
    if (!(b in required) || required[b] == null)
      required[b] = $bu_.vsdefault[b];
    if ($bu_.less(required[b], 0) >= 0)
      required[b] = parseFloat($bu_.vsakt[b]) + parseFloat(required[b]);
    if (required_min[b] && $bu_.less(required[b], required_min[b]) === 1)
      required[b] = required_min[b];
  }
  required.ios = required.ios || required.s;
  if (required.i < 79 && required.i > 65)
    required.i = required.i - 60;
  if (required.e < 79 && required.e > 65)
    required.e = required.e - 60;
  op.required = required;
  op.reminder = op.reminder < 0.1 ? 0 : op.reminder || 24 * 7;
  op.reminderClosed = op.reminderClosed < 1 ? 0 : op.reminderClosed || 24 * 7;
  op.onshow = op.onshow || function(o) {
  };
  op.onclick = op.onclick || function(o) {
  };
  op.onclose = op.onclose || function(o) {
  };
  op.pageurl = op.pageurl || location.hostname || "x";
  op.newwindow = op.newwindow !== false;
  op.test = test || op.test || location.hash === "#test-bu" || false;
  op.ignorecookie = op.ignorecookie || location.hash === "#ignorecookie-bu";
  op.reasons = [];
  op.hide_reasons = [];
  function check_show(op2) {
    var bb = op2.browser = $bu_.get_browser(op2.override_ua);
    op2.is_below_required = required[bb.n] && $bu_.less(bb.fullv, required[bb.n]) === 1;
    if (bb.other !== false)
      op2.hide_reasons.push("is other browser:" + bb.other);
    if (bb.embedded !== false)
      op2.hide_reasons.push("is embedded browser:" + bb.embedded);
    if (bb.esr && !op2.notify_esr)
      op2.hide_reasons.push("Extended support (ESR)");
    if (bb.mobile && op2.mobile === false)
      op2.hide_reasons.push("do not notify mobile");
    if (bb.is_latest)
      op2.hide_reasons.push("is latest version of the browser");
    if (bb.no_device_update)
      op2.hide_reasons.push("no device update");
    if (op2.is_below_required)
      op2.reasons.push("below required");
    if ((op2.insecure || op2.unsecure) && bb.is_insecure)
      op2.reasons.push("insecure");
    if (op2.unsupported && !bb.is_supported)
      op2.reasons.push("no vendor support");
    if (op2.hide_reasons.length > 0)
      return false;
    if (op2.reasons.length > 0)
      return true;
    return false;
  }
  op.notified = check_show(op);
  op.already_shown = document.cookie.indexOf("browserupdateorg=pause") > -1 && !op.ignorecookie;
  if (!op.test && (!op.notified || op.already_shown))
    return;
  op.setCookie = function(hours) {
    document.cookie = "browserupdateorg=pause; expires=" + new Date(new Date().getTime() + 36e5 * hours).toGMTString() + "; path=/; SameSite=Lax" + (/https:/.test(location.href) ? "; Secure" : "");
  };
  if (op.already_shown && (op.ignorecookie || op.test))
    op.setCookie(-10);
  if (op.reminder > 0)
    op.setCookie(op.reminder);
  if (op.nomessage) {
    op.onshow(op);
    return;
  }
  $buo_show();
};
if (true) {
  module.exports = $buo;
}
"use strict";
var $buo_show = function() {
  var op = window._buorgres;
  var bb = $bu_getBrowser();
  var burl = op.burl || "http" + (/MSIE/i.test(navigator.userAgent) ? "" : "s") + "://browser-update.org/";
  if (!op.url) {
    op.url = burl + (op.l && op.l + "/" || "") + "update-browser.html" + (op.test ? "?force_outdated=true" : "") + "#" + op.jsv + ":" + op.pageurl;
  }
  op.url_permanent_hide = op.url_permanent_hide || burl + "block-ignore-browser-update-warning.html";
  function busprintf() {
    var args = arguments;
    var data = args[0];
    for (var k = 1; k < args.length; ++k) {
      data = data.replace(/%s/, args[k]);
    }
    return data;
  }
  var t = {}, ta;
  t.en = { "msg": "Your web browser ({brow_name}) is out of date.", "msgmore": "Update your browser for more security, speed and the best experience on this site.", "bupdate": "Update browser", "bignore": "Ignore", "remind": "You will be reminded in {days} days.", "bnever": "Never show again", "insecure": "Your web browser ({brow_name}) has a serious security vulnerability!" };
  t.ar = { "msg": "\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 ({brow_name}) \u063A\u064A\u0631 \u0645\u064F\u062D\u062F\u0651\u062B.", "msgmore": "\u0642\u0645 \u0628\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0627\u0644\u0633\u0631\u0639\u0629 \u0648\u0644\u0623\u0641\u0636\u0644 \u062A\u062C\u0631\u0628\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639.", "bupdate": "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u062A\u0635\u0641\u062D", "bignore": "\u062A\u062C\u0627\u0647\u0644", "remind": "\u0633\u064A\u062A\u0645 \u062A\u0630\u0643\u064A\u0631\u0643 \u0641\u064A \u063A\u0636\u0648\u0646 {days} \u0623\u064A\u0627\u0645.", "bnever": "\u0644\u0627 \u062A\u0638\u0647\u0631 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649" };
  t.bg = { "msg": "\u0412\u0430\u0448\u0438\u044F\u0442 \u0443\u0435\u0431 \u0431\u0440\u0430\u0443\u0437\u044A\u0440 ({brow_name}) \u0435 \u043E\u0441\u0442\u0430\u0440\u044F\u043B.", "msgmore": "\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u0439\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430 \u0441\u0438 \u0437\u0430 \u043F\u043E\u0432\u0435\u0447\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u043E\u0441\u0442, \u0431\u044A\u0440\u0437\u0438\u043D\u0430 \u0438 \u043D\u0430\u0439-\u0434\u043E\u0431\u0440\u043E\u0442\u043E \u0438\u0437\u0436\u0438\u0432\u044F\u0432\u0430\u043D\u0435 \u043D\u0430 \u0442\u043E\u0437\u0438 \u0441\u0430\u0439\u0442.", "bupdate": "\u0410\u043A\u0442\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430", "bignore": "\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0430\u0439", "remind": "\u0429\u0435 \u0432\u0438 \u0431\u044A\u0434\u0435 \u043D\u0430\u043F\u043E\u043C\u043D\u0435\u043D\u043E \u0441\u043B\u0435\u0434 {days} \u0434\u043D\u0438.", "bnever": "\u041D\u0438\u043A\u043E\u0433\u0430 \u043F\u043E\u0432\u0435\u0447\u0435 \u0434\u0430 \u043D\u0435 \u0441\u0435 \u043F\u043E\u043A\u0430\u0437\u0432\u0430" };
  t.ca = { "msg": "El teu navegador ({brow_name}) est\xE0 desactualitzat.", "msgmore": "Actualitzeu el vostre navegador per obtenir m\xE9s seguretat, velocitat i una millor experi\xE8ncia en aquest lloc.", "bupdate": "Actualitza el navegador", "bignore": "Ignorar", "remind": "T'ho recordarem d'aqu\xED a {days} dies.", "bnever": "No ho tornis a mostrar" };
  t.cs = { "msg": "V\xE1\u0161 prohl\xED\u017Ee\u010D ({brow_name}) je zastaral\xFD.", "msgmore": "Aktualizujte prohl\xED\u017Ee\u010D pro lep\u0161\xED zabezpe\u010Den\xED, rychlost a nejlep\u0161\xED z\xE1\u017Eitek z tohoto webu.", "bupdate": "Aktualizovat prohl\xED\u017Ee\u010D", "bignore": "Ignorovat", "remind": "Znovu budete upozorn\u011Bni za {days} dn\u016F.", "bnever": "Ji\u017E nezobrazovat" };
  t.cy = { "msg": "Mae eich porwr gwe ({brow_name}) angen ei ddiweddaru.", "msgmore": "Diweddarwch eich porwr i gael mwy o ddiogelwch, cyflymder a'r profiad gorau ar y safle hwn.", "bupdate": "Diweddaru porwr", "bignore": "Anwybyddu", "remind": "Byddwn yn eich atgoffa mewn {days} diwrnod.", "bnever": "Peidiwch \xE2 dangos eto" };
  t.da = { "msg": "Din web browser ({brow_name}) er for\xE6ldet", "msgmore": "Opdater din browser for mere sikkerhed, hastighed og den bedste oplevelse p\xE5 denne side.", "bupdate": "Opdater browser", "bignore": "Ignorer", "remind": "Du vil blive p\xE5mindet om {days} dage.", "bnever": "Vis aldrig igen" };
  t.de = { "msg": "Ihr Webbrowser ({brow_name}) ist veraltet.", "msgmore": "Aktualisieren Sie Ihren Browser f\xFCr mehr Sicherheit, Geschwindigkeit und den besten Komfort auf dieser Seite.", "bupdate": "Browser aktualisieren", "bignore": "Ignorieren", "remind": "Sie werden in {days} Tagen wieder erinnert.", "bnever": "Nie wieder anzeigen", "insecure": "Ihr Webbrowser ({brow_name}) hat eine ernsthafte Sicherheitsl\xFCcke!" };
  t.el = { "msg": "\u03A4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2 ({brow_name}) \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03C7\u03B1\u03B9\u03C9\u03BC\u03AD\u03BD\u03BF.", "msgmore": "\u0395\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B7 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1, \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1 \u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B5\u03BC\u03C0\u03B5\u03B9\u03C1\u03AF\u03B1 \u03C3' \u03B1\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03B9\u03C3\u03C4\u03CC\u03C4\u03BF\u03C0\u03BF.", "bupdate": "\u0395\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2", "bignore": "\u0391\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5", "remind": "\u0398\u03B1 \u03C3\u03B1\u03C2 \u03C4\u03BF \u03C5\u03C0\u03B5\u03BD\u03B8\u03C5\u03BC\u03AF\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C3\u03B5 {days} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2.", "bnever": "\u039D\u03B1 \u03BC\u03B7\u03BD \u03B5\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03C4\u03B5\u03AF \u03BE\u03B1\u03BD\u03AC" };
  t.es = { "msg": "Su navegador web ({brow_name}) est\xE1 desactualizado.", "msgmore": "Actualice su navegador para obtener m\xE1s seguridad, velocidad y para disfrutar de la mejor experiencia en este sitio.", "bupdate": "Actualizar navegador", "bignore": "Ignorar", "remind": "Se le recordar\xE1 en {days} d\xEDas.", "bnever": "No mostrar de nuevo" };
  t.et = { "msg": "Teie veebilehitseja ({brow_name}) on vananenud.", "msgmore": "Veebilehitseja uuendamisega kaasneb nii parem turvalisus, kiirus kui ka kasutusmugavus.", "bupdate": "Uuenda veebilehitsejat", "bignore": "Eira", "remind": "Uus meeldetuletus {days} p\xE4eva p\xE4rast.", "bnever": "\xC4ra kunagi enam n\xE4ita" };
  t.fa = { "msg": "\u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 ({brow_name}) \u0642\u062F\u06CC\u0645\u06CC \u0627\u0633\u062A.", "msgmore": "\u0628\u0631\u0627\u06CC \u0627\u06CC\u0645\u0646\u06CC\u060C \u0633\u0631\u0639\u062A \u0648 \u062A\u062C\u0631\u0628\u0647 \u0628\u0647\u062A\u0631 \u0645\u0631\u0648\u0631\u06AF\u0631 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u200C\u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F.", "bupdate": "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0645\u0631\u0648\u0631\u06AF\u0631", "bignore": "\u0646\u0627\u062F\u06CC\u062F\u0647 \u06AF\u0631\u0641\u062A\u0646", "remind": "\u0628\u0647 \u0634\u0645\u0627 \u062A\u0627 {days} \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631 \u062F\u0648\u0628\u0627\u0631\u0647 \u06CC\u0627\u062F\u200C\u0622\u0648\u0631\u06CC \u062E\u0648\u0627\u0647\u062F \u0634\u062F.", "bnever": "\u0647\u0631\u06AF\u0632 \u0646\u0645\u0627\u06CC\u0634 \u0646\u062F\u0647" };
  t.fi = { "msg": "Selaimesi ({brow_name}) on vanhentunut.", "msgmore": "P\xE4ivit\xE4 selaimesi saadaksesi tietoturvap\xE4ivityksi\xE4, nopeutta sek\xE4 parhaan k\xE4ytt\xF6kokemuksen sivustolla.", "bupdate": "P\xE4ivit\xE4 selain", "bignore": "Ohita", "remind": "Saat uuden muistutuksen {days} p\xE4iv\xE4n p\xE4\xE4st\xE4.", "bnever": "\xC4l\xE4 n\xE4yt\xE4 uudestaan" };
  t.fr = { "msg": "Votre navigateur Web ({brow_name}) n'est pas \xE0 jour.", "msgmore": "Mettez \xE0 jour votre navigateur pour plus de s\xE9curit\xE9 et de rapidit\xE9 et une meilleure exp\xE9rience sur ce site.", "bupdate": "Mettre \xE0 jour le navigateur", "bignore": "Ignorer", "remind": "Vous serez rappel\xE9 dans {days} jours.", "bnever": "Ne plus afficher" };
  t.gl = { "msg": "T\xE1 an l\xEDonl\xE9itheoir agat ({brow_name}) as d\xE1ta.", "msgmore": "Actualiza o teu navegador para obter m\xE1is seguridade, rapidez e mellor experiencia neste sitio.", "bupdate": "Actualizar navegador web", "bignore": "Ignorar", "remind": "Lembraralle en {days} d\xEDas.", "bnever": "Non volver mostrar m\xE1is" };
  t.he = { "msg": "\u05D3\u05E4\u05D3\u05E4\u05DF ({brow_name}) \u05E9\u05DC\u05DA \u05D0\u05D9\u05E0\u05D5 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF.", "msgmore": "\u05E2\u05D3\u05DB\u05DF/\u05D9 \u05D0\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05DC\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D4\u05D0\u05D1\u05D8\u05D7\u05D4 \u05D5\u05D4\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D5\u05DB\u05D3\u05D9 \u05DC\u05D9\u05D4\u05E0\u05D5\u05EA \u05DE\u05D4\u05D7\u05D5\u05D5\u05D9\u05D4 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D1\u05D0\u05EA\u05E8 \u05D6\u05D4.", "bupdate": "\u05E2\u05D3\u05DB\u05DF \u05D3\u05E4\u05D3\u05E4\u05DF", "bignore": "\u05D4\u05EA\u05E2\u05DC\u05DD", "remind": "\u05EA\u05E7\u05D1\u05DC/\u05D9 \u05EA\u05D6\u05DB\u05D5\u05E8\u05EA \u05D1\u05E2\u05D5\u05D3  {days} \u05D9\u05DE\u05D9\u05DD.", "bnever": "\u05D0\u05DC \u05EA\u05E6\u05D9\u05D2 \u05E9\u05D5\u05D1" };
  t.hi = { "msg": "\u0906\u092A\u0915\u093E \u0935\u0947\u092C \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 ({brow_name}) \u092A\u0941\u0930\u093E\u0928\u093E \u0939\u0948\u0964", "msgmore": "\u0907\u0938 \u0938\u093E\u0907\u091F \u092A\u0930 \u0905\u0927\u093F\u0915 \u0938\u0941\u0930\u0915\u094D\u0937\u093E, \u0917\u0924\u093F \u0914\u0930 \u0938\u0930\u094D\u0935\u094B\u0924\u094D\u0924\u092E \u0905\u0928\u0941\u092D\u0935 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0947 \u092C\u094D\u0930\u093E\u0909\u095B\u0930 \u0915\u094B \u0905\u092A\u0921\u0947\u091F \u0915\u0930\u0947\u0902 \u0964", "bupdate": "\u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0905\u092A\u0921\u0947\u091F \u0915\u0930\u0947\u0902", "bignore": "\u0928\u091C\u0930\u0905\u0902\u0926\u093E\u091C \u0915\u0930\u0947\u0902", "remind": "\u0906\u092A\u0915\u094B {days} \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902 \u092F\u093E\u0926 \u0926\u093F\u0932\u093E\u092F\u093E \u091C\u093E\u090F\u0917\u093E\u0964", "bnever": "\u092B\u093F\u0930 \u0915\u092D\u0940 \u092E\u0924 \u0926\u093F\u0916\u093E\u0928\u093E" };
  t.hu = { "msg": "Az \xD6n webb\xF6ng\xE9sz\u0151je ({brow_name}) elavult.", "msgmore": "Friss\xEDtse b\xF6ng\xE9sz\u0151j\xE9t a nagyobb biztons\xE1g, sebess\xE9g \xE9s \xE9lm\xE9ny \xE9rdek\xE9ben!", "bupdate": "B\xF6ng\xE9sz\u0151 friss\xEDt\xE9se", "bignore": "Mell\u0151z\xE9s", "remind": "\xDAjra eml\xE9keztet\xFCnk {days} napon bel\xFCl.", "bnever": "Ne mutassa t\xF6bbet" };
  t.id = { "msg": "Peramban web ({brow_name}) Anda sudah usang.", "msgmore": "Perbarui peramban Anda untuk pengalaman terbaik, lebih aman, dan cepat di situs ini.", "bupdate": "Perbarui peramban", "bignore": "Abaikan", "remind": "Anda akan diingatkan kembali dalam {days} hari.", "bnever": "Jangan pernah tampilkan lagi" };
  t.it = { "msg": "Il tuo browser ({brow_name}) non \xE8 aggiornato.", "msgmore": "Aggiorna il browser per una maggiore sicurezza, velocit\xE0 e la migliore esperienza su questo sito.", "bupdate": "Aggiorna browser", "bignore": "Ignora", "remind": "Riceverai un promemoria tra {days} giorni.", "bnever": "Non mostrare di nuovo" };
  t.ja = { "msg": "\u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\uFF08{brow_name}\uFF09\u306F\u6700\u65B0\u7248\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002", "msgmore": "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3001\u30B9\u30D4\u30FC\u30C9\u3001\u305D\u3057\u3066\u3053\u306E\u30B5\u30A4\u30C8\u3067\u306E\u6700\u826F\u306E\u4F53\u9A13\u306E\u305F\u3081\u306B\u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002", "bupdate": "\u30D6\u30E9\u30A6\u30B6\u3092\u66F4\u65B0\u3059\u308B", "bignore": "\u7121\u8996\u3059\u308B", "remind": "{days} \u65E5\u5F8C\u306B\u3082\u3046\u4E00\u5EA6\u304A\u77E5\u3089\u305B\u3057\u307E\u3059\u3002", "bnever": "\u6B21\u56DE\u304B\u3089\u8868\u793A\u3057\u306A\u3044" };
  t.ko = { "msg": "\uADC0\uD558\uC758 \uC6F9 \uBE0C\uB77C\uC6B0\uC800({brow_name})\uB294 \uC624\uB798\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "msgmore": "\uC774 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uBCF4\uC548, \uC18D\uB3C4\uC640 \uCD5C\uC0C1\uC758 \uACBD\uD5D8\uC744 \uC5BB\uC73C\uB824\uBA74 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC2ED\uC2DC\uC624.", "bupdate": "\uBE0C\uB77C\uC6B0\uC800 \uC5C5\uB370\uC774\uD2B8\uD558\uAE30", "bignore": "\uBB34\uC2DC\uD558\uAE30", "remind": "{days}\uC77C \uD6C4\uC5D0 \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.", "bnever": "\uB2E4\uC2DC \uD45C\uC2DC\uD558\uC9C0 \uC54A\uAE30" };
  t.lt = { "msg": "J\u016Bs\u0173 nar\u0161ykl\u0117 ({brow_name}) yra pasenusi.", "msgmore": "Atsinaujinkite savo nar\u0161ykl\u0119 nor\u0117dami gauti daugiau saugumo, grei\u010Dio ir pa\u010Di\u0173 geriausi\u0173 patir\u010Di\u0173 \u0161ioje svetain\u0117je.", "bupdate": "Atnaujinti nar\u0161ykl\u0119", "bignore": "Nepaisyti", "remind": "Jums bus priminta po {days} dien\u0173.", "bnever": "Daugiau niekada nerodyti" };
  t.lv = { "msg": "J\u016Bsu p\u0101rl\u016Bkprogramma ({brow_name}) ir novecojusi.", "msgmore": "Atjaunojiet savu p\u0101rl\u016Bkprogrammu liel\u0101kai dro\u0161\u012Bbai, \u0101trumam un lab\u0101kai pieredzei ar \u0161o vietni.", "bupdate": "Atjaunin\u0101t p\u0101rl\u016Bkprogrammu", "bignore": "Ignor\u0113t", "remind": "Jums tiks par\u0101d\u012Bts atg\u0101din\u0101jums p\u0113c {days} dien\u0101m.", "bnever": "Vairs ner\u0101d\u012Bt" };
  t.ms = { "msg": "Pelayar web anda ({brow_name}) sudah lapuk.", "msgmore": "Kemas kini pelayar anda untuk lebih keselamatan, kelajuan dan pengalaman terbaik di laman web ini.", "bupdate": "Kemas kini pelayar", "bignore": "Abaikan", "remind": "Anda akan diingatkan dalam {days} hari.", "bnever": "Jangan tunjukkan lagi" };
  t.nl = { "msg": "Uw webbrowser ({brow_name}) is verouderd.", "msgmore": "Update uw browser voor meer veiligheid, snelheid en om deze site optimaal te kunnen gebruiken.", "bupdate": "Browser updaten", "bignore": "Negeren", "remind": "We zullen u er in {days} dagen aan herinneren.", "bnever": "Nooit meer tonen" };
  t.no = t.nn = t.nb = { "msg": "Nettleseren din ({brow_name}) er utdatert.", "msgmore": "Oppdater nettleseren din for \xF8kt sikkerhet, hastighet og den beste opplevelsen p\xE5 dette nettstedet.", "bupdate": "Oppdater nettleser", "bignore": "Ignorer", "remind": "Du vil f\xE5 en p\xE5minnelse om {days} dager.", "bnever": "Aldri vis igjen" };
  t.pl = { "msg": "Twoja przegl\u0105darka ({brow_name}) jest nieaktualna.", "msgmore": "Zaktualizuj przegl\u0105dark\u0119, by korzysta\u0107 z tej strony bezpieczniej, szybciej i po prostu sprawniej.", "bupdate": "Aktualizuj przegl\u0105dark\u0119", "bignore": "Ignoruj", "remind": "Przypomnimy o tym za {days} dni.", "bnever": "Nie pokazuj wi\u0119cej" };
  t.pt = { "msg": "Seu navegador da web ({brow_name}) est\xE1 desatualizado.", "msgmore": "Atualize seu navegador para ter mais seguran\xE7a e velocidade, al\xE9m da melhor experi\xEAncia neste site.", "bupdate": "Atualizar navegador", "bignore": "Ignorar", "remind": "Voc\xEA ser\xE1 relembrado em {days} dias.", "bnever": "N\xE3o mostrar novamente" };
  t.ro = { "msg": "Browserul t\u0103u ({brow_name}) nu este actualizat.", "msgmore": "Actualizeaz\u0103 browserul pentru o mai mare siguran\u021B\u0103, vitez\u0103 \u0219i cea mai bun\u0103 experien\u021B\u0103 pe acest site.", "bupdate": "Actualizeaz\u0103 browser", "bignore": "Ignor\u0103", "remind": "\u021Ai se va reaminti peste {days} zile.", "bnever": "Nu mai ar\u0103ta" };
  t.ru = { "msg": "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 ({brow_name}) \u0443\u0441\u0442\u0430\u0440\u0435\u043B.", "msgmore": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0443\u0440\u043E\u0432\u043D\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430.", "bupdate": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440", "bignore": "\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "remind": "\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 {days} \u0434\u043D\u0435\u0439.", "bnever": "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C " };
  t.sk = { "msg": "V\xE1\u0161 internetov\xFD prehliada\u010D ({brow_name}) je zastaran\xFD.", "msgmore": "Pre v\xE4\u010D\u0161iu bezpe\u010Dnos\u0165, r\xFDchlos\u0165 a lep\u0161iu sk\xFAsenos\u0165 s touto str\xE1nkou si aktualizujte svoj prehliada\u010D.", "bupdate": "Aktualizova\u0165 prehliada\u010D", "bignore": "Ignorova\u0165", "remind": "Bude v\xE1m to pripomenut\xE9 o {days} dn\xED.", "bnever": "U\u017E nikdy viac neukazova\u0165" };
  t.sl = { "msg": "Va\u0161 spletni brskalnik ({brow_name}) je zastarel.", "msgmore": "Posodobite svoj brskalnik za dodatno varnost, hitrost in najbolj\u0161o izku\u0161njo na tem spletnem mestu.", "bupdate": "Posodobi brskalnik", "bignore": "Prezri", "remind": "Opomnik boste prejeli \u010Dez toliko dni: {days}.", "bnever": "Ne prika\u017Ei ve\u010D" };
  t.sq = { "msg": "Shfletuesi juaj ({brow_name}) \xEBsht\xEB i vjetruar.", "msgmore": "P\xEBrdit\xEBsoni shfletuesin tuaj p\xEBr m\xEB tep\xEBr siguri, shpejt\xEBsi dhe p\xEBr m\xEB t\xEB mirin e funksionimeve n\xEB k\xEBt\xEB sajt.", "bupdate": "P\xEBrdit\xEBso shfletuesin", "bignore": "Shp\xEBrfille", "remind": "Do t\u2019ju rikujtohet pas {days} dit\xEBsh.", "bnever": "Mos e shfaq kurr\xEB m\xEB" };
  t.sr = { "msg": "Va\u0161 pretra\u017Eiva\u010D ({brow_name}) je zastareo.", "msgmore": "Ima poznate sigurnosne probleme i najverovatnije ne\u0107e prikazati sve funkcionalnisti ovog i drugih sajtova.", "bupdate": "Nadogradi pretra\u017Eiva\u010D", "bignore": "Ignorisi", "remind": "Zaboravic\u0301ete za {days} dana.", "bnever": "Ne prikazuj opet" };
  t.sv = { "msg": "Din webbl\xE4sare ({brow_name}) \xE4r f\xF6r\xE5ldrad. ", "msgmore": "Uppdatera din webbl\xE4sare f\xF6r mer s\xE4kerhet, hastighet och den b\xE4sta upplevelsen p\xE5 den h\xE4r sajten. ", "bupdate": "Uppdatera webbl\xE4saren", "bignore": "Ignorera", "remind": "Du f\xE5r en p\xE5minnelse om {days} dagar.", "bnever": "Visa aldrig igen" };
  t.th = { "msg": "\u0E40\u0E27\u0E47\u0E1A\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 ({brow_name}) \u0E25\u0E49\u0E32\u0E2A\u0E21\u0E31\u0E22\u0E41\u0E25\u0E49\u0E27", "msgmore": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22, \u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E1A\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E19\u0E35\u0E49", "bupdate": "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E17\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C", "bignore": "\u0E02\u0E49\u0E32\u0E21", "remind": "\u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E43\u0E19 {days} \u0E27\u0E31\u0E19", "bnever": "\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E2D\u0E35\u0E01" };
  t.tr = { "msg": "Web taray\u0131c\u0131n\u0131z ({brow_name}) g\xFCncel de\u011Fil.", "msgmore": "Daha fazla g\xFCvenlik ve h\u0131z ile bu sitede en iyi deneyim i\xE7in taray\u0131c\u0131n\u0131z\u0131 g\xFCncelleyin.", "bupdate": "Taray\u0131c\u0131y\u0131 g\xFCncelle", "bignore": "Yok say", "remind": "{days} g\xFCn sonra bir hat\u0131rlatma alacaks\u0131n\u0131z.", "bnever": "Bir daha g\xF6sterme" };
  t.uk = { "msg": "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 ({brow_name}) \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0438\u0439.", "msgmore": "\u041E\u043D\u043E\u0432\u0456\u0442\u044C \u0441\u0432\u0456\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043B\u044F \u0431\u0456\u043B\u044C\u0448\u043E\u0457 \u0431\u0435\u0437\u043F\u0435\u043A\u0438, \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456 \u0442\u0430 \u043F\u043E\u0432\u043D\u043E\u0446\u0456\u043D\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u0446\u044C\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443.", "bupdate": "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440", "bignore": "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0438", "remind": "\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0447\u0435\u0440\u0435\u0437 {days} \u0434\u043D\u0456\u0432.", "bnever": "\u0411\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438" };
  t.uz = { "msg": "Sizning ({brow_name}) veb-brauzeringiz eskirgan", "msgmore": "Xavfsizlik, tezkorlik va ushbu sayt imkoniyatlaridan to`liq foydalanish uchun brauzeringizni yangilang.", "bupdate": "Brauzeringizni yangilang", "bignore": "E\u2019tibor bermaslik", "remind": "Sizga {days} kundan so`ng eslatammiz.", "bnever": "Hech qachon qayta ko'rsatmang" };
  t.vi = { "msg": "Tr\xECnh duy\u1EC7t web c\u1EE7a b\u1EA1n ({brow_name}) \u0111\xE3 l\u1ED7i th\u1EDDi.", "msgmore": "C\u1EADp nh\u1EADt tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n \u0111\u1EC3 c\xF3 th\xEAm b\u1EA3o m\u1EADt, t\u1ED1c \u0111\u1ED9 v\xE0 tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t tr\xEAn trang web n\xE0y.", "bupdate": "C\u1EADp nh\u1EADt tr\xECnh duy\u1EC7t", "bignore": "B\u1ECF qua", "remind": "B\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c nh\u1EAFc nh\u1EDF sau {days} ng\xE0y.", "bnever": "Kh\xF4ng bao gi\u1EDD hi\u1EC3n th\u1ECB l\u1EA1i" };
  t.zh = { "msg": "\u60A8\u7684\u7F51\u9875\u6D4F\u89C8\u5668\uFF08{brow_name}\uFF09\u5DF2\u8FC7\u671F\u3002", "msgmore": "\u66F4\u65B0\u60A8\u7684\u6D4F\u89C8\u5668\uFF0C\u4EE5\u4FBF\u5728\u8BE5\u7F51\u7AD9\u4E0A\u83B7\u5F97\u66F4\u5B89\u5168\u3001\u66F4\u5FEB\u901F\u548C\u6700\u597D\u7684\u4F53\u9A8C\u3002", "bupdate": "\u66F4\u65B0\u6D4F\u89C8\u5668", "bignore": "\u5FFD\u7565", "remind": "\u4F1A\u5728{days}\u5929\u540E\u63D0\u9192\u60A8\u3002", "bnever": "\u4E0D\u518D\u663E\u793A" };
  t["zh-tw"] = t["zh-hans-cn"] = { "msg": "\u60A8\u7684\u7DB2\u8DEF\u700F\u89BD\u5668\uFF08{brow_name}\uFF09\u5DF2\u904E\u820A\u3002", "msgmore": "\u66F4\u65B0\u60A8\u7684\u700F\u89BD\u5668\u4EE5\u7372\u5F97\u66F4\u4F73\u7684\u5B89\u5168\u6027\u3001\u901F\u5EA6\u4EE5\u53CA\u5728\u6B64\u7DB2\u7AD9\u7684\u6700\u4F73\u9AD4\u9A57\u3002", "bupdate": "\u66F4\u65B0\u700F\u89BD\u5668", "bignore": "\u5FFD\u7565", "remind": "\u60A8\u5C07\u5728 {days} \u5929\u5F8C\u6536\u5230\u63D0\u9192\u3002", "bnever": "\u4E0D\u8981\u518D\u986F\u793A" };
  var custom_text = op["text_for_" + bb.n + "_in_" + op.ll] || op["text_for_" + bb.n] || op["text_" + op.llfull] || op["text_in_" + op.ll] || op["text_" + op.ll] || op.text;
  t = ta = t[op.llfull] || t[op.ll] || t.en;
  if (custom_text) {
    if (typeof custom_text === "string")
      t = ta = custom_text;
    else {
      for (var i in custom_text) {
        ta[i] = custom_text[i];
      }
    }
  }
  if (op.browser.is_insecure && ta.insecure) {
    ta.msg = ta.insecure;
  }
  if (ta.msg)
    t = '<b class="buorg-mainmsg">' + t.msg + '</b> <span class="buorg-moremsg">' + t.msgmore + '</span> <span class="buorg-buttons"><a{up_but}>' + t.bupdate + "</a> <a{ignore_but}>" + t.bignore + "</a></span>";
  var tar = "";
  if (op.newwindow)
    tar = ' target="_blank" rel="noopener"';
  var div = op.div = document.createElement("div");
  div.id = div.className = "buorg";
  var style = "<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/static/img/small/" + bb.n + ".png);}</style>";
  var style2 = "<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}.buorg-pad { padding: 9px;  line-height: 1.7em; }.buorg-buttons { display: block; text-align: center; }#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}#buorgig { background-color: #edbc68;}@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>";
  if (ta.msg && (op.ll == "ar" || op.ll == "he" || op.ll == "fa"))
    style2 += "<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>";
  if (!ta.msg && t.indexOf && t.indexOf("%s") !== -1) {
    t = busprintf(t, bb.t, ' id="buorgul" href="' + op.url + '"' + tar);
    style += "<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}.buorg div { padding:5px 36px 5px 40px; }.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}#buorga{display:block;}@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>";
    div.innerHTML = "<div>" + t + '<div id="buorgclose"><a id="buorga">&times;</a></div></div>' + style;
    op.addmargin = true;
  } else {
    if (op.style === "bottom") {
      style2 += "<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>";
    } else if (op.style === "corner") {
      style2 += "<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>";
    } else {
      op.addmargin = true;
    }
    t = t.replace("{brow_name}", bb.t).replace("{up_but}", ' id="buorgul" href="' + op.url + '"' + tar).replace("{ignore_but}", ' id="buorgig" role="button" tabindex="0"');
    div.innerHTML = '<div class="buorg-pad" role="status" aria-live="polite"><span class="buorg-icon"> </span>' + t + "</div>" + style + style2;
  }
  op.text = t;
  if (op.container) {
    op.container.appendChild(div);
    op.addmargin = false;
  } else
    document.body.insertBefore(div, document.body.firstChild);
  var updatebutton = document.getElementById("buorgul");
  if (updatebutton) {
    updatebutton.onclick = function(e2) {
      div.onclick = null;
      op.onclick(op);
      if (op.noclose)
        return;
      op.setCookie(op.reminderClosed);
      if (!op.noclose) {
        div.style.display = "none";
        if (op.addmargin && op.shift_page_down !== false)
          hm.style.marginTop = op.bodymt;
      }
    };
  }
  if (!custom_text) {
    div.style.cursor = "pointer";
    div.onclick = function() {
      if (op.newwindow)
        window.open(op.url, "_blank");
      else
        window.location.href = op.url;
      op.setCookie(op.reminderClosed);
      op.onclick(op);
    };
  }
  if (op.addmargin && op.shift_page_down !== false) {
    var hm = document.getElementsByTagName("html")[0] || document.body;
    op.bodymt = hm.style.marginTop;
    hm.style.marginTop = div.clientHeight + "px";
  }
  var ignorebutton = document.getElementById("buorga") || document.getElementById("buorgig");
  if (ignorebutton) {
    ignorebutton.onclick = function(e2) {
      div.onclick = null;
      op.onclose(op);
      if (op.addmargin && op.shift_page_down !== false)
        hm.style.marginTop = op.bodymt;
      op.setCookie(op.reminderClosed);
      if (!op.no_permanent_hide && ta.bnever && ta.remind) {
        op.div.innerHTML = '<div class="buorg-pad"><span class="buorg-moremsg">' + (op.reminderClosed > 24 ? ta.remind.replace("{days}", Math.round(op.reminderClosed / 24)) : "") + '</span> <span class="buorg-buttons"><a id="buorgpermanent" role="button" tabindex="0" href="' + op.url_permanent_hide + '"' + tar + ">" + ta.bnever + "</a></span></div>" + style + style2;
        div.className = "buorg buorg-fadeout";
        document.getElementById("buorgpermanent").onclick = function(e3) {
          op.setCookie(24 * 365);
          op.div.style.display = "none";
        };
        op.div.style.opacity = 0;
        op.div.style.visibility = "hidden";
        return false;
      }
      op.div.style.display = "none";
      return false;
    };
    if (op.noclose || op.reminderClosed == 0) {
      ignorebutton.parentNode.removeChild(ignorebutton);
    }
  }
  op.onshow(op);
  if (op.test && !op.dont_show_debuginfo) {
    var e = document.createElement("script");
    e.src = op.domain + "/update.test.js";
    document.body.appendChild(e);
  }
};


/***/ }),

/***/ "../../node_modules/matchmedia-polyfill/matchMedia.js":
/*!************************************************************!*\
  !*** ../../node_modules/matchmedia-polyfill/matchMedia.js ***!
  \************************************************************/
/***/ (() => {

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license */
window.matchMedia || (window.matchMedia = function() {
  "use strict";
  var styleMedia = window.styleMedia || window.media;
  if (!styleMedia) {
    var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
    style.type = "text/css";
    style.id = "matchmediajs-test";
    if (!script) {
      document.head.appendChild(style);
    } else {
      script.parentNode.insertBefore(style, script);
    }
    info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
    styleMedia = {
      matchMedium: function(media) {
        var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }
        return info.width === "1px";
      }
    };
  }
  return function(media) {
    return {
      matches: styleMedia.matchMedium(media || "all"),
      media: media || "all"
    };
  };
}());


/***/ }),

/***/ "../../node_modules/queue-microtask/index.js":
/*!***************************************************!*\
  !*** ../../node_modules/queue-microtask/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise;
module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : __webpack_require__.g) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
  throw err;
}, 0));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./polyfill.ts ***!
  \*********************/
/* harmony import */ var matchmedia_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matchmedia-polyfill */ "../../node_modules/matchmedia-polyfill/matchMedia.js");
/* harmony import */ var matchmedia_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matchmedia_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browser_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-update */ "../../node_modules/browser-update/update.npm.full.js");
/* harmony import */ var browser_update__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_update__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! queue-microtask */ "../../node_modules/queue-microtask/index.js");
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(queue_microtask__WEBPACK_IMPORTED_MODULE_2__);



window.queueMicrotask = (queue_microtask__WEBPACK_IMPORTED_MODULE_2___default());
browser_update__WEBPACK_IMPORTED_MODULE_1___default()({
  required: {
    e: -10,
    f: -10,
    o: -3,
    s: -1,
    c: -10
  },
  insecure: true,
  api: 2022.03
});
if (window.MediaQueryList) {
  MediaQueryList.prototype.addEventListener = (k, listener) => {
    MediaQueryList.prototype.addListener(listener);
  };
}
if (!(window.matchMedia("all").addListener || window.matchMedia("all").addEventListener)) {
  const localMatchMedia = window.matchMedia;
  const hasMediaQueries = localMatchMedia("only all").matches;
  let isListening = false;
  let timeoutID;
  const queries = [];
  const handleChange = function() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      for (let i = 0, il = queries.length; i < il; i++) {
        const { mql } = queries[i];
        const listeners = queries[i].listeners || [];
        const { matches } = localMatchMedia(mql.media);
        if (matches !== mql.matches) {
          mql.matches = matches;
          for (let j = 0, jl = listeners.length; j < jl; j++) {
            listeners[j].call(window, mql);
          }
        }
      }
    }, 30);
  };
  window.matchMedia = function(media) {
    const mql = localMatchMedia(media);
    const listeners = [];
    let index = 0;
    if (!mql.addListener) {
      mql.addListener = function(listener) {
        if (!hasMediaQueries)
          return;
        if (!isListening) {
          isListening = true;
          window.addEventListener("resize", handleChange, true);
        }
        if (index === 0) {
          index = queries.push({
            mql,
            listeners
          });
        }
        listeners.push(listener);
      };
      mql.removeListener = function(listener) {
        for (let i = 0, il = listeners.length; i < il; i++) {
          if (listeners[i] === listener) {
            listeners.splice(i, 1);
            i--;
          }
        }
      };
    }
    if (!mql.addEventListener) {
      mql.addEventListener = (k, listener) => mql.addListener(listener);
      mql.removeEventListener = (k, listener) => mql.removeListener(listener);
    }
    return mql;
  };
}

})();

/******/ })()
;