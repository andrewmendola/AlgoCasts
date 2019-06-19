// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, arr = [0, 1]) {
	if (n < 2) {
		return n;
	}
	
	if(!arr[n])
	{
		var curr = fib(n - 1, arr) + fib(n - 2, arr);
		arr[n] = curr;
	}
	
	return arr[n];
}

module.exports = fib;

// function fib(n) {
	// if (n < 2) {
		// return n;
	// }
	
	// return fib(n - 1) + fib(n - 2)
// }

// function fib(n) {
	// let lastN = 0;
	// let currN = 1;
	
	// for (let i = 1; i < n; i++) {
		// let temp = currN;
		// currN = currN + lastN;
		// lastN = temp;
	// }
	
	// return currN;
// }