angular.module('starter.services', [])

    .factory('Food', function() {
        var food = 100;

        return {
            totalFood : function(){
                return food
            },
            addFood : function(value){
                food = food + value;
            },
            removeFood : function(value){
                food = food - value;
            }
        };


    });