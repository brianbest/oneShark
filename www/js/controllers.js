angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$interval','Animal','Food','Lux',function($scope,$interval,Animal,Food,Lux) {
      // If anamals exist then do happyness checks 30 sec
      $interval(happyCheck(),30000);

      //If Anamals then do food consumtion

      //After 5 seconds check to generate customer
      $interval(customerCheck(),5000);

      function happyCheck(){
        //get all the animals
        var allAnimals = Animal.ownedAnimals();
        var curFood = Food.totalFood();
        var allLux = Lux.ownedLux();
        var happynessMods = [];
        var removeAnimals = [];

        //loop through all animals
        for(var i = 0; i < allAnimals.length; i++){
          //if food is available animal consumes food
          if(curFood > allAnimals[i].food){
            Food.removeFood(allAnimals[i].food);
          }else{
            //else if food is not available, noFoodHappyness modifer applied
            happynessMods.push(-5);
          }
          //loop owned lux item list
          for(var y =0; y < allAnimals[i].lux.length; y++){
            //if lux item at index is appart of animal lux list add happyness modifier
            happynessMods.push(allLux.indexOf(allAnimals[i].lux[y]));
          }

          //if animal has a required list do loop
          if(allAnimals[i].requiredItem){
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
          var currentHappy = allAnimals[i].happiness;
          for(var g = 0; g < happynessMods.length; g++){
           currentHappy =  currentHappy + happynessMods[g];
          }
          //if happiness is below x value remove this animal from the game and alert player.
          if(currentHappy < 1){
            // Remove animal
            console.log('killed animal');
            Animal.removeAnimals(i);
            continue;
          }else{
            //Apply Happyness to animal
            allAnimals[i].happiness = currentHappy;
          }

          //Update display info
        }

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
