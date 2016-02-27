'use strict';

angular.module('biofuels.component.menu.directive', [
    'biofuels.component.menu.controller'
  ])
  .directive(
    'menu',
    function () {
      return {
        restrict: 'A',
        templateUrl: 'components/menu/menu.tpl.html',
        controller: 'MenuCtrl as menuCtrl'
      };
    }
  );

