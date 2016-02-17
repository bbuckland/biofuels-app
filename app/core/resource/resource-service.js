'use strict';

angular.module('biofuels.core.resource.service', [
  'ngResource'
])
  .factory(
    'resourceService',
    function ($resource) {
      var url = 'http://localhost:2800';

      var User = $resource(url + '/user');

      return {
        User: User
      };
    }
  );

