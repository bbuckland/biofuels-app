'use strict';

angular.module('biofuels.component.menu.directive', [
    'biofuels.component.menu.controller'
  ])
  .directive(
    'menu',
    function () {
      return {
        restrict: 'E',
        templateUrl: 'components/menu/menu.tpl.html',
        controller: 'menuCtrl as ctrl'
      };
    }
  );

