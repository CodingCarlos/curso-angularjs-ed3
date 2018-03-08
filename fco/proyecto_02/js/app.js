angular.module('time', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', 

		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('home', {
					url: "/",
					templateUrl: "index.html"
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
				.state('footer', {
					url: "/footer",
					templateUrl: "views/footer.html"
				})
				.state('contenido', {
					url: "/contenido",
					templateUrl: "views/contenido.html"
				})
		}
	]);