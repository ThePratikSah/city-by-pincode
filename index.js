const pincode = require('./pincode.json');

/**
 *
 * @param {string} pin Enter any pincode to get city data. Example: 854301
 * @returns {object} Returns city data of the given pincode.
 */
function getCityDataByPinCode(pin) {
	return pincode[pin];
}

module.exports = { getCityDataByPinCode };
module.exports = pincode;
