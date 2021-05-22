develop:
	webpack serve -c config/webpack/dev.js

build:
	 webpack -c config/webpack/prod.js

test:
	npm test --experimental-vm-modules

lint:
	npx eslint .

lintfix:
	npx eslint . --fix

tests:
	npm test -- --coverage --coverageProvider=v8	

.PHONY: test

