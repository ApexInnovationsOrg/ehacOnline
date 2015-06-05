if (window['google'] != undefined && window['google']['loader'] != undefined) {
if (!window['google']['search']) {
window['google']['search'] = {};
google.search.Version = '1.0';
google.search.NoOldNames = false;
google.search.JSHash = '33243d408bc510da9cc4aa940ae6c0d3';
google.search.LoadArgs = 'file\75search\46v\0751';
}
//google.loader.writeLoadTag("css", google.loader.ServiceBase + "/api/search/1.0/33243d408bc510da9cc4aa940ae6c0d3/default.css", false);
//google.loader.writeLoadTag("script", google.loader.ServiceBase + "/api/search/1.0/33243d408bc510da9cc4aa940ae6c0d3/default+en.I.js", false);
}
(function() {
    var _UDS_CONST_LOCALE = 'en';
    var _UDS_CONST_SHORT_DATE_PATTERN = 'MDY';
    var _UDS_MSG_SEARCHER_IMAGE = ('Image');
    var _UDS_MSG_SEARCHER_WEB = ('Web');
    var _UDS_MSG_SEARCHER_BLOG = ('Blog');
    var _UDS_MSG_SEARCHER_VIDEO = ('Video');
    var _UDS_MSG_SEARCHER_LOCAL = ('Local');
    var _UDS_MSG_SEARCHCONTROL_SAVE = ('save');
    var _UDS_MSG_SEARCHCONTROL_KEEP = ('keep');
    var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('include');
    var _UDS_MSG_SEARCHCONTROL_COPY = ('copy');
    var _UDS_MSG_SEARCHCONTROL_CLOSE = ('close');
    var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('Sponsored Links');
    var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('see more...');
    var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('clipped from Google');
    var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('Search location');
    var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('Disable address lookup');
    var _UDS_MSG_SEARCHER_NEWS = ('News');
    function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {
        return ('' + AGE_MINUTES_AGO + ' minutes ago');
    }
    var _UDS_MSG_ONE_HOUR_AGO = ('1 hour ago');
    function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {
        return ('' + AGE_HOURS_AGO + ' hours ago');
    }
    function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {
        return ('all ' + NUMBER + ' related');
    }
    var _UDS_MSG_NEWS_RELATED = ('Related Articles');
    var _UDS_MSG_BRANDING_STRING = ('powered by Google');
    var _UDS_MSG_SORT_BY_DATE = ('Sort by date');
    var _UDS_MSG_MONTH_ABBR_JAN = ('Jan');
    var _UDS_MSG_MONTH_ABBR_FEB = ('Feb');
    var _UDS_MSG_MONTH_ABBR_MAR = ('Mar');
    var _UDS_MSG_MONTH_ABBR_APR = ('Apr');
    var _UDS_MSG_MONTH_ABBR_MAY = ('May');
    var _UDS_MSG_MONTH_ABBR_JUN = ('Jun');
    var _UDS_MSG_MONTH_ABBR_JUL = ('Jul');
    var _UDS_MSG_MONTH_ABBR_AUG = ('Aug');
    var _UDS_MSG_MONTH_ABBR_SEP = ('Sep');
    var _UDS_MSG_MONTH_ABBR_OCT = ('Oct');
    var _UDS_MSG_MONTH_ABBR_NOV = ('Nov');
    var _UDS_MSG_MONTH_ABBR_DEC = ('Dec');
    var _UDS_MSG_DIRECTIONS = ('directions');
    var _UDS_MSG_CLEAR_RESULTS = ('clear results');
    var _UDS_MSG_SHOW_ONE_RESULT = ('show one result');
    var _UDS_MSG_SHOW_MORE_RESULTS = ('show more results');
    var _UDS_MSG_SHOW_ALL_RESULTS = ('show all results');
    var _UDS_MSG_SETTINGS = ('settings');
    var _UDS_MSG_SEARCH = ('search');
    var _UDS_MSG_SEARCH_UC = ('Search');
    var _UDS_MSG_POWERED_BY = ('powered by');
    function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {
        return ('Business listings provided by ' + LOCAL_RESULTS_PROVIDER + '');
    }
    var _UDS_MSG_SEARCHER_BOOK = ('Book');
    function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {
        return ('Page ' + FOUND_ON_PAGE + '');
    }
    function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {
        return ('' + PAGE_COUNT + ' pages');
    }
    var _UDS_MSG_SEARCHER_BY = ('by');
    var _UDS_MSG_SEARCHER_CODE = ('Code');
    var _UDS_MSG_UNKNOWN_LICENSE = ('Unknown License');
    var _UDS_MSG_SEARCHER_GSA = ('Search Appliance');
    var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('More results');
    var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('Previous');
    var _UDS_MSG_SEARCHCONTROL_NEXT = ('Next');
    var _UDS_MSG_GET_DIRECTIONS = ('Get directions');
    var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('To here');
    var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('From here');
    var _UDS_MSG_CLEAR_RESULTS_UC = ('Clear results');
    var _UDS_MSG_SEARCH_THE_MAP = ('search the map');
    var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('scroll through results');
    var _UDS_MSG_EDIT_TAGS = ('edit tags');
    var _UDS_MSG_TAG_THIS_SEARCH = ('tag this search');
    var _UDS_MSG_SEARCH_STRING = ('search string');
    var _UDS_MSG_OPTIONAL_LABEL = ('optional label');
    var _UDS_MSG_DELETE = ('delete');
    var _UDS_MSG_DELETED = ('deleted');
    var _UDS_MSG_CANCEL = ('cancel');
    var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('upload your own video');
    var _UDS_MSG_IM_DONE_WATCHING = ('i\047m done watching this');
    var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('close video player');
    var _UDS_MSG_NO_RESULTS = ('No Results');
    var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('This Custom Search Engine is loading. Try again in a few seconds.');
    var _UDS_MSG_COUPONS = ('Coupons');
    var _UDS_MSG_BACK = ('back');
    var _UDS_MSG_SUBSCRIBE = ('Subscribe');
    var _UDS_MSG_SEARCHER_PATENT = ('Patent');
    var _UDS_MSG_USPAT = ('US Pat.');
    var _UDS_MSG_USPAT_APP = ('US Pat. App');
    var _UDS_MSG_PATENT_FILED = ('Filed');
    var _UDS_MSG_ADS_BY_GOOGLE = ('Ads by Google');
    var _UDS_MSG_SET_DEFAULT_LOCATION = ('Set default location');
    var _UDS_MSG_NEWSCAT_TOPSTORIES = ('Top Stories');
    var _UDS_MSG_NEWSCAT_WORLD = ('World');
    var _UDS_MSG_NEWSCAT_NATION = ('Nation');
    var _UDS_MSG_NEWSCAT_BUSINESS = ('Business');
    var _UDS_MSG_NEWSCAT_SCITECH = ('Sci/Tech');
    var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('Entertainment');
    var _UDS_MSG_NEWSCAT_HEALTH = ('Health');
    var _UDS_MSG_NEWSCAT_SPORTS = ('Sports');
    var _UDS_MSG_NEWSCAT_POLITICS = ('Politics');
    var b = true,
    f = null,
    h = false,
    i = encodeURIComponent,
    k = google_exportSymbol,
    aa = _UDS_CONST_SHORT_DATE_PATTERN,
    m = window,
    n = undefined,
    o = document,
    p = Math,
    ba = navigator,
    ca = parseInt,
    da = parseFloat,
    ea = _UDS_CONST_LOCALE,
    fa = decodeURIComponent;
    function ga(a, c) {
        return a.onload = c
    }
    function ha(a, c) {
        return a.onreadystatechange = c
    }
    function ia(a, c) {
        return a.input = c
    }
    function ja(a, c) {
        return a.width = c
    }
    function q(a, c) {
        return a.innerHTML = c
    }
    function ka(a, c) {
        return a.value = c
    }
    function la(a, c) {
        return a.type = c
    }
    function ma(a, c) {
        return a.visibility = c
    }
    function na(a, c) {
        return a.title = c
    }
    function r(a, c) {
        return a.className = c
    }
    function oa(a, c) {
        return a.checked = c
    }
    function pa(a, c) {
        return a.target = c
    }
    function qa(a, c) {
        return a.onclick = c
    }
    function ra(a, c) {
        return a.display = c
    }
    function sa(a, c) {
        return a.execute = c
    }
    function ta(a, c) {
        return a.height = c
    }
    var s = "appendChild",
    ua = "push",
    va = "clearTimeout",
    t = "input",
    v = "width",
    wa = "submit",
    xa = "round",
    x = "replace",
    ya = "floor",
    za = "content",
    y = "getElementById",
    Aa = "offsetWidth",
    z = "value",
    Ba = "match",
    Ca = "readyState",
    Da = "focus",
    A = "createElement",
    Ea = "firstChild",
    C = "setAttribute",
    Fa = "cloneNode",
    Ga = "type",
    Ha = "recordStat",
    Ia = "ServiceBase",
    Ja = "getTime",
    D = "length",
    Ka = "title",
    E = "prototype",
    F = "cursor",
    La = "className",
    Ma = "Version",
    Na = "checked",
    H = "setTimeout",
    Oa = "split",
    Pa = "offsetParent",
    Qa = "userAgent",
    Ra = "location",
    Sa = "getComputedStyle",
    I = "style",
    Ta = "close",
    Ua = "body",
    Va = "removeChild",
    J = "search",
    K = "call",
    L = "loader",
    Wa = "currentStyle",
    Xa = "console",
    Ya = "apply",
    Za = "navigator",
    $a = "parentNode",
    ab = "CurrentLocale",
    M = "execute",
    bb = "height",
    cb = "join",
    db = "toLowerCase",
    eb = "event",
    N,
    fb = function(a, c, d) {
        this.gh = a;
        this.$c = c;
        this.cb = h;
        this.cf = d || f;
        this.console = m[Xa] || {
            log: function() {}
        };
        if (!this.cf && this.$c == "parent") this[Xa].log("You forgot to pass an iframe.");
        else {
            if (!m.UDS_IEXDC_SETUP_COMPLETE) try {
                m.execScript("Class UDS_GCXPC____NIXVBS_wrapper\n Private UDS_M_TRANSPORT\nPublic Sub UDS_SET_TRANSPORT(transport)\nIf isEmpty(UDS_M_TRANSPORT) Then\nSet UDS_M_TRANSPORT = transport\nEnd If\nEnd Sub\nPublic Sub UDS_SEND_MESSAGE_(payload)\n Call UDS_M_TRANSPORT.UDS_GCXPC____NIXJS_handle_message(payload)\nEnd Sub\nPublic Sub UDS_CREATE_CHANNEL(channel)\n Call UDS_M_TRANSPORT.UDS_GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub UDS_GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function UDS_GCXPC____NIXVBS_get_wrapper(transport)\nDim wrap\nSet wrap = New UDS_GCXPC____NIXVBS_wrapper\nwrap.UDS_SET_TRANSPORT transport\nSet UDS_GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function", "vbscript");
                m.UDS_IEXDC_SETUP_COMPLETE = b
            } catch(e) {}
            this.UDS_GCXPC____NIXJS_handle_message = this.Wg;
            this.UDS_GCXPC____NIXJS_create_channel = this.Eg
        }
    },
    gb = /MSIE\s+([^\);]+)(\)|;)/,
    hb = function(a) {
        return (a = gb.exec(a)) ? a[1] : ""
    };
    N = fb[E];
    N.Wg = function(a) {
        this.$c == "parent" && a == "connected" ? this.yf() : this.gh(a)
    };
    N.Eg = function(a) {
        this.Xb = a
    };
    N.Ie = function(a) {
        return function() {
            if (!a.cb) {
                var c = a.cf;
                try {
                    c.contentWindow.opener = m.UDS_GCXPC____NIXVBS_get_wrapper(a);
                    a.cb = b
                } catch(d) {
                    a[Xa].log("Exception caught while attempting Google IE XDC: " + d.message)
                }
                a.cb || m[H](a.Ie(a), 100)
            }
        }
    };
    N.He = function(a) {
        return function() {
            if (!a.cb) {
                try {
                    var c = m.opener;
                    if (c && "UDS_GCXPC____NIXVBS_container" in c) {
                        a.Xb = c;
                        a.Xb.UDS_CREATE_CHANNEL(m.UDS_GCXPC____NIXVBS_get_wrapper(a));
                        a.cb = b;
                        a.send("connected");
                        a.yf()
                    }
                } catch(d) {
                    return
                }
                a.cb || m[H](a.He(a), 100)
            }
        }
    };
    N.send = function(a) {
        var c = h;
        try {
            this.Xb.toString()
        } catch(d) {
            c = b
        }
        c ? this.Xb.UDS_SEND_MESSAGE_(a) : this[Xa].log("Cross-domain channel has been modified.")
    };
    N.Cg = function(a) {
        this.yf = a ||
        function() {};
        this.$c == "parent" ? this.Ie(this)() : this.He(this)()
    };
    if (!google[J].NoOldNames) {
        k("UDS_ServiceBase", google[L][Ia]);
        k("UDS_OriginalAppPath", google[L].OriginalAppPath);
        k("UDS_ApiKey", google[L].ApiKey);
        k("UDS_KeyVerified", google[L].KeyVerified);
        k("UDS_LoadFailure", google[L].LoadFailure);
        k("UDS_CurrentLocale", ea);
        k("UDS_ShortDatePattern", aa);
        k("UDS_Version", google[J][Ma]);
        k("UDS_JSHash", google[J].JSHash)
    }
    if (!O) var O = k;
    if (!P) var P = google_exportProperty;
    var Q = {};
    Q.blank = " ";
    Q.image = _UDS_MSG_SEARCHER_IMAGE;
    Q.web = _UDS_MSG_SEARCHER_WEB;
    Q.blog = _UDS_MSG_SEARCHER_BLOG;
    Q.video = _UDS_MSG_SEARCHER_VIDEO;
    Q.local = _UDS_MSG_SEARCHER_LOCAL;
    Q.news = _UDS_MSG_SEARCHER_NEWS;
    Q.book = _UDS_MSG_SEARCHER_BOOK;
    Q.patent = "Patent";
    Q["ads-by-google"] = _UDS_MSG_ADS_BY_GOOGLE;
    Q.cse = "Custom Search Control";
    Q.save = _UDS_MSG_SEARCHCONTROL_SAVE;
    Q.keep = _UDS_MSG_SEARCHCONTROL_KEEP;
    Q.include = _UDS_MSG_SEARCHCONTROL_INCLUDE;
    Q.copy = _UDS_MSG_SEARCHCONTROL_COPY;
    Q.close = _UDS_MSG_SEARCHCONTROL_CLOSE;
    Q["sponsored-links"] = _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;
    Q["see-more"] = _UDS_MSG_SEARCHCONTROL_SEE_MORE;
    Q.watermark = _UDS_MSG_SEARCHCONTROL_WATERMARK;
    Q["search-location"] = _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;
    Q["disable-address-lookup"] = _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;
    Q["sort-by-date"] = _UDS_MSG_SORT_BY_DATE;
    Q.pbg = _UDS_MSG_BRANDING_STRING;
    Q["n-minutes-ago"] = _UDS_MSG_MINUTES_AGO;
    Q["n-hours-ago"] = _UDS_MSG_HOURS_AGO;
    Q["one-hour-ago"] = _UDS_MSG_ONE_HOUR_AGO;
    Q["all-n-related"] = _UDS_MSG_NEWS_ALL_N_RELATED;
    Q["related-articles"] = _UDS_MSG_NEWS_RELATED;
    Q["page-count"] = _UDS_MSG_TOTAL_PAGE_COUNT;
    var R = [];
    R[0] = _UDS_MSG_MONTH_ABBR_JAN;
    R[1] = _UDS_MSG_MONTH_ABBR_FEB;
    R[2] = _UDS_MSG_MONTH_ABBR_MAR;
    R[3] = _UDS_MSG_MONTH_ABBR_APR;
    R[4] = _UDS_MSG_MONTH_ABBR_MAY;
    R[5] = _UDS_MSG_MONTH_ABBR_JUN;
    R[6] = _UDS_MSG_MONTH_ABBR_JUL;
    R[7] = _UDS_MSG_MONTH_ABBR_AUG;
    R[8] = _UDS_MSG_MONTH_ABBR_SEP;
    R[9] = _UDS_MSG_MONTH_ABBR_OCT;
    R[10] = _UDS_MSG_MONTH_ABBR_NOV;
    R[11] = _UDS_MSG_MONTH_ABBR_DEC;
    Q["month-abbr"] = R;
    Q.directions = _UDS_MSG_DIRECTIONS;
    Q["clear-results"] = _UDS_MSG_CLEAR_RESULTS;
    Q["show-one-result"] = _UDS_MSG_SHOW_ONE_RESULT;
    Q["show-more-results"] = _UDS_MSG_SHOW_MORE_RESULTS;
    Q["show-all-results"] = _UDS_MSG_SHOW_ALL_RESULTS;
    Q.settings = _UDS_MSG_SETTINGS;
    Q.search = _UDS_MSG_SEARCH;
    Q["search-uc"] = _UDS_MSG_SEARCH_UC;
    Q["powered-by"] = _UDS_MSG_POWERED_BY;
    Q.sa = _UDS_MSG_SEARCHER_GSA;
    Q.by = _UDS_MSG_SEARCHER_BY;
    Q.code = _UDS_MSG_SEARCHER_CODE;
    Q["unknown-license"] = _UDS_MSG_UNKNOWN_LICENSE;
    Q["more-results"] = _UDS_MSG_SEARCHCONTROL_MORERESULTS;
    Q.previous = _UDS_MSG_SEARCHCONTROL_PREVIOUS;
    Q.next = _UDS_MSG_SEARCHCONTROL_NEXT;
    Q["get-directions"] = _UDS_MSG_GET_DIRECTIONS;
    Q["to-here"] = _UDS_MSG_GET_DIRECTIONS_TO_HERE;
    Q["from-here"] = _UDS_MSG_GET_DIRECTIONS_FROM_HERE;
    Q["clear-results-uc"] = _UDS_MSG_CLEAR_RESULTS_UC;
    Q["search-the-map"] = _UDS_MSG_SEARCH_THE_MAP;
    Q["scroll-results"] = _UDS_MSG_SCROLL_THROUGH_RESULTS;
    Q["edit-tags"] = _UDS_MSG_EDIT_TAGS;
    Q["tag-search"] = _UDS_MSG_TAG_THIS_SEARCH;
    Q["search-string"] = _UDS_MSG_SEARCH_STRING;
    Q["optional-label"] = _UDS_MSG_OPTIONAL_LABEL;
    Q["delete"] = _UDS_MSG_DELETE;
    Q.deleted = _UDS_MSG_DELETED;
    Q.cancel = _UDS_MSG_CANCEL;
    Q["upload-video"] = _UDS_MSG_UPLOAD_YOUR_VIDEOS;
    Q["im-done"] = _UDS_MSG_IM_DONE_WATCHING;
    Q["close-player"] = _UDS_MSG_CLOSE_VIDEO_PLAYER;
    Q["no-results"] = _UDS_MSG_NO_RESULTS;
    Q["linked-cse-error-results"] = _UDS_MSG_LINKEDCSE_ERROR_RESULTS;
    Q.back = _UDS_MSG_BACK;
    Q.subscribe = _UDS_MSG_SUBSCRIBE;
    Q["us-pat"] = "US Pat.";
    Q["us-pat-app"] = "US Pat. App";
    Q["us-pat-filed"] = "Filed";
    function ib(a, c) {
        var d = function() {};
        d.prototype = c[E];
        a.prototype = new d;
        a[E].fi = function(e) {
            var g = Array[E].splice[Ya](arguments, [1, arguments[D]]);
            return e[Ya](a, g)
        }
    }
    var _json_cache_defeater_ = (new Date)[Ja](),
    _json_request_require_prep = b;
    function jb(a, c) {
        var d;
        if (d = kb("msie")) d = "msie 6.0" in lb ? lb["msie 6.0"] : lb["msie 6.0"] = ba.appVersion[db]().indexOf("msie 6.0") != -1;
        d ? m[H](S(this, mb, [a, c]), 0) : mb(a, c)
    }
    function nb(a) {
        _json_request_require_prep = h;
        jb(a, f);
        _json_request_require_prep = b
    }
    function mb(a, c) {
        var d = o.getElementsByTagName("head")[0];
        d || (d = o[Ua][$a][s](o[A]("head")));
        var e = o[A]("script");
        la(e, "text/javascript");
        e.charset = "utf-8";
        var g = _json_request_require_prep ? a + "&key=" + google[L].ApiKey + "&v=" + c: a;
        if (ob() || pb()) g = g + "&nocache=" + _json_cache_defeater_++;
        e.src = g;
        var j = function() {
            ga(e, f);
            e[$a][Va](e);
            delete e
        };
        g = function(l) {
            l = (l ? l: m[eb]).target ? (l ? l: m[eb]).target: (l ? l: m[eb]).srcElement;
            if (l[Ca] == "loaded" || l[Ca] == "complete") {
                ha(l, f);
                j()
            }
        };
        if (ba.product == "Gecko") ga(e, j);
        else ha(e, g);
        d[s](e)
    }
    function qb(a, c) {
        return function() {
            return c[Ya](a, arguments)
        }
    }
    function S(a, c, d) {
        return function() {
            return c[Ya](a, d)
        }
    }
    function sb(a) {
        for (; a[Ea];) a[Va](a[Ea])
    }
    function tb(a, c) {
        if (a) try {
            sb(a);
            a[s](c)
        } catch(d) {}
        return c
    }
    function T(a, c) {
        try {
            a[s](c)
        } catch(d) {}
        return c
    }
    function ub(a) {
        return o.createTextNode(a ? a: "")
    }
    function U(a, c) {
        var d = o[A]("div");
        if (a) q(d, a);
        if (c) r(d, c);
        return d
    }
    function vb(a, c) {
        var d = o[A]("div");
        a && T(d, ub(a));
        if (c) r(d, c);
        return d
    }
    function W(a) {
        var c = o[A]("div");
        if (a) r(c, a);
        return c
    }
    function wb(a, c) {
        var d = o[A]("span");
        a && T(d, ub(a));
        if (c) r(d, c);
        return d
    }
    function xb(a, c, d) {
        var e = o[A]("table");
        e[C]("cellSpacing", a ? a: 0);
        e[C]("cellPadding", c ? c: 0);
        if (d) r(e, d);
        return e
    }
    function yb(a, c, d) { (a = a.insertRow( - 1)) || alert(a);
        for (var e = 0; e < c; e++) X(a, d);
        return a
    }
    function X(a, c) {
        var d = a.insertCell( - 1);
        if (c) r(d, c);
        return d
    }
    function zb(a) {
        var c = o[A]("td");
        if (a) r(c, a);
        return c
    }
    function Ab(a, c, d, e) {
        var g = o[A]("img");
        g.src = a;
        if (c) ja(g, c);
        if (d) ta(g, d);
        if (e) r(g, e);
        return g
    }
    function Bb(a, c, d, e, g) {
        var j = o[A]("a");
        j.href = a;
        if (c) e ? T(j, wb(c, e)) : T(j, ub(c));
        if (d) pa(j, d);
        if (g) na(j, g);
        return j
    }
    function Y(a, c, d, e, g) {
        var j = U(f, e),
        l = o[A]("a");
        l.href = a;
        q(l, c);
        if (e) r(l, e);
        if (d) pa(l, d);
        if (g) na(l, g);
        j[s](l);
        return j
    }
    function Cb(a) {
        var c = o[A]("form");
        if (a) r(c, a);
        return c
    }
    function Db(a, c) {
        var d = o[A]("input");
        la(d, "submit");
        ka(d, a);
        if (c) r(d, c);
        return d
    }
    function Eb(a, c, d) {
        var e = o[A]("input");
        e[C]("autoComplete", "off");
        la(e, "text");
        if (a == -1) Z(e, "util-css-expand");
        else e.size = a > 0 ? a: 10;
        c && Z(e, c);
        if (d) ka(e, d);
        return e
    }
    function Fb(a, c, d, e) {
        var g = o[A]("input");
        la(g, "checkbox");
        g.name = a;
        ka(g, c);
        if (e) r(g, e);
        if (d) oa(g, d);
        return g
    }
    function Z(a, c) {
        var d;
        a: {
            if (! (a == f || a[La] == f)) {
                d = a[La][Oa](" ");
                for (var e = 0; e < d[D]; e++) if (d[e] == c) {
                    d = b;
                    break a
                }
            }
            d = h
        }
        d || (a.className += " " + c)
    }
    function $(a, c) {
        if (a[La] != f) {
            for (var d = a[La][Oa](" "), e = [], g = h, j = 0; j < d[D]; j++) if (d[j] != c) d[j] && e[ua](d[j]);
            else g = b;
            if (g) r(a, e[cb](" "))
        }
    }
    var Gb = "",
    Hb = {
        zg: {
            oi: 1,
            si: 1,
            Ai: 1,
            id: 1,
            Bi: 1,
            "in": 1,
            Di: 1,
            Fi: 1,
            Gi: 1,
            Hi: 1,
            Ki: 1,
            Ti: 1,
            ij: 1,
            mj: 1,
            nj: 1,
            rj: 1,
            sj: 1,
            vj: 1
        },
        pi: {
            gi: 1,
            ii: 1,
            ki: 1,
            li: 1,
            mi: 1,
            ni: 1,
            zg: 1,
            ti: 1,
            "do": 1,
            ui: 1,
            vi: 1,
            wi: 1,
            xi: 1,
            yi: 1,
            zi: 1,
            Ei: 1,
            Li: 1,
            Mi: 1,
            Ni: 1,
            Oi: 1,
            Pi: 1,
            Qi: 1,
            Ri: 1,
            Si: 1,
            Vi: 1,
            Wi: 1,
            Xi: 1,
            Yi: 1,
            Zi: 1,
            $i: 1,
            cj: 1,
            fj: 1,
            hj: 1,
            jj: 1,
            kj: 1,
            lj: 1,
            pj: 1,
            qj: 1,
            uj: 1
        },
        Ui: {
            hi: 1
        }
    };
    function kb(a) {
        if (a in Ib) return Ib[a];
        return Ib[a] = ba[Qa][db]().indexOf(a) != -1
    }
    var Ib = {},
    lb = {};
    function ob() {
        return kb("msie")
    }
    function pb() {
        return kb("safari") || kb("konqueror")
    }
    var Jb,
    Kb;
    if (m.ei) {
        Jb = b;
        if (m.XMLHttpRequest) Kb = b
    }
    function Mb(a) {
        this.vc = a + "branding";
        this.jc = a + "branding-vertical";
        this.Ci = a + "branding-img";
        this.oj = a + "branding-user-defined";
        this.df = a + "branding-img-noclear";
        this.yg = a + "branding-clickable";
        this.text = a + "branding-text"
    };
    function Nb(a) {
        return da(a[x]("px", "")) || 0
    }
    function Ob(a, c) {
        if (typeof a == "string") a = o[y](a);
        var d = o.defaultView || {},
        e = c ? a.offsetHeight: a[Aa],
        g = c ? ["Top", "Bottom"] : ["Right", "Left"],
        j = ["border", "margin", "padding"],
        l = j[D],
        u = g[D];
        if (d && d[Sa]) {
            var w = d[Sa](a, h);
            for (d = 0; d < l; d++) for (var B = 0; B < u; B++) e += Nb(w.getPropertyValue([j[d], g[B][db]()][cb]("-")))
        } else {
            w = a[Wa];
            for (B = 0; B < u; B++) e += Nb(w[[j[0], g[B], "Width"][cb]("")]);
            for (d = 1; d < l; d++) for (B = 0; B < u; B++) e += Nb(w[[j[d], g[B]][cb]("")])
        }
        return e
    };
    google[J].a = function() {
        this.ia = this.qi = f;
        this.ed = this.$h = 0;
        this.Ze = b;
        this.R = {
            width: 100,
            height: 75
        };
        this.Ka = google[J].a.jb;
        this.mf = 1;
        this.W(google[J].a.ba);
        this.Le();
        this.gwsUrl = this.z = this.L = this.ej = this.B = this.Yb = this.Nb = this.gb = this.Sc = this.gc = this.Ec = this.Cc = f;
        this.ua = [];
        var a;
        if (typeof m === "object" && m[Ra] && m[Ra].hostname && m[Ra].hostname != "") {
            if (Gb == "") {
                var c = m[Ra].hostname[db]()[Oa](".");
                if (c[D] < 2) Gb = ".com";
                a = c.pop();
                c = c.pop();
                Gb = a[D] == 2 ? Hb[c] && Hb[c][a] == 1 ? "." + c + "." + a: "." + a: ".com"
            }
            a = Gb
        } else a = ".com";
        this.af = a;
        this.yb = this.rb = f
    };
    O("google.search.Search", google[J].a);
    google[J].a.kd = google[L][Ia];
    P(google[J].a, "BASE", google[J].a.kd);
    google[J].a.oa = "large";
    P(google[J].a, "LARGE_RESULTSET", google[J].a.oa);
    google[J].a.ba = "small";
    P(google[J].a, "SMALL_RESULTSET", google[J].a.ba);
    google[J].a.Qa = "filtered_cse";
    P(google[J].a, "FILTERED_CSE_RESULTSET", google[J].a.Qa);
    google[J].a.Wf = 8;
    P(google[J].a, "LARGE_RESULTS", google[J].a.Wf);
    google[J].a.lg = 4;
    P(google[J].a, "SMALL_RESULTS", google[J].a.lg);
    google[J].a.Qf = 10;
    P(google[J].a, "FILTERED_CSE_RESULTS", google[J].a.Qf);
    google[J].a.Sd = 5E3;
    P(google[J].a, "KEEP_SWEEPER_DELAY", google[J].a.Sd);
    google[J].a.Zf = "_top";
    P(google[J].a, "LINK_TARGET_TOP", google[J].a.Zf);
    google[J].a.Yf = "_self";
    P(google[J].a, "LINK_TARGET_SELF", google[J].a.Yf);
    google[J].a.Xf = "_parent";
    P(google[J].a, "LINK_TARGET_PARENT", google[J].a.Xf);
    google[J].a.jb = "_blank";
    P(google[J].a, "LINK_TARGET_BLANK", google[J].a.jb);
    google[J].a.kb = "order-by-relevance";
    P(google[J].a, "ORDER_BY_RELEVANCE", google[J].a.kb);
    google[J].a.pa = "order-by-date";
    P(google[J].a, "ORDER_BY_DATE", google[J].a.pa);
    google[J].a.Vd = "order-by-ascending-date";
    P(google[J].a, "ORDER_BY_ASCENDING_DATE", google[J].a.Vd);
    google[J].a.Ob = "restrict-type";
    P(google[J].a, "RESTRICT_TYPE", google[J].a.Ob);
    google[J].a.mc = "restrict-safesearch";
    P(google[J].a, "RESTRICT_SAFESEARCH", google[J].a.mc);
    google[J].a.oc = "active";
    P(google[J].a, "SAFESEARCH_STRICT", google[J].a.oc);
    google[J].a.nc = "off";
    P(google[J].a, "SAFESEARCH_OFF", google[J].a.nc);
    google[J].a.he = "moderate";
    P(google[J].a, "SAFESEARCH_MODERATE", google[J].a.he);
    google[J].a.Ra = "restrict-extended";
    P(google[J].a, "RESTRICT_EXTENDED_ARGS", google[J].a.Ra);
    google[J].a.Uh = Q;
    P(google[J].a, "strings", google[J].a.Uh);
    google[J].a[E].uh = function() {
        var a = this.ra + "?hl=" + google[J][ab] + "&source=uds";
        a += this.z ? this.z: "&q=";
        return this.Ca && this.Ca != "" ? this.Ca: a
    };
    google[J].a[E].Mh = function(a) {
        this.L = a == f || a == "" ? f: a
    };
    P(google[J].a[E], "setQueryAddition", google[J].a[E].Mh);
    google[J].a[E].Ea = function(a, c, d) {
        a = google[J].a.kd + this.Ga + "?callback=" + a + "&context=" + c + "&lstkp=" + this.xg() + "&rsz=" + this.va + "&hl=" + google[J][ab];
        if (this.Hb) a += "&source=" + i(this.Hb);
        if (this.af) a += "&gss=" + this.af;
        if (google[J].JSHash) a += "&sig=" + google[J].JSHash;
        if (d) a += "&start=" + d;
        return a
    };
    google[J].a[E].Qh = function(a) {
        this.Hb = a
    };
    P(google[J].a[E], "setSearcherSrc", google[J].a[E].Qh);
    google[J].a[E].Ib = function(a) {
        this.Ka = a
    };
    P(google[J].a[E], "setLinkTarget", google[J].a[E].Ib);
    N = google[J].a[E];
    N.v = function() {
        return this.Ka && this.Ka != "" ? this.Ka: f
    };
    N.Zg = function() {
        this.$h++;
        this.ed++;
        this.Yb && m[va](this.Yb);
        this.Yb = m[H](S(this, this[M], [f]), google[J].a.Sd)
    };
    N.xg = function() {
        m[va](this.Yb);
        var a = this.ed;
        this.ed = 0;
        return a
    };
    N.Lc = function() {
        if (this.Cc == f) this.Cc = "gsc-" + this.B + "Result";
        return this.Cc
    };
    N.qa = function() {
        if (this.Ec == f) this.Ec = "gs-" + this.B + "Result";
        return this.Ec
    };
    N.Vg = function() {
        if (this.gc == f) this.gc = Q[this.B];
        return this.gb ? this.gb: this.gc
    };
    N.Tg = function() {
        if (this.Sc == f) this.Sc = Q[this.B];
        return this.gb ? this.gb: this.Sc
    };
    N.Ug = function() {
        return this.va
    };
    P(google[J].a[E], "getResultSetSize", google[J].a[E].Ug);
    google[J].a[E].W = function(a) {
        if (a > 0 && a <= 8) this.va = a;
        else switch (a) {
        case google[J].a.oa:
            this.va = google[J].a.oa;
            break;
        default:
        case google[J].a.ba:
            this.va = google[J].a.ba;
            break
        }
    };
    P(google[J].a[E], "setResultSetSize", google[J].a[E].W);
    sa(google[J].a[E],
    function(a) {
        var c = (new Date)[Ja]();
        this.dd = c % 100 == 1 ? c: -1;
        c = this.ka(a, f, f);
        c += this.ab ? "&" + this.ab: "";
        if (m._googleudsextrastuff) c += m._googleudsextrastuff;
        this.cursor = f;
        this.jf = a;
        jb(c, google[J][Ma]);
        if (this.ua && this.ua[D] > 0) for (c = 0; c < this.ua[D]; c++) this.ua[c][M](a)
    });
    P(google[J].a[E], "execute", google[J].a[E][M]);
    google[J].a[E].bf = function(a) {
        if (this[F] && a < this[F].pages[D]) {
            a = this.ka(this.jf, f, f, this[F].pages[a].start);
            this.cursor = f;
            jb(a, google[J][Ma])
        }
    };
    P(google[J].a[E], "gotoPage", google[J].a[E].bf);
    google[J].a[E].pg = function(a) {
        this.ua && this.ua[ua](a)
    };
    P(google[J].a[E], "addRelatedSearcher", google[J].a[E].pg);
    google[J].a[E].Sg = function(a, c, d) {
        return this.ka(a, c, d) + "&key=" + google[L].ApiKey + "&v=" + google[J][Ma]
    };
    P(google[J].a[E], "getExecuteUrl", google[J].a[E].Sg);
    google[J].a[E].za = function(a) {
        var c = Y("http://code.google.com/apis/ajaxsearch/faq.html", Q.watermark + " - " + this.Ag(), "_blank", "gs-watermark");
        T(a, c)
    };
    google[J].a[E].Ag = function() {
        var a = new Date;
        return a.getMonth() + 1 + "/" + a.getFullYear()
    };
    google[J].a[E].$a = function(a) {
        var c;
        c = a.getFullYear();
        var d = a.getMonth(),
        e = Q["month-abbr"][d];
        a = a.getDate();
        if (a < 10) a = "0" + a;
        switch (google[J].ShortDatePattern) {
        case "MDY":
            c = e + " " + a + ", " + c;
            break;
        case "YMD":
            if (google[J][ab] == "zh-CN" || google[J][ab] == "zh-TW" || google[J][ab] == "ja" || google[J][ab] == "ko") {
                e = Pb[google[J][ab]];
                c = c + e.year + (d + 1) + e.month + a + e.day
            } else c = c + " " + e + " " + a;
            break;
        default:
        case "DMY":
            c = a + " " + e + " " + c;
            break
        }
        return c
    };
    P(google[J].a[E], "formatToShortDate", google[J].a[E].$a);
    var Pb = {
        "zh-CN": {
            month: " \u6708 ",
            year: " \u5e74 ",
            day: " \u65e5 "
        },
        "zh-TW": {
            month: " \u6708 ",
            year: " \u5e74 ",
            day: " \u65e5 "
        },
        ja: {
            month: "\u6708",
            year: "\u5e74",
            day: "\u65e5"
        },
        ko: {
            month: " \uc6d4 ",
            year: " \ub144 ",
            day: " \uc77c "
        }
    };
    google[J].a.Td = 36E5;
    google[J].a.gg = 6E4;
    google[J].a.fg = 864E5;
    google[J].a[E].Jc = function(a) {
        var c = (new Date)[Ja](),
        d = a[Ja]();
        if (c < d) return Q["n-minutes-ago"](2);
        c = c - d;
        if (c < google[J].a.Td) {
            a = p[ya](c / google[J].a.gg);
            a = a <= 1 ? 2: a;
            return Q["n-minutes-ago"](a)
        }
        if (c < google[J].a.fg) {
            a = p[ya](c / google[J].a.Td);
            if (a <= 1) return Q["one-hour-ago"];
            else {
                a = a;
                return Q["n-hours-ago"](a)
            }
        }
        return this.$a(a)
    };
    P(google[J].a[E], "formatToRelativeDate", google[J].a[E].Jc);
    google[J].a[E].Le = function() {
        this.aj = this.gwsUrl = f;
        this.results = []
    };
    P(google[J].a[E], "clearResults", google[J].a[E].Le);
    google[J].a[E].Lg = function() {
        this.Me && this.Me();
        if (this.dd != -1) {
            google[L][Ha]("asa_" + this.B, "req." + ((new Date)[Ja]() - this.dd), b);
            this.dd = -1
        }
    };
    google[J].a[E].$ = function(a, c, d, e) {
        if (! (a == f && c == 204)) {
            this.gwsUrl = f;
            if (this.results && this.results[D] > 0) for (var g = 0; g < this.results[D]; g++) if (this.results[g].html) {
                var j = this.results[g].html;
                Qb || (Qb = o[A]("DIV"));
                Qb[s](j);
                q(Qb, "")
            }
            if (a && a.results && a.results[D] > 0) {
                this.results = a.results;
                if (a[F] && a[F].moreResultsUrl) this.gwsUrl = this.Ca && this.Ca != "" ? this.Ca: a[F].moreResultsUrl;
                else if (this.z && this.ra) this.gwsUrl = this.uh()
            } else this.results = [];
            this.completionStatus = c;
            this.hashStatus = e;
            this.ri = d;
            this.qf = a && a.resultAttribution && a.resultAttribution != f && a.resultAttribution != "" ? a.resultAttribution: f;
            if (a && a[F] && a[F].pages && a[F].pages[D] > 0) this.cursor = a[F];
            else typeof this[F] != "undefined" && delete this[F];
            if (a && a.context) this.context = a.context;
            else typeof this.context != "undefined" && delete this.context;
            if (a && a.promotions) this.promotions = a.promotions;
            else typeof this.promotions != "undefined" && delete this.promotions;
            if (a && a.omittedResults) this.omittedResults = a.omittedResults;
            else typeof this.omittedResults != "undefined" && delete this.omittedResults;
            this.Ze && this.sg();
            this.Lg()
        }
    };
    P(google[J].a[E], "onSearchComplete", google[J].a[E].$);
    google[J].a[E].$e = function() {
        var a = f;
        if (this.qf) a = U(this.qf, "gs-results-attribution");
        return a
    };
    P(google[J].a[E], "getAttribution", google[J].a[E].$e);
    google[J].a[E].sg = function() {
        var a,
        c;
        for (a = 0; a < this.results[D]; a++) {
            c = this.results[a];
            this.H(c)
        }
    };
    google[J].a[E].Kb = function(a, c, d) {
        d || (d = [f]);
        this.Me = S(a, c, d)
    };
    P(google[J].a[E], "setSearchCompleteCallback", google[J].a[E].Kb);
    google[J].a.ma = function(a, c) {
        var d = h,
        e;
        if (a[D]) for (var g = 0; g < a[D]; g++) if (a[g] == f) {
            a[g] = c;
            e = g;
            d = b;
            break
        }
        if (!d) {
            e = a[D];
            a[ua](c)
        }
        return e
    };
    P(google[J].a, "AllocateCompletionMapContext", google[J].a.ma);
    google[J].a[E].Mb = function(a) {
        this.gb = a
    };
    P(google[J].a[E], "setUserDefinedLabel", google[J].a[E].Mb);
    google[J].a[E].Sh = function(a) {
        this.Nb = a
    };
    P(google[J].a[E], "setUserDefinedClassSuffix", google[J].a[E].Sh);
    google[J].a[E].Kh = function() {
        this.Ze = h
    };
    P(google[J].a[E], "setNoHtmlGeneration", google[J].a[E].Kh);
    google[J].a.eb = function(a, c, d, e, g) {
        var j = p.min(p.min(d[v] / a, d[bb] / c), 1),
        l = {};
        ja(l, p[xa](a * j));
        ta(l, p[xa](c * j));
        if (e) {
            ja(e, l[v]);
            ta(e, l[bb]);
            if (g) e[I].left = (d[v] - l[v]) / 2 + "px"
        }
        return l
    };
    P(google[J].a, "scaleImage", google[J].a.eb);
    google[J].a.ye = 1;
    P(google[J].a, "VERTICAL_BRANDING", google[J].a.ye);
    google[J].a.Rf = 2;
    P(google[J].a, "HORIZONTAL_BRANDING", google[J].a.Rf);
    google[J].a.Og = function(a, c, d) {
        var e = c && c == google[J].a.ye,
        g = new Mb("gsc-");
        c = W(g.vc);
        var j = xb(f, f, g.vc);
        T(c, j);
        e = !e;
        if (!e) {
            Z(c, g.jc);
            Z(j, g.jc)
        }
        var l = yb(j, 0),
        u,
        w;
        if (e) w = u = l;
        else {
            u = l;
            w = yb(j, 0)
        }
        var B = "/css/small-logo.png",
        G = 51;
        l = 15;
        if (d) if (typeof d == "string") if (d[Ba](/^http:\/\/www\.youtube\.com/)) {
            B = "/css/youtube-logo-55x24.png";
            G = 55;
            l = 24;
            Z(c, g.vc + "-youtube");
            if (!e) {
                Z(c, g.jc + "-youtube");
                Z(j, g.jc + "-youtube")
            }
        }
        e = X(u, g.text);
        j = X(w, g.df);
        u = U(Q["powered-by"], g.text);
        B = google[L][Ia] + B;
        G = G;
        l = l;
        w = g.df;
        if (Jb && !Kb) {
            w = W(w);
            w[I].filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + B + '")';
            ja(w[I], G + "px");
            ta(w[I], l + "px")
        } else w = Ab(B, f, f, w);
        l = w;
        T(e, u);
        if (d) {
            e = "http://www.google.com";
            if (typeof d == "string" && (d[Ba](/^http:\/\/[a-z]*\.google\.com/) || d[Ba](/^http:\/\/www\.youtube\.com/))) e = d;
            d = Bb(e, f, "_BLANK");
            r(d, g.yg);
            T(d, l);
            T(j, d)
        } else T(j, l);
        if (a) {
            a = typeof a == "string" ? o[y](a) : a;
            sb(a);
            T(a, c)
        }
        return c
    };
    P(google[J].a, "getBranding", google[J].a.Og);
    google[J].a.setOnLoadCallback = function(a, c) {
        google.setOnLoadCallback(a, c)
    };
    P(google[J].a, "setOnLoadCallback", google[J].a.setOnLoadCallback);
    var Qb;
    google[J].a[E].Mg = function(a) {
        var c = this.rb;
        if (a) c = a;
        a = {};
        var d = W(this.qa());
        Z(d, "gs-result");
        Z(d, "gs-error-result");
        c = U(c, "gs-snippet");
        T(d, c);
        a.html = d;
        return a
    };
    google[J].a[E].Ng = function(a) {
        var c = this.yb;
        if (a) c = a;
        a = {};
        var d = W(this.qa());
        Z(d, "gs-result");
        Z(d, "gs-no-results-result");
        c = U(c, "gs-snippet");
        T(d, c);
        a.html = d;
        return a
    };
    k("google.search.CurrentLocale", ea);
    k("google.search.ShortDatePattern", aa);
    google[J].s = function() {
        google[J].a[K](this);
        this.B = "blog";
        this.Ga = "/GblogSearch";
        this.ra = "http://blogsearch.google.com/blogsearch";
        this.n = f;
        this.S = h;
        this.Ya = b;
        this.ia = qb(this, google[J].s[E].ta);
        this.Xa = "gsc-blogConfig";
        this.q = f
    };
    O("google.search.BlogSearch", google[J].s);
    ib(google[J].s, google[J].a);
    google[J].s.G = "GblogSearch";
    P(google[J].s, "RESULT_CLASS", google[J].s.G);
    google[J].s.p = [];
    google[J].s.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].s.p[j];
        google[J].s.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].s, "RawCompletion", google[J].s.N);
    google[J].s[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].s.p, this) : d;
        c = this.Ea(c == f ? "google.search.BlogSearch.RawCompletion": c, d, e);
        if (a) {
            a = a;
            if (this.L) a = a + " " + this.L;
            if (this.n) a = a + " blogurl:" + this.n;
            a = "&q=" + i(a);
            if (this.S) a += "&scoring=d";
            c += a;
            this.z = a
        }
        return c
    };
    google[J].s[E].H = function(a) {
        a.html && delete a.html;
        var c = W(this.qa());
        Z(c, "gs-result");
        var d;
        d = Y(a.postUrl, a[Ka], this.v(), "gs-title");
        T(c, d);
        d = new Date(a.publishedDate);
        d = U(this.$a(d), "gs-publishedDate");
        T(c, d);
        d = new Date(a.publishedDate);
        d = U(this.Jc(d), "gs-relativePublishedDate");
        T(c, d);
        d = U(a[za], "gs-snippet");
        T(c, d);
        d = Y(a.blogUrl, a.blogUrl, this.v(), "gs-visibleUrl");
        T(c, d);
        a.html = c;
        this.za(a.html)
    };
    P(google[J].s[E], "createResultHtml", google[J].s[E].H);
    google[J].s[E].xa = function(a) {
        this.n = a == f || a == "" ? f: a
    };
    P(google[J].s[E], "setSiteRestriction", google[J].s[E].xa);
    google[J].s[E].O = function(a) {
        this.S = a == google[J].a.pa ? b: h
    };
    P(google[J].s[E], "setResultOrder", google[J].s[E].O);
    google[J].s[E].ta = function(a, c) {
        if (c) {
            if (this.q == f) {
                var d = W("gsc-configSetting");
                this.q = Fb(f, "0", this.S, "gsc-configSettingCheckbox");
                T(d, this.q);
                T(d, U(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                var e = W("gsc-configSettingSubmit");
                T(e, Db(Q[Ta], "gsc-configSettingSubmit"));
                T(d, e);
                T(a, d)
            } else oa(this.q, this.S);
            this.q[Da]()
        } else if (this.q) this.q[Na] ? this.O(google[J].a.pa) : this.O(google[J].a.kb)
    };
    google[J].m = function() {
        google[J].a[K](this);
        this.B = "book";
        this.Ga = "/GbookSearch";
        this.ra = "http://books.google.com/books";
        this.Wb = h;
        this.gd = f
    };
    O("google.search.BookSearch", google[J].m);
    ib(google[J].m, google[J].a);
    google[J].m.G = "GbookSearch";
    P(google[J].m, "RESULT_CLASS", google[J].m.G);
    google[J].m.xe = "user-list";
    P(google[J].m, "USER_LIST", google[J].m.xe);
    google[J].m.pe = 1;
    P(google[J].m, "TYPE_ALL_BOOKS", google[J].m.pe);
    google[J].m.te = 2;
    P(google[J].m, "TYPE_FULL_VIEW_BOOKS", google[J].m.te);
    google[J].m.p = [];
    google[J].m.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].m.p[j];
        google[J].m.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].m, "RawCompletion", google[J].m.N);
    google[J].m[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].m.p, this) : d;
        c = this.Ea(c == f ? "google.search.BookSearch.RawCompletion": c, d, e);
        if (a) {
            a = a;
            if (this.L) a = a + " " + this.L;
            a = "&q=" + i(a);
            if (this.Wb) a += "&as_brr=1";
            if (this.gd) a = a + "&as_list=" + this.gd;
            c += a;
            this.z = a
        }
        return c
    };
    google[J].m[E].H = function(a) {
        a.html && delete a.html;
        a.thumbnailHtml = this.Dc(a);
        var c = W(this.qa());
        Z(c, "gs-result");
        var d = W("gs-text-box"),
        e = xb(),
        g = yb(e, 0),
        j = X(g, "gs-image-box");
        g = X(g, "gs-text-box");
        T(j, a.thumbnailHtml[Fa](b));
        T(g, d);
        T(c, e);
        e = Y(a.unescapedUrl, a[Ka], this.v(), "gs-title");
        T(d, e);
        e = U(Q.by + " " + a.authors, "gs-author");
        T(d, e);
        e = W("gs-spacer");
        T(d, e);
        if (a.publishedYear) {
            e = U(a.publishedYear, "gs-publishedDate");
            T(d, e)
        }
        if (ca(a.pageCount, 10) > 0) {
            e = U("- " + Q["page-count"](a.pageCount), "gs-pageCount");
            T(d, e)
        }
        e = Y("http://books.google.com", "books.google.com", this.v(), "gs-visibleUrl");
        T(d, e);
        a.html = c;
        this.za(a.html)
    };
    P(google[J].m[E], "createResultHtml", google[J].m[E].H);
    google[J].m[E].Dc = function(a) {
        var c = W("gs-image-box gs-book-image-box"),
        d = W("gs-row-1"),
        e = Ab("http://books.google.com/googlebooks/pages-trans.gif", f, f, "gs-pages");
        T(d, e);
        e = Ab("http://books.google.com/googlebooks/p_edge-trans.gif", f, f, "gs-page-edge");
        T(d, e);
        T(c, d);
        d = W("gs-row-2");
        e = google[J].a.eb(a.tbWidth, a.tbHeight, this.R);
        e = Ab(a.tbUrl, e[v], e[bb], "gs-image");
        a = Bb(a.unescapedUrl, f, this.v(), "gs-image");
        r(a, "gs-image");
        T(a, e);
        T(d, a);
        T(c, d);
        return c
    };
    google[J].m[E].V = function(a, c) {
        if (a == google[J].a.Ob) if (c) if (c == google[J].m.pe) this.Wb = h;
        else if (c == google[J].m.te) this.Wb = b;
        else this.V(a, f);
        else this.Wb = h;
        else if (a == google[J].m.xe) this.gd = c && c[Ba](/^[a-zA-Z0-9\-_]*$/) ? c: f
    };
    P(google[J].m[E], "setRestriction", google[J].m[E].V);
    google[J].b = function() {
        google[J].a[K](this);
        this.mf = 2;
        this.B = "image";
        this.Ga = "/GimageSearch";
        this.ra = "http://images.google.com/images";
        this.n = this.Zc = this.Ic = this.Pc = this.Nc = this.Mc = this.Oc = this.wa = f;
        this.R = {
            width: 112,
            height: 84
        }
    };
    O("google.search.ImageSearch", google[J].b);
    ib(google[J].b, google[J].a);
    google[J].b.G = "GimageSearch";
    P(google[J].b, "RESULT_CLASS", google[J].b.G);
    google[J].b.ae = "restrict-imagesize";
    P(google[J].b, "RESTRICT_IMAGESIZE", google[J].b.ae);
    google[J].b.Vf = ["icon"];
    P(google[J].b, "IMAGESIZE_SMALL", google[J].b.Vf);
    google[J].b.Uf = ["small", "medium", "large", "xlarge"];
    P(google[J].b, "IMAGESIZE_MEDIUM", google[J].b.Uf);
    google[J].b.Tf = ["xxlarge"];
    P(google[J].b, "IMAGESIZE_LARGE", google[J].b.Tf);
    google[J].b.Sf = ["huge"];
    P(google[J].b, "IMAGESIZE_EXTRA_LARGE", google[J].b.Sf);
    google[J].b.Zd = "restrict-coloration";
    P(google[J].b, "RESTRICT_COLORIZATION", google[J].b.Zd);
    google[J].b.ld = "mono";
    P(google[J].b, "COLORIZATION_BLACK_AND_WHITE", google[J].b.ld);
    google[J].b.nd = "gray";
    P(google[J].b, "COLORIZATION_GRAYSCALE", google[J].b.nd);
    google[J].b.md = "color";
    P(google[J].b, "COLORIZATION_COLOR", google[J].b.md);
    google[J].b.Yd = "restrict-colorfilter";
    P(google[J].b, "RESTRICT_COLORFILTER", google[J].b.Yd);
    google[J].b.wd = "red";
    P(google[J].b, "COLOR_RED", google[J].b.wd);
    google[J].b.td = "orange";
    P(google[J].b, "COLOR_ORANGE", google[J].b.td);
    google[J].b.zd = "yellow";
    P(google[J].b, "COLOR_YELLOW", google[J].b.zd);
    google[J].b.sd = "green";
    P(google[J].b, "COLOR_GREEN", google[J].b.sd);
    google[J].b.xd = "teal";
    P(google[J].b, "COLOR_TEAL", google[J].b.xd);
    google[J].b.pd = "blue";
    P(google[J].b, "COLOR_BLUE", google[J].b.pd);
    google[J].b.vd = "purple";
    P(google[J].b, "COLOR_PURPLE", google[J].b.vd);
    google[J].b.ud = "pink";
    P(google[J].b, "COLOR_PINK", google[J].b.ud);
    google[J].b.yd = "white";
    P(google[J].b, "COLOR_WHITE", google[J].b.yd);
    google[J].b.rd = "gray";
    P(google[J].b, "COLOR_GRAY", google[J].b.rd);
    google[J].b.od = "black";
    P(google[J].b, "COLOR_BLACK", google[J].b.od);
    google[J].b.qd = "brown";
    P(google[J].b, "COLOR_BROWN", google[J].b.qd);
    google[J].b.$d = "restrict-filetype";
    P(google[J].b, "RESTRICT_FILETYPE", google[J].b.$d);
    google[J].b.Ed = "jpg";
    P(google[J].b, "FILETYPE_JPG", google[J].b.Ed);
    google[J].b.Fd = "png";
    P(google[J].b, "FILETYPE_PNG", google[J].b.Fd);
    google[J].b.Dd = "gif";
    P(google[J].b, "FILETYPE_GIF", google[J].b.Dd);
    google[J].b.Cd = "bmp";
    P(google[J].b, "FILETYPE_BMP", google[J].b.Cd);
    google[J].b.be = "restrict-imagetype";
    P(google[J].b, "RESTRICT_IMAGETYPE", google[J].b.be);
    google[J].b.Hd = "face";
    P(google[J].b, "IMAGETYPE_FACES", google[J].b.Hd);
    google[J].b.Gd = "clipart";
    P(google[J].b, "IMAGETYPE_CLIPART", google[J].b.Gd);
    google[J].b.Id = "lineart";
    P(google[J].b, "IMAGETYPE_LINEART", google[J].b.Id);
    google[J].b.Jd = "news";
    P(google[J].b, "IMAGETYPE_NEWS", google[J].b.Jd);
    google[J].b.Kd = "photo";
    P(google[J].b, "IMAGETYPE_PHOTO", google[J].b.Kd);
    google[J].b.ce = "restrict-rights";
    P(google[J].b, "RESTRICT_RIGHTS", google[J].b.ce);
    google[J].b.ge = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived)";
    P(google[J].b, "RIGHTS_REUSE", google[J].b.ge);
    google[J].b.ee = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommercial)";
    P(google[J].b, "RIGHTS_COMMERCIAL_REUSE", google[J].b.ee);
    google[J].b.fe = "(cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial).-(cc_nonderived)";
    P(google[J].b, "RIGHTS_MODIFICATION", google[J].b.fe);
    google[J].b.de = "(cc_publicdomain|cc_attribute|cc_sharealike).-(cc_noncommercial|cc_nonderived)";
    P(google[J].b, "RIGHTS_COMMERCIAL_MODIFICATION", google[J].b.de);
    google[J].b.p = [];
    google[J].b.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].b.p[j];
        google[J].b.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].b, "RawCompletion", google[J].b.N);
    google[J].b[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].b.p, this) : d;
        c = this.Ea(c == f ? "google.search.ImageSearch.RawCompletion": c, d, e);
        if (a) {
            a = a;
            if (this.L) a = a + " " + this.L;
            a = "&q=" + i(a);
            if (this.wa) a = a + "&safe=" + this.wa;
            if (this.Oc) a = a + "&imgsz=" + i(this.Oc);
            if (this.Mc) a = a + "&imgc=" + i(this.Mc);
            if (this.Nc) a = a + "&imgcolor=" + i(this.Nc);
            if (this.Pc) a = a + "&imgtype=" + i(this.Pc);
            if (this.Ic) a = a + "&as_filetype=" + i(this.Ic);
            if (this.Zc) a = a + "&as_rights=" + i(this.Zc);
            if (this.n) a = a + "&as_sitesearch=" + i(this.n);
            c += a;
            this.z = a;
            if (e && e != 0) this.z = this.z + "&start=" + e
        }
        return c
    };
    google[J].b[E].H = function(a) {
        a.html && delete a.html;
        var c = W(this.qa());
        Z(c, "gs-result");
        var d = W("gs-image-box"),
        e = google[J].a.eb(a.tbWidth, a.tbHeight, this.R),
        g = Ab(a.tbUrl, e[v], e[bb], "gs-image");
        g[I].left = (this.R[v] - e[v]) / 2 + "px";
        na(g, a.titleNoFormatting + " (" + a.visibleUrl + ")");
        e = Bb(a.unescapedUrl, f, this.v(), "gs-image");
        r(e, "gs-image");
        T(e, g);
        T(d, e);
        T(c, d);
        d = W("gs-text-box");
        g = U(a[za], "gs-snippet");
        na(g, a.contentNoFormatting);
        T(d, g);
        g = U(a[v] + " x " + a[bb], "gs-size");
        T(d, g);
        g = Y(a.originalContextUrl, a.visibleUrl, this.v(), "gs-visibleUrl");
        na(g, a.visibleUrl);
        T(d, g);
        T(c, d);
        a.html = c;
        this.za(a.html)
    };
    P(google[J].b[E], "createResultHtml", google[J].b[E].H);
    google[J].b[E].xa = function(a) {
        this.n = a
    };
    P(google[J].b[E], "setSiteRestriction", google[J].b[E].xa);
    google[J].b[E].V = function(a, c) {
        if (a == google[J].a.mc) this.wa = c ? c == google[J].a.oc || c == google[J].a.nc ? c: f: f;
        else if (a == google[J].b.ae) this.Oc = c ? c[cb]("|") : f;
        else if (a == google[J].b.Zd) this.Mc = c ? c == google[J].b.ld || c == google[J].b.nd || c == google[J].b.md ? c: f: f;
        else if (a == google[J].b.Yd) this.Nc = c ? c == google[J].b.wd || c == google[J].b.td || c == google[J].b.zd || c == google[J].b.sd || c == google[J].b.xd || c == google[J].b.pd || c == google[J].b.vd || c == google[J].b.ud || c == google[J].b.yd || c == google[J].b.rd || c == google[J].b.od || c == google[J].b.qd ? c: f: f;
        else if (a == google[J].b.$d) this.Ic = c ? c == google[J].b.Ed || c == google[J].b.Fd || c == google[J].b.Dd || c == google[J].b.Cd ? c: f: f;
        else if (a == google[J].b.be) this.Pc = c ? c == google[J].b.Hd || c == google[J].b.Gd || c == google[J].b.Id || c == google[J].b.Jd || c == google[J].b.Kd ? c: f: f;
        else if (a == google[J].b.ce) this.Zc = c ? c == google[J].b.ge || c == google[J].b.ee || c == google[J].b.fe || c == google[J].b.de ? c: f: f
    };
    P(google[J].b[E], "setRestriction", google[J].b[E].V);
    google[J].f = function() {
        google[J].a[K](this);
        this.fa = f;
        this.ea = "San Francisco, CA";
        this.ha = {
            y: 37.77916,
            x: -122.42009
        };
        this.Va = f;
        this.xb = b;
        this.lb = h;
        this.db = f;
        this.Ya = b;
        this.ia = qb(this, this.ta);
        this.Xa = "gsc-locationConfig";
        this.B = "local";
        this.Ga = "/GlocalSearch";
        this.ra = "http://www.google.com/local";
        this.Ta = this.K = f
    };
    O("google.search.LocalSearch", google[J].f);
    ib(google[J].f, google[J].a);
    google[J].f.G = "GlocalSearch";
    P(google[J].f, "RESULT_CLASS", google[J].f.G);
    google[J].f.se = "blended";
    P(google[J].f, "TYPE_BLENDED_RESULTS", google[J].f.se);
    google[J].f.ve = "kmlonly";
    P(google[J].f, "TYPE_KMLONLY_RESULTS", google[J].f.ve);
    google[J].f.we = "localonly";
    P(google[J].f, "TYPE_LOCALONLY_RESULTS", google[J].f.we);
    google[J].f.hd = "disabled";
    P(google[J].f, "ADDRESS_LOOKUP_DISABLED", google[J].f.hd);
    google[J].f.jd = "enabled";
    P(google[J].f, "ADDRESS_LOOKUP_ENABLED", google[J].f.jd);
    google[J].f.le = 0;
    P(google[J].f, "STATIC_MAP_ZOOM_FARTHEST", google[J].f.le);
    google[J].f.ng = 13;
    P(google[J].f, "STATIC_MAP_ZOOM_DEFAULT", google[J].f.ng);
    google[J].f.ke = 21;
    P(google[J].f, "STATIC_MAP_ZOOM_CLOSEST", google[J].f.ke);
    google[J].f.tc = 8;
    P(google[J].f, "STATIC_MAP_MAX_POINTS", google[J].f.tc);
    google[J].f.sh = 3.141592653589;
    google[J].f.Jg = 6367E3;
    google[J].f.Yh = 16093;
    google[J].f.p = [];
    google[J].f.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].f.p[j];
        google[J].f.p[j] = f;
        a.resultViewport = c && c.viewport ? c.viewport: f;
        a.$(c, d, e, g)
    };
    P(google[J].f, "RawCompletion", google[J].f.N);
    google[J].f[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].f.p, this) : d;
        c = this.Ea(c == f ? "google.search.LocalSearch.RawCompletion": c, d, e);
        e = "";
        if (a) {
            e = "&q=" + i(a);
            c += e
        }
        this.tj = f;
        if (this.fa) {
            var g;
            if (this.xb) {
                d = this.fa.getCenterLatLng();
                g = this.fa.getSpanLatLng();
                a = "&sll=" + d.y + "," + d.x;
                a += "&sspn=" + g[bb] + "," + g[v]
            } else {
                d = this.fa.getCenter();
                g = this.fa.getBounds().toSpan().toUrlValue();
                a = "&sll=" + d.y + "," + d.x;
                a += "&sspn=" + g
            }
            a += google[J].f.wc(d.y, d.x);
            c += a;
            e += a
        } else if (this.ha) {
            a = "&sll=" + this.ha.y + "," + this.ha.x;
            if (this.Va) a = a + "&sspn=" + this.Va.lat + "," + this.Va.lng;
            a += google[J].f.wc(this.ha.y, this.ha.x);
            c += a;
            e += a
        } else if (this.ea) {
            a = "&near=" + i(this.ea);
            c += a;
            e += a
        }
        if (this.lb) {
            c += "&nogeocode=t";
            e += "&nogeocode=t"
        }
        if (this.db) {
            c += "&mrt=" + i(this.db);
            e += "&mrt=" + i(this.db)
        }
        if (e) this.z = e;
        return c
    };
    google[J].f.wc = function(a, c) {
        var d = 2 * google[J].f.Yh / google[J].f.Jg * 2 * google[J].f.sh,
        e = c - d,
        g = a + d,
        j = c + d;
        return "&gll=" + p[ya]((a - d) * 1E6) + "," + p[ya](e * 1E6) + "," + p[ya](g * 1E6) + "," + p[ya](j * 1E6) + "&llsep=500,500"
    };
    P(google[J].f, "centerToGll", google[J].f.wc);
    google[J].f[E].H = function(a) {
        a.html && delete a.html;
        var c = W(this.qa());
        Z(c, "gs-result");
        var d;
        d = Y(a.url, a[Ka], this.v(), "gs-title");
        T(c, d);
        if (a.listingType == "kml" && a[za] && a[za] != "") {
            d = U(a[za], "gs-snippet");
            T(c, d)
        }
        var e = W("gs-address");
        if (a.addressLines && a.addressLines[D] > 0) for (var g = 0; g < a.addressLines[D]; g++) {
            d = a.addressLines[g];
            var j = "gs-addressLine";
            if (g == 0) j = "gs-street gs-addressLine";
            else if (g == 1) j = "gs-city gs-addressLine";
            d = U(d, j);
            T(e, d)
        } else {
            d = U(a.streetAddress, "gs-street");
            T(e, d);
            g = "";
            if (a.city != "") {
                g = a.city;
                if (a.region != "") g += ", "
            }
            d = U(g, "gs-city");
            T(e, d);
            d = U(a.region, "gs-region");
            T(e, d)
        }
        d = U(a.country, "gs-country");
        T(e, d);
        T(c, e);
        if (a.phoneNumbers && a.phoneNumbers[D]) {
            g = e = f;
            d = a.phoneNumbers[0];
            for (var l = 0; l < a.phoneNumbers[D]; l++) {
                j = a.phoneNumbers[l];
                if (j[Ga] == "main") {
                    e = j;
                    break
                }
                if (j[Ga] == "" || j[Ga] == "mobile" && g == f) g = j
            }
            j = e ? e: g ? g: d;
            d = U(j.number, "gs-phone");
            T(c, d)
        }
        if (a.ddUrl && a.ddUrl != "") {
            d = Y(a.ddUrl, Q.directions, this.v(), "gs-directions");
            T(c, d)
        }
        if (a.ddUrlToHere && a.ddUrlToHere != "" && a.ddUrlFromHere && a.ddUrlFromHere != "") {
            d = W("gs-directions-to-from");
            e = U(Q["get-directions"] + ":", "gs-label");
            d[s](e);
            e = Y(a.ddUrlToHere, Q["to-here"], this.v(), "gs-secondary-link");
            d[s](e);
            e = U("-", "gs-spacer");
            d[s](e);
            e = Y(a.ddUrlFromHere, Q["from-here"], this.v(), "gs-secondary-link");
            d[s](e);
            T(c, d)
        }
        a.html = c;
        this.za(a.html)
    };
    P(google[J].f[E], "createResultHtml", google[J].f[E].H);
    google[J].f[E].tf = function(a) {
        if (a.centerAndZoom) {
            this.xb = b;
            this.fa = a;
            this.ha = f;
            this.ea = "";
            if (this.K) this.K = f
        } else if (a.setCenter) {
            this.xb = h;
            this.fa = a;
            this.Va = this.ha = f;
            this.ea = "";
            if (this.K) this.K = f
        } else if (a.x && a.y) {
            this.xb = b;
            this.ha = a;
            this.fa = this.Va = f;
            this.ea = "";
            if (this.K) this.K = f
        } else if (a != f && a != "") {
            this.xb = b;
            this.fa = f;
            this.ea = a;
            this.ha = f;
            if (this.K) this.K = f;
            var c = new google[J].f;
            c.Kb(this, this.rg, [c, a]);
            c[M](a)
        }
    };
    P(google[J].f[E], "setCenterPoint", google[J].f[E].tf);
    google[J].f[E].rg = function(a, c) {
        if (a.results && a.results[D]) {
            var d = {};
            d.y = da(a.results[0].lat);
            d.x = da(a.results[0].lng);
            this.ha = d;
            this.ea = c;
            this.Ya = b;
            this.fa = f;
            if (a.resultViewport) {
                d = {};
                d.Ii = da(a.resultViewport.span.lat) / 2;
                d.Ji = da(a.resultViewport.span.lng) / 2;
                this.Va = d
            }
        }
    };
    google[J].f[E].ta = function(a, c) {
        if (c) {
            if (this.K == f) {
                var d = f;
                if (this.fa == f) {
                    var e = W("gsc-configSetting");
                    this.K = Eb(f, "gsc-configSettingInput", this.ea == "" ? f: this.ea);
                    T(e, U(Q["search-location"], "gsc-configSettingInputLabel"));
                    T(e, this.K);
                    T(a, e);
                    d = this.K
                }
                e = W("gsc-configSetting");
                this.Ta = Fb(f, "0", this.lb, "gsc-configSettingCheckbox");
                T(e, this.Ta);
                T(e, U(Q["disable-address-lookup"], "gsc-configSettingCheckboxLabel"));
                if (d == f) d = this.Ta;
                var g = U(f, "gsc-configSettingSubmit");
                T(g, Db(Q[Ta], "gsc-configSettingSubmit"));
                T(e, g);
                T(a, e);
                d[Da]()
            }
        } else {
            if (this.K) {
                if (this.K[z]) {
                    this.ea = this.K[z];
                    this.tf(this.ea)
                }
                this.K = f
            }
            if (this.Ta) {
                this.lb = this.Ta[Na];
                this.Ta = f
            }
            sb(a)
        }
    };
    google[J].f[E].Dh = function(a) {
        if (a == google[J].f.hd) this.lb = b;
        else if (a == google[J].f.jd) this.lb = h
    };
    P(google[J].f[E], "setAddressLookupMode", google[J].f[E].Dh);
    google[J].f.pf = function(a, c, d, e) {
        var g = a.staticMapUrl;
        g = g[x](/&size=\d*x\d*/, "&size=" + d + "x" + c);
        if (e && e <= google[J].f.ke && e >= google[J].f.le) g = g[x](/&zoom=\d*/, "&zoom=" + e);
        return a.staticMapUrl = g
    };
    P(google[J].f, "resizeStaticMapUrl", google[J].f.pf);
    google[J].f.Bg = function(a, c, d, e) {
        var g = "",
        j = "http://maps.google.com/maps/api/staticmap?maptype=roadmap&size=150x100&zoom=13&format=gif&sensor=false",
        l = {};
        l.staticMapUrl = j;
        j = google[J].f.pf(l, c, d, e);
        if (e == f) j = j[x](/&zoom=\d*/, "");
        c = a[D];
        if (c > google[J].f.tc) c = google[J].f.tc;
        for (d = 0; d < c; d++) {
            l = a[d];
            if (l.lat && l.lng) if (typeof l.lat == "string") {
                e = da(l.lat);
                l = da(l.lng)
            } else {
                e = l.lat;
                l = l.lng
            } else if (l.x && l.y) {
                e = l.y;
                l = l.x
            } else return f;
            e = "&markers=__ICONID____LAT__,__LNG__" [x](/__LAT__/, e);
            e = e[x](/__LNG__/, l);
            l = 65 + d;
            e = c > 1 ? e[x](/__ICONID__/, "label:" + String.fromCharCode(l) + "|") : e[x](/__ICONID__/, "");
            g += e
        }
        return j + g
    };
    P(google[J].f, "computeStaticMapUrl", google[J].f.Bg);
    google[J].f[E].V = function(a, c) {
        if (a == google[J].a.Ob) if (c) {
            this.db = f;
            this.db = c == google[J].f.se || c == google[J].f.ve || c == google[J].f.we ? c: f
        } else this.db = f
    };
    P(google[J].f[E], "setRestriction", google[J].f[E].V);
    google[J].o = function() {
        google[J].a[K](this);
        this.B = "news";
        this.Ga = "/GnewsSearch";
        this.ra = "http://news.google.com/nwshp";
        this.gj = f;
        this.fb = "site:";
        this.S = h;
        this.Ya = b;
        this.ia = qb(this, this.ta);
        this.Xa = "gsc-newsConfig";
        this.A = this.q = f
    };
    O("google.search.NewsSearch", google[J].o);
    ib(google[J].o, google[J].a);
    google[J].o.G = "GnewsSearch";
    P(google[J].o, "RESULT_CLASS", google[J].o.G);
    google[J].o.Wd = "GnewsSearch.quote";
    P(google[J].o, "QUOTE_RESULT_CLASS", google[J].o.Wd);
    google[J].o.p = [];
    google[J].o.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].o.p[j];
        google[J].o.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].o, "RawCompletion", google[J].o.N);
    google[J].o[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].o.p, this) : d;
        c = this.Ea(c == f ? "google.search.NewsSearch.RawCompletion": c, d, e);
        if (a || !a && this.A) {
            d = f;
            if (a) d = a;
            if (this.L) d = d == f ? this.L: d + " " + this.L;
            if (this.n) d = d == f ? this.fb + this.n: d + " " + this.fb + this.n;
            a = d ? "&q=" + i(d) : "";
            if (this.S) a += "&scoring=d";
            if (this.A) {
                d = "";
                for (var g in this.A) if (g.charAt(0) == ":") d += "&" + this.A[g];
                a += d
            }
            if (this.n && this.fb == "source:") c = c[x](/&hl=.*&/, "&hl=en&");
            c += a;
            this.z = a;
            if (e && e != 0) this.z = this.z + "&start=" + e
        }
        return c
    };
    google[J].o[E].H = function(a) {
        a.html && delete a.html;
        if (a.GsearchResultClass != google[J].o.Wd) {
            var c = W(this.qa());
            Z(c, "gs-result");
            var d;
            d = Y(a.unescapedUrl, a[Ka], this.v(), "gs-title");
            T(c, d);
            d = U(a.publisher, "gs-publisher");
            T(c, d);
            d = a[Ra][Oa](",");
            if (d[D] > 1) {
                d = U(", " + d[d[D] - 1], "gs-location");
                T(c, d)
            }
            d = new Date(a.publishedDate);
            d = U(" - " + this.$a(d), "gs-publishedDate");
            T(c, d);
            d = new Date(a.publishedDate);
            d = U(" - " + this.Jc(d), "gs-relativePublishedDate");
            T(c, d);
            d = U(a[za], "gs-snippet");
            T(c, d);
            if (a.clusterUrl && a.clusterUrl != "") {
                d = Y(a.clusterUrl, Q["related-articles"] + " »", this.v(), "gs-clusterUrl");
                T(c, d)
            }
            a.html = c;
            this.za(a.html)
        }
    };
    P(google[J].o[E], "createResultHtml", google[J].o[E].H);
    google[J].o[E].xa = function(a) {
        if (a == f || a == "") {
            this.n = f;
            this.fb = "site:"
        } else if (a[Ba]("[./:]")) {
            this.fb = "site:";
            this.n = a
        } else {
            this.fb = "source:";
            this.n = a[x](/\s/g, "_")
        }
    };
    P(google[J].o[E], "setSiteRestriction", google[J].o[E].xa);
    google[J].o[E].O = function(a) {
        this.S = a == google[J].a.pa ? b: h
    };
    P(google[J].o[E], "setResultOrder", google[J].o[E].O);
    google[J].o[E].ta = function(a, c) {
        if (c) {
            if (this.q == f) {
                var d = W("gsc-configSetting");
                this.q = Fb(f, "0", this.S, "gsc-configSettingCheckbox");
                T(d, this.q);
                T(d, U(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                var e = W("gsc-configSettingSubmit");
                T(e, Db(Q[Ta], "gsc-configSettingSubmit"));
                T(d, e);
                T(a, d)
            } else oa(this.q, this.S);
            this.q[Da]()
        } else if (this.q) this.q[Na] ? this.O(google[J].a.pa) : this.O(google[J].a.kb)
    };
    google[J].o[E].tg = {
        geo: b,
        qsid: b,
        quotesearch: b,
        topic: b,
        ned: b,
        scoring: b,
        as_mind: b,
        as_minm: b,
        as_miny: b,
        as_maxd: b,
        as_maxm: b,
        as_maxy: b
    };
    google[J].o[E].V = function(a, c) {
        if (a == google[J].a.Ra) if (c) for (var d in c) {
            var e = c[d];
            if (typeof this.tg[d] != "undefined") {
                this.A = this.A || {};
                this.A[":" + d] = d + "=" + i(e)
            }
        } else this.A = f
    };
    P(google[J].o[E], "setRestriction", google[J].o[E].V);
    google[J].j = function() {
        google[J].a[K](this);
        this.B = "patent";
        this.Ga = "/GpatentSearch";
        this.ra = "http://www.google.com/patents";
        this.Af = "";
        this.Db = f;
        this.Ya = b;
        this.ia = qb(this, this.ta);
        this.Xa = "gsc-patentConfig";
        this.q = f
    };
    O("google.search.PatentSearch", google[J].j);
    ib(google[J].j, google[J].a);
    google[J].j.G = "GpatentSearch";
    P(google[J].j, "RESULT_CLASS", google[J].j.G);
    google[J].j.qe = 1;
    P(google[J].j, "TYPE_ANY_STATUS", google[J].j.qe);
    google[J].j.ue = 2;
    P(google[J].j, "TYPE_ISSUED_PATENTS", google[J].j.ue);
    google[J].j.re = 3;
    P(google[J].j, "TYPE_APPLICATIONS", google[J].j.re);
    google[J].j.p = [];
    google[J].j.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].j.p[j];
        google[J].j.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].j, "RawCompletion", google[J].j.N);
    google[J].j[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].j.p, this) : d;
        c = this.Ea(c == f ? "google.search.PatentSearch.RawCompletion": c, d, e);
        if (a) {
            a = a;
            if (this.L) a = a + " " + this.L;
            a = "&q=" + i(a) + this.Af;
            if (this.Db) a += this.Db;
            c += a;
            this.z = a
        }
        return c
    };
    google[J].j[E].H = function(a) {
        a.html && delete a.html;
        a.thumbnailHtml = this.Dc(a);
        var c = W(this.qa());
        Z(c, "gs-result");
        var d = W("gs-text-box"),
        e = xb(),
        g = yb(e, 0),
        j = X(g, "gs-image-box");
        g = X(g, "gs-text-box");
        T(j, a.thumbnailHtml[Fa](b));
        T(g, d);
        T(c, e);
        j = Y(a.unescapedUrl, a[Ka], this.v(), "gs-title");
        T(d, j);
        e = W("gs-patent-info gs-metadata");
        T(d, e);
        j = f;
        j = a.patentNumber ? a.patentStatus == "issued" ? Q["us-pat"] + " " + a.patentNumber: Q["us-pat-app"] + " " + a.patentNumber: Q["us-pat-app"] + "  N/A";
        j = U(j, "gs-patent-number");
        T(e, j);
        if (a.applicationDate) {
            j = U(" - " + this.$a(new Date(a.applicationDate)), "gs-publishedDate");
            T(e, j)
        }
        if (a.assignee) {
            j = U(" - " + a.assignee, "gs-author");
            T(e, j)
        }
        j = U(a[za], "gs-snippet");
        T(d, j);
        T(d, j);
        a.html = c;
        this.za(a.html)
    };
    P(google[J].j[E], "createResultHtml", google[J].j[E].H);
    google[J].j[E].Dc = function(a) {
        var c = W("gs-patent-image"),
        d = Ab(a.tbUrl, 75, 100, "gs-image");
        a = Bb(a.unescapedUrl, f, this.v(), "gs-image");
        r(a, "gs-image");
        T(a, d);
        T(c, a);
        return c
    };
    google[J].j[E].O = function(a) {
        this.Db = a == google[J].a.pa ? "&scoring=d": a == google[J].a.Vd ? "&scoring=ad": f
    };
    P(google[J].j[E], "setResultOrder", google[J].j[E].O);
    google[J].j[E].V = function(a, c) {
        if (a == google[J].a.Ob) this.Af = c ? c == google[J].j.qe ? "": c == google[J].j.ue ? "&as_psrg=1": c == google[J].j.re ? "&as_psra=1": "": ""
    };
    P(google[J].j[E], "setRestriction", google[J].j[E].V);
    google[J].j[E].ta = function(a, c) {
        if (c) {
            var d = h;
            if (this.Db && this.Db == "&scoring=d") d = b;
            if (this.q == f) {
                var e = W("gsc-configSetting");
                this.q = Fb(f, "0", d, "gsc-configSettingCheckbox");
                T(e, this.q);
                T(e, U(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                d = W("gsc-configSettingSubmit");
                T(d, Db(Q[Ta], "gsc-configSettingSubmit"));
                T(e, d);
                T(a, e)
            } else oa(this.q, d);
            this.q[Da]()
        } else if (this.q) this.q[Na] ? this.O(google[J].a.pa) : this.O(google[J].a.kb)
    };
    google[J].D = function() {
        this.nf = this.da = google[J].c.Ia;
        this.l = f;
        this.R = {
            width: 112,
            height: 84
        };
        this.kc = {
            width: 100,
            height: 75
        };
        this.yb = f
    };
    O("google.search.SearcherOptions", google[J].D);
    google[J].D[E].vf = function(a) {
        switch (a) {
        case google[J].c.Bd:
        case google[J].c.Pa:
        case google[J].c.Ia:
            this.da = a;
            break;
        default:
            this.da = google[J].c.Ia;
            break
        }
        this.nf = this.da
    };
    P(google[J].D[E], "setExpandMode", google[J].D[E].vf);
    google[J].D[E].Nh = function(a) {
        sb(a);
        this.l = a
    };
    P(google[J].D[E], "setRoot", google[J].D[E].Nh);
    google[J].D[E].Jb = function(a) {
        this.yb = a
    };
    P(google[J].D[E], "setNoResultsString", google[J].D[E].Jb);
    google[J].D[E].Hh = function(a) {
        if (a > 100) a = 100;
        ta(this.R, a);
        ja(this.R, p[xa](a * 1.33))
    };
    P(google[J].D[E], "setImageResultsTbHeight", google[J].D[E].Hh);
    google[J].D[E].Th = function(a) {
        if (a > 100) a = 100;
        ta(this.kc, a);
        ja(this.kc, p[xa](a * 1.33))
    };
    P(google[J].D[E], "setVideoResultsTbHeight", google[J].D[E].Th);
    google[J].M = function() {
        ia(this, f);
        this.zf = f;
        this.Q = google[J].c.ya;
        this.Je = h
    };
    O("google.search.DrawOptions", google[J].M);
    google[J].M[E].Ih = function(a) {
        ia(this, a)
    };
    P(google[J].M[E], "setInput", google[J].M[E].Ih);
    google[J].M[E].Oh = function(a) {
        if (a && typeof a == "string") a = o[y](a);
        this.zf = a
    };
    P(google[J].M[E], "setSearchFormRoot", google[J].M[E].Oh);
    google[J].M[E].uf = function(a) {
        this.Q = a == google[J].c.ya || a == google[J].c.na ? a: google[J].c.ya
    };
    P(google[J].M[E], "setDrawMode", google[J].M[E].uf);
    google[J].M[E].Fh = function(a) {
        this.Je = a
    };
    P(google[J].M[E], "setAutoComplete", google[J].M[E].Fh);
    google[J].C = function(a, c, d) {
        this.w = d;
        this.Bc = this.Hc = h;
        this.g = a;
        this.F = f;
        this.zh = S(c, google[J].c[E].rh, [this]);
        this.Ch = S(c, google[J].c[E].Vc, [this, google[J].C.sc]);
        this.Bh = S(c, google[J].c[E].Vc, [this, google[J].C.rc]);
        this.Ah = S(c, google[J].c[E].Vc, [this, google[J].C.je]);
        this.yh = S(c, google[J].c[E].qh, [this]);
        this.xh = S(c, google[J].c[E].lh, [this]);
        this.g.Kb(c, google[J].c[E].$, [this]);
        this.g.W(c.Cb);
        this.g.Ib(c.Ka);
        this.U = this.Za = this.Ba = this.Yc = this.tb = this.ic = this.l = f;
        this.wb = b
    };
    google[J].C.qc = 0;
    google[J].C.sc = 1;
    google[J].C.rc = 2;
    google[J].C.je = 3;
    google[J].C[E].bd = function(a) {
        var c = "gsc-results-selector ";
        c += a == google[J].C.qc ? this.w.da == google[J].c.Ia ? "gsc-one-result-active": this.g.va == google[J].a.ba ? "gsc-more-results-active": "gsc-all-results-active": a == google[J].C.sc ? "gsc-one-result-active": a == google[J].C.rc ? "gsc-more-results-active": "gsc-all-results-active";
        r(this.Yc, c)
    };
    google[J].c = function(a) {
        if (!google[L].KeyVerified) if (google[J].c.hf()) google[L].KeyVerified = b;
        else return;
        this.De = this.Cb = google[J].a.ba;
        this.Q = google[J].c.ya;
        this.cc = this.l = f;
        ia(this, f);
        this.hc = google[J].c.Pb;
        this.bh = S(this, google[J].c[E].mh, [f]);
        this.dh = S(this, google[J].c[E].nh, [f]);
        this.bb = this.Eb = this.ad = this.Zb = f;
        this.mb = this.hh = h;
        this.Ka = google[J].a.jb;
        this.Qc = Q.copy;
        this.e = [];
        this.ji = [];
        var c;
        if (a) for (var d = 0; d < a[D]; d++) {
            c = new google[J].C(a[d], this, h);
            this.e[ua](c)
        }
    };
    O("google.search.SearchControl", google[J].c);
    google[J].c.Ud = Q["no-results"];
    P(google[J].c, "NO_RESULTS_DEFAULT_STRING", google[J].c.Ud);
    google[J].c.oe = 350;
    P(google[J].c, "TIMEOUT_SHORT", google[J].c.oe);
    google[J].c.Pb = 500;
    P(google[J].c, "TIMEOUT_MEDIUM", google[J].c.Pb);
    google[J].c.ne = 700;
    P(google[J].c, "TIMEOUT_LONG", google[J].c.ne);
    google[J].c.Bd = 1;
    P(google[J].c, "EXPAND_MODE_CLOSED", google[J].c.Bd);
    google[J].c.Pa = 2;
    P(google[J].c, "EXPAND_MODE_OPEN", google[J].c.Pa);
    google[J].c.Ia = 3;
    P(google[J].c, "EXPAND_MODE_PARTIAL", google[J].c.Ia);
    google[J].c.ya = 1;
    P(google[J].c, "DRAW_MODE_LINEAR", google[J].c.ya);
    google[J].c.na = 2;
    P(google[J].c, "DRAW_MODE_TABBED", google[J].c.na);
    google[J].c.Rd = "save";
    P(google[J].c, "KEEP_LABEL_SAVE", google[J].c.Rd);
    google[J].c.Qd = "keep";
    P(google[J].c, "KEEP_LABEL_KEEP", google[J].c.Qd);
    google[J].c.Pd = "include";
    P(google[J].c, "KEEP_LABEL_INCLUDE", google[J].c.Pd);
    google[J].c.Od = "copy";
    P(google[J].c, "KEEP_LABEL_COPY", google[J].c.Od);
    google[J].c.Nd = "blank";
    P(google[J].c, "KEEP_LABEL_BLANK", google[J].c.Nd);
    google[J].c.lc = "gsc-loading-id";
    try {
        google[J].c.appPath = m[Ra].href
    } catch(Sb) {
        google[J].c.appPath = f
    }
    google[J].c.hf = function() {
        var a = b,
        c;
        c = m[Ra].host[db]()[Oa](".");
        if (c[D] < 2) c = h;
        else {
            var d = c.pop(),
            e = c.pop();
            if ((e == "igoogle" || e == "gmodules" || e == "googlesyndication") && d == "com") c = b;
            else {
                if (d[D] == 2 && c[D] > 0) if (Hb[e] && Hb[e][d] == 1) e = c.pop();
                c = e == "google"
            }
        }
        if (c) return b;
        if (google[L].LoadFailure) if (google[L].OriginalAppPath && google[J].c.appPath) {
            google[L].LoadFailure = h;
            a = b
        }
        google[L].KeyVerified = b;
        google[L].LoadFailure = h;
        return a
    };
    P(google[J].c, "keyCheck", google[J].c.hf);
    google[J].c[E].pb = function(a, c) {
        this.Aa = b;
        this.Ua = a;
        if (c) {
            if (c.includeVerticalAds != n) this.Ha = c.includeVerticalAds;
            if (c.includeSideAds != n) this.Ha = c.includeSideAds;
            if (c.iframes != n) this.sb = c.iframes;
            if (c.useNarrowTopAd != n) if (this.sb) this.bi = c.useNarrowTopAd;
            if (c.channel) this.Ae = c.channel;
            if (c.clientIP) this.Be = c.clientIP;
            if (c.safe) this.Ce = c.safe;
            if (c[Qa]) this.Fe = c[Qa];
            var d = c.adtest || c.debug;
            if (d) this.Ee = d;
            if (c.numTopAds != n) {
                this.La = c.numTopAds;
                this.La = p.max(0, p.min(4, this.La))
            }
            if (c.numSideAds != n) {
                this.Da = c.numSideAds;
                this.Ha = (this.Da = p.max(0, p.min(8, this.Da))) ? b: h
            }
            this.sf = c.enableSearchCompleteCallback ? b: h
        }
        google[L][Ha]("hl", "afs_ads")
    };
    P(google[J].c[E], "enableAds", google[J].c[E].pb);
    google[J].c[E].Sa = function(a, c) {
        c || (c = new google[J].D);
        a.ua = f;
        this.e[ua](new google[J].C(a, this, c));
        if (this.Gb(a)) this.Xg = b;
        a.Hb = "gsc"
    };
    P(google[J].c[E], "addSearcher", google[J].c[E].Sa);
    google[J].c[E].Qe = function(a) {
        if (this.e[a].w.l) {
            this.e[a].wb = h;
            this.e[a].l = this.e[a].w.l;
            Z(this.e[a].l, "gsc-resultsRoot");
            $(this.e[a].l, "gsc-resultsbox-visible");
            Z(this.e[a].l, "gsc-resultsbox-invisible")
        } else this.e[a].l = W("gsc-resultsRoot");
        this.e[a].g.Nb && Z(this.e[a].l, "gsc-resultsRoot-" + this.e[a].g.Nb);
        if (this.Q == google[J].c.na) this.k[a].I = this.e[a].l;
        var c = xb(f, f, "gsc-resultsHeader"),
        d = yb(c, 0);
        this.e[a].Oa = X(d, "gsc-twiddleRegionCell");
        d = X(d, "gsc-configLabelCell");
        this.e[a].ic = U("", "gsc-twiddle");
        T(this.e[a].Oa, this.e[a].ic);
        var e = vb(this.e[a].g.Tg(), "gsc-title");
        T(this.e[a].ic, e);
        this.e[a].tb = U("", "gsc-stats");
        T(this.e[a].Oa, this.e[a].tb);
        e = U();
        var g = U(Q.blank, "gsc-result-selector gsc-one-result"),
        j = U(Q.blank, "gsc-result-selector gsc-more-results"),
        l = U(Q.blank, "gsc-result-selector gsc-all-results");
        na(g, Q["show-one-result"]);
        na(j, Q["show-more-results"]);
        na(l, Q["show-all-results"]);
        T(e, g);
        T(e, j);
        T(e, l);
        qa(g, this.e[a].Ch);
        qa(j, this.e[a].Bh);
        qa(l, this.e[a].Ah);
        this.e[a].Yc = e;
        this.e[a].bd(google[J].C.qc);
        T(this.e[a].Oa, this.e[a].Yc);
        qa(this.e[a].ic, this.e[a].zh);
        if (this.e[a].g.ia) {
            this.e[a].T = wb("", "gsc-configLabel");
            q(this.e[a].T, Q.blank);
            Z(this.e[a].T, "gsc-twiddle-closed");
            T(d, this.e[a].T);
            qa(this.e[a].T, this.e[a].yh);
            na(this.e[a].T, Q.settings);
            this.e[a].Ba = W("gsc-config");
            Z(this.e[a].Ba, this.e[a].g.Xa);
            this.e[a].Za = Cb("gsc-config");
            Z(this.e[a].Za, this.e[a].g.Xa);
            this.e[a].Za.onsubmit = this.e[a].xh;
            T(this.e[a].Ba, this.e[a].Za);
            ra(this.e[a].Ba[I], "none")
        }
        this.e[a].U = W("gsc-results");
        d = this.e[a].g.Lc();
        Z(this.e[a].U, d);
        this.e[a].w.l == f && T(this.Fa, this.e[a].l);
        T(this.e[a].l, c);
        this.e[a].Ba && T(this.e[a].l, this.e[a].Ba);
        T(this.e[a].l, this.e[a].U)
    };
    google[J].c[E].Re = function(a) {
        var c = this.e[a],
        d = {},
        e = c.g.Vg();
        d.Z = vb(e);
        d.I = f;
        d.dc = c.g;
        d.B = c.g.B;
        qa(d.Z, S(this, this.Xh, [a]));
        this.k[a] = d;
        T(this.aa, d.Z);
        a = "gs-spacer";
        if (kb("opera")) a += " gs-spacer-opera";
        a = wb(" ", a);
        T(this.aa, a);
        c.w.vf(google[J].c.Pa)
    };
    google[J].c[E].Vb = function(a, c) {
        var d = f,
        e = f;
        if (c) if (c.Q) {
            this.Q = c.Q;
            d = c[t];
            e = c.zf
        } else this.Q = google[J].c.ya;
        else this.Q = google[J].c.ya;
        this.l = W("gsc-control");
        if (d != f) {
            ia(this, d);
            this[t].onkeyup = this.bh;
            this[t].onpaste = this.dh
        } else {
            if (e == f) e = this.l;
            d = new google[J].P(b, e);
            d.xf(this, this[wa]);
            d.wf(this, this.xc);
            ia(this, d[t]);
            this.qb && d.Yg()
        }
        this.Fa = W("gsc-resultsbox-invisible");
        if (this.Q == google[J].c.na) {
            this.aa = W("gsc-tabsAreaInvisible");
            T(this.l, this.aa);
            this.k = [];
            for (d = this.u = 0; d < this.e[D]; d++) this.Re(d)
        }
        this.ga = this.l;
        if (this.Aa) {
            this.ga = W("gsc-wrapper");
            this.X = W("gsc-adBlockInvisible");
            this.Y = W("gsc-adBlockInvisible");
            T(this.ga, this.X);
            T(this.l, this.Y);
            T(this.l, this.ga)
        }
        T(this.ga, this.Fa);
        for (d = 0; d < this.e[D]; d++) {
            this.Qe(d);
            if (this.Q == google[J].c.na) {
                Z(this.k[d].Z, "gsc-tabHeader");
                Z(this.k[d].I, "gsc-tabData");
                if (d == this.u) {
                    Z(this.k[d].Z, "gsc-tabhActive");
                    Z(this.k[d].I, "gsc-tabdActive")
                } else {
                    Z(this.k[d].Z, "gsc-tabhInactive");
                    Z(this.k[d].I, "gsc-tabdInactive")
                }
            }
        }
        if (a && typeof a == "string") a = o[y](a);
        if (a) {
            tb(a, this.l);
            if ((d = this.Pg()) && d < 300) {
                this.hh = b;
                Z(this.l, "gsc-narrow")
            }
        }
    };
    P(google[J].c[E], "draw", google[J].c[E].Vb);
    google[J].c[E].Rh = function(a) {
        switch (a) {
        case google[J].c.oe:
        case google[J].c.Pb:
        case google[J].c.ne:
            this.hc = a;
            break;
        default:
            this.hc = google[J].c.Pb;
            break
        }
    };
    P(google[J].c[E], "setTimeoutInterval", google[J].c[E].Rh);
    google[J].c[E].Lh = function(a, c, d) {
        if (d) switch (d) {
        case google[J].c.Rd:
        case google[J].c.Qd:
        case google[J].c.Pd:
        case google[J].c.Od:
        case google[J].c.Nd:
            this.Qc = Q[d];
            break;
        default:
            this.Qc = d;
            break
        }
        this.Zb = qb(a, c)
    };
    P(google[J].c[E], "setOnKeepCallback", google[J].c[E].Lh);
    N = google[J].c[E];
    N.Gb = function(a) {
        var c = a.B;
        if (this.qb) {
            if (c == "web" && a.J != google[J].h.ca) return h;
            return b
        } else return c == "blog" || c == "image" ? b: h
    };
    N.Xh = function(a) {
        if (this.u != a) {
            $(this.k[this.u].Z, "gsc-tabhActive");
            $(this.k[this.u].I, "gsc-tabdActive");
            Z(this.k[this.u].Z, "gsc-tabhInactive");
            Z(this.k[this.u].I, "gsc-tabdInactive");
            this.u = a;
            a = this.k[this.u].dc;
            Z(this.k[this.u].Z, "gsc-tabhActive");
            $(this.k[this.u].Z, "gsc-tabhInactive");
            if (this.Aa) this.Gb(a) ? this.ub() : this.Se();
            if (this.Rc && a.jf == this.Rc) {
                Z(this.k[this.u].I, "gsc-tabdActive");
                $(this.k[this.u].I, "gsc-tabdInactive")
            } else {
                var c = o[y](google[J].c.lc);
                if (!c) {
                    c = o[A]("div");
                    c.id = google[J].c.lc;
                    c[s](o.createTextNode("Loading..."));
                    this.k[this.u].I[$a].insertBefore(c, this.k[this.u].I)
                }
                this.Gc(a, this.k[this.u].I, this.Rc)
            }
        }
    };
    N.ub = function() {
        if (this.Aa) {
            r(this.X, "gsc-adBlockInvisible");
            r(this.Y, "gsc-adBlockInvisible");
            this.Ha && $(this.ga, "gsc-thinWrapper")
        }
    };
    N.Se = function() {
        if (this.Aa) {
            r(this.X, this.Uc > 0 ? "gsc-adBlock": "gsc-adBlockInvisible");
            if (this.Ha) if (this.Tc > 0) {
                r(this.Y, "gsc-adBlockVertical");
                Z(this.ga, "gsc-thinWrapper")
            } else {
                r(this.Y, "gsc-adBlockInvisible");
                $(this.ga, "gsc-thinWrapper")
            }
        }
    };
    N.submit = function() {
        this[t][z][D] ? this[M]() : this.xc();
        return h
    };
    P(google[J].c[E], "submit", google[J].c[E][wa]);
    N = google[J].c[E];
    N.Ub = function() {
        if (this.aa && !this.Wh && (!this.qb || this.e[D] > 1)) r(this.aa, "gsc-tabsArea")
    };
    N.$g = function(a, c, d) {
        c[s](a); (new fb(d, "parent", a)).Cg()
    };
    N.ah = function(a, c, d) {
        var e = m; (e.postMessage ? e: e.document.postMessage ? e.document: f) ? this.vg(a, d) : this.ug(a, d);
        c[s](a)
    };
    N.ef = function(a, c, d) {
        r(d, "gsc-adBlockNoHeight");
        c = this.Qb.ci(this.Dg(a, c, d));
        var e;
        e = (e = m[Za] ? m[Za][Qa] : f) ? hb(e) == 6: h;
        if (! (e = e)) e = (e = m[Za] ? m[Za][Qa] : f) ? hb(e) == 7: h;
        if (e = e) {
            e = (e = m[Za] ? m[Za][Qa] : f) ? /trident\/\d/i.test(e) && hb(e) == 7: h;
            e = !e
        }
        e ? this.$g(a, d, c) : this.ah(a, d, c)
    };
    sa(N,
    function(a) {
        if (a) {
            a = a;
            this[t].onfocus && this[t].onfocus();
            ka(this[t], a)
        } else a = this[t][z];
        this.Qb = f;
        if (a[D]) {
            this.mb = h;
            r(this.Fa, "gsc-resultsbox-visible");
            this.Ub();
            this.ab = google[L].createGuidArg_();
            var c = this.Aa;
            if (c && this.Xg && this.Q == google[J].c.ya) c = h;
            var d = this.eh();
            if (d == n && !this.Ua && !this.sb) c = h;
            if (c) {
                this.Eh();
                c = "w" + this.La;
                if (this.Ha) c = c + "n" + this.Da;
                if (this.sb) {
                    c = "w" + this.La;
                    c = google[L][Ia] + "/GafsAds?q=" + i(a) + "&hl=" + i(google[J][ab]) + "&ad=" + i(c) + "&source=" + this.e[0].g.Hb + "&" + this.ab
                } else c = "http://www.google.com/" + (d ? "cse": "search") + "?output=js&num=0&ie=utf8&oe=utf8&q=" + i(a) + "&hl=" + i(google[J][ab]) + "&ad=" + i(c) + "&js=uds&" + this.ab;
                if (d) c += "&cx=" + d;
                if (this.Ua) c += "&client=" + i(this.Ua);
                if (this.Ae) c += "&channel=" + i(this.Ae);
                if (this.Ee) c += "&adtest=on";
                if (this.Be) c += "&ip=" + i(this.Be);
                if (this.Ce) c += "&adsafe=" + i(this.Ce);
                if (this.Fe) c += "&useragent=" + i(this.Fe);
                if (this.sb) {
                    ma(this.Fa[I], "hidden");
                    this.Qb = new google[J].hb;
                    this.ub();
                    q(this.X, "");
                    q(this.Y, "");
                    if (ob() || pb()) c += "&nocache=" + _json_cache_defeater_++;
                    c += "&referer=" + m[Ra].host;
                    if (this.La > 0) {
                        if (this.bi) c = c[x](/&ad=[^&]*/, "&ad=n1w0");
                        var e = this.Ye();
                        d = c.substring(0, 2E3);
                        d = d[x](/%\w?$/, "");
                        e.src = d;
                        this.ef(e, h, this.X)
                    }
                    if (this.Ha && this.Da > 0) {
                        d = c[x](/&ad=[^&]*/, "&ad=" + ("n" + this.Da));
                        c = this.Ye();
                        d = d.substring(0, 2E3);
                        d = d[x](/%\w?$/, "");
                        c.src = d;
                        this.ef(c, b, this.Y)
                    }
                } else {
                    var g = this;
                    m.google_afs_request_done = function(j) {
                        g.jh(j)
                    };
                    nb(c)
                }
            }
            this.Rc = a;
            if (this.Q == google[J].c.na) this.Gc(this.k[this.u].dc, this.k[this.u].I, a);
            else for (d = 0; d < this.e[D]; d++) this.Gc(this.e[d].g, this.e[d].l, a);
            this.Qb && this.Qb.start(2E3)
        }
    });
    P(google[J].c[E], "execute", google[J].c[E][M]);
    N = google[J].c[E];
    N.Gc = function(a, c, d) {
        if (!a.wb && this.Q != google[J].c.na) {
            $(c, "gsc-resultsbox-invisible");
            Z(c, "gsc-resultsbox-visible")
        }
        this.ad && this.ad(this, a, d);
        if (a.ua) a.ua = f;
        a.ab = this.ab;
        a[M](d)
    };
    N.Dg = function(a, c, d) {
        var e = this;
        return function(g) {
            google[L][Ha]("afsq", "1");
            var j = g && g > 40;
            if (c) e.Tc = j ? 1: 0;
            else e.Uc = j ? 1: 0;
            e.fh(a, g, j);
            if (e.aa) if (e.Gb(e.k[e.u].dc)) j = h;
            if (j) e.Se();
            else r(d, "gsc-adBlockInvisible")
        }
    };
    N.ug = function(a, c) {
        var d = function() {
            var e = 0;
            try {
                var g = a.contentWindow;
                if (g.frames && g.frames[D]) e = g.frames[0].name
            } catch(j) {}
            c(e)
        };
        if (ob()) ha(a,
        function() {
            if (a[Ca] == "loaded" || a[Ca] == "complete") {
                ha(a, f);
                d()
            }
        });
        else ga(a,
        function() {
            ga(a, f);
            d()
        })
    };
    N.vg = function(a, c) {
        var d = function(e) {
            e = e ? e: m[eb];
            if (e.source == a.contentWindow) {
                if (m.detachEvent) m.detachEvent("onmessage", d);
                else m.removeEventListener && m.removeEventListener("message", d, h);
                c(e.data)
            }
        };
        if (m.attachEvent) m.attachEvent("onmessage", d);
        else m.addEventListener && m.addEventListener("message", d, h)
    };
    N.Ye = function() {
        var a = o[A]("iframe");
        a.name = "google_afs_ads_frame";
        ta(a, 0);
        a.frameBorder = 0;
        a.marginWidth = 0;
        a.marginHeight = 0;
        a.vspace = 0;
        a.hspace = 0;
        a[C]("allowTransparency", b);
        a.scrolling = "no";
        ma(a[I], "hidden");
        return a
    };
    N.fh = function(a, c, d) {
        ja(a, "100%");
        if (d) {
            ta(a[I], c + "px");
            ma(a[I], "visible")
        } else {
            ta(a[I], "0px");
            ma(a[I], "hidden")
        }
    };
    N.eh = function() {
        for (var a = 0; a < this.e[D]; a++) {
            var c = this.e[a].g;
            if (c.B == "web") if (c.J != google[J].h.ca) if (c.J == google[J].h.ob) return c.n
        }
        return f
    };
    N.jh = function(a) {
        m.google_afs_request_done = f;
        if (this.X) {
            google[L][Ha]("afsq", "1");
            q(this.X, "");
            q(this.Y, "");
            this.Uc = this.Tc = 0;
            if (!a || a[D] < 1) this.ub();
            else {
                if (!this.aa) for (var c = 0; c < this.e[D]; c++) {
                    var d = this.e[c].g;
                    if (this.Gb(d)) {
                        this.ub();
                        return
                    }
                }
                r(this.X, "gsc-adBlock");
                d = h;
                var e = o[A]("h2");
                c = "";
                if (this.Ee) c = "*DEBUG* ";
                c += Q["ads-by-google"];
                q(e, c);
                T(this.X, e);
                var g = a[D];
                for (c = 0; c < g; c++) {
                    var j = a[c];
                    if (j[Ga] == "text/wide") {
                        this.Uc++;
                        var l = W("gsc-ad"),
                        u = Y(j.url, j.line1, google[J].a.jb);
                        T(l, u);
                        u = o[A]("cite");
                        q(u, j.visible_url);
                        T(l, u);
                        u = wb();
                        q(u, j.line2);
                        T(l, u);
                        T(this.X, l)
                    } else if (this.Ha) {
                        this.Tc++;
                        if (!d) {
                            d = b;
                            Z(this.ga, "gsc-thinWrapper");
                            T(this.Y, e[Fa](b));
                            r(this.Y, "gsc-adBlockVertical")
                        }
                        l = W("gsc-ad");
                        u = Y(j.url, j.line1, google[J].a.jb);
                        T(l, u);
                        u = wb();
                        q(u, j.line2 + "<br/>" + j.line3);
                        T(l, u);
                        u = o[A]("cite");
                        q(u, j.visible_url);
                        T(l, u);
                        T(this.Y, l)
                    }
                }
                this.Ha && !d && $(this.ga, "gsc-thinWrapper");
                if (this.aa) {
                    d = this.k[this.u].dc;
                    this.Gb(d) && this.ub()
                }
                this.Eb && this.sf && this.Eb(this, "ads")
            }
        }
    };
    N.mh = function() {
        var a = this[t][z];
        if (a && a != "") {
            this.bb && m[va](this.bb);
            this.bb = m[H](S(this, google[J].c[E][M], [f]), this.hc)
        }
    };
    N.nh = function() {
        this.bb && m[va](this.bb);
        this.bb = m[H](S(this, google[J].c[E][M], [f]), this.hc)
    };
    N.Eh = function() {
        var a,
        c;
        switch (this.De) {
        case google[J].a.Qa:
            a = 3;
            c = 5;
            break;
        case google[J].a.oa:
            a = 2;
            c = 4;
            break;
        case google[J].a.ba:
        default:
            a = 1;
            c = 2;
            break
        }
        if (this.La == n) this.La = a;
        if (this.Da == n) this.Da = c
    };
    N.W = function(a) {
        if (a > 0 && a <= 8) this.Cb = a;
        else switch (a) {
        case google[J].a.oa:
        case google[J].a.Qa:
            this.Cb = google[J].a.oa;
            break;
        default:
        case google[J].a.ba:
            this.Cb = google[J].a.ba;
            break
        }
        for (var c = 0; c < this.e[D]; c++) this.e[c].g.W(a);
        this.De = a
    };
    P(google[J].c[E], "setResultSetSize", google[J].c[E].W);
    google[J].c[E].Ib = function(a) {
        this.Ka = a;
        for (var c = 0; c < this.e[D]; c++) this.e[c].g.Ib(a)
    };
    P(google[J].c[E], "setLinkTarget", google[J].c[E].Ib);
    google[J].c[E].Jb = function(a) {
        for (var c = 0; c < this.e[D]; c++) this.e[c].w.Jb(a)
    };
    P(google[J].c[E], "setNoResultsString", google[J].c[E].Jb);
    N = google[J].c[E];
    N.rh = function(a) {
        a.Hc ? this.Na(a, h) : this.Na(a, b)
    };
    N.Na = function(a, c, d) {
        if (c) {
            $(a.Oa, "gsc-twiddle-closed");
            Z(a.Oa, "gsc-twiddle-opened");
            a.Hc = b;
            ra(a.U[I], "block")
        } else {
            $(a.Oa, "gsc-twiddle-opened");
            Z(a.Oa, "gsc-twiddle-closed");
            a.Hc = h;
            ra(a.U[I], "none");
            q(a.tb, d ? "(0)": "(" + a.g.results[D] + ")")
        }
    };
    N.lh = function(a) {
        this.Lb(a, h, b);
        return h
    };
    N.qh = function(a) {
        if (a.g.Ya) a.Bc ? this.Lb(a, h, b) : this.Lb(a, b, b)
    };
    N.Lb = function(a, c, d) {
        if (c) {
            if (a.T && a.g.ia) {
                Z(a.T, "gsc-twiddle-opened");
                $(a.T, "gsc-twiddle-closed");
                q(a.T, Q[Ta]);
                a.Bc = b;
                ra(a.Ba[I], "block");
                a.g.ia(a.Za, b)
            }
        } else if (a.T && a.g.ia) {
            $(a.T, "gsc-twiddle-opened");
            Z(a.T, "gsc-twiddle-closed");
            q(a.T, Q.blank);
            a.Bc = h;
            a.g.ia(a.Za, h);
            ra(a.Ba[I], "none");
            d && this[M]()
        }
    };
    N.oh = function(a, c) {
        if (this.Zb) {
            c.g.Zg();
            this.Zb(a)
        }
    };
    N.wg = function() {
        this.mb = b
    };
    P(google[J].c[E], "cancelSearch", google[J].c[E].wg);
    google[J].c[E].xc = function() {
        ka(this[t], "");
        this[t].onblur && this[t].onblur();
        r(this.Fa, "gsc-resultsbox-invisible");
        if (this.aa) r(this.aa, "gsc-tabsAreaInvisible");
        if (this.X) r(this.X, "gsc-adBlockInvisible");
        if (this.Y) {
            r(this.Y, "gsc-adBlockInvisible");
            $(this.ga, "gsc-thinWrapper")
        }
        for (var a = 0; a < this.e[D]; a++) {
            if (!this.e[a].wb) {
                $(this.e[a].l, "gsc-resultsbox-visible");
                Z(this.e[a].l, "gsc-resultsbox-invisible")
            }
            var c = this.e[a];
            sb(c.U);
            c.F = f;
            this.Na(c, h, b);
            this.Lb(c, h, h)
        }
    };
    P(google[J].c[E], "clearAllResults", google[J].c[E].xc);
    google[J].c[E].$ = function(a) {
        if (this.sb && a == this.e[this.u]) ma(this.Fa[I], "visible");
        if (this.k && this.k[this.u] && this.k[this.u].I) {
            Z(this.k[this.u].I, "gsc-tabdActive");
            $(this.k[this.u].I, "gsc-tabdInactive")
        }
        var c = o[y](google[J].c.lc);
        c && c[$a][Va](c);
        var d,
        e = h,
        g;
        if (!this.mb) {
            sb(a.U);
            a.F = f;
            this.Na(a, h, b);
            this.Lb(a, h, h);
            a.bd(google[J].C.qc);
            var j = a.g.context,
            l = this.aa && j;
            if (this.qb && !this.qg) {
                if (l) {
                    g = j[Ka];
                    for (c = 0; c < this.k[D]; c++) {
                        d = this.k[c];
                        if (d.B == a.g.B) {
                            var u = a.g;
                            g && !a.g.gb && tb(d.Z, ub(g));
                            break
                        }
                    }
                }
                this.qg = b;
                this.Ub()
            }
            if ((d = a.g.promotions) && d[D] > 0) for (c = 0; c < d[D]; c++) {
                var w = d[c];
                w.html || a.g.Pe(w);
                if (w.html) {
                    g = W(a.g.Lc());
                    Z(g, "gsc-result");
                    var B = w.html[Fa](b);
                    T(g, B);
                    T(a.U, g)
                }
            }
            w = a.g.results;
            if (a.g.rb && a.g.completionStatus >= 400) {
                w = [];
                w[ua](a.g.Mg())
            } else if (w[D] == 0 && a.w.yb && a.g.completionStatus == 200) {
                w = [];
                w[ua](a.g.Ng(a.w.yb))
            }
            for (c = 0; c < w[D]; c++) {
                d = w[c];
                d.html || a.g.H(d);
                if (d.html) {
                    e = b;
                    g = W(a.g.Lc());
                    Z(g, "gsc-result");
                    a.g.Nb && Z(g, "gsc-result-" + a.g.Nb);
                    B = d.html[Fa](b);
                    if (d.GsearchResultClass == google[J].b.G) {
                        if (a.w.R) if (a.w.R[v] != a.g.R[v] || a.w.R[bb] != a.g.R[bb]) for (var G = B.getElementsByTagName("img"), V = 0; V < G[D]; V++) google[J].a.eb(d.tbWidth, d.tbHeight, a.w.R, G[V], b)
                    } else if (d.GsearchResultClass == google[J].t.G) if (a.w.kc) {
                        G = B.getElementsByTagName("img");
                        for (V = 0; V < G[D]; V++) google[J].a.eb(d.tbWidth, d.tbHeight, a.w.kc, G[V])
                    }
                    T(g, B);
                    if (this.Zb) {
                        B = this.Qc;
                        G = U("", "gsc-keeper");
                        q(G, B);
                        T(g, G);
                        qa(G, S(this, google[J].c[E].oh, [d, a]))
                    }
                    if (c >= a.g.mf) {
                        if (!a.F) {
                            a.F = W("gsc-expansionArea");
                            T(a.U, a.F);
                            if (a.w.da == google[J].c.Ia) ra(a.F[I], "none")
                        }
                        T(a.F, g)
                    } else T(a.U, g)
                }
            }
            if (!a.F && a.g[F]) {
                a.F = W("gsc-expansionArea");
                T(a.U, a.F)
            }
            if (a.F && a.g.z && a.g.gwsUrl && a.g[F]) {
                c = W("gsc-cursor-box");
                g = this.Fg(a);
                c[s](g);
                T(a.F, c)
            }
            if (e) {
                q(a.tb, "(" + a.g.results[D] + ")");
                a.w.da == google[J].c.Ia || a.w.da == google[J].c.Pa ? this.Na(a, b) : this.Na(a, h); (c = a.g.$e()) && T(a.U, c)
            } else {
                q(a.tb, "(0)");
                q(a.U, "");
                this.Na(a, h)
            }
            a.w.da = a.w.nf;
            this.Eb && this.Eb(this, a.g);
            if (this.qb && l && !this.ze && j.facets) {
                a = this[t][z];
                j = j.facets;
                for (c = 0; c < j[D]; c++) {
                    l = j[c];
                    e = new google[J].h;
                    if (u) {
                        u.n && e.xa(u.n, l.label);
                        if (u.A) e.A = u.A;
                        if (u.dj) e.wa = u.wa
                    }
                    e.Mb(l.anchor);
                    this.Sa(e);
                    e.W(u.va);
                    this.Q != google[J].c.na && e[M](a)
                }
                if (this.e[D] > 1 && !this.ze) r(this.aa, "gsc-tabsArea");
                for (c = 0; c < this.e[D]; c++) if (!this.k[c]) {
                    this.Re(c);
                    this.Qe(c);
                    Z(this.k[c].Z, "gsc-tabHeader");
                    Z(this.k[c].I, "gsc-tabData");
                    Z(this.k[c].Z, "gsc-tabhInactive");
                    Z(this.k[c].I, "gsc-tabdInactive")
                }
                this.ze = b
            }
        }
    };
    P(google[J].c[E], "onSearchComplete", google[J].c[E].$);
    google[J].c[E].Fg = function(a) {
        for (var c = W("gsc-cursor"), d = a.g[F], e = 0; e < d.pages[D]; e++) {
            var g = "gsc-cursor-page";
            if (e == d.currentPageIndex) g += " gsc-cursor-current-page";
            g = U(d.pages[e].label, g);
            qa(g, S(this, google[J].c[E].wh, [a, e]));
            c[s](g)
        }
        return c
    };
    google[J].c.ie = {
        border: "border",
        borderColor: "border-color",
        borderStyle: "border-style",
        borderWidth: "border-width",
        borderTop: "border-top",
        borderTopColor: "border-top-color",
        borderTopStyle: "border-top-style",
        borderTopWidth: "border-top-width",
        borderRight: "border-right",
        borderRightColor: "border-right-color",
        borderRightStyle: "border-right-style",
        borderRightWidth: "border-right-width",
        borderBottom: "border-bottom",
        borderBottomColor: "border-bottom-color",
        borderBottomStyle: "border-bottom-style",
        borderBottomWidth: "border-bottom-width",
        borderLeft: "border-left",
        borderLeftColor: "border-left-color",
        borderLeftStyle: "border-left-style",
        borderLeftWidth: "border-left-width",
        color: "color",
        cssFloat: "float",
        styleFloat: "float",
        clear: "clear",
        cursor: "cursor",
        display: "display",
        font: "font",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontStyle: "font-style",
        fontWeight: "font-weight",
        height: "height",
        margin: "margin",
        marginTop: "margin-top",
        marginRight: "margin-right",
        marginBottom: "margin-bottom",
        marginLeft: "margin-left",
        overflow: "overflow",
        padding: "padding",
        paddingTop: "padding-top",
        paddingRight: "padding-right",
        paddingBottom: "padding-bottom",
        paddingLeft: "padding-left",
        textAlign: "text-align",
        textDecoration: "text-decoration",
        textTransform: "text-transform",
        verticalAlign: "vertical-align",
        visibility: "visibility",
        width: "width"
    };
    google[J].c.ff = function(a, c) {
        if (pb()) alert("google.search.SearchControl.inlineCurrentStyle is not supported on Safari");
        else {
            var d = b;
            if (c) d = c;
            if (d) for (d = 0; d < a.childNodes[D]; d++) google[J].c.ff(a.childNodes[d], b);
            if (a.nodeType == 1) {
                var e,
                g,
                j = h;
                d = h;
                if (m[Sa]) {
                    e = m[Sa](a, f);
                    j = g = b
                } else if (a[Wa]) {
                    e = a[Wa];
                    g = h;
                    j = b
                }
                if (j) {
                    for (var l in e) if (google[J].c.ie[l]) {
                        j = google[J].c.ie[l];
                        var u = e[l];
                        if (l == "display" && u == "none") {
                            q(a, "");
                            d = b
                        }
                        if (e[l] != "") g ? a[I].setProperty(j, u) : a[I][C](j, u)
                    }
                    if (d) if (!g) a.outerHTML = '<div style="display:none"/>'
                }
            }
        }
    };
    P(google[J].c, "inlineCurrentStyle", google[J].c.ff);
    google[J].c[E].Pg = function(a) {
        a = a ? a: this.l;
        var c = f;
        if (m[Sa]) c = m[Sa](a, f);
        else if (a[Wa]) c = a[Wa];
        else if (o.defaultView[Sa]) c = o.defaultView[Sa](a, f);
        return c ? ca(c[v], 10) : 300
    };
    google[J].c[E].Kb = function(a, c) {
        this.Eb = qb(a, c)
    };
    P(google[J].c[E], "setSearchCompleteCallback", google[J].c[E].Kb);
    google[J].c[E].Ph = function(a, c) {
        this.ad = qb(a, c)
    };
    P(google[J].c[E], "setSearchStartingCallback", google[J].c[E].Ph);
    google[J].c[E].Vc = function(a, c) {
        a.bd(c);
        var d = h;
        switch (c) {
        default:
        case google[J].C.sc:
            if (a.F) ra(a.F[I], "none");
            break;
        case google[J].C.rc:
            if (a.F) ra(a.F[I], "block");
            if (a.g.va != google[J].a.ba) d = b;
            a.g.W(google[J].a.ba);
            break;
        case google[J].C.je:
            if (a.F) ra(a.F[I], "block");
            if (a.g.va != google[J].a.oa) d = b;
            a.g.W(google[J].a.oa);
            break
        }
        if (d) {
            d = this[t][z];
            if (d[D]) {
                this.mb = h;
                r(this.Fa, "gsc-resultsbox-visible");
                this.Ub();
                if (!a.wb) {
                    $(a.l, "gsc-resultsbox-invisible");
                    Z(a.l, "gsc-resultsbox-visible")
                }
                a.w.da = google[J].c.Pa;
                a.g[M](d)
            }
        }
    };
    google[J].c[E].wh = function(a, c) {
        this.mb = h;
        r(this.Fa, "gsc-resultsbox-visible");
        this.Ub();
        if (!a.wb) {
            $(a.l, "gsc-resultsbox-invisible");
            Z(a.l, "gsc-resultsbox-visible")
        }
        a.w.da = google[J].c.Pa;
        a.g.bf(c)
    };
    google[J].P = function(a, c, d) {
        var e = Cb("gsc-search-box");
        e.acceptCharset = "utf-8";
        var g = f,
        j = Q["search-uc"],
        l = Q[J];
        if (d) {
            if (d.buttonText) l = j = d.buttonText;
            if (d.clickableBrandingUrl) {
                g = "http://www.google.com";
                if (typeof d.clickableBrandingUrl == "string" && d.clickableBrandingUrl[Ba](/^http:\/\/[a-z]*\.google\.com/)) g = d.clickableBrandingUrl;
                g = Bb(g, f, "_BLANK");
                r(g, "gsc-branding-clickable")
            }
        }
        this.cc = Db(j, "gsc-search-button");
        na(this.cc, l);
        if (a) {
            d = "gsc-branding-img";
            this.yc = U(Q.blank, "gsc-clear-button");
            na(this.yc, Q["clear-results"])
        } else d = "gsc-branding-img-noclear";
        ia(this, Eb(f, "gsc-input", f));
        this[t].name = "search";
        na(this[t], l);
        l = xb(f, f, "gsc-search-box");
        T(e, l);
        l = yb(l, 0);
        this.gf = X(l, "gsc-input");
        j = X(l, "gsc-search-button");
        if (a) {
            a = X(l, "gsc-clear-button");
            T(a, this.yc)
        }
        T(this.gf, this[t]);
        T(j, this.cc);
        a = xb(f, f, "gsc-branding");
        T(e, a);
        l = yb(a, 0);
        this.userDefinedCell = X(l, "gsc-branding-user-defined");
        a = X(l, "gsc-branding-text");
        l = X(l, d);
        j = U(Q["powered-by"], "gsc-branding-text");
        var u = google[L][Ia] + "/css/small-logo.png";
        d = d;
        if (ob()) {
            d = W(d);
            d[I].filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + u + '")';
            ja(d[I], "51px");
            ta(d[I], "15px")
        } else d = Ab(u, f, f, d);
        d = d;
        T(a, j);
        if (g) {
            T(g, d);
            T(l, g)
        } else T(l, d);
        this.rf = e;
        sb(c);
        T(c, this.rf)
    };
    O("google.search.SearchForm", google[J].P);
    google[J].P[E].xf = function(a, c) {
        this.Cf = S(this, this.Vh, [this]);
        this.fc = S(a, c, [this]);
        this.rf.onsubmit = this.Cf;
        qa(this.cc, this.Cf)
    };
    P(google[J].P[E], "setOnSubmitCallback", google[J].P[E].xf);
    google[J].P[E].wf = function(a, c) {
        qa(this.yc, S(a, c, [this]))
    };
    P(google[J].P[E], "setOnClearCallback", google[J].P[E].wf);
    google[J].P[E].Vh = function() {
        var a = this.gf[Aa],
        c = this[t][z];
        this.fc && this.fc();
        if (ob()) {
            var d = this,
            e;
            e = c[D] * 8 >= a ? a - 6: "99%";
            m[H](function() {
                ja(d[t][I], e)
            },
            1)
        }
        return h
    };
    sa(google[J].P[E],
    function(a) {
        if (a) ka(this[t], a);
        this.fc && this.fc()
    });
    P(google[J].P[E], "execute", google[J].P[E][M]);
    google[J].P[E].Yg = function() {
        var a = this[t],
        c = function() {
            if (a[z] == "") a[I].background = "#FFFFFF url(http://www.google.com/coop/intl/" + google[J][ab] + "/images/google_custom_search_watermark.gif) left no-repeat"
        };
        a.onblur = c;
        a.onfocus = function() {
            a[I].background = "#FFFFFF"
        };
        c()
    };
    google[J].hb = function() {
        this.Wc = 0;
        this.Xe = h;
        this.Bb = []
    };
    google[J].hb[E].ci = function(a) {
        this.Wc++;
        var c = this;
        return function() {
            for (var d = [], e = 0; e < arguments[D]; ++e) d[ua](arguments[e]);
            if (c.Xe) this.Ve(a, d);
            else {
                c.Bb[ua]([a, d]);
                c.Wc--;
                c.Wc == 0 && c.We()
            }
        }
    };
    google[J].hb[E].We = function() {
        for (var a = 0; a < this.Bb[D]; a++) this.Ve(this.Bb[a][0], this.Bb[a][1]);
        this.Bb = [];
        this.Xe = b
    };
    google[J].hb[E].Ve = function(a, c) {
        m[H](function() {
            a[Ya](f, c)
        },
        0)
    };
    google[J].hb[E].start = function(a) {
        m[H](S(this, this.We, []), a)
    };
    google[J].i = function(a, c) {
        google[J].c[K](this);
        this.qb = b;
        this.W(google[J].a.oa);
        var d = {
            iframes: b
        };
        d.adtest = c && c.adtest || f;
        this.pb("", d);
        this.of = h;
        this.nb = new google[J].h;
        this.Ne = typeof a == "string" ? a: f;
        if (a == n) {
            a = {
                crefUrl: "http://www.google.com/coop/tools/autocse?referer=" + m[Ra]
            };
            this.di = b
        }
        this.nb.xa(a);
        this.nb.gc = Q.cse;
        c && c[google[J].a.Ra] && this.nb.V(google[J].a.Ra, c[google[J].a.Ra]);
        this.Sa(this.nb);
        this.Jb(google[J].c.Ud);
        this.Zh = (new Date)[Ja]()
    };
    O("google.search.CustomSearchControl", google[J].i);
    ib(google[J].i, google[J].c);
    google[J].d = function(a, c, d) {
        this.Fb = a;
        this.Hg = d;
        this.Ma = c[z];
        this.Ef = this.Df = 0;
        this.Ab = h;
        this.th = "";
        this.zb = {};
        this.Rb = google[J].d.Lf + p[ya](p.random() * 2E4) + google[J].d.Oe;
        google[J].d.Oe++;
        var e = this;
        google[J].i[this.Rb] = function(g) {
            e.vh(g)
        };
        this.la = c.id;
        if (!this.la) {
            this.la = "q" + this.Rb;
            c.id = this.la
        }
        this.Ac = "c" + this.Rb
    };
    google[J].d.Lf = "GcrcGcsc";
    google[J].d.Oe = 0;
    google[J].d.Ld = 0;
    google[J].d.Sb = google[J].d.Ld;
    google[J].d.Md = 2;
    google[J].d.ag = 10;
    google[J].d.Jf = 10;
    google[J].d.Kf = 1;
    google[J].d.zc = google[J].d.Md;
    google[J].d.jg = 5E3;
    google[J].d.me = 500;
    google[J].d.ig = 300;
    google[J].d.Ad = 25;
    google[J].d.Wa = google[J].d.Ad;
    google[J].d.$f = 300;
    google[J].d.Xd = 25;
    google[J].d.Nf = 2E3;
    google[J].d.ib = 40;
    google[J].d.uc = 38;
    google[J].d.Of = 13;
    google[J].d.Pf = 27;
    google[J].d.mg = 32;
    google[J].d.If = 8;
    google[J].d.hg = 45;
    google[J].d.ph = function(a, c) {
        var d = 0;
        if (m && m[eb] && m[eb].keyCode) d = m[eb].keyCode;
        else if (c && c.which) d = c.which;
        if (!a.Ab && d != google[J].d.ib) return b;
        var e = o[y](a.la);
        if (d == google[J].d.Of) {
            a.Bf();
            return h
        } else if (d == google[J].d.uc) {
            a.lf(d);
            return h
        } else if (d == google[J].d.ib) {
            a.lf(d);
            return h
        } else if (d == google[J].d.Pf) {
            var g = (new Date)[Ja]();
            a.ac();
            ka(e, a.Ma);
            if (g < a.Df + google[J].d.Nf) a.Ab = h;
            a.Df = g
        }
        if (a.Ma == e[z] || d <= google[J].d.hg && d != google[J].d.mg && d != google[J].d.If) return b;
        a.Xc()
    };
    google[J].d.kh = function(a) {
        m[H](function() {
            a.ac()
        },
        google[J].d.ig)
    };
    N = google[J].d[E];
    N.Gh = function() {
        var a = o[y](this.la);
        if (a) {
            a.onkeyup = this.Ke(google[J].d.ph, a.onkeyup);
            a.onblur = this.Ke(google[J].d.kh, a.onblur)
        }
    };
    N.Bf = function() {
        var a = o[y](this.la);
        if (a) {
            this.Ma = a[z];
            this.ac();
            if (typeof this.Fb == "string") o[y](this.Fb)[wa]();
            else this.Fb[M] ? this.Fb[M]() : this.Fb[wa]()
        }
    };
    N.lf = function(a) {
        var c = o[y](google[J].i.pc);
        if (c) {
            google[J].d.fd(c, this);
            var d = f;
            if (a == google[J].d.uc) d = c[$a].previousSibling;
            else if (a == google[J].d.ib) d = c[$a].nextSibling;
            d && google[J].d.ec(d[Ea], this)
        } else if ((c = o[y](this.Ac)) && a == google[J].d.uc) google[J].d.ec(c[Ea].lastChild[Ea], this);
        else if (c && a == google[J].d.ib) google[J].d.ec(c[Ea][Ea][Ea], this);
        else if (a == google[J].d.ib) {
            this.Ab = b;
            this.Xc()
        }
    };
    N.ac = function() {
        var a = o[y](this.Ac);
        a && a[$a][Va](a)
    };
    N.Xc = function() {
        var a = this,
        c = o[y](a.la);
        a.Ma = c[z];
        if (a.Ab) a.Ef + google[J].d.Wa > (new Date)[Ja]() ? m[H](function() {
            a.Xc()
        },
        google[J].d.Wa) : m[H](function() {
            var d = o[A]("script"),
            e = (new Date)[Ja]();
            d.src = ["http://www.google.com/complete/search?q=", escape(c[z]), "&client=partner&source=gcsc&partnerid=", escape(a.Hg), "&callback=", escape("google.search.CustomSearchControl." + a.Rb), "&ds=cse"][cb]("");
            a.th = c[z];
            o[Ua][s](d);
            a.zb[c[z]] = e;
            a.Ef = e;
            m[H](function() {
                a.Ff(c[z])
            },
            google[J].d.me)
        },
        google[J].d.Sb + p[ya](p.random() * google[J].d.zc))
    };
    N.vh = function(a) {
        var c = this,
        d = a[0];
        delete c.zb[d];
        google[J].d.Sb = google[J].d.Ld;
        google[J].d.zc = google[J].d.Md;
        if (google[J].d.Wa > google[J].d.Ad) google[J].d.Wa -= google[J].d.Xd;
        var e = o[y](c.la);
        if (d == e[z]) {
            c.ac();
            var g = a[1][D];
            if (! (g < 1)) {
                d = o[A]("tbody");
                for (var j = f, l = f, u = 0; u < g; ++u) {
                    l = o[A]("tr");
                    j = o[A]("td");
                    q(j, a[1][u][0]);
                    var w = j.innerHTML.slice(0, a[0][D]),
                    B = j.innerHTML.slice(a[0][D]);
                    q(j, w + "<strong>" + B + "</strong>");
                    j.onmouseover = c.Ue(j, google[J].d.ec);
                    j.onmouseout = c.Ue(j, google[J].d.fd);
                    qa(j,
                    function() {
                        c.Bf()
                    });
                    l[s](j);
                    d[s](l)
                }
                a = o[A]("table");
                a.id = c.Ac;
                a[s](d);
                r(a, google[J].i.Mf);
                a[I].top = google[J].d.Rg(e) + Ob(e, b) + "px";
                a[I].left = google[J].d.Qg(e) + "px";
                o[Ua][s](a);
                ja(a[I], e[Aa] + "px")
            }
        }
    };
    N.Ue = function(a, c) {
        var d = this;
        return function() {
            c(a, d)
        }
    };
    N.Ke = function(a, c) {
        var d = this;
        return function(e) {
            a(d, e);
            c && c(e)
        }
    };
    google[J].d.ec = function(a, c) {
        var d = o[y](google[J].i.pc),
        e = o[y](c.la);
        d && google[J].d.fd(d, c);
        d = a.textContent;
        if (d == n) d = a.innerText;
        r(a, google[J].i.kg);
        a.id = google[J].i.pc;
        c.Ma = e[z];
        ka(e, d)
    };
    google[J].d.fd = function(a, c) {
        var d = o[y](c.la);
        r(a, "");
        a.id = "";
        ka(d, c.Ma ? c.Ma: "")
    };
    google[J].d.Rg = function(a) {
        var c = 0;
        if (a[Pa]) {
            for (; a[Pa];) {
                c += a.offsetTop - a.scrollTop;
                a = a[Pa]
            }
            c += a.offsetTop
        } else if (a.y) c += a.y;
        return c
    };
    google[J].d.Qg = function(a) {
        var c = 0;
        if (a[Pa]) {
            for (; a[Pa];) {
                c += a.offsetLeft - a.scrollLeft;
                a = a[Pa]
            }
            c += a.offsetLeft
        } else if (a.x) c += a.x;
        return c
    };
    google[J].d[E].Ff = function(a) {
        var c = this;
        if (c.zb[a]) if ((new Date)[Ja]() - c.zb[a] > google[J].d.jg) {
            google[J].d.Sb += google[J].d.Kf;
            google[J].d.Sb *= google[J].d.Jf;
            google[J].d.zc += google[J].d.ag;
            if (google[J].d.Wa < google[J].d.$f) google[J].d.Wa += google[J].d.Xd;
            delete c.zb[a]
        } else m[H](function() {
            c.Ff(a)
        },
        google[J].d.me)
    };
    google[J].i.Ge = function(a, c, d) {
        a = new google[J].d(d, c, a);
        a.Ab = b;
        a.Gh()
    };
    P(google[J].i, "attachAutoCompletion", google[J].i.Ge);
    google[J].i[E].Te = function() {
        if (this.Ne) {
            google[J].i.Ge(this.Ne, this[t], this);
            this.of = b
        } else this.of = h
    };
    P(google[J].i[E], "enableAutoCompletion", google[J].i[E].Te);
    google[J].i[E].Vb = function(a, c) {
        var d = c;
        d || (d = new google[J].M);
        d.uf(google[J].c.na);
        if (this.di && this.e[D] == 1) this.Wh = b;
        google[J].c[E].Vb[K](this, a, d);
        r(this.l, "gsc-control-cse");
        d.Je && this.Te()
    };
    P(google[J].i[E], "draw", google[J].i[E].Vb);
    sa(google[J].i[E],
    function(a) {
        var c = this.l[Aa];
        $(this.ga, "gsc-thinWrapper");
        if (c < google[J].i.bg) this.Aa = h;
        else if (c < google[J].i.dg) this.pb(this.Ua, {
            useNarrowTopAd: b,
            includeVerticalAds: h
        });
        else {
            c = {
                useNarrowTopAd: h,
                includeVerticalAds: c > google[J].i.cg
            };
            if (this.kf) c.numTopAds = google[J].i.eg;
            this.pb(this.Ua, c)
        }
        if ((new Date)[Ja]() - this.Zh < google[J].i.Gf && this.Aa) {
            c = fa(m[Ra].href)[x](/\+/g, " ");
            var d = fa(a)[x](/\+/g, " ");
            this.Aa = c.indexOf(d) != -1
        }
        google[J].c[E][M][K](this, a)
    });
    P(google[J].i[E], "execute", google[J].i[E][M]);
    google[J].i[E].Mb = function(a) {
        this.nb.Mb(a)
    };
    P(google[J].i[E], "setUserDefinedLabel", google[J].i[E].Mb);
    google[J].i[E].Sa = function(a, c) {
        google[J].c[E].Sa[K](this, a, c);
        a.Hb = "gcsc"
    };
    P(google[J].i[E], "addSearcher", google[J].i[E].Sa);
    google[J].i[E].Ig = function() {
        google[J].c[E].pb("", {
            numTopAds: 0,
            numSideAds: 0
        });
        this.Ua = f;
        this.sf = h
    };
    P(google[J].i[E], "disableAds", google[J].i[E].Ig);
    google[J].i[E].Jh = function() {
        this.kf = b
    };
    P(google[J].i[E], "setMoreAds", google[J].i[E].Jh);
    google[J].i.Hf = "";
    P(google[J].i, "AUTO_PUBID", google[J].i.Hf);
    google[J].i.bg = 250;
    google[J].i.dg = 500;
    google[J].i.cg = 800;
    google[J].i.Gf = 500;
    google[J].i[E].kf = h;
    google[J].i.eg = 4;
    google[J].i.pc = "csc-completion-selected";
    google[J].i.kg = "gsc-completion-selected";
    google[J].i.Mf = "gsc-completion-container";
    google[J].t = function() {
        google[J].a[K](this);
        this.B = "video";
        this.Ga = "/GvideoSearch";
        this.ra = "http://video.google.com/videosearch";
        this.S = h;
        this.Ya = b;
        this.ia = qb(this, this.ta);
        this.Xa = "gsc-videoConfig";
        this.q = f
    };
    O("google.search.VideoSearch", google[J].t);
    ib(google[J].t, google[J].a);
    google[J].t.G = "GvideoSearch";
    P(google[J].t, "RESULT_CLASS", google[J].t.G);
    google[J].t.p = [];
    google[J].t.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].t.p[j];
        google[J].t.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].t, "RawCompletion", google[J].t.N);
    google[J].t[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].t.p, this) : d;
        c = this.Ea(c == f ? "google.search.VideoSearch.RawCompletion": c, d, e);
        if (a) {
            a = a;
            if (this.L) a = a + " " + this.L;
            a = "&q=" + i(a);
            if (this.S) a += "&scoring=d";
            c += a;
            this.z = a;
            if (e && e != 0) this.z = this.z + "&start=" + e
        }
        return c
    };
    google[J].t[E].H = function(a) {
        a.html && delete a.html;
        var c = W(this.qa());
        Z(c, "gs-result");
        var d = W("gs-image-box"),
        e = W("gs-text-box"),
        g = xb(),
        j = yb(g, 0),
        l = X(j, "gs-image-box");
        j = X(j, "gs-text-box");
        T(l, d);
        T(j, e);
        T(c, g);
        g = google[J].a.eb(a.tbWidth, a.tbHeight, this.R);
        g = Ab(a.tbUrl, g[v], g[bb], "gs-image");
        l = Bb(a.url, f, this.v(), "gs-image");
        r(l, "gs-image");
        T(l, g);
        T(d, l);
        d = Y(a.url, a[Ka], this.v(), "gs-title");
        T(e, d);
        d = U(a[za], "gs-snippet");
        if (ob()) ta(d[I], "2.6em");
        T(e, d);
        d = U(this.$a(new Date(a.published)), "gs-publishedDate");
        T(e, d);
        d = Y("http://" + a.publisher, a.publisher, this.v(), "gs-publisher");
        T(e, d);
        a.html = c;
        this.za(a.html)
    };
    P(google[J].t[E], "createResultHtml", google[J].t[E].H);
    google[J].t.Gg = function(a, c) {
        var d = f;
        if (a.playUrl && a.playUrl != "") {
            d = a.playUrl;
            var e = "gsc-video-player";
            if (c) e = c;
            if (kb("opera")) {
                var g = o[A]("object");
                r(g, e);
                g[C]("type", "application/x-shockwave-flash");
                g[C]("data", d)
            } else {
                g = o[A]("embed");
                r(g, e);
                g[C]("type", "application/x-shockwave-flash");
                g[C]("src", d);
                if (a.videoType) a.videoType == "Google" ? g[C]("bgcolor", "#000000") : g[C]("wmode", "transparent");
                else g[C]("bgcolor", "#000000")
            }
            d = W(c);
            d[s](g)
        }
        return d
    };
    P(google[J].t, "createPlayer", google[J].t.Gg);
    google[J].t[E].O = function(a) {
        this.S = a == google[J].a.pa ? b: h
    };
    P(google[J].t[E], "setResultOrder", google[J].t[E].O);
    google[J].t[E].ta = function(a, c) {
        if (c) {
            if (this.q == f) {
                var d = W("gsc-configSetting");
                this.q = Fb(f, "0", this.S, "gsc-configSettingCheckbox");
                T(d, this.q);
                T(d, U(Q["sort-by-date"], "gsc-configSettingCheckboxLabel"));
                var e = W("gsc-configSettingSubmit");
                T(e, Db(Q[Ta], "gsc-configSettingSubmit"));
                T(d, e);
                T(a, d)
            } else oa(this.q, this.S);
            this.q[Da]()
        } else if (this.q) this.q[Na] ? this.O(google[J].a.pa) : this.O(google[J].a.kb)
    };
    google[J].h = function() {
        google[J].a[K](this);
        this.B = "web";
        this.Ga = "/GwebSearch";
        this.ra = "http://www.google.com/search";
        this.n = f;
        this.J = google[J].h.ca;
        this.A = this.wa = this.Ca = this.Fc = this.Ja = f
    };
    O("google.search.WebSearch", google[J].h);
    ib(google[J].h, google[J].a);
    google[J].h.G = "GwebSearch";
    P(google[J].h, "RESULT_CLASS", google[J].h.G);
    google[J].h.ob = "cx";
    P(google[J].h, "cxRestriction_CX", google[J].h.ob);
    google[J].h.Tb = "cref";
    P(google[J].h, "cxRestriction_CREF", google[J].h.Tb);
    google[J].h.ca = "none";
    P(google[J].h, "cxRestriction_NONE", google[J].h.ca);
    google[J].h.p = [];
    google[J].h.N = function(a, c, d, e, g) {
        var j = 0;
        if (a) j = ca(a, 10);
        a = google[J].h.p[j];
        google[J].h.p[j] = f;
        a.$(c, d, e, g)
    };
    P(google[J].h, "RawCompletion", google[J].h.N);
    google[J].h[E].ai = function(a) {
        return a[x](/\s+$/, "")[x](/^\s+/, "")
    };
    google[J].h[E].ih = function(a) {
        a = this.ai(a);
        return a[x](/\s+/g, "_")[db]()
    };
    google[J].h[E].ka = function(a, c, d, e) {
        d = d == f ? google[J].a.ma(google[J].h.p, this) : d;
        if (this.J == google[J].h.ca && this.bj == google[J].a.Qa) throw createException("The resultset size google.search.Search.FILTERED_CSE_RESULTSET can  only be used for querying filtered Custom Search Engines.");
        c = this.Ea(c == f ? "google.search.WebSearch.RawCompletion": c, d, e);
        if (a) {
            a = a;
            if (this.L) a = a + " " + this.L;
            if (this.n && this.J != google[J].h.ca && this.Fc) {
                d = this.Fc;
                var g = a;
                if (this.Ja != f) g = a + " more:" + this.Ja;
                d = d[x](/__HL__/, google[J][ab]);
                this.Ca = d = d[x](/__QUERY__/, i(g))
            }
            if (this.n && this.J == google[J].h.ca) a = a + " site:" + this.n;
            d = "";
            if (this.n && this.J != google[J].h.ca) {
                if (this.J == google[J].h.ob) d = d + "&cx=" + this.n;
                else if (this.J == google[J].h.Tb) d = d + "&cref=" + i(this.n);
                if (this.Ja != f) a = a + " more:" + this.Ja
            }
            d = d + "&q=" + i(a);
            if (this.wa) d = d + "&safe=" + this.wa;
            if (this.A) d += this.A;
            c += d;
            this.z = d;
            if (e && e != 0) this.z = this.z + "&start=" + e
        }
        if (m.google[L].GoogleLocale) c += "&gl=" + i(m.google[L].GoogleLocale);
        return c
    };
    google[J].h[E].Pe = function(a) {
        a.html && delete a.html;
        var c = W("gs-promotion");
        Z(c, "gs-result");
        var d;
        d = a.url;
        var e = a[Ka],
        g = this.v(),
        j = U(f, "gs-title"),
        l = o[A]("a");
        l.href = d;
        e && T(l, ub(e));
        r(l, "gs-title");
        if (g) pa(l, g);
        j[s](l);
        d = j;
        T(c, d);
        d = xb(0, 0);
        e = yb(d, 0);
        T(c, d);
        if (a.image) {
            d = a.image;
            d = Ab(d.url, d[v], d[bb], "gs-promotion-image");
            g = zb("gs-promotion-image-td");
            T(g, d);
            T(e, g)
        }
        if (a.bodyLines) {
            g = zb();
            var u = W();
            T(e, g);
            T(g, u);
            e = a.bodyLines;
            for (g = 0; g < e[D]; g++) {
                d = e[g];
                j = d[Ka];
                l = d.url;
                var w = d.visibleUrl;
                d = W("gs-snippet");
                if (l && w) {
                    l = Bb(l, w, this.v(), "gs-title");
                    T(d, l)
                }
                j && T(d, ub(j));
                T(u, d)
            }
        }
        d = vb(a.visibleUrl, "gs-visibleUrl");
        T(u, d);
        Z(d, "gs-visibleUrl-short");
        a.html = c
    };
    P(google[J].h[E], "createPromotionHtml", google[J].h[E].Pe);
    google[J].h[E].H = function(a) {
        a.html && delete a.html;
        pa(a, this.v() || n);
        a.html = google[J].r.bc("webResult", a);
        this.za(a.html)
    };
    P(google[J].h[E], "createResultHtml", google[J].h[E].H);
    google[J].h[E].xa = function(a, c, d) {
        this.rb = this.Ca = f;
        var e = h;
        if (a == f || typeof a == "string" && a == "") {
            e = h;
            this.n = f;
            this.J = google[J].h.ca;
            this.rb = this.Ja = f
        } else if (typeof a == "string") if (e = a[Ba](/(^partner-pub-\d*:.*)|(^\d{21}:.*)/)) {
            this.n = a;
            this.J = google[J].h.ob
        } else {
            this.n = a;
            this.J = google[J].h.ca
        } else if (a.siteUrl) {
            e = h;
            this.n = a.siteUrl
        } else if (a.cseId) {
            e = b;
            this.n = a.cseId;
            this.J = google[J].h.ob
        } else if (a.crefUrl) {
            e = b;
            this.n = a.crefUrl;
            this.J = google[J].h.Tb;
            this.rb = Q["linked-cse-error-results"]
        } else {
            e = h;
            this.n = f;
            this.J = google[J].h.ca;
            this.Ja = f
        }
        if (e) {
            if (c) this.Ja = this.ih(c);
            if (d) if (d[Ba](/__HL__/) && d[Ba](/__QUERY__/)) this.Fc = d;
            if (this.J == google[J].h.Tb) if (!this.n[Ba](/^http:\/\/www\.google\.com\/coop\/tools\/autocse\?referer=/))(new Image).src = "http://www.google.com/cse/tools/ping?cref=" + i(this.n) + "&nocache=" + Number(new Date)
        }
    };
    P(google[J].h[E], "setSiteRestriction", google[J].h[E].xa);
    google[J].h[E].V = function(a, c) {
        if (a == google[J].a.mc) this.wa = c ? c == google[J].a.oc || c == google[J].a.nc || c == google[J].a.he ? c: f: f;
        if (a == google[J].a.Ra) if (c) for (var d in c) {
            var e = c[d];
            if (d == "lr" || d == "usg" || d == "filter" || d == "gl" || d == "richsnippet" || d == "sort") {
                if (this.A == f) this.A = "&";
                else this.A += "&";
                this.A += d + "=" + i(e)
            }
        } else this.A = f
    };
    P(google[J].h[E], "setRestriction", google[J].h[E].V);
    google[J].h[E].W = function(a) {
        if (google[J].a.Qa == a) this.va = google[J].a.Qa;
        else google[J].a[E].W[K](this, a)
    };
    P(google[J].h[E], "setResultSetSize", google[J].h[E].W);
    if (!google[J].NoOldNames) {
        k("GwebSearch", google[J].h);
        k("GbookSearch", google[J].m);
        k("GblogSearch", google[J].s);
        k("GvideoSearch", google[J].t);
        k("GnewsSearch", google[J].o);
        k("GlocalSearch", google[J].f);
        k("GimageSearch", google[J].b);
        k("GpatentSearch", google[J].j);
        k("GSearch", google[J].a);
        k("GSearchControl", google[J].c);
        k("GSearchForm", google[J].P);
        k("GsearcherOptions", google[J].D);
        k("GdrawOptions", google[J].M)
    };
    google[J].r = {};
    google[J].r.og = function(a) {
        google[J].r.$b.unshift(a);
        return google[J].r.$b
    };
    O("google.search.Csedr.addOverride", google[J].r.og);
    google[J].r.$b = ["base_", ""];
    google[J].r.Kg = function(a, c) {
        google[J].r.Kc[a] || (google[J].r.Kc[a] = eval("[function(Vars,render,html){with(Vars)return(" + a + ")}][0]"));
        return google[J].r.Kc[a](c, google[J].r.bc, google[J].r.vb)
    };
    google[J].r.Kc = {};
    google[J].r.vb = function(a) {
        var c = o.createDocumentFragment(),
        d = o[A]("div");
        for (q(d, a); d[Ea];) c[s](d[Ea]);
        return c
    };
    google[J].r.bc = function(a) {
        if (google[J].r.cd) {
            o[Ua][s](google[J].r.vb(google[J].r.cd));
            google[J].r.cd = 0
        }
        for (var c = 0; ! a[s];) {
            if (c >= google[J].r.$b[D]) return google[J].r.vb(a + " not found");
            a = o[y](google[J].r.$b[c++] + a) || a
        }
        for (var d = {},
        e = 1; e < arguments[D]; e++) for (c in arguments[e]) d[c] = arguments[e][c];
        try {
            var g = google[J].r.vb(""),
            j,
            l;
            e = 0;
            for (var u, w, B = function(rb) {
                rb = "data-" + rb;
                w = (u = G.getAttribute(rb)) ? google[J].r.Kg(u, d) : "";
                j.removeAttribute && j.removeAttribute(rb);
                return u
            },
            G = a[Ea]; G; G = l ? G: G.nextSibling) {
                j = G[Fa](h);
                if (G.nodeType != 1) {
                    if (G.nodeType != 3 || G.nodeValue[Ba](/\S/)) g[s](j)
                } else {
                    B("foreach");
                    if (!l) if (u) {
                        d.Foreach = w && typeof w[cb] == "function" ? w: [w];
                        c = 0;
                        l = 1
                    }
                    if (l) if (c < d.Foreach[D]) d.Cur = d.Foreach[d.Index = c++];
                    else {
                        l = 0;
                        continue
                    }
                    if (B("if")) e = 0;
                    if (u || B("elif")) if (e || !w) continue;
                    else e = 1;
                    if (!B("attr") || w) {
                        g[s](j);
                        if (u) for (var V in w) if (w[V] != n) if (V == "class") r(j, w[V]);
                        else if (V == "style" && ob()) j[I].cssText = w[V];
                        else j[C](V, w[V])
                    } else j = g;
                    var Lb = B("body") ? w && w[s] ? w: o.createTextNode(w) : google[J].r.bc(G, d, B("vars") ? w: {});
                    try {
                        Lb && j[s](Lb)
                    } catch(Tb) {}
                }
            }
            return g
        } catch(Rb) {
            return google[J].r.vb(Rb.toString() + ": " + u)
        }
    };
    O("google.search.Csedr.render", google[J].r.bc);
    google[J].r.cd = ' <div style="display:none"> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"></div> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target}" data-body="html(title)"></a> </div> <div class="gs-snippet" data-body="html(content)"></div> <div class="gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl"></div> <div class="gs-visibleUrl gs-visibleUrl-long" data-body="longUrl()"></div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"></div> </div> </div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:Vars.thumbnail && thumbnail.src ? thumbnail : {src:Vars.document && document.thumbnailUrl}}"> <div data-if="tn.src" class="gs-image-box gs-web-image-box"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{src:tn.src, width:tn.width || 100, height: tn.height}"/> </a> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target}" data-body="Cur.label"></a> </div> </div> </div> </div> ';
    google.loader.loaded({
        "module": "search",
        "version": "1.0",
        "components": ["default"]
    });
    google.loader.eval.search = function() {
        eval(arguments[0]);
    };
    if (google.loader.eval.scripts && google.loader.eval.scripts['search']) { (function() {
            var scripts = google.loader.eval.scripts['search'];
            for (var i = 0; i < scripts.length; i++) {
                google.loader.eval.search(scripts[i]);
            }
        })();
        google.loader.eval.scripts['search'] = null;
    }
})();