(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("caravansResource", ["$resource", "appSettings", caravansResource]);

    function caravansResource($resource, appSettings) {
        var url = $resource(appSettings.serverPath + "api/caravans/:id");
        return url;
    }

}());