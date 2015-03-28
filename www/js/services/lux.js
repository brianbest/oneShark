angular.module('starter.services', [])

    .factory('Lux', function() {
        var lux = [];
        //var allLux = {};
        return {
            ownedLux : function(){
                return lux
            }
        };


    });