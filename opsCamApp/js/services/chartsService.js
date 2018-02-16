(function () {
    angular.module('opsCamApp')
        .service('chartsService', ['$q', '$http', 'configService', chartsService]);

    function chartsService($q, $http, configService) {
        var self = this;

        self.getBar = function () {
            return "bar";
        }
    }
}());