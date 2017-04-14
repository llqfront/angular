define(function(require, exports, module){
	var app = angular.module('ctrl',[]);

	app.controller('TestController',function($scope,testFactory){
		function init(){

			testFactory.lable().success(function(data){
				$scope.customers = data;
				$scope.expItem = {
					'start_year' : '2014',
					'start_day' : '08',
					'city':'大连',
					'province':'辽宁'
				}
				$scope.expItem2 = {
					'start_year' : '2004',
					'start_day' : '08'
				}
			})
		}
		init();
		document.getElementById('bbbb').onclick = function(){
			console.log($scope.searchTextd)
		}

	}).filter('filterTest', function(){
        return function(id){
             var testFilter = {
                '1':'id为1',
                '2':'id为2',
                '3':'id为3',
                '4':'id为4',
                '5':'id为5',
                '6':'id为6',
                '7':'id为7',
                '8':'id为8'
            }
            return testFilter[id];
        }
    });


	app.controller('BookController',function($http,$scope,$location,$routeParams){
		// $scope.bookId = 5;
		$http({  
            method:'get',  
            url:'/js/test.json',
            // params: {id: uid}
        }).success(function(data){
        	$scope.book = data
        })

        $scope.curShow = 'register';
		$scope.switchView = function(view) {
		    $scope.curShow = view;
		}

	})

	app.controller('txController',function($http,$scope,$location,$routeParams){
		$scope.olive = {};
		$scope.showDetail = function(olive){
			olive.oliveDetail = ! olive.oliveDetail;
		}
		$http({  
            method:'get',  
            url:'/js/test.json',
            // params: {id: uid}
        }).success(function(data){
        	$scope.test = data
        })
	})

	
})