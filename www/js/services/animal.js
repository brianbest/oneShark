angular.module('starter.services', [])

    .factory('Animal', function() {
        var animals = [];
        var allAnimals = [];
        return {
            ownedAnimals : function(){
                return animals
            },
            addAnimals : function(animals){
                animals.push(allAnimals[animals]);
            },
            removeAnimals : function(animalIndex){
                animals.splice(animals.indexOf(animalIndex), 1);
            }
        };


    });