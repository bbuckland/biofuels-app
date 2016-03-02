'use strict';

angular.module('biofuels', [
    'ngMaterial',
    'ui.router',
    'chart.js',
    'md.data.table',
    'biofuels.component.menu',
    'biofuels.core.customer',
    'biofuels.core.resource',
    'biofuels.core.router',
    'biofuels.core.user',
    'biofuels.core.vial',
    'biofuels.sections.createCustomer',
    'biofuels.sections.customers',
    'biofuels.sections.createVials',
    'biofuels.sections.home',
    'biofuels.sections.login',
    'biofuels.sections.newBatch',
    'biofuels.sections.samples',
    'biofuels.sections.vials'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('green')
      .backgroundPalette('grey');
  })
  .run(function ($log) {
    $log.debug('Welcome to Angular!');
  });
