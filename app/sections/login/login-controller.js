'use strict';

angular.module('biofuels.sections.login.controller', [
  'ngMessages',
  'ngStorage',
  'biofuels.core.user',
  'biofuels.core.router.constants'
])
  .controller('loginCtrl',
  function ($log,
            userService,
            $localStorage,
            $state,
            ROUTES
  ) {
    (function (vm) {
      $log.debug('This is from the logins page');

      vm.disableIt = false;
      vm.userLogin = {};
      vm.userRegister = {};

      if ($localStorage.userProfile && $localStorage.userProfile.email) {
        vm.userLogin.email = $localStorage.userProfile.email;
      }

      vm.loginUser = function () {
        vm.formError = '';
        vm.formResponse = '';
        userService.login(vm.userLogin.email, vm.userLogin.password).then(function () {
          vm.formResponse = 'Successfully logged in!';
          $state.go(ROUTES.HOME);
        }).catch(function (err) {
          vm.formError = err.error;
        });
      };

      vm.registerUser = function () {
        vm.registerFormError = '';
        vm.registerFormResponse = '';
        userService.register(vm.userRegister.fullName,
            vm.userRegister.email,
            vm.userRegister.password).then(function () {

          vm.registerFormResponse = 'Successfully registered user!';
          vm.userLogin.email = vm.userRegister.email;
          vm.userRegister = {};
          vm.selectedTab = 0;
        }).catch(function (err) {
          vm.registerFormError = err.error;
        });
      };
    })(this);
  });
