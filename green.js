var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.plants = [
    {
      image: "../assignment4/img/Adenium.jpg",
      id: 1,
      name: "Adeniuam obesum",
      desc: "Desert rose plant, we can grow indoor and outdoor",
      price: "399",
    },
    {
      image: "../assignment4/img/aglaonema.jpg",
      id: 2,
      name: "Golden Bay",
      desc: "This glowing ower sized chinese evergreen is tinged by sun",
      price: "699",
    },
    {
      id: 3,
      name: "Green Fills Syngonium Plant ",
      desc: "Syngonium plant type foliage it can grow indoor and outdoor",
      image: "../assignment4/img/Arrowhead.jpg",
      price: "399",
    },
    {
      id: 4,
      name: "Ixora Mini Dwarf(pink)",
      desc: "pink color plant it can grow indoor and outdoor",
      image: "../assignment4/img/Chineseixora.jpg",
      price: "299",
    },
    {
      id: 5,
      name: "Chlorophytum comosum",
      desc: "Also kwon as Spyder plant ,its grow 60cm tall",
      image: "../assignment4/img/Chlorophytum.jpg",
      price: "699",
    },
    {
      id: 6,
      name: "Chalisa Crossandra,kanakambaram",
      desc: "Flower plant It can grow indoor and outdoor",
      image: "../assignment4/img/Crossandra.jpg",
      price: "129",
    },
    {
      id: 7,
      name: " Cymbidium Orchid",
      desc: "Silk butterfly flowers ,itcan grow Indoor and outdoor ",
      image: "../assignment4/img/CymbidiumOrchidPlant.jpg",
      price: "599",
    },
    {
      id: 8,
      name: "Dragon tree",
      desc: "it is a house plant that has long elegant long",
      image: "../assignment4/img/dracaena.jpg",
      price: "499",
    },
    {
      id: 9,
      name: "Weeping fig",
      desc: "Ficus benjamina is spacing of flowaring plant",
      image: "../assignment4/img/figtrees.jpg",
      price: "609",
    },
    {
      id: 10,
      name: "Jade plant",
      desc: "live jade plant  it look beautiful in the garden",
      image: "../assignment4/img/gaachkalanchoe.jpg",
      price: "229",
    },
    {
      id: 11,
      name: "Barberton daisy",
      desc: "It is species of flowering plant",
      image: "../assignment4/img/Gerberapink.jpg",
      price: "450",
    },
    {
      id: 12,
      name: "Impatients balsamina",
      desc: "it si commonly known as balsam ,rose balsam",
      image: "../assignment4/img/impatiens.jpg",
      price: "150",
    },
    {
      id: 13,
      name: "Jade plant",
      desc: "live jade plant  it look beautiful in the garden",
      image: "../assignment4/img/jadeplant.jpg",
      price: "249",
    },
    {
      id: 14,
      name: "Orchid purple",
      desc: "Silk butterfly flowers ,itcan grow Indoor and outdoor",
      image: "../assignment4/img/orchidpurple.jpg",
      price: "339",
    },
    {
      id: 15,
      name: "Spathiphyllum wallisii",
      desc: "Commonly known as pease lily white sails or spathe flower",
      image: "../assignment4/img/Peacelily.jpg",
      price: "449",
    },
  ];
  $scope.cart = [];
  $scope.message = "";
  $scope.isShown = false;
  $scope.show = function (ite) {
    $scope.isShown = $scope.isVisible ? false : true;
  };
  $scope.store = function (item) {
    if (item) {
      $scope.cart.push({
        name: item.name,
        desc: item.desc,
        quntity: item.quntity,
        price: item.price,
      });
    }
  };

  $scope.move = function (item) {
    if (item) {
      $scope.cart.push({
        name: item.name,
        desc: item.desc,
        price: item.price,
        image: item.image,
      });
      $scope.plants.splice($scope.buyItems.indexOf(item), 1);
    }
  };

  $scope.clearCart = function () {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function (item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
  $scope.like = function (item) {
    if (item) {
      $scope.myStyle = {
        color: "red",
      };
    }
  };
});
