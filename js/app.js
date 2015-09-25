var app = angular.module('myApp', ['ngRoute']);

// this should be in a factory and not global but we'll leave it like this to 
// keep the example simple.
var data = [
  { label: 'Plastira G1', value: 0, color: 'blue' },
  { label: 'Plastira G2', value: 0, color: 'orange' },
  { label: 'Plastira G3', value: 0, color: 'green' },
  { label: 'Rest', value: 1, color: 'red' }
];

var data2 = [
  { label: 'Plastira G1', value: 0, color: 'blue' },
  { label: 'Plastira G2', value: 0, color: 'orange' },
  { label: 'Plastira G3', value: 0, color: 'green' },
  { label: 'Rest', value: 1, color: 'red' }
];

app.controller('MainCtrl', function($scope, $location){
  $scope.data = data;
  // so that our directive can know how to access the values from our data.
  $scope.accessor = function(d){ return d.value };

  $scope.newValue = function(value) {
	console.log(value);
	if (value == "3500-7500 MW") {
		data[0].value = 0;
		data[1].value = 0;
		data[2].value = 0;
		data[3].value = 1;
	}
	else if (value == "7750 MW") {
		data[0].value = 0;
		data[1].value = 11;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8000 MW") {
		data[0].value = 0;
		data[1].value = 14;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8250 MW") {
		data[0].value = 0;
		data[1].value = 18;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8500 MW") {
		data[0].value = 0;
		data[1].value = 18;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8750 MW") {
		data[0].value = 0;
		data[1].value = 26;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "9000 MW") {
		data[0].value = 0;
		data[1].value = 35;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "9250-9750 MW") {
		data[0].value = 22;
		data[1].value = 22;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10000 MW") {
		data[0].value = 22;
		data[1].value = 23;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10250 MW") {
		data[0].value = 27;
		data[1].value = 28;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10500 MW") {
		data[0].value = 33;
		data[1].value = 33;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10750 MW") {
		data[0].value = 38;
		data[1].value = 39;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "11000 MW") {
		data[0].value = 40;
		data[1].value = 40;
		data[2].value = 8;
		data[3].value = 0;
	}
	else if (value == "11250 MW") {
		data[0].value = 40;
		data[1].value = 40;
		data[2].value = 18;
		data[3].value = 0;
	}
	else if (value == "11500 MW") {
		data[0].value = 40;
		data[1].value = 40;
		data[2].value = 20;
		data[3].value = 0;
	}
	else {
		data[0].value = 0;
		data[1].value = 0;
		data[2].value = 0;
		data[3].value = 1;
	}
  }
});

app.controller('Node_Losses', function($scope, $location) {
  $scope.data2 = data2;
  // so that our directive can know how to access the values from our data.
  $scope.accessor2 = function(d2){ return d2.value };

  $scope.newValue2 = function(value) {
	console.log(value);
	if (value == "3500 MW") {
		data2[0].value = 0.99451;
		data2[1].value = 0.99451;
		data2[2].value = 0.99451;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "3750 MW") {
		data2[0].value = 0.99402;
		data2[1].value = 0.99402;
		data2[2].value = 0.99402;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "4000 MW") {
		data2[0].value = 0.99415;
		data2[1].value = 0.99415;
		data2[2].value = 0.99415;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "4250 MW") {
		data2[0].value = 0.99506;
		data2[1].value = 0.99506;
		data2[2].value = 0.99506;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "4550 MW") {
		data2[0].value = 0.99434;
		data2[1].value = 0.99434;
		data2[2].value = 0.99434;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "4750 MW") {
		data2[0].value = 0.99381;
		data2[1].value = 0.99381;
		data2[2].value = 0.99381;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "5000 MW") {
		data2[0].value = 0.99328;
		data2[1].value = 0.99328;
		data2[2].value = 0.99328;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "5250 MW") {
		data2[0].value = 0.99294;
		data2[1].value = 0.99294;
		data2[2].value = 0.99294;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "5500 MW") {
		data2[0].value = 0.99376;
		data2[1].value = 0.99376;
		data2[2].value = 0.99376;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "5750 MW") {
		data2[0].value = 0.99433;
		data2[1].value = 0.99433;
		data2[2].value = 0.99433;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "6000 MW") {
		data2[0].value = 0.99489;
		data2[1].value = 0.99489;
		data2[2].value = 0.99489;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "6250 MW") {
		data2[0].value = 0.99371;
		data2[1].value = 0.99371;
		data2[2].value = 0.99371;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "6500 MW") {
		data2[0].value = 0.99351;
		data2[1].value = 0.99351;
		data2[2].value = 0.99351;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "6750 MW") {
		data2[0].value = 0.99281;
		data2[1].value = 0.99281;
		data2[2].value = 0.99281;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "7000 MW") {
		data2[0].value = 0.99242;
		data2[1].value = 0.99242;
		data2[2].value = 0.99242;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "7250 MW") {
		data2[0].value = 0.99512;
		data2[1].value = 0.99512;
		data2[2].value = 0.99512;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "7500 MW") {
		data2[0].value = 0.99484;
		data2[1].value = 0.99484;
		data2[2].value = 0.99484;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "7750 MW") {
		data2[0].value = 0.99360;
		data2[1].value = 0.99360;
		data2[2].value = 0.99360;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "8000 MW") {
		data2[0].value = 0.99287;
		data2[1].value = 0.99287;
		data2[2].value = 0.99287;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "8250 MW") {
		data2[0].value = 0.99222;
		data2[1].value = 0.99222;
		data2[2].value = 0.99222;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "8500 MW") {
		data2[0].value = 0.99149;
		data2[1].value = 0.99149;
		data2[2].value = 0.99149;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "8750 MW") {
		data2[0].value = 0.98994;
		data2[1].value = 0.98994;
		data2[2].value = 0.98994;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "9000 MW") {
		data2[0].value = 0.98854;
		data2[1].value = 0.98854;
		data2[2].value = 0.98854;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "9250 MW") {
		data2[0].value = 0.98722;
		data2[1].value = 0.98722;
		data2[2].value = 0.98722;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "9500 MW") {
		data2[0].value = 0.98671;
		data2[1].value = 0.98671;
		data2[2].value = 0.98671;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "9750 MW") {
		data2[0].value = 0.98505;
		data2[1].value = 0.98505;
		data2[2].value = 0.98505;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "10000 MW") {
		data2[0].value = 0.98280;
		data2[1].value = 0.98280;
		data2[2].value = 0.98280;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "10250 MW") {
		data2[0].value = 0.98148;
		data2[1].value = 0.98148;
		data2[2].value = 0.98148;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "10500 MW") {
		data2[0].value = 0.98035;
		data2[1].value = 0.98035;
		data2[2].value = 0.98035;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "10750 MW") {
		data2[0].value = 0.97920;
		data2[1].value = 0.97920;
		data2[2].value = 0.97920;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "11000 MW") {
		data2[0].value = 0.97812;
		data2[1].value = 0.97812;
		data2[2].value = 0.97812;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "11250 MW") {
		data2[0].value = 0.97729;
		data2[1].value = 0.97729;
		data2[2].value = 0.97729;
		data2[3].value = 1 - data2[0].value;
	}
	else if (value == "11500 MW") {
		data2[0].value = 0.97619;
		data2[1].value = 0.97619;
		data2[2].value = 0.97619;
		data2[3].value = 1 - data2[0].value;
	}
	else {
		data2[0].value = 0;
		data2[1].value = 0;
		data2[2].value = 0;
		data2[3].value = 1;
	}
  }
});

app.config(function($routeProvider){
  $routeProvider
    .when('/injections', {
      controller: 'MainCtrl',
      templateUrl: 'graph.html'
    })
	.when('/losses', {
      controller: 'Node_Losses',
      templateUrl: 'graph2.html'
    })
    .otherwise({ redirectTo: '/' })
});