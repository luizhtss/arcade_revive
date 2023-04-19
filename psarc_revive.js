// ==UserScript==
// @name         Parsec Arcade Revive
// @version      1
// @description  Reactivate Parsec Arcade
// @author		 LuizHTSS
// @namespace	 https://github.com/luizhtss/arcade_revive
// @match        https://web.parsec.app
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const originalFetch = window.fetch;
    window.fetch = function (url, options) {
        url = new URL(url);
        url.searchParams.set("public", "true");
        url.searchParams.set("mode", "game");
        return originalFetch.call(this, url, options);
    };
})();
