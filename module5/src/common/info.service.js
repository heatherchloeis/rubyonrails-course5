(function() {
	'use strict';

	angular.module('common')
	.service('InfoService', InfoService);

	InfoService.$inject = [];
	function InfoService() {
		var serv = this;

		serv.setInfo = function(info) {
			serv.info = info;
		};

		serv.getInfo = function(info) {
			return serv.info;
		};
	}
})();