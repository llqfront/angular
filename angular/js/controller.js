define(function(require, exports, module){

		var app = angular.module('ctrl',[]);
		app.controller('BookController',function($scope){
			$scope.bookId = 5;
		})

		app.controller('txController',function($scope){
			$scope.testId = 5;
		})

		app.controller('TestController',function($scope,testFactory){
			$scope.customers = testFactory.lable();
		})
})