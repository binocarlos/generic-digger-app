install:
	@npm install

dev-start:
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

pages2: buildfolder
	browserify -r angular-bsfy --standalone angular-bsfy > www/build/shared.js
	browserify www/pages/home/index.js --exclude angular-bsfy > www/build/home.js

.PHONY: install dev-start pages pages2 buildfolder