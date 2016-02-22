'use strict';

angular.module('biofuels.sections.samples.controller', [])
  .controller('samplesCtrl',
    function ($log
    ) {
      (function (vm) {
        $log.debug('This is from the samples page');
        vm.selected = [];

        vm.batches = ['123', '456', '789'];

        vm.selectedBatch = vm.batches[0];

        vm.desserts = [
          {
            'name': 'ut',
            'calories': '28.7575',
            'fat': '42.4193',
            'carbs': '7.2505',
            'protein': '43.6448',
            'sodium': '2.4953',
            'calcium': '49.4159',
            'iron': '65.6454'
          },
          {
            'name': 'ad',
            'calories': '0.7568',
            'fat': '19.614',
            'carbs': '42.0799',
            'protein': '10.1729',
            'sodium': '86.4369',
            'calcium': '59.7549',
            'iron': '4.0589'
          },
          {
            'name': 'nisi',
            'calories': '66.8286',
            'fat': '23.5308',
            'carbs': '81.6016',
            'protein': '3.2619',
            'sodium': '62.3438',
            'calcium': '89.796',
            'iron': '30.6713'
          },
          {
            'name': 'adipisicing',
            'calories': '11.4876',
            'fat': '60.4398',
            'carbs': '64.1465',
            'protein': '36.9013',
            'sodium': '34.923',
            'calcium': '59.207',
            'iron': '82.2253'
          },
          {
            'name': 'consequat',
            'calories': '80.8062',
            'fat': '57.8592',
            'carbs': '10.0184',
            'protein': '82.838',
            'sodium': '6.7722',
            'calcium': '64.6945',
            'iron': '38.2294'
          },
          {
            'name': 'proident',
            'calories': '77.8658',
            'fat': '85.4956',
            'carbs': '28.9508',
            'protein': '83.2172',
            'sodium': '66.6671',
            'calcium': '75.9143',
            'iron': '31.6057'
          }
        ];
      })(this);
    });
