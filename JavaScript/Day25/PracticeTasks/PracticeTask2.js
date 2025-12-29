//Create a simple closure

function outer() {
  let count = 0;   // outer variable

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
