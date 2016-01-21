'use strict';

angular.module('biofuels.sections.home.controller', [])
  .controller('homeCtrl',
  function ($log) {
    (function (vm) {
      $log.debug('This is from the home page');
      vm.hello = 'Hello World!';
    })(this);
  });
