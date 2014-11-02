install:
	@npm install

dev:
	sudo DEBUG=* node index.js

buildfolder:
	mkdir -p www/build

browserifyangular:
	browserify \
		-r angular-bsfy \
  	-o www/build/angular.js

uglifyangular:
	browserify \
		-g uglifyify \
		-r angular-bsfy \
  	-o www/build/angular.min.js

browserifypages: browserifyangular
	browserify \
		-x angular-bsfy \
		www/pages/home.js \
		www/pages/register.js \
		-p [ factor-bundle \
			-o www/build/home.js \
			-o www/build/register.js \
		] \
  -o www/build/common.js

uglifypages: uglifyangular
	browserify \
		-x angular-bsfy \
  	-g uglifyify \
		www/pages/home.js \
		www/pages/register.js \
		-p [ factor-bundle \
			-o www/build/home.min.js \
			-o www/build/register.min.js \
		] \
  -o www/build/common.min.js

devpages: buildfolder browserifypages
pages: buildfolder browserifypages uglifypages
qpages: buildfolder browserifypages

build: pages

.PHONY: install dev pages buildfolder build uglifypages browserifypages