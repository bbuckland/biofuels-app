'use strict';

angular.module('biofuels.core.resource.service', [
  'ngResource'
])
  .factory(
    'resourceService',
    function ($resource) {
      var url = 'http://biofuels-csis471.rhcloud.com';

      var userAuth = $resource(url + '/api/v1/user/auth', {}, {
        'save': {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      });

      var userRegister = $resource(url + '/api/v1/user/create', {}, {
        'save': {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      });

      return {
        userAuth: userAuth,
        userRegister: userRegister
      };
    }
  );

