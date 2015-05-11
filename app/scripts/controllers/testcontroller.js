'use strict';

/**
 * @ngdoc function
 * @name targetProjectApp.controller:TestcontrollerCtrl
 * @description
 * # TestcontrollerCtrl
 * Controller of the targetProjectApp
 */
angular.module('targetProjectApp')
  .controller('TestcontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
