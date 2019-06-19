// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	var num = Math.abs(n);
	var rev = 0;
	while (num > 0) {
		rev = rev * 10 + num % 10;
		num = parseInt(num / 10);
	}
	
	return rev * Math.sign(n);
}

module.exports = reverseInt;

/* function reverseInt(n) {
	return parseInt(n.toString().replace('-', '').split('').reverse().join('')) * (n < 0 ? -1 : 1);
}*/

/* function reverseInt(n) {
	var nStr = n.toString();
	var rev = '';
	for(let c of n.toString()) {
		if(c !== '-'){
			rev = c + rev;
		}	
	}
	
	if (nStr.charAt(0) === '-'){
		rev = '-' + rev;
	}
	
	return parseInt(rev);
} */