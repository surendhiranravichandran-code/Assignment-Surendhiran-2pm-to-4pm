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

-------------------  Day 3  --------------------------------

 Functions to organize logic
 Arrow functions (modern JS)
 IIFE to protect global scope
 Callbacks for events
 Reusable functions

*/

console.log("JS connected!");

// IIFE – protect global scope & run once
(() => {

    // Select elements
    const myName = document.getElementById("name");
    const mailId = document.getElementById("email");
    const msg = document.getElementById("message");
    const sendMsg = document.getElementById("sendMsg-btn");
    const clearBtn = document.getElementById("clear-btn");
    const confirmation = document.getElementById("confirmation");
    const calculate = document.getElementById("calcBtn");

    // ---------------- Functions ----------------

    // Show confirmation message
    const showMessage = (text, color) => {
        confirmation.textContent = text;
        confirmation.style.color = color;
    };

    // Clear form fields
    const clearForm = () => {
        myName.value = "";
        mailId.value = "";
        msg.value = "";
        confirmation.textContent = "";
        console.log("Form Cleared..");
    };

    // Validate form inputs
    const validateForm = () => {
        const userName = myName.value.trim();
        const mail = mailId.value.trim();
        const messageText = msg.value.trim();

        if (!userName) {
            showMessage("Please enter your Name.", "red");
            myName.focus();
            console.log("Please enter your name");
            return false;
        }

        if (!mail) {
            showMessage("Please enter your Email.", "red");
            mailId.focus();
            console.log("Please enter your email");
            return false;
        }

        if (!messageText) {
            showMessage("Please enter your Message.", "red");
            msg.focus();
            console.log("Please enter your message");
            return false;
        }

        return { userName, mail, messageText };
    };

    // Calculator logic
    const calculateTotal = (price, qty) => price * qty;

    // ---------------- Event Callbacks ----------------

    // Submit button
    sendMsg.addEventListener("click", (event) => {
        event.preventDefault();

        const data = validateForm();
        if (!data) return;

        showMessage(
            `Thank you, ${data.userName}! Your message has been sent.`,
            "green"
        );

        console.log("Form submitted:", data);

        setTimeout(clearForm, 5000);
    });

    // Clear button
    clearBtn.addEventListener("click", (event) => {
        event.preventDefault();
        clearForm();
    });

    // Calculate button
    calculate.addEventListener("click", () => {
        let price = Number(document.getElementById("calcPrice").value);
        let qty = Number(document.getElementById("calcQty").value);

        let total = calculateTotal(price, qty);
        document.getElementById("calcResult").innerText =
            "Total: $" + total;
    });

})();
