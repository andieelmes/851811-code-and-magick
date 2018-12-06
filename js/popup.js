'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupSimilarElement = window.SETUP_ELEMENT.querySelector('.setup-similar');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = window.SETUP_ELEMENT.querySelector('.setup-close');
  var setupUserNameElement = window.SETUP_ELEMENT.querySelector('.setup-user-name');

  window.showSetup = function () {
    setupSimilarElement.classList.remove('hidden');
  };

  var onPopupEscPress = function (e) {
    if (e.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.SETUP_ELEMENT.classList.remove('hidden');

    window.SETUP_ELEMENT.style.top = '';
    window.SETUP_ELEMENT.style.left = '';

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.SETUP_ELEMENT.classList.add('hidden');
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

})();
