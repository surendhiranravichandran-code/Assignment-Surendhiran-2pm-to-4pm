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

---------------- Day 3 -------------------------------------

Add decision-making to their earlier HTML/CSS projects

Create interactive forms with validation

Build calculators, counters, and menus

Loop through arrays (products, students, results)

Combine conditions + loops for real logic (e.g., find highest score, filter items)

*/
console.log("JS connected!");

// ================== FORM SECTION ==================

// Select elements
const myName = document.getElementById("name");
const mailId = document.getElementById("email");
const msg = document.getElementById("message");
const sendMsg = document.getElementById("sendMsg-btn");
const clearBtn = document.getElementById("clear-btn");
const confirmation = document.getElementById("confirmation");

// Submit button
sendMsg.addEventListener("click", function (event) {
    event.preventDefault();

    const userName = myName.value.trim();
    const mail = mailId.value.trim();
    const messageText = msg.value.trim();

    // Decision-making validation
    if (!userName || !mail || !messageText) {
        confirmation.textContent = "All fields are required!";
        confirmation.style.color = "red";
        return;
    }

    // Email format validation
    if (!mail.includes("@")) {
        confirmation.textContent = "Please enter a valid email address.";
        confirmation.style.color = "red";
        return;
    }

    confirmation.textContent = `Thank you, ${userName}! Your message has been sent.`;
    confirmation.style.color = "green";

    console.log("Form submitted:", { userName, mail, messageText });

    setTimeout(() => {
        myName.value = "";
        mailId.value = "";
        msg.value = "";
        confirmation.textContent = "";
    }, 3000);
});

// Clear button
clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    myName.value = "";
    mailId.value = "";
    msg.value = "";
    confirmation.textContent = "";
    console.log("Form cleared");
});

// ================== CALCULATOR SECTION ==================

const calculate = document.getElementById("calcBtn");

calculate.addEventListener("click", function () {
    let price = Number(document.getElementById("calcPrice").value);
    let qty = Number(document.getElementById("calcQty").value);

    // Decision-making
    if (price <= 0 || qty <= 0) {
        document.getElementById("calcResult").innerText =
            "Enter valid price and quantity";
        return;
    }

    let total = price * qty;
    document.getElementById("calcResult").innerText = "Total: $" + total;
});

// ================== LOOP + ARRAY LOGIC ==================

// ================== SHOPPING CART ==================
function calculateCart() {
    const input = document.querySelector('.card input').value;

    if (input.trim() === "") {
        document.getElementById("cartResult").innerText =
            "Please enter prices";
        return;
    }

    const products = input.split(",");
    let cartTotal = 0;

    for (let i = 0; i < products.length; i++) {
        cartTotal += Number(products[i]);
    }

    document.getElementById("cartResult").innerText =
        "Cart Total: ₹" + cartTotal;
}

// ================== HIGHEST SCORE ==================
function findHighest() {
    const inputs = document.querySelectorAll('.card input');
    const scoreInput = inputs[1].value;

    if (scoreInput.trim() === "") {
        document.getElementById("scoreResult").innerText =
            "Please enter marks";
        return;
    }

    const scores = scoreInput.split(",").map(Number);
    let highestScore = scores[0];

    for (let score of scores) {
        if (score > highestScore) {
            highestScore = score;
        }
    }

    document.getElementById("scoreResult").innerText =
        "Highest Score: " + highestScore;
}
