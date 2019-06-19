// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let results = getEmptyArray(n);
	let counter = 1;
	let row = 0;
	let col = 0;
	let dir = 'right';
	while (counter <= n * n) {
		results[row][col] = counter;
		
		if (dir === 'right') {
			if (col + 1 === n || results[row][col + 1] > 0) {
				dir = 'down';
				row++;
			} else {
				col++;
			}
		} else if (dir === 'down') {
			if (row + 1 === n || results[row + 1][col] > 0) {
				dir = 'left';
				col--;
			} else {
				row++;
			}
		} else if (dir === 'left') {
			if (col === 0 || results[row][col - 1] > 0) {
				dir = 'up';
				row--;
			} else {
				col--;
			}
		} else if (dir === 'up')  {
			if (row === 0 || results[row - 1][col] > 0) {
				dir = 'right';
				col++;
			} else {
				row--;
			}
		}
		
		counter++;
	}
	
	return results;
}

function getEmptyArray(n) {
	let arr = [];
	for (let row = 0; row < n; row++) {
		let rowArr = [];
		for (let col = 0; col < n; col++) {
			rowArr.push(0);
		}
		
		arr.push(rowArr);
	}
	
	return arr;
}

module.exports = matrix;
