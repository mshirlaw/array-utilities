const assert = require('assert');
const utils = require('./index.js');

describe('ArrayUtils', () => {

	describe('GIVEN sum', () => {

		it('THEN should correctly return 0 for an empty array', () => {
			const array = [];
			assert.equal(utils.sum(array), 0);
		});
		
		it('THEN should correctly return the total for an array of integer values', () => {
			const array = [1,1,1,1,1];
			assert.equal(utils.sum(array), 5);
		});

		it('THEN should correctly return the total for an array of floating point values', () => {
			const array = [1.1,1.2,1.3,1.4,1.5];
			assert.equal(utils.sum(array), 6.5);
		});

		it('THEN should correctly return the total for an array of string values', () => {
			const array = ['1','1','1','1','1'];
			assert.equal(utils.sum(array), 5);
		});

		describe('WHEN an object key is provided', () => {

			it('THEN should correctly return 0 for an empty array', () => {
				const array = [];
				assert.equal(utils.sum(array, 'value'), 0);
			});

			it('THEN should correctly return the total for an array of objects with integer values', () => {
				const objectArray = [
					{ name: 'Item 1', value: 1 },
					{ name: 'Item 2', value: 2 },
					{ name: 'Item 3', value: 3 }
				];
				assert.equal(utils.sum(objectArray, 'value'), 6);
			});

			it('THEN should correctly return the total for an array of objects with string values', () => {
				const objectArray = [
					{ name: 'Item 1', value: '1' },
					{ name: 'Item 2', value: '2' },
					{ name: 'Item 3', value: '3' }
				];
				assert.equal(utils.sum(objectArray, 'value'), 6);
			});

		});

	});
	
	describe('GIVEN multiply', () => {

		it('THEN should correctly return 0 for an empty array', () => {
			const array = [];
			assert.equal(utils.multiply(array), 0);
		});

		it('THEN should correctly return the total for an array of integer values', () => {
			const array = [1,1,1,1,1];
			assert.equal(utils.multiply(array), 1);
		});

		it('THEN should correctly return the total for an array of floating point values', () => {
			const array = [1.1,1.2,1.3,1.4,1.5];
			assert.equal(utils.multiply(array), 3.6036);
		});

		it('THEN should correctly return the total for an array of string values', () => {
			const array = ['1','1','1','1','1'];
			assert.equal(utils.multiply(array), 1);
		});

		describe('WHEN an object key is provided', () => {

			it('THEN should correctly return 0 for an empty array', () => {
				const array = [];
				assert.equal(utils.multiply(array, 'value'), 0);
			});
			
			it('THEN should correctly return the total for an array of objects with integer values', () => {
				const objectArray = [
					{ name: 'Item 1', value: 1 },
					{ name: 'Item 2', value: 2 },
					{ name: 'Item 3', value: 3 }
				];
				assert.equal(utils.multiply(objectArray, 'value'), 6);
			});

			it('THEN should correctly return the total for an array of objects with string values', () => {
				const objectArray = [
					{ name: 'Item 1', value: '1' },
					{ name: 'Item 2', value: '2' },
					{ name: 'Item 3', value: '3' }
				];
				assert.equal(utils.multiply(objectArray, 'value'), 6);
			});

		});

	});
	
});