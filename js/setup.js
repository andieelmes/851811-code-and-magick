'use strict';

var NUMBER_OF_WIZARDS = 4;

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupElement = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarElement = setupElement.querySelector('.setup-similar');

var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupUserNameElement = setupElement.querySelector('.setup-user-name');

var setupWizardElement = setupElement.querySelector('.setup-wizard');

var setupWizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
var setupWizardCoatInput = setupElement.querySelector('[name="coat-color"]');

var setupWizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
var setupWizardEyesInput = setupElement.querySelector('[name="eyes-color"]');

var setupWizardFireballElement = setupElement.querySelector('.setup-fireball');
var setupWizardFireballInput = setupElement.querySelector('[name="fireball-color"]');

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

var generateWizards = function () {
  var array = [];

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
  setupSimilarElement.classList.remove('hidden');
};

var onPopupEscPress = function (e) {
  if (e.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupElement.classList.add('hidden');
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

function addChangeColorEvent(element, input, array, colorStyle) {
  element.addEventListener('click', function () {
    var color = getRandomElement(array);
    input.value = color;
    element.style[colorStyle] = color;
  });
}

function subscribeColorChanges() {
  addChangeColorEvent(setupWizardCoatElement, setupWizardCoatInput, COAT_COLORS, 'fill');
  addChangeColorEvent(setupWizardEyesElement, setupWizardEyesInput, EYE_COLORS, 'fill');
  addChangeColorEvent(setupWizardFireballElement, setupWizardFireballInput, FIREBALL_COLORS, 'background-color');
}

var init = function () {
  var wizards = generateWizards();
  populateDom(wizards);
  showSetup();
  subscribeColorChanges();
};

init();
