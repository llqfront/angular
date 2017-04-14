define(function(require, exports, module) {
    angular.module('DateDirective', [])
        .directive('dateSelect', function() {
         function createYear(){
          var oFrag = [];
          var today_year = new Date().getFullYear();//获取今年
          for(var j=today_year;j>=1900;j--){
            oFrag.push(j);
          }
          return oFrag;
        }
        return {
            restrict: 'A',
            scope: {
                year: '=',
                day: '=',
                isRequired: "=",
                isDisabled: "="
            },
            template: '<div class="date-select">\
            <select name="year" ng-model="year" ng-disabled="isDisabled" ng-required="isRequired">\
              <option value="">选择年</option>\
              <option value="{{year}}" ng-repeat="year in kdata">{{year}}</option>\
            </select>\
            <select name="day" ng-model="day" ng-disabled="isDisabled" ng-required="isRequired">\
              <option value="">选择月</option>\
              <option value="01">01</option>\
              <option value="02">02</option>\
              <option value="03">03</option>\
              <option value="04">04</option>\
              <option value="05">05</option>\
              <option value="06">06</option>\
              <option value="07">07</option>\
              <option value="08">08</option>\
              <option value="09">09</option>\
              <option value="10">10</option>\
              <option value="11">11</option>\
              <option value="12">12</option>\
            </select>\
            </div>',
            replace: true,
            link: function($scope, iElement, iAttrs) {
               $scope.kdata = createYear();
            }
        }
    });
});