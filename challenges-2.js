// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of 
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

function getAllValuesForProperty(data, property) {
	const valuesofproperties = data.map(p => p.fields[property])
	return valuesofproperties
}

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an 
// array of all the male passengers [{...}, {...}, {...}, ...]

function filterByProperty(data, property, value) {
	return data.filter(p => p.fields[property] === value)
}

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a 
// given property have been removed

function filterNullForProperty(data, property) {
	return data.filter(p => p.filter[property] !== undefined)
}

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum 
// for any (numeric) property
// Return the total of all values for a given property. This

function sumAllProperty(data, property) {
	const propertyfiltered = data.filter(p => p.fields[property] !== undefined)
	return propertyfiltered.reduce((acc, p) => acc + p.fields[property], 0)
}


// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an 
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C, 
// and Q, and a couple passengers have undefined for this property. 
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked 
// at Cherbourg, 77 emabrked at Queenstown, and 2 are undedfined

function countAllProperty(data, property) {
	return {}
}


// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values 
// of a properties divided into buckets and counting the number
// of items in each bucket.

function makeHistogram(data, property, step) {
	return []
}

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an 
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

function normalizeProperty(data, property) {
	return []
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getAllValuesForProperty = getAllValuesForProperty
module.exports.filterByProperty = filterByProperty
module.exports.filterNullForProperty = filterNullForProperty
module.exports.sumAllProperty = sumAllProperty
module.exports.countAllProperty = countAllProperty
module.exports.makeHistogram = makeHistogram
module.exports.normalizeProperty = normalizeProperty