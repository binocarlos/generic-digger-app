var config = require('./config')
var dotty = require("dotty")
var log = require('../../lib/log')('libs:auth')

module.exports = angular.module('libs.auth',[
	config.name
])
.factory('LoginAttempt', function($http, config){
	var url = dotty.get(config, "auth.urls.login")
	if(!url){
		throw new Error("config.auth.urls.login not specified")
	}
	return function(data, done){
		log('LoginAttempt POST %c', url)
		$http({
			url: url,
			method: 'POST',
			data:data
		}).then(function(){
			log('success')
		}, function(){
			log.error('error')
		})
		
	}
})
.factory('AuthEvents', function(LoginAttempt){

	return function($scope){
		$scope.$on('shadowfax:message', function(){
			log('shadowfax:message')
		})

		$scope.$on('shadowfax:signup', function(){
			log('shadowfax:signup')
			document.location = '/register.html'
		})

		$scope.$on('shadowfax:login', function(data){
			log('shadowfax:login')
			LoginAttempt(data, function(err, message){
				console.log('-------------------------------------------');
				console.log('done')
				console.dir(err)
				console.dir(message)
			})
		})
	}
})