(function() {

	angular.module('app', ['ngRoute']);

	// CONFIGURATION
	angular.module('app').config(['$routeProvider', function($routeProvider) {

		// simple route
		$routeProvider
			.when('/', {
				templateUrl: '/app/bookshelf/bookshelf.html',
				controller: 'mainCtrl',
				controllerAs: 'mc'
			})
			.when('/edit-book/:id', {
				templateUrl: '/app/bookshelf/editbook.html',
				controller: 'editCtrl',
				controllerAs: 'ec'
			})
			.otherwise('/');

	}]);

}());