install:
	@npm install

dev:
	sudo DEBUG=* node index.js

buildfolder:
	mkdir -p www/build

browserifypages:
	browserify \
		www/pages/home/index.js \
		www/pages/register/index.js \
		-p [ factor-bundle \
			-o www/build/home.js \
			-o www/build/register.js \
		] \
  -o www/build/common.js

uglifypages:
	browserify \
  	-g uglifyify \
		www/pages/home/index.js \
		www/pages/register/index.js \
		-p [ factor-bundle \
			-o www/build/home.min.js \
			-o www/build/register.min.js \
		] \
  -o www/build/common.min.js

devpages: buildfolder browserifypages
pages: buildfolder browserifypages uglifypages

build: pages

.PHONY: install dev pages buildfolder build uglifypages browserifypages