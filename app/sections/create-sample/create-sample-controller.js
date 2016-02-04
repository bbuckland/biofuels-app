'use strict';

angular.module('biofuels.sections.createSample.controller', [])
  .controller('createSampleCtrl',
    function ($log) {
      (function (vm) {
        $log.debug('This is from the home page');
        vm.hello = 'hello';
      })(this);
    });
