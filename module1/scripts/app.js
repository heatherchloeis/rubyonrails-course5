(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		$scope.lunch = '';
		$scope.message = '';

		$scope.checkLunch = function() {
			var lunch = $scope.lunch.trim();
			var lunchList = lunch.split(',');

			if (lunch == "" || lunchList.length < 1) {
				$scope.message = "Please enter data first";
			} else if (lunchList.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		};
	};
})();