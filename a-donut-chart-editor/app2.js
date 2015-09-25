var app = angular.module('myApp', []);
app.directive('donutChart', function() {
	return { 
		restrict: 'E',
		link: function(scope, element) {
			var width = 500, height = 500;
			var color = d3.scale.category10();
			var pie = d3.layout.pie().sort(null);
			var arc = d3.svg.arc()
			.outerRadius(width / 2 * 0.9)
			.innerRadius(width / 2 * 0.5);
			var svg = d3.select(element[0]).append('svg')
			.attr({width: width, height: height})
			.append('g')
			
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
			// add the <path>s for each arc slice
			svg.selectAll('path').data(pie([82, 62, 10, 32]))
			.enter().append('path')
			.style('stroke', 'white')
			.attr('d', arc)
			.attr('fill', function(d, i){ return color(i) });
		}
	};
});