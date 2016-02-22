'use strict';

angular.module('biofuels.sections.newBatch.controller', [])
  .controller('newBatchCtrl',
    function ($log) {
      (function (vm) {
        $log.debug('This is from the home page');
        vm.hello = 'hello';
      })(this);
    });
