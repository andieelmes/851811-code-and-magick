'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;

  var PADDING = 10;
  var TEXT_PADDING = PADDING;
  var COLUMN_PADDING = TEXT_PADDING * 4;

  var GAP = 50;
  var FONT_GAP = 15;

  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;

  var MIN_OPACITY = 30;
  var MAX_OPACITY = 100;

  var FONT = '16px PT Mono';

  var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
  var TEXT_COLOR = 'black';
  var BG_COLOR = '#fff';
  var BG_COLOR_SECONDARY = 'rgba(0, 0, 0, 0.7)';

  var MESSAGE = ['Ура вы победили!', 'Список результатов:'];

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderTitle = function (ctx, message) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = FONT;

    for (var i = 0; i < message.length; i++) {
      ctx.fillText(message[i], CLOUD_X + TEXT_PADDING * 2, CLOUD_Y + TEXT_PADDING * 3 + FONT_GAP * i);
    }
  };

  var renderColumns = function (ctx, player, columnX, columnY, columnHeight) {
    if (player === 'Вы') {
      ctx.fillStyle = PLAYER_COLOR;
    } else {
      var opacity = (Math.floor(Math.random() * (MAX_OPACITY - MIN_OPACITY)) + MIN_OPACITY) / 100;
      var color = 'rgba(0, 0, 255, ' + opacity + ')';
      ctx.fillStyle = color;
    }

    ctx.fillRect(columnX, columnY, BAR_WIDTH, columnHeight);
  };

  var renderNames = function (ctx, player, columnX, columnY, columnHeight) {
    var textX = columnX;
    var textY = columnY + columnHeight + (TEXT_PADDING * 2);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(player, textX, textY);
  };

  var renderFigure = function (ctx, players, times) {
    var maxTime = getMaxElement(times);

    for (var y = 0; y < players.length; y++) {
      var player = players[y];

      var relativeTime = (BAR_HEIGHT * times[y]) / maxTime;
      var columnHeight = Math.round(relativeTime);
      var columnX = CLOUD_X + COLUMN_PADDING + (GAP + BAR_WIDTH) * y;
      var columnY = CLOUD_Y + CLOUD_HEIGHT - COLUMN_PADDING - columnHeight;

      renderColumns(ctx, player, columnX, columnY, columnHeight);
      renderNames(ctx, player, columnX, columnY, columnHeight);
    }
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + PADDING, CLOUD_Y + PADDING, BG_COLOR_SECONDARY);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, BG_COLOR);
    renderTitle(ctx, MESSAGE);
    renderFigure(ctx, players, times);
  };
})();
