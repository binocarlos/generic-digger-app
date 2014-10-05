var fs = require('fs')
var path = require('path')
var net = require('net')
var multilevel = require('multilevel')
var level = require('level')
var sublevel = require('level-sublevel')
var log = require('../lib/log')('database')

module.exports = function(config, done){
	var path = config.database
	if(!fs.existsSync(path)){
		console.error('error - database path does no exist: ' + path)
		process.exit(1)
	}
	log('creating level database: %s', path)
	var db = sublevel(level(path))

	if(config.writemanifest){
		var manifestPath = path.join(__dirname, '..', 'manifest.json')
		log('writing level manifest: %s', manifestPath)
		multilevel.writeManifest(db, manifestPath)
	}

	if(done){
		done()
	}
}