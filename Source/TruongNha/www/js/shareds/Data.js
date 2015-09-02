/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 02-Sep-2015
 * type: module all shared variables used for this app
 */

var data = angular.module('shareds.data', []);
// Setting variables
data.factory('eSettings', function(){
	return {
		sTimeZone: 0,				// UTC integer from -12 to +14

		resetData: function(){
			this.sTimeZone = 0;
		}
	};
});

// User information
data.factory('eUser', function(){
	return {
		uID: '',			// A-Z, a-z, 0-9, _
		uPassword: '',		// printable char in ASCII
		uName: '',			// printable char in ASCII

		resetData: function(){
			this.uID = '';
			this.uPassword = '';
			this.uName = '';
		}
	};
});