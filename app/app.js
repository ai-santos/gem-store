(function(){
'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('gemStore', ['ngRoute','myApp.view1','myApp.view2','myApp.version'])

  var gem = { name: 'Amethyst', price: "25.95"}

  app.controller('StoreController', function(){

  })
  
  



  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])

})();


