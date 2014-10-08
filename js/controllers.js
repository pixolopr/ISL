angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, MyServices) {
    
    var tablesuccess = function(data, status)
    {
        $scope.leaguedata = data;
    };
    MyServices.gettable().success(tablesuccess);
})

.controller('FixturesCtrl', function($scope, MyServices ) {
    
    var fuxturesuccess = function(data, status)
    {
        $scope.fixturedata = data;
        console.log($scope.fixturedata);
    };
    
    console.log("fixtures function");
    MyServices.getfixtures().success(fuxturesuccess);

})

.controller('PixoloCtrl', function($scope, $stateParams) {
  
})

.controller('TeamsCtrl', function($scope, $stateParams){

})

.controller('StarCtrl', function($scope) {
});
