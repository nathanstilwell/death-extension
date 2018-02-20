'use strict';

(function () {
  // Using Programatic injection to load a script
  // https://developer.chrome.com/extensions/content_scripts#pi
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "inject-script.js"});
  });
})()
