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

-------------------  Day 4  --------------------------------

 Functions to organize logic
 Arrow functions (modern JS)
 IIFE to protect global scope
 Callbacks for events
 Reusable functions

 ----------------- Day 5 --------------------------------------

Open your product listing or portfolio page.
Convert your product or project data into objects (with properties like name, price, description).
Create a class for products and generate multiple items dynamically.
Use methods (like displayProduct()) to print data to console or HTML.
Add inheritance — for example, a DigitalProduct that extends Product with extra features.

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

    // =================================================
    // Product / Portfolio Requirements with HTML Rendering
    // =================================================

    // Product class
    class Product {
        constructor(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description;
        }

        displayProduct() {
            console.log(`Product: ${this.name}, Price: ₹${this.price}, Description: ${this.description}`);
            this.renderToHTML();
        }

        renderToHTML() {
            const container = document.getElementById("product-container");
            if (!container) return;

            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
            <h4>${this.name}</h4>
            <p>Price: ₹${this.price}</p>
            <p>${this.description}</p>
        `;
            container.appendChild(card);
        }
    }

    // DigitalProduct class
    class DigitalProduct extends Product {
        constructor(name, price, description, fileSize) {
            super(name, price, description);
            this.fileSize = fileSize;
        }

        displayProduct() {
            console.log(`Digital Product: ${this.name}, Price: ₹${this.price}, File Size: ${this.fileSize}`);
            this.renderToHTML();
        }

        renderToHTML() {
            const container = document.getElementById("product-container");
            if (!container) return;

            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
            <h4>${this.name} (Digital)</h4>
            <p>Price: ₹${this.price}</p>
            <p>${this.description}</p>
            <p>File Size: ${this.fileSize}</p>
        `;
            container.appendChild(card);
        }
    }

    // Product data
    const products = [
        new Product("Mobile Phone", 15000, "Android smartphone"),
        new Product("Headphones", 2500, "Noise cancelling"),
        new DigitalProduct("E-Book", 299, "JavaScript Guide", "5MB"),
        new DigitalProduct("Online Course", 999, "Web Development Course", "2GB")
    ];

    // Generate products dynamically
    products.forEach(product => product.displayProduct());


})();
