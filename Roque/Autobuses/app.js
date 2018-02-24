angular.module('app', ['ngRoute'])

.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl : "views/buscador.html"
        })
        .when("/parada/:id", {
            templateUrl : "views/parada.html"
        })
        .when("/favoritos", {
            templateUrl : "views/favoritos.html"
        });
});

