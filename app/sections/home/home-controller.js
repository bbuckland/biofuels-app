'use strict';

angular.module('biofuels.sections.home.controller', [])
  .controller('homeCtrl',
  function ($log) {
    (function (vm) {
      $log.debug('This is from the home page');
      vm.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
      vm.data = [300, 500, 100];


      vm.lineLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      vm.lineSeries = ['Series A', 'Series B'];
      vm.lineData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];

      vm.radarLabels =['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

      vm.radarData = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
      ];


      vm.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      vm.barSeries = ['Series A', 'Series B'];

      vm.barData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
    })(this);
  });
