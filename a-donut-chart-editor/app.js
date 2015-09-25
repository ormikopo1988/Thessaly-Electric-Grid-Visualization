var app = angular.module('myApp', ['ngRoute']);

// this should be in a factory and not global but we'll leave it like this to 
// keep the example simple.
var data = [
  { label: 'Plastira G1', value: 0, color: 'blue' },
  { label: 'Plastira G2', value: 0, color: 'orange' },
  { label: 'Plastira G3', value: 0, color: 'green' },
  { label: 'All Zero', value: 1, color: 'red' }
];

app.controller('MainCtrl', function($scope, $location){
  $scope.data = data;
  // so that our directive can know how to access the values from our data.
  $scope.accessor = function(d){ return d.value };

  $scope.newValue = function(value) {
	console.log(value);
	if (value == "3500-7500") {
		data[0].value = 0;
		data[1].value = 0;
		data[2].value = 0;
		data[3].value = 1;
	}
	else if (value == "7750") {
		data[0].value = 0;
		data[1].value = 11;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8000") {
		data[0].value = 0;
		data[1].value = 14;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8250") {
		data[0].value = 0;
		data[1].value = 18;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8500") {
		data[0].value = 0;
		data[1].value = 18;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "8750") {
		data[0].value = 0;
		data[1].value = 26;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "9000") {
		data[0].value = 0;
		data[1].value = 35;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "9250-9750") {
		data[0].value = 22;
		data[1].value = 22;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10000") {
		data[0].value = 22;
		data[1].value = 23;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10250") {
		data[0].value = 27;
		data[1].value = 28;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10500") {
		data[0].value = 33;
		data[1].value = 33;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "10750") {
		data[0].value = 38;
		data[1].value = 39;
		data[2].value = 0;
		data[3].value = 0;
	}
	else if (value == "11000") {
		data[0].value = 40;
		data[1].value = 40;
		data[2].value = 8;
		data[3].value = 0;
	}
	else if (value == "11250") {
		data[0].value = 40;
		data[1].value = 40;
		data[2].value = 18;
		data[3].value = 0;
	}
	else if (value == "11500") {
		data[0].value = 40;
		data[1].value = 40;
		data[2].value = 20;
		data[3].value = 0;
	}
}
});

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'graph.html'
    })
    .otherwise({ redirectTo: '/' })
});