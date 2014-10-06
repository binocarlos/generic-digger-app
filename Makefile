install:
	@npm install

dev-start:
	sudo DEBUG=* node index.js

.PHONY: install dev-start