// ==UserScript==
// @name         Airbnb search beautifier
// @namespace    http://docomoz.com
// @version      0.1
// @description  Makes search results map bigger for a better user experience
// @author       Maxim Berezkin
// @match        https://www.airbnb.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function airbnb_beautify() {
        var path = window.location.pathname.substring(1);
        if(/^s\//.test(path)) {
            document.getElementsByClassName('search-results')[1].parentNode.parentNode.parentNode.style.cssText = 'width: 30% !important;';
            document.getElementsByClassName('search-results-map')[0].parentNode.style.cssText = 'width: 70% !important;';
            window.dispatchEvent(new Event('resize'));

            document.getElementsByClassName('gm-bundled-control')[0].style.cssText = 'padding: 70px 0px 0px 10px !important;';
            document.getElementsByClassName('gm-bundled-control')[0].childNodes[0].style.cssText = 'position: inherit !important;';
        }
    }

    window.onload = airbnb_beautify;
    window.addEventListener('click', function() {
        airbnb_beautify();
    }, false);
})();