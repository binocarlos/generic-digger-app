var angular = require('angular-bsfy')
var config = require('../../config.json')
var dotty = require("dotty")

module.exports = angular.module('libs.config',[
	
])
.factory('config', function(){
	config.date = new Date()

	config._get = function(key){
		return dotty.get(config, key)
	}

	config._ensure = function(key){
		var val = dotty.get(config, key)
		
		if(!val){
			throw new Error(key + ' not found in the config')
		}

		return val
	}
	
	return config
})