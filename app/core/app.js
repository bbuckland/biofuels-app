'use strict';

angular.module('biofuels', [
    'ui.router',
    'biofuels.core.router',
    'biofuels.sections.home'
  ])
  .run(function ($log) {
    $log.debug('Welcome to Angular!');
  });
