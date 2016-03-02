'use strict';

angular.module('biofuels.sections.createCustomer.controller', [])
  .controller('createCustomerCtrl',
    function ($log,
              customerService,
              $state,
              ROUTES
    ) {
      (function (vm) {
        $log.debug('This is from the home page');
        vm.customerData = {
          PONumbers: [],
        };
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
          return {abbrev: state};
        });

        vm.addToPOList = function (poNumber) {
          if (!vm.customerData.PONumbers.includes(poNumber) && poNumber) {
            vm.customerData.PONumbers.push(poNumber);
          }
        };

        vm.removeFromPOList = function (poNumber) {
          var index = vm.customerData.PONumbers.indexOf(poNumber);
          if (index > -1) {
            vm.customerData.PONumbers.splice(index, 1);
          }
        };

        vm.createCustomer = function () {
          $log.debug('Create this customer');

          vm.formError = '';
          vm.formResponse = '';
          customerService.createCustomer(vm.customerData.name, vm.customerData.code, vm.customerData.contactName1, vm.customerData.contactName2, vm.customerData.billingName,
                                         vm.customerData.address, vm.customerData.address2, vm.customerData.city, vm.customerData.state,
                                         Number(vm.customerData.postalCode), vm.customerData.phoneNumber, vm.customerData.email).then(function (data) {
            vm.formResponse = 'Successfully made customer!';
            $state.go(ROUTES.CUSTOMERS);
          }).catch(function (err) {
            vm.formError = err.error;
          });
        };

      })(this);
    });
