/*

| Type                   | Accessible Where     |
| ---------------------- | -------------------- |
| Global                 | Everywhere           |
| Function               | Inside function only |
| Block (`let`, `const`) | Inside `{ }`         |
| `var`                  | Function scope       |
| Lexical                | Inner → Outer        |


Scope determines where a variable can be accessed in your code.

1.Global Scope
=============
Declared outside any function or block.
Accessible everywhere.

Eg:
let x = 10;

function show() {
  console.log(x); //  accessible
}

show();
console.log(x); //  accessible

x is in global scope

2.Function Scope
===============
Variables declared inside a function using var, let, or const.

Eg:
function demo() {
  let y = 20;
  console.log(y); // accessible
}

demo();
console.log(y); //  Error

y has function scope

3.Block Scope (let & const)
==========================
Variables declared inside { } like if, for, while.

Eg:
if (true) {
  let a = 5;
  const b = 6;
}

console.log(a); //  Error
console.log(b); //  Error

4.var Scope (Function scoped, NOT block scoped)
=============================================

if (true) {
  var z = 100;
}

console.log(z); //  works

var ignores block scope

5.Local Scope
==============
Any variable inside a function or block is local to that scope.

Eg:
function test() {
  let msg = "Hello";
  console.log(msg);
}

msg is local scope

6.Lexical Scope (Important ⭐)
================================
Inner functions can access outer variables.

Eg:
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // ✅
  }

  inner();
}
outer();

This is lexical scope

*/