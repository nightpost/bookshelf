(function() {

	// MAIN SERVICE
	angular.module('app')
		.factory('mainService', ['$q', '$http', '$cacheFactory', mainService]);

	function mainService($q, $http, $cacheFactory) {

		var cache = $cacheFactory.get('$http');
		var books = [];

		// public interface
	  return {
	  	getAllBooks: getAllBooks,
	  	updateBook: updateBook
	  }

		function getAllBooks() {

			var deffered = $q.defer();

			if(cache.get(books)) {
				deffered.resolve(cache.get(books));
			} else {
				// grab the data via http request
				var result = $http.get('/api/books', {
					transformResponse: prepareResponse,
					cache: true
				})
				.then(getSuccess)
				.catch(getError);
				deffered.resolve(result);
			}

			return deffered.promise;
		}

		// parse JSON
		function prepareResponse(data) {
	    var transformed = angular.fromJson(data);
	    return transformed;
	  }

	  // resolving promise successfully
	  function getSuccess(response) {
	  	var res = prepareResponse(response);
	  	cache.put('books', res);
	  	books = res;
	  	return res;
	  }

	  // handling an error
	  function getError(response) {
	  	return "Error getting data" + response.status;
	  }

	  // update book and place it back on shelf
		function updateBook(book) {
			var data;
			cache = $cacheFactory.get('$http');

			if(cache && cache.get('books')) {
				data = cache.get('books').data;
			} else {
				data = books.data;
			}

			// consider to use jQuery.find or underscore _.find
			var arr = data.map(function(el) {
				if(el.id === book.id) {
					return book;
				} else {
					return el;
				}
			});

			books = arr;
			cache.put('update', arr);
		}
	};

}());