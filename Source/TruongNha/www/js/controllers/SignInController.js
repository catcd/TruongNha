/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 02-Sep-2015
 * type: sign in controller
 */

var signIn = angular.module('controllers.signIn', []);

// set default header for http segment
signIn.config(function($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
})

signIn.controller('SignInController', function($scope, $rootScope, $http, $state) {
	$scope.user = {id: "", password: ""}
	$scope.signIn = function () {
		$state.go("home");
	}
});
