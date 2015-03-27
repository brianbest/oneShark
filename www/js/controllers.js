angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','Money',function($scope,Money) {

      $scope.money = Money.totalNow();

      $scope.lowerMoney = function(x){
        Money.lowerValue(x);
        $scope.money = Money.totalNow();
      };

      $scope.addMoney = function(x){
        Money.addValue(x);
        $scope.money = Money.totalNow();
      };

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
