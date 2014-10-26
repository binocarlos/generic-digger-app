var Router = require('routes-router')
var mount = require('routes-router-mount')
var log = require('./log')('router')

var Fileserver = require('./fileserver')
var Gandalf = require('./gandalf')
var Session = require('./session')

/*

	hook together the various routes
	
*/

module.exports = function(config, db){
	var session = Session(db)
	var gandalf = Gandalf(config, db, session)
	var router = mount(Router())
	router.mount('/auth', gandalf.handler())
	router.addRoute('/*', Fileserver(config))
	return router
}