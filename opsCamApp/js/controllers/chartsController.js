(function (module) {
    module.controller('chartsController', ['$scope', 'mainService', 'chartsService', chartsController]);

    function chartsController($scope, mainService, chartsService) {

        $scope.testData = 'Hi There. This is from home controller';

        var self = this;
        self.sampleVM = new sampleViewModel(100, 'Example 1', 'One');
        self.foo = mainService.getFoo();
        self.bar = chartsService.getBar();

        self.myChartObject = new ChartObjectViewModel('PieChart', 'How Much Pizza I Ate Last Night');


        onLoad = function () {

            //mock col data

            self.myChartObject.data.cols.push(new ChartColumnViewModel('t', 'Toppings', 'string'));
            self.myChartObject.data.cols.push(new ChartColumnViewModel('s', 'slices', 'number'));

            self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel("Mushrooms"), new ChartRowCViewModel(3)]));
            self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel("Olives"), new ChartRowCViewModel(31)]));
            self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel("Zucchini"), new ChartRowCViewModel(1)]));
            self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel("Pepperoni"), new ChartRowCViewModel(2)]));
            self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel("Onions"), new ChartRowCViewModel(3)]));
        }
        //call onLoad
        onLoad();

    }

    function ChartObjectViewModel(type, title) {
        var self = this;
        self.type = type;
        self.data = new ChartViewModel();
        self.options = new ChartObjectOptionsViewModel(title);
    }

    function ChartObjectOptionsViewModel(title) {
        var self = this;
        self.title = title;
    }

    function ChartViewModel() {
        var self = this;
        self.cols = [];
        self.rows = [];
    }

    function ChartColumnViewModel(id, label, type) {
        var self = this;
        self.id = id;
        self.label = label;
        self.type = type;
    }

    function ChartRowViewModel(rowclist) {
        var self = this;
        self.c = rowclist;
    }

    function ChartRowCViewModel(v) {
        var self = this;
        self.v = v;
    }


    function sampleViewModel(id, key, value) {
        var self = this;
        self.id = id;
        self.key = key;
        self.value = value;
    }


}(angular.module("opsCamApp")));