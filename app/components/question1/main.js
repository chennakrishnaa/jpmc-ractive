define(['ractive', './question1','rv!./question1'], function (Ractive, question, questionTemplate) {

    'use strict';

    var Clock = Ractive.extend({
        template: questionTemplate,
        data: question
        });
    return Clock;

  });