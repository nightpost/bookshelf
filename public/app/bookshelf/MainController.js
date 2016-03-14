(function() {

	// MAIN CONTROLLER
	angular.module('app').controller('mainCtrl', ['mainService', '$cacheFactory', function(mainService, $cacheFactory) {

		var vm = this;

		getData();

		vm.data,
		vm.show = true,
		vm.err;

		// request list of books
		function getData() {
			mainService.getAllBooks()
				.then(getAllBooksSuccess)
				.catch(getAllBooksError);
		};

		// response success
		function getAllBooksSuccess(response) {
			var update = $cacheFactory.get('$http').get('update');
			vm.data = update || response.data;
			vm.show = true;
		};

		// response error
		function getAllBooksError(err) {
			vm.error = err;
			vm.show = false;
		};

	}]);

}());