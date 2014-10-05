var gandalf = require('gandalf')
var log = require('../lib/log')('auth')
var providers = ['facebook', 'twitter', 'google']

module.exports = function(config, done){
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

	done()

}