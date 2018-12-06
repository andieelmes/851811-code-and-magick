'use strict';

(function () {
  var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  var getRandomElement = function (array) {
    return array[window.utils.getRandomInt(array.length)];
  };

  window.utils = {
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement
  };

})();
