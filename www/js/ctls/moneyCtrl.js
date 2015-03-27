angular.module('starter.controllers', [])

    .controller('MoneyCtrl', ['$scope','Money',function($scope,Money) {
        $scope.money = Money.totalNow();

        $scope.lowerMoney = function(x){
            Money.lowerValue(x);
            $scope.money = Money.totalNow();
        };

        $scope.addMoney = function(x){
            Money.addValue(x);
            $scope.money = Money.totalNow();
        };

    }]);