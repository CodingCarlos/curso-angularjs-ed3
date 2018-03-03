angular.module('app').controller('paradaCtrl', paradaCtrl);

function paradaCtrl(paradas, $stateParams) {
    var self = this;

    self.paradas = paradas;
    self.paradaNumber = $stateParams.id;    
}