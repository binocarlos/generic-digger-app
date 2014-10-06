var Gandalf = require('gandalf')
var log = require('./log')('gandalf')
var providers = ['facebook', 'twitter', 'google']
var Database = require('./databaseclient')
var Session = require('./session')

module.exports = function(config, done){
	var providerConfig = {}

	var db = Database(config)
	var session = Session(db)

	providers.forEach(function(provider){
		if(config[provider + 'id'] && config[provider + 'secret']){
			log('enabling auth provider: %s', provider)
			providerConfig[provider] = {
				id:config[provider + 'id'],
				secret:config[provider + 'secret']
			}
		}
	})

	return Gandalf(db.sublevel('auth'), {
	  providers:providerConfig,
	  session:Session(db)
	})
}