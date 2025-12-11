/*

Click Logger

Add a button → when clicked, JS prints "Button clicked!"

*/

const button= document.getElementById("btn");

button.addEventListener("click",function(){
   console.log("Button clicked..");
});


/*

getElementById	                --> Finds the button on the page
addEventListener("click", ...)	--> Listens for a click
console.log()                   --> Prints a message

*/