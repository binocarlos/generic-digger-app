var fs = require('fs')
var path = require('path')

var Database = require('./lib/database')
var HTTP = require('./lib/httpserver')
var Router = require('./lib/router')
var log = require('./lib/log')('boot')
var config = require('./config')

var db = Database(config)
var router = Router(config, db)

HTTP(config, router, function(err){
	log('started')
})