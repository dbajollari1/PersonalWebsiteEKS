#  My Personal Website
This is my personal website that shows off some of my experience and personal projects. All the code is in this github repository, feel free to clone it and use it as a template for yourself! Before attempting to run the project make sure you have the latest versions of [node](https://nodejs.org/en/) and [angular](https://angular.io/guide/setup-local).

## Get started

### Clone the repo
Feel free to name the project whatever you like on your local pc. 

```shell
git clone https://github.com/dbajollari1/dbajollari1.github.io.git
cd dbajollari1.github.io
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
ng serve
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build --output-path docs --base-href /` to build the project. The build artifacts will be stored in the `dist/` directory.
Build is done this way so no errors occur when deploying to github pages. If deploying to github pages make sure to go to docs/ directory, and make a copy of index.html, and rename it to 404.html. 

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

