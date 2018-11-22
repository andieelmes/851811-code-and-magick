'use strict';

var numberOfWizards = 4;
var wizards = [];

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilar = setup.querySelector('.setup-similar');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomElement(array) {
  return array[getRandomInt(array.length)];
}

function makeWizard() {
  var wizard = {};
  var firstName = getRandomElement(firstNames);
  var lastName = getRandomElement(lastNames);
  wizard.name = getRandomInt(2) === 0 ? firstName + ' ' + lastName : lastName + ' ' + firstName;
  wizard.coatColor = getRandomElement(coatColors);
  wizard.eyesColor = getRandomElement(eyeColors);

  return wizard;
}


for (var i = 0; i < numberOfWizards; i++) {
  var newWizard = makeWizard();
  wizards.push(newWizard);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var populateDom = function () {
  var fragment = document.createDocumentFragment();
  for (var y = 0; y < wizards.length; y++) {
    fragment.appendChild(renderWizard(wizards[y]));
  }
  similarListElement.appendChild(fragment);
};

populateDom();

setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
