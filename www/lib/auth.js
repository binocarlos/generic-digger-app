var angular = require('angular-bsfy')
var fs = require('fs')

module.exports = angular.module('libs.auth',[
	require('shadowfax-http').name,
	require('shadowfax').name,
	require('./config').name,
	require('./debug').name,
	require('./messages').name
])

/*

	attach the shadowfax events to the scrope to handle logins
	
*/
.controller('AuthController', function($scope, shadowfaxhttp, config, debug, growl){
	var log = debug('auth')
	var redirects = {
		login:config._ensure("auth.redirects.login"),
		register:config._ensure("auth.redirects.register"),
		signup:config._ensure("auth.redirects.signup")
	}
	var urls = {
		login:config._ensure("auth.urls.login"),
		register:config._ensure("auth.urls.register")
	}

	shadowfaxhttp($scope, urls)

	$scope.$on('shadowfax:error', function($e, type, message){
		growl.error(type, message)
	})

	$scope.$on('shadowfax:message', function($e, type, message){
		growl.message(type, message)
	})

	$scope.$on('shadowfax:complete', function($e, type){
		log('complete: %s', type)
		growl.message(title, message)
	})

	$scope.$on('shadowfax:signup', function(){
		log('signup redirect')
		document.location = redirects.signup
	})
})

.directive('signupButton', function(){
	return {
		restrict:'EA',
		replace:true,
		template:fs.readFileSync(__dirname + '/widgets/signupbutton.html', 'utf8')
	}
})