'use strict';

(function () {
  var coatColor;
  var eyesColor;
  var fireballColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += window.vars.Ranks['colorCoat'];
    }
    if (wizard.colorEyes === eyesColor) {
      rank += window.vars.Ranks['colorEyes'];
    }
    if (wizard.fireballColor === fireballColor) {
      rank += window.vars.Ranks['colorFireball'];
    }

    return rank;
  };

  var onEyesChange = window.utils.debounce(function (color) {
    eyesColor = color;
    window.similar.updateWizards(window.vars.wizards);
  });

  var onCoatChange = window.utils.debounce(function (color) {
    coatColor = color;
    window.similar.updateWizards(window.vars.wizards);
  });

  var onFireballChange = window.utils.debounce(function (color) {
    fireballColor = color;
    window.similar.updateWizards(window.vars.wizards);
  });

  var updateWizards = function () {
    window.populateDom(window.vars.wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = window.vars.wizards.indexOf(left) - window.vars.wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  window.similar = {
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange,
    onFireballChange: onFireballChange,
    updateWizards: updateWizards,
  };

})();
