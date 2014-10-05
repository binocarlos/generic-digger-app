var log = require('./lib/log')('boot')
var async = require('async')
var config = require('./config')
var fs = require('fs')
var path = require('path')
var services = config.service

if(services){
	if(typeof(services)=='string'){
		services = [services]
	}
}
else{
	services = fs
		.readdirSync(path.join(__dirname, 'services'))
		.map(function(file){
			return file.replace(/\.js$/, '')
		})
}

async.forEachSeries(services, function(service, nextService){
	log(service + ' starting')
	var Service = require('./services/' + service)
	var service = Service(config, function(err){
		if(err){
			return nextService(err)
		}
		log(service + ' started')
		nextService()
	})
}, function(err){
	if(err){
		log.error('error booting: ' + err)
	}
	else{
		log('services booted')
	}
})