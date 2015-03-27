angular.module('starter.services', [])

    .factory('Money', function() {
        var money = 20000;

        return {
            totalNow :  function(){
                return money
            },
            lowerValue: function(value){
                money = money -  value;
            },
            addValue: function(value){
                money = money +  value;
            }
        };


    });