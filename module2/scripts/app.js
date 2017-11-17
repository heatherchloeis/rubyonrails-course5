(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buy = this;

		buy.items = ShoppingListCheckOffService.getList();

		buy.removeItem = function($index) {
			ShoppingListCheckOffService.removeItem($index);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;

		bought.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var list = [
			{
				name: "Milk",
				quantity: "1 gallon"
			},
			{
				name: "Bread",
				quantity: "2 loaves"
			},
			{
				name: "Apples",
				quantity: "1 bushels"
			},
			{
				name: "Butter",
				quantity: "3 pounds"
			}, 
			{
				name: "Gyuyere",
				quantity: "1 pound"
			}
		];

		var bought = [];

		service.removeItem = function(itemIndex) {
			bought.push(list[itemIndex]);
			list.splice(itemIndex, 1)
		};

		service.getList = function() {
			return list;
		};

		service.getBoughtItems = function() {
			return bought;
		};
	}
})();