'use strict';

var init = function () {
  window.backend.load(window.similar.updateWizards, window.backend.onError);
  window.setup.showSetup();
  window.subscribeColorChanges();
};

init();
