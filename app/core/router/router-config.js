'use strict';

angular.module('biofuels.core.router.config', [
  'biofuels.core.router.constants',
  'ui.router'
])
  .config(
  function routerConfig(ROUTES, $stateProvider, $urlRouterProvider) {
    var states = [];

    /* Tktrip contact screen */
    states.push({
      name: ROUTES.HOME,
      url: '/home',
      templateUrl: 'sections/home/home.tpl.html',
      controller: 'homeCtrl as ctrl'
    });

    /**
     * UI routes initialization
     */
    angular.forEach(states, function (state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/home');

  }
);
