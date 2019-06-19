// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let hash = {};
	for(let c of str) {
		hash[c] = !hash[c] ? 1 : hash[c] + 1;
	}
	
	let maxKey = null;
	for(let key in hash)
	{
		if (!maxKey || hash[key] > hash[maxKey]) {
			maxKey = key;
		}
	}
	
	return maxKey;
}

module.exports = maxChar;
