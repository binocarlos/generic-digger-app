var angular = require('angular-bsfy')

module.exports = angular.module('libs.messages',[
	require('./debug').name
])

/*

	attach the shadowfax events to the scrope to handle logins
	
*/
.factory('growl', function(debug){
	var log = debug('growl')

	return {
		error:function(title, message){

			if(arguments.length==1){
				message = title
				title = ''
			}

			message = message || ''

			log('error: ' + title + ' ' + message)

			$.growl.error({
				location: 'br',
				title: title,
				message: message
			})
		},
		message:function(title, message){

			if(arguments.length==1){
				message = title
				title = ''
			}

			message = message || ''

			log('notice: ' + title + ' ' + message)

			$.growl.notice({
				location: 'br',
				title: title,
				message: message
			})
		},
	}
	
})