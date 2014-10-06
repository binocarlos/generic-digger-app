var Router = require('routes-router')
var hyperprox = require('hyperprox')
var Fileserver = require('./fileserver')
var log = require('./log')('router')

module.exports = function(config, apis){
	var router = Router()
	var authProxy = hyperprox('http://' + config.authhost + ':' + config.authport)
	authProxy.on('route', function(req, address){
		log('auth: ' + req.url + ' -> ' + address)
	})
	router.addRoute('/auth/*', authProxy.handler())
	router.addRoute('/*', Fileserver(config))
	return router
}