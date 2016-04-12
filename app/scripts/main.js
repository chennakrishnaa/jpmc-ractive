require.config({
  paths: {
    'amd-loader': '../../bower_components/requirejs-ractive/vendor/amd-loader',
    rv: '../../bower_components/requirejs-ractive/rv',
    ractive: '../../bower_components/ractive/ractive',
    TweenLite: '../../bower_components/gsap/src/uncompressed/TweenLite',
    jquery: '../../bower_components/jQuery/dist/jquery',
    CSSPlugin: '../../bower_components/gsap/src/uncompressed/plugins/CSSPlugin',
    components: '../components',
    labelauty: '../bower_components/jquery-labelauty/source/jquery-labelauty',
    dropdown: '../bower_components/bootstrap/js/dropdown',
    router: '../bower_components/router.js/src/router',
    about: '../views/about'
  },
  packages: 
    ['about']
  ,
  shim: {
    labelauty: {
      deps: ['jquery'],
      exports: 'Labelauty'
    },
    dropdown: {
      deps: ['jquery']
    }
  }
});
require(['app', 'router'], function(poc, Router) {
  'use strict';
  poc.init();
  var router = new Router();
  router.get('#about', function(req, next) {
    require(['../views/about/main'], function(About) {
      var aboutYouSelf = new About({ el: '#MainContent' });
    });
  });

});
/*
require(['app', 'components/question/main', 'components/question1/main', 'dropdown'], function (Poc, Question, Question1) {
    'use strict';
    //var rv = require('rv');
    var data = {
        question1: 'My investment objective is primarly',
        Options1: [
            {option: 'Current income ', value:'1' },
            {option: 'Capital Appreciation', value:'2' }
          ],
        question2: 'and secondly',
        Options2:[
            {option: 'Current income ', value:'1' },
            {option: 'Capital Appreciation', value:'2' },
            {option: 'Nothing Else', value:'3' }
        ]
        };
    //var question = new Question({ el: '.question', data: data});
    //*question.observe('selected', function (newValue, oldValue, keyPath) {
        console.log(newValue);
      });
     //*
    var question1 = new Question1({ el: '.question1', data: data});
   
      $(".dropdown-menu").on('click', 'li a', function () {
        var $this = $(this);
        $this.parents('.dropup').find(".btn").text($(this).text());
        $this.parents('.dropup').find(".btn").val($(this).text());
   });
    //$(':radio').labelauty();
    Poc.init();
  });
*/