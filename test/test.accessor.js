/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate if a value is equal to NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	hmean = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor harmonic mean', function tests() {

	it( 'should export a function', function test() {
		expect( hmean ).to.be.a( 'function' );
	});

	it( 'should compute the harmonic mean using an accessor', function test() {
		var data, expected, sum;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		sum = 0;
		for ( var i = 0; i < data.length; i++ ) {
			sum += 1 / getValue( data[ i ] );
		}
		expected = data.length / sum;

		assert.closeTo( hmean( data, getValue ), expected, 1e-7 );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return NaN if an accessed array value is 0', function test() {
		var data, mu;

		data = [
			{'x':3},
			{'x':0},
			{'x':5}
		];

		mu = hmean( data, getValue );

		// Check: mu === NaN
		assert.isTrue( isnan( mu ) );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return NaN if an accessed array value is a negative number', function test() {
		var data, mu;

		data = [
			{'x':3},
			{'x':-4},
			{'x':5}
		];
		mu = hmean( data, getValue );

		// Check: mu === NaN
		assert.isTrue( isnan( mu ) );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( hmean( [], getValue ) );

		function getValue( d ) {
			return d.x;
		}
	});

});
