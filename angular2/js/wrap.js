define(function(require, exports, module){

	var app = angular.module('myApp',[]);
	app.controller('WrapCtrl',function($scope){
		$scope.greating = {
			text:'hello'
		}
		$scope.people = [
			{name:'前端工程师',language:'javascript'},
			{name:'C语言工程师',language:'c语言'},
			{name:'java工程师',language:'java'},
			{name:'php工程师',language:'php'},
			{name:'ruby工程师',language:'ruby'},
			{name:'python工程师',language:'python'},
			{name:'mongo',language:'mongodb'}
		];
		$scope.print = function(){
			console.log($scope.search)
		}
		
	})
	module.exports = {
		init:function(cfg){
			var wrap = document.getElementById(cfg.id);
			angular.bootstrap(wrap,['myApp']);
		}
	}

})