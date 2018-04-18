'use strict';

class ArrayUtils {
	constructor() {}

	sum(array, key) {
		const values = this._getValues(array, key);
		return values.reduce(this._addElements, 0);
	}

	multiply(array, key) {
		if (!(array && array.length)) {
			return 0;
		}
		const values = this._getValues(array, key);
		return values.reduce(this._multiplyElements, 1);
	}

	_getValues(array, key) {
		return array.map(item => key ? item[key] : item);
	}

	_addElements(total, value) {
		return total + parseFloat(value || 0);
	}

	_multiplyElements(total, value) {
		return total * parseFloat(value || 1);
	}
}

module.exports = new ArrayUtils();