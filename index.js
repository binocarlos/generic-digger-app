var fs = require('fs')
var path = require('path')

var Database = require('./lib/database')
var Session = require('./lib/session')
var HTTP = require('./lib/httpserver')
var Router = require('./lib/router')
var Gandalf = require('./lib/gandalf')

var log = require('./lib/log')('boot')
var config = require('./config')

var db = Database(config)
var session = Session(db)
var gandalf = Gandalf(config, db, session)

var router = Router(config, {
	db:db,
	session:session,
	gandalf:gandalf
})

HTTP(config, router, function(err){
	log('started')
})