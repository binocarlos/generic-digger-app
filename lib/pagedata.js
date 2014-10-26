var fs = require('fs')

/*

	When we serve a HTML page there is the chance to populate values using ejs templates

	If the filepath (not HTTP path) is defined in this object - then the function will
	be run and the values returned are passed to the ejs template

	The request and response are passed so you can call 404 - 403 etc rather than run the callback
	
*/
module.exports = {
	'/index.html':function(req, res, done){
		done({
			test:'hello'
		})
	}
}