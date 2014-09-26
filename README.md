hmean
=====

====
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the harmonic mean over an array of values.


## Installation

``` bash
$ npm install compute-hmean
```

## Usage

``` javascript
var hmean = require( 'compute-hmean' );
```

## Examples

``` javascript
var data = new Array( 1000 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}

console.log( hmean( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

For arrays exceeding memory constraints, you are encouraged to use streams; see [flow-mean](https://github.com/flow-io/flow-hmean).


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Rebekah Smith.



[npm-image]: http://img.shields.io/npm/v/compute-hmean.svg
[npm-url]: https://npmjs.org/package/compute-hmean

[travis-image]: http://img.shields.io/travis/compute-io/hmean/master.svg
[travis-url]: https://travis-ci.org/compute-io/hmean

[coveralls-image]: https://img.shields.io/coveralls/compute-io/hmean/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/hmean?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/hmean.svg
[dependencies-url]: https://david-dm.org/compute-io/hmean

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/hmean.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/hmean

[github-issues-image]: http://img.shields.io/github/issues/compute-io/hmean.svg
[github-issues-url]: https://github.com/compute-io/hmean/issues