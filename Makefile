install:
	@npm install

dev:
	sudo DEBUG=* node index.js

buildfolder:
	mkdir -p www/build

pages: buildfolder
	browserify \
		www/pages/home/index.js \
		www/pages/register/index.js \
		-p [ factor-bundle \
			-o www/build/home.js \
			-o www/build/register.js \
		] \
  -o www/build/common.js

build: pages

.PHONY: install dev pages pages2 buildfolder build