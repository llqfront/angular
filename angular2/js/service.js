define(function(require, exports, module){
	var app = angular.module('factory',[]);
		app.factory('testFactory', function ($http) {
		   //   return {
		   //      lable: function(){
		   //      	return  [
					// 	{'id' : 1, 'name':'Ted', 'total': 5.996},
					// 	{'id' : 2, 'name':'Michelle', 'total': 10.996},
					// 	{'id' : 3, 'name':'Zend', 'total': 10.99},
					// 	{'id' : 4, 'name':'Tina', 'total': 15.996}
					// ];
		   //      }
		   //  }

		   // * edit new methods
		 //   var data = [
			// 	{'id' : 1, 'name':'Ted', 'total': 5.996},
			// 	{'id' : 2, 'name':'Michelle', 'total': 10.996},
			// 	{'id' : 3, 'name':'Zend', 'total': 10.99},
			// 	{'id' : 4, 'name':'Tina', 'total': 15.996}
			// ];
		   var factory = {};
		   factory.lable = function(){
		   	 // return data;
		   	 return $http.get('/js/test.json');
		   }
		   return factory;
		});
	
})