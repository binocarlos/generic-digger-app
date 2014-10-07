var angular = require('angular-bsfy')
var log = require('../../lib/log')
window.debug = log.debug
module.exports = angular.module('libs.debug',[
	
])
.factory('debug', function(){
	return log
})