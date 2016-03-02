'use strict';

angular.module('biofuels.sections.vials.controller', [])
  .controller('vialsCtrl',
    function ($log,
              vialService
    ) {
      (function (vm) {
        $log.debug('This is from the vials page');

        vm.selected = [];
        vm.customers = [];

        function getVials () {
          vm.formError = '';
          vm.formResponse = '';
          vialService.getVials().then(function (data) {
            vm.formResponse = 'Successfully got vial list!';
            vm.vials = data.data;
            $log.debug(vm.vials.length);
          }).catch(function (err) {
            vm.formError = err.error;
          });

        }

        getVials();
      })(this);
    });
