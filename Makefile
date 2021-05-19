develop:
	cross-env NODE_ENV=development npx webpack serve --mode development --open

install:
	npm ci

build:
	 npm run build

test:
	npm test --experimental-vm-modules

lint:
	npx eslint .

tests:
	npm test -- --coverage --coverageProvider=v8	

.PHONY: test

