var Gandalf = require('gandalf')
var log = require('./log')('gandalf')
var providers = ['facebook', 'twitter', 'google']
var Session = require('./session')
var spaces = require('level-spaces')

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

	return Gandalf(spaces(db, 'auth'), {
	  providers:providerConfig,
	  session:session
	})
}