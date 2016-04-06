define(['ractive', './question','rv!./question'], function (Ractive, question, questionTemplate) {

    'use strict';

    var Clock = Ractive.extend({
        template: questionTemplate,
        data: question
        });
    return Clock;

  });