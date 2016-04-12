define(['ractive', 'rv!about/about'], function (Ractive, about) {

  'use strict';

  return Ractive.extend({
    template: about,
  });
 
});