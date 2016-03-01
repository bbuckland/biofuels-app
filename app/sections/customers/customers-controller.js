'use strict';

angular.module('biofuels.sections.customers.controller', [])
  .controller('customersCtrl',
    function ($log,
              customerService
    ) {
      (function (vm) {
        $log.debug('This is from the customers page');
        vm.selected = [];
        vm.customers = [];

        function getCustomers () {
          vm.formError = '';
          vm.formResponse = '';
          customerService.getCustomers().then(function (data) {
            vm.formResponse = 'Successfully got customer list!';
            vm.customers = data.data;
            $log.debug(vm.customers.length);
          }).catch(function (err) {
            vm.formError = err.error;
          });

        }

        getCustomers();
      })(this);
    });
