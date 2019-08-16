const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.indexOfEditFormToShow = null;

  this.createUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        createUsername: this.createUsername,
        createPassword: this.createPassword
      }
    }).then(function(response){
      console.log(response);
      // console.log(controller.data.username);
      controller.createUsername = null;
      controller.createPassword = null;
    }, function(error){
      console.log(error);
    });
  }
  //
  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
        console.log(response);
        controller.goApp();
        // console.log(controller.data.username);
        controller.username = null;
        controller.password = null;
    }, function(error){
        console.log(error);
    });
  }
  //
  this.logOut = function(){
    $http({
        method:'DELETE',
        url:'/sessions'
    }).then(function(response){
        console.log(response);
        controller.loggedInUsername = null;
    }, function(error){
        console.log(error);
    });
  }
  //
  this.goApp = function(){
    $http({
        method:'GET',
        url: '/app'
    }).then(function(response){
        controller.loggedInUsername = response.data.username
    }, function(error){
        console.log('error');
        console.log(error);
    });
  }
  }]);
