(function (module){
    module.controller('manageController', ['$scope', manageController]);

    function manageController($scope){
        var self = this;
        $scope.testData = 'Hi There. This is from manageController';
    }
}(angular.module("opsCamApp")));