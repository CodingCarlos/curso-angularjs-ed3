angular.module('app').filter('minutes', [minutesFilter]);

function minutesFilter() {
	return function(input) {
        input = Number(input) || 0;
        var out;

		if (input == 999999) {

            out = '+ 20';

        } else {

            out = (input/60).toFixed();

        }

		return out + ' min';
	};
}