var Router = require('routes-router')
var Fileserver = require('./fileserver')
var log = require('./log')('gandalf')

module.exports = function(config, done){
	var router = Router()
	router.addRoute('/*', Fileserver(config))
	return router
}