install:
	@npm install

dev-start:
	sudo DEBUG=* node index.js

pages:
	mkdir -p www/pages/build
	browserify -r angular-bsfy --standalone angular-bsfy > www/pages/build/shared.js
	browserify -t brfs www/pages/home/index.js --exclude angular-bsfy > www/pages/build/home.js

testpages:
	mkdir -p www/build
	browserify www/pages/home/index.js > www/build/home.js

.PHONY: install dev-start