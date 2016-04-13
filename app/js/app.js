var controllers = angular.module('appController',[]);

var app = angular.module('mainModule', ['ngMaterial','appController','ngRoute','ngMdIcons']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            }).when('/devices', {
                templateUrl: 'views/devices.html',
                controller: 'DevicesCtrl'
            }).
            when('/users', {
                templateUrl: 'views/users.html',
                controller: 'UsersCtrl'
            }).
            when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            }).
            when('/gateways', {
                templateUrl: 'views/gateways.html',
                controller: 'GatewaysCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

app.config(function($mdThemingProvider) {
    var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});