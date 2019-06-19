// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, step = '') {
	if (n === row) {
		return;
	}
	
	if (step.length === n) {
		console.log(step);
		steps(n, row + 1);
		return;
	}
	
	if (step.length <= row) {
		step += '#';
	} else {
		step += ' ';
	}
	
	steps(n, row, step);
}

module.exports = steps;

// function steps(n) {
	// for(let i = 1; i <= n; i++) {
		// let log = '';
		// for (let j = 1; j <= n; j++) {
			// log += j <= i ? '#' : ' ';
		// }
		
		// console.log(log);
	// }
// }
