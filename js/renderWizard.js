'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.populateDom = function (wizards) {
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var y = 0; y < NUMBER_OF_WIZARDS; y++) {
      fragment.appendChild(renderWizard(wizards[y]));
    }
    similarListElement.appendChild(fragment);
  };

})();
