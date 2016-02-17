'use strict';

angular.module('biofuels.core.router.config', [
  'biofuels.core.router.constants',
  'ui.router'
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
      name: ROUTES.CREATE_SAMPLE,
      url: '/create-sample',
      templateUrl: 'sections/create-sample/create-sample.tpl.html',
      controller: 'createSampleCtrl as ctrl'
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
