// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.queueArr = [];
	}
	
	add(el) {
		this.queueArr.unshift(el);
	}
	
	remove(el) {
		return this.queueArr.pop();
	}
}

module.exports = Queue;
