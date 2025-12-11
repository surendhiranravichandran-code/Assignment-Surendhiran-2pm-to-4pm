/* 
Commented Code

Write a script where half the code is explained with comments.
*/



// Creating an object to store user details
const user = {
    name: "Surendhiran",
    age: 21,
    course: "Full Stack Development",
    country: "India",
    goal: "Become a Software Engineer"
};

// Logging the entire object
console.log(user);

// Getting the button element from HTML
const btn = document.getElementById("clickBtn");

// Adding a click event listener to the button
btn.addEventListener("click", function () {

    // When clicked, log this message
    console.log("Button was clicked!");

    // Also show user's name (example usage of object)
    console.log("User:", user.name);
});
