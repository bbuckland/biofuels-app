'use strict';

angular.module('biofuels.core.router.config', [
  'biofuels.core.router.constants',
  'ui.router',
  'biofuels.templates'
])
  .config(
  function routerConfig(ROUTES, $stateProvider, $urlRouterProvider) {
    var states = [];

    states.push({
      name: ROUTES.CREATE_CUSTOMER,
      url: '/create-customer',
      templateUrl: 'sections/customers/create-customer/create-customer.tpl.html',
      controller: 'createCustomerCtrl as ctrl'
    });

    states.push({
      name: ROUTES.CUSTOMERS,
      url: '/customers',
      templateUrl: 'sections/customers/customers.tpl.html',
      controller: 'customersCtrl as ctrl'
    });

    /* Home screen */
    states.push({
      name: ROUTES.HOME,
      url: '/home',
      templateUrl: 'sections/home/home.tpl.html',
      controller: 'homeCtrl as ctrl'
    });

    states.push({
      name: ROUTES.LOGIN,
      url: '/login',
      templateUrl: 'sections/login/login.tpl.html',
      controller: 'loginCtrl as ctrl'
    });

    states.push({
      name: ROUTES.NEW_BATCH,
      url: '/new-batch',
      templateUrl: 'sections/samples/new-batch/new-batch.tpl.html',
      controller: 'newBatchCtrl as ctrl'
    });

    states.push({
      name: ROUTES.SAMPLES,
      url: '/samples',
      templateUrl: 'sections/samples/samples.tpl.html',
      controller: 'samplesCtrl as ctrl'
    });

    states.push({
      name: ROUTES.CREATE_VIALS,
      url: '/create-vials',
      templateUrl: 'sections/vials/create-vials/create-vials.tpl.html',
      controller: 'createVialsCtrl as ctrl'
    });

    states.push({
      name: ROUTES.VIALS,
      url: '/vials',
      templateUrl: 'sections/vials/vials.tpl.html',
      controller: 'vialsCtrl as ctrl'
    });

    /**
     * UI routes initialization
     */
    angular.forEach(states, function (state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/login');

  }
);
