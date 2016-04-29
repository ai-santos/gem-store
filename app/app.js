(function(){
'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('gemStore', ['ngRoute','myApp.view1','myApp.view2', 'myApp.version'])

  var gems = [
{
    name: "Amethyst",
    price: 25,
    description: "is a meditative and calming stone which works in the emotional, spiritual, and physical planes to provide calm, balance, patience, and peace.",
    images: [
      'images/Amethyst-3.jpg'
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
    price: 25.95,
    description: "Madiera citrine cut in a pentagonal barion style has fine golden orange color and Vs clarity. This gem cut by Larry Moriarty weighs 9.31 carats and has exceptional brilliance. Mined in Uraguay.",
    shine: 8,
    images: [
      'images/pentagonal-3.jpg'
      ],
    canPurchase: true
},
{
    name: "Opal",
    price: 25.95,
    description: "is a gem-quality form of hydrated amorphous silicon dioxide. Its name is derived from the Sanskrit word for 'stone'. It is gemologically classed as a mineraloid rather than a mineral, owing to its amorphous form.",
    shine: 8,
    images: [
     'images/opal-gem.jpg'
      ],
    canPurchase: true
},
{
    name: "Dodecahedron Gem",
    price: 35.95,
    description: "has been a source of metaphysical interest for at least 2000 years. Like a crystal or gem, its facets and symmetries compel our eyes and hearts to observe life more deeply. Some have believed that the Dodecahedron represents an idealized form of Divine thought, will, or idea. ",
    shine: 8,
    images: [
     'images/dodecahedron-full.jpg'
      ],
    canPurchase: true
}
];

  app.controller('StoreController', function(){
    this.products = gems;
  })

  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(selectedTab){
      this.tab = selectedTab;
    };
    this.isSet = function(value){
     return this.tab === value; 
   };
 })
  
  



  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])

})();


