/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate if a value is equal to NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	hmean = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array harmonic mean', function tests() {

	it( 'should export a function', function test() {
		expect( hmean ).to.be.a( 'function' );
	});

	it( 'should compute the harmonic mean', function test() {
		var data,
			sum,
			expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		sum = 0;
		for ( var i = 0; i < data.length; i++ ) {
			sum += 1 / data[ i ];
		}
		expected = data.length / sum;

		assert.closeTo( hmean( data ), expected, 1e-7 );
	});

	it( 'should return NaN if an input array contains a 0', function test() {
		var data, mu;

		data = [ 2, 4, 0, 3, 8, 2 ];
		mu = hmean( data );

		// Check: mu === NaN
		assert.isTrue( isnan( mu ) );
	});

	it( 'should return NaN if an input array contains a negative number', function test() {
		var data, mu;

		data = [ 3, -4, 5 ];
		mu = hmean( data );

		// Check: mu === NaN
		assert.isTrue( isnan( mu ) );

	});


	it( 'should return null if provided an empty array', function test() {
		assert.isNull( hmean( [] ) );
	});

});
