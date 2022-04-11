"use strict";
// Copyright 2012 Google Inc. All rights reserved.
(function () {
    var data = {
        "resource": {
            "version": "1",
            "macros": [{ "function": "__e" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "IS_OUTBOUND", "vtp_affiliatedDomains": ["list"] }, { "function": "__v", "vtp_name": "gtm.triggers", "vtp_dataLayerVersion": 2, "vtp_setDefaultValue": true, "vtp_defaultValue": "" }, { "function": "__v", "vtp_name": "gtm.elementId", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.elementClasses", "vtp_dataLayerVersion": 1 }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "URL_NO_FRAGMENT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "HOST", "vtp_stripWww": true }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "EXTENSION" }, { "function": "__aev", "vtp_varType": "TEXT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "PATH" }, { "function": "__v", "vtp_name": "gtm.videoStatus", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoTitle", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoProvider", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoCurrentTime", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoDuration", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoPercent", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoVisible", "vtp_dataLayerVersion": 1 }, { "function": "__u", "vtp_component": "QUERY", "vtp_queryKey": "q,s,search,query,keyword", "vtp_multiQueryKeys": true, "vtp_ignoreEmptyQueryParam": true, "vtp_enableMultiQueryKeys": false, "vtp_enableIgnoreEmptyQueryParam": false }, { "function": "__v", "vtp_name": "gtm.scrollThreshold", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.historyChangeSource", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.oldUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.newUrl", "vtp_dataLayerVersion": 1 }, { "function": "__c", "vtp_value": "google.mg" }, { "function": "__c", "vtp_value": 0 }, { "vtp_signal": 0, "function": "__c", "vtp_value": 0 }],
            "tags": [{ "function": "__gct", "vtp_trackingId": "G-FTS1MM0DVD", "vtp_sessionDuration": 0, "tag_id": 1 }, { "function": "__get", "vtp_eventName": "click", "vtp_settings": ["map", "streamId", "G-FTS1MM0DVD", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]], "vtp_deferrable": false, "tag_id": 11 }, { "function": "__get", "vtp_eventName": "file_download", "vtp_settings": ["map", "streamId", "G-FTS1MM0DVD", "eventParameters", ["map", "link_id", ["macro", 3], "link_text", ["macro", 8], "link_url", ["macro", 5], "file_name", ["macro", 9], "file_extension", ["macro", 7]]], "vtp_deferrable": false, "tag_id": 18 }, { "function": "__get", "vtp_eventName": ["template", "video_", ["macro", 10]], "vtp_settings": ["map", "streamId", "G-FTS1MM0DVD", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]], "vtp_deferrable": false, "tag_id": 21 }, { "function": "__get", "vtp_eventName": "view_search_results", "vtp_settings": ["map", "streamId", "G-FTS1MM0DVD", "eventParameters", ["map", "search_term", ["macro", 18]]], "vtp_deferrable": true, "tag_id": 26 }, { "function": "__get", "vtp_eventName": "scroll", "vtp_settings": ["map", "streamId", "G-FTS1MM0DVD", "eventParameters", ["map", "percent_scrolled", ["macro", 19]]], "vtp_deferrable": false, "tag_id": 29 }, { "function": "__get", "vtp_eventName": "page_view", "vtp_settings": ["map", "streamId", "G-FTS1MM0DVD", "eventParameters", ["map", "page_referrer", ["macro", 21]]], "vtp_deferrable": false, "tag_id": 32 }, { "function": "__dlm", "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-FTS1MM0DVD", "value", ["macro", 21]]], "tag_id": 33 }, { "function": "__set_product_settings", "original_activity_id": 3001, "vtp_foreignTldMacroResult": ["macro", 23], "vtp_isChinaVipRegionMacroResult": ["macro", 24], "tag_id": 36 }, { "function": "__ogt_event_settings", "original_activity_id": 3002, "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]], "tag_id": 37 }, { "function": "__ogt_google_signals", "original_activity_id": 3003, "vtp_googleSignals": "DISABLED", "vtp_serverMacroResult": ["macro", 25], "tag_id": 38 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_9", "tag_id": 39 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_16", "tag_id": 40 }, { "function": "__ytl", "vtp_captureStart": true, "vtp_captureComplete": true, "vtp_captureProgress": true, "vtp_progressThresholdsPercent": "10,25,50,75", "vtp_triggerStartOption": "DOM_READY", "vtp_uniqueTriggerId": "1_19", "vtp_enableTriggerStartOption": true, "tag_id": 41 }, { "function": "__sdl", "vtp_verticalThresholdUnits": "PERCENT", "vtp_verticalThresholdsPercent": "90", "vtp_verticalThresholdOn": true, "vtp_horizontalThresholdOn": false, "vtp_triggerStartOption": "WINDOW_LOAD", "vtp_uniqueTriggerId": "1_27", "vtp_enableTriggerStartOption": true, "tag_id": 42 }, { "function": "__ehl", "vtp_groupEvents": true, "vtp_groupEventsInterval": 1000, "vtp_uniqueTriggerId": "1_30", "tag_id": 43 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }, { "function": "_eq", "arg0": ["macro", 1], "arg1": true }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_9($|,)))" }, { "function": "_re", "arg0": ["macro", 7], "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma", "ignore_case": true }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_16($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.video" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_19($|,)))" }, { "function": "_eq", "arg0": ["macro", 18], "arg1": "undefined" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.scrollDepth" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_27($|,)))" }, { "function": "_eq", "arg0": ["macro", 20], "arg1": ["list", "pushState", "popstate", "replaceState"], "any_of": true }, { "function": "_eq", "arg0": ["macro", 21], "arg1": ["macro", 22] }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.historyChange-v2" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_30($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.init" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.dom" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.load" }],
            "rules": [[["if", 0], ["add", 0, 11, 12, 15]], [["if", 1, 2, 3], ["add", 1]], [["if", 2, 4, 5], ["add", 2]], [["if", 6, 7], ["add", 3]], [["if", 0], ["unless", 8], ["add", 4]], [["if", 9, 10], ["add", 5]], [["if", 11, 13, 14], ["unless", 12], ["add", 6, 7]], [["if", 15], ["add", 8, 9, 10]], [["if", 16], ["add", 13]], [["if", 17], ["add", 14]]]
        },
        "runtime": [[50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_event_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [8]], [53, [41, "f"], [3, "f", 0], [63, [7, "f"], [23, [15, "f"], [17, [17, [15, "a"], "eventSettings"], "length"]], [33, [15, "f"], [3, "f", [0, [15, "f"], 1]]], [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "name"]], [43, [15, "d"], [15, "g"], [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "conversion"]]]]]]], [52, "e", [17, ["c"], "containerId"]], ["b", [15, "e"], "event_settings", [15, "d"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [17, ["c"], "containerId"]], ["b", [15, "d"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]]],
        "permissions": { "__set_product_settings": { "read_container_data": {} }, "__ogt_event_settings": { "read_container_data": {} }, "__ogt_google_signals": { "read_container_data": {} } },
        "security_groups": {
            "google": ["__set_product_settings", "__ogt_event_settings", "__ogt_google_signals"]
        }
    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function (a) { var b = 0; return function () { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }; }; }, ba = function (a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) }; }, ca = "function" == typeof Object.create ? Object.create : function (a) { var b = function () { }; b.prototype = a; return new b; }, da;
    if ("function" == typeof Object.setPrototypeOf)
        da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = { a: !0 }, ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.a;
                break a;
            }
            catch (a) { }
            ea = !1;
        }
        da = ea ? function (a, b) { a.__proto__ = b; if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible"); return a; } : null;
    }
    var ja = da, la = function (a, b) { a.prototype = ca(b.prototype); a.prototype.constructor = a; if (ja)
        ja(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d);
                }
                else
                    a[c] = b[c]; a.vk = b.prototype; }, ma = this || self, na = function (a) { return a; };
    var pa = function (a, b) { this.g = a; this.o = b; };
    var qa = function (a) { return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10); }, ra = function () { this.C = {}; this.s = !1; this.F = {}; }, sa = function (a, b) { var c = [], d; for (d in a.C)
        if (a.C.hasOwnProperty(d))
            switch (d = d.substr(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3: c.push([d, a.get(d)]);
            } return c; };
    ra.prototype.get = function (a) { return this.C["dust." + a]; };
    ra.prototype.set = function (a, b) { this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.C[a] = b)); };
    ra.prototype.has = function (a) { return this.C.hasOwnProperty("dust." + a); };
    var ta = function (a, b) { b = "dust." + b; a.s || a.F.hasOwnProperty(b) || delete a.C[b]; };
    ra.prototype.Bb = function () { this.s = !0; };
    var ua = function (a) { this.o = new ra; this.g = []; this.s = !1; a = a || []; for (var b in a)
        a.hasOwnProperty(b) && (qa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b])); };
    l = ua.prototype;
    l.toString = function (a) { if (a && 0 <= a.indexOf(this))
        return ""; for (var b = [], c = 0; c < this.g.length; c++) {
        var d = this.g[c];
        null === d || void 0 === d ? b.push("") : d instanceof ua ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString());
    } return b.join(","); };
    l.set = function (a, b) { if (!this.s)
        if ("length" === a) {
            if (!qa(b))
                throw Error("RangeError: Length property must be a valid integer.");
            this.g.length = Number(b);
        }
        else
            qa(a) ? this.g[Number(a)] = b : this.o.set(a, b); };
    l.get = function (a) { return "length" === a ? this.length() : qa(a) ? this.g[Number(a)] : this.o.get(a); };
    l.length = function () { return this.g.length; };
    l.Ab = function () { for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++)
        a.push(b + ""); return new ua(a); };
    var va = function (a, b) { qa(b) ? delete a.g[Number(b)] : ta(a.o, b); };
    l = ua.prototype;
    l.pop = function () { return this.g.pop(); };
    l.push = function (a) { return this.g.push.apply(this.g, Array.prototype.slice.call(arguments)); };
    l.shift = function () { return this.g.shift(); };
    l.splice = function (a, b, c) { return new ua(this.g.splice.apply(this.g, arguments)); };
    l.unshift = function (a) { return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments)); };
    l.has = function (a) { return qa(a) && this.g.hasOwnProperty(a) || this.o.has(a); };
    l.Bb = function () { this.s = !0; Object.freeze(this.g); this.o.Bb(); };
    var wa = function () { function a(f, g) { if (b[f]) {
        if (b[f].Ed + g > b[f].max)
            throw Error("Quota exceeded");
        b[f].Ed += g;
    } } var b = {}, c = void 0, d = void 0, e = { Bj: function (f) { c = f; }, Gg: function () { c && a(c, 1); }, Dj: function (f) { d = f; }, Cb: function (f) { d && a(d, f); }, Vj: function (f, g) { b[f] = b[f] || { Ed: 0 }; b[f].max = g; }, cj: function (f) { return b[f] && b[f].Ed || 0; }, reset: function () { b = {}; }, Oi: a }; e.onFnConsume = e.Bj; e.consumeFn = e.Gg; e.onStorageConsume = e.Dj; e.consumeStorage = e.Cb; e.setMax = e.Vj; e.getConsumed = e.cj; e.reset = e.reset; e.consume = e.Oi; return e; };
    var ya = function (a, b) { this.s = a; this.N = function (c, d, e) { return c.apply(d, e); }; this.C = b; this.o = new ra; this.g = this.F = void 0; };
    ya.prototype.add = function (a, b) { za(this, a, b, !1); };
    var za = function (a, b, c, d) { if (!a.o.s)
        if (a.s.Cb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
            var e = a.o;
            e.set(b, c);
            e.F["dust." + b] = !0;
        }
        else
            a.o.set(b, c); };
    ya.prototype.set = function (a, b) { this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Cb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b))); };
    ya.prototype.get = function (a) { return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0; };
    ya.prototype.has = function (a) { return !!this.o.has(a) || !(!this.C || !this.C.has(a)); };
    var Aa = function (a) { var b = new ya(a.s, a); a.F && (b.F = a.F); b.N = a.N; b.g = a.g; return b; };
    var Ca = function () { }, Ea = function (a) { return "function" == typeof a; }, Ga = function (a) { return "string" == typeof a; }, Ha = function (a) { return "number" == typeof a && !isNaN(a); }, Ia = Array.isArray, Ja = function (a, b) { if (a && Ia(a))
        for (var c = 0; c < a.length; c++)
            if (a[c] && b(a[c]))
                return a[c]; }, Ka = function (a, b) { if (!Ha(a) || !Ha(b) || a > b)
        a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a); }, Na = function (a, b) { for (var c = new La, d = 0; d < a.length; d++)
        c.set(a[d], !0); for (var e = 0; e < b.length; e++)
        if (c.get(b[e]))
            return !0; return !1; }, Oa = function (a, b) { for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]); }, Pa = function (a) { return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")); }, Sa = function (a) { return Math.round(Number(a)) || 0; }, Ta = function (a) { return "false" == String(a).toLowerCase() ? !1 : !!a; }, Va = function (a) { var b = []; if (Ia(a))
        for (var c = 0; c < a.length; c++)
            b.push(String(a[c])); return b; }, Wa = function (a) { return a ? a.replace(/^\s+|\s+$/g, "") : ""; }, $a = function () { return new Date(Date.now()); }, ab = function () { return $a().getTime(); }, La = function () { this.prefix = "gtm."; this.values = {}; };
    La.prototype.set = function (a, b) { this.values[this.prefix + a] = b; };
    La.prototype.get = function (a) { return this.values[this.prefix + a]; };
    var bb = function (a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c; }, cb = function (a) { var b = a; return function () { if (b) {
        var c = b;
        b = void 0;
        try {
            c();
        }
        catch (d) { }
    } }; }, db = function (a, b) { for (var c in b)
        b.hasOwnProperty(c) && (a[c] = b[c]); }, eb = function (a) { for (var b in a)
        if (a.hasOwnProperty(b))
            return !0; return !1; }, gb = function (a, b) { for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c; }, hb = function (a, b) {
        var c = m;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <=
                b.indexOf(d))
                return;
        }
        return d;
    }, ib = function (a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {}; d[e[e.length - 1]] = b; return c; }, kb = /^\w{1,9}$/, lb = function (a, b) { a = a || {}; b = b || ","; var c = []; Oa(a, function (d, e) { kb.test(d) && e && c.push(d); }); return c.join(b); }, mb = function (a, b) { function c() { ++d === b && (e(), e = null, c.done = !0); } var d = 0, e = a; c.done = !1; return c; };
    var nb = function (a, b) { ra.call(this); this.N = a; this.Na = b; };
    la(nb, ra);
    nb.prototype.toString = function () { return this.N; };
    nb.prototype.Ab = function () { return new ua(sa(this, 1)); };
    nb.prototype.g = function (a, b) { a.s.Gg(); return this.Na.apply(new pb(this, a), Array.prototype.slice.call(arguments, 1)); };
    nb.prototype.o = function (a, b) { try {
        return this.g.apply(this, Array.prototype.slice.call(arguments, 0));
    }
    catch (c) { } };
    var rb = function (a, b) { for (var c, d = 0; d < b.length && !(c = qb(a, b[d]), c instanceof pa); d++)
        ; return c; }, qb = function (a, b) { try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof nb))
            throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.g.apply(c, [a].concat(b.slice(1)));
    }
    catch (e) {
        var d = a.F;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
    } }, pb = function (a, b) { this.o = a; this.g = b; }, B = function (a, b) { return Ia(b) ? qb(a.g, b) : b; }, G = function (a) { return a.o.N; };
    var sb = function () { ra.call(this); };
    la(sb, ra);
    sb.prototype.Ab = function () { return new ua(sa(this, 1)); };
    var tb = { control: function (a, b) { return new pa(a, B(this, b)); }, fn: function (a, b, c) {
            var d = this.g, e = B(this, b);
            if (!(e instanceof ua))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Cb(a.length + f.length);
            return new nb(a, function () {
                return function (g) {
                    var h = Aa(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = B(this, k[n]), k[n] instanceof pa)
                            return k[n];
                    for (var p = e.get("length"), r = 0; r < p; r++)
                        r < k.length ? h.add(e.get(r), k[r]) : h.add(e.get(r), void 0);
                    h.add("arguments", new ua(k));
                    var t = rb(h, f);
                    if (t instanceof pa)
                        return "return" === t.g ? t.o : t;
                };
            }());
        }, list: function (a) { var b = this.g.s; b.Cb(arguments.length); for (var c = new ua, d = 0; d < arguments.length; d++) {
            var e = B(this, arguments[d]);
            "string" === typeof e && b.Cb(e.length ? e.length - 1 : 0);
            c.push(e);
        } return c; }, map: function (a) {
            for (var b = this.g.s, c = new sb, d = 0; d < arguments.length - 1; d += 2) {
                var e = B(this, arguments[d]) + "", f = B(this, arguments[d + 1]), g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Cb(g);
                c.set(e, f);
            }
            return c;
        }, undefined: function () { } };
    var ub = function () { this.s = wa(); this.g = new ya(this.s); }, vb = function (a, b, c) { var d = new nb(b, c); d.Bb(); a.g.set(b, d); }, wb = function (a, b, c) { tb.hasOwnProperty(b) && vb(a, c || b, tb[b]); };
    ub.prototype.execute = function (a, b) { var c = Array.prototype.slice.call(arguments, 0); return this.o(c); };
    ub.prototype.o = function (a) { for (var b, c = 0; c < arguments.length; c++)
        b = qb(this.g, arguments[c]); return b; };
    ub.prototype.C = function (a, b) { var c = Aa(this.g); c.g = a; for (var d, e = 1; e < arguments.length; e++)
        d = d = qb(c, arguments[e]); return d; };
    var xb, yb = function () { if (void 0 === xb) {
        var a = null, b = ma.trustedTypes;
        if (b && b.createPolicy) {
            try {
                a = b.createPolicy("goog#html", { createHTML: na, createScript: na, createScriptURL: na });
            }
            catch (c) {
                ma.console && ma.console.error(c.message);
            }
            xb = a;
        }
        else
            xb = a;
    } return xb; };
    var Bb = function (a, b) { this.s = b === zb ? a : ""; };
    Bb.prototype.o = !0;
    Bb.prototype.g = function () { return this.s.toString(); };
    Bb.prototype.toString = function () { return this.s + ""; };
    var zb = {}, Cb = function (a) { var b = yb(), c = b ? b.createScriptURL(a) : a; return new Bb(c, zb); };
    var Eb = function (a, b) { this.s = b === Db ? a : ""; };
    Eb.prototype.o = !0;
    Eb.prototype.g = function () { return this.s.toString(); };
    Eb.prototype.toString = function () { return this.s.toString(); };
    var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Db = {};
    var Gb;
    a: {
        var Hb = ma.navigator;
        if (Hb) {
            var Ib = Hb.userAgent;
            if (Ib) {
                Gb = Ib;
                break a;
            }
        }
        Gb = "";
    }
    function Lb(a) { return -1 != Gb.indexOf(a); }
    ;
    var Mb = {}, Nb = function (a, b, c) { this.s = c === Mb ? a : ""; this.o = !0; };
    Nb.prototype.g = function () { return this.s.toString(); };
    Nb.prototype.toString = function () { return this.s.toString(); };
    var Ob = function (a) { return a instanceof Nb && a.constructor === Nb ? a.s : "type_error:SafeHtml"; }, Pb = function (a) { var b = yb(), c = b ? b.createHTML(a) : a; return new Nb(c, null, Mb); }, Rb = new Nb(ma.trustedTypes && ma.trustedTypes.emptyHTML || "", 0, Mb); /*
    
     SPDX-License-Identifier: Apache-2.0
    */
    function Sb(a, b) { a.src = b instanceof Bb && b.constructor === Bb ? b.s : "type_error:TrustedResourceUrl"; var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document, f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]"); (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c); }
    ;
    var Tb = function (a, b) { var c = function () { }; c.prototype = a.prototype; var d = new c; a.apply(d, Array.prototype.slice.call(arguments, 1)); return d; }, Ub = function (a) { var b = a; return function () { if (b) {
        var c = b;
        b = null;
        c();
    } }; };
    var Vb = function (a) { var b = !1, c; return function () { b || (c = a(), b = !0); return c; }; }(function () { var a = document.createElement("div"), b = document.createElement("div"); b.appendChild(document.createElement("div")); a.appendChild(b); var c = a.firstChild.firstChild; a.innerHTML = Ob(Rb); return !c.parentElement; });
    var m = window, H = document, Wb = navigator, Xb = H.currentScript && H.currentScript.src, Yb = function (a, b) { var c = m[a]; m[a] = void 0 === c ? b : c; return m[a]; }, Zb = function (a) { var b = H.getElementsByTagName("script")[0] || H.body || H.head; b.parentNode.insertBefore(a, b); }, $b = function (a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()); }); }, ac = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 }, bc = function (a, b, c, d) {
        var e = H.createElement("script");
        d && Oa(d, function (f, g) { f = f.toLowerCase(); ac.hasOwnProperty(f) || e.setAttribute(f, g); });
        e.type = "text/javascript";
        e.async = !0;
        Sb(e, Cb(a));
        $b(e, b);
        c && (e.onerror = c);
        Zb(e);
        return e;
    }, cc = function () { if (Xb) {
        var a = Xb.toLowerCase();
        if (0 === a.indexOf("https://"))
            return 2;
        if (0 === a.indexOf("http://"))
            return 3;
    } return 1; }, dc = function (a, b) {
        var c = H.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = H.body && H.body.lastChild || H.body || H.head;
        d.parentNode.insertBefore(c, d);
        $b(c, b);
        void 0 !== a && (c.src = a);
        return c;
    }, ec = function (a, b, c) { var d = new Image(1, 1); d.onload = function () { d.onload = null; b && b(); }; d.onerror = function () { d.onerror = null; c && c(); }; d.src = a; return d; }, fc = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c); }, gc = function (a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c); }, I = function (a) { m.setTimeout(a, 0); }, hc = function (a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
            null;
    }, kc = function (a) { var b = a.innerText || a.textContent || ""; b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")); b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")); return b; }, lc = function (a) { var b = H.createElement("div"), c = Pb("A<div>" + a + "</div>"), d = b; if (Vb())
        for (; d.lastChild;)
            d.removeChild(d.lastChild); d.innerHTML = Ob(c); b = b.lastChild; for (var e = []; b.firstChild;)
        e.push(b.removeChild(b.firstChild)); return e; }, mc = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement;
        }
        return null;
    }, nc = function (a) { var b; try {
        b = Wb.sendBeacon && Wb.sendBeacon(a);
    }
    catch (c) { } b || ec(a); }, oc = function (a, b) { var c = a[b]; c && "string" === typeof c.animVal && (c = c.animVal); return c; }, pc = function (a) { var b = H.featurePolicy; return b && Ea(b.allowsFeature) ? b.allowsFeature(a) : !1; };
    var qc = function (a, b) { return B(this, a) && B(this, b); }, rc = function (a, b) { return B(this, a) === B(this, b); }, sc = function (a, b) { return B(this, a) || B(this, b); }, tc = function (a, b) { a = B(this, a); b = B(this, b); return -1 < String(a).indexOf(String(b)); }, uc = function (a, b) { a = String(B(this, a)); b = String(B(this, b)); return a.substring(0, b.length) === b; }, vc = function (a, b) { a = B(this, a); b = B(this, b); switch (a) {
        case "pageLocation":
            var c = m.location.href;
            b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c;
    } };
    var xc = function () { this.g = new ub; wc(this); };
    xc.prototype.execute = function (a) { return this.g.o(a); };
    var wc = function (a) { wb(a.g, "map"); var b = function (c, d) { vb(a.g, c, d); }; b("and", qc); b("contains", tc); b("equals", rc); b("or", sc); b("startsWith", uc); b("variable", vc); };
    var yc = function (a) { if (a instanceof yc)
        return a; this.Sa = a; };
    yc.prototype.toString = function () { return String(this.Sa); };
    var Ac = function (a) { ra.call(this); this.g = a; this.set("then", zc(this)); this.set("catch", zc(this, !0)); this.set("finally", zc(this, !1, !0)); };
    la(Ac, sb);
    var zc = function (a, b, c) { b = void 0 === b ? !1 : b; c = void 0 === c ? !1 : c; return new nb("", function (d, e) { b && (e = d, d = void 0); c && (e = d); d instanceof nb || (d = void 0); e instanceof nb || (e = void 0); var f = Aa(this.g), g = function (k) { return function (n) { return c ? (k.g(f), a.g) : k.g(f, n); }; }, h = a.g.then(d && g(d), e && g(e)); return new Ac(h); }); }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Bc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Cc = function (a) { if (null == a)
        return String(a); var b = Bc.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object"; }, Ec = function (a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b); }, Fc = function (a) {
        if (!a || "object" != Cc(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Ec(a, "constructor") && !Ec(a.constructor.prototype, "isPrototypeOf"))
                return !1;
        }
        catch (c) {
            return !1;
        }
        for (var b in a)
            ;
        return void 0 ===
            b || Ec(a, b);
    }, Gc = function (a, b) { var c = b || ("array" == Cc(a) ? [] : {}), d; for (d in a)
        if (Ec(a, d)) {
            var e = a[d];
            "array" == Cc(e) ? ("array" != Cc(c[d]) && (c[d] = []), c[d] = Gc(e, c[d])) : Fc(e) ? (Fc(c[d]) || (c[d] = {}), c[d] = Gc(e, c[d])) : c[d] = e;
        } return c; };
    var Ic = function (a, b, c) {
        var d = [], e = [], f = function (h, k) { for (var n = sa(h, 1), p = 0; p < n.length; p++)
            k[n[p]] = g(h.get(n[p])); }, g = function (h) {
            var k = d.indexOf(h);
            if (-1 < k)
                return e[k];
            if (h instanceof ua) {
                var n = [];
                d.push(h);
                e.push(n);
                for (var p = h.Ab(), r = 0; r < p.length(); r++)
                    n[p.get(r)] = g(h.get(p.get(r)));
                return n;
            }
            if (h instanceof Ac)
                return h.g;
            if (h instanceof sb) {
                var t = {};
                d.push(h);
                e.push(t);
                f(h, t);
                return t;
            }
            if (h instanceof nb) {
                var u = function () {
                    for (var q = Array.prototype.slice.call(arguments, 0), v = 0; v < q.length; v++)
                        q[v] = Hc(q[v], b, !!c);
                    var w = b ? b.s : wa(), y = new ya(w);
                    b && (y.g = b.g);
                    return g(h.g.apply(h, [y].concat(q)));
                };
                d.push(h);
                e.push(u);
                f(h, u);
                return u;
            }
            switch (typeof h) {
                case "boolean":
                case "number":
                case "string":
                case "undefined": return h;
                case "object": if (null === h)
                    return null;
            }
        };
        return g(a);
    }, Hc = function (a, b, c) {
        var d = [], e = [], f = function (h, k) {
            for (var n in h)
                h.hasOwnProperty(n) && k.set(n, g(h[n]));
        }, g = function (h) { var k = d.indexOf(h); if (-1 < k)
            return e[k]; if (Ia(h) || Pa(h)) {
            var n = new ua([]);
            d.push(h);
            e.push(n);
            for (var p in h)
                h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
        } if (Fc(h)) {
            var r = new sb;
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
        } if ("function" === typeof h) {
            var t = new nb("", function (y) { for (var x = Array.prototype.slice.call(arguments, 0), z = 0; z < x.length; z++)
                x[z] = Ic(B(this, x[z]), b, !!c); return g((0, this.g.N)(h, h, x)); });
            d.push(h);
            e.push(t);
            f(h, t);
            return t;
        } var w = typeof h; if (null === h || "string" === w || "number" === w || "boolean" === w)
            return h; };
        return g(a);
    };
    var Jc = function (a) { for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c)); return b; }, Kc = function (a) { if (void 0 === a || Ia(a) || Fc(a))
        return !0; switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function": return !0;
    } return !1; };
    var Lc = { supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "), concat: function (a, b) { for (var c = [], d = 0; d < this.length(); d++)
            c.push(this.get(d)); for (var e = 1; e < arguments.length; e++)
            if (arguments[e] instanceof ua)
                for (var f = arguments[e], g = 0; g < f.length(); g++)
                    c.push(f.get(g));
            else
                c.push(arguments[e]); return new ua(c); }, every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this))
                    return !1;
            return !0;
        }, filter: function (a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
            this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e)); return new ua(d); }, forEach: function (a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
            this.has(d) && b.g(a, this.get(d), d, this); }, hasOwnProperty: function (a, b) { return this.has(b); }, indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b)
                    return f;
            return -1;
        }, join: function (a, b) { for (var c = [], d = 0; d < this.length(); d++)
            c.push(this.get(d)); return c.join(b); }, lastIndexOf: function (a, b, c) { var d = this.length(), e = d - 1; void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e)); for (var f = e; 0 <= f; f--)
            if (this.has(f) && this.get(f) === b)
                return f; return -1; }, map: function (a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
            this.has(e) && (d[e] = b.g(a, this.get(e), e, this)); return new ua(d); }, pop: function () { return this.pop(); }, push: function (a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
        }, reduce: function (a, b, c) { var d = this.length(), e, f = 0; if (void 0 !== c)
            e = c;
        else {
            if (0 === d)
                throw Error("TypeError: Reduce on List with no elements.");
            for (var g = 0; g < d; g++)
                if (this.has(g)) {
                    e = this.get(g);
                    f = g + 1;
                    break;
                }
            if (g === d)
                throw Error("TypeError: Reduce on List with no elements.");
        } for (var h = f; h < d; h++)
            this.has(h) && (e = b.g(a, e, this.get(h), h, this)); return e; }, reduceRight: function (a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break;
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e;
        }, reverse: function () { for (var a = Jc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
            a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c); return this; }, shift: function () { return this.shift(); }, slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new ua(e);
        }, some: function (a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
            if (this.has(d) && b.g(a, this.get(d), d, this))
                return !0; return !1; }, sort: function (a, b) { var c = Jc(this); void 0 === b ? c.sort() : c.sort(function (e, f) { return Number(b.g(a, e, f)); }); for (var d = 0; d < c.length; d++)
            c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d); return this; }, splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
        }, toString: function () { return this.toString(); }, unshift: function (a, b) { return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1)); } };
    var Mc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "), Nc = new pa("break"), Oc = new pa("continue"), Pc = function (a, b) { return B(this, a) + B(this, b); }, Qc = function (a, b) { return B(this, a) && B(this, b); }, Uc = function (a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        if (!(c instanceof ua))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
        var d = "number" === typeof a;
        if ("boolean" === typeof a || d) {
            if ("toString" === b) {
                if (d && c.length()) {
                    var e = Ic(c.get(0));
                    try {
                        return a.toString(e);
                    }
                    catch (r) { }
                }
                return a.toString();
            }
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" === typeof a) {
            if (0 <= Mc.indexOf(b)) {
                var f = Ic(c);
                return Hc(a[b].apply(a, f), this.g);
            }
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof ua) {
            if (a.has(b)) {
                var g = a.get(b);
                if (g instanceof nb) {
                    var h = Jc(c);
                    h.unshift(this.g);
                    return g.g.apply(g, h);
                }
                throw Error("TypeError: " +
                    b + " is not a function");
            }
            if (0 <= Lc.supportedMethods.indexOf(b)) {
                var k = Jc(c);
                k.unshift(this.g);
                return Lc[b].apply(a, k);
            }
        }
        if (a instanceof nb || a instanceof sb) {
            if (a.has(b)) {
                var n = a.get(b);
                if (n instanceof nb) {
                    var p = Jc(c);
                    p.unshift(this.g);
                    return n.g.apply(n, p);
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" === b)
                return a instanceof nb ? a.N : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, Jc(c));
        }
        if (a instanceof yc && "toString" === b)
            return a.toString();
        throw Error("TypeError: Object has no '" +
            b + "' property.");
    }, Vc = function (a, b) { a = B(this, a); if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment."); var c = this.g; if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b); var d = B(this, b); c.set(a, d); return d; }, Wc = function (a) { var b = Aa(this.g), c = rb(b, Array.prototype.slice.apply(arguments)); if (c instanceof pa)
        return c; }, Xc = function () { return Nc; }, Yc = function (a) { for (var b = B(this, a), c = 0; c < b.length; c++) {
        var d = B(this, b[c]);
        if (d instanceof pa)
            return d;
    } }, Zc = function (a) {
        for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = B(this, arguments[c + 1]);
                za(b, d, e, !0);
            }
        }
    }, $c = function () { return Oc; }, ad = function (a, b, c) { var d = new ua; b = B(this, b); for (var e = 0; e < b.length; e++)
        d.push(b[e]); var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2)); this.g.add(a, B(this, f)); }, bd = function (a, b) { return B(this, a) / B(this, b); }, cd = function (a, b) {
        a = B(this, a);
        b = B(this, b);
        var c = a instanceof yc, d = b instanceof yc;
        return c || d ? c && d ? a.Sa == b.Sa : !1 : a ==
            b;
    }, dd = function (a) { for (var b, c = 0; c < arguments.length; c++)
        b = B(this, arguments[c]); return b; };
    function ed(a, b, c, d) { for (var e = 0; e < b(); e++) {
        var f = a(c(e)), g = rb(f, d);
        if (g instanceof pa) {
            if ("break" === g.g)
                break;
            if ("return" === g.g)
                return g;
        }
    } }
    function fd(a, b, c) { if ("string" === typeof b)
        return ed(a, function () { return b.length; }, function (f) { return f; }, c); if (b instanceof sb || b instanceof ua || b instanceof nb) {
        var d = b.Ab(), e = d.length();
        return ed(a, function () { return e; }, function (f) { return d.get(f); }, c);
    } }
    var gd = function (a, b, c) { a = B(this, a); b = B(this, b); c = B(this, c); var d = this.g; return fd(function (e) { d.set(a, e); return d; }, b, c); }, hd = function (a, b, c) { a = B(this, a); b = B(this, b); c = B(this, c); var d = this.g; return fd(function (e) { var f = Aa(d); za(f, a, e, !0); return f; }, b, c); }, id = function (a, b, c) { a = B(this, a); b = B(this, b); c = B(this, c); var d = this.g; return fd(function (e) { var f = Aa(d); f.add(a, e); return f; }, b, c); }, kd = function (a, b, c) { a = B(this, a); b = B(this, b); c = B(this, c); var d = this.g; return jd(function (e) { d.set(a, e); return d; }, b, c); }, ld = function (a, b, c) { a = B(this, a); b = B(this, b); c = B(this, c); var d = this.g; return jd(function (e) { var f = Aa(d); za(f, a, e, !0); return f; }, b, c); }, sd = function (a, b, c) { a = B(this, a); b = B(this, b); c = B(this, c); var d = this.g; return jd(function (e) { var f = Aa(d); f.add(a, e); return f; }, b, c); };
    function jd(a, b, c) { if ("string" === typeof b)
        return ed(a, function () { return b.length; }, function (d) { return b[d]; }, c); if (b instanceof ua)
        return ed(a, function () { return b.length(); }, function (d) { return b.get(d); }, c); throw new TypeError("The value is not iterable."); }
    var td = function (a, b, c, d) { function e(p, r) { for (var t = 0; t < f.length(); t++) {
        var u = f.get(t);
        r.add(u, p.get(u));
    } } var f = B(this, a); if (!(f instanceof ua))
        throw Error("TypeError: Non-List argument given to ForLet instruction."); var g = this.g; d = B(this, d); var h = Aa(g); for (e(g, h); qb(h, b);) {
        var k = rb(h, d);
        if (k instanceof pa) {
            if ("break" === k.g)
                break;
            if ("return" === k.g)
                return k;
        }
        var n = Aa(g);
        e(h, n);
        qb(n, c);
        h = n;
    } }, ud = function (a) { a = B(this, a); var b = this.g, c = !1; if (c && !b.has(a))
        throw new ReferenceError(a + " is not defined."); return b.get(a); }, vd = function (a, b) { var c; a = B(this, a); b = B(this, b); if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + "."); if (a instanceof sb || a instanceof ua || a instanceof nb)
        c = a.get(b);
    else if ("string" === typeof a)
        "length" === b ? c = a.length : qa(b) && (c = a[b]);
    else if (a instanceof yc)
        return; return c; }, wd = function (a, b) {
        return B(this, a) > B(this, b);
    }, xd = function (a, b) { return B(this, a) >= B(this, b); }, yd = function (a, b) { a = B(this, a); b = B(this, b); a instanceof yc && (a = a.Sa); b instanceof yc && (b = b.Sa); return a === b; }, zd = function (a, b) { return !yd.call(this, a, b); }, Ad = function (a, b, c) { var d = []; B(this, a) ? d = B(this, b) : c && (d = B(this, c)); var e = rb(this.g, d); if (e instanceof pa)
        return e; }, Bd = function (a, b) { return B(this, a) < B(this, b); }, Cd = function (a, b) { return B(this, a) <= B(this, b); }, Dd = function (a, b) { return B(this, a) % B(this, b); }, Ed = function (a, b) { return B(this, a) * B(this, b); }, Fd = function (a) {
        return -B(this, a);
    }, Gd = function (a) { return !B(this, a); }, Hd = function (a, b) { return !cd.call(this, a, b); }, Id = function () { return null; }, Jd = function (a, b) { return B(this, a) || B(this, b); }, Kd = function (a, b) { var c = B(this, a); B(this, b); return c; }, Ld = function (a) { return B(this, a); }, Md = function (a) { return Array.prototype.slice.apply(arguments); }, Nd = function (a) { return new pa("return", B(this, a)); }, Od = function (a, b, c) {
        a = B(this, a);
        b = B(this, b);
        c = B(this, c);
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof
            nb || a instanceof ua || a instanceof sb) && a.set(b, c);
        return c;
    }, Pd = function (a, b) { return B(this, a) - B(this, b); }, $d = function (a, b, c) {
        a = B(this, a);
        var d = B(this, b), e = B(this, c);
        if (!Ia(d) || !Ia(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === B(this, d[h]))
                if (f = B(this, e[h]), f instanceof pa) {
                    var k = f.g;
                    if ("break" === k)
                        return;
                    if ("return" === k || "continue" === k)
                        return f;
                }
                else
                    g = !0;
        if (e.length === d.length + 1 && (f = B(this, e[e.length - 1]), f instanceof pa && ("return" === f.g || "continue" ===
            f.g)))
            return f;
    }, ae = function (a, b, c) { return B(this, a) ? B(this, b) : B(this, c); }, be = function (a) { a = B(this, a); return a instanceof nb ? "function" : typeof a; }, ce = function (a) { for (var b = this.g, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
    } }, de = function (a, b, c, d) {
        var e = B(this, d);
        if (B(this, c)) {
            var f = rb(this.g, e);
            if (f instanceof pa) {
                if ("break" === f.g)
                    return;
                if ("return" === f.g)
                    return f;
            }
        }
        for (; B(this, a);) {
            var g = rb(this.g, e);
            if (g instanceof pa) {
                if ("break" === g.g)
                    break;
                if ("return" === g.g)
                    return g;
            }
            B(this, b);
        }
    }, ee = function (a) { return ~Number(B(this, a)); }, fe = function (a, b) { return Number(B(this, a)) << Number(B(this, b)); }, ge = function (a, b) { return Number(B(this, a)) >> Number(B(this, b)); }, he = function (a, b) { return Number(B(this, a)) >>> Number(B(this, b)); }, ie = function (a, b) { return Number(B(this, a)) & Number(B(this, b)); }, je = function (a, b) { return Number(B(this, a)) ^ Number(B(this, b)); }, ke = function (a, b) { return Number(B(this, a)) | Number(B(this, b)); };
    var me = function () { this.g = new ub; le(this); };
    me.prototype.execute = function (a) { return ne(this.g.o(a)); };
    var oe = function (a, b, c) { return ne(a.g.C(b, c)); }, le = function (a) {
        var b = function (d, e) { wb(a.g, d, String(e)); };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function (d, e) { vb(a.g, String(d), e); };
        c(0, Pc);
        c(1, Qc);
        c(2, Uc);
        c(3, Vc);
        c(53, Wc);
        c(4, Xc);
        c(5, Yc);
        c(52, Zc);
        c(6, $c);
        c(9, Yc);
        c(50, ad);
        c(10, bd);
        c(12, cd);
        c(13, dd);
        c(47, gd);
        c(54, hd);
        c(55, id);
        c(63, td);
        c(64, kd);
        c(65, ld);
        c(66, sd);
        c(15, ud);
        c(16, vd);
        c(17, vd);
        c(18, wd);
        c(19, xd);
        c(20, yd);
        c(21, zd);
        c(22, Ad);
        c(23, Bd);
        c(24, Cd);
        c(25, Dd);
        c(26, Ed);
        c(27, Fd);
        c(28, Gd);
        c(29, Hd);
        c(45, Id);
        c(30, Jd);
        c(32, Kd);
        c(33, Kd);
        c(34, Ld);
        c(35, Ld);
        c(46, Md);
        c(36, Nd);
        c(43, Od);
        c(37, Pd);
        c(38, $d);
        c(39, ae);
        c(40, be);
        c(41, ce);
        c(42, de);
        c(58, ee);
        c(57, fe);
        c(60, ge);
        c(61, he);
        c(56, ie);
        c(62, je);
        c(59, ke);
    };
    function ne(a) { if (a instanceof pa || a instanceof nb || a instanceof ua || a instanceof sb || a instanceof yc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
        return a; }
    ;
    var pe = function () {
        var a = function (b) { return { toString: function () { return b; } }; };
        return { Ch: a("consent"), Xd: a("consent_always_fire"), Ff: a("convert_case_to"), Gf: a("convert_false_to"), Hf: a("convert_null_to"), If: a("convert_true_to"), Jf: a("convert_undefined_to"), fk: a("debug_mode_metadata"), gk: a("event_data_overrides"), zb: a("function"), li: a("instance_name"), ri: a("live_only"), si: a("malware_disabled"), ui: a("metadata"), jk: a("original_activity_id"), kk: a("original_vendor_template_id"), yi: a("once_per_event"), mg: a("once_per_load"),
            mk: a("priority_override"), nk: a("respected_consent_types"), qg: a("setup_tags"), rg: a("tag_id"), sg: a("teardown_tags") };
    }();
    var Te;
    var Ue = [], Ve = [], We = [], Xe = [], Ye = [], Ze = {}, $e, af, bf, cf = function (a, b) { var c = {}; c["function"] = "__" + a; for (var d in b)
        b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]); return c; }, df = function (a, b) { var c = a["function"], d = b && b.event; if (!c)
        throw Error("Error: No function name given for function call."); var e = Ze[c], f = {}, g; for (g in a)
        if (a.hasOwnProperty(g))
            if (0 === g.indexOf("vtp_"))
                e && d && d.Fg && d.Fg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
            else if (g === pe.Xd.toString() && a[g]) { } e && d && d.Eg && (f.vtp_gtmCachedValues = d.Eg); return void 0 !== e ? e(f) : Te(c, f, b); }, ff = function (a, b, c) { c = c || []; var d = {}, e; for (e in a)
        a.hasOwnProperty(e) && (d[e] = ef(a[e], b, c)); return d; }, ef = function (a, b, c) {
        if (Ia(a)) {
            var d;
            switch (a[0]) {
                case "function_id": return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++)
                        d.push(ef(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f])
                        return;
                    var g = Ue[f];
                    if (!g || b.hf(g))
                        return;
                    c[f] = !0;
                    try {
                        var h = ff(g, b, c);
                        h.vtp_gtmEventId = b.id;
                        d = df(h, { event: b, index: f, type: 2 });
                        bf && (d = bf.Pi(d, h));
                    }
                    catch (y) {
                        b.Zg && b.Zg(y, Number(f)), d = !1;
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var k = 1; k < a.length; k += 2)
                        d[ef(a[k], b, c)] = ef(a[k + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                        var r = ef(a[p], b, c);
                        af && (n = n || r === af.ud);
                        d.push(r);
                    }
                    return af && n ? af.Ti(d) : d.join("");
                case "escape":
                    d = ef(a[1], b, c);
                    if (af && Ia(a[1]) && "macro" ===
                        a[1][0] && af.oj(a))
                        return af.Gj(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++)
                        qe[a[t]] && (d = qe[a[t]](d));
                    return d;
                case "tag":
                    var u = a[1];
                    if (!Xe[u])
                        throw Error("Unable to resolve tag reference " + u + ".");
                    return d = { Og: a[2], index: u };
                case "zb":
                    var q = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                    q["function"] = a[1];
                    var v = gf(q, b, c), w = !!a[4];
                    return w || 2 !== v ? w !== (1 === v) : null;
                default: throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a;
    }, gf = function (a, b, c) { try {
        return $e(ff(a, b, c));
    }
    catch (d) {
        JSON.stringify(a);
    } return 2; };
    var hf = function (a, b, c) { var d; d = Error.call(this); this.message = d.message; "stack" in d && (this.stack = d.stack); this.o = a; this.g = c; };
    la(hf, Error);
    function jf(a, b) { if (Ia(a)) {
        Object.defineProperty(a, "context", { value: { line: b[0] } });
        for (var c = 1; c < a.length; c++)
            jf(a[c], b[c]);
    } }
    ;
    var kf = function (a, b) { var c; c = Error.call(this); this.message = c.message; "stack" in c && (this.stack = c.stack); this.s = a; this.o = b; this.g = []; };
    la(kf, Error);
    var mf = function () { return function (a, b) { a instanceof kf || (a = new kf(a, lf)); b && a.g.push(b); throw a; }; };
    function lf(a) { if (!a.length)
        return a; a.push({ id: "main", line: 0 }); for (var b = a.length - 1; 0 < b; b--)
        Ha(a[b].id) && a.splice(b++, 1); for (var c = a.length - 1; 0 < c; c--)
        a[c].line = a[c - 1].line; a.splice(0, 1); return a; }
    ;
    var pf = function (a) { function b(t) { for (var u = 0; u < t.length; u++)
        d[t[u]] = !0; } for (var c = [], d = [], e = nf(a), f = 0; f < Ve.length; f++) {
        var g = Ve[f], h = of(g, e);
        if (h) {
            for (var k = g.add || [], n = 0; n < k.length; n++)
                c[k[n]] = !0;
            b(g.block || []);
        }
        else
            null === h && b(g.block || []);
    } for (var p = [], r = 0; r < Xe.length; r++)
        c[r] && !d[r] && (p[r] = !0); return p; }, of = function (a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null;
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1;
        }
        return !0;
    }, nf = function (a) { var b = []; return function (c) { void 0 === b[c] && (b[c] = gf(We[c], a)); return b[c]; }; };
    var qf = { Pi: function (a, b) { b[pe.Ff] && "string" === typeof a && (a = 1 == b[pe.Ff] ? a.toLowerCase() : a.toUpperCase()); b.hasOwnProperty(pe.Hf) && null === a && (a = b[pe.Hf]); b.hasOwnProperty(pe.Jf) && void 0 === a && (a = b[pe.Jf]); b.hasOwnProperty(pe.If) && !0 === a && (a = b[pe.If]); b.hasOwnProperty(pe.Gf) && !1 === a && (a = b[pe.Gf]); return a; } };
    var rf = function () { this.g = {}; };
    function sf(a, b, c, d) { if (a)
        for (var e = 0; e < a.length; e++) {
            var f = void 0, g = "A policy function denied the permission request";
            try {
                f = a[e].call(void 0, b, c, d), g += ".";
            }
            catch (h) {
                g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + ".";
            }
            if (!f)
                throw new hf(c, d, g);
        } }
    function tf(a, b, c) { return function () { var d = arguments[0]; if (d) {
        var e = a.g[d], f = a.g.all;
        if (e || f) {
            var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
            sf(e, b, d, g);
            sf(f, b, d, g);
        }
    } }; }
    ;
    var wf = function () { var a = data.permissions || {}, b = J.J, c = this; this.o = new rf; this.g = {}; var d = {}, e = tf(this.o, b, function () { var f = arguments[0]; return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}; }); Oa(a, function (f, g) { var h = {}; Oa(g, function (k, n) { var p = uf(k, n); h[k] = p.assert; d[k] || (d[k] = p.P); }); c.g[f] = function (k, n) { var p = h[k]; if (!p)
        throw vf(k, {}, "The requested permission " + k + " is not configured."); var r = Array.prototype.slice.call(arguments, 0); p.apply(void 0, r); e.apply(void 0, r); }; }); }, yf = function (a) { return xf.g[a] || function () { }; };
    function uf(a, b) { var c = cf(a, b); c.vtp_permissionName = a; c.vtp_createPermissionError = vf; try {
        return df(c);
    }
    catch (d) {
        return { assert: function (e) { throw new hf(e, {}, "Permission " + e + " is unknown."); }, P: function () { for (var e = {}, f = 0; f < arguments.length; ++f)
                e["arg" + (f + 1)] = arguments[f]; return e; } };
    } }
    function vf(a, b, c) { return new hf(a, b, c); }
    ;
    var zf = !1;
    var Af = {};
    Af.dk = Ta('');
    Af.Xi = Ta('');
    var Bf = zf, Cf = Af.Xi, Df = Af.dk;
    var Ef = function (a, b) { var c = String(a); return c; };
    var Jf = function (a) { var b = {}, c = 0; Oa(a, function (e, f) { if (void 0 !== f)
        if (f = Ef(f, 100), Ff.hasOwnProperty(e))
            b[Ff[e]] = Gf(f);
        else if (Hf.hasOwnProperty(e)) {
            var g = Hf[e], h = Gf(f);
            b.hasOwnProperty(g) || (b[g] = h);
        }
        else if ("category" === e)
            for (var k = Gf(f).split("/", 5), n = 0; n < k.length; n++) {
                var p = If[n], r = k[n];
                b.hasOwnProperty(p) || (b[p] = r);
            }
        else
            10 > c && (b["k" + c] = Gf(Ef(e, 40)), b["v" + c] = Gf(f), c++); }); var d = []; Oa(b, function (e, f) { d.push("" + e + f); }); return d.join("~"); }, Gf = function (a) { return ("" + a).replace(/~/g, function () { return "~~"; }); }, Ff = { item_id: "id", item_name: "nm", item_brand: "br", item_category: "ca", item_category2: "c2", item_category3: "c3", item_category4: "c4", item_category5: "c5", item_variant: "va", price: "pr", quantity: "qt", coupon: "cp", item_list_name: "ln", index: "lp", item_list_id: "li", discount: "ds", affiliation: "af", promotion_id: "pi", promotion_name: "pn", creative_name: "cn", creative_slot: "cs", location_id: "lo" }, Hf = { id: "id", name: "nm", brand: "br", variant: "va", list_name: "ln", list_position: "lp", list: "ln", position: "lp", creative: "cn" }, If = ["ca",
        "c2", "c3", "c4", "c5"];
    var Kf = function (a) { var b = []; Oa(a, function (c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d))); }); return b.join("&"); }, Lf = function (a, b, c, d) { this.Wa = a.Wa; this.Ib = a.Ib; this.K = a.K; this.o = b; this.C = c; this.s = Kf(a.Wa); this.g = Kf(a.K); this.F = d ? this.g.length : 0; if (16384 < this.F)
        throw Error("EVENT_TOO_LARGE"); };
    var Mf = function () { this.events = []; this.g = this.Wa = ""; this.s = 0; this.o = !1; };
    Mf.prototype.add = function (a) { return this.C(a) ? (this.events.push(a), this.Wa = a.s, this.g = a.o, this.s += a.F, this.o = a.C, !0) : !1; };
    Mf.prototype.C = function (a) { var b = 20 > this.events.length && 16384 > a.F + this.s, c = this.Wa === a.s && this.g === a.o && this.o === a.C; return 0 == this.events.length || b && c; };
    var Nf = function (a, b) { Oa(a, function (c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d)); }); }, Uf = function (a, b) { var c = []; a.s && c.push(a.s); b && c.push("_s=" + b); Nf(a.Ib, c); var d = !1; a.g && (c.push(a.g), d = !0); var e = c.join("&"), f = "", g = e.length + a.o.length + 1; d && 2048 < g && (f = c.pop(), e = c.join("&")); return { tf: e, body: f }; }, Vf = function (a, b) {
        var c = a.events;
        if (1 == c.length)
            return Uf(c[0], b);
        var d = [];
        a.Wa && d.push(a.Wa);
        for (var e = {}, f = 0; f < c.length; f++)
            Oa(c[f].Ib, function (u, q) {
                null != q && (e[u] = e[u] || {}, e[u][String(q)] =
                    e[u][String(q)] + 1 || 1);
            });
        var g = {};
        Oa(e, function (u, q) { var v, w = -1, y = 0; Oa(q, function (x, z) { y += z; var A = (x.length + u.length + 2) * (z - 1); A > w && (v = x, w = A); }); y == c.length && (g[u] = v); });
        Nf(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = { ad: n.ad }, p++) {
            var r = [];
            n.ad = {};
            Oa(c[p].Ib, function (u) { return function (q, v) { g[q] != "" + v && (u.ad[q] = v); }; }(n));
            c[p].g && r.push(c[p].g);
            Nf(n.ad, r);
            k.push(r.join("&"));
        }
        var t = k.join("\r\n");
        return { tf: h, body: t };
    };
    var dg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i, eg = { Fn: "function", DustMap: "Object", List: "Array" }, Q = function (a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = dg.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1], g = "!" === e[2], h = e[3], k = c[d], n = typeof k;
            if (null === k || "undefined" === n) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            }
            else if ("*" !== h) {
                var p = typeof k;
                k instanceof nb ? p = "Fn" : k instanceof ua ? p = "List" : k instanceof sb ? p = "DustMap" :
                    k instanceof yc && (p = "OpaqueValue");
                if (p != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (eg[h] || h) + ".");
            }
        }
    };
    function fg(a) { return "" + a; }
    function gg(a, b) { var c = []; return c; }
    ;
    var hg = function (a, b) { var c = new nb(a, function () { for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
        d[e] = B(this, d[e]); return b.apply(this, d); }); c.Bb(); return c; }, ig = function (a, b) { var c = new sb, d; for (d in b)
        if (b.hasOwnProperty(d)) {
            var e = b[d];
            Ea(e) ? c.set(d, hg(a + "_" + d, e)) : (Ha(e) || Ga(e) || "boolean" == typeof e) && c.set(d, e);
        } c.Bb(); return c; };
    var jg = function (a, b) { Q(G(this), ["apiName:!string", "message:?string"], arguments); var c = {}, d = new sb; return d = ig("AssertApiSubject", c); };
    var kg = function (a, b) {
        Q(G(this), ["actual:?*", "message:?string"], arguments);
        var c = {}, d = new sb;
        return d = ig("AssertThatSubject", c);
    };
    function lg(a) { return function () { for (var b = [], c = this.g, d = 0; d < arguments.length; ++d)
        b.push(Ic(arguments[d], c)); return Hc(a.apply(null, b)); }; }
    var ng = function () { for (var a = Math, b = mg, c = {}, d = 0; d < b.length; d++) {
        var e = b[d];
        a.hasOwnProperty(e) && (c[e] = lg(a[e].bind(a)));
    } return c; };
    var og = function (a) { var b; return b; };
    var pg = function (a) { var b; return b; };
    var qg = function (a) { return encodeURI(a); };
    var rg = function (a) { return encodeURIComponent(a); };
    var sg = function (a) { Q(G(this), ["message:?string"], arguments); };
    var tg = function (a, b) { Q(G(this), ["min:!number", "max:!number"], arguments); return Ka(a, b); };
    var ug = function (a, b, c) { var d = a.g.g; if (!d)
        throw Error("Missing program state."); d.Ii.apply(null, Array.prototype.slice.call(arguments, 1)); };
    var vg = function () { ug(this, "read_container_data"); var a = new sb; a.set("containerId", 'G-FTS1MM0DVD'); a.set("version", '1'); a.set("environmentName", ''); a.set("debugMode", Bf); a.set("previewMode", Df); a.set("environmentMode", Cf); a.Bb(); return a; };
    var wg = {};
    wg.sstECEnableData = !0;
    wg.enableAdsEc = !0;
    wg.enableCrossDomain = !1;
    wg.enableCrossDomain = !0;
    wg.sstFFConversionEnabled = !0;
    wg.sstEnableAuid = !0;
    wg.enableGbraidUpdate = !0;
    wg.requireGtagUserDataTos = !0;
    wg.enableGlobalEventDeveloperIds = !1;
    function xg() { return Hc(wg); }
    ;
    var yg = function () { return (new Date).getTime(); };
    var zg = function (a) { if (null === a)
        return "null"; if (a instanceof ua)
        return "array"; if (a instanceof nb)
        return "function"; if (a instanceof yc) {
        a = a.Sa;
        if (void 0 === a.constructor || void 0 === a.constructor.name) {
            var b = String(a);
            return b.substring(8, b.length - 1);
        }
        return String(a.constructor.name);
    } return typeof a; };
    var Ag = function (a) { function b(c) { return function (d) { try {
        return c(d);
    }
    catch (e) {
        (Bf || Df) && a.call(this, e.message);
    } }; } return { parse: b(function (c) { return Hc(JSON.parse(c)); }), stringify: b(function (c) { return JSON.stringify(Ic(c)); }) }; };
    var Bg = function (a) { return Sa(Ic(a, this.g)); };
    var Cg = function (a) { return Number(Ic(a, this.g)); };
    var Dg = function (a) { return null === a ? "null" : void 0 === a ? "undefined" : a.toString(); };
    var Eg = function (a, b, c) { var d = null, e = !1; return e ? d : null; };
    var mg = "floor ceil round max min abs pow sqrt".split(" ");
    var Fg = function () { var a = {}; return { dj: function (b) { return a.hasOwnProperty(b) ? a[b] : void 0; }, Wj: function (b, c) { a[b] = c; }, reset: function () { a = {}; } }; }, Gg = function (a, b) { Q(G(this), ["apiName:!string", "mock:?*"], arguments); };
    var Hg = {};
    Hg.keys = function (a) { return new ua; };
    Hg.values = function (a) { return new ua; };
    Hg.entries = function (a) { return new ua; };
    Hg.freeze = function (a) { return a; };
    Hg.delete = function (a, b) { return !1; };
    var Jg = function () { this.g = {}; this.o = {}; };
    Jg.prototype.get = function (a, b) { var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0; return c; };
    Jg.prototype.add = function (a, b, c) { if (this.g.hasOwnProperty(a))
        throw "Attempting to add a function which already exists: " + a + "."; if (this.o.hasOwnProperty(a))
        throw "Attempting to add an API with an existing private API name: " + a + "."; this.g[a] = c ? void 0 : Ea(b) ? hg(a, b) : ig(a, b); };
    var Lg = function (a, b, c) { if (a.o.hasOwnProperty(b))
        throw "Attempting to add a private function which already exists: " + b + "."; if (a.g.hasOwnProperty(b))
        throw "Attempting to add a private function with an existing API name: " + b + "."; a.o[b] = Ea(c) ? hg(b, c) : ig(b, c); };
    function Kg(a, b) { var c = void 0; return c; }
    ;
    function Mg() { var a = {}; return a; }
    ;
    var R = { Wb: "_ee", Ad: "_syn_or_mod", qk: "_uei", Ae: "_eu", lk: "_pci", Rb: "event_callback", hd: "event_timeout", za: "gtag.config", Oa: "gtag.get", xa: "purchase", Ob: "refund", pb: "begin_checkout", Mb: "add_to_cart", Nb: "remove_from_cart", Lh: "view_cart", Lf: "add_to_wishlist", ya: "view_item", qb: "view_promotion", dd: "select_promotion", ae: "select_item", $a: "view_item_list", Kf: "add_payment_info", Kh: "add_shipping_info", Pa: "value_key", cb: "value_callback", Fa: "allow_ad_personalization_signals", uc: "restricted_data_processing", nc: "allow_google_signals",
        qa: "cookie_expires", Qb: "cookie_update", vc: "session_duration", od: "session_engaged_time", Ra: "user_properties", sa: "transport_url", V: "ads_data_redaction", Aa: "user_data", sc: "first_party_collection", D: "ad_storage", I: "analytics_storage", Yd: "region", Ef: "wait_for_update", oa: "conversion_linker", Ga: "conversion_cookie_prefix", fa: "value", da: "currency", ig: "trip_type", aa: "items", ag: "passengers", de: "allow_custom_scripts", wc: "session_id", fg: "quantity", fb: "transaction_id", ub: "language", fd: "country", ed: "allow_enhanced_conversions",
        je: "aw_merchant_id", he: "aw_feed_country", ie: "aw_feed_language", fe: "discount", X: "developer_id", pd: "delivery_postal_code", qe: "estimated_delivery_date", oe: "shipping", we: "new_customer", ke: "customer_lifetime_value", pe: "enhanced_conversions", mc: "page_view", ja: "linker", O: "domains", vb: "decorate_forms", Xf: "enhanced_conversions_automatic_settings", Uh: "auto_detection_enabled", Yf: "ga_temp_client_id", be: "user_engagement", Fh: "app_remove", Gh: "app_store_refund", Hh: "app_store_subscription_cancel", Ih: "app_store_subscription_convert",
        Jh: "app_store_subscription_renew", Mh: "first_open", Nh: "first_visit", Oh: "in_app_purchase", Ph: "session_start", Qh: "user_data_login", Rh: "user_data_logout", Sh: "allow_display_features", oc: "campaign", Nf: "campaign_content", Of: "campaign_id", Pf: "campaign_medium", Qf: "campaign_name", Rf: "campaign_source", Sf: "campaign_term", rb: "client_id", ia: "cookie_domain", Pb: "cookie_name", ab: "cookie_path", Ha: "cookie_flags", qc: "custom_map", te: "groups", $f: "non_interaction", wb: "page_location", xe: "page_path", Qa: "page_referrer", md: "page_title",
        Vb: "send_page_view", xb: "send_to", ye: "session_engaged", ld: "_logged_in_state", ze: "session_number", hi: "tracking_id", hb: "url_passthrough", Tb: "accept_incoming", Ub: "url_position", dg: "phone_conversion_number", bg: "phone_conversion_callback", cg: "phone_conversion_css_class", eg: "phone_conversion_options", ei: "phone_conversion_ids", di: "phone_conversion_country_code", Mf: "aw_remarketing", ee: "aw_remarketing_only", ce: "gclid", Th: "auid", Zh: "affiliation", Wf: "tax", ne: "list_name", Vf: "checkout_step", Uf: "checkout_option",
        $h: "coupon", ai: "promotions", yb: "user_id", fi: "retoken", ra: "cookie_prefix", Tf: "disable_merchant_reported_purchases", Yh: "dc_natural_search", Xh: "dc_custom_params", Zf: "method", gi: "search_term", Wh: "content_type", ci: "optimize_id", bi: "experiments", eb: "google_signals", kd: "google_tld", rd: "update", se: "firebase_id", Sb: "ga_restrict_domain", gd: "event_settings", me: "dynamic_event_settings", xc: "user_data_settings", gg: "screen_name", tb: "_x_19", sb: "_ecid", jd: "_x_20", ve: "internal_traffic_results", hg: "traffic_type", nd: "referral_exclusion_definition",
        ue: "ignore_referrer", Vh: "content_group" };
    var Ng = {};
    R.ii = Object.freeze((Ng[R.Fa] = 1, Ng[R.ed] = 1, Ng[R.nc] = 1, Ng[R.aa] = 1, Ng[R.ia] = 1, Ng[R.qa] = 1, Ng[R.Ha] = 1, Ng[R.Pb] = 1, Ng[R.ab] = 1, Ng[R.ra] = 1, Ng[R.Qb] = 1, Ng[R.qc] = 1, Ng[R.X] = 1, Ng[R.me] = 1, Ng[R.Rb] = 1, Ng[R.gd] = 1, Ng[R.hd] = 1, Ng[R.sc] = 1, Ng[R.Sb] = 1, Ng[R.eb] = 1, Ng[R.kd] = 1, Ng[R.te] = 1, Ng[R.ve] = 1, Ng[R.ja] = 1, Ng[R.nd] = 1, Ng[R.uc] = 1, Ng[R.Vb] = 1, Ng[R.xb] = 1, Ng[R.vc] = 1, Ng[R.od] = 1, Ng[R.pd] = 1, Ng[R.sa] = 1, Ng[R.rd] = 1, Ng[R.xc] = 1, Ng[R.Ra] = 1, Ng[R.Ae] = 1, Ng));
    R.jg = Object.freeze([R.wb, R.Qa, R.md, R.ub, R.gg, R.yb, R.se, R.Vh]);
    var Og = {};
    R.ki = Object.freeze((Og[R.Fh] = 1, Og[R.Gh] = 1, Og[R.Hh] = 1, Og[R.Ih] = 1, Og[R.Jh] = 1, Og[R.Mh] = 1, Og[R.Nh] = 1, Og[R.Oh] = 1, Og[R.Ph] = 1, Og[R.be] = 1, Og));
    var Pg = {};
    R.kg = Object.freeze((Pg[R.Kf] = 1, Pg[R.Kh] = 1, Pg[R.Mb] = 1, Pg[R.Nb] = 1, Pg[R.Lh] = 1, Pg[R.pb] = 1, Pg[R.ae] = 1, Pg[R.$a] = 1, Pg[R.dd] = 1, Pg[R.qb] = 1, Pg[R.xa] = 1, Pg[R.Ob] = 1, Pg[R.ya] = 1, Pg[R.Lf] = 1, Pg));
    R.Ce = Object.freeze([R.Fa, R.nc, R.Qb]);
    R.wi = Object.freeze([].concat(R.Ce));
    R.De = Object.freeze([R.qa, R.hd, R.vc, R.od]);
    R.xi = Object.freeze([].concat(R.De));
    var Rg = {}, Sg = function (a, b) { Rg[a] = Rg[a] || []; Rg[a][b] = !0; }, Tg = function (a) { for (var b = [], c = Rg[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++)
        b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join(""); };
    var Ug = function (a) { Sg("GTM", a); };
    var J = {}, Vg = null, Wg = Math.random();
    J.J = "G-FTS1MM0DVD";
    J.yd = "ba1";
    J.W = "dataLayer";
    J.Eh = "ChAIgNecjQYQrtyJqN3vwJlCEiUAtvmT9n78rY6fVq/lA90VRKrYp2hAFXiZqb1Bvt4mWVFFTWz2GgKaGw\x3d\x3d";
    var Xg = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 }, Yg = { __paused: !0, __tg: !0 }, Zg;
    for (Zg in Xg)
        Xg.hasOwnProperty(Zg) && (Yg[Zg] = !0);
    J.Zd = "www.googletagmanager.com";
    var $g = J.Zd + "/gtm.js";
    $g = J.Zd + "/gtag/js";
    var ah = $g, bh = Ta(""), ch = null, dh = null, eh = "https://www.googletagmanager.com/a?id=" + J.J + "&cv=1", fh = {}, gh = {}, hh = function () { var a = Vg.sequence || 1; Vg.sequence = a + 1; return a; };
    J.Dh = "";
    var ih = "";
    J.zd = ih;
    var jh = {}, kh = new La, lh = {}, mh = {}, ph = { name: J.W, set: function (a, b) { Gc(ib(a, b), lh); nh(); }, get: function (a) { return oh(a, 2); }, reset: function () { kh = new La; lh = {}; nh(); } }, oh = function (a, b) { return 2 != b ? kh.get(a) : qh(a); }, qh = function (a, b) { var c = a.split("."); b = b || []; for (var d = lh, e = 0; e < c.length; e++) {
        if (null === d)
            return !1;
        if (void 0 === d)
            break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d))
            return;
    } return d; }, rh = function (a, b) { mh.hasOwnProperty(a) || (kh.set(a, b), Gc(ib(a, b), lh), nh()); }, sh = function () {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
            "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b], d = oh(c, 1);
            if (Ia(d) || Fc(d))
                d = Gc(d);
            mh[c] = d;
        }
    }, nh = function (a) { Oa(mh, function (b, c) { kh.set(b, c); Gc(ib(b, void 0), lh); Gc(ib(b, c), lh); a && delete mh[b]; }); }, uh = function (a, b, c) { jh[a] = jh[a] || {}; jh[a][b] = th(b, c); }, th = function (a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? qh(a) : kh.get(a); "array" === Cc(d) || "object" === Cc(d) ? c = Gc(d) : c = d; return c; }, vh = function (a, b) { if (jh[a])
        return jh[a][b]; }, wh = function (a, b) { jh[a] && delete jh[a][b]; };
    var xh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), yh = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] }, zh = { cl: ["ecl"], customPixels: ["customScripts", "html"],
        ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts"], customScripts: ["html"], nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"], nonGoogleScripts: ["customScripts", "html"], nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"] }, Ah = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Bh = function () { var a = !1; a = !0; return a; }, Dh = function (a) {
        var b = oh("gtm.allowlist") || oh("gtm.whitelist");
        b && Ug(9);
        Bh() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && gb(Va(b), yh), d = oh("gtm.blocklist") ||
            oh("gtm.blacklist");
        d || (d = oh("tagTypeBlacklist")) && Ug(3);
        d ? Ug(8) : d = [];
        Ch() && (d = Va(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Va(d).indexOf("google") && Ug(2);
        var e = d && gb(Va(d), zh), f = {};
        return function (g) {
            var h = g && g[pe.zb];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var k = gh[h] || [], n = a(h, k);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var r = 0; r < k.length; r++) {
                                    if (0 > c.indexOf(k[r])) {
                                        Ug(11);
                                        p = !1;
                                        break a;
                                    }
                                }
                            else {
                                p = !1;
                                break a;
                            }
                        p = !0;
                    }
                n = p;
            }
            var t = !1;
            if (d) {
                var u = 0 <= e.indexOf(h);
                if (u)
                    t = u;
                else {
                    var q = Na(e, k || []);
                    q && Ug(10);
                    t = q;
                }
            }
            var v = !n || t;
            v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, Ah));
            return f[h] = v;
        };
    }, Ch = function () { return xh.test(m.location && m.location.hostname); };
    var Eh = { active: !0, isAllowed: function () { return !0; } }, Fh = function (a) { var b = Vg.zones; return b ? b.checkState(J.J, a) : Eh; }, Gh = function (a) { var b = Vg.zones; !b && a && (b = Vg.zones = a()); return b; };
    var Hh = function (a) { this.g = a; this.defaultValue = !1; };
    var Ih = new Hh(1933), Jh = new Hh(1956);
    var Nh = function () { var a = Kh, b = "ef"; if (a.ef && a.hasOwnProperty(b))
        return a.ef; var c = new a; a.ef = c; a.hasOwnProperty(b); return c; };
    var Kh = function () { var a = {}; this.o = function (b, c) { return null != a[b] ? a[b] : c; }; this.g = function (b) { a[b] = !0; }; }, Oh = function (a) { return Nh().o(a.g, a.defaultValue); };
    var Ph = [];
    function Qh() { var a = Yb("google_tag_data", {}); a.ics || (a.ics = { entries: {}, set: Rh, update: Sh, addListener: Th, notifyListeners: Uh, active: !1, usedDefault: !1 }); return a.ics; }
    function Rh(a, b, c, d, e, f) { var g = Qh(); g.active = !0; g.usedDefault = !0; if (void 0 != b) {
        var h = g.entries, k = h[a] || {}, n = k.region, p = c && Ga(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
            var r = !!(f && 0 < f && void 0 === k.update), t = { region: p, initial: "granted" === b, update: k.update, quiet: r };
            if ("" !== d || !1 !== k.initial)
                h[a] = t;
            r && m.setTimeout(function () { h[a] === t && t.quiet && (t.quiet = !1, Vh(a), Uh(), Sg("TAGGING", 2)); }, f);
        }
    } }
    function Sh(a, b) { var c = Qh(); c.active = !0; if (void 0 != b) {
        var d = Wh(a), e = c.entries, f = e[a] = e[a] || {};
        f.update = "granted" === b;
        var g = Wh(a);
        f.quiet ? (f.quiet = !1, Vh(a)) : g !== d && Vh(a);
    } }
    function Th(a, b) { Ph.push({ Ve: a, $i: b }); }
    function Vh(a) { for (var b = 0; b < Ph.length; ++b) {
        var c = Ph[b];
        Ia(c.Ve) && -1 !== c.Ve.indexOf(a) && (c.dh = !0);
    } }
    function Uh(a) { for (var b = 0; b < Ph.length; ++b) {
        var c = Ph[b];
        if (c.dh) {
            c.dh = !1;
            try {
                c.$i({ consentEventId: a });
            }
            catch (d) { }
        }
    } }
    var Wh = function (a) { var b = Qh().entries[a] || {}; return void 0 !== b.update ? b.update : b.initial; }, Xh = function (a) { return (Qh().entries[a] || {}).initial; }, Yh = function (a) { return !(Qh().entries[a] || {}).quiet; }, Zh = function () { return Oh(Ih) ? Qh().active : !1; }, $h = function () { return Qh().usedDefault; }, ai = function (a, b) { Qh().addListener(a, b); }, bi = function (a) { Qh().notifyListeners(a); }, ci = function (a, b) { function c() { for (var e = 0; e < b.length; e++)
        if (!Yh(b[e]))
            return !0; return !1; } if (c()) {
        var d = !1;
        ai(b, function (e) { d || c() || (d = !0, a(e)); });
    }
    else
        a({}); }, di = function (a, b) { function c() { for (var f = [], g = 0; g < d.length; g++) {
        var h = d[g];
        !1 === Wh(h) || e[h] || (f.push(h), e[h] = !0);
    } return f; } var d = Ga(b) ? [b] : b, e = {}; c().length !== d.length && ai(d, function (f) { var g = c(); 0 < g.length && (f.Ve = g, a(f)); }); };
    function ei() { }
    function fi() { }
    ;
    function gi(a) { for (var b = [], c = 0; c < hi.length; c++) {
        var d = a(hi[c]);
        b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    } return b.join(""); }
    var hi = [R.D, R.I], ii = function (a) { var b = a[R.Yd]; b && Ug(40); var c = a[R.Ef]; c && Ug(41); for (var d = Ia(b) ? b : [b], e = { hc: 0 }; e.hc < d.length; e = { hc: e.hc }, ++e.hc)
        Oa(a, function (f) { return function (g, h) { if (g !== R.Yd && g !== R.Ef) {
            var k = d[f.hc];
            Qh().set(g, h, k, "MG", "MG-T", c);
        } }; }(e)); }, ji = 0, ki = function (a, b) { Oa(a, function (e, f) { Qh().update(e, f); }); bi(b); var c = ab(), d = c - ji; ji && 0 <= d && 1E3 > d && Ug(66); ji = c; }, li = function (a) { var b = Wh(a); return void 0 != b ? b : !0; }, mi = function () { return "G1" + gi(Wh); }, ni = function () {
        return "G1" +
            gi(Xh);
    }, oi = function (a, b) { ai(a, b); }, pi = function (a, b) { di(a, b); }, qi = function (a, b) { ci(a, b); };
    var si = function (a) { return ri ? H.querySelectorAll(a) : null; }, ti = function (a, b) {
        if (!ri)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b);
            }
            catch (e) {
                return null;
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, d = a;
        if (!H.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d;
            }
            catch (e) {
                break;
            }
            d = d.parentElement || d.parentNode;
        } while (null !== d && 1 === d.nodeType);
        return null;
    }, ui = !1;
    if (H.querySelectorAll)
        try {
            var vi = H.querySelectorAll(":root");
            vi && 1 == vi.length && vi[0] == H.documentElement && (ui = !0);
        }
        catch (a) { }
    var ri = ui;
    var wi = function (a) { return void 0 === a || null === a ? "" : Ga(a) ? Wa(String(a)) : "e0"; }, yi = function (a) { return a.replace(xi, ""); }, Ai = function (a) { return zi(a.replace(/\s/g, "")); }, zi = function (a) { return Wa(a.replace(Bi, "").toLowerCase()); }, Di = function (a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return Ci.test(a) ? a : "e0"; }, Fi = function (a) { var b = a.toLowerCase().split("@"); if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Ei.test(c))
            return c;
    } return "e0"; }, Ii = function (a, b) { window.Promise || b([]); Promise.all(a.map(function (c) { return c.value && -1 !== Gi.indexOf(c.name) ? Hi(c.value).then(function (d) { c.value = d; }) : Promise.resolve(); })).then(function () { b(a); }).catch(function () { b([]); }); }, Hi = function (a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (m.crypto && m.crypto.subtle)
            try {
                var b = Ji(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function (c) {
                    var d = Array.from(new Uint8Array(c)).map(function (e) { return String.fromCharCode(e); }).join("");
                    return m.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                }).catch(function () { return "e2"; });
            }
            catch (c) {
                return Promise.resolve("e2");
            }
        else
            return Promise.resolve("e1");
    }, Ji = function (a) { var b; if (m.TextEncoder)
        b = (new m.TextEncoder("utf-8")).encode(a);
    else {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63));
        }
        b = new Uint8Array(c);
    } return b; }, Bi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, Ei = /^\S+@\S+\.\S+$/, Ci = /^\+\d{11,15}$/, xi = /[.~]/g, Ki = {}, Li = (Ki.email = "em", Ki.phone_number = "pn", Ki.first_name = "fn", Ki.last_name = "ln", Ki.street = "sa", Ki.city = "ct", Ki.region = "rg", Ki.country = "co", Ki.postal_code = "pc", Ki.error_code = "ec", Ki), Mi = function (a, b) {
        function c(n, p, r) { var t = n[p]; Ia(t) || (t = [t]); for (var u = 0; u < t.length; ++u) {
            var q = wi(t[u]);
            "" !== q && f.push({ name: p, value: r(q), index: void 0 });
        } }
        function d(n, p, r, t) { var u = wi(n[p]); "" !== u && f.push({ name: p, value: r(u), index: t }); }
        function e(n) { return function (p) { Ug(64); return n(p); }; }
        var f = [];
        if ("https:" === m.location.protocol) {
            c(a, "email", Fi);
            c(a, "phone_number", Di);
            c(a, "first_name", e(Ai));
            c(a, "last_name", e(Ai));
            var g = a.home_address || {};
            c(g, "street", e(zi));
            c(g, "city", e(zi));
            c(g, "postal_code", e(yi));
            c(g, "region", e(zi));
            c(g, "country", e(yi));
            var h = a.address || {};
            Ia(h) || (h = [h]);
            for (var k = 0; k < h.length; k++)
                d(h[k], "first_name", Ai, k), d(h[k], "last_name", Ai, k), d(h[k], "street", zi, k), d(h[k], "city", zi, k), d(h[k], "postal_code", yi, k), d(h[k], "region", zi, k), d(h[k], "country", yi, k);
            Ii(f, b);
        }
        else
            f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
    }, Ni = function (a, b) { Mi(a, function (c) { for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
        var g = c[f].name, h = c[f].value, k = c[f].index, n = Li[g];
        n && h && (-1 === Gi.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++);
    } 1 === c.length && "error_code" === c[0].name && (e = 0); b(encodeURIComponent(d.join("~")), e); }); }, Oi = function (a) {
        if (m.Promise)
            try {
                return new Promise(function (b) {
                    Ni(a, function (c, d) { b({ Pc: c, uk: d }); });
                });
            }
            catch (b) { }
    }, Gi = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Pi = function () { this.eventModel = {}; this.targetConfig = {}; this.containerConfig = {}; this.globalConfig = {}; this.remoteConfig = {}; this.onSuccess = function () { }; this.onFailure = function () { }; this.setContainerTypeLoaded = function () { }; this.getContainerTypeLoaded = function () { }; this.eventId = void 0; this.isGtmEvent = !1; }, Qi = function (a) { var b = new Pi; b.eventModel = a; return b; }, Ri = function (a, b) { a.targetConfig = b; return a; }, Si = function (a, b) { a.containerConfig = b; return a; }, Ti = function (a, b) { a.globalConfig = b; return a; }, Ui = function (a, b) { a.remoteConfig = b; return a; }, Vi = function (a, b) { a.onSuccess = b; return a; }, Wi = function (a, b) { a.setContainerTypeLoaded = b; return a; }, Xi = function (a, b) { a.getContainerTypeLoaded = b; return a; }, Yi = function (a, b) { a.onFailure = b; return a; };
    Pi.prototype.getWithConfig = function (a) { if (void 0 !== this.eventModel[a])
        return this.eventModel[a]; if (void 0 !== this.targetConfig[a])
        return this.targetConfig[a]; if (void 0 !== this.containerConfig[a])
        return this.containerConfig[a]; if (void 0 !== this.globalConfig[a])
        return this.globalConfig[a]; if (void 0 !== this.remoteConfig[a])
        return this.remoteConfig[a]; };
    var Zi = function (a) { function b(d) { for (var e = Object.keys(d), f = 0; f < e.length; ++f)
        c[e[f]] = 1; } var c = {}; b(a.eventModel); b(a.targetConfig); b(a.containerConfig); b(a.globalConfig); return Object.keys(c); }, $i = function (a, b, c) { function d(g) { Fc(g) && Oa(g, function (h, k) { f = !0; e[h] = k; }); } var e = {}, f = !1; c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b])); c && 2 !== c || d(a.eventModel[b]); return f ? e : void 0; }, aj = function (a) {
        var b = [R.oc, R.Nf, R.Of, R.Pf, R.Qf, R.Rf, R.Sf], c = {}, d = !1, e = function (f) {
            for (var g = 0; g < b.length; g++)
                void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
            return d;
        };
        if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig))
            return c;
        e(a.remoteConfig);
        return c;
    }, bj = function (a) { var b = [], c; for (c in a.eventModel)
        c !== R.Wb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c); return b; };
    var cj, dj = !1;
    function ej() { dj = !0; cj = cj || {}; }
    var fj = function (a) { dj || ej(); return cj[a]; };
    var gj = function (a) {
        if (H.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
            return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity, g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f));
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d, null));
        }
        return !1;
    };
    var hj = function () { var a = H.body, b = H.documentElement || a && a.parentElement, c, d; if (H.compatMode && "BackCompat" !== H.compatMode)
        c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
    else {
        var e = function (f, g) { return f && g ? Math.min(f, g) : Math.max(f, g); };
        Ug(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
    } return { width: d, height: c }; }, ij = function (a) {
        var b = hj(), c = b.height, d = b.width, e = a.getBoundingClientRect(), f = e.bottom - e.top, g = e.right - e.left;
        return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
            d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0;
    };
    var pj = /:[0-9]+$/, qj = function (a, b, c, d) { for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
            var k = h.slice(1).join("=");
            if (!c)
                return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
            e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
        }
    } return c ? e : void 0; }, tj = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = rj(a.protocol) || rj(m.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port :
            m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(pj, "").toLowerCase());
        return sj(a, b, c, d, e);
    }, sj = function (a, b, c, d, e) {
        var f, g = rj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = uj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(pj, "").toLowerCase();
                if (c) {
                    var h = /^www\d*\./.exec(f);
                    h && h[0] && (f = f.substr(h[0].length));
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" ==
                    g ? 80 : "https" == g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Sg("TAGGING", 1);
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var k = f.split("/");
                0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                f = k.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = qj(f, e, !1, void 0));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default: f = a && a.href;
        }
        return f;
    }, rj = function (a) {
        return a ?
            a.replace(":", "").toLowerCase() : "";
    }, uj = function (a) { var b = ""; if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
    } return b; }, vj = function (a) { var b = H.createElement("a"); a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || Sg("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(pj, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }; }, wj = function (a) {
        function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0"; }
        function c(n) {
            return n.split("&").map(b).filter(function (p) {
                return void 0 !=
                    p;
            }).join("&");
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), e = vj(a), f = a.split(/[?#]/)[0], g = e.search, h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var k = "" + f + g + h;
        "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
        return k;
    };
    var xj = {};
    var Aj = function (a) { if (0 == a.length)
        return null; var b; b = yj(a, function (c) { return !zj.test(c.La); }); b = yj(b, function (c) { return "INPUT" === c.element.tagName.toUpperCase(); }); b = yj(b, function (c) { return !gj(c.element); }); return b[0]; }, yj = function (a, b) { if (1 >= a.length)
        return a; var c = a.filter(b); return 0 == c.length ? a : c; }, Bj = function (a) {
        var b;
        if (a === H.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e =
                                        g + 1;
                                    break a;
                                }
                            e = -1;
                        }
                        else
                            e = 1;
                    }
                    d = Bj(a.parentElement) + ">:nth-child(" + e + ")";
                }
                else
                    d = "";
                c = d;
            }
            b = c;
        }
        return b;
    }, Cj = !0, Dj = !1;
    xj.Ah = "true";
    var Ej = function (a) {
        if ("false" === xj.Ah || !Cj)
            return !1;
        if (Dj)
            return !0;
        var b = fj("AW-" +
            a);
        return !!b && !!b.preAutoPii;
    }, Fj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), Gj = new RegExp(/@(gmail|googlemail)\./i), zj = new RegExp(/support|noreply/i), Hj = "SCRIPT STYLE IMG SVG PATH BR".split(" "), Ij = ["BR"], Jj = {}, Kj = function (a) {
        a = a || { Pd: !0, Qd: !0 };
        a.lb = a.lb || { email: !0, phone: !0, Bg: !0 };
        var b, c = a, d = !!c.Pd + "." + !!c.Qd;
        c && c.Fc && c.Fc.length && (d += "." + c.Fc.join("."));
        c && c.lb && (d += "." + c.lb.email + "." + c.lb.phone + "." + c.lb.Bg);
        b = d;
        var e = Jj[b];
        if (e && 200 > ab() - e.timestamp)
            return e.result;
        var f;
        var g = [], h = H.body;
        if (h) {
            for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                var p = k[n];
                if (!(0 <= Hj.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                    for (var r = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                        if (!(0 <= Ij.indexOf(p.children[t].tagName.toUpperCase()))) {
                            r = !0;
                            break;
                        }
                    r || g.push(p);
                }
            }
            f = { elements: g, status: 1E4 < k.length ? "2" : "1" };
        }
        else
            f = { elements: g, status: "4" };
        var u = f, q = u.status, v;
        if (a.lb && a.lb.email) {
            for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                var z = w[x], A = z.textContent;
                "INPUT" === z.tagName.toUpperCase() &&
                    z.value && (A = z.value);
                if (A) {
                    var C = A.match(Fj);
                    if (C) {
                        var E = C[0], D;
                        if (m.location) {
                            var F = sj(m.location, "host", !0);
                            D = 0 <= E.toLowerCase().indexOf(F);
                        }
                        else
                            D = !1;
                        D || y.push({ element: z, La: E });
                    }
                }
            }
            var N;
            var M = a && a.Fc;
            if (M && 0 !== M.length) {
                for (var P = [], O = 0; O < y.length; O++) {
                    for (var K = !0, L = 0; L < M.length; L++) {
                        var T = M[L];
                        if (T && ti(y[O].element, T)) {
                            K = !1;
                            break;
                        }
                    }
                    K && P.push(y[O]);
                }
                N = P;
            }
            else
                N = y;
            v = Aj(N);
            10 < y.length && (q = "3");
        }
        var Z = [];
        if (v) {
            var ia = v.element, Da = { La: v.La, tagName: ia.tagName, type: 1 };
            a.Pd && (Da.querySelector = Bj(ia));
            a.Qd &&
                (Da.isVisible = !gj(ia));
            Z.push(Da);
        }
        var Ba = { elements: Z, status: q };
        Jj[b] = { timestamp: ab(), result: Ba };
        return Ba;
    }, Lj = function (a) { return a.tagName + ":" + a.isVisible + ":" + a.La.length + ":" + Gj.test(a.La); };
    var Mj = function (a, b, c) { if (c) {
        var d = c.selector_type, e = String(c.value), f;
        if ("js_variable" === d) {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var k = g[h].trim();
                if (k) {
                    if (0 === k.indexOf("dataLayer."))
                        f = oh(k.substring(10));
                    else {
                        var n = k.split(".");
                        f = m[n.shift()];
                        for (var p = 0; p < n.length; p++)
                            f = f && f[n[p]];
                    }
                    if (void 0 !== f)
                        break;
                }
            }
        }
        else if ("css_selector" === d && ri) {
            var r = si(e);
            r && 0 < r.length && (f = kc(r[0]) || Wa(r[0].value));
        }
        f && (a[b] = f);
    } }, Nj = function (a) {
        if (a) {
            var b = {};
            Mj(b, "email", a.email);
            Mj(b, "phone_number", a.phone);
            b.address = [];
            for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                var e = {};
                Mj(e, "first_name", c[d].first_name);
                Mj(e, "last_name", c[d].last_name);
                Mj(e, "street", c[d].street);
                Mj(e, "city", c[d].city);
                Mj(e, "region", c[d].region);
                Mj(e, "country", c[d].country);
                Mj(e, "postal_code", c[d].postal_code);
                b.address.push(e);
            }
            return b;
        }
    }, Oj = function (a) {
        if (a)
            switch (a.mode) {
                case "selectors": return Nj(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Kj({ Pd: !1, Qd: !1,
                            Fc: c.exclude_element_selectors, lb: { email: !!c.email, phone: !!c.phone, Bg: !!c.address } }).elements, e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.La;
                                    break;
                                }
                            }
                        b = e;
                    }
                    else
                        b = void 0;
                    return b;
            }
    }, Pj = function (a) { switch (a.enhanced_conversions_mode) {
        case "manual":
            var b = a.enhanced_conversions_manual_var;
            return void 0 !== b ? b : m.enhanced_conversion_data;
        case "automatic": return Nj(a[R.Xf]);
    } };
    var Qj = {}, Rj = function (a, b) { if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a]; void 0 === Qj[a] && (Qj[a] = Math.floor(Math.random() * b)); return Qj[a]; };
    var Sj = function (a) { var b = 1, c, d, e; if (a)
        for (b = 0, d = a.length - 1; 0 <= d; d--)
            e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b; return b; };
    var Tj = function (a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
        var g = e[f].split("="), h = g[0].replace(/^\s*|\s*$/g, "");
        if (h && h == a) {
            var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
            k && c && (k = decodeURIComponent(k));
            d.push(k);
        }
    } return d; };
    function Uj(a) { return "null" !== a.origin; }
    ;
    var Xj = function (a, b, c, d) { return Vj(d) ? Tj(a, String(b || Wj()), c) : []; }, ak = function (a, b, c, d, e) { if (Vj(e)) {
        var f = Yj(a, d, e);
        if (1 === f.length)
            return f[0].id;
        if (0 !== f.length) {
            f = Zj(f, function (g) { return g.Hd; }, b);
            if (1 === f.length)
                return f[0].id;
            f = Zj(f, function (g) { return g.Qc; }, c);
            return f[0] ? f[0].id : void 0;
        }
    } };
    function bk(a, b, c, d) { var e = Wj(), f = window; Uj(f) && (f.document.cookie = a); var g = Wj(); return e != g || void 0 != c && 0 <= Xj(b, g, !1, d).indexOf(c); }
    var fk = function (a, b, c, d) {
        function e(w, y, x) { if (null == x)
            return delete h[y], w; h[y] = x; return w + "; " + y + "=" + x; }
        function f(w, y) { if (null == y)
            return delete h[y], w; h[y] = !0; return w + "; " + y; }
        if (!Vj(c.Ka))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = ck(b), g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        g = e(g, "expires", k);
        g = e(g, "max-age", c.yj);
        g = e(g, "samesite", c.Qj);
        c.Sj && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = dk(), r = void 0, t = !1, u = 0; u < p.length; ++u) {
                var q = "none" !== p[u] ? p[u] : void 0, v = e(g, "domain", q);
                v = f(v, c.flags);
                try {
                    d && d(a, h);
                }
                catch (w) {
                    r = w;
                    continue;
                }
                t = !0;
                if (!ek(q, c.path) && bk(v, a, b, c.Ka))
                    return 0;
            }
            if (r && !t)
                throw r;
            return 1;
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return ek(n, c.path) ? 1 : bk(g, a, b, c.Ka) ? 0 : 1;
    }, gk = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return fk(a, b, c);
    };
    function Zj(a, b, c) { for (var d = [], e = [], f, g = 0; g < a.length; g++) {
        var h = a[g], k = b(h);
        k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h);
    } return 0 < d.length ? d : e; }
    function Yj(a, b, c) { for (var d = [], e = Xj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
        var g = e[f].split("."), h = g.shift();
        if (!b || -1 !== b.indexOf(h)) {
            var k = g.shift();
            k && (k = k.split("-"), d.push({ id: g.join("."), Hd: 1 * k[0] || 1, Qc: 1 * k[1] || 1 }));
        }
    } return d; }
    var ck = function (a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a; }, hk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, ik = /(^|\.)doubleclick\.net$/i, ek = function (a, b) { return ik.test(window.document.location.hostname) || "/" === b && hk.test(a); }, Wj = function () { return Uj(window) ? window.document.cookie : ""; }, dk = function () {
        var a = [], b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"];
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        ik.test(e) || hk.test(e) || a.push("none");
        return a;
    }, Vj = function (a) { if (!Oh(Ih) || !a || !Zh())
        return !0; if (!Yh(a))
        return !1; var b = Wh(a); return null == b ? !0 : !!b; };
    var jk = function (a) { var b = Math.round(2147483647 * Math.random()), c = b; a && (c = b ^ Sj(a) & 2147483647); return [c, Math.round(ab() / 1E3)].join("."); }, mk = function (a, b, c, d, e) { var f = kk(b); return ak(a, f, lk(c), d, e); }, nk = function (a, b, c, d) { var e = "" + kk(c), f = lk(d); 1 < f && (e += "-" + f); return [b, e, a].join("."); }, kk = function (a) { if (!a)
        return 1; a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length; }, lk = function (a) { if (!a || "/" === a)
        return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1; };
    function ok(a, b, c) { var d, e = Number(null != a.mb ? a.mb : void 0); 0 !== e && (d = new Date((b || ab()) + 1E3 * (e || 7776E3))); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d }; }
    ;
    var pk = ["1"], qk = {}, tk = function (a, b) { b = void 0 === b ? !0 : b; var c = rk(a.prefix); if (!qk[c] && !sk(c, a.path, a.domain) && b) {
        var d = rk(a.prefix), e = jk(), f = nk(e, "1", a.domain, a.path), g = ok(a, void 0);
        g.Ka = "ad_storage";
        if (0 === gk(d, f, g)) {
            var h = Yb("google_tag_data", {});
            h._gcl_au ? Sg("GTM", 57) : h._gcl_au = e;
        }
        sk(c, a.path, a.domain);
    } };
    function sk(a, b, c) { var d = mk(a, b, c, pk, "ad_storage"); if (!d)
        return !1; var e = d.split("."); 5 === e.length ? (qk[a] = e.slice(0, 2).join("."), e.slice(2, 4).join(".")) : 3 === e.length ? e.slice(0, 2).join(".") : qk[a] = d; return !0; }
    function rk(a) { return (a || "_gcl") + "_au"; }
    ;
    var uk = function (a) { for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
        var f = c[e].match(d);
        f && b.push({ Bf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
    } b.sort(function (g, h) { return h.timestamp - g.timestamp; }); return b; };
    function vk(a, b) { var c = uk(a), d = {}; if (!c || !c.length)
        return d; for (var e = 0; e < c.length; e++) {
        var f = c[e].value.split(".");
        if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
            d[c[e].Bf] || (d[c[e].Bf] = []);
            var g = { version: f[0], timestamp: 1E3 * Number(f[1]), va: f[2] };
            b && 3 < f.length && (g.labels = f.slice(3));
            d[c[e].Bf].push(g);
        }
    } return d; }
    ;
    function wk() { for (var a = xk, b = {}, c = 0; c < a.length; ++c)
        b[a[c]] = c; return b; }
    function yk() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; a += a.toLowerCase() + "0123456789-_"; return a + "."; }
    var xk, zk;
    function Ak(a) { xk = xk || yk(); zk = zk || wk(); for (var b = [], c = 0; c < a.length; c += 3) {
        var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), g = d ? a.charCodeAt(c + 1) : 0, h = e ? a.charCodeAt(c + 2) : 0, k = f >> 2, n = (f & 3) << 4 | g >> 4, p = (g & 15) << 2 | h >> 6, r = h & 63;
        e || (r = 64, d || (p = 64));
        b.push(xk[k], xk[n], xk[p], xk[r]);
    } return b.join(""); }
    function Bk(a) { function b(k) { for (; d < a.length;) {
        var n = a.charAt(d++), p = zk[n];
        if (null != p)
            return p;
        if (!/^[\s\xa0]*$/.test(n))
            throw Error("Unknown base64 encoding at char: " + n);
    } return k; } xk = xk || yk(); zk = zk || wk(); for (var c = "", d = 0;;) {
        var e = b(-1), f = b(0), g = b(64), h = b(64);
        if (64 === h && -1 === e)
            return c;
        c += String.fromCharCode(e << 2 | f >> 4);
        64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)));
    } }
    ;
    var Ck;
    var Dk = { ek: 0, pk: 1, ik: 2, hk: 3 }, Ek = void 0, Ik = function () { var a = Fk, b = Gk, c = Hk(), d = function (g) { a(g.target || g.srcElement || {}); }, e = function (g) { b(g.target || g.srcElement || {}); }; if (!c.init) {
        fc(H, "mousedown", d);
        fc(H, "keyup", d);
        fc(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () { b(this); f.call(this); };
        c.init = !0;
    } }, Jk = function (a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e }; Hk().decorators.push(f); }, Kk = function (a, b, c) {
        for (var d = Hk().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var k = g.domains, n = a, p = !!g.sameHost;
                    if (k && (p || n !== H.location.hostname))
                        for (var r = 0; r < k.length; r++)
                            if (k[r] instanceof RegExp) {
                                if (k[r].test(n)) {
                                    h = !0;
                                    break a;
                                }
                            }
                            else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) {
                                h = !0;
                                break a;
                            }
                    h = !1;
                }
            if (h) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && db(e, g.callback());
            }
        }
        return e;
    };
    function Hk() { var a = Yb("google_tag_data", {}), b = a.gl; b && b.decorators || (b = { decorators: [] }, a.gl = b); return b; }
    ;
    var Lk = /(.*?)\*(.*?)\*(.*)/, Mk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/, Nk = /^(?:www\.|m\.|amp\.)+/, Ok = /\*?xp_[0-3]\*?/, Pk = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function Qk(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)"); }
    var Tk = function (a, b) { var c = [], d; for (d in a)
        if (a.hasOwnProperty(d)) {
            var e = a[d];
            void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(Ak(String(e))));
        } var f = c.join("*"); if (void 0 !== b) {
        var g = "xp_" + b, h = Rk[b](f);
        f = [f, g, Ak(String(h))].join("*");
    } return ["1", Sk(f), f].join("*"); };
    function Sk(a, b) { var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Wb.userLanguage || Wb.language, Math.floor(ab() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d; if (!(d = Ck)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
            for (var g = f, h = 0; 8 > h; h++)
                g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
            e[f] = g;
        }
        d = e;
    } Ck = d; for (var k = 4294967295, n = 0; n < c.length; n++)
        k = k >>> 8 ^ Ck[(k ^ c.charCodeAt(n)) & 255]; return ((k ^ -1) >>> 0).toString(36); }
    var Uk = {}, Rk = (Uk[0] = function () { return "BASELINE"; }, Uk[1] = Vk, Uk[2] = Wk, Uk[3] = Xk, Uk);
    function Vk() { return "CHECKSUM_EXP_DISABLED"; }
    function Wk() { return "CHECKSUM_EXP_DISABLED"; }
    function Yk() { Wb.userAgentData && Wb.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platformVersion", "uaFullVersion"]).then(function () { }); }
    function Xk() { return "CHECKSUM_EXP_DISABLED"; }
    function Zk() { return function (a) { var b = vj(m.location.href), c = b.search.replace("?", ""), d = qj(c, "_gl", !1, !0) || ""; a.query = $k(d) || {}; var e = tj(b, "fragment").match(Qk("_gl")); a.fragment = $k(e && e[3] || "") || {}; }; }
    var al = function (a) { var b = Zk(), c = Hk(); c.data || (c.data = { query: {}, fragment: {} }, b(c.data)); var d = {}, e = c.data; e && (db(d, e.query), a && db(d, e.fragment)); return d; }, $k = function (a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = Lk.exec(d);
                        if (f) {
                            c = f;
                            break a;
                        }
                        d = decodeURIComponent(d);
                    }
                    c = void 0;
                }
                var g = c;
                if (g && "1" === g[1]) {
                    var h = g[2], k = g[3], n = null !== k.match(Ok), p;
                    a: {
                        for (var r = 0; r < b; ++r)
                            if (h === Sk(k, r)) {
                                p = !0;
                                break a;
                            }
                        p = !1;
                    }
                    var t = p;
                    if (t || n) {
                        for (var u = {}, q = k ? k.split("*") : [], v = 0; v + 1 < q.length; v += 2) {
                            var w = q[v], y = null !== w.match(Ok);
                            if (t || y) {
                                var x = Bk(q[v + 1]);
                                u[w] = x;
                            }
                            if (y) {
                                var z = w.split("_")[1];
                                if (!(Number(z) < Object.keys(Dk).length))
                                    return;
                                var A = b, C = u[w], E = k.slice(0, k.indexOf("*xp")), D = t;
                                if (0 !== Number(z))
                                    a: {
                                        var F = C, N = E, M = A;
                                        if ("undefined" !== F && "UA_DATA_NOT_PRESENT" !== F && "UACH_ACCESSED_TOO_EARLY" !== F)
                                            for (var P = 0; P < M; ++P)
                                                if (F === Rk[z](N, P)) {
                                                    D = !0;
                                                    break a;
                                                }
                                        D = !1;
                                    }
                                u._z = "uaxp." + (t ? D === t ? "" + z + 0 : "" + z + 3 : D === t ? "" + z + 1 : "" + z + 2);
                            }
                        }
                        return u;
                    }
                }
            }
        }
        catch (O) { }
    };
    function bl(a, b, c, d) { function e(p) { var r = p, t = Qk(a).exec(r), u = r; if (t) {
        var q = t[2], v = t[4];
        u = t[1];
        v && (u = u + q + v);
    } p = u; var w = p.charAt(p.length - 1); p && "&" !== w && (p += "&"); return p + n; } d = void 0 === d ? !1 : d; var f = Pk.exec(c); if (!f)
        return ""; var g = f[1], h = f[2] || "", k = f[3] || "", n = a + "=" + b; d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1)); return "" + g + h + k; }
    function cl(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(), d = Kk(b, 1, c), e = Kk(b, 2, c), f = Kk(b, 3, c), g = Ek; if (eb(d)) {
        var h = Tk(d, g);
        c ? dl("_gl", h, a) : el("_gl", h, a, !1);
    } if (!c && eb(e)) {
        var k = Tk(e);
        el("_gl", k, a, !0);
    } for (var n in f)
        if (f.hasOwnProperty(n))
            a: {
                var p = n, r = f[n], t = a;
                if (t.tagName) {
                    if ("a" === t.tagName.toLowerCase()) {
                        el(p, r, t, void 0);
                        break a;
                    }
                    if ("form" === t.tagName.toLowerCase()) {
                        dl(p, r, t);
                        break a;
                    }
                }
                "string" == typeof t && bl(p, r, t, void 0);
            } }
    function el(a, b, c, d) { if (c.href) {
        var e = bl(a, b, c.href, void 0 === d ? !1 : d);
        Fb.test(e) && (c.href = e);
    } }
    function dl(a, b, c) { if (c && c.action) {
        var d = (c.method || "").toLowerCase();
        if ("get" === d) {
            for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                var h = e[g];
                if (h.name === a) {
                    h.setAttribute("value", b);
                    f = !0;
                    break;
                }
            }
            if (!f) {
                var k = H.createElement("input");
                k.setAttribute("type", "hidden");
                k.setAttribute("name", a);
                k.setAttribute("value", b);
                c.appendChild(k);
            }
        }
        else if ("post" === d) {
            var n = bl(a, b, c.action);
            Fb.test(n) && (c.action = n);
        }
    } }
    function Fk(a) { try {
        var b;
        a: {
            for (var c = a, d = 100; c && 0 < d;) {
                if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                    b = c;
                    break a;
                }
                c = c.parentNode;
                d--;
            }
            b = null;
        }
        var e = b;
        if (e) {
            var f = e.protocol;
            "http:" !== f && "https:" !== f || cl(e, e.hostname);
        }
    }
    catch (g) { } }
    function Gk(a) { try {
        if (a.action) {
            var b = tj(vj(a.action), "host");
            cl(a, b);
        }
    }
    catch (c) { } }
    var fl = function (a, b, c, d, e) { Ik(); void 0 !== e && (Ek = e); 3 === e && Yk(); Jk(a, b, "fragment" === c ? 2 : 1, !!d, !1); }, gl = function (a, b) { Ik(); Jk(a, [sj(m.location, "host", !0)], b, !0, !0); }, hl = function () {
        var a = H.location.hostname, b = Mk.exec(H.referrer);
        if (!b)
            return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
        }
        else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-");
        }
        var h = a.replace(Nk, ""), k = e.replace(Nk, ""), n;
        if (!(n = h === k)) {
            var p = "." + k;
            n = h.substring(h.length - p.length, h.length) === p;
        }
        return n;
    }, il = function (a, b) { return !1 === a ? !1 : a || b || hl(); };
    var jl = {};
    var kl = /^\w+$/, ll = /^[\w-]+$/, ml = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" }, nl = function () { if (!Oh(Ih) || !Zh())
        return !0; var a = Wh("ad_storage"); return null == a ? !0 : !!a; }, ol = function (a, b) { Yh("ad_storage") ? nl() ? a() : di(a, "ad_storage") : b ? Sg("TAGGING", 3) : ci(function () { ol(a, !0); }, ["ad_storage"]); }, ql = function (a) { return pl(a).map(function (b) { return b.va; }); }, pl = function (a) {
        var b = [];
        if (!Uj(m) || !H.cookie)
            return b;
        var c = Xj(a, H.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d =
            { $c: d.$c }, e++) {
            var f = rl(c[e]);
            if (null != f) {
                var g = f, h = g.version;
                d.$c = g.va;
                var k = g.timestamp, n = g.labels, p = Ja(b, function (r) { return function (t) { return t.va === r.$c; }; }(d));
                p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = sl(p.labels, n || [])) : b.push({ version: h, va: d.$c, timestamp: k, labels: n });
            }
        }
        b.sort(function (r, t) { return t.timestamp - r.timestamp; });
        return tl(b);
    };
    function sl(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++)
        c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++)
        c[b[f]] || d.push(b[f]); return d; }
    function ul(a) { return a && "string" == typeof a && a.match(kl) ? a : "_gcl"; }
    var wl = function () { var a = vj(m.location.href), b = tj(a, "query", !1, void 0, "gclid"), c = tj(a, "query", !1, void 0, "gclsrc"), d = tj(a, "query", !1, void 0, "wbraid"), e = tj(a, "query", !1, void 0, "dclid"); if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || qj(f, "gclid", !1, void 0);
        c = c || qj(f, "gclsrc", !1, void 0);
        d = d || qj(f, "wbraid", !1, void 0);
    } return vl(b, c, e, d); }, vl = function (a, b, c, d) {
        var e = {}, f = function (g, h) { e[h] || (e[h] = []); e[h].push(g); };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && ll.test(d) && (e.gbraid = d, f(d, "gb"));
        if (void 0 !==
            a && a.match(ll))
            switch (b) {
                case void 0:
                    f(a, "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha": f(a, "ha");
            }
        c && f(c, "dc");
        return e;
    }, yl = function (a) { var b = wl(); ol(function () { xl(b, !1, a); }); };
    function xl(a, b, c, d, e) {
        function f(w, y) { var x = zl(w, g); x && (gk(x, y, h), k = !0); }
        c = c || {};
        e = e || [];
        var g = ul(c.prefix);
        d = d || ab();
        var h = ok(c, d, !0);
        h.Ka = "ad_storage";
        var k = !1, n = Math.round(d / 1E3), p = function (w) { var y = ["GCL", n, w]; 0 < e.length && y.push(e.join(".")); return y.join("."); };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == jl.enable_gbraid_cookie_write ? 0 : jl.enable_gbraid_cookie_write) && !k && a.gb) {
            var r = a.gb[0], t = zl("gb", g), u = !1;
            if (!b)
                for (var q = pl(t), v = 0; v < q.length; v++)
                    q[v].va === r && q[v].labels && 0 < q[v].labels.length && (u = !0);
            u || f("gb", p(r));
        }
    }
    var Bl = function (a, b) { var c = al(!0); ol(function () { for (var d = ul(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (void 0 !== ml[f]) {
            var g = zl(f, d), h = c[g];
            if (h) {
                var k = Math.min(Al(h), ab()), n;
                b: {
                    var p = k;
                    if (Uj(m))
                        for (var r = Xj(g, H.cookie, void 0, "ad_storage"), t = 0; t < r.length; ++t)
                            if (Al(r[t]) > p) {
                                n = !0;
                                break b;
                            }
                    n = !1;
                }
                if (!n) {
                    var u = ok(b, k, !0);
                    u.Ka = "ad_storage";
                    gk(g, h, u);
                }
            }
        }
    } xl(vl(c.gclid, c.gclsrc), !1, b); }); }, zl = function (a, b) { var c = ml[a]; if (void 0 !== c)
        return b + c; }, Al = function (a) {
        return 0 !== Cl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0;
    };
    function rl(a) { var b = Cl(a.split(".")); return 0 === b.length ? null : { version: b[0], va: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) }; }
    function Cl(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ll.test(a[2]) ? [] : a; }
    var Dl = function (a, b, c, d, e) { if (Ia(b) && Uj(m)) {
        var f = ul(e), g = function () { for (var h = {}, k = 0; k < a.length; ++k) {
            var n = zl(a[k], f);
            if (n) {
                var p = Xj(n, H.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
            }
        } return h; };
        ol(function () { fl(g, b, c, d); });
    } }, tl = function (a) { return a.filter(function (b) { return ll.test(b.va); }); }, El = function (a, b) {
        if (Uj(m)) {
            for (var c = ul(b.prefix), d = {}, e = 0; e < a.length; e++)
                ml[a[e]] && (d[a[e]] = ml[a[e]]);
            ol(function () {
                Oa(d, function (f, g) {
                    var h = Xj(c + g, H.cookie, void 0, "ad_storage");
                    h.sort(function (u, q) { return Al(q) - Al(u); });
                    if (h.length) {
                        var k = h[0], n = Al(k), p = 0 !== Cl(k.split(".")).length ? k.split(".").slice(3) : [], r = {}, t;
                        t = 0 !== Cl(k.split(".")).length ? k.split(".")[2] : void 0;
                        r[f] = [t];
                        xl(r, !0, b, n, p);
                    }
                });
            });
        }
    };
    function Fl(a, b) { for (var c = 0; c < b.length; ++c)
        if (a[b[c]])
            return !0; return !1; }
    var Gl = function (a) { function b(e, f, g) { g && (e[f] = g); } if (Zh()) {
        var c = wl();
        if (Fl(c, a)) {
            var d = {};
            b(d, "gclid", c.gclid);
            b(d, "dclid", c.dclid);
            b(d, "gclsrc", c.gclsrc);
            b(d, "wbraid", c.gbraid);
            gl(function () { return d; }, 3);
            gl(function () { var e = {}; return e._up = "1", e; }, 1);
        }
    } };
    function Hl(a, b) { var c = ul(b), d = zl(a, c); if (!d)
        return 0; for (var e = pl(d), f = 0, g = 0; g < e.length; g++)
        f = Math.max(f, e[g].timestamp); return f; }
    function Il(a) { var b = 0, c; for (c in a)
        for (var d = a[c], e = 0; e < d.length; e++)
            b = Math.max(b, Number(d[e].timestamp)); return b; }
    ;
    var dm = !1, em = 0, fm = [];
    function gm(a) { if (!dm) {
        var b = H.createEventObject, c = "complete" == H.readyState, d = "interactive" == H.readyState;
        if (!a || "readystatechange" != a.type || c || !b && d) {
            dm = !0;
            for (var e = 0; e < fm.length; e++)
                I(fm[e]);
        }
        fm.push = function () { for (var f = 0; f < arguments.length; f++)
            I(arguments[f]); return 0; };
    } }
    function hm() { if (!dm && 140 > em) {
        em++;
        try {
            H.documentElement.doScroll("left"), gm();
        }
        catch (a) {
            m.setTimeout(hm, 50);
        }
    } }
    var im = function (a) { dm ? a() : fm.push(a); };
    var km = function (a, b) { this.g = !1; this.C = []; this.F = { tags: [] }; this.N = !1; this.o = this.s = 0; jm(this, a, b); }, lm = function (a, b, c, d) { if (Yg.hasOwnProperty(b) || "__zone" === b)
        return -1; var e = {}; Fc(d) && (e = Gc(d, e)); e.id = c; e.status = "timeout"; return a.F.tags.push(e) - 1; }, mm = function (a, b, c, d) { var e = a.F.tags[b]; e && (e.status = c, e.executionTime = d); }, nm = function (a) { if (!a.g) {
        for (var b = a.C, c = 0; c < b.length; c++)
            b[c]();
        a.g = !0;
        a.C.length = 0;
    } }, jm = function (a, b, c) { Ea(b) && a.Ac(b); c && m.setTimeout(function () { return nm(a); }, Number(c)); };
    km.prototype.Ac = function (a) { var b = this, c = cb(function () { return I(function () { a(J.J, b.F); }); }); this.g ? c() : this.C.push(c); };
    var om = function (a) { a.s++; return cb(function () { a.o++; a.N && a.o >= a.s && nm(a); }); };
    var pm = function () { function a(d) { return !Ha(d) || 0 > d ? 0 : d; } if (!Vg._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart, c = Ha(ph.get("gtm.start")) ? ph.get("gtm.start") : 0;
        Vg._li = { cst: a(c - b), cbt: a(dh - b) };
    } }, qm = function (a) { m.performance && m.performance.mark(J.J + "_" + a + "_start"); }, rm = function (a) {
        if (m.performance) {
            var b = J.J + "_" + a + "_start", c = J.J + "_" + a + "_duration";
            m.performance.measure(c, b);
            var d = m.performance.getEntriesByName(c)[0];
            m.performance.clearMarks(b);
            m.performance.clearMeasures(c);
            var e = Vg._p || {};
            void 0 === e[a] && (e[a] = d.duration, Vg._p = e);
            return d.duration;
        }
    }, sm = function () { if (m.performance && m.performance.now) {
        var a = Vg._p || {};
        a.PAGEVIEW = m.performance.now();
        Vg._p = a;
    } };
    var tm = {}, um = function () { return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]; }, vm = !1;
    function zm() { return m.GoogleAnalyticsObject || "ga"; }
    var Am = function (a) { }, Bm = function (a, b) {
        return function () {
            var c = um(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), h = f.get("hitCallback"), k = 0 > g.indexOf("&tid=" + b);
                    k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    k && (f.set("hitPayload", g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f));
                });
            }
        };
    };
    var Im = function (a) { }, Mm = function (a) { }, Nm = function () { return "&tc=" + Xe.filter(function (a) { return a; }).length; }, Qm = function () { 2022 <= Om().length && Pm(); }, Rm = function (a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"; }, Tm = function () { Sm || (Sm = m.setTimeout(Pm, 500)); }, Pm = function () { Sm && (m.clearTimeout(Sm), Sm = void 0); void 0 === Um || Vm[Um] && !Wm && !Xm || (Ym[Um] || Zm.pj() || 0 >= $m-- ? (Ug(1), Ym[Um] = !0) : (Zm.Lj(), ec(Om(!0)), Vm[Um] = !0, an = bn = cn = Xm = Wm = "")); }, Om = function (a) {
        var b = Um;
        if (void 0 === b)
            return "";
        var c = Tg("GTM"), d = Tg("TAGGING");
        return [dn, Vm[b] ? "" : "&es=1",
            en[b], Im(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Nm(), Wm, Xm, cn, bn, Mm(a), an, "&z=0"].join("");
    }, gn = function () { dn = fn(); }, fn = function () { return [eh, "&v=3&t=t", "&pid=" + Ka(), "&rv=" + J.yd].join(""); }, Lm = ["L", "S", "Y"], Hm = ["S", "E"], hn = { sampleRate: "0.005000", wh: "", vh: Number("5") }, jn = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="), kn;
    if (!(kn = jn)) {
        var ln = Math.random(), mn = hn.sampleRate;
        kn = ln < mn;
    }
    var nn = kn, on = { label: J.J + " Container", children: [{ label: "Initialization", children: [] }] }, dn = fn(), Vm = {}, Wm = "", Xm = "", an = "", bn = "", Km = {}, Jm = !1, Gm = {}, pn = {}, cn = "", Um = void 0, en = {}, Ym = {}, Sm = void 0, qn = 5;
    0 < hn.vh && (qn = hn.vh);
    var Zm = function (a, b) { for (var c = 0, d = [], e = 0; e < a; ++e)
        d.push(0); return { pj: function () { return c < a ? !1 : ab() - d[c % a] < b; }, Lj: function () { var f = c++ % a; d[f] = ab(); } }; }(qn, 1E3), $m = 1E3, sn = function (a, b) {
        if (nn && !Ym[a] && Um !==
            a) {
            Pm();
            Um = a;
            an = Wm = "";
            en[a] = "&e=" + Rm(b) + "&eid=" + a;
            Tm();
        }
    }, tn = function (a, b, c, d) { if (nn && b) {
        var e, f = String(b[pe.zb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Ym[a]) {
            a !== Um && (Pm(), Um = a);
            Wm = Wm ? Wm + "." + g : "&tr=" + g;
            var h = b["function"];
            if (!h)
                throw Error("Error: No function name given for function call.");
            var k = (Ze[h] ? "1" : "2") + e;
            an = an ? an + "." + k : "&ti=" + k;
            Tm();
            Qm();
        }
    } };
    var An = function (a, b, c) { if (nn && !Ym[a]) {
        a !== Um && (Pm(), Um = a);
        var d = c + b;
        Xm = Xm ? Xm + "." + d : "&epr=" + d;
        Tm();
        Qm();
    } }, Bn = function (a, b, c) { };
    function Cn(a, b, c, d) { var e = Xe[a], f = Dn(a, b, c, d); if (!f)
        return null; var g = ef(e[pe.qg], c, []); if (g && g.length) {
        var h = g[0];
        f = Cn(h.index, { onSuccess: f, onFailure: 1 === h.Og ? b.terminate : f, terminate: b.terminate }, c, d);
    } return f; }
    function Dn(a, b, c, d) {
        function e() {
            if (f[pe.si])
                h();
            else {
                var w = ff(f, c, []);
                var y = w[pe.Ch];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!li(y[x])) {
                            h();
                            return;
                        }
                var z = lm(c.kb, String(f[pe.zb]), Number(f[pe.rg]), w[pe.ui]), A = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!A) {
                        A = !0;
                        var D = ab() - E;
                        tn(c.id, Xe[a], "5", D);
                        mm(c.kb, z, "success", D);
                        g();
                    }
                };
                w.vtp_gtmOnFailure = function () { if (!A) {
                    A = !0;
                    var D = ab() - E;
                    tn(c.id, Xe[a], "6", D);
                    mm(c.kb, z, "failure", D);
                    h();
                } };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                tn(c.id, f, "1");
                var C = function () { var D = ab() - E; tn(c.id, f, "7", D); mm(c.kb, z, "exception", D); A || (A = !0, h()); };
                var E = ab();
                try {
                    df(w, { event: c, index: a, type: 1 });
                }
                catch (D) {
                    C(D);
                }
            }
        }
        var f = Xe[a], g = b.onSuccess, h = b.onFailure, k = b.terminate;
        if (c.hf(f))
            return null;
        var n = ef(f[pe.sg], c, []);
        if (n && n.length) {
            var p = n[0], r = Cn(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
            if (!r)
                return null;
            g = r;
            h = 2 === p.Og ? k : r;
        }
        if (f[pe.mg] || f[pe.yi]) {
            var t = f[pe.mg] ? Ye : c.Xj, u = g, q = h;
            if (!t[a]) {
                e = cb(e);
                var v = En(a, t, e);
                g = v.onSuccess;
                h = v.onFailure;
            }
            return function () { t[a](u, q); };
        }
        return e;
    }
    function En(a, b, c) { var d = [], e = []; b[a] = Fn(d, e, c); return { onSuccess: function () { b[a] = Gn; for (var f = 0; f < d.length; f++)
            d[f](); }, onFailure: function () { b[a] = Hn; for (var f = 0; f < e.length; f++)
            e[f](); } }; }
    function Fn(a, b, c) { return function (d, e) { a.push(d); b.push(e); c(); }; }
    function Gn(a) { a(); }
    function Hn(a, b) { b(); }
    ;
    var Kn = function (a, b) {
        for (var c = [], d = 0; d < Xe.length; d++)
            if (a[d]) {
                var e = Xe[d];
                var f = om(b.kb);
                try {
                    var g = Cn(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var h = c, k = h.push, n = d, p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var r = Ze[p];
                        k.call(h, { oh: n, eh: r ? r.priorityOverride || 0 : 0, execute: g });
                    }
                    else
                        In(d, b), f();
                }
                catch (q) {
                    f();
                }
            }
        var t = b.kb;
        t.N = !0;
        t.o >= t.s && nm(t);
        c.sort(Jn);
        for (var u = 0; u < c.length; u++)
            c[u].execute();
        return 0 < c.length;
    };
    function Jn(a, b) { var c, d = b.eh, e = a.eh; c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c)
        f = c;
    else {
        var g = a.oh, h = b.oh;
        f = g > h ? 1 : g < h ? -1 : 0;
    } return f; }
    function In(a, b) { if (!nn)
        return; var c = function (d) { var e = b.hf(Xe[d]) ? "3" : "4", f = ef(Xe[d][pe.qg], b, []); f && f.length && c(f[0].index); tn(b.id, Xe[d], e); var g = ef(Xe[d][pe.sg], b, []); g && g.length && c(g[0].index); }; c(a); }
    var Ln = !1, Rn = function (a) {
        var b = ab(), c = a["gtm.uniqueEventId"], d = a.event;
        if ("gtm.js" === d) {
            if (Ln)
                return !1;
            Ln = !0;
        }
        var g = Fh(c), h = !1;
        if (!g.active) {
            if ("gtm.js" !== d)
                return !1;
            h = !0;
            g = Fh(Number.MAX_SAFE_INTEGER);
        }
        sn(c, d);
        var k = a.eventCallback, n = a.eventTimeout, p = k;
        var r = { id: c, name: d, hf: Dh(g.isAllowed), Xj: [], Zg: function () { Ug(6); }, Fg: Mn(c), kb: new km(p, n) };
        r.Eg = Nn();
        On(c, r.kb);
        var t = pf(r);
        h && (t = Pn(t));
        var u = Kn(t, r);
        "gtm.js" !== d && "gtm.sync" !== d || Am(J.J);
        return Qn(t, u);
    };
    function Mn(a) { return function (b) { nn && (Kc(b) || Bn(a, "input", b)); }; }
    function On(a, b) { uh(a, "event", 1); uh(a, "ecommerce", 1); uh(a, "gtm"); uh(a, "eventModel"); }
    function Nn() { var a = {}; a.event = th("event", 1); a.ecommerce = th("ecommerce", 1); a.gtm = th("gtm"); a.eventModel = th("eventModel"); return a; }
    function Pn(a) { for (var b = [], c = 0; c < a.length; c++)
        a[c] && Xg[String(Xe[c][pe.zb])] && (b[c] = !0); return b; }
    function Qn(a, b) { if (!b)
        return b; for (var c = 0; c < a.length; c++)
        if (a[c] && Xe[c] && !Yg[String(Xe[c][pe.zb])])
            return !0; return !1; }
    function Sn(a, b) { if (a) {
        var c = "" + a;
        0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
        "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
        return vj("" + c + b).href;
    } }
    function Tn(a, b) { return Un() ? Sn(a, b) : void 0; }
    function Un() { var a = !1; return a; }
    function Vn() { return !!J.zd && "SGTM_TOKEN" !== J.zd.replaceAll("@@", ""); }
    ;
    var Wn = function () { var a = !1; return a; };
    var Xn;
    if (3 === J.yd.length)
        Xn = "g";
    else {
        var Yn = "G";
        Yn = "g";
        Xn = Yn;
    }
    var Zn = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Xn, OPT: "o" }, $n = function (a) { var b = J.J.split("-"), c = b[0].toUpperCase(), d = Zn[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f; if (3 === J.yd.length) {
        var g = "w";
        g = Wn() ? "s" : "o";
        f = "2" + g;
    }
    else
        f = ""; return f + d + J.yd + e; };
    function ao(a, b) { if ("" === a)
        return b; var c = Number(a); return isNaN(c) ? b : c; }
    ;
    var bo = function (a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1); };
    function co() { return Lb("iPhone") && !Lb("iPod") && !Lb("iPad"); }
    ;
    Lb("Opera");
    Lb("Trident") || Lb("MSIE");
    Lb("Edge");
    !Lb("Gecko") || -1 != Gb.toLowerCase().indexOf("webkit") && !Lb("Edge") || Lb("Trident") || Lb("MSIE") || Lb("Edge");
    -1 != Gb.toLowerCase().indexOf("webkit") && !Lb("Edge") && Lb("Mobile");
    Lb("Macintosh");
    Lb("Windows");
    Lb("Linux") || Lb("CrOS");
    var eo = ma.navigator || null;
    eo && (eo.appVersion || "").indexOf("X11");
    Lb("Android");
    co();
    Lb("iPad");
    Lb("iPod");
    co() || Lb("iPad") || Lb("iPod");
    Gb.toLowerCase().indexOf("kaios");
    var fo = function (a, b) { for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
            e = !(!c.frames || !c.frames[b]);
        }
        catch (h) {
            e = !1;
        }
        if (e)
            return c;
        var f;
        a: {
            try {
                var g = c.parent;
                if (g && g != c) {
                    f = g;
                    break a;
                }
            }
            catch (h) { }
            f = null;
        }
        if (!(c = f))
            break;
    } return null; }, go = function (a) { var b = H; b = void 0 === b ? window.document : b; if (!a || !b.head)
        return null; var c, d; d = void 0 === d ? document : d; c = d.createElement("meta"); b.head.appendChild(c); c.httpEquiv = "origin-trial"; c.content = a; return c; };
    var ho = function () { };
    var io = function (a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0); void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3; }, jo = function (a, b) { this.o = a; this.g = null; this.C = {}; this.N = 0; this.F = void 0 === b ? 500 : b; this.s = null; };
    la(jo, ho);
    var lo = function (a) { return "function" === typeof a.o.__tcfapi || null != ko(a); };
    jo.prototype.addEventListener = function (a) {
        var b = {}, c = Ub(function () { return a(b); }), d = 0;
        -1 !== this.F && (d = setTimeout(function () { b.tcString = "tcunavailable"; b.internalErrorState = 1; c(); }, this.F));
        var e = function (f, g) { clearTimeout(d); f ? (b = f, b.internalErrorState = io(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3); a(b); };
        try {
            mo(this, "addEventListener", e);
        }
        catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c();
        }
    };
    jo.prototype.removeEventListener = function (a) { a && a.listenerId && mo(this, "removeEventListener", null, a.listenerId); };
    var oo = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a;
                }
            }
            e = void 0;
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
        var k;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = no(a.vendor.consents, void 0 === d ? "755" : d);
                k = n && "1" === b && a.purposeOneTreatment && ((Oh(Jh) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && no(a.purpose.consents, b);
            }
            else
                k = !0;
        else
            k =
                1 === h ? a.purpose && a.vendor ? no(a.purpose.legitimateInterests, b) && no(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return k;
    }, no = function (a, b) { return !(!a || !a[b]); }, mo = function (a, b, c, d) { c || (c = function () { }); if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
    }
    else if (ko(a)) {
        po(a);
        var f = ++a.N;
        a.C[f] = c;
        if (a.g) {
            var g = {};
            a.g.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*");
        }
    }
    else
        c({}, !1); }, ko = function (a) { if (a.g)
        return a.g; a.g = fo(a.o, "__tcfapiLocator"); return a.g; }, po = function (a) { a.s || (a.s = function (b) { try {
        var c;
        c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
        a.C[c.callId](c.returnValue, c.success);
    }
    catch (d) { } }, bo(a.o, a.s)); };
    var qo = !0;
    qo = !1;
    Nh().g(Jh.g);
    var ro = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 }, so = ao("", 550), to = ao("", 500);
    function uo() { var a = Vg.tcf || {}; return Vg.tcf = a; }
    var vo = function (a, b) { this.s = a; this.g = b; this.o = ab(); }, wo = function (a) { }, xo = function (a) { }, Do = function () {
        var a = uo(), b = new jo(m, qo ? 3E3 : -1), c = new vo(b, a);
        if ((yo() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || lo(b))) {
            a.active = !0;
            a.Tc = {};
            zo();
            var d = null;
            qo ? d = m.setTimeout(function () { Ao(a); Bo(a); d = null; }, to) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function (e) {
                    d && (clearTimeout(d), d = null);
                    if (0 !== e.internalErrorState)
                        Ao(a), Bo(a), wo(c);
                    else {
                        var f;
                        a.gdprApplies = e.gdprApplies;
                        if (!1 === e.gdprApplies)
                            f = Co(), b.removeEventListener(e);
                        else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                            var g = {}, h;
                            for (h in ro)
                                if (ro.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var k, n = e, p = !0;
                                        p = void 0 === p ? !1 : p;
                                        var r;
                                        var t = n;
                                        !1 === t.gdprApplies ? r = !0 : (void 0 === t.internalErrorState && (t.internalErrorState = io(t)), r = "error" === t.cmpStatus || 0 !== t.internalErrorState || "loaded" === t.cmpStatus && ("tcloaded" === t.eventStatus || "useractioncomplete" ===
                                            t.eventStatus) ? !0 : !1);
                                        k = r ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : oo(n, "1", 0) : !1;
                                        g["1"] = k;
                                    }
                                    else
                                        g[h] = oo(e, h, ro[h]);
                            f = g;
                        }
                        f && (a.tcString = e.tcString || "tcempty", a.Tc = f, Bo(a), wo(c));
                    }
                }), xo(c);
            }
            catch (e) {
                d && (clearTimeout(d), d = null), Ao(a), Bo(a);
            }
        }
    };
    function Ao(a) { a.type = "e"; a.tcString = "tcunavailable"; qo && (a.Tc = Co()); }
    function zo() { var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = so, a); ii(b); }
    var yo = function () { var a = !1; a = !0; return a; };
    function Co() { var a = {}, b; for (b in ro)
        ro.hasOwnProperty(b) && (a[b] = !0); return a; }
    function Bo(a) { var b = {}, c = (b.ad_storage = a.Tc["1"] ? "granted" : "denied", b); ki(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Eo() }); }
    var Fo = function () { var a = uo(); if (a.active && void 0 !== a.loadTime)
        return Number(a.loadTime); }, Eo = function () { var a = uo(); return a.active ? a.tcString || "" : ""; }, Go = function () { var a = uo(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""; }, Ho = function (a) { if (!ro.hasOwnProperty(String(a)))
        return !0; var b = uo(); return b.active && b.Tc ? !!b.Tc[String(a)] : !0; };
    var Qo = !1;
    Qo = !0;
    var Ro = !1;
    var So = function () { this.g = {}; }, To = function (a, b, c) { null != c && (a.g[b] = c); }, Uo = function (a) { return Object.keys(a.g).map(function (b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]); }).join("&"); }, Wo = function (a, b, c, d, e) { };
    var Yo = /[A-Z]+/, Zo = /\s/, $o = function (a) { if (Ga(a)) {
        a = Wa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
            var c = a.substring(0, b);
            if (Yo.test(c)) {
                var d = !1;
                d = !0;
                for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                    if (!e[f] || Zo.test(e[f]) && ("AW" !== c || 1 !== f || !d))
                        return;
                return { id: a, prefix: c, containerId: c + "-" + e[0], M: e };
            }
        }
    } }, bp = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = $o(a[c]);
            d && (b[d.id] = d);
        }
        ap(b);
        var e = [];
        Oa(b, function (f, g) { e.push(g); });
        return e;
    };
    function ap(a) { var b = [], c; for (c in a)
        if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.M[1] && b.push(d.containerId);
        } for (var e = 0; e < b.length; ++e)
        delete a[b[e]]; }
    ;
    var dp = function (a, b, c, d) { return (2 === cp() || d || "http:" != m.location.protocol ? a : b) + c; }, cp = function () { var a = cc(), b; if (1 === a)
        a: {
            var c = ah;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                var k = g[h].src;
                if (k) {
                    k = k.toLowerCase();
                    if (0 === k.indexOf(e)) {
                        b = 3;
                        break a;
                    }
                    1 === f && 0 === k.indexOf(d) && (f = 2);
                }
            }
            b = f;
        }
    else
        b = a; return b; };
    var vq = function () { var a = !0; Ho(7) && Ho(9) && Ho(10) || (a = !1); var b = !0; b = !1; b && !uq() && (a = !1); return a; }, uq = function () { var a = !0; Ho(3) && Ho(4) || (a = !1); return a; };
    var pr = !1;
    pr = !0;
    function qr() { var a = Vg; return a.gcq = a.gcq || new rr; }
    var sr = function (a, b, c) { qr().register(a, b, c); }, tr = function (a, b, c, d) { qr().push("event", [b, a], c, d); }, ur = function (a, b) { qr().push("config", [a], b); }, vr = function (a, b, c, d) { qr().push("get", [a, b], c, d); }, wr = function (a) { return qr().getRemoteConfig(a); }, xr = {}, yr = function () { this.status = 1; this.containerConfig = {}; this.targetConfig = {}; this.remoteConfig = {}; this.o = {}; this.s = null; this.g = !1; }, zr = function (a, b, c, d, e) { this.type = a; this.s = b; this.U = c || ""; this.g = d; this.o = e; }, rr = function () {
        this.o = {};
        this.s = {};
        this.g = [];
        this.C = { AW: !1,
            UA: !1 };
    }, Ar = function (a, b) { var c = $o(b); return a.o[c.containerId] = a.o[c.containerId] || new yr; }, Br = function (a, b, c) { if (b) {
        var d = $o(b);
        if (d && 1 === Ar(a, b).status) {
            Ar(a, b).status = 2;
            var e = {};
            nn && (e.timeoutId = m.setTimeout(function () { Ug(38); Tm(); }, 3E3));
            a.push("require", [e], d.containerId);
            xr[d.containerId] = ab();
            if (Wn()) { }
            else {
                var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + J.W + "&cx=c";
                Vn() && (g += "&sign=" + J.zd);
                var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g), k = Tn(c, g) || h;
                bc(k);
            }
        }
    } }, Cr = function (a, b, c, d) {
        if (d.U) {
            var e = Ar(a, d.U), f = e.s;
            if (f) {
                var g = Gc(c), h = Gc(e.targetConfig[d.U]), k = Gc(e.containerConfig), n = Gc(e.remoteConfig), p = Gc(a.s), r = oh("gtm.uniqueEventId"), t = $o(d.U).prefix, u = cb(function () { var v = g[R.Rb]; v && I(v); }), q = Xi(Wi(Yi(Vi(Ti(Ui(Si(Ri(Qi(g), h), k), n), p), function () { An(r, t, "2"); pr && u(); }), function () { An(r, t, "3"); pr && u(); }), function (v, w) { a.C[v] = w; }), function (v) { return a.C[v]; });
                try {
                    An(r, t, "1");
                    f(d.U, b, d.s, q);
                }
                catch (v) {
                    An(r, t, "4");
                }
            }
        }
    };
    rr.prototype.register = function (a, b, c) {
        var d = Ar(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (Gc(d.remoteConfig, c), d.remoteConfig = c);
            var e = $o(a), f = xr[e.containerId];
            if (void 0 !== f) {
                var g = Vg[e.containerId].bootstrap, h = e.prefix.toUpperCase();
                Vg[e.containerId]._spx && (h = h.toLowerCase());
                var k = oh("gtm.uniqueEventId"), n = h, p = ab() - g;
                if (nn && !Ym[k]) {
                    k !== Um && (Pm(), Um = k);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    bn = bn ? bn + "," + r : "&cl=" + r;
                }
                delete xr[e.containerId];
            }
            this.flush();
        }
    };
    rr.prototype.push = function (a, b, c, d) { var e = Math.floor(ab() / 1E3); Br(this, c, b[0][R.sa] || this.s[R.sa]); c && Ar(this, c).g && (d = !1); this.g.push(new zr(a, e, c, b, d)); d || this.flush(); };
    rr.prototype.insert = function (a, b, c) { var d = Math.floor(ab() / 1E3); 0 < this.g.length ? this.g.splice(1, 0, new zr(a, d, c, b, !1)) : this.g.push(new zr(a, d, c, b, !1)); };
    rr.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o)
                !f.U || Ar(this, f.U).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Ar(this, f.U).status && !a) {
                            this.g.push.apply(this.g, c);
                            return;
                        }
                        nn && m.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Oa(f.g[0], function (t, u) { Gc(ib(t, u), b.s); });
                        break;
                    case "config":
                        e.Ma = {};
                        Oa(f.g[0], function (t) { return function (u, q) { Gc(ib(u, q), t.Ma); }; }(e));
                        var g = !!e.Ma[R.rd];
                        delete e.Ma[R.rd];
                        var h = Ar(this, f.U), k = $o(f.U), n = k.containerId === k.id;
                        g || (n ? h.containerConfig = {} : h.targetConfig[f.U] = {});
                        h.g && g || Cr(this, R.za, e.Ma, f);
                        h.g = !0;
                        delete e.Ma[R.Wb];
                        n ? Gc(e.Ma, h.containerConfig) : Gc(e.Ma, h.targetConfig[f.U]);
                        d = !0;
                        break;
                    case "event":
                        e.Zc = {};
                        Oa(f.g[0], function (t) { return function (u, q) { Gc(ib(u, q), t.Zc); }; }(e));
                        Cr(this, f.g[1], e.Zc, f);
                        break;
                    case "get":
                        var p = {}, r = (p[R.Pa] = f.g[0], p[R.cb] = f.g[1], p);
                        Cr(this, R.Oa, r, f);
                }
                this.g.shift();
                Dr(this, f);
            }
            e = { Ma: e.Ma, Zc: e.Zc };
        }
        this.g.push.apply(this.g, c);
        d && this.flush();
    };
    var Dr = function (a, b) { if ("require" !== b.type)
        if (b.U)
            for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++)
                c[d]();
        else
            for (var e in a.o)
                if (a.o.hasOwnProperty(e)) {
                    var f = a.o[e];
                    if (f && f.o)
                        for (var g = f.o[b.type] || [], h = 0; h < g.length; h++)
                            g[h]();
                } };
    rr.prototype.getRemoteConfig = function (a) { return Ar(this, a).remoteConfig; };
    rr.prototype.getCommandListeners = function (a) { return Ar(this, a).o; };
    var xf;
    var Er = {}, Fr = function (a, b) { b = b.toString().split(","); for (var c = 0; c < b.length; c++) {
        var d = Er[b[c]] || [];
        Er[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
    } }, Gr = function (a) { Oa(Er, function (b, c) { var d = c.indexOf(a); 0 <= d && c.splice(d, 1); }); };
    var Hr = "HA GF G UA AW DC".split(" "), Ir = !1;
    Ir = !0;
    var Jr = !1, Kr = !1, Lr = 0;
    function Mr(a, b) { var c = { event: a }; b && (c.eventModel = Gc(b), b[R.Rb] && (c.eventCallback = b[R.Rb]), b[R.hd] && (c.eventTimeout = b[R.hd])); return c; }
    function Nr(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: hh() }); return a["gtm.uniqueEventId"]; }
    function Or() { if (!Jr && !Vg.gtagRegistered) {
        Jr = Vg.gtagRegistered = !0;
        Vg.addTargetToGroup = function (c) { Fr(c, "default"); };
        var a = Vg.pendingDefaultTargets;
        delete Vg.pendingDefaultTargets;
        if (Ia(a))
            for (var b = 0; b < a.length; ++b)
                Fr(a[b], "default");
    } return Jr; }
    var Pr = { config: function (a) {
            var b, c = Nr(a);
            if (2 > a.length || !Ga(a[1]))
                return;
            var d = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !Fc(a[2]) || 3 < a.length)
                    return;
                d = a[2];
            }
            var e = $o(a[1]);
            if (!e)
                return;
            Gr(e.id);
            Fr(e.id, d[R.te] || "default");
            delete d[R.te];
            Kr || Ug(43);
            if (Or() && -1 !== Hr.indexOf(e.prefix)) {
                "G" === e.prefix && (d[R.Wb] = !0);
                Ir && delete d[R.Rb];
                e.id === e.containerId && (Vg.configCount = ++Lr);
                ur(d, e.id);
                return;
            }
            rh("gtag.targets." + e.id, void 0);
            rh("gtag.targets." + e.id, Gc(d));
            var f = {};
            f[R.xb] = e.id;
            b = Mr(R.za, f);
            b["gtm.uniqueEventId"] = c;
            return b;
        }, consent: function (a) { function b() { Or() && Gc(a[2], { subcommand: a[1] }); } if (3 === a.length) {
            Ug(39);
            var c = hh(), d = a[1];
            "default" === d ? (b(), ii(a[2])) : "update" === d && (b(), ki(a[2], c));
        } }, event: function (a) {
            var b = a[1];
            if (!(2 > a.length) && Ga(b)) {
                var c;
                if (2 < a.length) {
                    if (!Fc(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    c = a[2];
                }
                var d = Mr(b, c), e = Nr(a);
                d["gtm.uniqueEventId"] = e;
                var f;
                var g = c && c[R.xb];
                void 0 === g && (g = oh(R.xb, 2),
                    void 0 === g && (g = "default"));
                if (Ga(g) || Ia(g)) {
                    for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++)
                        if (0 <= h[n].indexOf("-"))
                            k.push(h[n]);
                        else {
                            var p = Er[h[n]];
                            p && p.length && (k = k.concat(p));
                        }
                    f = bp(k);
                }
                else
                    f = void 0;
                var r = f;
                if (!r)
                    return;
                for (var t = Or(), u = [], q = 0; t && q < r.length; q++) {
                    var v = r[q];
                    if (-1 !== Hr.indexOf(v.prefix)) {
                        var w = Gc(c);
                        "G" === v.prefix && (w[R.Wb] = !0);
                        Ir && delete w[R.Rb];
                        tr(b, w, v.id);
                    }
                    u.push(v.id);
                }
                d.eventModel = d.eventModel || {};
                0 < r.length ? d.eventModel[R.xb] = u.join() : delete d.eventModel[R.xb];
                Kr || Ug(43);
                return d;
            }
        }, get: function (a) { Ug(53); if (4 !== a.length || !Ga(a[1]) || !Ga(a[2]) || !Ea(a[3]))
            return; var b = $o(a[1]), c = String(a[2]), d = a[3]; if (!b)
            return; Kr || Ug(43); if (!Or() || -1 === Hr.indexOf(b.prefix))
            return; hh(); var e = {}; ei(Gc((e[R.Pa] = c, e[R.cb] = d, e))); vr(c, function (f) { I(function () { return d(f); }); }, b.id); }, js: function (a) {
            if (2 == a.length && a[1].getTime) {
                Kr = !0;
                Or();
                var b = {};
                return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                    b["gtm.uniqueEventId"] = Nr(a), b;
            }
        }, policy: function (a) { if (3 === a.length) {
            var b = a[1], c = a[2], d = xf.o;
            d.g[b] ? d.g[b].push(c) : d.g[b] = [c];
        } }, set: function (a) { var b; 2 == a.length && Fc(a[1]) ? b = Gc(a[1]) : 3 == a.length && Ga(a[1]) && (b = {}, Fc(a[2]) || Ia(a[2]) ? b[a[1]] = Gc(a[2]) : b[a[1]] = a[2]); if (b) {
            if (hh(), Or()) {
                Gc(b);
                var c = Gc(b);
                qr().push("set", [c]);
            }
            b._clear = !0;
            return b;
        } } }, Qr = { policy: !0 };
    var Rr = function (a) { var b = m[J.W].hide; if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0, d;
        for (d in b)
            if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1;
                break;
            }
        c && (b.end(), b.end = null);
    } }, Sr = function (a) { var b = m[J.W], c = b && b.hide; c && c.end && (c[a] = !0); };
    var Tr = !1, Ur = [];
    function Vr() { if (!Tr) {
        Tr = !0;
        for (var a = 0; a < Ur.length; a++)
            I(Ur[a]);
    } }
    var Wr = function (a) { Tr ? I(a) : Ur.push(a); };
    var ms = function (a) { if (ls(a))
        return a; this.g = a; };
    ms.prototype.ij = function () { return this.g; };
    var ls = function (a) { return !a || "object" !== Cc(a) || Fc(a) ? !1 : "getUntrustedUpdateValue" in a; };
    ms.prototype.getUntrustedUpdateValue = ms.prototype.ij;
    var ns = [], os = !1, ps = !1, qs = function (a) { return m[J.W].push(a); }, rs = function (a, b, c) { a.eventCallback = b; c && (a.eventTimeout = c); return qs(a); }, ss = function (a, b) { var c = Vg[J.W], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0; b && (g = m.setTimeout(function () { f || (f = !0, a()); g = void 0; }, b)); return function () { ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0)); }; };
    function ts(a) { var b = a._clear; Oa(a, function (d, e) { "_clear" !== d && (b && rh(d, void 0), rh(d, e)); }); ch || (ch = a["gtm.start"]); var c = a["gtm.uniqueEventId"]; if (!a.event)
        return !1; c || (c = hh(), a["gtm.uniqueEventId"] = c, rh("gtm.uniqueEventId", c)); return Rn(a); }
    function us() { var a = ns[0]; if (null == a || "object" !== typeof a)
        return !1; if (a.event)
        return !0; if (Pa(a)) {
        var b = a[0];
        if ("config" === b || "event" === b || "js" === b)
            return !0;
    } return !1; }
    function vs() {
        for (var a = !1; !ps && 0 < ns.length;) {
            if (!os && us()) {
                var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d), f = ns[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                ns.unshift(c, e);
                os = !0;
            }
            ps = !0;
            delete lh.eventModel;
            nh();
            var g = ns.shift();
            if (null != g) {
                var h = ls(g);
                if (h) {
                    var k = g;
                    g = ls(k) ? k.getUntrustedUpdateValue() : void 0;
                    sh();
                }
                try {
                    if (Ea(g))
                        try {
                            g.call(ph);
                        }
                        catch (w) { }
                    else if (Ia(g)) {
                        var n = g;
                        if (Ga(n[0])) {
                            var p = n[0].split("."), r = p.pop(), t = n.slice(1), u = oh(p.join("."), 2);
                            if (void 0 !== u && null !== u)
                                try {
                                    u[r].apply(u, t);
                                }
                                catch (w) { }
                        }
                    }
                    else {
                        if (Pa(g)) {
                            a: {
                                var q = g;
                                if (q.length && Ga(q[0])) {
                                    var v = Pr[q[0]];
                                    if (v && (!h || !Qr[q[0]])) {
                                        g = v(q);
                                        break a;
                                    }
                                }
                                g = void 0;
                            }
                            if (!g) {
                                ps = !1;
                                continue;
                            }
                        }
                        a = ts(g) || a;
                    }
                }
                finally {
                    h && nh(!0);
                }
            }
            ps = !1;
        }
        return !a;
    }
    function ws() { var b = vs(); try {
        Rr(J.J);
    }
    catch (c) { } return b; }
    var ys = function () {
        var a = Yb(J.W, []), b = Yb("google_tag_manager", {});
        b = b[J.W] = b[J.W] || {};
        im(function () { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })); });
        Wr(function () { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })); });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function () {
            var e;
            if (0 < Vg.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++)
                    e[f] = new ms(arguments[f]);
            }
            else
                e = [].slice.call(arguments, 0);
            var g, h = !0;
            h = !1;
            g = h;
            !g && ns.push.apply(ns, e);
            var k = c.apply(a, e);
            g && ns.push.apply(ns, e);
            if (300 < this.length)
                for (Ug(4); 300 < this.length;)
                    this.shift();
            var n = "boolean" !== typeof k || k;
            return vs() && n;
        };
        var d = a.slice(0);
        ns.push.apply(ns, d);
        if (xs()) {
            I(ws);
        }
    }, xs = function () { var a = !0; return a; };
    function zs(a) { if (null == a || 0 === a.length)
        return !1; var b = Number(a), c = ab(); return b < c + 3E5 && b > c - 9E5; }
    ;
    var As = function (a) { Vg.addTargetToGroup ? Vg.addTargetToGroup(a) : (Vg.pendingDefaultTargets = Vg.pendingDefaultTargets || [], Vg.pendingDefaultTargets.push(a)); };
    var Bs = function () { var a = []; return a; };
    var Cs = {};
    Cs.ud = new String("undefined");
    var Fs = function (a, b, c) { var d = { event: b, "gtm.element": a, "gtm.elementClasses": oc(a, "className"), "gtm.elementId": a["for"] || hc(a, "id") || "", "gtm.elementTarget": a.formTarget || oc(a, "target") || "" }; c && (d["gtm.triggers"] = c.join(",")); d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || oc(a, "href") || a.src || a.code || a.codebase || ""; return d; }, Gs = function (a) {
        Vg.hasOwnProperty("autoEventsSettings") || (Vg.autoEventsSettings = {});
        var b = Vg.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] =
            {});
        return b[a];
    }, Hs = function (a, b, c) { Gs(a)[b] = c; }, Is = function (a, b, c, d) { var e = Gs(a), f = bb(e, b, d); e[b] = c(f); }, Js = function (a, b, c) { var d = Gs(a); return bb(d, b, c); };
    var Ps = !!m.MutationObserver, Qs = void 0, Rs = function (a) { if (!Qs) {
        var b = function () { var c = H.body; if (c)
            if (Ps)
                (new MutationObserver(function () { for (var e = 0; e < Qs.length; e++)
                    I(Qs[e]); })).observe(c, { childList: !0, subtree: !0 });
            else {
                var d = !1;
                fc(c, "DOMNodeInserted", function () { d || (d = !0, I(function () { d = !1; for (var e = 0; e < Qs.length; e++)
                    I(Qs[e]); })); });
            } };
        Qs = [];
        H.body ? b() : I(b);
    } Qs.push(a); };
    var bt = function (a, b, c) {
        function d() { var g = a(); f += e ? (ab() - e) * g.playbackRate / 1E3 : 0; e = ab(); }
        var e = 0, f = 0;
        return { createEvent: function (g, h, k) {
                var n = a(), p = n.Ze, r = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(n.Ze * h) : Math.round(n.Jg), t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(r / p * 100), u = H.hidden ? !1 : .5 <= ij(c);
                d();
                var q = void 0;
                void 0 !== b && (q = [b]);
                var v = Fs(c, "gtm.video", q);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(r);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = u;
                return v;
            }, jh: function () { e = ab(); }, Zb: function () { d(); } };
    };
    var ct = m.clearTimeout, dt = m.setTimeout, S = function (a, b, c, d) { if (Wn()) {
        b && I(b);
    }
    else
        return bc(a, b, c, d); }, et = function () { return new Date; }, ft = function () { return m.location.href; }, gt = function (a) { return tj(vj(a), "fragment"); }, ht = function (a) { return uj(vj(a)); }, it = function (a, b) { return oh(a, b || 2); }, jt = function (a, b, c) { return b ? rs(a, b, c) : qs(a); }, kt = function (a, b) { m[a] = b; }, V = function (a, b, c) { b && (void 0 === m[a] || c && !m[a]) && (m[a] = b); return m[a]; }, lt = function (a, b, c) { return Xj(a, b, void 0 === c ? !0 : !!c); }, mt = function (a, b, c) { return 0 === gk(a, b, c); }, nt = function (a, b) { if (Wn()) {
        b && I(b);
    }
    else
        dc(a, b); }, ot = function (a) { return !!Js(a, "init", !1); }, pt = function (a) { Hs(a, "init", !0); }, qt = function (a) { var b = ah, c = "?id=" + encodeURIComponent(a) + "&l=" + J.W; Vn() && (c += "&sign=" + J.zd, Xb && (b = Xb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0])); var d = dp("https://", "http://", b + c); S(d); }, rt = function (a, b, c) { nn && (Kc(a) || Bn(c, b, a)); };
    function Pt(a, b) { a = String(a); b = String(b); var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) == c; }
    var Qt = new La;
    function Rt(a, b, c) { var d = c ? "i" : void 0; try {
        var e = String(b) + d, f = Qt.get(e);
        f || (f = new RegExp(b, d), Qt.set(e, f));
        return f.test(a);
    }
    catch (g) {
        return !1;
    } }
    function St(a, b) { function c(g) { var h = vj(g), k = tj(h, "protocol"), n = tj(h, "host", !0), p = tj(h, "port"), r = tj(h, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p)
        k = "web", p = "default"; return [k, n, p, r]; } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
        if (d[f] !== e[f])
            return !1; return !0; }
    function Tt(a) { return Ut(a) ? 1 : 0; }
    function Ut(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && Ia(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Gc(a, {});
                Gc({ arg1: c[d], any_of: void 0 }, e);
                if (Tt(e))
                    return !0;
            }
            return !1;
        }
        switch (a["function"]) {
            case "_cn": return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    f = b[g[h]](c);
                                    break a;
                                }
                        }
                        catch (k) { }
                    }
                    f = !1;
                }
                return f;
            case "_ew": return Pt(b, c);
            case "_eq": return String(b) ==
                String(c);
            case "_ge": return Number(b) >= Number(c);
            case "_gt": return Number(b) > Number(c);
            case "_lc": return 0 <= String(b).split(",").indexOf(String(c));
            case "_le": return Number(b) <= Number(c);
            case "_lt": return Number(b) < Number(c);
            case "_re": return Rt(b, c, a.ignore_case);
            case "_sw": return 0 == String(b).indexOf(String(c));
            case "_um": return St(b, c);
        }
        return !1;
    }
    ;
    function Vt(a, b) { var c = this; }
    ;
    function Wt(a, b, c) { }
    ;
    function Xt(a, b, c, d) { }
    ;
    function Yt(a) { }
    ;
    function bu(a) { }
    ;
    var cu = {}, du = [], eu = {}, fu = 0, gu = 0;
    function nu(a, b) { }
    function uu(a, b) { }
    ;
    function zu(a) { }
    ;
    var Au = {}, Bu = [];
    var Iu = function (a, b) { };
    function Pu(a, b) { }
    ;
    var Qu = /^\s*$/, Ru, Su = !1;
    function cv(a, b) { }
    function dv(a, b, c) { }
    ;
    var ev = ["www.youtube.com", "www.youtube-nocookie.com"], fv, gv = !1, hv = 0;
    function rv(a, b) { }
    function sv(a, b) { return !0; }
    ;
    function tv(a, b, c) { }
    ;
    function uv(a, b) { var c; return c; }
    ;
    function vv(a) { }
    ;
    function wv(a) { }
    ;
    function xv(a) { Q(G(this), ["listener:!Fn"], arguments); ug(this, "process_dom_events", "window", "load"); Wr(Ic(a)); }
    ;
    function yv(a) { var b; return b; }
    ;
    function zv(a, b) { var c; var d = !1; var e = Hc(c, this.g, d); void 0 === e && void 0 !== c && Ug(45); return e; }
    ;
    function Av(a) { var b; return b; }
    ;
    function Bv(a, b) { var c = null, d = !1; return Hc(c, this.g, d); }
    ;
    function Cv(a) { var b; var g = !1; return Hc(b, this.g, g); }
    ;
    function Hv(a, b) { return b; }
    ;
    function Iv(a) { return !1; }
    var Jv;
    function Kv(a) { var b = !1; return b; }
    ;
    var Lv = function (a) { var b; return b; };
    function Mv(a, b) { b = void 0 === b ? !0 : b; var c; return c; }
    ;
    function Nv() { var a = []; return Hc(a); }
    ;
    function Ov(a) { var b = null; return b; }
    ;
    function Pv(a, b) { var c; return c; }
    ;
    function Qv(a, b) { var c; return c; }
    ;
    function Rv(a, b) { var c; return c; }
    ;
    function Sv(a) { var b = ""; return b; }
    ;
    function Tv(a, b) { var c; return c; }
    ;
    function Uv(a) { var b = ""; return b; }
    ;
    function Vv() { ug(this, "get_user_agent"); return m.navigator.userAgent; }
    ;
    function Wv(a, b) { }
    ;
    var Xv = {};
    function Yv(a, b, c, d, e, f) { f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [[c], [d]], bc(a, function () { for (var g = e[f][0], h = 0; h < g.length; h++)
        I(g[h]); g.push = function (k) { I(k); return 0; }; }, function () { for (var g = e[f][1], h = 0; h < g.length; h++)
        I(g[h]); e[f] = null; }, b)) : bc(a, c, d, b); }
    function Zv(a, b, c, d) { }
    var $v = Object.freeze({ dl: 1, id: 1 }), aw = {};
    function bw(a, b, c, d) { }
    ;
    function cw(a) { var b = !0; return b; }
    ;
    var dw = function () { return !1; }, ew = { getItem: function (a) { var b = null; return b; }, setItem: function (a, b) { return !1; }, removeItem: function (a) { } };
    var fw = ["textContent", "value", "tagName", "children", "childElementCount"];
    function gw(a) { var b; return b; }
    ;
    function hw() { }
    ;
    function iw(a, b) { var c; return c; }
    ;
    function jw(a) { var b = void 0; return b; }
    ;
    function kw(a, b) { var c = !1; return c; }
    ;
    function lw() { var a = ""; return a; }
    ;
    function mw() { var a = ""; return a; }
    ;
    var nw = Object.freeze(["config", "event", "get", "set"]);
    function ow(a, b, c) { }
    ;
    function pw() { }
    ;
    function qw(a, b, c, d) { d = void 0 === d ? !1 : d; }
    ;
    function rw(a, b, c) { }
    ;
    function sw(a, b, c, d) { var e = this; d = void 0 === d ? !0 : d; var f = !1; return f; }
    ;
    function tw(a) { Q(G(this), ["consentSettings:!DustMap"], arguments); for (var b = a.Ab(), c = b.length(), d = 0; d < c; d++) {
        var e = b.get(d);
        e !== R.Yd && ug(this, "access_consent", e, "write");
    } ii(Ic(a)); }
    ;
    function uw(a, b, c) { return !1; }
    ;
    function vw(a, b, c) { Q(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments); var d = fj(a) || {}; d[b] = Ic(c, this.g); var e = a; dj || ej(); cj[e] = d; }
    ;
    function ww(a, b, c) { }
    ;
    var xw = function (a) { for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    } return b; };
    function yw(a, b, c, d) { var e = this; }
    ;
    function zw(a, b, c) { }
    ;
    var Aw = {}, Bw = {};
    Aw.getItem = function (a) { var b = null; return b; };
    Aw.setItem = function (a, b) { };
    Aw.removeItem = function (a) { };
    Aw.clear = function () { };
    var Cw = function (a) { var b; return b; };
    function Dw(a) { Q(G(this), ["consentSettings:!DustMap"], arguments); var b = Ic(a), c; for (c in b)
        b.hasOwnProperty(c) && ug(this, "access_consent", c, "write"); var d = this.g.g; ki(b, d && d.eventId); }
    ;
    var Ew = function () {
        var a = new Jg;
        Wn() ? (a.add("injectHiddenIframe", Ca), a.add("injectScript", Ca)) : (a.add("injectHiddenIframe", Wv), a.add("injectScript", Zv));
        var b = rw;
        a.add("Math", ng());
        a.add("Object", Hg);
        a.add("TestHelper", Mg());
        a.add("addConsentListener", Vt);
        a.add("addEventCallback", Yt);
        a.add("aliasInWindow", sv);
        a.add("assertApi", jg);
        a.add("assertThat", kg);
        a.add("callInWindow", uv);
        a.add("callLater", vv);
        a.add("copyFromDataLayer", zv);
        a.add("copyFromWindow", Av);
        a.add("createArgumentsQueue", Bv);
        a.add("createQueue", Cv);
        a.add("decodeUri", og);
        a.add("decodeUriComponent", pg);
        a.add("encodeUri", qg);
        a.add("encodeUriComponent", rg);
        a.add("fail", sg);
        a.add("fromBase64", Lv, !("atob" in m));
        a.add("generateRandom", tg);
        a.add("getContainerVersion", vg);
        a.add("getCookieValues", Mv);
        a.add("getQueryParameters", Qv);
        a.add("getReferrerQueryParameters", Rv);
        a.add("getReferrerUrl", Sv);
        a.add("getTimestamp", yg);
        a.add("getTimestampMillis", yg);
        a.add("getType", zg);
        a.add("getUrl", Uv);
        a.add("localStorage", ew, !dw());
        a.add("isConsentGranted", cw);
        a.add("logToConsole", hw);
        a.add("makeInteger", Bg);
        a.add("makeNumber", Cg);
        a.add("makeString", Dg);
        a.add("makeTableMap", Eg);
        a.add("mock", Gg);
        a.add("parseUrl", jw);
        a.add("queryPermission", kw);
        a.add("readCharacterSet", lw);
        a.add("readTitle", mw);
        a.add("sendPixel", b);
        a.add("setCookie", sw);
        a.add("setDefaultConsentState", tw);
        a.add("setInWindow", uw);
        a.add("sha256", yw);
        a.add("templateStorage", Aw);
        a.add("toBase64", Cw, !("btoa" in m));
        a.add("updateConsentState", Dw);
        Lg(a, "callOnWindowLoad", xv);
        a.add("JSON", Ag(function (c) { var d = this.g.g; d && d.log.call(this, "error", c); }));
        Lg(a, "internal.appendRemoteConfigParameter", tv);
        Lg(a, "internal.getRemoteConfigParameter", Tv);
        Lg(a, "internal.setRemoteConfigParameter", ww);
        Lg(a, "internal.sortRemoteConfigParameters", zw);
        Lg(a, "internal.evaluateMatchingRules", Kv), Lg(a, "internal.registerGtagCommandListener", ow);
        Lg(a, "internal.addGaSendListener", zu);
        Lg(a, "internal.evaluateFilteringRules", Iv);
        Lg(a, "internal.getProductSettingsParameter", Pv);
        Lg(a, "internal.setProductSettingsParameter", vw);
        Lg(a, "internal.addHistoryChangeListener", Iu);
        Lg(a, "internal.sendGtagEvent", qw);
        Wn() ? Lg(a, "internal.injectScript", Ca) : Lg(a, "internal.injectScript", bw);
        Lg(a, "internal.locateUserData", gw);
        Lg(a, "internal.addFormInteractionListener", nu);
        Lg(a, "internal.addFormSubmitListener", uu);
        Lg(a, "internal.getFlags", xg);
        return function (c) {
            var d;
            if (a.g.hasOwnProperty(c))
                d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1, g = this.g.g;
                    if (g) {
                        var h = g.Jc();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f;
                }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = k;
                }
                else
                    throw Error(c + " is not a valid API name.");
            }
            return d;
        };
    };
    var Fw = function () { return !1; }, Gw = function () { var a = {}; return function (b, c, d) { }; };
    var Hw;
    function Iw() {
        var a = Hw;
        return function (b, c, d) {
            var e = d && d.event;
            Jw(c);
            var f = new sb;
            Oa(c, function (r, t) { var u = Hc(t); void 0 === u && void 0 !== t && Ug(44); f.set(r, u); });
            a.g.g.F = mf();
            var g = { Ii: yf(b), eventId: void 0 !== e ? e.id : void 0, Ac: void 0 !== e ? function (r) { return e.kb.Ac(r); } : void 0, Jc: function () { return b; }, log: function () { }, tk: { index: d && d.index, type: d && d.type } };
            if (Fw()) {
                var h = Gw(), k = void 0, n = void 0;
                g.Ea = { Bc: {}, bc: function (r, t, u) { 1 === t && (k = r); 7 === t && (n = u); h(r, t, u); }, pf: Fg() };
                g.log = function (r, t) { if (k) {
                    var u = Array.prototype.slice.call(arguments, 1);
                    h(k, 4, { level: r, source: n, message: u });
                } };
            }
            var p = oe(a, g, [b, f]);
            a.g.g.F = void 0;
            p instanceof pa && "return" === p.g && (p = p.o);
            return Ic(p);
        };
    }
    function Jw(a) { var b = a.gtmOnSuccess, c = a.gtmOnFailure; Ea(b) && (a.gtmOnSuccess = function () { I(b); }); Ea(c) && (a.gtmOnFailure = function () { I(c); }); }
    function Kw() { Hw.g.g.N = function (a, b, c) { Vg.SANDBOXED_JS_SEMAPHORE = Vg.SANDBOXED_JS_SEMAPHORE || 0; Vg.SANDBOXED_JS_SEMAPHORE++; try {
        return a.apply(b, c);
    }
    finally {
        Vg.SANDBOXED_JS_SEMAPHORE--;
    } }; }
    function Lw(a) { void 0 !== a && Oa(a, function (b, c) { for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        gh[e] = gh[e] || [];
        gh[e].push(b);
    } }); }
    ;
    var Mw = encodeURI, X = encodeURIComponent, Nw = ec;
    var Ow = function (a, b) { if (!a)
        return !1; var c = tj(vj(a), "host"); if (!c)
        return !1; for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
            var f = c.length - e.length;
            0 < f && "." != e.charAt(0) && (f--, e = "." + e);
            if (0 <= f && c.indexOf(e, f) == f)
                return !0;
        }
    } return !1; };
    var Pw = function (a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null; };
    var Zx = {};
    Zx[R.Pb] = "";
    Zx[R.ra] = "";
    Zx[R.Ha] = "";
    Zx[R.ia] = "auto";
    Zx[R.ab] = "/";
    Zx[R.qa] = 63072E3;
    Zx[R.vc] = 30;
    Zx[R.od] = 1E4;
    Zx[R.Vb] = !0;
    var $x = function (a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        this.s = a;
        this.eventName = b;
        this.C = c;
        this.K = d.eventModel;
        this.Bi = d.containerConfig;
        this.o = d;
        this.Na = d.getWithConfig(R.rb) ? 1 : 7;
        this.Ge = d.getWithConfig(R.sb) ? 1 : 7;
        this.N = e;
        this.ob = this.Fe = this.zg = this.F = this.vg = this.xg = this.td = !1;
        this.Gb = 0;
        this.Ke = this.Le = this.sd = !1;
        this.Oe = void 0;
        this.Xb = 0;
        this.ug = this.Je = this.yg = this.g = this.Ie =
            this.He = void 0;
        this.Ji = f;
    };
    l = $x.prototype;
    l.Ia = function (a, b) { void 0 === this.B(a) && (this.K[a] = b); };
    l.lh = function (a, b) { b <= this.Na && (this.K[R.rb] = a, this.Na = b); };
    l.mh = function (a, b) { b <= this.Ge && (this.K[R.sb] = a, this.Ge = b); };
    l.B = function (a) { return void 0 !== this.K[a] ? this.K[a] : void 0 !== this.o.getWithConfig(a) ? this.o.getWithConfig(a) : void 0 !== this.N[a] ? this.N[a] : Zx[a]; };
    l.getRemoteConfig = function (a) { return void 0 !== this.o.remoteConfig[a] ? this.o.remoteConfig[a] : this.N[a]; };
    l.Md = function (a) {
        var b = this.Fb(R.gd, this.N[R.gd]);
        if (b && void 0 !== b[a || this.eventName])
            return b[a || this.eventName];
    };
    l.Fb = function (a, b) { var c = fj(this.s); if (c && c.hasOwnProperty(a))
        return c[a]; return b; };
    l.Rg = function () { var a = this.B(R.Aa); if ("object" === typeof a)
        return a; };
    l.Sg = function () { return !!this.Rg(); };
    l.abort = function () { throw "ABORT"; };
    l.Ua = function () { return !(!0 !== this.B(R.sc) && "true" !== this.B(R.sc) || !this.B(R.sa)); };
    l.Aj =
        function () { return this.F || !!this.B(R.Yf); };
    var ay = !1, by = function () { ay = !0; ay = !0; }, cy = function (a) { var b = !1; b = a.eventName === R.mc && Zh() && a.Ua(); return !(!Wb.sendBeacon || a.sd || a.Le || a.F || a.Fe || a.ob || b || ay); };
    var dy = function (a) { Sg("GA4_EVENT", a); };
    var fy = function (a) { return !a || ey.test(a) || R.ki.hasOwnProperty(a); }, gy = function (a) { var b = a[R.xe]; if (b)
        return b; var c = a[R.wb]; if (Ga(c)) {
        if ("function" === typeof URL)
            try {
                return (new URL(c)).pathname;
            }
            catch (e) {
                return;
            }
        var d = vj(c);
        return d.hostname ? tj(d, "path") : void 0;
    } }, hy = function (a, b, c) {
        if (c)
            switch (c.type) {
                case "event_name": return a;
                case "const": return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name, e = b[d];
                    return e;
            }
    }, iy = function (a, b, c) { for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
            var g = f.edit_param.param_name, h = hy(a, b, f.edit_param.param_value), k;
            if (h) {
                var n = Number(h);
                k = isNaN(n) ? h : n;
            }
            else
                k = h;
            b[g] = k;
        }
        else
            f.delete_param && delete b[f.delete_param.param_name];
    } }, jy = function (a, b) {
        var c = b.values || [], d = hy(a.eventName, a.K, c[0]), e = hy(a.eventName, a.K, c[1]), f = b.type;
        if ("eqi" === f || "swi" === f || "ewi" === f || "cni" === f)
            d = "string" === typeof d ? d.toLowerCase() : d, e = "string" === typeof e ? e.toLowerCase() :
                e;
        var g = !1;
        switch (f) {
            case "eq":
            case "eqi":
                g = String(d) == String(e);
                break;
            case "sw":
            case "swi":
                g = 0 == String(d).indexOf(String(e));
                break;
            case "ew":
            case "ewi":
                g = Pt(d, e);
                break;
            case "cn":
            case "cni":
                g = 0 <= String(d).indexOf(String(e));
                break;
            case "lt":
                g = Number(d) < Number(e);
                break;
            case "le":
                g = Number(d) <= Number(e);
                break;
            case "gt":
                g = Number(d) > Number(e);
                break;
            case "ge":
                g = Number(d) >= Number(e);
                break;
            case "re":
            case "rei": g = Rt(d, e, "rei" === f);
        }
        return !!b.negate !== g;
    }, ky = function (a, b) {
        var c = b.event_name_predicate;
        if (c && !jy(a, c))
            return !1;
        var d = b.conditions || [];
        if (0 === d.length)
            return !0;
        for (var e = 0; e < d.length; e++) {
            for (var f = d[e].predicates || [], g = !0, h = 0; h < f.length; h++)
                if (!jy(a, f[h])) {
                    g = !1;
                    break;
                }
            if (g)
                return !0;
        }
        return !1;
    }, ey = /^(_|ga_|google_|gtag\.|firebase_).*$/, ly = !1;
    ly = !0;
    var my = function (a) { var b = 0, c = 0; return { start: function () { b = ab(); }, stop: function () { c = this.get(); }, get: function () { var d = 0; a.kf() && (d = ab() - b); return d + c; } }; }, ny = function () { this.g = void 0; this.o = 0; this.isActive = this.isVisible = this.s = !1; this.F = this.C = void 0; };
    l = ny.prototype;
    l.ni = function (a) {
        var b = this;
        if (!this.g) {
            this.s = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function (d, e, f) { fc(d, e, function (g) { b.g.stop(); f(g); b.kf() && b.g.start(); }); };
            c(m, "focus", function () { b.s = !0; });
            c(m, "blur", function () {
                b.s =
                    !1;
            });
            c(m, "pageshow", function (d) { b.isActive = !0; d.persisted && Ug(56); b.F && b.F(); });
            c(m, "pagehide", function () { b.isActive = !1; b.C && b.C(); });
            c(H, "visibilitychange", function () { b.isVisible = !H.hidden; });
            a.Ua() && -1 === (Wb.userAgent || "").indexOf("Firefox") && -1 === (Wb.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function () { by(); });
            this.xf();
            this.o = 0;
        }
    };
    l.xf = function () {
        this.o +=
            this.Ld();
        this.g = my(this);
        this.kf() && this.g.start();
    };
    l.Zj = function (a) { a.Xb = this.Ld(); };
    l.lj = function (a) { a.Xb = 0; this.xf(); this.o = 0; };
    l.kf = function () { return this.s && this.isVisible && this.isActive; };
    l.fj = function () { return this.o + this.Ld(); };
    l.Ld = function () { return this.g && this.g.get() || 0; };
    l.Nj = function (a) { this.C = a; };
    l.hh = function (a) { this.F = a; };
    function oy() { return m.gaGlobal = m.gaGlobal || {}; }
    var py = function () { var a = oy(); a.hid = a.hid || Ka(); return a.hid; }, qy = function (a, b) { var c = oy(); if (void 0 == c.vid || b && !c.from_cookie)
        c.vid = a, c.from_cookie = b; };
    var ty = function (a, b) { var c = !0; return c; }, vy = function (a) { var b; return b; }, ry = function (a, b, c) {
        var d = String(c.B(R.ia)), e = String(c.B(R.ab)), f = Number(c.B(R.qa)), g = c.B(R.Qb), h = { Ka: R.I, domain: d, path: e, expires: f ? new Date(ab() + 1E3 * f) : void 0, flags: "" + c.B(R.Ha) };
        if (!1 === g && wy(c) === b)
            return !0;
        var k = nk(b, xy[0], d, e);
        return 1 !== gk(a, k, h);
    }, uy = function (a, b) { var c = "" + b.B(R.ia), d = "" + b.B(R.ab), e = mk(a, c, d, xy, R.I); if (!e) {
        var f = String(b.B(R.Pb));
        f && f != a && (e = mk(f, c, d, xy, R.I));
    } return e; }, sy = function (a) { return a.B(R.ra) + "_ga_ecid"; }, zy = function (a, b) { return ry(yy(b), a, b); }, wy = function (a) { return uy(yy(a), a); }, yy = function (a) { return String(a.B(R.ra)) + "_ga"; }, xy = ["GA1"];
    var Cy = function (a, b) { var c = Ay(b), d = String(b.B(R.ia)), e = String(b.B(R.ab)), f = Number(b.B(R.qa)), g = nk(a, By[0], d, e), h = { Ka: R.I, domain: d, path: e, expires: f ? new Date(ab() + 1E3 * f) : void 0, flags: String(b.B(R.Ha)) }; return 1 !== gk(c, g, h); }, Dy = function (a) { var b = Ay(a), c = String(a.B(R.ia)), d = String(a.B(R.ab)); return mk(b, c, d, By, R.I); }, By = ["GS1"], Ay = function (a) { return String(a.B(R.ra)) + "_ga_" + a.s.substr(2); }, Ey = function (a) { var b; var c = a.K[R.wc], d = a.K[R.ze], e = !!a.K[R.ld]; if (c && d) {
        var f = [c, d, Sa(a.K[R.ye]), a.C, a.Gb];
        b = f.join(".");
    }
    else
        b = void 0; return b; };
    var Fy = function (a) { var b = a.B(R.ja), c = a.getRemoteConfig(R.ja); if (c === b)
        return c; var d = Gc(b); c && c[R.O] && (d[R.O] = (d[R.O] || []).concat(c[R.O])); return d; }, Gy = function (a, b, c, d) { var e = al(!0); if ("1" !== e._up)
        return {}; var f = e[b], g = e[d], h; a.g && (h = e[c]); return { clientId: f, Mg: h, kh: g }; }, Hy = function (a, b, c, d) { var e = al(!0), f = e[b]; f && (a.lh(f, 2), zy(f, a)); var g = e._z; g && (a.Ie = g); var h = e[c]; a.g && h && (a.mh(h, 2), ty(h, a)); var k = e[d]; k && Cy(k, a); return a.g ? !!(f && h && k) : !(!f || !k); }, Iy, Jy = !1, Ky = [0, 1, 2, 3];
    var Ly = !1, My = function (a) {
        var b = Fy(a) || {}, c = yy(a), d = sy(a), e = Ay(a);
        il(b[R.Tb], !!b[R.O]) && Hy(a, c, d, e) && (Ly = !0);
        if (b[R.O]) {
            var f = function () {
                var g = {}, h = wy(a);
                h && (g[c] = h);
                if (a.g) {
                    var k = vy(a);
                    k && (g[d] = k);
                }
                var n = Dy(a);
                n && (g[e] = n);
                var p = Xj("FPLC", void 0, void 0, R.I);
                p.length && (g._fplc = p[0]);
                return g;
            };
            Jy ? fl(f, b[R.O], b[R.Ub], !!b[R.vb], Iy) : fl(f, b[R.O], b[R.Ub], !!b[R.vb]);
        }
    }, Oy = function (a) { if (!a.B(R.hb))
        return {}; var b = yy(a), c = sy(a), d = Ay(a); gl(function () { var e; if (li("analytics_storage"))
        e = {};
    else {
        var f = {}, g = (f._up = "1", f[b] = a.K[R.rb], f[d] = Ey(a), f);
        a.g && (g[c] = a.K[R.sb]);
        e = g;
    } return e; }, 1); if (!li("analytics_storage") && Ny())
        return Gy(a, b, c, d); return {}; }, Ny = function () {
        var a = sj(m.location, "host"), b = sj(vj(H.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1;
    };
    var Py = function () { var a = ab(), b = a + 864E5, c = 20, d = 5E3; return function () { var e = ab(); e >= b && (b = e + 864E5, d = 5E3); if (1 > d)
        return !1; c = Math.min(c + (e - a) / 1E3 * 5, 20); a = e; if (1 > c)
        return !1; d--; c--; return !0; }; };
    var Qy = !1;
    Qy = !0;
    var Ry = "" + Ka(), Sy = !1, Ty = void 0;
    var Uy = function () { if (Ea(m.__uspapi)) {
        var a = "";
        try {
            m.__uspapi("getUSPData", 1, function (b, c) { if (c && b) {
                var d = b.uspString;
                d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
            } });
        }
        catch (b) { }
        return a;
    } };
    var Vy = function (a, b) { if (b.Ua()) {
        var c = Uy();
        c && (a.us_privacy = c);
        var d = Go();
        d && (a.gdpr = d);
        var e = Eo();
        e && (a.gdpr_consent = e);
    } }, Xy = function (a, b) { if (Zh() && (a.gcs = mi(), b.Je && (a.gcu = "1"), b.Ua())) {
        $h() && (a.gcd = ni());
        var c = b.B(R.V);
        a.adr = void 0 !== c && !1 !== c ? "1" : "0";
        b.Je && (a.gcut = Wy[b.ug || ""]);
    } }, Yy = function (a, b, c) { void 0 === c && (c = {}); if ("object" === typeof b)
        for (var d in b)
            Yy(a + "." + d, b[d], c);
    else
        c[a] = b; return c; }, Zy = function (a) { var b = "https://www.google-analytics.com/g/collect", c = Sn(a.B(R.sa), "/g/collect"); if (c)
        return c; var d = !0; li(R.D) && li(R.I) || (d = !1); var e = !1 !== a.B(R.Fa); e = !0; var f = a.Fb(R.eb, a.B(R.eb)), g = a.Fb(R.Sb, a.B(R.Sb)); f && !g && e && !1 !== a.B(R.nc) && vq() && d && (b = "https://analytics.google.com/g/collect"); return b; }, $y = !1;
    $y = !0;
    var az = {}, Wy = (az[R.D] = "1", az[R.I] = "2", az), bz = {};
    bz[R.hi] = "tid";
    bz[R.rb] = "cid";
    bz[R.ub] = "ul";
    bz[R.se] = "_fid";
    bz[R.hg] = "tt";
    bz[R.ue] = "ir";
    var cz = {};
    cz[R.wc] = "sid";
    cz[R.ze] = "sct";
    cz[R.ye] = "seg";
    cz[R.wb] = "dl";
    cz[R.Qa] = "dr";
    cz[R.md] = "dt";
    cz[R.da] = "cu";
    cz[R.yb] = "uid";
    var dz = {};
    dz[R.Nf] = "cc";
    dz[R.Of] = "ci";
    dz[R.Pf] = "cm";
    dz[R.Qf] = "cn";
    dz[R.Rf] = "cs";
    dz[R.Sf] = "ck";
    var ez = function (a, b, c) {
        function d(z, A) { if (void 0 !== A && !R.ii.hasOwnProperty(z)) {
            null === A && (A = "");
            var C;
            if ("_" === z.charAt(0)) {
                e[z] = Ef(A, 300);
            }
            else if (bz[z])
                C = bz[z], e[C] = Ef(A, 300);
            else if (cz[z])
                C = cz[z], g[C] = Ef(A, 300);
            else if (!t(z, A)) {
                r(z, A);
            }
        } }
        var e = {}, f = {}, g = {};
        e.v = "2";
        e.tid = a.s;
        e.gtm = $n();
        e._p = py();
        a.Oe && (e.sr = a.Oe);
        a.Ie && (e._z = a.Ie);
        c && (e.em = c);
        a.ob && (e._gaz = 1);
        Xy(e, a);
        Vy(e, a);
        a.yg && (e.gtm_up = "1");
        if ($y) {
            var h = lb($i(a.o, R.X, 1), ".");
            h && (e.gdid = h);
        }
        f.en = Ef(a.eventName, 40);
        a.td && (f._fv = a.xg ? 2 : 1);
        a.vg && (f._nsi = 1);
        a.F && (f._ss = a.zg ? 2 : 1);
        a.sd && (f._c = 1);
        0 < a.Xb && (f._et = a.Xb);
        if (a.Ke) {
            var k = a.B(R.aa);
            if (Ia(k))
                for (var n = 0; n < k.length && 200 > n; n++)
                    f["pr" + (n + 1)] = Jf(k[n]);
        }
        a.He && (f._eu = a.He);
        if ($y) {
            var p = lb($i(a.o, R.X, 2), ".");
            p && (f.edid = p);
        }
        for (var r = function (z, A) { z = Ef(z, 40); var C = "ep." + z, E = "epn." + z; z = Ha(A) ? E : C; var D = Ha(A) ? C : E; f.hasOwnProperty(D) && delete f[D]; f[z] = Ef(A, 100); }, t = function (z, A) {
            var C = z.split(".");
            if (z === R.Aa && "object" !== typeof A)
                return r(z, A), !0;
            if (C[0] === R.Aa) {
                if ((1 < C.length || "object" === typeof A) && a.Ua()) {
                    var E = Yy(z, A);
                    Oa(E, function (D, F) { return void r(D, F); });
                }
                return !0;
            }
            return !1;
        }, u = 0; u < R.jg.length; ++u) {
            var q = R.jg[u];
            d(q, a.B(q));
        }
        a.Ke && d(R.da, a.B(R.da));
        Oa(a.Bi, d);
        Oa(a.K, d);
        var y = a.B(R.Ra) || {};
        !1 !== a.B(R.Fa) && uq() || (y._npa = "1");
        Oa(y, function (z, A) { if (void 0 !== A && (null === A && (A = ""), b[z] !== A)) {
            if (z !== R.yb || g.uid) {
                var C = (Ha(A) ? "upn." : "up.") + Ef(z, 24);
                f[C] = Ef(A, 36);
            }
            else
                g.uid = Ef(A, 36);
            b[z] = A;
        } });
        var x = !1;
        return Lf.call(this, { Wa: e, Ib: g, K: f }, Zy(a), a.Ua(), x) || this;
    };
    la(ez, Lf);
    var fz = function (a, b) { return a.replace(/\$\{([^\}]+)\}/g, function (c, d) { return b[d] || c; }); }, gz = function (a) { var b = a.search; return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse"); }, hz = function (a) { var b = {}, c = "", d = a.pathname.indexOf("/g/collect"); 0 <= d && (c = a.pathname.substring(0, d)); b.transport_url = a.protocol + "//" + a.hostname + c; return b; }, iz = function (a, b) {
        var c = new m.XMLHttpRequest;
        c.withCredentials = !0;
        var d = b ? "POST" : "GET", e = "", f = 0, g = vj(a), h = hz(g), k = gz(g);
        c.onprogress = function (n) {
            if (200 === c.status) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = fz(e, h), r = p.indexOf("\n\n"); -1 !== r;) {
                    var t;
                    a: {
                        var u = ba(p.substring(0, r).split("\n")), q = u.next().value, v = u.next().value;
                        if (q.startsWith("event: message") && v.startsWith("data: "))
                            try {
                                t = JSON.parse(v.substring(v.indexOf(":") + 1));
                                break a;
                            }
                            catch (N) { }
                        t = void 0;
                    }
                    if (t) {
                        var w = t.send_pixel || [];
                        if (Array.isArray(w))
                            for (var y = 0; y < w.length; y++) {
                                var x = w[y], z = ao('', 0);
                                if (1 === z) {
                                    var A = Math.floor(2 * Math.random()) + 1, C, E = x, D = A, F = 0 < E.indexOf("?") ? "&" : "?";
                                    C = "" + E + F + "gtmexpsb=" + D;
                                    2 === A ? nc(C) : ec(C);
                                }
                                else
                                    2 === z ? nc(x) : ec(x);
                            }
                    }
                    p = p.substring(r + 2);
                    r = p.indexOf("\n\n");
                }
                e = p;
            }
        };
        c.open(d, k);
        c.send(b);
    };
    var mz = function (a, b, c, d) { var e = a + "?" + b; jz && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect"))); kz && d && !ay ? iz(e, c) : lz(a, b, c); }, nz = function (a) { return a && 0 === a.indexOf("google.") && "google.com" != a ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a) : void 0; }, kz = !1;
    kz = !0;
    var jz = !1;
    var oz = function () { this.C = 1; this.F = {}; this.g = new Mf; this.o = -1; };
    oz.prototype.s = function (a, b) { var c = this, d; try {
        d = new ez(a, this.F, b);
    }
    catch (n) {
        a.abort();
    } var e = cy(a); e && this.g.C(d) || this.flush(); if (e && this.g.add(d)) {
        if (0 > this.o) {
            var f = m, g = f.setTimeout, h;
            a.Ua() ? pz ? (pz = !1, h = qz) : h = rz : h = 5E3;
            this.o = g.call(f, function () { return c.flush(); }, h);
        }
    }
    else {
        var k = Uf(d, this.C++);
        mz(d.o, k.tf, k.body, d.C);
        sz(d, a.Fe, a.ob, String(a.Fb(R.kd, a.B(R.kd))));
    } };
    oz.prototype.add = function (a) { a.Le ? this.N(a) : this.s(a); };
    oz.prototype.flush = function () { if (this.g.events.length) {
        var a = Vf(this.g, this.C++);
        mz(this.g.g, a.tf, a.body, this.g.o);
        this.g = new Mf;
        0 <= this.o && (m.clearTimeout(this.o), this.o = -1);
    } };
    oz.prototype.N = function (a) { var b = this, c = a.Rg(); c ? Ni(c, function (d) { b.s(a, d); }) : this.s(a); };
    var sz = function (a, b, c, d) {
        function e(h) { f.push(h + "=" + encodeURIComponent("" + a.Wa[h])); }
        if (b || c) {
            var f = [];
            e("tid");
            e("cid");
            e("gtm");
            f.push("aip=1");
            a.Ib.uid && f.push("uid=" + encodeURIComponent("" +
                a.Ib.uid));
            b && (lz("https://stats.g.doubleclick.net/g/collect", "v=2&" + f.join("&")), fi("https://stats.g.doubleclick.net/g/collect?v=2&" + f.join("&")));
            if (c) {
                f.push("z=" + Ka());
                var g = nz(d);
                g && ec(g + f.join("&"));
            }
        }
    }, lz = function (a, b, c) { var d = a + "?" + b; c ? Wb.sendBeacon && Wb.sendBeacon(d, c) : nc(d); }, qz = ao('', 500), rz = ao('', 5E3), pz = !0;
    var tz = window, uz = document, vz = function (a) { var b = tz._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === tz["ga-disable-" + a])
        return !0; try {
        var c = tz.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
            return !0;
    }
    catch (f) { } for (var d = Tj("AMP_TOKEN", String(uz.cookie), !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e])
            return !0; return uz.getElementById("__gaOptOutExtension") ? !0 : !1; };
    var wz = {};
    var xz = function (a, b) { var c = R.D; li(c) || pi(function () { b.Je = !0; b.ug = c; a.Ag(b); }, c); };
    wz.ji = "";
    var yz = function (a, b) { this.ob = a; this.Xb = b; this.Na = new oz; this.o = void 0; this.F = new ny; this.g = this.C = this.s = void 0; this.N = !1; };
    l = yz.prototype;
    l.Hj = function (a, b, c) {
        var d = this, e = !1;
        if (c.eventModel[R.Wb]) {
            e = !0;
            if ("_" === a.charAt(0))
                return;
            a !== R.za && a !== R.Oa && fy(a) && Ug(58);
            zz(c);
        }
        var f = new $x(this.ob, a, b, c, this.Xb, e), g = [R.I], h = !1;
        h = f.Ua();
        (f.Fb(R.eb, f.B(R.eb)) || h) && g.push(R.D);
        qi(function () { d.Ij(f); }, g);
    };
    l.Ij = function (a) {
        this.g = a;
        try {
            vz(a.s) && (Ug(28), a.abort());
            0 <= wz.ji.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (Ug(33), a.abort());
            var b = a.Md();
            b && b.blacklisted && (Ug(34), a.abort());
            var c = H.location.protocol;
            "http:" != c && "https:" != c && (Ug(29), a.abort());
            Wb && "preview" == Wb.loadPurpose && (Ug(30), a.abort());
            var d = Vg.grl;
            d || (d = Py(), Vg.grl = d);
            d() || (Ug(35), a.abort());
            this.oi(a);
            this.F.Zj(a);
            var g = this.gh, h;
            b: {
                if (!a.B(R.hb) || li(R.I) || 1 === a.Na)
                    break b;
                a.yg = !0;
            }
            a.eventName === R.za ? (a.B(R.hb) && Gl(["aw", "dc"]), My(a), h = Oy(a)) : h = {};
            g.call(this, h);
            a.eventName ==
                R.za && (a.Ji && 0 < bj(a.o).length && (Ug(68), 1 < Vg.configCount && Ug(69)), a.B(R.Vb) || a.abort(), a.o.eventModel[R.X] && (a.o.containerConfig[R.X] = a.o.eventModel[R.X], a.o.eventModel[R.X] = void 0), a.eventName = R.mc);
            var k = this.o, n = this.s, p = this.C, r = this.F, t = Dy(a);
            t || (t = p);
            var u = Sa(a.B(R.vc)), q;
            q = Sa(a.B(R.od));
            var v;
            a: {
                if (t) {
                    var w = t.split(".");
                    if (!(5 > w.length || 6 < w.length)) {
                        v = { sessionId: w[0], Af: Number(w[1]),
                            Td: !!Number(w[2]), lf: Number(w[3]), Gb: Number(w[4] || 0), Oc: "1" === w[5] };
                        break a;
                    }
                }
                v = void 0;
            }
            v && v.Gb && (a.Gb = Math.max(0, v.Gb - Math.max(0, a.C - v.lf)));
            var y = !1;
            v || (y = a.td = !0, v = { sessionId: String(a.C), Af: 1, Td: !1, lf: a.C, Oc: !1 });
            a.C > v.lf + 60 * u && (y = !0, v.sessionId = String(a.C), v.Af++, v.Td = !1);
            if (y)
                a.F = !0, r.lj(a);
            else if (r.fj() > q || a.eventName == R.mc)
                v.Td = !0;
            a.Ia(R.wc, v.sessionId);
            a.Ia(R.ze, v.Af);
            a.Ia(R.ye, v.Td ? 1 : 0);
            var x = a.B(R.rb), z = a.Na;
            x || (x = wy(a), z = 3);
            x || (x = k, z = 4);
            if (!x) {
                var A = li(R.I), C = oy();
                x = !C.from_cookie || A ? C.vid : void 0;
                z = 5;
            }
            x ? x = "" + x : (a.td = a.vg = !0, x = jk(), z = 6);
            a.lh(x, z);
            a: { }
            var F = "", N = H.location;
            if (N) {
                var M = N.pathname || "";
                "/" != M.charAt(0) && (M = "/" + M);
                F = N.protocol + "//" + N.hostname + M + N.search;
            }
            a.Ia(R.wb, F);
            var P;
            a: {
                var O = Xj("_opt_expid", void 0, void 0, R.I)[0];
                if (O) {
                    var K = decodeURIComponent(O).split("$");
                    if (3 === K.length) {
                        P = K[2];
                        break a;
                    }
                }
                if (void 0 !== Vg.ga4_referrer_override)
                    P = Vg.ga4_referrer_override;
                else {
                    var L = oh("gtm.gtagReferrer." + a.s);
                    P = L ? "" + L : H.referrer;
                }
            }
            var T = P;
            T && a.Ia(R.Qa, T);
            a.Ia(R.md, H.title);
            a.Ia(R.ub, (Wb.language || "").toLowerCase());
            var Z = m.screen, ia = Z ? Z.width : 0, Da = Z ? Z.height :
                0;
            a.Oe = ia + "x" + Da;
            var Ba = !1 !== a.B(R.Fa);
            Ba = !0;
            if (Ba && !1 !== a.B(R.nc) && vq() && li(R.D)) {
                var U = a.Fb(R.eb, a.B(R.eb)), ka = a.Fb(R.Sb, a.B(R.Sb));
                a.Aj() && (a.Fe = !!U);
                U && !ka && 0 === a.Gb && (a.Gb = 60, a.ob = !0);
            }
            Az(a);
            a.Ke = R.kg.hasOwnProperty(a.eventName);
            for (var Fa = a.B(R.ve) || [], Qa = 0; Qa < Fa.length; Qa++) {
                var jb = Fa[Qa];
                if (jb.rule_result) {
                    a.Ia(R.hg, jb.traffic_type);
                    dy(3);
                    break;
                }
            }
            if (a.B(R.sa)) {
                var Ya = Fy(a) || {}, Fe = il(Ya[R.Tb], !!Ya[R.O]) ? al(!0)._fplc : void 0;
                a.K._fplc = Fe || (0 < Xj("FPLC", void 0, void 0, R.I).length ? void 0 : "0");
            }
            if (void 0 === a.B(R.ue)) {
                var ic = a.B(R.nd), Ge, Qd;
                a: {
                    if (Ly) {
                        var He = Fy(a) || {};
                        if (He && He[R.O])
                            for (var Rc = tj(vj(a.B(R.Qa)), "host", !0), Rd = He[R.O], md = 0; md < Rd.length; md++)
                                if (Rd[md] instanceof RegExp) {
                                    if (Rd[md].test(Rc)) {
                                        Qd = !0;
                                        break a;
                                    }
                                }
                                else if (0 <= Rc.indexOf(Rd[md])) {
                                    Qd = !0;
                                    break a;
                                }
                    }
                    Qd = !1;
                }
                var nd;
                if (!(nd = Qd))
                    if (Qy)
                        nd =
                            !1;
                    else {
                        var Sd = tj(vj(a.B(R.Qa)), "host", !0), Td;
                        var Sc = String(a.B(R.ia));
                        if ("none" !== Sc)
                            if ("auto" !== Sc)
                                Td = Sc;
                            else {
                                if (!Sy) {
                                    for (var Of = String(a.B(R.ab)), Ud = dk(), jc = 0; jc < Ud.length; jc++)
                                        if ("none" !== Ud[jc]) {
                                            var Pf = String(a.B(R.ra)) + "_ga_autodomain";
                                            if (0 === gk(Pf, Ry, { Ka: R.I, domain: Ud[jc], path: Of })) {
                                                gk(Pf, void 0, { Ka: R.I, domain: Ud[jc], path: Of });
                                                Ty = Ud[jc];
                                                break;
                                            }
                                        }
                                    Sy = !0;
                                }
                                Td = Ty;
                            }
                        else
                            Td = void 0;
                        var Lh = Td;
                        nd = Lh ? 0 <= Sd.indexOf(Lh) : !1;
                    }
                if (!(Ge = nd)) {
                    var xa;
                    if (xa = ic)
                        a: {
                            for (var oa = ic.include_conditions || [], Za = 0; Za < oa.length; Za++)
                                if (oa[Za].test(a.B(R.Qa))) {
                                    xa =
                                        !0;
                                    break a;
                                }
                            xa = !1;
                        }
                    Ge = xa;
                }
                Ge && (a.Ia(R.ue, 1), dy(4));
            }
            if (a.eventName == R.Oa) {
                var Vd = a.B(R.Pa);
                a.B(R.cb)(a.B(Vd));
                a.abort();
            }
            if (a.K[R.Ad])
                delete a.K[R.Ad];
            else {
                var Dc = a.B(R.me);
                if (Dc) {
                    for (var Jb = Dc.edit_rules || [], Qb = 0; Qb < Jb.length; Qb++)
                        a: {
                            var Ua = a, ob = Jb[Qb];
                            if (ky(Ua, ob)) {
                                if (ob.new_event_name) {
                                    var W = "string" === typeof ob.new_event_name ? String(ob.new_event_name) : hy(Ua.eventName, Ua.K, ob.new_event_name);
                                    if (fy(W))
                                        break a;
                                    Ua.eventName = String(W);
                                }
                                iy(Ua.eventName, Ua.K, ob);
                                if (ly) {
                                    Ua.K[R.Ad] = !0;
                                    var Ie = Ua.eventName, Je = Ua.K, Ma = Ua.s;
                                    qr().insert("event", [Je, Ie], Ma);
                                    dy(2);
                                    Ua.abort();
                                }
                                else
                                    dy(2);
                            }
                        }
                    for (var Ke = Dc.synthesis_rules || [], od = 0; od < Ke.length; od++) {
                        var pd = a, Wd = Ke[od];
                        if (ky(pd, Wd)) {
                            var qd = Wd.new_event_name;
                            if (!fy(qd)) {
                                var Le = Wd.merge_source_event_params ? Gc(pd.K) : {};
                                Le[R.Ad] = !0;
                                iy(qd, Le, Wd);
                                var Xd = qd, Yd = Le, Qf = pd.s;
                                qr().insert("event", [Yd, Xd], Qf);
                                dy(1);
                            }
                        }
                    }
                }
            }
            var Me = a.K[R.Ae];
            if (Ia(Me))
                for (var Ab = 0; Ab < Me.length; Ab++)
                    dy(Me[Ab]);
            var fb = Tg("GA4_EVENT");
            fb && (a.He = fb);
            var Xa = this.gh, Ra = this.o, Kb = this.s, Zd;
            var Tc = Ey(a);
            Tc ?
                (Cy(Tc, a) || (Ug(25), a.abort()), Zd = Tc) : Zd = void 0;
            var Rf = Zd, Mh;
            var rd = a.K[R.rb];
            Ra && rd === Ra ? Mh = rd : rd ? (rd = "" + rd, zy(rd, a) || (Ug(31), a.abort()), qy(rd, li(R.I)), Mh = rd) : (Ug(32), a.abort(), Mh = "");
            var Hz = Mh, Sf;
            a: {
                Sf = void 0;
            }
            Xa.call(this, { clientId: Hz, Mg: Sf, kh: Rf });
            this.Yj();
            a.Ua() && ("page_view" === a.eventName || a.sd) && xz(this, a);
            this.F.xf();
            this.Ag(a);
            a.o.onSuccess();
        }
        catch (Mz) {
            a.o.onFailure();
        }
        delete Rg.GA4_EVENT;
    };
    l.Ag = function (a) { this.Na.add(a); };
    l.gh = function (a) { var b = a.clientId, c = a.Mg, d = a.kh; b && d && (this.o = b, this.s = c, this.C = d); };
    l.flush = function () { this.Na.flush(); };
    l.Yj = function () {
        var a = this;
        if (!this.N) {
            var b = li(R.I);
            oi([R.I], function () {
                var c = li(R.I);
                if (b ^ c && a.g && a.C && a.o) {
                    var d = a.o;
                    if (c) {
                        var e = wy(a.g);
                        e ? (a.o = e, a.C = Dy(a.g),
                            a.g.g && (a.s = vy(a.g))) : (zy(a.o, a.g), Cy(a.C, a.g), qy(a.o, !0), a.g.g && a.s && ty(a.s, a.g));
                    }
                    else {
                        a.C = void 0;
                        a.o = void 0;
                        a.s = void 0;
                    }
                    b = c;
                }
            });
            this.N = !0;
        }
    };
    l.oi = function (a) { a.eventName !== R.Oa && this.F.ni(a); };
    var Az = function (a) {
        var b = function (c) { return !!c && c.conversion; };
        a.sd = b(a.Md());
        a.td && (a.xg = b(a.Md("first_visit")));
        a.F && (a.zg = b(a.Md("session_start")));
    };
    function zz(a) { delete a.eventModel[R.Wb]; Bz(a.eventModel); }
    var Bz = function (a) { Oa(a, function (c) { "_" === c.charAt(0) && delete a[c]; }); var b = a[R.Ra] || {}; Oa(b, function (c) { "_" === c.charAt(0) && delete b[c]; }); };
    var Cz = function (a) { if ("prerender" == H.visibilityState)
        return !1; a(); return !0; }, Dz = function (a) { if (!Cz(a)) {
        var b = !1, c = function () { !b && Cz(a) && (b = !0, gc(H, "visibilitychange", c), Ug(55)); };
        fc(H, "visibilitychange", c);
        Ug(54);
    } };
    var Ez = function (a, b, c) { tr(b, c, a); }, Fz = function (a, b, c) { tr(b, c, a, !0); }, Iz = function (a, b) { var c = new yz(a, b); Dz(function () { Gz(a, c); }); };
    function Gz(a, b) { var c = b.F; sr(a, function (d, e, f, g) { b.Hj(e, f, g); }); c.Nj(function () { qr().flush(); 1E3 <= c.Ld() && Wb.sendBeacon && Ez(a, R.be, {}); by(); b.flush(); c.hh(function () { ay = !1; ay = !1; c.hh(void 0); }); }); }
    var Y = { h: {} };
    Y.h.ehl = ["google"], function () {
        function a(k) { return k.target && k.target.location && k.target.location.href ? k.target.location.href : ft(); }
        function b(k, n) { fc(k, "hashchange", function (p) { var r = a(p); n({ source: "hashchange", state: null, url: ht(r), R: gt(r) }); }); }
        function c(k, n) { fc(k, "popstate", function (p) { var r = a(p); n({ source: "popstate", state: p.state, url: ht(r), R: gt(r) }); }); }
        function d(k, n, p) {
            var r = n.history, t = r[k];
            if (Ea(t))
                try {
                    r[k] = function (u, q, v) {
                        t.apply(r, [].slice.call(arguments, 0));
                        p({ source: k, state: u, url: ht(ft()),
                            R: gt(ft()) });
                    };
                }
                catch (u) { }
        }
        function e() { var k = { source: null, state: V("history").state || null, url: ht(ft()), R: gt(ft()) }; return function (n, p) { var r = k, t = {}; t[r.source] = !0; t[n.source] = !0; if (!t.popstate || !t.hashchange || r.R != n.R) {
            var u = { event: "gtm.historyChange-v2", "gtm.historyChangeSource": n.source, "gtm.oldUrlFragment": k.R, "gtm.newUrlFragment": n.R, "gtm.oldHistoryState": k.state, "gtm.newHistoryState": n.state, "gtm.oldUrl": k.url, "gtm.newUrl": n.url, "gtm.triggers": p.join(",") };
            k = n;
            jt(u);
        } }; }
        function f(k, n) {
            var p = "" +
                n;
            if (g[p])
                g[p].push(k);
            else {
                var r = [k];
                g[p] = r;
                var t = e(), u = -1;
                h.push(function (q) { 0 <= u && ct(u); n ? u = dt(function () { t(q, r); u = -1; }, n) : t(q, r); });
            }
        }
        var g = {}, h = [];
        (function (k) { Y.__ehl = k; Y.__ehl.m = "ehl"; Y.__ehl.isVendorTemplate = !0; Y.__ehl.priorityOverride = 0; })(function (k) {
            var n = V("self"), p = k.vtp_uniqueTriggerId || "0", r = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
            0 > r ? r = 0 : isNaN(r) && (r = 1E3);
            if (ot("ehl")) {
                var t = Js("ehl", "reg");
                t ? (t(p, r),
                    I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure);
            }
            else {
                var u = function (q) { for (var v = 0; v < h.length; v++)
                    h[v](q); };
                b(n, u);
                c(n, u);
                d("pushState", n, u);
                d("replaceState", n, u);
                f(p, r);
                Hs("ehl", "reg", f);
                pt("ehl");
                I(k.vtp_gtmOnSuccess);
            }
        });
    }();
    Y.h.sdl = ["google"], function () {
        function a() { return !!(Object.keys(k("horiz.pix")).length || Object.keys(k("horiz.pct")).length || Object.keys(k("vert.pix")).length || Object.keys(k("vert.pct")).length); }
        function b(x) { for (var z = [], A = x.split(","), C = 0; C < A.length; C++) {
            var E = Number(A[C]);
            if (isNaN(E))
                return [];
            p.test(A[C]) || z.push(E);
        } return z; }
        function c() { var x = 0, z = 0; return function () { var A = hj(), C = A.height; x = Math.max(v.scrollLeft + A.width, x); z = Math.max(v.scrollTop + C, z); return { Xe: x, Ye: z }; }; }
        function d() {
            u = V("self");
            q = u.document;
            v = q.scrollingElement || q.body && q.body.parentNode;
            y = c();
        }
        function e(x, z, A, C) { var E = k(z), D = {}, F; for (F in E) {
            D.Lb = F;
            if (E.hasOwnProperty(D.Lb)) {
                var N = Number(D.Lb);
                x < N || (jt({ event: "gtm.scrollDepth", "gtm.scrollThreshold": N, "gtm.scrollUnits": A.toLowerCase(), "gtm.scrollDirection": C, "gtm.triggers": E[D.Lb].join(",") }), Is("sdl", z, function (M) { return function (P) { delete P[M.Lb]; return P; }; }(D), {}));
            }
            D = { Lb: D.Lb };
        } }
        function f() {
            var x = y(), z = x.Xe, A = x.Ye, C = z / v.scrollWidth * 100, E = A / v.scrollHeight * 100;
            e(z, "horiz.pix", r.wd, t.lg);
            e(C, "horiz.pct", r.vd, t.lg);
            e(A, "vert.pix", r.wd, t.wg);
            e(E, "vert.pct", r.vd, t.wg);
            Hs("sdl", "pending", !1);
        }
        function g() { var x = 250, z = !1; q.scrollingElement && q.documentElement && u.addEventListener && (x = 50, z = !0); var A = 0, C = !1, E = function () { C ? A = dt(E, x) : (A = 0, f(), ot("sdl") && !a() && (gc(u, "scroll", D), gc(u, "resize", D), Hs("sdl", "init", !1))); C = !1; }, D = function () { z && y(); A ? C = !0 : (A = dt(E, x), Hs("sdl", "pending", !0)); }; return D; }
        function h(x, z, A) {
            if (z) {
                var C = b(String(x));
                Is("sdl", A, function (E) {
                    for (var D = 0; D < C.length; D++) {
                        var F = String(C[D]);
                        E.hasOwnProperty(F) || (E[F] = []);
                        E[F].push(z);
                    }
                    return E;
                }, {});
            }
        }
        function k(x) { return Js("sdl", x, {}); }
        function n(x) {
            I(x.vtp_gtmOnSuccess);
            var z = x.vtp_uniqueTriggerId, A = x.vtp_horizontalThresholdsPixels, C = x.vtp_horizontalThresholdsPercent, E = x.vtp_verticalThresholdUnits, D = x.vtp_verticalThresholdsPixels, F = x.vtp_verticalThresholdsPercent;
            switch (x.vtp_horizontalThresholdUnits) {
                case r.wd:
                    h(A, z, "horiz.pix");
                    break;
                case r.vd: h(C, z, "horiz.pct");
            }
            switch (E) {
                case r.wd:
                    h(D, z, "vert.pix");
                    break;
                case r.vd: h(F, z, "vert.pct");
            }
            ot("sdl") ? Js("sdl", "pending") || (w || (d(), w = !0), I(function () { return f(); })) : (d(), w = !0, v && (pt("sdl"), Hs("sdl", "pending", !0), I(function () { f(); if (a()) {
                var N = g();
                fc(u, "scroll", N);
                fc(u, "resize", N);
            }
            else
                Hs("sdl", "init", !1); })));
        }
        var p = /^\s*$/, r = { vd: "PERCENT", wd: "PIXELS" }, t = { wg: "vertical", lg: "horizontal" }, u, q, v, w = !1, y;
        (function (x) { Y.__sdl = x; Y.__sdl.m = "sdl"; Y.__sdl.isVendorTemplate = !0; Y.__sdl.priorityOverride = 0; })(function (x) { x.vtp_triggerStartOption ? n(x) : Wr(function () { n(x); }); });
    }();
    Y.h.read_container_data = ["google"], function () { (function (a) { Y.__read_container_data = a; Y.__read_container_data.m = "read_container_data"; Y.__read_container_data.isVendorTemplate = !0; Y.__read_container_data.priorityOverride = 0; })(function () { return { assert: function () { }, P: function () { return {}; } }; }); }();
    Y.h.c = ["google"], function () { (function (a) { Y.__c = a; Y.__c.m = "c"; Y.__c.isVendorTemplate = !0; Y.__c.priorityOverride = 0; })(function (a) { rt(a.vtp_value, "c", a.vtp_gtmEventId); return a.vtp_value; }); }();
    Y.h.e = ["google"], function () { (function (a) { Y.__e = a; Y.__e.m = "e"; Y.__e.isVendorTemplate = !0; Y.__e.priorityOverride = 0; })(function (a) { var b = String(vh(a.vtp_gtmEventId, "event")); a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event)); return b; }); }();
    Y.h.u = ["google"], function () {
        var a = function (b) { return { toString: function () { return b; } }; };
        (function (b) { Y.__u = b; Y.__u.m = "u"; Y.__u.isVendorTemplate = !0; Y.__u.priorityOverride = 0; })(function (b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : it("gtm.url", 1)) || ft();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d)
                return ht(String(c));
            var e = vj(String(c)), f;
            if ("QUERY" === d)
                a: {
                    var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "", k = b[a("vtp_ignoreEmptyQueryParam").toString()], n;
                    g ? Ia(h) ?
                        n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var r = tj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != r && (!k || "" !== r)) {
                            f = r;
                            break a;
                        }
                    }
                    f = void 0;
                }
            else
                f = tj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
            return f;
        });
    }();
    Y.h.v = ["google"], function () { (function (a) { Y.__v = a; Y.__v.m = "v"; Y.__v.isVendorTemplate = !0; Y.__v.priorityOverride = 0; })(function (a) { var b = a.vtp_name; if (!b || !b.replace)
        return !1; var c = it(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue; rt(d, "v", a.vtp_gtmEventId); return d; }); }();
    Y.h.ytl = ["google"], function () {
        function a() { var q = Math.round(1E9 * Math.random()) + ""; return H.getElementById(q) ? a() : q; }
        function b(q, v) { if (!q)
            return !1; for (var w = 0; w < p.length; w++)
            if (0 <= q.indexOf("//" + p[w] + "/" + v))
                return !0; return !1; }
        function c(q, v) {
            var w = q.getAttribute("src");
            if (b(w, "embed/")) {
                if (0 < w.indexOf("enablejsapi=1"))
                    return !0;
                if (v) {
                    var y = q.setAttribute, x;
                    var z = -1 !== w.indexOf("?") ? "&" : "?";
                    if (-1 < w.indexOf("origin="))
                        x = w + z + "enablejsapi=1";
                    else {
                        if (!t) {
                            var A = V("document");
                            t = A.location.protocol + "//" + A.location.hostname;
                            A.location.port && (t += ":" + A.location.port);
                        }
                        x = w + z + "enablejsapi=1&origin=" + encodeURIComponent(t);
                    }
                    y.call(q, "src", x);
                    return !0;
                }
            }
            return !1;
        }
        function d(q, v) { if (!q.getAttribute("data-gtm-yt-inspected-" + v.Cf) && (q.setAttribute("data-gtm-yt-inspected-" + v.Cf, "true"), c(q, v.Ic))) {
            q.id || (q.id = a());
            var w = V("YT"), y = w.get(q.id);
            y || (y = new w.Player(q.id));
            var x = f(y, v), z = {}, A;
            for (A in x)
                z.kc = A, x.hasOwnProperty(z.kc) && y.addEventListener(z.kc, function (C) { return function (E) { return x[C.kc](E.data); }; }(z)), z = { kc: z.kc };
        } }
        function e(q) {
            I(function () {
                function v() {
                    for (var y = w.getElementsByTagName("iframe"), x = y.length, z = 0; z < x; z++)
                        d(y[z], q);
                }
                var w = V("document");
                v();
                Rs(v);
            });
        }
        function f(q, v) {
            var w, y;
            function x() { P = bt(function () { return { url: L, title: T, Ze: K, Jg: q.getCurrentTime(), playbackRate: Z }; }, v.Cf, q.getIframe()); K = 0; T = L = ""; Z = 1; return z; }
            function z(U) {
                switch (U) {
                    case r.PLAYING:
                        K = Math.round(q.getDuration());
                        L = q.getVideoUrl();
                        if (q.getVideoData) {
                            var ka = q.getVideoData();
                            T = ka ? ka.title : "";
                        }
                        Z = q.getPlaybackRate();
                        v.Te ? jt(P.createEvent("start")) : P.Zb();
                        O = k(v.vf, v.uf, q.getDuration());
                        return A(U);
                    default: return z;
                }
            }
            function A() { ia = q.getCurrentTime(); Da = et().getTime(); P.jh(); M(); return C; }
            function C(U) { var ka; switch (U) {
                case r.ENDED: return D(U);
                case r.PAUSED: ka = "pause";
                case r.BUFFERING:
                    var Fa = q.getCurrentTime() - ia;
                    ka = 1 < Math.abs((et().getTime() - Da) / 1E3 * Z - Fa) ? "seek" : ka || "buffering";
                    q.getCurrentTime() && (v.Se ? jt(P.createEvent(ka)) : P.Zb());
                    N();
                    return E;
                case r.UNSTARTED: return x(U);
                default: return C;
            } }
            function E(U) {
                switch (U) {
                    case r.ENDED: return D(U);
                    case r.PLAYING: return A(U);
                    case r.UNSTARTED: return x(U);
                    default: return E;
                }
            }
            function D() { for (; y;) {
                var U = w;
                ct(y);
                U();
            } v.Re && jt(P.createEvent("complete", 1)); return x(r.UNSTARTED); }
            function F() { }
            function N() { y && (ct(y), y = 0, w = F); }
            function M() { if (O.length && 0 !== Z) {
                var U = -1, ka;
                do {
                    ka = O[0];
                    if (ka.ca > q.getDuration())
                        return;
                    U = (ka.ca - q.getCurrentTime()) / Z;
                    if (0 > U && (O.shift(), 0 === O.length))
                        return;
                } while (0 > U);
                w = function () { y = 0; w = F; 0 < O.length && O[0].ca === ka.ca && (O.shift(), jt(P.createEvent("progress", ka.Rc, ka.Uc))); M(); };
                y = dt(w, 1E3 * U);
            } }
            var P, O = [], K, L, T, Z, ia, Da, Ba = x(r.UNSTARTED);
            y = 0;
            w = F;
            return { onStateChange: function (U) { Ba = Ba(U); }, onPlaybackRateChange: function (U) { ia = q.getCurrentTime(); Da = et().getTime(); P.Zb(); Z = U; N(); M(); } };
        }
        function g(q) { for (var v = q.split(","), w = v.length, y = [], x = 0; x < w; x++) {
            var z = parseInt(v[x], 10);
            isNaN(z) || 100 < z || 0 > z || y.push(z / 100);
        } y.sort(function (A, C) { return A - C; }); return y; }
        function h(q) { for (var v = q.split(","), w = v.length, y = [], x = 0; x < w; x++) {
            var z = parseInt(v[x], 10);
            isNaN(z) || 0 > z || y.push(z);
        } y.sort(function (A, C) { return A - C; }); return y; }
        function k(q, v, w) {
            var y = q.map(function (A) {
                return { ca: A,
                    Uc: A, Rc: void 0 };
            });
            if (!v.length)
                return y;
            var x = v.map(function (A) { return { ca: A * w, Uc: void 0, Rc: A }; });
            if (!y.length)
                return x;
            var z = y.concat(x);
            z.sort(function (A, C) { return A.ca - C.ca; });
            return z;
        }
        function n(q) {
            var v = !!q.vtp_captureStart, w = !!q.vtp_captureComplete, y = !!q.vtp_capturePause, x = g(q.vtp_progressThresholdsPercent + ""), z = h(q.vtp_progressThresholdsTimeInSeconds + ""), A = !!q.vtp_fixMissingApi;
            if (v || w || y || x.length || z.length) {
                var C = { Te: v, Re: w, Se: y, uf: x, vf: z, Ic: A, Cf: void 0 === q.vtp_uniqueTriggerId ? "" : q.vtp_uniqueTriggerId }, E = V("YT"), D = function () { e(C); };
                I(q.vtp_gtmOnSuccess);
                if (E)
                    E.ready && E.ready(D);
                else {
                    var F = V("onYouTubeIframeAPIReady");
                    kt("onYouTubeIframeAPIReady", function () { F && F(); D(); });
                    I(function () { for (var N = V("document"), M = N.getElementsByTagName("script"), P = M.length, O = 0; O < P; O++) {
                        var K = M[O].getAttribute("src");
                        if (b(K, "iframe_api") || b(K, "player_api"))
                            return;
                    } for (var L = N.getElementsByTagName("iframe"), T = L.length, Z = 0; Z < T; Z++)
                        if (!u && c(L[Z], C.Ic)) {
                            S("https://www.youtube.com/iframe_api");
                            u = !0;
                            break;
                        } });
                }
            }
            else
                I(q.vtp_gtmOnSuccess);
        }
        var p = ["www.youtube.com", "www.youtube-nocookie.com"], r = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 }, t, u = !1;
        (function (q) { Y.__ytl = q; Y.__ytl.m = "ytl"; Y.__ytl.isVendorTemplate = !0; Y.__ytl.priorityOverride = 0; })(function (q) { q.vtp_triggerStartOption ? n(q) : im(function () { n(q); }); });
    }();
    Y.h.aev = ["google"], function () {
        function a(u, q, v) { var w = u || vh(q, "gtm"); if (w)
            return w[v]; }
        function b(u, q, v, w, y) { y || (y = "element"); var x = q + "." + v, z; if (p.hasOwnProperty(x))
            z = p[x];
        else {
            var A = a(u, q, y);
            if (A && (z = w(A), p[x] = z, r.push(x), 35 < r.length)) {
                var C = r.shift();
                delete p[C];
            }
        } return z; }
        function c(u, q, v, w) { var y = a(u, q, t[v]); return void 0 !== y ? y : w; }
        function d(u, q) {
            if (!u)
                return !1;
            var v = e(ft());
            Ia(q) || (q = String(q || "").replace(/\s+/g, "").split(","));
            for (var w = [v], y = 0; y < q.length; y++) {
                var x = q[y];
                if (x.hasOwnProperty("is_regex"))
                    if (x.is_regex)
                        try {
                            x =
                                new RegExp(x.domain);
                        }
                        catch (A) {
                            continue;
                        }
                    else
                        x = x.domain;
                if (x instanceof RegExp) {
                    if (x.test(u))
                        return !1;
                }
                else {
                    var z = x;
                    if (0 != z.length) {
                        if (0 <= e(u).indexOf(z))
                            return !1;
                        w.push(e(z));
                    }
                }
            }
            return !Ow(u, w);
        }
        function e(u) { n.test(u) || (u = "http://" + u); return tj(vj(u), "HOST", !0); }
        function f(u, q, v, w) {
            switch (u) {
                case "SUBMIT_TEXT": return b(q, v, "FORM." + u, g, "formSubmitElement") || w;
                case "LENGTH":
                    var y = b(q, v, "FORM." + u, h);
                    return void 0 === y ? w : y;
                case "INTERACTED_FIELD_ID": return k(q, v, "id", w);
                case "INTERACTED_FIELD_NAME": return k(q, v, "name", w);
                case "INTERACTED_FIELD_TYPE": return k(q, v, "type", w);
                case "INTERACTED_FIELD_POSITION":
                    var x = a(q, v, "interactedFormFieldPosition");
                    return void 0 === x ? w : x;
                case "INTERACT_SEQUENCE_NUMBER":
                    var z = a(q, v, "interactSequenceNumber");
                    return void 0 === z ? w : z;
                default: return w;
            }
        }
        function g(u) { switch (u.tagName.toLowerCase()) {
            case "input": return hc(u, "value");
            case "button": return kc(u);
            default: return null;
        } }
        function h(u) {
            if ("form" === u.tagName.toLowerCase() && u.elements) {
                for (var q = 0, v = 0; v < u.elements.length; v++)
                    Ms(u.elements[v]) &&
                        q++;
                return q;
            }
        }
        function k(u, q, v, w) { var y = a(u, q, "interactedFormField"); return y && hc(y, v) || w; }
        var n = /^https?:\/\//i, p = {}, r = [], t = { ATTRIBUTE: "elementAttribute", CLASSES: "elementClasses", ELEMENT: "element", ID: "elementId", HISTORY_CHANGE_SOURCE: "historyChangeSource", HISTORY_NEW_STATE: "newHistoryState", HISTORY_NEW_URL_FRAGMENT: "newUrlFragment", HISTORY_OLD_STATE: "oldHistoryState", HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment", TARGET: "elementTarget" };
        (function (u) {
            Y.__aev = u;
            Y.__aev.m = "aev";
            Y.__aev.isVendorTemplate = !0;
            Y.__aev.priorityOverride = 0;
        })(function (u) {
            var q = u.vtp_gtmEventId, v = u.vtp_defaultValue, w = u.vtp_varType, y;
            u.vtp_gtmCachedValues && (y = u.vtp_gtmCachedValues.gtm);
            switch (w) {
                case "TAG_NAME":
                    var x = a(y, q, "element");
                    return x && x.tagName || v;
                case "TEXT": return b(y, q, w, kc) || v;
                case "URL":
                    var z;
                    a: {
                        var A = String(a(y, q, "elementUrl") || v || ""), C = vj(A), E = String(u.vtp_component || "URL");
                        switch (E) {
                            case "URL":
                                z = A;
                                break a;
                            case "IS_OUTBOUND":
                                z = d(A, u.vtp_affiliatedDomains);
                                break a;
                            default: z = tj(C, E, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey);
                        }
                    }
                    return z;
                case "ATTRIBUTE":
                    var D;
                    if (void 0 === u.vtp_attribute)
                        D = c(y, q, w, v);
                    else {
                        var F = u.vtp_attribute, N = a(y, q, "element");
                        D = N && hc(N, F) || v || "";
                    }
                    return D;
                case "MD":
                    var M = u.vtp_mdValue, P = b(y, q, "MD", Ys);
                    return M && P ? at(P, M) || v : P || v;
                case "FORM": return f(String(u.vtp_component || "SUBMIT_TEXT"), y, q, v);
                default:
                    var O = c(y, q, w, v);
                    rt(O, "aev", u.vtp_gtmEventId);
                    return O;
            }
        });
    }();
    Y.h.dlm = ["google"], function () { (function (a) { Y.__dlm = a; Y.__dlm.m = "dlm"; Y.__dlm.isVendorTemplate = !0; Y.__dlm.priorityOverride = 0; })(function (a) { var b = Pw(a.vtp_userInput || [], "key", "value") || {}; a.vtp_synchronousWrite ? Oa(b, function (c, d) { rh(c, d); }) : jt(b); I(a.vtp_gtmOnSuccess); }); }();
    Y.h.gct = ["google"], function () {
        function a(d) { for (var e = [], f = 0; f < d.length; f++)
            try {
                e.push(new RegExp(d[f]));
            }
            catch (g) { } return e; }
        function b(d) { return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); }
        function c(d) { for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].matchValue, h;
            switch (d[f].matchType) {
                case "BEGINS_WITH":
                    h = "^" + b(g);
                    break;
                case "ENDS_WITH":
                    h = b(g) + "$";
                    break;
                case "EQUALS":
                    h = "^" + b(g) + "$";
                    break;
                case "REGEX":
                    h = g;
                    break;
                default: h = b(g);
            }
            e.push(h);
        } return e; }
        (function (d) {
            Y.__gct = d;
            Y.__gct.m = "gct";
            Y.__gct.isVendorTemplate =
                !0;
            Y.__gct.priorityOverride = 0;
        })(function (d) {
            var e = {};
            0 < d.vtp_sessionDuration && (e[R.vc] = d.vtp_sessionDuration);
            e[R.gd] = d.vtp_eventSettings;
            e[R.me] = d.vtp_dynamicEventSettings;
            e[R.eb] = 1 === d.vtp_googleSignals;
            e[R.kd] = d.vtp_foreignTld;
            e[R.Sb] = 1 === d.vtp_restrictDomain;
            e[R.ve] = d.vtp_internalTrafficResults;
            var f = R.ja, g = d.vtp_linker;
            g && g[R.O] && (g[R.O] = a(g[R.O]));
            e[f] = g;
            var h = R.nd, k = d.vtp_referralExclusionDefinition;
            k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
            e[h] = k;
            var n = wr(d.vtp_trackingId), p = n.referral_exclusion_conditions;
            p && (p.length && "object" === typeof p[0] && (p = c(p)), e[R.nd] = { include_conditions: a(p) });
            var r = n.cross_domain_conditions;
            if (r) {
                r.length && "object" === typeof r[0] && (r = c(r));
                var t = {};
                e[R.ja] = (t[R.O] = a(r), t[R.vb] = !0, t[R.Tb] = !0, t[R.Ub] = "query", t);
            }
            Iz(d.vtp_trackingId, e);
            I(d.vtp_gtmOnSuccess);
        });
    }();
    Y.h.get = ["google"], function () { (function (a) { Y.__get = a; Y.__get.m = "get"; Y.__get.isVendorTemplate = !0; Y.__get.priorityOverride = 0; })(function (a) { var b = a.vtp_settings; (a.vtp_deferrable ? Fz : Ez)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {}); a.vtp_gtmOnSuccess(); }); }();
    Y.h.lcl = [], function () {
        function a() {
            var c = V("document"), d = 0, e = function (f) {
                var g = f.target;
                if (g && 3 !== f.which && !(f.jf || f.timeStamp && f.timeStamp === d)) {
                    d = f.timeStamp;
                    g = mc(g, ["a", "area"], 100);
                    if (!g)
                        return f.returnValue;
                    var h = f.defaultPrevented || !1 === f.returnValue, k = Js("lcl", h ? "nv.mwt" : "mwt", 0), n;
                    n = h ? Js("lcl", "nv.ids", []) : Js("lcl", "ids", []);
                    if (n.length) {
                        var p = Fs(g, "gtm.linkClick", n);
                        if (b(f, g, c) && !h && k && g.href) {
                            var r = !!Ja(String(oc(g, "rel") || "").split(" "), function (v) { return "noreferrer" === v.toLowerCase(); });
                            r && Ug(36);
                            var t = V((oc(g, "target") || "_self").substring(1)), u = !0, q = ss(function () { var v; if (v = u && t) {
                                var w;
                                a: if (r) {
                                    var y;
                                    try {
                                        y = new MouseEvent(f.type, { bubbles: !0 });
                                    }
                                    catch (x) {
                                        if (!c.createEvent) {
                                            w = !1;
                                            break a;
                                        }
                                        y = c.createEvent("MouseEvents");
                                        y.initEvent(f.type, !0, !0);
                                    }
                                    y.jf = !0;
                                    f.target.dispatchEvent(y);
                                    w = !0;
                                }
                                else
                                    w = !1;
                                v = !w;
                            } v && (t.location.href = oc(g, "href")); }, k);
                            if (jt(p, q, k))
                                u = !1;
                            else
                                return f.preventDefault && f.preventDefault(), f.returnValue = !1;
                        }
                        else
                            jt(p, function () { }, k || 2E3);
                        return !0;
                    }
                }
            };
            fc(c, "click", e, !1);
            fc(c, "auxclick", e, !1);
        }
        function b(c, d, e) { if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
            return !1; var f = oc(d, "href"), g = f.indexOf("#"), h = oc(d, "target"); if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g)
            return !1; if (0 < g) {
            var k = ht(f), n = ht(e.location);
            return k !== n;
        } return !0; }
        (function (c) { Y.__lcl = c; Y.__lcl.m = "lcl"; Y.__lcl.isVendorTemplate = !0; Y.__lcl.priorityOverride = 0; })(function (c) {
            var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags, e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation, f = Number(c.vtp_waitForTagsTimeout);
            if (!f || 0 >= f)
                f = 2E3;
            var g = c.vtp_uniqueTriggerId || "0";
            if (d) {
                var h = function (n) { return Math.max(f, n); };
                Is("lcl", "mwt", h, 0);
                e || Is("lcl", "nv.mwt", h, 0);
            }
            var k = function (n) { n.push(g); return n; };
            Is("lcl", "ids", k, []);
            e || Is("lcl", "nv.ids", k, []);
            ot("lcl") || (a(), pt("lcl"));
            I(c.vtp_gtmOnSuccess);
        });
    }();
    var Jz = {};
    Jz.dataLayer = ph;
    Jz.callback = function (a) { fh.hasOwnProperty(a) && Ea(fh[a]) && fh[a](); delete fh[a]; };
    Jz.bootstrap = 0;
    Jz._spx = !1;
    function Kz() { Vg[J.J] = Jz; db(gh, Y.h); bf = qf; }
    function Lz() {
        var a = !1;
        a && qm("INIT");
        Nh().g(Ih.g);
        Vg = m.google_tag_manager = m.google_tag_manager || {};
        Do();
        jl.enable_gbraid_cookie_write = !0;
        var b = !!Vg[J.J];
        if (b) {
            var c = Vg.zones;
            c && c.unregisterChild(J.J);
        }
        else {
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++)
                Ue.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++)
                Xe.push(k[n]);
            for (var p = f.predicates || [], r = 0; r < p.length; r++)
                We.push(p[r]);
            for (var t = f.rules || [], u = 0; u < t.length; u++) {
                for (var q = t[u], v = {}, w = 0; w < q.length; w++)
                    v[q[w][0]] = Array.prototype.slice.call(q[w], 1);
                Ve.push(v);
            }
            Ze = Y;
            $e = Tt;
            xf = new wf;
            var y = data.sandboxed_scripts, x = data.security_groups, z = data.runtime || [], A = data.runtime_lines;
            Hw = new me;
            Kw();
            Te = Iw();
            var C = Hw, E = Ew();
            vb(C.g, "require", E);
            for (var D = 0; D < z.length; D++) {
                var F = z[D];
                if (!Ia(F) || 3 > F.length) {
                    if (0 === F.length)
                        continue;
                    break;
                }
                A && A[D] && A[D].length && jf(F, A[D]);
                Hw.execute(F);
            }
            if (void 0 !== y)
                for (var N = ["sandboxedScripts"], M = 0; M < y.length; M++) {
                    var P = y[M].replace(/^_*/, "");
                    gh[P] = N;
                }
            Lw(x);
            Kz();
            ys();
            dm = !1;
            em = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState)
                gm();
            else {
                fc(H, "DOMContentLoaded", gm);
                fc(H, "readystatechange", gm);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var O = !0;
                    try {
                        O = !m.frameElement;
                    }
                    catch (ia) { }
                    O && hm();
                }
                fc(m, "load", gm);
            }
            Tr = !1;
            "complete" === H.readyState ? Vr() : fc(m, "load", Vr);
            nn && m.setInterval(gn, 864E5);
            dh = (new Date).getTime();
            Jz.bootstrap = dh;
            if (a) {
                var Z = rm("INIT");
            }
        }
    }
    (function (a) {
        if (!m["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = vj(H.referrer);
                b = "cct.google" === sj(c, "host");
            }
            if (!b) {
                var d = Xj("googTaggyReferrer");
                b = d.length && d[0].length;
            }
            b && (m["__TAGGY_INSTALLED"] = !0, bc("https://cct.google/taggy/agent.js"));
        }
        var f = function (r) {
            var t = "GTM", u = "GTM";
            t = "OGT", u = "GTAG";
            var q = m["google.tagmanager.debugui2.queue"];
            q || (q = [], m["google.tagmanager.debugui2.queue"] = q, bc("https://" + J.Zd + "/debug/bootstrap?id=" + J.J + "&src=" + u + "&cond=" + r + "&gtm=" + $n()));
            var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: Xb,
                    containerProduct: t, debug: !1, id: J.J } };
            v.data.resume = function () { a(); };
            J.Dh && (v.data.initialPublish = !0);
            q.push(v);
        }, g = void 0, h = tj(m.location, "query", !1, void 0, "gtm_debug");
        zs(h) && (g = 2);
        if (!g && H.referrer) {
            var k = vj(H.referrer);
            "tagassistant.google.com" === sj(k, "host") && (g = 3);
        }
        if (!g) {
            var n = Xj("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4);
        }
        if (!g) {
            var p = H.documentElement.getAttribute("data-tag-assistant-present");
            zs(p) && (g = 5);
        }
        g && Xb ? f(g) : a();
    })(Lz);
})();
