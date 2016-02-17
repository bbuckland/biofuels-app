'use strict';

angular.module('biofuels', [
    'ngMaterial',
    'ui.router',
    'biofuels.core.router',
    'biofuels.sections.home',
    'biofuels.sections.login',
    'biofuels.sections.createSample',
    'biofuels.sections.createCustomer',
    'chart.js'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('blue-grey')
      .backgroundPalette('grey');
  })
  .run(function ($log) {
    $log.debug('Welcome to Angular!');
  });
