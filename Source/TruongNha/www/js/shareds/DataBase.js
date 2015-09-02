/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 02-Sep-2015
 * type: database variables and functions
 */

var database = angular.module('shareds.dataBase', []);

// set default header for http segment
database.config(function($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
})

database.factory('database', function($http) {
	function DataBase() {
		this.function = function(parameter) {
			return true;
		};
	}
	return new DataBase();
});
