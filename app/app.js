(function(){
'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('gemStore', ['ngRoute','myApp.view1','myApp.view2', 'myApp.version'])

  var gems = [
{
    name: 'Dodecahedron',
    price: 2,
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      {
        full: 'images/dodecahedron-full.jpg',
        thumbnail: 'images/gem-01.gif'
      },
      {
        full: 'images/pentagonal-gem.jpg',
        thumbnail: 'images/pentagonal-gem.jpg'
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "Makes me feel like royalty, truly beautiful.",
        author: "ai@leen.com"
      },
      {
        stars: 1,
        body: "Does not look like the picture, blech.",
        author: "lee@hates.com"
      }
    ],
    canPurchase: true
},
{
    name: "Pentagonal Gem",
    price: 5.95,
    description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      {
        full: 'images/dodecahedron-full.jpg',
        thumbnail: 'images/gem-01.gif'
      },
      {
        full: 'images/dodecahedron-full-2.jpg',
        thumbnail: 'images/dodecahedron-thumb-2.gif'
      }
      ],
    canPurchase: true
}

];

  app.controller('StoreController', function(){
    this.products = gems;

  })
  
  



  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])

})();


