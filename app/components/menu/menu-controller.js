'use strict';

angular.module('biofuels.component.menu.controller', [
    'ngStorage'
  ])
  .controller(
    'menuCtrl',
    function ($localStorage) {
      (function (vm) {
        vm.userProfile = $localStorage.userProfile;
      })(this);
    }
  );

