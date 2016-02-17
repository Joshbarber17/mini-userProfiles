
app.controller('MainController', function($scope, profileService){
  $scope.getUsers = function() {
    $scope.users = profileService.getUsers()
  }
  $scope.getUsers();
});
