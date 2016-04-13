controllers.controller('UsersCtrl', ['$http', '$scope', function($http, $scope){
    $scope.onPaginate = function () {
        $scope.selected = [];
    }

    $http.get('data/users.json').success(function(data) {
        $scope.users = data;
    });

    $scope.selected = [];

    $scope.query = {
        order: 'email',
        limit: 5,
        page: 1
    };

    $scope.getUsers = function () {
        // TOD
    };

}]);