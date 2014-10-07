var fs = require('fs')
var angular = require('angular-bsfy')

module.exports = angular.module('libs.widgets',[
	require('../config').name,
	require('../debug').name
])

.directive('footer', function(config){
	return {
		restrict:'EA',
		replace:true,
		scope:true,
		template:fs.readFileSync(__dirname + '/footer.html', 'utf8'),
		controller:function($scope){
			$scope.config = config
		}
	}
})

