Harmonic Mean
=============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the harmonic mean over an array of values.


## Installation

``` bash
$ npm install compute-hmean
```

## Usage

The use the module,

``` javascript
var hmean = require( 'compute-hmean' );
```

#### hmean( arr )

Computes the harmonic mean.

``` javascript
var data = [ 1, 5, 3, 4, 16 ];

var mu = hmean( data );
// returns ~2.7088
```

Note: only calculate the harmonic mean for positive, real numbers. 

If an `array` contains negative numbers, the harmonic mean is nonsensical. For example, consider `x = [ 3, -3, 4 ]`. The harmonic mean of `x` is `12`, while the arithmetic mean is `1.33333...`. The harmonic mean should never be greater than the arithmetic mean. 

Similarly, if an `array` contains zero values, the harmonic mean is also zero: `1/0 --> infinity` and `1/infinity --> 0`. For example, consider `x = [ 0, 100, 1000, 10000 ]`. Using the textbook definition of the harmonic mean, the mean would be `0`, which, given `x`, does not make sense.

If an `array` contains elements less than or equal to `0`, the function returns `NaN`.



## Examples

``` javascript
var hmean = require( 'compute-hmean' );

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

For arrays exceeding memory constraints, you are encouraged to use streams; see [flow-hmean](https://github.com/flow-io/flow-hmean).


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
$ make view-cov
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