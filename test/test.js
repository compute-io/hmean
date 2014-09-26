
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	hmean = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-hmean', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( hmean ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
				'5',
				5,
				true,
				undefined,
				null,
				NaN,
				function(){},
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				hmean( value );
			};
		}
	});

	it( 'should compute the harmonic mean', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 3.14410;

		assert.closeTo( hmean( data ), expected, 0.0001 );
	});

		it( 'should handle values of 0', function test() {
		var data, expected;

		data = [ 2, 4, 0, 3, 8, 2 ];
		expected = 0;

		assert.strictEqual( hmean( data ), expected );
	});

});