'use strict';

angular.module('biofuels.core.vial.service', [
    'biofuels.core.resource'
  ])
  .factory(
    'vialService',
    function ($log,
              resourceService,
              $q
    ) {
      function createVial (vials) {
        $log.debug('Creating customer');

        var payload = {

        };

        return resourceService.vialCreate.save(payload).$promise.then(function (data) {
          $log.debug(data);
        }).catch(function (err) {
          $log.error(err);
          return $q.reject(err.data);
        });
      }


      function getVials () {
        $log.debug('Getting vials');

        var query = {
          vial_type: 'RXN'
        };

        return resourceService.vialList.get(query).$promise.then(function (data) {
          $log.debug(data);
          return data;
        }).catch(function (err) {
          $log.error(err);
          return $q.reject(err.data);
        });
      }

      return {
        createVial: createVial,
        getVials: getVials
      };
    }
  );

