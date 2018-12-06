'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizardElement = window.SETUP_ELEMENT.querySelector('.setup-wizard');

  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardCoatInput = window.SETUP_ELEMENT.querySelector('[name="coat-color"]');

  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var setupWizardEyesInput = window.SETUP_ELEMENT.querySelector('[name="eyes-color"]');

  var setupWizardFireballElement = window.SETUP_ELEMENT.querySelector('.setup-fireball');
  var setupWizardFireballInput = window.SETUP_ELEMENT.querySelector('[name="fireball-color"]');

  var addChangeColorEvent = function (element, input, array, colorStyle) {
    element.addEventListener('click', function () {
      var color = window.getRandomElement(array);
      input.value = color;
      element.style[colorStyle] = color;
    });
  };

  window.subscribeColorChanges = function () {
    addChangeColorEvent(setupWizardCoatElement, setupWizardCoatInput, window.COAT_COLORS, 'fill');
    addChangeColorEvent(setupWizardEyesElement, setupWizardEyesInput, window.EYE_COLORS, 'fill');
    addChangeColorEvent(setupWizardFireballElement, setupWizardFireballInput, FIREBALL_COLORS, 'background-color');
  };

})();
