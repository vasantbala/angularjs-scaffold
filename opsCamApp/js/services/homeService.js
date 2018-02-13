(function(){
    angular.module('opsCamApp')
    .service('homeService', ['$q', '$http', 'configService', homeService]);

    function homeService($q, $http, configService){
        var self = this;

        self.getBar = function(){
            return "bar";
        }
    }
}());