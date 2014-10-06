var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')

var app = angular.module('Home',[
    shadowfax.name
])
.controller('HomeController', function($scope){

	console.log('-------------------------------------------');
	console.log('we are in the home controller')

})