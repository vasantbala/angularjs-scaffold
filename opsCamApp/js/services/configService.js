(function(){
    angular.module('opsCamApp').factory('configService', [configService]);

    function configService(){
        return {
            SITE_SUBFOLDER: SITE_SUBFOLDER
        };


        function SITE_SUBFOLDER(){
            return '';
        }
    }
}());