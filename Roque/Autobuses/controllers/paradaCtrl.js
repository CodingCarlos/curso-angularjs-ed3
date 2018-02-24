angular.module('app').controller('paradaCtrl', paradaCtrl);

function paradaCtrl(paradas, $routeParams) {
    var self = this;

    self.paradas = paradas;
    self.paradaNumber = $routeParams.id;    
}