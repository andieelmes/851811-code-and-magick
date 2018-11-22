'use strict';

var NUMBER_OF_WIZARDS = 4;

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setupElement = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarElement = setupElement.querySelector('.setup-similar');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomElement(array) {
  return array[getRandomInt(array.length)];
}

function makeWizard() {
  var wizard = {};
  var firstName = getRandomElement(FIRST_NAMES);
  var lastName = getRandomElement(LAST_NAMES);
  var fullName = getRandomInt(2) === 0 ? firstName + ' ' + lastName : lastName + ' ' + firstName;

  wizard = {
    name: fullName,
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYE_COLORS)
  };

  return wizard;
}

var generateWizards = function (array) {
  for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
    var newWizard = makeWizard();
    array.push(newWizard);
  }

  return array;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var populateDom = function (array) {
  var fragment = document.createDocumentFragment();
  for (var y = 0; y < array.length; y++) {
    fragment.appendChild(renderWizard(array[y]));
  }
  similarListElement.appendChild(fragment);
};


var showSetup = function () {
  setupElement.classList.remove('hidden');
  setupSimilarElement.classList.remove('hidden');
};

var init = function () {
  var wizards = [];
  wizards = generateWizards(wizards);
  populateDom(wizards);
  showSetup();
};

init();
