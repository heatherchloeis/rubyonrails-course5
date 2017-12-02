(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'src/categoriescomponent.html',
		bindings: {
			items: '<'
		}
	});
})();