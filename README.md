# hyperlego

a [Sails v1](https://sailsjs.com) and [Angular5](https://angular.io) application

## Getting Started 

### Prerequisites
have [nodejs](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/getting-started/installing-node) installed

### Installation

#### 1. install angular-cli and sails globally

```bash
$ npm i -g sails @angular/cli
```

#### 2. clone the github repo

```bash
$ mkdir hyperlego && cd $_
$ git clone git@github.com:iammarix/hyperlego.git .
$ git submodule sync
```

#### 3. install dependencies
```bash
$ npm install
```

### Live Viewing
#### both client & server
```bash
$ npm run start
```
view @ http://localhost:4200/
#### just server
```bash
$ sails lift
```
hit @ http://localhost:1337/api/{endpoint}/
#### just client
```bash
$ ng serve
```
view @ http://localhost:4200/

## Testing
```bash
$ npm run lint
$ npm run test
```

## Versioning
We use SemVer for versioning. For the versions available, see the [tags on this repository](https://github.com/iammarix/hyperlego/tags).


<!-- Internally, Sails used [`sails-generate@1.15.20`](https://github.com/balderdashy/sails-generate/tree/v1.15.20/lib/core-generators/new). -->


