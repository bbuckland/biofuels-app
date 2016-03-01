'use strict';

angular.module('biofuels.core.router.constants', [])
  .constant(
  'ROUTES', {
    'CREATE_CUSTOMER':'createCustomer',
    'CUSTOMERS':'customers',
    'HOME': 'home',
    'LOGIN': 'login',
    'NEW_BATCH': 'newBatch',
    'SAMPLES':'samples',
    'VIALS':'vials'
  });
