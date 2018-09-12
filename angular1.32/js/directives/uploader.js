define(function(require, exports, module) {
    require('SimpleAjaxUploader.min.js')
    angular.module('UploaderDirective', [])
        .directive("imgUploader", function() {
        return {
            restrict: "A",
            scope: {
                bindModel: "="
            },
            link: function($scope, iElement, iAttrs) {
                $scope.btnId = 'upload' + $.now();
                iElement.attr('id',$scope.btnId);
                var uploader = new ss.SimpleUpload({
                    button: $scope.btnId, // HTML element used as upload button
                    url: '/attachment/UploadBusinessLicense', // URL of server-side upload handler
                    name: 'business_license', // Parameter name of the uploaded file
                    onComplete: function(filename, response) {
                        var obj = JSON.parse(response);
                        $scope.bindModel = obj.file;
                        $scope.$apply();
                        return false;
                    }
                });
            }
        }
    });
});