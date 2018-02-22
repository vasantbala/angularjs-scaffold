(function () {
    angular.module('opsCamApp')
        .service('chartsService', ['$q', '$http', 'configService', chartsService]);

    function chartsService($q, $http, configService) {
        var self = this;

        self.getBar = function () {
            return "bar";
        }



        self.getRandomValues = function () {

            var pizzaSalesVM = [];

            pizzaSalesVM.push(new PizzaSalesViewModel("Mushrooms", self.generateNumber()));
            pizzaSalesVM.push(new PizzaSalesViewModel("Olives", self.generateNumber()));
            pizzaSalesVM.push(new PizzaSalesViewModel("Zucchini", self.generateNumber()));
            pizzaSalesVM.push(new PizzaSalesViewModel("Pepperoni", self.generateNumber()));
            pizzaSalesVM.push(new PizzaSalesViewModel("Onions", self.generateNumber()));

            return pizzaSalesVM;
        }


        self.generateNumber = function () {
            return Math.floor(Math.random() * (25 - 0 + 0) + 0);
        }

        function PizzaSalesViewModel(name, salesCount) {
            var self = this;
            self.Name = name;
            self.SalesCount = salesCount;
        }
    }
}());