'use strict';

angular.module('biofuels.core.customer.service', [
    'biofuels.core.resource'
  ])
  .factory(
    'customerService',
    function ($log,
              resourceService,
              $q
    ) {
      function createCustomer () {
        $log.debug('Creating customer');

        var payload = {};

        return resourceService.userAuth.save(payload).$promise.then(function (data) {
          $log.debug(data);
        }).catch(function (err) {
          $log.error(err);
          return $q.reject(err.data);
        });
      }


      function getCustomers () {
        $log.debug('Getting customers');

        var query = {};

        return resourceService.customerList.get(query).$promise.then(function (data) {
          $log.debug(data);
          return data;
        }).catch(function (err) {
          $log.error(err);
          return $q.reject(err.data);
        });
      }

      return {
        createCustomer: createCustomer,
        getCustomers: getCustomers
      };
    }
  );

