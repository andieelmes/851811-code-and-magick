'use strict';

var init = function () {
  var wizards = window.generateWizards();
  window.populateDom(wizards);
  window.showSetup();
  window.subscribeColorChanges();
};

init();
