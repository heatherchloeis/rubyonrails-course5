(function() {
	'use strict';
	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['MenuService', 'InfoService'];
	function SignUpController(MenuService, InfoService) {
		var $ctrl = this;
		$ctrl.info = {};

		$ctrl.submit = function() {
			MenuService.getMenuItem($ctrl.info.fav)
			.then(function(responce) {
				$ctrl.invalidFav = false;
				$ctrl.submitted= true;
				InfoService.setInfo($ctrl.info);
			}).catch(function() {
				$ctrl.invalidFav = true;
			})
		};

		$ctrl.validateFav = function() {
			MenuService.getMenuItem($ctrl.info.fav)
			.then(function() {
				$ctrl.invalidFav = false;
			}).catch(function() {
				$ctrl.invalidFav = true;
			})
		};
	}
})();