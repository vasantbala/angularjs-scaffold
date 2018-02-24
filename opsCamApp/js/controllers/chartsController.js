(function (module) {
    module.controller('chartsController', ['$scope', 'mainService', 'chartsService', chartsController]);

    function chartsController($scope, mainService, chartsService) {

        $scope.testData = 'Hi There. This is from home controller';

        var self = this;
        self.sampleVM = new sampleViewModel(100, 'Example 1', 'One');
        self.foo = mainService.getFoo();
        self.bar = chartsService.getBar();

        self.myChartObject = new ChartObjectViewModel('PieChart', 'How Much Pizza I Ate Last Night');

        self.masterVMList = [];

        self.mockDataMode = "simple";

        self.detailVMList = null;

        onLoad = function () {

            //mock col data

            self.myChartObject.data.cols.push(new ChartColumnViewModel('t', 'Toppings', 'string'));
            self.myChartObject.data.cols.push(new ChartColumnViewModel('s', 'slices', 'number'));

            var pizzaSales = chartsService.getRandomValues();

            for (var i = 0; i < pizzaSales.length; i++){
                self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel(pizzaSales[i].Name), new ChartRowCViewModel(pizzaSales[i].SalesCount)]));
            }

            self.loadInterfaceData(self.mockDataMode === "simple");

           

            //self.detailVMList = {
            //    "Headers": ["2 AM", "5 AM", "12 PM", "5 PM"],
            //    "Rows": [
            //        {
            //            "InterfaceName": "FFINL001",
            //            "RunTimes": {
            //                "2 AM": { "RunTime": "00:10:09", "Status": "Success" },
            //                "5 AM": { "RunTime": "00:10:12", "Status": "Success" },
            //                "12 PM": { "RunTime": "00:10:04", "Status": "Success" },
            //                "5 PM": { "RunTime": "00:08:52", "Status": "Success" }
            //            }
            //        }
            //    ]
            //};
        }

        self.loadInterfaceData = function (isSimpleData) {

            //clear master & detail vm objects
            if (self.masterVMList != null) {
                self.masterVMList.splice(0, self.masterVMList.length);
            }
            self.detailVMList = null;

            //master
            var masterData = chartsService.getMaster(isSimpleData).responseObject.models;
            for (var i = 0; i < masterData.length; i++) {
                self.masterVMList.push(new MasterViewModel(masterData[i]));
            }

            //detail
            var detailData = chartsService.getDetail(isSimpleData).responseObject;
            self.detailVMList = new DetailViewModel(detailData.headers, detailData.data);
        }

        self.onToggleData = function () {
            if (self.mockDataMode == "simple") {
                self.mockDataMode = "complex";
                self.loadInterfaceData(false);
            }
            else {
                self.mockDataMode = "simple";
                self.loadInterfaceData(true);
            }
            
        }
        //call onLoad
        onLoad();


        self.onGenerate = function () {
            var pizzaSales = chartsService.getRandomValues();

            self.myChartObject.data.rows.splice(0, self.myChartObject.data.rows.length);

            for (var i = 0; i < pizzaSales.length; i++) {
                self.myChartObject.data.rows.push(new ChartRowViewModel([new ChartRowCViewModel(pizzaSales[i].Name), new ChartRowCViewModel(pizzaSales[i].SalesCount)]));
            }
        }


        
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

    function MasterViewModel(data) {
        var self = this;

        self.ApplicationName = data.app_name;
        self.InterfaceName = data.intf_name;
        self.StartTime = data.dttm_stamp;
        self.EndTime = data.end_dttm_stamp;
        self.Status = data.status;
        self.RunTime = data.runtime;
    }

    function DetailViewModel(headers, data) {
        var self = this;

        self.Headers = headers || [];
        self.Rows = [];

        var interfaceNameList = [];
        var interfaceList = [];

        for (var d = 0; d < data.length; d++) {
            var interfaceName = data[d].intf_name;

            if (interfaceList[interfaceName] == null) {
                interfaceList[interfaceName] = new InterfaceViewModel(interfaceName, []);     
                interfaceNameList.push(interfaceName);
            }

            var dynamicPropName = GetDynamicPropName(headers, data[d]);
            if (dynamicPropName != null) {
                //interfaceList[interfaceName].RunTimes.push(new RunTimeViewModel(data[d].status, dynamicPropName, data[d][dynamicPropName]));
                angular.extend(interfaceList[interfaceName].RunTimes, new RunTimeViewModel(data[d].status, dynamicPropName, data[d][dynamicPropName]));
            }
        }

        for (var i = 0; i < interfaceNameList.length; i++) {
            self.Rows.push(interfaceList[interfaceNameList[i]]);
        }
    }


    function GetDynamicPropName(headers, data) {
        for (var h = 0; h < headers.length; h++) {
            var headerName = headers[h];
            if (data.hasOwnProperty(headerName)) {
                return headerName;
            }
        }
        return null;
    }



    function InterfaceViewModel(interfaceName) {
        var self = this;
        self.InterfaceName = interfaceName;
        self.RunTimes = [];
    }

    function RunTimeViewModel(status, time, runTime) {
        var self = this;
        //dynamic property
        self[time] = new RunTimeDetailViewModel(status, runTime);
    }

    function RunTimeDetailViewModel(status, runTime) {
        var self = this;
        self.Status = status;
        self.RunTime = runTime;
    }

}(angular.module("opsCamApp")));