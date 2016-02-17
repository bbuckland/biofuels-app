'use strict';

angular.module('biofuels.sections.login.controller', [
  'ngMessages',
  'biofuels.core.user'
])
  .controller('loginCtrl',
  function ($log,
            userService
  ) {
    (function (vm) {
      $log.debug('This is from the logins page');
      vm.hello = 'Hello World!';

      vm.disableIt = false;

      vm.isSubmittable = function () {
        if (vm.selectedTab === 0 &&
            vm.userLogin.email) {
          return true
        } else {
          return false;
        }
      };


      vm.loginUser = function () {
        userService.login(vm.userLogin.email, vm.userLogin.password);
      };
    })(this);
  });
