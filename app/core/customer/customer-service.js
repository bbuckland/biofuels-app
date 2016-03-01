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
      function createCustomer (ID, custName, custCode, contactName1, contactName2, billingName, address1, address2, city, state, postalCode, phoneNumber, email) {
        $log.debug('Creating customer');

        var payload = {
          id: ID,
          customer_name: custName,
          customer_code: custCode,
          contact_name1: contactName1,
          contact_name2: contactName2,
          billing_name: billingName,
          address_1: address1,
          address_2: address2,
          city: city,
          state: state,
          postal_code: postalCode,
          phone_number: phoneNumber,
          email: email
        };

        return resourceService.customerCreate.save(payload).$promise.then(function (data) {
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

