/**
*
*	COMPUTE: hmean
*
*
*	DESCRIPTION:
*		- Computes the harmonic mean over an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// HMEAN //

	/**
	* FUNCTION: hmean( arr )
	*	Computes the harmonic mean over an array of values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} harmonic mean
	*/
	function hmean( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'hmean()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			sum = 0,
			val;
		for ( var i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( val <= 0 ) {
				return NaN;
			}
			sum += 1 / val;
		}
		return len / sum;
	} // end FUNCTION hmean()


	// EXPORTS //

	module.exports = hmean;

})();