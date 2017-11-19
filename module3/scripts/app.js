(function() 
{
	'use strict'

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', FoundItemsDirective);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) 
	{
		var ctrl = this;
		var term = '';

		ctrl.matchedMenuItems = function(term) {
			var promise = MenuSearchService.getMatchedMenuItems(term);

			promise.then(function(response) {
				if (response && response.length > 0)
				{
					ctrl.message = '';
					ctrl.found = response;
				} else {
					ctrl.message = 'Nothing found!'
					ctrl.found = [];
				}
			});
		};

		ctrl.removeMenuItem = function(index) 
		{
			ctrl.found.splice(index, 1);
		};
	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath)
	{
		var service = this;

		service.getMatchedMenuItems = function(term) 
		{
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			}).then(function(response)
			{
				var foundItems = [];

				for (var i = 0; i < response.data['menu_items'].length; i++)
				{
					if (term.length > 0 && response.data['menu_items'][i]['description'].toLowerCase().indexOf(term) !== -1)
					{
						foundItems.push(response.data['menu_items'][i]);
					}
				}
				return foundItems;
			});
		};
	}

	function FoundItemsDirective() 
	{
		var ddo = {
			restrict: 'E',
			templateUrl: 'foundItems.html',
			scope: {
				foundItems: '<',
				onRemove: '&',
				onEmpty: '<'
			},
			controller: NarrowItDownController,
			controllerAs: 'ctrl',
			bindToController: true
		};
		return ddo;
	}
})();