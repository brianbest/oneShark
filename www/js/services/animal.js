angular.module('starter.services', [])

    .factory('Animal', function() {
        var animals = [];
        var allAnimals = {
            'pig' : {
                name : 'Pig',
                food : 2,
                lux : ['ring'],
                happiness: 100,
                coolness : 1
            },
            'penguin' :{
                name: 'Penguin',
                food : 4,
                requiredItem : 'ice',
                lux : [],
                happiness: 100,
                coolness : 20
            }
        };



        return {
            ownedAnimals : function(){
                return animals
            },
            addAnimals : function(animal){
                var h = allAnimals[animal];
                h.id = Math.floor(Math.random() * 60000) + 1;
                animals.push(h);
                console.log(allAnimals[animal]);
            },
            removeAnimals : function(animalIndex){
                animals.splice(animals.indexOf(animalIndex), 1);
            }
        };


    }).factory('Food', function() {
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


    }).factory('Lux', function() {
        var lux = [];
        var allLux = {
            'ring':'ring',
            'ice' :'ice'
        };
        return {
            ownedLux : function(){
                return lux
            },
            addLux : function(luxAdd){
                lux.push(allLux[luxAdd]);

            },
            removeLux : function(luxIndex){
                lux.splice(lux.indexOf(luxIndex), 1);
            }
        };


    }).factory('Money', function() {
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