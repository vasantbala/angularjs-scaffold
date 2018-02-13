(function (module){
    module.controller('homeController', ['$scope', 'mainService', 'homeService', homeController]);

    function homeController($scope, mainService, homeService){
        
        $scope.testData = 'Hi There. This is from home controller';
        
        var self = this;        
        self.sampleVM = new sampleViewModel(100, 'Example 1', 'One');
        self.foo = mainService.getFoo();
        self.bar = homeService.getBar();

    }



    function sampleViewModel(id, key, value){
        var self = this;
        self.id = id;
        self.key = key;
        self.value = value;
    }


}(angular.module("opsCamApp")));