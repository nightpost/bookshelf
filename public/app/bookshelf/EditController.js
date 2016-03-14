(function() {

	// EDIT CONTROLLER
	angular.module('app').controller('editCtrl', ['$location', 'mainService', function($location, mainService) {

		var vm = this;

		vm.book = JSON.parse(localStorage.book);

		//updating book through Main Service method
		vm.update = function update(book) {
			mainService.updateBook(book);
			$location.path("/");
		}
	}]);

}());