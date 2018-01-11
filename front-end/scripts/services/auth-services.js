'use strict';
angular.module('demoTest')
    .factory("auth", ["$http",function ($http) {
        return  {

            addNewUser:function(params){
                return $http({
                  method: 'POST',
                  url: 'http://localhost:3000/api/user/add',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data:params
                });
            },
            getUserList:function(params){
              return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/users/all',
                headers: {
                  'Content-Type': 'application/json'
                },
              });
            },

            updateuser:function(params){
                return $http({
                  method: 'POST',
                  url: 'http://localhost:3000/api/user/edit',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data:params
                });
            },

            getUserdetails:function(params){
              return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/user/findone',
                headers: {
                  'Content-Type': 'application/json'
                },
                data:params
              });
            },
            
            deleteUser:function(params){
              console.log(params)
              return $http({
                method: 'DELETE',
                url: 'http://localhost:3000/api/user',
                headers: {
                  'Content-Type': 'application/json'
                },
                data:params
              });
            }              
        }
    }])
