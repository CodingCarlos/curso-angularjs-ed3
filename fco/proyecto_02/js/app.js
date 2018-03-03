angular.module('time', ['ngRoute']).config(['$stateProvider', '$urlRouterProvider', 

		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('home', {
					url: "/",
					template: "index.html"
				})
				.state('favoritos', {
					url: "/favoritos",
					templateUrl: "views/favoritos.html"
				})
				.state('contacto', {
					url: "/contacto",
					templateUrl: "views/contacto.html"
				})
				.state('menu', {
					url: "/menu",
					templateUrl: "views/menu.html"
				})
		}
	]);