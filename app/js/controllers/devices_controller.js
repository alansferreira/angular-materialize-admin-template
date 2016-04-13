controllers.controller('DevicesCtrl', ['$http', '$scope', function($http, $scope){
    $scope.onPaginate = function () {
        $scope.selected = [];
    }

    $http.get('data/devices.json').success(function(data) {
        $scope.devices = data;
    });

    $scope.selected = [];

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.getDevices = function () {
        // TOD
    };

}]);