(function(){
    angular.module('opsCamApp')
    .controller('mainController', ['$state', '$scope', mainController]);
    function mainController($state, $scope){
        $scope.testData = "hello";
    }
}());