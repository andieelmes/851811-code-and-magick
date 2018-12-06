'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupSimilarElement = window.vars.setupElement.querySelector('.setup-similar');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = window.vars.setupElement.querySelector('.setup-close');
  var setupUserNameElement = window.vars.setupElement.querySelector('.setup-user-name');

  var onPopupEscPress = function (e) {
    if (e.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.vars.setupElement.classList.remove('hidden');

    window.vars.setupElement.style.top = '';
    window.vars.setupElement.style.left = '';

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.vars.setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenElement.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  setupUserNameElement.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  setupUserNameElement.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  window.showSetup = function () {
    setupSimilarElement.classList.remove('hidden');
  };

})();
