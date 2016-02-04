'use strict';

angular.module('biofuels.sections.login.controller', [
  'ngMessages'
])
  .controller('loginCtrl',
  function ($log) {
    (function (vm) {
      $log.debug('This is from the login page');
      vm.hello = 'Hello World!';

      vm.onClick = function () {
        $log.debug('Josh has good questions');
      };
    })(this);
  });
