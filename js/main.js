'use strict';

var init = function () {
  window.backend.load(window.populateDom, window.backend.onError);
  window.setup.showSetup();
  window.subscribeColorChanges();
};

init();
