"use strict"

module.exports = isChromeFrame

// chrome frame detection scraped from:
// https://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.js
function isChromeFrame() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chromeframe") >= 0) {
    return true;
  }

  if (typeof window['ActiveXObject'] != 'undefined') {
    try {
      var obj = new ActiveXObject('ChromeTab.ChromeFrame');
      if (obj) {
        return true;
      }
    } catch(e) {
      // squelch
    }
  }
  return false;
}
