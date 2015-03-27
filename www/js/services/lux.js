angular.module('starter.services', [])

    .factory('Lux', function() {
        var lux = [];
        var allLux = [];
        return {
            ownedLux : function(){
                return lux
            },
            addLux : function(addLux){
                lux.push(allLux[addLux]);
            },
            removeLux : function(luxIndex){
                lux.splice(lux.indexOf(luxIndex), 1);
            }
        };


    });