/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 02-Sep-2015
 * type: register controller
 */

var register = angular.module('controllers.register', []);

// set default header for http segment
register.config(function($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
})

register.controller('RegisterController', function($scope, $rootScope) {
});
