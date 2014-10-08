angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FixturesCtrl', function($scope) {
  $scope.friends = Friends.all();
})

.controller('PixoloCtrl', function($scope, $stateParams) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('TeamsCtrl', function($scope, $stateParams){

})

.controller('StarCtrl', function($scope) {
});
