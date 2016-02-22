'use strict';

angular.module('biofuels.core.user.service', [
  'ngStorage',
  'biofuels.core.resource'
])
  .factory(
    'userService',
    function ($log,
              resourceService,
              $localStorage,
              $q
    ) {
      function login (email, password) {
        $log.debug('Logging you in from the user service');

        var payload = {
          email: email,
          password: password
        };

        return resourceService.userAuth.save(payload).$promise.then(function (data) {
          $log.debug(data);
          $localStorage.userProfile = {
            _id: data['user_id'],
            fullName: data['full_name'],
            email: data['email'],
            token: data['token']
          };
        }).catch(function (err) {
          $log.error(err);
          return $q.reject(err.data);
        });
      }


      function register (fullName, email, password) {
        $log.debug('Logging you in from the user service');

        var payload = {
          full_name: fullName,
          email: email,
          password: password
        };

        return resourceService.userRegister.save(payload).$promise.then(function (data) {
          $log.debug(data);
        }).catch(function (err) {
          $log.error(err);
          return $q.reject(err.data);
        });
      }

      return {
        login: login,
        register: register
      };
    }
  );

