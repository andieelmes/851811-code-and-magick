'use strict';

(function () {
  var formElement = document.querySelector('.setup-wizard-form');

  var onLoad = function () {
    window.setup.closePopup();
  };

  var onSubmitForm = function (e) {
    window.backend.save(new FormData(formElement), onLoad, window.backend.onError);
    e.preventDefault();
  };

  formElement.addEventListener('submit', onSubmitForm);

})();
