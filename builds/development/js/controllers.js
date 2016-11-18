// JavaScript Document
var customerControllers = angular.module('customerControllers', ['ngAnimate']);

customerControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/badpayers-export.json').success(function (data) {

        $scope.customers = Object.values(data.badPayers);
        $scope.tablo = Object.keys($scope.customers);
        $scope.customerOrder = 'firstname';
        console.log(Object.values($scope.customers));
    });
}]);

customerControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('js/badpayers-export.json').success(function (data) {
        $scope.customers = Object.values(data.badPayers);
        
        $scope.whichItem = $routeParams.itemId;
        
        $scope.customer = $scope.customers[$scope.whichItem];


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
