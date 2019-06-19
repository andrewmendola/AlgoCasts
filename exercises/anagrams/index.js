// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let a = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
	let b = stringB.replace(/[^\w]/g, '').toLowerCase().split('');
	
	if (a.length != b.length) {
		return false;
	}
	
	let charMap = {};
	for (let i = 0; i < a.length; i++) {
		charMap[a[i]] = !charMap[a[i]] ? 1 : charMap[a[i]] + 1;
		charMap[b[i]] = !charMap[b[i]] ? -1 : charMap[b[i]] - 1;
	}
	
	for (let letter in charMap)
	{
		if (charMap[letter] != 0) {
			return false;
		}
	}
		
	return true;
}

module.exports = anagrams;
