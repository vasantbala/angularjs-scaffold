(function(){
    var opsCamApp = angular.module('opsCamApp', ['ui.router', 'googlechart']);

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
            })
            .state('charts', {
                url: '/charts',
                templateUrl: '/opsCamApp/templates/charts.html',
                controller: 'chartsController as cc',
                data: { displayHome: 'Charts' }
            });
            
        });

    // opsCamApp.config('$stateProvider', [function($stateProvider){
        
    // }]);

    //     opsCamApp.run('$state', '$stateParams', [function($state, $stateParams){

    //     }]);

}());