define(function(require, exports, module){
	require('lib/angular-route');

	require('controller')
	require('directives/date');
	require('directives/city');
	require('service')

	var app = angular.module('testApp',['ngRoute','factory','ctrl','DateDirective','CityDirective']);

	app.config(function($routeProvider,$locationProvider) {
         $routeProvider.when('/', {
             templateUrl: '/html/view/index.html',
             controller: 'TestController'
           }).when('/book', {
             templateUrl: '/html/view/book.html',
             controller: 'BookController'
           }).when('/test', {
             templateUrl: '/html/view/test.html',
             controller: 'txController'
           }).otherwise({
		      redirectTo:'/'
		    });
		// $locationProvider.html5Mode(true);
    });
	module.exports = {
		init: function(cfg){
			var doc = document;
			var wrap = doc.getElementById(cfg.id);
			angular.bootstrap(wrap,['testApp']);
		}
	}
})