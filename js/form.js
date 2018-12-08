'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');

  var onLoad = function () {
    window.setup.hideSetup();
  };

  var sendForm = function (e) {
    window.backend.save(new FormData(form), onLoad, window.backend.onError);
    e.preventDefault();
  };

  form.addEventListener('submit', sendForm);

})();
