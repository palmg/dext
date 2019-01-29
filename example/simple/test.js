!function (o, i) {
    "use strict";
    var s = "model", a = "name", u = "type", c = "vendor", l = "version", f = "mobile", p = "tablet", d = {
        extend: function (e, t) {
            var n = {};
            for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
            return n
        }, has: function (e, t) {
            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
        }, lowerize: function (e) {
            return e.toLowerCase()
        }, major: function (e) {
            return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
        }, trim: function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
    }, h = {
        rgx: function (e, t) {
            for (var n, r, o, i, s, a, u = 0; u < t.length && !s;) {
                var c = t[u], l = t[u + 1];
                for (n = r = 0; n < c.length && !s;) if (s = c[n++].exec(e)) for (o = 0; o < l.length; o++) a = s[++r], "object" == typeof (i = l[o]) && i.length > 0 ? 2 == i.length ? "function" == typeof i[1] ? this[i[0]] = i[1].call(this, a) : this[i[0]] = i[1] : 3 == i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = a ? a.replace(i[1], i[2]) : void 0 : this[i[0]] = a ? i[1].call(this, a, i[2]) : void 0 : 4 == i.length && (this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : void 0) : this[i] = a || void 0;
                u += 2
            }
        }, str: function (e, t) {
            for (var n in t) if ("object" == typeof t[n] && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++) if (d.has(t[n][r], e)) return "?" === n ? void 0 : n
            } else if (d.has(t[n], e)) return "?" === n ? void 0 : n;
            return e
        }
    }, m = {
        browser: {
            oldsafari: {
                version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            amazon: {model: {"Fire Phone": ["SD", "KF"]}},
            sprint: {model: {"Evo Shift 4G": "7373KT"}, vendor: {HTC: "APA", Sprint: "Sprint"}}
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
            }
        }
    }, v = {
        browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [a, l], [/(opios)[\/\s]+([\w\.]+)/i], [[a, "Opera Mini"], l], [/\s(opr)\/([\w\.]+)/i], [[a, "Opera"], l], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [a, l], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[a, "IE"], l], [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i], [[a, "Edge"], l], [/(yabrowser)\/([\w\.]+)/i], [[a, "Yandex"], l], [/(puffin)\/([\w\.]+)/i], [[a, "Puffin"], l], [/(focus)\/([\w\.]+)/i], [[a, "Firefox Focus"], l], [/(opt)\/([\w\.]+)/i], [[a, "Opera Touch"], l], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[a, "UCBrowser"], l], [/(comodo_dragon)\/([\w\.]+)/i], [[a, /_/g, " "], l], [/(micromessenger)\/([\w\.]+)/i], [[a, "WeChat"], l], [/(brave)\/([\w\.]+)/i], [[a, "Brave"], l], [/(qqbrowserlite)\/([\w\.]+)/i], [a, l], [/(QQ)\/([\d\.]+)/i], [a, l], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [a, l], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [a, l], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [a, l], [/(MetaSr)[\/\s]?([\w\.]+)/i], [a], [/(LBBROWSER)/i], [a], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [l, [a, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [l, [a, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [a, l], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [l, [a, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[a, /(.+)/, "$1 WebView"], l], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[a, /(.+(?:g|us))(.+)/, "$1 $2"], l], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [l, [a, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [a, l], [/(dolfin)\/([\w\.]+)/i], [[a, "Dolphin"], l], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[a, "Chrome"], l], [/(coast)\/([\w\.]+)/i], [[a, "Opera Coast"], l], [/fxios\/([\w\.-]+)/i], [l, [a, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [l, [a, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [l, a], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[a, "GSA"], l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [a, [l, h.str, m.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [a, l], [/(navigator|netscape)\/([\w\.-]+)/i], [[a, "Netscape"], l], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [a, l]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", d.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", d.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", d.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [s, c, [u, p]], [/applecoremedia\/[\w\.]+ \((ipad)/], [s, [c, "Apple"], [u, p]], [/(apple\s{0,1}tv)/i], [[s, "Apple TV"], [c, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [c, s, [u, p]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [s, [c, "Amazon"], [u, p]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[s, h.str, m.device.amazon.model], [c, "Amazon"], [u, f]], [/android.+aft([bms])\sbuild/i], [s, [c, "Amazon"], [u, "smarttv"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [s, c, [u, f]], [/\((ip[honed|\s\w*]+);/i], [s, [c, "Apple"], [u, f]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [c, s, [u, f]], [/\(bb10;\s(\w+)/i], [s, [c, "BlackBerry"], [u, f]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [s, [c, "Asus"], [u, p]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[c, "Sony"], [s, "Xperia Tablet"], [u, p]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [s, [c, "Sony"], [u, f]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [c, s, [u, "console"]], [/android.+;\s(shield)\sbuild/i], [s, [c, "Nvidia"], [u, "console"]], [/(playstation\s[34portablevi]+)/i], [s, [c, "Sony"], [u, "console"]], [/(sprint\s(\w+))/i], [[c, h.str, m.device.sprint.vendor], [s, h.str, m.device.sprint.model], [u, f]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [c, s, [u, p]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [c, [s, /_/g, " "], [u, f]], [/(nexus\s9)/i], [s, [c, "HTC"], [u, p]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [s, [c, "Huawei"], [u, f]], [/(microsoft);\s(lumia[\s\w]+)/i], [c, s, [u, f]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [s, [c, "Microsoft"], [u, "console"]], [/(kin\.[onetw]{3})/i], [[s, /\./g, " "], [c, "Microsoft"], [u, f]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [s, [c, "Motorola"], [u, f]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [s, [c, "Motorola"], [u, p]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[c, d.trim], [s, d.trim], [u, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[s, /^/, "SmartTV"], [c, "Samsung"], [u, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [s, [c, "Sharp"], [u, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[c, "Samsung"], s, [u, p]], [/smart-tv.+(samsung)/i], [c, [u, "smarttv"], s], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[c, "Samsung"], s, [u, f]], [/sie-(\w*)/i], [s, [c, "Siemens"], [u, f]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[c, "Nokia"], s, [u, f]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [s, [c, "Acer"], [u, p]], [/android.+([vl]k\-?\d{3})\s+build/i], [s, [c, "LG"], [u, p]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[c, "LG"], s, [u, p]], [/(lg) netcast\.tv/i], [c, s, [u, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [s, [c, "LG"], [u, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [s, [c, "Lenovo"], [u, p]], [/linux;.+((jolla));/i], [c, s, [u, f]], [/((pebble))app\/[\d\.]+\s/i], [c, s, [u, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [c, s, [u, f]], [/crkey/i], [[s, "Chromecast"], [c, "Google"]], [/android.+;\s(glass)\s\d/i], [s, [c, "Google"], [u, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [s, [c, "Google"], [u, p]], [/android.+;\s(pixel( [23])?( xl)?)\s/i], [s, [c, "Google"], [u, f]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[s, /_/g, " "], [c, "Xiaomi"], [u, f]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[s, /_/g, " "], [c, "Xiaomi"], [u, p]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [s, [c, "Meizu"], [u, p]], [/(mz)-([\w-]{2,})/i], [[c, "Meizu"], s, [u, f]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [s, [c, "OnePlus"], [u, f]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [s, [c, "RCA"], [u, p]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [s, [c, "Dell"], [u, p]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [s, [c, "Verizon"], [u, p]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[c, "Barnes & Noble"], s, [u, p]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [s, [c, "NuVision"], [u, p]], [/android.+;\s(k88)\sbuild/i], [s, [c, "ZTE"], [u, p]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [s, [c, "Swiss"], [u, f]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [s, [c, "Swiss"], [u, p]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [s, [c, "Zeki"], [u, p]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[c, "Dragon Touch"], s, [u, p]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [s, [c, "Insignia"], [u, p]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [s, [c, "NextBook"], [u, p]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[c, "Voice"], s, [u, f]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[c, "LvTel"], s, [u, f]], [/android.+;\s(PH-1)\s/i], [s, [c, "Essential"], [u, f]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [s, [c, "Envizen"], [u, p]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [c, s, [u, p]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [s, [c, "MachSpeed"], [u, p]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [c, s, [u, p]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [s, [c, "Rotor"], [u, p]], [/android.+(KS(.+))\s+build/i], [s, [c, "Amazon"], [u, p]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [c, s, [u, p]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[u, d.lowerize], c, s], [/(android[\w\.\s\-]{0,9});.+build/i], [s, [c, "Generic"]]],
        engine: [[/windows.+\sedge\/([\w\.]+)/i], [l, [a, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [a, l], [/rv\:([\w\.]{1,9}).+(gecko)/i], [l, a]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [a, l], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [a, [l, h.str, m.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[a, "Windows"], [l, h.str, m.os.windows.version]], [/\((bb)(10);/i], [[a, "BlackBerry"], l], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [a, l], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[a, "Symbian"], l], [/\((series40);/i], [a], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[a, "Firefox OS"], l], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [a, l], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[a, "Chromium OS"], l], [/(sunos)\s?([\w\.\d]*)/i], [[a, "Solaris"], l], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [a, l], [/(haiku)\s(\w+)/i], [a, l], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[l, /_/g, "."], [a, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[a, "Mac OS"], [l, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [a, l]]
    }, y = function (e, t) {
        if ("object" == typeof e && (t = e, e = void 0), !(this instanceof y)) return new y(e, t).getResult();
        var n = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
            r = t ? d.extend(v, t) : v;
        return this.getBrowser = function () {
            var e = {name: void 0, version: void 0};
            return h.rgx.call(e, n, r.browser), e.major = d.major(e.version), e
        }, this.getCPU = function () {
            var e = {architecture: void 0};
            return h.rgx.call(e, n, r.cpu), e
        }, this.getDevice = function () {
            var e = {vendor: void 0, model: void 0, type: void 0};
            return h.rgx.call(e, n, r.device), e
        }, this.getEngine = function () {
            var e = {name: void 0, version: void 0};
            return h.rgx.call(e, n, r.engine), e
        }, this.getOS = function () {
            var e = {name: void 0, version: void 0};
            return h.rgx.call(e, n, r.os), e
        }, this.getResult = function () {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        }, this.getUA = function () {
            return n
        }, this.setUA = function (e) {
            return n = e, this
        }, this
    };
    y.VERSION = "0.7.19", y.BROWSER = {
        NAME: a,
        MAJOR: "major",
        VERSION: l
    }, y.CPU = {ARCHITECTURE: "architecture"}, y.DEVICE = {
        MODEL: s,
        VENDOR: c,
        TYPE: u,
        CONSOLE: "console",
        MOBILE: f,
        SMARTTV: "smarttv",
        TABLET: p,
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, y.ENGINE = {NAME: a, VERSION: l}, y.OS = {
        NAME: a,
        VERSION: l
    }, void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = y), t.UAParser = y) : n(89) ? void 0 === (r = function () {
        return y
    }.call(t, n, t, e)) || (e.exports = r) : o && (o.UAParser = y);
    var w = o && (o.jQuery || o.Zepto);
    if (void 0 !== w && !w.ua) {
        var b = new y;
        w.ua = b.getResult(), w.ua.get = function () {
            return b.getUA()
        }, w.ua.set = function (e) {
            b.setUA(e);
            var t = b.getResult();
            for (var n in t) w.ua[n] = t[n]
        }
    }
}("object" == typeof window ? window : this)
},
44
:

function (e, t, n) {
    "use strict";
    var r = n(0), o = n.n(r);
    t.a = function (e) {
        return o.a.createElement("div", null, o.a.createElement("p", null, "数据加载中......"))
    }
}

,
6
:

function (e, t, n) {
    "use strict";
    var r = n(1), o = n.n(r), i = n(0), s = n.n(i), a = n(20), u = n.n(a), c = n(3), l = n(22), f = n(21);

    function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(e, t, n, r, o, i, s) {
        try {
            var a = e[i](s), u = a.value
        } catch (e) {
            return void n(e)
        }
        a.done ? t(u) : Promise.resolve(u).then(r, o)
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t) {
        return !t || "object" !== p(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    var w = function (e) {
        function t() {
            var e;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return m(this, (e = v(t)).call.apply(e, [this].concat(r)))
        }

        var n, r, i;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(t, u.a), n = t, r = [{
            key: "render", value: function () {
                var e = this.props, t = e.appProps, n = e.compProps, r = e.Component, o = e.pageProps;
                return s.a.createElement(c.b, {value: {appProps: t, compProps: n}}, s.a.createElement(r, o))
            }
        }], i = [{
            key: "getInitialProps", value: function () {
                var e, t = (e = o.a.mark(function e(t) {
                    var n, r, i, s, a, u, c;
                    return o.a.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.Component, t.router, r = t.ctx, i = {}, s = {}, a = {}, !(u = Object(f.b)(n, r))) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 6, u(r);
                            case 6:
                                c = e.sent, a = c.compProps, i = c.pageProps;
                            case 9:
                                if (!r || r.req) {
                                    e.next = 13;
                                    break
                                }
                                s = window.__NEXT_DATA__.props.appProps, e.next = 16;
                                break;
                            case 13:
                                return e.next = 15, Object(l.b)(r);
                            case 15:
                                s = e.sent;
                            case 16:
                                return e.abrupt("return", {pageProps: i, appProps: s, compProps: a});
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                }), function () {
                    var t = this, n = arguments;
                    return new Promise(function (r, o) {
                        var i = e.apply(t, n);

                        function s(e) {
                            d(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            d(i, r, o, s, a, "throw", e)
                        }

                        s(void 0)
                    })
                });
                return function (e) {
                    return t.apply(this, arguments)
                }
            }()
        }], r && h(n.prototype, r), i && h(n, i), t
    }(), b = n(41), g = n.n(b);
    n(11), n(43);
    var _ = n(16), k = n.n(_), x = function (e) {
        return e.match(/^\S+\?\S+$/) ? "".concat(e, "&route-tag=").concat("establish") : "".concat(e, "?route-tag=").concat("establish")
    }, S = function (e) {
        return !!e.match(/^\S+route-tag=\S+$/)
    };

    function E(e) {
        return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function P(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function C(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    var A = function (e) {
        var t = function (t) {
            function n() {
                var e, t, r, o;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                return r = this, o = (e = T(n)).call.apply(e, [this].concat(s)), t = !o || "object" !== E(o) && "function" != typeof o ? C(r) : o, j(C(C(t)), "state", {
                    pageRoute: !1,
                    localRoute: !1
                }), j(C(C(t)), "routeChangeStart", function (e) {
                    var n = S(e);
                    t.setState({pageRoute: !n, localRoute: n})
                }), j(C(C(t)), "routeChangeComplete", function (e) {
                    t.setState({pageRoute: !1, localRoute: !1})
                }), t
            }

            var r, o, i;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(n, s.a.Component), r = n, (o = [{
                key: "componentDidMount", value: function () {
                    var e = k.a.events;
                    e.on("routeChangeStart", this.routeChangeStart), e.on("routeChangeComplete", this.routeChangeComplete)
                }
            }, {
                key: "render", value: function () {
                    var t = this.props.router.pathname, n = this.state, r = Object.assign({
                        route: {
                            pathname: t,
                            isPageRoute: n.pageRoute,
                            isLocalRoute: n.localRoute,
                            sign: x
                        }
                    }, this.props);
                    return delete r.router, s.a.createElement(e, r)
                }
            }]) && P(r.prototype, o), i && P(r, i), n
        }();
        return Object(_.withRouter)(t)
    }, R = n(23), N = n.n(R), M = function (e) {
        var t = x(e.href), n = Object.assign({}, e, {href: t});
        return s.a.createElement(N.a, n)
    }, D = function (e) {
        return s.a.createElement(N.a, e)
    };
    n.d(t, "b", function () {
        return w
    }), n.d(t, "d", function () {
        return g.a
    }), n.d(t, "c", function () {
        return a.Container
    }), n.d(t, "f", function () {
        return A
    }), n.d(t, "e", function () {
        return M
    }), n.d(t, "a", function () {
        return D
    })
}

,
65
:

function (e, t, n) {
    "use strict";
    var r = n(17), o = n(5);
    Object.defineProperty(t, "__esModule", {value: !0}), t.createUrl = _, t.Container = t.default = void 0;
    var i = o(n(51)), s = o(n(52)), a = o(n(66)), u = o(n(7)), c = o(n(8)), l = o(n(12)), f = o(n(13)), p = o(n(14)),
        d = o(n(10)), h = r(n(0)), m = o(n(19)), v = n(26), y = n(31), w = function (e) {
            function t() {
                return (0, u.default)(this, t), (0, l.default)(this, (0, f.default)(t).apply(this, arguments))
            }

            var n;
            return (0, p.default)(t, e), (0, c.default)(t, [{
                key: "getChildContext", value: function () {
                    return {headManager: this.props.headManager, router: (0, y.makePublicRouterInstance)(this.props.router)}
                }
            }, {
                key: "componentDidCatch", value: function (e) {
                    throw e
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.router, n = e.Component, r = e.pageProps, o = _(t);
                    return h.default.createElement(b, null, h.default.createElement(n, (0, a.default)({}, r, {url: o})))
                }
            }], [{
                key: "getInitialProps", value: (n = (0, s.default)(i.default.mark(function e(t) {
                    var n, r, o;
                    return i.default.wrap(function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.Component, t.router, r = t.ctx, e.next = 3, (0, v.loadGetInitialProps)(n, r);
                            case 3:
                                return o = e.sent, e.abrupt("return", {pageProps: o});
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }, e, this)
                })), function (e) {
                    return n.apply(this, arguments)
                })
            }]), t
        }(h.Component);
    t.default = w, (0, d.default)(w, "childContextTypes", {headManager: m.default.object, router: m.default.object});
    var b = function (e) {
        function t() {
            return (0, u.default)(this, t), (0, l.default)(this, (0, f.default)(t).apply(this, arguments))
        }

        return (0, p.default)(t, e), (0, c.default)(t, [{
            key: "componentDidMount", value: function () {
                this.scrollToHash()
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.scrollToHash()
            }
        }, {
            key: "scrollToHash", value: function () {
                var e = window.location.hash;
                if (e = !!e && e.substring(1)) {
                    var t = document.getElementById(e);
                    t && setTimeout(function () {
                        return t.scrollIntoView()
                    }, 0)
                }
            }
        }, {
            key: "render", value: function () {
                return this.props.children
            }
        }]), t
    }(h.Component);
    t.Container = b;
    var g = (0, v.execOnce)(function () {
        0
    });

    function _(e) {
        var t = e.pathname, n = e.asPath, r = e.query;
        return {
            get query() {
                return g(), r
            }, get pathname() {
                return g(), t
            }, get asPath() {
                return g(), n
            }, back: function () {
                g(), e.back()
            }, push: function (t, n) {
                return g(), e.push(t, n)
            }, pushTo: function (t, n) {
                g();
                var r = n ? t : null, o = n || t;
                return e.push(r, o)
            }, replace: function (t, n) {
                return g(), e.replace(t, n)
            }, replaceTo: function (t, n) {
                g();
                var r = n ? t : null, o = n || t;
                return e.replace(r, o)
            }
        }
    }
}

,
66
:

function (e, t, n) {
    var r = n(64);

    function o() {
        return e.exports = o = r || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, o.apply(this, arguments)
    }

    e.exports = o
}

,
67
:

function (e, t, n) {
    "use strict";
    var r = n(5);
    Object.defineProperty(t, "__esModule", {value: !0}), t.defaultHead = v, t.default = void 0;
    var o = r(n(39)), i = r(n(7)), s = r(n(8)), a = r(n(12)), u = r(n(13)), c = r(n(14)), l = r(n(10)), f = r(n(0)),
        p = r(n(19)), d = r(n(68)), h = function (e) {
            function t() {
                return (0, i.default)(this, t), (0, a.default)(this, (0, u.default)(t).apply(this, arguments))
            }

            return (0, c.default)(t, e), (0, s.default)(t, [{
                key: "render", value: function () {
                    return null
                }
            }]), t
        }(f.default.Component);
    (0, l.default)(h, "contextTypes", {headManager: p.default.object});
    var m = "next-head";

    function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
        return [f.default.createElement("meta", {key: "charSet", charSet: "utf-8", className: e})]
    }

    var y = ["name", "httpEquiv", "charSet", "itemProp", "property"],
        w = ["article:tag", "og:image", "og:image:alt", "og:image:width", "og:image:height", "og:image:type", "og:image:secure_url", "og:image:url"];
    var b = (0, d.default)(function (e) {
        return e.map(function (e) {
            return f.default.Children.toArray(e.props.children)
        }).reduce(function (e, t) {
            return e.concat(t)
        }, []).reduce(function (e, t) {
            return f.default.Fragment && t.type === f.default.Fragment ? e.concat(f.default.Children.toArray(t.props.children)) : e.concat(t)
        }, []).reverse().concat(v("")).filter(Boolean).filter((t = new o.default, n = new o.default, r = new o.default, i = {}, function (e) {
            if (e.key && 0 === e.key.indexOf(".$")) {
                if (t.has(e.key)) return !1;
                t.add(e.key)
            }
            switch (e.type) {
                case"title":
                case"base":
                    if (n.has(e.type)) return !1;
                    n.add(e.type);
                    break;
                case"meta":
                    for (var s = 0, a = y.length; s < a; s++) {
                        var u = y[s];
                        if (e.props.hasOwnProperty(u)) if ("charSet" === u) {
                            if (r.has(u)) return !1;
                            r.add(u)
                        } else {
                            var c = e.props[u], l = i[u] || new o.default;
                            if (l.has(c) && -1 === w.indexOf(c)) return !1;
                            l.add(c), i[u] = l
                        }
                    }
            }
            return !0
        })).reverse().map(function (e, t) {
            var n = (e.props && e.props.className ? e.props.className + " " : "") + m, r = e.key || t;
            return f.default.cloneElement(e, {key: r, className: n})
        });
        var t, n, r, i
    }, function (e) {
        this.context && this.context.headManager && this.context.headManager.updateHead(e)
    }, function (e) {
        return e
    })(h);
    t.default = b
}

,
68
:

function (e, t, n) {
    "use strict";
    var r = n(17), o = n(5);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, n) {
        if ("function" != typeof e) throw new Error("Expected reduceComponentsToState to be a function.");
        if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
        if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
        return function (r) {
            if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
            var o, v = new d.default;

            function y(r) {
                o = e((0, p.default)(v)), w.canUseDOM ? t.call(r, o) : n && (o = n(o))
            }

            var w = function (e) {
                function t(e) {
                    var n;
                    return (0, i.default)(this, t), n = (0, s.default)(this, (0, a.default)(t).call(this, e)), t.canUseDOM || (v.add((0, l.default)((0, l.default)(n))), y((0, l.default)((0, l.default)(n)))), n
                }

                return (0, c.default)(t, e), (0, u.default)(t, null, [{
                    key: "peek", value: function () {
                        return o
                    }
                }, {
                    key: "rewind", value: function () {
                        if (t.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                        var e = o;
                        return o = void 0, v.clear(), e
                    }
                }]), (0, u.default)(t, [{
                    key: "componentDidMount", value: function () {
                        v.add(this), y(this)
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                        y(this)
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        v.delete(this), y(this)
                    }
                }, {
                    key: "render", value: function () {
                        return h.default.createElement(r, null, this.props.children)
                    }
                }]), t
            }(h.Component);
            return (0, f.default)(w, "canUseDOM", "undefined" != typeof window), (0, f.default)(w, "contextTypes", r.contextTypes), (0, f.default)(w, "displayName", "SideEffect(".concat((0, m.getDisplayName)(r), ")")), w
        }
    };
    var i = o(n(7)), s = o(n(12)), a = o(n(13)), u = o(n(8)), c = o(n(14)), l = o(n(40)), f = o(n(10)), p = o(n(69)),
        d = o(n(39)), h = r(n(0)), m = n(26)
}

,
69
:

function (e, t, n) {
    var r = n(70), o = n(71), i = n(79);
    e.exports = function (e) {
        return r(e) || o(e) || i()
    }
}

,
70
:

function (e, t, n) {
    var r = n(63);
    e.exports = function (e) {
        if (r(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
    }
}

,
71
:

function (e, t, n) {
    var r = n(72), o = n(76);
    e.exports = function (e) {
        if (o(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return r(e)
    }
}

,
72
:

function (e, t, n) {
    e.exports = n(73)
}

,
73
:

function (e, t, n) {
    n(30), n(74), e.exports = n(2).Array.from
}

,
74
:

function (e, t, n) {
    "use strict";
    var r = n(28), o = n(9), i = n(36), s = n(98), a = n(99), u = n(50), c = n(75), l = n(62);
    o(o.S + o.F * !n(100)(function (e) {
        Array.from(e)
    }), "Array", {
        from: function (e) {
            var t, n, o, f, p = i(e), d = "function" == typeof this ? this : Array, h = arguments.length,
                m = h > 1 ? arguments[1] : void 0, v = void 0 !== m, y = 0, w = l(p);
            if (v && (m = r(m, h > 2 ? arguments[2] : void 0, 2)), null == w || d == Array && a(w)) for (n = new d(t = u(p.length)); t > y; y++) c(n, y, v ? m(p[y], y) : p[y]); else for (f = w.call(p), n = new d; !(o = f.next()).done; y++) c(n, y, v ? s(f, m, [o.value, y], !0) : o.value);
            return n.length = y, n
        }
    })
}

,
75
:

function (e, t, n) {
    "use strict";
    var r = n(25), o = n(47);
    e.exports = function (e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}

,
76
:

function (e, t, n) {
    e.exports = n(77)
}

,
77
:

function (e, t, n) {
    n(38), n(30), e.exports = n(78)
}

,
78
:

function (e, t, n) {
    var r = n(54), o = n(15)("iterator"), i = n(37);
    e.exports = n(2).isIterable = function (e) {
        var t = Object(e);
        return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t))
    }
}

,
79
:

function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}

,
80
:

function (e, t, n) {
    "use strict";
    var r = n(17), o = n(5);
    Object.defineProperty(t, "__esModule", {value: !0}), t.NextScript = t.Main = t.Head = t.default = void 0;
    var i = o(n(7)), s = o(n(8)), a = o(n(12)), u = o(n(13)), c = o(n(14)), l = o(n(10)), f = r(n(0)), p = o(n(19)),
        d = o(n(81)), h = o(n(82)), m = f.default.Fragment || function (e) {
            var t = e.children;
            return f.default.createElement("div", null, t)
        }, v = function (e) {
            function t() {
                return (0, i.default)(this, t), (0, a.default)(this, (0, u.default)(t).apply(this, arguments))
            }

            return (0, c.default)(t, e), (0, s.default)(t, [{
                key: "getChildContext", value: function () {
                    return {_documentProps: this.props}
                }
            }, {
                key: "render", value: function () {
                    return f.default.createElement("html", null, f.default.createElement(y, null), f.default.createElement("body", null, f.default.createElement(w, null), f.default.createElement(b, null)))
                }
            }], [{
                key: "getInitialProps", value: function (e) {
                    var t = (0, e.renderPage)(), n = t.html, r = t.head, o = t.buildManifest;
                    return {html: n, head: r, styles: (0, h.default)(), buildManifest: o}
                }
            }]), t
        }(f.Component);
    t.default = v, (0, l.default)(v, "childContextTypes", {_documentProps: p.default.any});
    var y = function (e) {
        function t() {
            return (0, i.default)(this, t), (0, a.default)(this, (0, u.default)(t).apply(this, arguments))
        }

        return (0, c.default)(t, e), (0, s.default)(t, [{
            key: "getCssLinks", value: function () {
                var e = this, t = this.context._documentProps, n = t.assetPrefix, r = t.files;
                return r && 0 !== r.length ? r.map(function (t) {
                    return /\.css$/.exec(t) ? f.default.createElement("link", {
                        key: t,
                        nonce: e.props.nonce,
                        rel: "stylesheet",
                        href: "".concat(n, "/_next/").concat(t)
                    }) : null
                }) : null
            }
        }, {
            key: "getPreloadDynamicChunks", value: function () {
                var e = this, t = this.context._documentProps, n = t.dynamicImports, r = t.assetPrefix;
                return n.map(function (t) {
                    return f.default.createElement("link", {
                        rel: "preload",
                        key: t.file,
                        href: "".concat(r, "/_next/").concat(t.file),
                        as: "script",
                        nonce: e.props.nonce
                    })
                })
            }
        }, {
            key: "getPreloadMainLinks", value: function () {
                var e = this, t = this.context._documentProps, n = t.assetPrefix, r = t.files;
                return r && 0 !== r.length ? r.map(function (t) {
                    return /\.js$/.exec(t) ? f.default.createElement("link", {
                        key: t,
                        nonce: e.props.nonce,
                        rel: "preload",
                        href: "".concat(n, "/_next/").concat(t),
                        as: "script"
                    }) : null
                }) : null
            }
        }, {
            key: "render", value: function () {
                var e = this.context._documentProps, t = e.head, n = e.styles, r = e.assetPrefix, o = e.__NEXT_DATA__,
                    i = o.page, s = o.buildId, a = g(i), u = this.props.children;
                return f.default.createElement("head", this.props, t, "/_error" !== i && f.default.createElement("link", {
                    rel: "preload",
                    href: "".concat(r, "/_next/static/").concat(s, "/pages").concat(a),
                    as: "script",
                    nonce: this.props.nonce
                }), f.default.createElement("link", {
                    rel: "preload",
                    href: "".concat(r, "/_next/static/").concat(s, "/pages/_app.js"),
                    as: "script",
                    nonce: this.props.nonce
                }), f.default.createElement("link", {
                    rel: "preload",
                    href: "".concat(r, "/_next/static/").concat(s, "/pages/_error.js"),
                    as: "script",
                    nonce: this.props.nonce
                }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.getCssLinks(), n || null, u)
            }
        }]), t
    }(f.Component);
    t.Head = y, (0, l.default)(y, "contextTypes", {_documentProps: p.default.any}), (0, l.default)(y, "propTypes", {nonce: p.default.string});
    var w = function (e) {
        function t() {
            return (0, i.default)(this, t), (0, a.default)(this, (0, u.default)(t).apply(this, arguments))
        }

        return (0, c.default)(t, e), (0, s.default)(t, [{
            key: "render", value: function () {
                var e = this.context._documentProps.html;
                return f.default.createElement("div", {id: "__next", dangerouslySetInnerHTML: {__html: e}})
            }
        }]), t
    }(f.Component);
    t.Main = w, (0, l.default)(w, "contextTypes", {_documentProps: p.default.any});
    var b = function (e) {
        function t() {
            return (0, i.default)(this, t), (0, a.default)(this, (0, u.default)(t).apply(this, arguments))
        }

        return (0, c.default)(t, e), (0, s.default)(t, [{
            key: "getDynamicChunks", value: function () {
                var e = this, t = this.context._documentProps, n = t.dynamicImports, r = t.assetPrefix;
                return n.map(function (t) {
                    return f.default.createElement("script", {
                        async: !0,
                        key: t.file,
                        src: "".concat(r, "/_next/").concat(t.file),
                        nonce: e.props.nonce
                    })
                })
            }
        }, {
            key: "getScripts", value: function () {
                var e = this, t = this.context._documentProps, n = t.assetPrefix, r = t.files;
                return r && 0 !== r.length ? r.map(function (t) {
                    return /\.js$/.exec(t) ? f.default.createElement("script", {
                        key: t,
                        src: "".concat(n, "/_next/").concat(t),
                        nonce: e.props.nonce,
                        async: !0
                    }) : null
                }) : null
            }
        }, {
            key: "render", value: function () {
                var e = this, n = this.context._documentProps, r = n.staticMarkup, o = n.assetPrefix, i = n.devFiles,
                    s = n.__NEXT_DATA__, a = s.page, u = s.buildId, c = g(a);
                return f.default.createElement(m, null, i ? i.map(function (t) {
                    return f.default.createElement("script", {
                        key: t,
                        src: "".concat(o, "/_next/").concat(t),
                        nonce: e.props.nonce
                    })
                }) : null, r ? null : f.default.createElement("script", {
                    nonce: this.props.nonce,
                    dangerouslySetInnerHTML: {__html: t.getInlineScriptSource(this.context._documentProps)}
                }), "/_error" !== a && f.default.createElement("script", {
                    async: !0,
                    id: "__NEXT_PAGE__".concat(a),
                    src: "".concat(o, "/_next/static/").concat(u, "/pages").concat(c),
                    nonce: this.props.nonce
                }), f.default.createElement("script", {
                    async: !0,
                    id: "__NEXT_PAGE__/_app",
                    src: "".concat(o, "/_next/static/").concat(u, "/pages/_app.js"),
                    nonce: this.props.nonce
                }), f.default.createElement("script", {
                    async: !0,
                    id: "__NEXT_PAGE__/_error",
                    src: "".concat(o, "/_next/static/").concat(u, "/pages/_error.js"),
                    nonce: this.props.nonce
                }), r ? null : this.getDynamicChunks(), r ? null : this.getScripts())
            }
        }], [{
            key: "getInlineScriptSource", value: function (e) {
                var t = e.__NEXT_DATA__;
                t.page;
                return "__NEXT_DATA__ = ".concat((0, d.default)(t), ";__NEXT_LOADED_PAGES__=[];__NEXT_REGISTER_PAGE=function(r,f){__NEXT_LOADED_PAGES__.push([r, f])}")
            }
        }]), t
    }(f.Component);

    function g(e) {
        return "/" === e ? "/index.js" : "".concat(e, ".js")
    }

    t.NextScript = b, (0, l.default)(b, "contextTypes", {_documentProps: p.default.any}), (0, l.default)(b, "propTypes", {nonce: p.default.string})
}

,
81
:

function (e, t, n) {
    "use strict";
    var r = {"&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029"},
        o = /[&><\u2028\u2029]/g;

    function i(e) {
        return r[e]
    }

    e.exports = function (e) {
        return JSON.stringify(e).replace(o, i)
    };
    var s = {"\u2028": "\\u2028", "\u2029": "\\u2029"}, a = /[\u2028\u2029]/g;

    function u(e) {
        return s[e]
    }

    e.exports.sanitize = function (e) {
        return e.replace(a, u)
    }
}

,
82
:

function (e, t, n) {
    e.exports = n(83)
}

,
83
:

function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, s.flush)().map(function (t) {
            var n = t[0], r = t[1];
            return i.default.createElement("style", {
                id: "__" + n,
                key: "__" + n,
                nonce: e.nonce ? e.nonce : void 0,
                dangerouslySetInnerHTML: {__html: r}
            })
        })
    }, t.flushToHTML = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, s.flush)().reduce(function (t, n) {
            var r = n[0], o = n[1];
            return t += '<style id="__' + r + '"' + (e.nonce ? ' nonce="' + e.nonce + '"' : "") + ">" + o + "</style>"
        }, "")
    };
    var r, o = n(0), i = (r = o) && r.__esModule ? r : {default: r}, s = n(84)
}

,
84
:

function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    t.flush = function () {
        var e = a.cssRules();
        return a.flush(), e
    };
    var o, i = n(0), s = n(85);
    var a = new ((o = s) && o.__esModule ? o : {default: o}).default, u = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.prevProps = {}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.Component), r(t, [{
            key: "shouldComponentUpdate", value: function (e) {
                return this.props.styleId !== e.styleId || String(this.props.dynamic) !== String(e.dynamic)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                a.remove(this.props)
            }
        }, {
            key: "render", value: function () {
                return this.shouldComponentUpdate(this.prevProps) && (this.prevProps.styleId && a.remove(this.prevProps), a.add(this.props), this.prevProps = this.props), null
            }
        }], [{
            key: "dynamic", value: function (e) {
                return e.map(function (e) {
                    var t = e[0], n = e[1];
                    return a.computeId(t, n)
                }).join(" ")
            }
        }]), t
    }();
    t.default = u
}

,
85
:

function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), o = s(n(86)), i = s(n(87));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var a = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.styleSheet,
                r = void 0 === n ? null : n, o = t.optimizeForSpeed, s = void 0 !== o && o, a = t.isBrowser,
                u = void 0 === a ? "undefined" != typeof window : a;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._sheet = r || new i.default({
                name: "styled-jsx",
                optimizeForSpeed: s
            }), this._sheet.inject(), r && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser = u, this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
        }

        return r(e, [{
            key: "add", value: function (e) {
                var t = this;
                void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.css), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                    return e[t] = 0, e
                }, {}));
                var n = this.getIdAndRules(e), r = n.styleId, o = n.rules;
                if (r in this._instancesCounts) this._instancesCounts[r] += 1; else {
                    var i = o.map(function (e) {
                        return t._sheet.insertRule(e)
                    }).filter(function (e) {
                        return -1 !== e
                    });
                    this._indices[r] = i, this._instancesCounts[r] = 1
                }
            }
        }, {
            key: "remove", value: function (e) {
                var t = this, n = this.getIdAndRules(e).styleId;
                if (function (e, t) {
                    if (!e) throw new Error("StyleSheetRegistry: " + t + ".")
                }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                    var r = this._fromServer && this._fromServer[n];
                    r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach(function (e) {
                        return t._sheet.deleteRule(e)
                    }), delete this._indices[n]), delete this._instancesCounts[n]
                }
            }
        }, {
            key: "update", value: function (e, t) {
                this.add(t), this.remove(e)
            }
        }, {
            key: "flush", value: function () {
                this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}, this.computeId = this.createComputeId(), this.computeSelector = this.createComputeSelector()
            }
        }, {
            key: "cssRules", value: function () {
                var e = this, t = this._fromServer ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]]
                }) : [], n = this._sheet.cssRules();
                return t.concat(Object.keys(this._indices).map(function (t) {
                    return [t, e._indices[t].map(function (e) {
                        return n[e].cssText
                    }).join("\n")]
                }).filter(function (e) {
                    return Boolean(e[1])
                }))
            }
        }, {
            key: "createComputeId", value: function () {
                var e = {};
                return function (t, n) {
                    if (!n) return "jsx-" + t;
                    var r = String(n), i = t + r;
                    return e[i] || (e[i] = "jsx-" + (0, o.default)(t + "-" + r)), e[i]
                }
            }
        }, {
            key: "createComputeSelector", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : /__jsx-style-dynamic-selector/g,
                    t = {};
                return function (n, r) {
                    this._isBrowser || (r = r.replace(/\/style/gi, "\\/style"));
                    var o = n + r;
                    return t[o] || (t[o] = r.replace(e, n)), t[o]
                }
            }
        }, {
            key: "getIdAndRules", value: function (e) {
                var t = this;
                if (e.dynamic) {
                    var n = this.computeId(e.styleId, e.dynamic);
                    return {
                        styleId: n, rules: Array.isArray(e.css) ? e.css.map(function (e) {
                            return t.computeSelector(n, e)
                        }) : [this.computeSelector(n, e.css)]
                    }
                }
                return {styleId: this.computeId(e.styleId), rules: Array.isArray(e.css) ? e.css : [e.css]}
            }
        }, {
            key: "selectFromServer", value: function () {
                return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function (e, t) {
                    return e[t.id.slice(2)] = t, e
                }, {})
            }
        }]), e
    }();
    t.default = a
}

,
86
:

function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
        return t >>> 0
    }
}

,
87
:

function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var r = e.env && !0, o = function (e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }, i = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.name,
                    i = void 0 === n ? "stylesheet" : n, a = t.optimizeForSpeed, u = void 0 === a ? r : a,
                    c = t.isBrowser, l = void 0 === c ? "undefined" != typeof window : c;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), s(o(i), "`name` must be a string"), this._name = i, this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}", s("boolean" == typeof u, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = u, this._isBrowser = l, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                var f = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
                this._nonce = f ? f.getAttribute("content") : null
            }

            return n(e, [{
                key: "setOptimizeForSpeed", value: function (e) {
                    s("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), s(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                }
            }, {
                key: "isOptimizeForSpeed", value: function () {
                    return this._optimizeForSpeed
                }
            }, {
                key: "inject", value: function () {
                    var e = this;
                    if (s(!this._injected, "sheet already injected"), this._injected = !0, this._isBrowser && this._optimizeForSpeed) return this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), void (this._optimizeForSpeed || (r || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0));
                    this._serverSheet = {
                        cssRules: [], insertRule: function (t, n) {
                            return "number" == typeof n ? e._serverSheet.cssRules[n] = {cssText: t} : e._serverSheet.cssRules.push({cssText: t}), n
                        }, deleteRule: function (t) {
                            e._serverSheet.cssRules[t] = null
                        }
                    }
                }
            }, {
                key: "getSheetForTag", value: function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }
            }, {
                key: "getSheet", value: function () {
                    return this.getSheetForTag(this._tags[this._tags.length - 1])
                }
            }, {
                key: "insertRule", value: function (e, t) {
                    if (s(o(e), "`insertRule` accepts only strings"), !this._isBrowser) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                    if (this._optimizeForSpeed) {
                        var n = this.getSheet();
                        "number" != typeof t && (t = n.cssRules.length);
                        try {
                            n.insertRule(e, t)
                        } catch (t) {
                            return r || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                        }
                    } else {
                        var i = this._tags[t];
                        this._tags.push(this.makeStyleTag(this._name, e, i))
                    }
                    return this._rulesCount++
                }
            }, {
                key: "replaceRule", value: function (e, t) {
                    if (this._optimizeForSpeed || !this._isBrowser) {
                        var n = this._isBrowser ? this.getSheet() : this._serverSheet;
                        if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                        n.deleteRule(e);
                        try {
                            n.insertRule(t, e)
                        } catch (o) {
                            r || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                        }
                    } else {
                        var o = this._tags[e];
                        s(o, "old rule at index `" + e + "` not found"), o.textContent = t
                    }
                    return e
                }
            }, {
                key: "deleteRule", value: function (e) {
                    if (this._isBrowser) if (this._optimizeForSpeed) this.replaceRule(e, ""); else {
                        var t = this._tags[e];
                        s(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                    } else this._serverSheet.deleteRule(e)
                }
            }, {
                key: "flush", value: function () {
                    this._injected = !1, this._rulesCount = 0, this._isBrowser ? (this._tags.forEach(function (e) {
                        return e && e.parentNode.removeChild(e)
                    }), this._tags = []) : this._serverSheet.cssRules = []
                }
            }, {
                key: "cssRules", value: function () {
                    var e = this;
                    return this._isBrowser ? this._tags.reduce(function (t, n) {
                        return n ? t = t.concat(e.getSheetForTag(n).cssRules.map(function (t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t
                        })) : t.push(null), t
                    }, []) : this._serverSheet.cssRules
                }
            }, {
                key: "makeStyleTag", value: function (e, t, n) {
                    t && s(o(t), "makeStyleTag acceps only strings as second parameter");
                    var r = document.createElement("style");
                    this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                    var i = document.head || document.getElementsByTagName("head")[0];
                    return n ? i.insertBefore(r, n) : i.appendChild(r), r
                }
            }, {
                key: "length", get: function () {
                    return this._rulesCount
                }
            }]), e
        }();

        function s(e, t) {
            if (!e) throw new Error("StyleSheet: " + t + ".")
        }

        t.default = i
    }).call(this, n(88))
}

,
88
:

function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var u, c = [], l = !1, f = -1;

    function p() {
        l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && d())
    }

    function d() {
        if (!l) {
            var e = a(p);
            l = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++f < t;) u && u[f].run();
                f = -1, t = c.length
            }
            u = null, l = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {
    }

    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || l || a(d)
    }, h.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}

,
89
:

function (e, t) {
    (function (t) {
        e.exports = t
    }).call(this, {})
}

,
90
:

function (e, t, n) {
    "use strict";
    var r = n(17), o = n(5);
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var i = o(n(91)), s = o(n(55)), a = o(n(7)), u = o(n(8)), c = o(n(12)), l = o(n(13)), f = o(n(14)), p = o(n(40)),
        d = o(n(10)), h = n(101), m = r(n(0)), v = (o(n(19)), r(n(31))), y = n(26);
    var w = function (e) {
        function t() {
            var e, n, r, o, i, u;
            (0, a.default)(this, t);
            for (var f = arguments.length, m = new Array(f), w = 0; w < f; w++) m[w] = arguments[w];
            return n = (0, c.default)(this, (e = (0, l.default)(t)).call.apply(e, [this].concat(m))), (0, d.default)((0, p.default)((0, p.default)(n)), "formatUrls", (r = function (e, t) {
                return {
                    href: e && "object" === (0, s.default)(e) ? (0, h.format)(e) : e,
                    as: t && "object" === (0, s.default)(t) ? (0, h.format)(t) : t
                }
            }, o = null, i = null, u = null, function (e, t) {
                if (e === o && t === i) return u;
                var n = r(e, t);
                return o = e, i = t, u = n, n
            })), (0, d.default)((0, p.default)((0, p.default)(n)), "linkClicked", function (e) {
                var t = e.currentTarget, r = t.nodeName, o = t.target;
                if ("A" !== r || !(o && "_self" !== o || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && 2 === e.nativeEvent.which)) {
                    var i = n.formatUrls(n.props.href, n.props.as), s = i.href, a = i.as;
                    if (function (e) {
                        var t = (0, h.parse)(e, !1, !0), n = (0, h.parse)((0, y.getLocationOrigin)(), !1, !0);
                        return !t.host || t.protocol === n.protocol && t.host === n.host
                    }(s)) {
                        var u = window.location.pathname;
                        s = (0, h.resolve)(u, s), a = a ? (0, h.resolve)(u, a) : s, e.preventDefault();
                        var c = n.props.scroll;
                        null == c && (c = a.indexOf("#") < 0);
                        var l = n.props.replace ? "replace" : "push";
                        v.default[l](s, a, {shallow: n.props.shallow}).then(function (e) {
                            e && c && (window.scrollTo(0, 0), document.body.focus())
                        }).catch(function (e) {
                            n.props.onError && n.props.onError(e)
                        })
                    }
                }
            }), n
        }

        return (0, f.default)(t, e), (0, u.default)(t, [{
            key: "componentDidMount", value: function () {
                this.prefetch()
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                (0, i.default)(this.props.href) !== (0, i.default)(e.href) && this.prefetch()
            }
        }, {
            key: "prefetch", value: function () {
                if (this.props.prefetch && "undefined" != typeof window) {
                    var e = window.location.pathname, t = this.formatUrls(this.props.href, this.props.as).href,
                        n = (0, h.resolve)(e, t);
                    v.default.prefetch(n)
                }
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.children, n = this.formatUrls(this.props.href, this.props.as), r = n.href,
                    o = n.as;
                "string" == typeof t && (t = m.default.createElement("a", null, t));
                var i = m.Children.only(t), s = {
                    onClick: function (t) {
                        i.props && "function" == typeof i.props.onClick && i.props.onClick(t), t.defaultPrevented || e.linkClicked(t)
                    }
                };
                return !this.props.passHref && ("a" !== i.type || "href" in i.props) || (s.href = o || r), s.href && "undefined" != typeof __NEXT_DATA__ && __NEXT_DATA__.nextExport && (s.href = (0, v._rewriteUrlForNextExport)(s.href)), m.default.cloneElement(i, s)
            }
        }]), t
    }(m.Component);
    t.default = w
}

,
91
:

function (e, t, n) {
    e.exports = n(92)
}

,
92
:

function (e, t, n) {
    var r = n(2), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
    e.exports = function (e) {
        return o.stringify.apply(o, arguments)
    }
}
},
[[248, 1, 0]]
])
;