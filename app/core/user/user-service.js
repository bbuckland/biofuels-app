'use strict';

angular.module('biofuels.core.user.service', [])
  .factory(
    'userService',
    function ($log,
              resourceService
    ) {
      function login (email, password) {
        $log.debug('Logging you in from the user service');
        resourceService.User.get({}).$promise.then(function () {

        });
      }

      return {
        login: login
      };
    }
  );

