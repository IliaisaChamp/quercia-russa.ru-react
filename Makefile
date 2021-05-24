develop:
	npm run start

build:
	 npm run build

test:
	npm test --experimental-vm-modules

lint:
	npx eslint .

lintfix:
	npx eslint . --fix

tests:
	npm test -- --coverage --coverageProvider=v8	

.PHONY: test

