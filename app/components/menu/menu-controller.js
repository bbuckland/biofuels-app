'use strict';

angular.module('biofuels.component.menu.controller', [
    'ngStorage'
  ])
  .controller(
    'MenuCtrl',
    function ($localStorage) {
      (function (vm) {
        vm.userProfile = $localStorage.userProfile;
      })(this);
    }
  );

