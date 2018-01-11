'use strict';
angular.module('demoTest')
  .controller('EditUserCtrl', function ($scope,$routeParams,auth,$location) {
    
  	var userId=$routeParams.userId;
  	if(!isNaN(userId)){
  		$scope.userDetails={};
      auth.getUserdetails({
          id:userId
        }).then(function successCallback(response) {
          try {
            $scope.userDetails=response.data;
          } catch(error) {
            console.log("Error")
          }
        }, function errorCallback(response) {
          console.log(response.data || "Request failed")
        });
  	}

  	$scope.editUserSubmit=function(){
     console.log($scope.userDetails)
      auth.updateuser({
            id:$scope.userDetails.id,
            usrId:$scope.userDetails.userID,
            name:$scope.userDetails.name,
            address:$scope.userDetails.address
        }).then(function successCallback(response) {
            console.log(response)
            try {
                $location.path("/user");
            } catch(error) {
                console.log("Error")
            }
        }, function errorCallback(response) {
            console.log(response.data || "Request failed")
        });
  	}
  });
