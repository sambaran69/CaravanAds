/// <reference path="caravans/caravanDetailView.html" />
(function () {
    "use strict";

    var app = angular.module("caravanAds", ["common.services", "ui.router", "ngResource"]);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/caravans");

        $stateProvider
            .state('caravans', {
                url: '/caravans',
                templateUrl: 'app/caravans/caravanListView.html',
                controller: 'CaravanListCtrl'
            })
            .state('detail', {
                url: '/detail/:caravanId',
                templateUrl: 'app/caravans/caravanDetailView.html',
                controller: 'CaravanDetailCtrl'
            })

    }]);
}());