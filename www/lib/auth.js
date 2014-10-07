module.exports = angular.module('libs.auth',[
	
])
.service('LoginAttempt', function(){

	return function(data){
		console.log('-------------------------------------------');
		console.log('login attempt')
		console.dir(data)
	}
	
})