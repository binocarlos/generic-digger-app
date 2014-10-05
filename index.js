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

console.dir(services)
process.exit()
