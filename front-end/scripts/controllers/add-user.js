'use strict';
angular.module('demoTest')
  .controller('AddUserCtrl', function ($scope,auth,$location) {
    $scope.addUser={
    	name:'',
        email:'',
        phone:'',
        address:''
    }
    $scope.onAddUser=function(){
        auth.addNewUser({
            name:$scope.addUser.name,
            email:$scope.addUser.email,
            phoneNumber:$scope.addUser.phone,
            address:$scope.addUser.address
        }).then(function successCallback(response) {
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
