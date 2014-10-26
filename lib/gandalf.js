var Gandalf = require('gandalf')
var log = require('./log')('gandalf')
var providers = ['facebook', 'twitter', 'google']
var spaces = require('level-spaces')

/*

	create an auth server based on gandalf
	
*/
module.exports = function(config, db, session){
	var providerConfig = {}

	providers.forEach(function(provider){
		if(config[provider + 'id'] && config[provider + 'secret']){
			log('enabling auth provider: %s', provider)
			providerConfig[provider] = {
				id:config[provider + 'id'],
				secret:config[provider + 'secret']
			}
		}
	})

	var gandalf = Gandalf(spaces(db, 'auth'), {
	  providers:providerConfig,
	  session:session
	})


	gandalf.on('log', function(type, message){
		log(type + ' ' + message)
	})

	gandalf.on('log:error', function(type, message){
		log.error(type + ' ' + message)
	})

	return gandalf
}