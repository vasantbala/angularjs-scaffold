(function () {
    angular.module('opsCamApp')
        .service('chartsService', ['$q', '$http', 'configService', chartsService]);

    function chartsService($q, $http, configService) {
        var self = this;

        self.getBar = function () {
            return "bar";
        }

        self.getMaster = function (isSimple) {
            var masterData = null;

            if (isSimple === true) {
                masterData = {
                    "status": "Success",
                    "errorMsg": null,
                    "responseObject": {
                        "models": [
                            {
                                "app_name": "PS ICE",
                                "intf_name": "FFINL001",
                                "dttm_stamp": "2018-02-08 17:25:05",
                                "end_dttm_stamp": "2018-02-08 17:33:57",
                                "status": "Success",
                                "runtime": "00:08:52"
                            },
                            {
                                "app_name": "PS ICE",
                                "intf_name": "FFINL001",
                                "dttm_stamp": "2018-02-08 12:25:04",
                                "end_dttm_stamp": "2018-02-08 12:35:08",
                                "status": "Success",
                                "runtime": "00:10:04"
                            },
                            {
                                "app_name": "PS ICE",
                                "intf_name": "FFINL001",
                                "dttm_stamp": "2018-02-08 05:25:04",
                                "end_dttm_stamp": "2018-02-08 05:35:16",
                                "status": "Success",
                                "runtime": "00:10:12"
                            },
                            {
                                "app_name": "PS ICE",
                                "intf_name": "FFINL001",
                                "dttm_stamp": "2018-02-08 02:25:04",
                                "end_dttm_stamp": "2018-02-08 02:35:13",
                                "status": "Success",
                                "runtime": "00:10:09"
                            }
                        ]
                    }
                };
            }
            else {
                masterData = {
                    "status": "Success",
                    "errorMsg": null,
                    "responseObject": {
                        "models": [
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL02",
                                "dttm_stamp": "2018-01-31 23:19:21",
                                "end_dttm_stamp": "2018-01-31 23:21:33",
                                "status": "Success",
                                "runtime": "00:02:12"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01",
                                "dttm_stamp": "2018-01-31 23:17:04",
                                "end_dttm_stamp": "2018-01-31 23:19:16",
                                "status": "Success",
                                "runtime": "00:02:12"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01_CHK",
                                "dttm_stamp": "2018-01-31 23:15:10",
                                "end_dttm_stamp": "2018-01-31 23:16:59",
                                "status": "Success",
                                "runtime": "00:01:49"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL02",
                                "dttm_stamp": "2018-01-31 17:34:45",
                                "end_dttm_stamp": "2018-01-31 17:36:37",
                                "status": "Success",
                                "runtime": "00:01:52"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01",
                                "dttm_stamp": "2018-01-31 17:31:05",
                                "end_dttm_stamp": "2018-01-31 17:34:39",
                                "status": "Success",
                                "runtime": "00:03:34"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01_CHK",
                                "dttm_stamp": "2018-01-31 17:30:10",
                                "end_dttm_stamp": "2018-01-31 17:31:00",
                                "status": "Success",
                                "runtime": "00:00:50"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL02",
                                "dttm_stamp": "2018-01-31 12:37:01",
                                "end_dttm_stamp": "2018-01-31 12:39:07",
                                "status": "Success",
                                "runtime": "00:02:06"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01",
                                "dttm_stamp": "2018-01-31 12:31:06",
                                "end_dttm_stamp": "2018-01-31 12:36:54",
                                "status": "Success",
                                "runtime": "00:05:48"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01_CHK",
                                "dttm_stamp": "2018-01-31 12:30:09",
                                "end_dttm_stamp": "2018-01-31 12:31:01",
                                "status": "Success",
                                "runtime": "00:00:52"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL02",
                                "dttm_stamp": "2018-01-31 05:34:23",
                                "end_dttm_stamp": "2018-01-31 05:36:16",
                                "status": "Success",
                                "runtime": "00:01:53"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01",
                                "dttm_stamp": "2018-01-31 05:31:04",
                                "end_dttm_stamp": "2018-01-31 05:34:18",
                                "status": "Success",
                                "runtime": "00:03:14"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01_CHK",
                                "dttm_stamp": "2018-01-31 05:30:08",
                                "end_dttm_stamp": "2018-01-31 05:30:58",
                                "status": "Success",
                                "runtime": "00:00:50"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL02",
                                "dttm_stamp": "2018-01-31 02:36:49",
                                "end_dttm_stamp": "2018-01-31 02:39:30",
                                "status": "Success",
                                "runtime": "00:02:41"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01",
                                "dttm_stamp": "2018-01-31 02:31:01",
                                "end_dttm_stamp": "2018-01-31 02:36:44",
                                "status": "Success",
                                "runtime": "00:05:43"
                            },
                            {
                                "app_name": "nSAP",
                                "intf_name": "FNSAPL01_CHK",
                                "dttm_stamp": "2018-01-31 02:30:08",
                                "end_dttm_stamp": "2018-01-31 02:30:55",
                                "status": "Success",
                                "runtime": "00:00:47"
                            }
                        ]
                    }
                };
            }

            return masterData;
        }

        self.getDetail = function (isSimple) {

            var detailData = null;

            if (isSimple === true) {
                detailData = {
                    "status": "Success",
                    "errorMsg": null,
                    "responseObject": {
                        "headers": [
                            "5 PM",
                            "12 PM",
                            "5 AM",
                            "2 AM"
                        ],
                        "data": [
                            {
                                "rundate": null,
                                "intf_name": "FFINL001",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-02-08 17:25:05",
                                "enddttm_date": "2018-02-08 17:33:57",
                                "5 PM": "00:08:52"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FFINL001",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-02-08 12:25:04",
                                "enddttm_date": "2018-02-08 12:35:08",
                                "12 PM": "00:10:04"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FFINL001",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-02-08 05:25:04",
                                "enddttm_date": "2018-02-08 05:35:16",
                                "5 AM": "00:10:12"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FFINL001",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-02-08 05:25:04",
                                "enddttm_date": "2018-02-08 05:35:16",
                                "5 AM": "00:20:22"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FFINL001",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-02-08 02:25:04",
                                "enddttm_date": "2018-02-08 02:35:13",
                                "2 AM": "00:10:09"
                            }
                        ]
                    }
                };
            }
            else {
                detailData = {
                    "status": "Success",
                    "errorMsg": null,
                    "responseObject": {
                        "headers": [
                            "11 PM",
                            "5 PM",
                            "12 PM",
                            "5 AM",
                            "2 AM"
                        ],
                        "data": [
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL02",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 23:19:21",
                                "enddttm_date": "2018-01-31 23:21:33",
                                "11 PM": "00:02:12"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 23:17:04",
                                "enddttm_date": "2018-01-31 23:19:16",
                                "11 PM": "00:02:12"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01_CHK",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 23:15:10",
                                "enddttm_date": "2018-01-31 23:16:59",
                                "11 PM": "00:01:49"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL02",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 17:34:45",
                                "enddttm_date": "2018-01-31 17:36:37",
                                "5 PM": "00:01:52"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 17:31:05",
                                "enddttm_date": "2018-01-31 17:34:39",
                                "5 PM": "00:03:34"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01_CHK",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 17:30:10",
                                "enddttm_date": "2018-01-31 17:31:00",
                                "5 PM": "00:00:50"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL02",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 12:37:01",
                                "enddttm_date": "2018-01-31 12:39:07",
                                "12 PM": "00:02:06"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 12:31:06",
                                "enddttm_date": "2018-01-31 12:36:54",
                                "12 PM": "00:05:48"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01_CHK",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 12:30:09",
                                "enddttm_date": "2018-01-31 12:31:01",
                                "12 PM": "00:00:52"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL02",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 05:34:23",
                                "enddttm_date": "2018-01-31 05:36:16",
                                "5 AM": "00:01:53"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 05:31:04",
                                "enddttm_date": "2018-01-31 05:34:18",
                                "5 AM": "00:03:14"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01_CHK",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 05:30:08",
                                "enddttm_date": "2018-01-31 05:30:58",
                                "5 AM": "00:00:50"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL02",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 02:36:49",
                                "enddttm_date": "2018-01-31 02:39:30",
                                "2 AM": "00:02:41"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 02:31:01",
                                "enddttm_date": "2018-01-31 02:36:44",
                                "2 AM": "00:05:43"
                            },
                            {
                                "rundate": null,
                                "intf_name": "FNSAPL01_CHK",
                                "app_name": null,
                                "status": "Success",
                                "dttm_date": "2018-01-31 02:30:08",
                                "enddttm_date": "2018-01-31 02:30:55",
                                "2 AM": "00:00:47"
                            }
                        ]
                    }
                };
            }

            return detailData;
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