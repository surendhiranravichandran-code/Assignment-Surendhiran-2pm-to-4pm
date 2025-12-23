//Add and remove items using push, pop, shift, unshift.

let fruits = ["Apple", "Banana", "Mango"];

console.log("Initial array:", fruits);

// Add item at the END
fruits.push("Orange");
console.log("After push:", fruits);

// Remove item from the END
fruits.pop();
console.log("After pop:", fruits);

// Add item at the START
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

// Remove item from the START
fruits.shift();
console.log("After shift:", fruits);
