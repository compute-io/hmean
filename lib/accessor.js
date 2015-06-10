'use strict';

/**
* FUNCTION: hmean( arr, clbk )
*	Computes the harmonic mean of an array using an accessor function.
*
* @param {Array} arr - input array
* @param {Function} clbk - accessor function for accessing array values
* @returns {Number|Null} harmonic mean or null
*/
function hmean( arr, clbk ) {
	var len = arr.length,
		sum = 0,
		val,
		i;

	if ( !len ) {
		return null;
	}
	for ( i = 0; i < len; i++ ) {
		val = clbk( arr[ i ], i );
		if ( val <= 0 ) {
			return NaN;
		}
		sum += 1 / val;
	}
	return len / sum;
} // end FUNCTION hmean()


// EXPORTS //

module.exports = hmean;
