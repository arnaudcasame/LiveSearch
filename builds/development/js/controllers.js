// JavaScript Document
var customerControllers = angular.module('customerControllers', ['ngAnimate']);

customerControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/data.json').success(function (data) {
        $scope.customers = data;
        $scope.customerOrder = 'name';

    });
}]);

customerControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('js/data.json').success(function (data) {
        $scope.customers = data;
        $scope.whichItem = $routeParams.itemId;


        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.customers.length - 1;
        }

        if ($routeParams.itemId < $scope.customers.length - 1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    });
}]);