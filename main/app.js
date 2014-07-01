'use strict';

angular
    .module('bonita.portal', [
        'ngCookies',
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'features/poc/views/main.html',
                controller: 'MainCtrl'
            }).when('/cases', {
                templateUrl: 'features/poc/views/cases.html',
                controller: 'CasesCtrl'
            }).when('/users', {
                templateUrl: 'features/poc/views/users.tpl.html',
                controller: 'UsersCtrl'
            })
            .when('/pocProtractor', {
              templateUrl: 'features/poc/pocprotractor.html',
              controller: 'PocprotractorCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
