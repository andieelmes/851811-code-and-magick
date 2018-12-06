'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  function makeWizard() {
    var wizard = {};
    var firstName = window.utils.getRandomElement(FIRST_NAMES);
    var lastName = window.utils.getRandomElement(LAST_NAMES);
    var fullName = window.utils.getRandomInt(2) === 0 ? firstName + ' ' + lastName : lastName + ' ' + firstName;

    wizard = {
      name: fullName,
      coatColor: window.utils.getRandomElement(window.vars.COAT_COLORS),
      eyesColor: window.utils.getRandomElement(window.vars.EYE_COLORS)
    };

    return wizard;
  }

  window.generateWizards = function () {
    var array = [];

    for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
      var newWizard = makeWizard();
      array.push(newWizard);
    }

    return array;
  };
})();
