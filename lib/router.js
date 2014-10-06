var Router = require('routes-router')
var log = require('./log')('router')

var Fileserver = require('./fileserver')
var Gandalf = require('./gandalf')
var Session = require('./session')

module.exports = function(config, db){
	var session = Session(db)
	var gandalf = Gandalf(config, db, session)
	var router = Router()
	router.addRoute('/auth/*', gandalf.handler())
	router.addRoute('/*', Fileserver(config))
	return router
}