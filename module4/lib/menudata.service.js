(function() {
	'use strict';
	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject['$http'];
	function MenuDataService($http) {
		var serv = this;

		serv.getAllCategories = function() {
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function(response) {
				return response.data;
			});
		};

		serv.getItemsForCategory = function(categoryShortName) {
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
				params: {category: categoryShortName}
			}).then(function(response) {
				return response.data.menu_items;
			});
		};
	}
})();