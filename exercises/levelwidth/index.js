// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let nodes = [root];
	let levels = [];
	
	while (nodes.length) {
		let counter = 0;
		let nextNodes = [];
		while (nodes.length) {
			var node = nodes.shift();
			nextNodes.unshift(...node.children);
			counter++;
		}
		
		nodes = nextNodes;
		levels.push(counter);
	}
	
	return levels;
}

function countNode(root) {
	var count = 0;
	for (let node in root.children) {
		count++;
	}
}

module.exports = levelWidth;
