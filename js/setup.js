'use strict';

var init = function () {
  window.onLoad = window.populateDom;

  window.backend.load(window.onLoad, window.backend.onError);
  window.setup.showSetup();
  window.subscribeColorChanges();
};

init();
