define([
    'ractive', 'jquery', 'TweenLite', 'CSSPlugin'
  ], function (ractive, $, TweenLite, CSSPlugin) {
    'use strict';
    return {
        init: function () {
            console.log($('.diamond-container'));
            TweenLite.to($('.diamond-container'), 1, { opacity: 0, x: 50 });
          }
      };
  });
