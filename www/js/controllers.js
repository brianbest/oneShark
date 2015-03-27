angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$interval','Animal',function($scope,$interval,Animal) {
      // If anamals exist then do happyness checks 30 sec
      $interval(happyCheck(),30000);

      //If Anamals then do food consumtion

      //After 5 seconds check to generate customer
      $interval(customerCheck(),5000);

      function happyCheck(){
        //get all the animals
        //loop through all animals
          //if food is available animal consumes food
          //else if food is not available, noFoodHappyness modifer applied
          //loop owned lux item list
            //if lux item at index is appart of animal lux list add happyness modifier
          //if animal has a required list do loop
            //loop animal required list
              //if park has animal required add modifier
            //if modifer doesn't exist then add subtraction modifier
          //run happyness equation
          //if happiness is below x value remove this animal from the game and alert player.
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
