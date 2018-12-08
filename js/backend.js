'use strict';

(function () {
  var addXhrEvents = function (xhr, onLoad, onError) {
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s
  };

  var makeXhr = function (type, URL, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    addXhrEvents(xhr, onLoad, onError);
    xhr.open(type, URL);

    return xhr;
  };

  var makeJsonp = function (URL, onload, onError) {
    var onLoad = onload;
    var CALLBACK_NAME = onLoad.name;
    var loader = document.createElement('script');
    loader.src = URL + '?callback=' + CALLBACK_NAME;

    loader.addEventListener('error', function () {
      onError('Произошла ошибка при загрузке данных');
    });
    document.body.append(loader);
  };

  var load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';

    // var xhr = makeXhr('GET', URL, onLoad, onError);
    // xhr.send();

    makeJsonp(URL, onLoad, onError);
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';

    var xhr = makeXhr('POST', URL, onLoad, onError);
    xhr.send(data);
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend = {
    load: load,
    save: save,
    onError: onError,
  };
})();
