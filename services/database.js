var fs = require('fs')
var net = require('net')
var level = require('level')
var multilevel = require('multilevel')
var log = require('../lib/log')('database')

module.exports = function(config, done){
	var dbpath = config.database
	if(!fs.existsSync(dbpath)){
		console.error('error - database path does no exist: ' + dbpath)
		process.exit(1)
	}
	log('creating level database: %s', dbpath)
	var db = level(dbpath)

	net.createServer(function (c) {
    c.pipe(multilevel.server(db)).pipe(c)
  }).listen(config.dbport, function(){
  	log('multilevel listening %s', config.dbport)
  	if(done){
			done()
		}
  })
}