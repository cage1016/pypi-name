'use strict';
var got = require('got');
var Promise = require('pinkie-promise');

var PYPI_PACKAGE = 'https://pypi.python.org/pypi/';

module.exports = function (name) {
	if (!(typeof name === 'string' && name.length !== 0)) {
		return Promise.reject(new Error('Package name required'));
	}

	return got.head(PYPI_PACKAGE + name.toLowerCase()).then(function () {
		return false;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			return true;
		}

		throw err;
	});
};
