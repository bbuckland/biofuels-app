'use strict';

angular.module('biofuels.sections.createVials.controller', [])
  .controller('createVialsCtrl',
    function ($log,
              vialService,
              $state,
              ROUTES) {
      (function (vm) {
        $log.debug('This is from the home page');
        vm.vialData = {};
        vm.vials = [];

        vm.vialTypes = ['Reaction', 'GC', 'Spiked'];

        vm.addToQueue = function () {
          $log.debug('Added to Queue');
          vm.vials.push(vm.vialData);
          vm.vialData = {
            vialType: vm.vialData.vialType,
            vialDate: vm.vialData.vialDate
          };
        };

        vm.removeFromQueue = function (vial) {
          $log.debug(vial);
          var index = vm.vials.indexOf(vial);
          if (index > -1) {
            vm.vials.splice(index, 1);
          }
        };

        vm.saveVials = function () {
          $log.debug('Saved vials');

          vm.formError = '';
          vm.formResponse = '';
          vialService.createVial().then(function (data) {
            vm.formResponse = 'Successfully made vial!';
            $state.go(ROUTES.VIALS);
          }).catch(function (err) {
            vm.formError = err.error;
          });
        };

      })(this);
    });
