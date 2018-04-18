# Array Utils [![Build Status](https://travis-ci.org/mshirlaw/array-utils.svg?branch=master)](https://travis-ci.org/mshirlaw/array-utils)

A simple utility for working with arrays 

## Installation

```javascript
npm install array-utils --save
```

## Syntax

```javascript
const utils = require('array-utils');

utils.sum(<ARRAY>, <OBJECT-KEY>); // sum an array of primitive values or objects
utils.multiply(<ARRAY>, <OBJECT-KEY>); // multiply an array of primitive values or objects

```

## Usage

```javascript
// sum an empty array
utils.sum([]); // returns is 0

// sum an array of primitive integer values
utils.sum([1,2,3]); // returns is 6

// sum an array of string values values
utils.sum(['2','4','6']); // returns is 12

// multiply an empty array
utils.multiply([]); // returns 0

// multiply an array of primitive integer values
utils.multiply([1,2,3]); // returns 6

// multiply an array of string values values
utils.multiply(['2','4','6']); // returns 48

// sum or mutliply an array of objects given an object key
const people = [
	{ name: 'John Smith', age: 31, sex: 'male'}, 
	{ name: 'Mary Smith', age: 32, sex: 'female' }, 
	{ name: 'Brett Johnson', age: 21, sex: 'male' }
];
utils.sum(people, 'age'); // returns 84
utils.multiply(people, 'age'); // returns 20832
```

## Tests

```javascript
npm test
```

# Release history

* 1.0.0 Initial Release