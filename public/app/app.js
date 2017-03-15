'use strict';

angular.module('formApp', [
    'ngRoute',
    'ui.bootstrap']
)
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'formController'
        })
        .otherwise({
            redirectTo: '/'
        })
      $locationProvider.html5Mode(true);
  });
