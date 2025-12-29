// Write a callback using setTimeout


function greet(callback) {
  setTimeout(() => {
    console.log("Hello!");
    callback();   // callback function
  }, 2000);
}

function sayBye() {
  console.log("Goodbye!");
}

greet(sayBye);
