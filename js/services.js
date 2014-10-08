angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
var myservices = angular.module('myservices', [])

.factory('MyServices', function($http, $location) {
  // Might use a resource here that returns a JSON array



  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    },
    getfixtures: function() {
        return $http.get( "http://www.pixoloproductions.in/isl_fixtures.php", {params: {}});
    },
      gettable: function() {
        return $http.get("http://www.pixoloproductions.in/isl_table.php" , {})
      },
  }
});
