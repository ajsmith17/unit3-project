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
        controller.loggedInUsername = response.data.username;
    }, function(error){
        console.log('error');
        console.log(error);
    });
  };
  // =====================
  //      Cities
  // =====================
  // Add City
  this.addCity = function(){
    $http({
      method: 'POST',
      url: '/cities',
      data: {
        name: this.name,
        description: this.description,
        image: this.image
      }
    }).then(function(response){
      controller.getCities();
      controller.name = null;
      controller.description = null;
      controller.image = null;
      // console.log(response);
    }, function(error){
      console.log(error);
    });
  };
  // Get Cities
  this.getCities = function(){
    $http({
      method: 'GET',
      url: '/cities',
    }).then(function(response){
      controller.cities = response.data;
    }, function(error){
      console.log(error);
    });
  };
  // Delete City
  this.deleteCity = function(city){
    $http({
      method: 'DELETE',
      url: '/cities/' + city._id
    }).then(function(response){
       controller.getCities();
    }, function(error){
      // console.log(error);
    });
  };
  // Update City
  this.editCity = function(city){
    $http({
      method: 'PUT',
      url: '/cities/' + city._id,
      data: {
        name: this.updatedCityName,
        description: this.updatedCityDescription,
        image: this.updatedCityImage
      }
    }).then(function(response){
      controller.getCities();
      controller.indexOfEditFormToShow = null;
    });
  };

  this.getCities();
  }]);

$(() => {

  const $openButton = $('.openModal');
  const $modal = $('#modal');
  const $close = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
  };

  $openButton.on('click', openModal)
  $close.on('click', closeModal)
  // setTimeout(openModal, 2000);

})
