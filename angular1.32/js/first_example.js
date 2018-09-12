define(function(require, exports, module){


	var app = angular.module('FirstApp',[]);

	app.controller('FirstCtrl',function($scope){
		$scope.firstData = [
			{id:'1',title:"星期一",content:'angular分享1',time:'1小时'},
			{id:'2',title:"星期二",content:'css分享2',time:'2小时'},
			{id:'3',title:"星期三",content:'angular分享3',time:'3小时'},
			{id:'4',title:"星期四",content:'angular分享4',time:'4小时'},
			{id:'5',title:"星期五",content:'angular分享5',time:'5小时'},
		]

	})
	module.exports = {
		firstInit:function(cfg){
			var doc = document;
			var wrap = doc.getElementById(cfg.id);
			angular.bootstrap(wrap,['FirstApp']);
		}
	}
})