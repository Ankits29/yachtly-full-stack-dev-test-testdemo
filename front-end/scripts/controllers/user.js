'use strict';
angular.module('demoTest')
  .controller('UserCtrl', function ($scope,$location,auth) {
    $scope.users=[];
    auth.getUserList().then(function successCallback(response) {
        try {
            $scope.users=response.data;
        } catch(error) {
            console.log("Error")
        }
    }, function errorCallback(response) {
        console.log(response.data || "Request failed")
    });

    $scope.editUser=function(userId){
        $location.path("/user/edit"+ userId);
    }
    $scope.deleteUser=function(userId,index){
        if (confirm("Are you sure want to delete this user?") == true) {
            auth.deleteUser({
                id:userId
            }).then(function successCallback(response) {
                try {
                    $scope.users.splice(index,1);
                } catch(error) {
                    console.log("Error")
                }
            }, function errorCallback(response) {
                console.log(response.data || "Request failed")
            });
        }
    }

  });
