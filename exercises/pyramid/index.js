// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
	if (row === n) {
		return;
	}
	
	if (level.length === 2 * n - 1) {
		console.log(level);
		pyramid(n, row + 1);
		return;
	}
	
	let position = level.length;
	let midpoint = Math.floor((2 * n - 1) / 2);
	if (position < midpoint - row || position > midpoint + row) {
		level += ' ';
	} else {
		level += '#';
	}
	
	pyramid(n, row, level);
}

module.exports = pyramid;

// function pyramid(n) {
	// let max = n + n - 1;
	// for (let row = 1; row <= n; row++) {
		// let rowStr = '';
		// let numHashes = row + row - 1;
		// let numSpaces = max - numHashes;
		// for (let col = 1; col <= max; col++) {
			// if (numSpaces === 0) {
				// rowStr += '#';
			// } else if (col <= numSpaces / 2) {
				// rowStr += ' ';
			// } else if (col > numSpaces / 2 + numHashes) {
				// rowStr += ' ';
			// } else {
				// rowStr += '#';
			// }
		// }
		
		// console.log(rowStr);
	// }
// }