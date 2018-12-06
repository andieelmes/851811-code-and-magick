'use strict';

(function () {
  window.getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  window.getRandomElement = function (array) {
    return array[window.getRandomInt(array.length)];
  };

})();
