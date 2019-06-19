// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	
	clear() {
		this.head = null;
	}
	
	forEach(fn) {
		let count = 0;
		let node = this.head;
		while (node) {
			fn(node, count);
			node = node.next;
			count++;
		}
	}
	
	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
	
	getAt(index) {
		let count = 0;
		let node = this.head;
		
		while (node && count < index) {
			node = node.next;
			count++;		
		}
		
		return count === index ? node : null;
	}
	
	getFirst() {
		return this.head;
	}
	
	getLast() {
		if (!this.head) {
			return null;
		}
		
		let node = this.head;
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}
	
	insertAt(data, index) {
		if (index === 0) {
			this.insertFirst(data);
			return;
		}
		
		let prev = this.getAt(index - 1) || this.getLast();
		prev.next = new Node(data, prev.next);
	}
	
	insertFirst(data) {
		this.head = new Node(data, this.head);
	}
	
	insertLast(data) {
		let newNode = new Node(data);
		
		if (!this.head) {
			this.head = newNode;
			return;
		}
		
		this.getLast().next = newNode;
	}
	
	removeAt(index) {
		if (index === 0) {
			this.removeFirst();
			return;
		}
		
		let prev = this.getAt(index - 1);
		if (prev && prev.next) {
			prev.next = prev.next.next;
		}
	}
	
	removeFirst() {
		this.head = this.head ? this.head.next : null;
	}
	
	removeLast() {
		if (!this.head) {
			return;
		}
		
		if (!this.head.next) {
			this.head = null;
			return;
		}
		
		let node = this.head;
		while (node) {
			if (node.next && !node.next.next) {
				node.next = null;
				return;
			}
			node = node.next;
		}
	}
	
	size() {
		let count = 0;
		let node = this.head;
		
		while (node) {
			count++;
			node = node.next;
		}
		
		return count;
	}
}

module.exports = { Node, LinkedList };
