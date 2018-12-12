'use strict';

(function () {
  var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  var getRandomElement = function (array) {
    return array[window.utils.getRandomInt(array.length)];
  };

  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, window.vars.DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement,
    debounce: debounce,
  };

})();
