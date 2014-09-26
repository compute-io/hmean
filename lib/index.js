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
	* @returns {Number} gmean value
	*/
	function hmean( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'hmean()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			rDenom = 0,
			hmean,
			zeroFl = false;

		for ( var i = 0; i < len; i++ ) {

			if (arr[i] === 0) {
				zeroFl = true;
				break;
			}			
			else {
				rDenom += 1 / arr[i];
			}

		}

		if (zeroFl) { 
			hmean = 0;
		}
		else {
			hmean = len / rDenom;
		}

		return hmean;
	} // end FUNCTION hmean()


	// EXPORTS //

	module.exports = hmean;

})();