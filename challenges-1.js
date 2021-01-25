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

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.

function getTotalPassengers(data) {
	// data is an array of the passagers ~ every passanger in an object in the array 
	// return the length of the array 
	return data.length 
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	// filter data for survived property 
	return data
	.filter (p => p.fields.survived === 'Yes').length
		//  the callback function takes in p as a parameter and returns yes if survived ~ we include that passenger
		// .length returns the number of passengers 
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	return data
	.filter (p => p.fields.survived === 'No').length
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Fins all of the 
// passengers whose pclass matches and return the count. 
// Return a number

function countPassengersInClass(data, pclass) {
	// takes in two parametes - data as an array and pclass as a string or number 
	return data
	.filter (p => p.fields.pclass === pclass).length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

function getSurvivorCountForClass(data, pclass) {
	return data
	.filter(p => p.fields.survived === 'Yes' && p.fields.pclass === pclass).length
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

function getCasualityCountForClass(data, pclass) {
	return data
	.filter(p => p.fields.survived === 'No' && p.fields.pclass === pclass).length
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

function getMinAge(data) {
	// filter passenger data and use array map to get all of the passenger ages 
	const age =  data.filter(p => p.fields.age !== undefined).map( p => p.fields.age)
	// get youngest age with Math.min ~ does not work with arrays so we use the rest operator (...) 
	// the rest operator takes all of the numbers in the array and spreads them out as parameters
	const minage = Math.min(...age)
	return minage
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

function getMaxAge(data) {
	// filter data to get all of the ages and leave out the undefined 
	const age = data.filter(p => p.fields.age !== undefined).map(p => p.fields.age)
	// get oldest age with Math.max and rest operator for array
	const maxage = Math.max(...age)
	return maxage
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

function getEmbarkedCount(data, embarked) {
	return data
	.filter(p => p.fields.embarked == embarked).length 
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

function getMinFare(data) {
	const fares = data.filter(p => p.fields.fare !== undefined).map(p => p.fields.fare)
	const minfare = Math.min(...fares)
	return minfare
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

function getMaxFare(data) {
	const fares = data.filter(p => p.fields.fare !== undefined).map(p => p.fields.fare)
	const maxfare = Math.max(...fares)
	return maxfare
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

function getPassengersByGender(data, gender) {
	return data
	.filter(p => p.fields.sex == gender).length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

function getSurvivorsByGender(data, gender) {
	return data
	.filter (p => p.fields.sex == gender && p.fields.survived == 'Yes').length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

function getCasualitiesByGender(data, gender) {
	return data
	.filter(p => p.fields.sex == gender && p.fields.survived == 'No').length
}

// 15 ---------------------------------------------------------------
// Return the number of passengers who survived by passenger class.

function getSurvivorsByPClass(data, pclass) {
	return data 
	.filter(p => p.fields.pclass == pclass && p.fields.survived == 'Yes').length
}

// 16 ---------------------------------------------------------------
// Return the number of passengers who did not survived by passenger class.

function getCasualitiesByPClass(data, pclass) {
	return data
	.filter(p => p.fields.pclass == pclass && p.fields.survived == 'No').length
}

// 17 ---------------------------------------------------------------
// Write a function that returns an array of unique values for any
// property in the data. For example If we needed to find number 
// of passenger classes from data this function should return:
// [1,2,3]. If you wanted to find the number of embarkations the 
// function should return: ['S', 'C', 'Q']

function getUniqueValues(data, property) {
	const emb = data.map(p => p.fields === property)
	const uni = new Set(emb)
	const uniEmb = Array.from(uni)
	return uniEmb
}

// 18 ---------------------------------------------------------------
// Return all of the objects in the data where a given field is 
// not undefined. If a field is undefined it means that field is 
// missing from the data. 

function getAllOfField(data, field) {
	return data
	.filter(p => p.fields !== undefined).map(p => p.fields == field)
}

// 19 --------------------------------------------------------------
// Return the total of all fares paid. 

function getTotalFare(data) {
	return data
	// filter data  
	.filter(p => p.fields.fare !== undefined)
	// reduce to a single value - the total 
	.reduce((acc, p) => acc + p.fields.fare, 0)
}

// 20 --------------------------------------------------------------
// Return the average fare paid. 
// total / number of fares 

function getAverageFare(data) {
	const fares = data.filter(p => p.fields.fare !== undefined).length
	const total = data.reduce((acc, p) => acc + p.fields.fare, 0)
	return total/fares
}

// 21 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. 
// 14.4542

function getMedianFare(data) {
	// map fares - returns a new array 
	// sort fares - sorts original array alphabetically in place 
	// find median
	const fares = data.filter(p => p.fields.fare !== undefined).length 
	const newfares = fares.map(p => p.fields.fare).sort( (a, b) => a - b )
	const medfare = newfares[Math.ceil(newfares.length/2)]
	return medfare
}

// 22 --------------------------------------------------------------
// Return the average age of all passengers. 

function getAverageAge(data) {
	return 0
}

// 23 --------------------------------------------------------------
// Return the median age from passengers. 
// 28

function getMedianAge(data) {
	return 0
}

// 24 --------------------------------------------------------------
// 

function getAverageAgeByGender(data, gender) {
	return 0
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
module.exports.getUniqueValues = getUniqueValues
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
module.exports.getSurvivorsByPClass = getSurvivorsByPClass
module.exports.getCasualitiesByPClass = getCasualitiesByPClass
module.exports.getTotalFare = getTotalFare
module.exports.getAverageFare = getAverageFare
module.exports.getMedianFare = getMedianFare
module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender