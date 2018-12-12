'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizardElement = window.vars.setupElement.querySelector('.setup-wizard');

  var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var setupWizardCoatInput = window.vars.setupElement.querySelector('[name="coat-color"]');

  var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var setupWizardEyesInput = window.vars.setupElement.querySelector('[name="eyes-color"]');

  var setupWizardFireballElement = window.vars.setupElement.querySelector('.setup-fireball');
  var setupWizardFireballInput = window.vars.setupElement.querySelector('[name="fireball-color"]');

  var addChangeColorEvent = function (element, input, array, colorStyle, callback) {
    element.addEventListener('click', function () {
      var color = window.utils.getRandomElement(array);
      input.value = color;
      element.style[colorStyle] = color;
      callback(color);
    });
  };

  window.subscribeColorChanges = function () {
    addChangeColorEvent(setupWizardCoatElement, setupWizardCoatInput, window.vars.COAT_COLORS, 'fill', window.similar.onCoatChange);
    addChangeColorEvent(setupWizardEyesElement, setupWizardEyesInput, window.vars.EYE_COLORS, 'fill', window.similar.onEyesChange);
    addChangeColorEvent(setupWizardFireballElement, setupWizardFireballInput, FIREBALL_COLORS, 'background-color', window.similar.onFireballChange);
  };

})();
