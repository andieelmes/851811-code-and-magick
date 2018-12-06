'use strict';

(function () {
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var setupElement = document.querySelector('.setup');

  window.vars = {
    EYE_COLORS: EYE_COLORS,
    COAT_COLORS: COAT_COLORS,
    setupElement: setupElement
  };
})();
