define(function(require, exports, module){

		var app = angular.module('ctrl',[]);
		app.controller('BookController',function($scope){
			$scope.bookId = 5;
		})

		app.controller('txController',function($scope){
			$scope.testId = 5;
		})

		// app.controller('TestController',function($scope,testFactory){
		// 	$scope.customers = testFactory.lable();
		// })
	
		

		// * controller new define methods
		var controllers = {};
		controllers.TestController = function($scope,testFactory,$location,$routeParams){
			// console.log($location.search())
			// console.log($routeParams)
			$scope.customers = testFactory.lable();
		}
		// controllers.TestController2 = function($scope,testFactory){
		// 	$scope.customers = testFactory.lable();
		// }
		app.controller(controllers)
})