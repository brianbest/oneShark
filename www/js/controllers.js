angular.module('starter.controllers', ['starter.services'])

.controller('DashCtrl', ['$scope','$interval','Animal','Food','Lux','Money',function($scope,$interval,Animal,Food,Lux,Money) {
      //init view
      $scope.money = Money.totalNow();

      Animal.addAnimals('pig');
      Animal.addAnimals('penguin');
      $scope.ownedAnimals = Animal.ownedAnimals();
      Lux.addLux('ring');
      //Lux.addLux('ice');
      $scope.luxItems = Lux.ownedLux();
      $scope.totalFood = Food.totalFood();


      $scope.totalCustomer = 0;
      $scope.overallCool = 0;


      $interval(happyCheck,5000);
      $interval(customerCheck,1000);

      //Buttons

      $scope.buyFood = function(){
        Money.lowerValue(100);
        $scope.money = Money.totalNow();
      };

      $scope.buyAnimal = function(kind,value){
        if(value > $scope.money){
          alert('not enough money!');
        }else{
          Animal.addAnimals(kind);
          $scope.ownedAnimals = Animal.ownedAnimals();
          Money.lowerValue(value);
          $scope.money = Money.totalNow();
        }

      };

      //Loop functions

      function customerCheck(){
        console.log('running');
        var overallCool = 0;
        var allAnimals = Animal.ownedAnimals();
        for(var r = 0; r < allAnimals.length; r++){
          overallCool = overallCool + allAnimals[r].coolness;
        }
        $scope.overallCool = overallCool;
        var check = Math.floor(Math.random() * 100) + 1;
        console.log(check);
        if(check <= overallCool){
          console.log('GOT A PERSON');
          $scope.totalCustomer++;
          Money.addValue(30);
          $scope.money = Money.totalNow();
        }
        if($scope.money < 1){
          alert('end of game');
        }
      }

      function happyCheck(){
        //get all the animals
        var allAnimals = Animal.ownedAnimals();
        var curFood = Food.totalFood();
        var allLux = Lux.ownedLux();

        var removeAnimals = [];

        //loop through all animals
        console.log('init Happy');
        console.log(allAnimals.length);
        for(var i = 0; i < allAnimals.length; i++){
          var happynessMods = [];
          //if food is available animal consumes food
          if(curFood >= allAnimals[i].food){
            console.log('This animal can eat');
            Food.removeFood(allAnimals[i].food);
          }else{
            console.log('Not Enough Food!');
            //else if food is not available, noFoodHappyness modifer applied
            happynessMods.push(-5);
          }
          //loop owned lux item list
          for(var y =0; y < allAnimals[i].lux.length; y++){
            console.log(' Adding Happy');
            //if lux item at index is appart of animal lux list add happyness modifier
            happynessMods.push(allLux.indexOf(allAnimals[i].lux[y]));
          }

          //if animal has a required list do loop
          if(allAnimals[i].requiredItem){
            console.log('Animal needs an item');
            //loop animal required list
            var requiredCheck = false;
            for(var y =0; y < allLux.length; y++){
              if(allLux[y] === allAnimals[i].requiredItem){
                //if park has animal required add modifier
                requiredCheck = true;
              }
            }
            if(!requiredCheck){
              //if modifer doesn't exist then add subtraction modifier
              happynessMods.push(-15);
            }
          }


          //run happyness equation
          console.log('Happy check');
          console.log(happynessMods);
          var currentHappy = allAnimals[i].happiness;
          for(var g = 0; g < happynessMods.length; g++){
           currentHappy =  currentHappy + happynessMods[g];
            console.log('cur happy' + currentHappy);
          }
          console.log('Done Happy calc');
          //if happiness is below x value remove this animal from the game and alert player.
          if(currentHappy < 1){
            // Remove animal
            console.log('killed animal');
            Animal.removeAnimals(i);
            continue;
          }else{
            console.log('apply new happy');
            //Apply Happyness to animal
            allAnimals[i].happiness = currentHappy;
          }

          //Update display info
        }
        $scope.luxItems = Lux.ownedLux();
        $scope.totalFood = Food.totalFood();
        $scope.ownedAnimals = Animal.ownedAnimals();

      }

    }])

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
