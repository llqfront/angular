define(function(require, exports, module){
	require('lib/angular-route');
	// require('lib/angular-animate');
	require('controller')
	require('service')

	var app = angular.module('testApp',['ngRoute','factory','ctrl']);

	app.config(function($routeProvider) {
         $routeProvider.when('/', {
             templateUrl: '/view/index.html',
             controller: 'TestController'
           })
         .when('/book', {
             templateUrl: '/view/book.html',
             controller: 'BookController'
           })
         .when('/test', {
             templateUrl: '/view/test.html',
             controller: 'txController'
           })
         .otherwise({
		      redirectTo:'/'
		    });
    });

	// app.controller('BookController',function($scope){
	// 	$scope.bookId = 5;
	// })

	// app.controller('txController',function($scope){
	// 	$scope.testId = 5;
	// })

	// app.controller('TestController',function($scope){
	// 	$scope.customers = [
	// 		{'id' : 1, 'name':'Ted', 'total': 5.996},
	// 		{'id' : 2, 'name':'Michelle', 'total': 10.996},
	// 		{'id' : 3, 'name':'Zend', 'total': 10.99},
	// 		{'id' : 4, 'name':'Tina', 'total': 15.996}
	// 	]
	// })


	module.exports = {
		init: function(cfg){
			var doc = document;
			var wrap = doc.getElementById(cfg.id);
			angular.bootstrap(wrap,['testApp']);
		}
	}
})