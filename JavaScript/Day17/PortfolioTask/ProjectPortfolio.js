/* 

Add JS to any old HTML/CSS project.

Debug using console.log() instead of guessing.

Organize code by separating it into external JS files.

Start building interactive components (buttons, forms).

-----------------  Day 2  --------------------------------

Store user inputs using variables

Apply conditions to validate forms

Run calculations for bills, totals, scores

Build simple interactive programs

Add decision-based logic to buttons and input fields

*/

console.log("JS connected!");

// Select elements
const myName = document.getElementById("name");
const mailId = document.getElementById("email");
const msg = document.getElementById("message");
const sendMsg = document.getElementById("sendMsg-btn");
const clearBtn = document.getElementById("clear-btn");
const confirmation = document.getElementById("confirmation");
const calculate=document.getElementById("calcBtn");

// Submit button
sendMsg.addEventListener("click", function(event) {
    event.preventDefault(); // prevent refresh

    const userName = myName.value.trim();
    const mail = mailId.value.trim();
    const messageText = msg.value.trim();

   // Name validation
if (!userName) {
    confirmation.textContent = "Please enter your Name.";
    confirmation.style.color = "red";
    myName.focus();
    console.log("Please enter your name"); // optional console log
    return; // stop form submission
}

// Email validation
if (!mail) {
    confirmation.textContent = "Please enter your Email.";
    confirmation.style.color = "red";
    mailId.focus();
    console.log("Please enter your email");
    return;
}

// Message validation
if (!messageText) {
    confirmation.textContent = "Please enter your Message.";
    confirmation.style.color = "red";
    msg.focus();
    console.log("Please enter your message");
    return;
}


    // Success
    confirmation.textContent = `Thank you, ${userName}! Your message has been sent.`;
    confirmation.style.color = "green";

    console.log("Form submitted:", { Name: userName, Email: mail, Message: messageText });

    // Optional: clear form after 5 seconds
    setTimeout(() => {
        myName.value = "";
        mailId.value = "";
        msg.value = "";
        confirmation.textContent = "";
    }, 5000);
});

// Clear button
clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    myName.value = "";
    mailId.value = "";
    msg.value = "";
    confirmation.textContent = "";
    console.log("Form Cleared..");
}); 

calculate.addEventListener("click",function calculateTotal() {
    let price = Number(document.getElementById("calcPrice").value);
    let qty = Number(document.getElementById("calcQty").value);
    let total = price * qty;
    document.getElementById("calcResult").innerText = "Total: $" + total;
})


