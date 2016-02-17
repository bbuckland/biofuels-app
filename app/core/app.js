'use strict';

angular.module('biofuels', [
    'ngMaterial',
    'ui.router',
    'chart.js',
    'biofuels.core.resource',
    'biofuels.core.router',
    'biofuels.core.user',
    'biofuels.sections.createSample',
    'biofuels.sections.createCustomer',
    'biofuels.sections.home',
    'biofuels.sections.login'
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
