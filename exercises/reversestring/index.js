// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	if(typeof str !== 'string') {
		return null;
	}
	
	var revStr = '';
	for(var i = str.length - 1; i >= 0; i--) {
		revStr += str.charAt(i);
	}
	
	return revStr;
}

module.exports = reverse;
