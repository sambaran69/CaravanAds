(function () {
    "use strict";
    angular
        .module("caravanAds")
        .controller("CaravanListCtrl", ["caravansResource", "paginationService", CaravanListCtrl]);

    function CaravanListCtrl(caravansResource, paginationService) {
        var vm = this;

        vm.pageSize = 6, vm.currentPage = 0, vm.totalItems = 0,
        vm.selectedState = 'State', vm.selectedMake = 'Make',
        vm.searchCriteria = '', vm.searchContext = {}, vm.caravans = [];

        vm.prevPage = function () {
            if (vm.currentPage > 0) {
                vm.currentPage--;
            }
            vm.loadPage();
            vm.prevPageDisabled();
        };

        vm.prevPageDisabled = function () {
            return vm.currentPage === 0 ? "disabled" : "";
        };

        vm.nextPage = function () {
            if (vm.currentPage < paginationService.pageCount(vm.pageSize, vm.totalItems)) {
                vm.currentPage++;
            }
            vm.loadPage();
            vm.nextPageDisabled();
        };

        vm.nextPageDisabled = function () {
            return vm.currentPage === paginationService.pageCount(vm.pageSize, vm.totalItems) ? "disabled" : "";
        };

        vm.loadPage = function () {
            vm.searchCriteria = paginationService.buildSearchCriteria(vm.pageSize, vm.currentPage, vm.selectedState, vm.selectedMake);

            caravansResource.get({ search: vm.searchCriteria }, function (data) {
                vm.caravans = data.items;
                vm.searchContext = data.searchContext;
                vm.totalItems = vm.searchContext.totalNumberOfItems;
            });
        }

        vm.loadPage();

        vm.openStateDropdown = function () {
            vm.stateSelectOpen = !vm.stateSelectOpen;
        };

        vm.openMakeDropdown = function () {
            vm.makeSelectOpen = !vm.makeSelectOpen;
        };

        vm.setState = function (state) {
            if (vm.selectedState !== state) {
                vm.selectedState = state;
                vm.openStateDropdown();
                vm.pageSize = 6; vm.currentPage = 0; vm.totalItems = 0;
                vm.loadPage();
            }
        };

        vm.setMake = function (make) {
            if (vm.selectedMake !== make) {
                vm.selectedMake = make;
                vm.openMakeDropdown();
                vm.pageSize = 6; vm.currentPage = 0; vm.totalItems = 0;
                vm.loadPage();
            }
        };

    }

}());
