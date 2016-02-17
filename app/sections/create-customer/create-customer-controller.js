'use strict';

angular.module('biofuels.sections.createCustomer.controller', [])
  .controller('createCustomerCtrl',
    function ($log) {
      (function (vm) {
        $log.debug('This is from the home page');
        vm.hello = 'hello';
      })(this);
    });
