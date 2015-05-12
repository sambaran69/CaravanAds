(function() {
    'use strict';

    angular
        .module("common.services")
        .factory("paginationService", [paginationService]);

    function paginationService(){
        return {
            buildSearchCriteria: function (pageSize, currentPage, stateFilter, makeFilter) {
                var searchCriteria = '?count=' + pageSize + '&skip=' + (currentPage * pageSize);
                if (stateFilter !== 'State')
                    searchCriteria = searchCriteria + '&state=' + stateFilter;
                if (makeFilter !== 'Make')
                    searchCriteria = searchCriteria + '&make=' + makeFilter;
                return searchCriteria;
            },
            pageCount: function (pageSize, totalItems) {
                return Math.ceil(totalItems / pageSize) - 1;
            }
        };
    }

}());