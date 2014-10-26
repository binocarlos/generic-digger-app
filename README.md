generic-digger-app
==================

A generic app that combines the following:

 * digger(server/client) - for general database storage
 * gandalf/shadowfax - for user logins
 * admin panel - for user management

## usage

Install:

```bash
$ npm install
```

Build:

```bash
$ make build
```

Run:

```bash
$ make dev
```


## run

To run with the debug module turned on:

```
$ sudo DEBUG=* node index.js
```

### HTTP routes
The main HTTP routes are defined in `lib/router.js`

You can setup the server side login from there.

Control user accounts from the [gandalf](https://github.com/binocarlos/gandalf) api.

The `gandalf.session()` handler can be used to ensure a user session for a route.

### Angular Apps
To write an angular page you need to create a `page` folder in `www/pages`

Then - in the `index.js`:

#### module
```js
var angular = require('angular-bsfy')

var app = angular.module('MyModule',[
	
])
.controller('MyController', function($scope){

	$scope.test = 'hello'
	
})
```

#### Makefile
Then you add the page to the `pages` step in the Makefile:

```
browserify \
		www/pages/home/index.js \
		www/pages/register/index.js \
		www/pages/mypage/index.js \
		-p [ factor-bundle \
			-o www/build/home.js \
			-o www/build/register.js \
			-o www/build/mypage.js \
		] \
  -o www/build/common.js
```

Then you add a HTML file pointing to the `command` and `mypage` (or whatever your new app is called):

#### HTML
```html
<html>
<head>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
  <link href="material/css-compiled/ripples.min.css" rel="stylesheet">
  <link href="material/css-compiled/material-wfont.min.css" rel="stylesheet">
  <link href="css/core.css" rel="stylesheet">
</head>
<body ng-app="MyModule" ng-controller="MyController">

	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>

	<script src="build/common.js"></script>
	<script src="build/mypage.js"></script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	<script src="material/scripts/ripples.js"></script>
	<script src="material/scripts/material.js"></script>

</body>
</html>
```

#### Debugging

The client side code has the debugger plugged in.

To enable client debugging (in Chrome for nice colors) - open the development console and type:

```
debug.enable('*')
```

Or to only debug a certain section:

```
debug.enable('libs:*')
```

To disable logging again:

```
debug.disable()
```

## licence

MIT
