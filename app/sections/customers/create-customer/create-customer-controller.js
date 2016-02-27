'use strict';

angular.module('biofuels.sections.createCustomer.controller', [])
  .controller('createCustomerCtrl',
    function ($log) {
      (function (vm) {
        $log.debug('This is from the home page');
        vm.customerData = {
          PONumbers: []
        };
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
          return {abbrev: state};
        });

        vm.addToPOList = function (poNumber) {
          if (!vm.customerData.PONumbers.includes(poNumber) && poNumber)
            vm.customerData.PONumbers.push(poNumber);
        };

        vm.removeFromPOList = function (poNumber) {
          vm.customerData.PONumbers.pop(poNumber);
        };

        vm.createCustomer = function () {
          $log.debug('Create this customer');
        };
      })(this);
    });
