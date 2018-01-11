'use strict';
angular
  .module('demoTest', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/add', {
        templateUrl: 'views/add-user.html',
        controller: 'AddUserCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/user/edit:userId', {
        templateUrl: 'views/edit-user.html',
        controller: 'EditUserCtrl'
      })
      .otherwise({
        redirectTo: '/user'
      });
  });
