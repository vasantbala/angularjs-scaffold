(function(){

    angular.module('opsCamApp')
    .factory('mainService', ['$http', '$q', 'configService', mainService]);
    
    function mainService($http, $q, configService){
        var self = this;

        self.getFoo = function(){
            return "foo";
        }

        return {
            getFoo: self.getFoo
        };
    }
}());