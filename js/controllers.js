angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, MyServices) {

    var tablesuccess = function (data, status) {
        $scope.leaguedata = data;
        console.log(data);
    };
    MyServices.gettable().success(tablesuccess);
    /*   $scope.leaguedata = {"fixture":[{"name":"arsenal","awayname":"mumbai","yellowhome":["abhay","hamish"]}, {"name":"mumbai","awayname":"mumbai"}]};
    console.log($scope.leaguedata.fixture[0].yellowhome[0]);
    console.log($scope.leaguedata.fixture[0].yellowhome[1]);*/
})

.controller('FixturesCtrl', function ($scope, MyServices, $location) {
   
 /*   var fuxturesuccess = function (data, status) {
        $scope.fixturedata = data;
        console.log($scope.fixturedata);
    };
    MyServices.getfixtures().success(fuxturesuccess);*/
    
    $scope.gotodetail = function(data)
    {
        $location.path("#/tab/fixtures/"+data);
    };

})

.controller('FixturesDetailsCtrl', function ($scope, $stateParams, MyServices) {
      $scope.matchid = $stateParams.id;
    console.log($scope.matchid);

})

.controller('PixoloCtrl', function ($scope, $stateParams) {

})

.controller('TeamsCtrl', function ($scope, $stateParams) {

})

.controller('StarCtrl', function ($scope) {});