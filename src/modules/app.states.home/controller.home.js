/**
 * @memberOf app.states.home
 */
(function (module) {
  'use strict';

  function HomeController($scope, statesService) {
    var controller = this;

    $scope.Search = { query: '', results: [] };

    controller.search = function () {
      statesService.search($scope.search.query).then(function (results) {
        $scope.search.results = results;
      });
    };
  }

  module.controller('homeController', [
    '$scope',
    'statesService',
    HomeController
  ]);

}(angular.module('app.states.home')));
