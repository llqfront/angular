define(function(require, exports, module){
	var app = angular.module('factory',[]);
		.factory('testFactory', function () {
		     return {
		        lable: function(){
		        	return  [
						{'id' : 1, 'name':'Ted', 'total': 5.996},
						{'id' : 2, 'name':'Michelle', 'total': 10.996},
						{'id' : 3, 'name':'Zend', 'total': 10.99},
						{'id' : 4, 'name':'Tina', 'total': 15.996}
					];
		        }
		    }
		});
	
})