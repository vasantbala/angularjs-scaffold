(function(){
    var opsCamApp = angular.module('opsCamApp', ['ui.router']);

    opsCamApp.config(
        function($stateProvider, $urlRouterProvider){
            

            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/opsCamApp/templates/home.html',
                controller: 'homeController as hc',
                data: { displayHome: 'Home'}
            })
            .state('manage', {
                url: '/manage',
                templateUrl: '/opsCamApp/templates/manage.html',
                controller: 'manageController as mc',
                data: { displayHome: 'Manage'}
            });
            
        });

    // opsCamApp.config('$stateProvider', [function($stateProvider){
        
    // }]);

    //     opsCamApp.run('$state', '$stateParams', [function($state, $stateParams){

    //     }]);

}());