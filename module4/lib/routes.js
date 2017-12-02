(function() {
	'use strict';
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		//redirect to tab 1 if no other URL matches
		$urlRouterProvider.otherwise('/');

		//set up UI states
		$stateProvider

			//Home Page
			.state('home', {
				url: '/',
				templateUrl: 'src/home.html',
			})

			//Categories Page
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/categories.html',
				controller: 'CategoriesController as catCtrl',
				resolve: {
					categories: ['MenuDataService', function(MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			})

			//Items Page
			.state('items', {
				url: '/items/{category}',
				templateUrl: 'src/items.html',
				controller: 'ItemsController as itemsCtrl',
				resolve: {
					items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
						return MenuDataService.getItemsForCategory($stateParams.category);
					}]
				}				
			});
	}
})();