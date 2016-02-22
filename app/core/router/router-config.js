'use strict';

angular.module('biofuels.core.router.config', [
  'biofuels.core.router.constants',
  'ui.router',
  'biofuels.templates'
])
  .config(
  function routerConfig(ROUTES, $stateProvider, $urlRouterProvider) {
    var states = [];

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
      name: ROUTES.SAMPLES,
      url: '/samples',
      templateUrl: 'sections/samples/samples.tpl.html',
      controller: 'samplesCtrl as ctrl'
    });

    states.push({
      name: ROUTES.NEW_BATCH,
      url: '/new-batch',
      templateUrl: 'sections/samples/new-batch/new-batch.tpl.html',
      controller: 'newBatchCtrl as ctrl'
    });

    states.push({
      name: ROUTES.CREATE_CUSTOMER,
      url: '/create-customer',
      templateUrl: 'sections/create-customer/create-customer.tpl.html',
      controller: 'createCustomerCtrl as ctrl'
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
