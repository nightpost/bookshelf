(function() {

	// DIRECTIVE
	angular.module('app').directive('bookShelf', ['$location', function($location) {

		return {
			restrict: 'E',
			templateUrl: '/app/bookshelf/booklist.html',
			scope: {
				data: '='
			},
			link: function(scope) {

				scope.bookStatus = false;
				scope.tableSelection = [];

				scope.removeBooks = function() {
					for (var i = scope.data.length - 1; i >= 0; i--) {
						if(scope.tableSelection[i]) {
							scope.data.splice(i, 1);
						}
					}
					scope.tableSelection = [];
				};

				scope.editBook = function(id, book) {
					localStorage.book = JSON.stringify(book);
					scope.data.slice(id, 1);
					$location.path("/edit-book/" + id);
				}
			}
		}
	}]);

}());