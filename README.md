Everything here is completely inspired from Joshua Morony. I'm just trying here to keep all the work in a single repo.


npm install -g karma-cli

npm install angular-cli --save-dev

npm install codecov --save-dev

npm install jasmine-core --save-dev

npm install jasmine-spec-reporter --save-dev

npm install karma --save-dev

npm install karma-chrome-launcher --save-dev

npm install karma-jasmine --save-dev

npm install karma-mocha-reporter --save-dev

npm install karma-remap-istanbul --save-dev

npm install ts-node --save-dev

npm install tslint --save-dev

npm install tslint-eslint-rules --save-dev

npm install @types/jasmine --save-dev

npm install @types/node --save-dev

======================================================================================================

karma init karma.conf.js

angular-cli.json

Create a file at src/environments/environment.prod.ts and add the following:

Create a file at src/environment/environment.ts and add the following:

Set up Mocks and Polyfills

Create a file at src/mocks.ts and add the following:

Create a file at src/polyfills.ts and add the following:

Create a file at src/test.ts and add the following:

Create a file at src/tsconfig.test.json and add the following:

Add the Test Command ng test to package.json

Create a file at src/app/app.spec.ts where app.component.ts is placed.

Create a file at src/pages/home/home.spec.ts
