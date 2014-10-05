var gandalf = require('gandalf')
var log = require('../lib/log')('auth')
var providers = ['facebook', 'twitter', 'google']
var Database = require('../lib/databaseclient')
module.exports = function(config, done){
	var providerConfig = {}

	var db = Database(config)

	providers.forEach(function(provider){
		if(config[provider + 'id'] && config[provider + 'secret']){
			log('enabling auth provider: %s', provider)
			providerConfig[provider] = {
				id:config[provider + 'id'],
				secret:config[provider + 'secret']
			}
		}
	})

	log('creating sublevel: auth')
	var authlevel = db.sublevel('auth')

	done()
}