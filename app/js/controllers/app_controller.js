controllers.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope,$mdSidenav){
    $scope.appName = 'Caribou Technologies';

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.menu = [
        {
            link : '#/dashboard',
            title: 'Dashboard',
            icon: 'dashboard'
        },{
            link : '#/devices',
            title: 'IOT Devices',
            icon: 'lock'
        },
        {
            link : '#/users',
            title: 'IOT Users',
            icon: 'group'
        },
        {
            link : '#/gateways',
            title: 'Gateways',
            icon: 'cloud'
        }
    ];

    $scope.admin = [
        {
            link : '',
            title: 'Settings',
            icon: 'settings'
        }
    ];

}]);
