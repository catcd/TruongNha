/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 02-Sep-2015
 * type: side menu controller
 */

var sideMenu = angular.module('controllers.sideMenu', []);

sideMenu.controller('SideMenuController', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
});

// directive for sidemenu panel
sideMenu.directive('menuPanel', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/menu-panel.html',
	};
});
