/*      
--------------  Day 1 -----------------------------------

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

------------------- Day 6 ----------------------------------------

Open your portfolio or product listing HTML page.
Create an array of skills, products, or projects.
Use forEach() to display them dynamically in your web page (e.g., inside <ul>).
Use filter() to display only selected items (e.g., price < 500).
Use reduce() to calculate totals (like total price or marks).

------------------- Day 7 -------------------------------------------

Open your portfolio or product page.
Use getElementById() or querySelector() to modify titles dynamically.
Add a button that changes text or background color.
Use appendChild() to add a new project section dynamically.
Add event listeners to handle clicks, form submissions, or hover effects.

*/


console.log("JS connected!");

// IIFE – protect global scope & run once
(() => {

    console.log("Portfolio / Product page loaded");

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

     function validateForm() {
    const myName = document.getElementById("name");
    const mailId = document.getElementById("email");
    const msg = document.getElementById("message");

    if (!myName || !mailId || !msg) {
        console.error("One or more inputs not found");
        return false;
    }

    const nameValue = myName.value.trim();
    const emailValue = mailId.value.trim();
    const msgValue = msg.value.trim();

    // REGEX PATTERNS
    const nameRegex = /^[A-Za-z0-9 ]+$/;              // letters + numbers only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // email format

    // -------- Name Validation --------
    if (!nameValue) {
        showMessage("Enter your name", "red");
        return false;
    }
    if (!nameRegex.test(nameValue)) {
        showMessage("Name should contain only letters and numbers", "red");
        return false;
    }

    // -------- Email Validation --------
    if (!emailValue) {
        showMessage("Enter your email", "red");
        return false;
    }
    if (!emailRegex.test(emailValue)) {
        showMessage("Enter a valid email address", "red");
        return false;
    }

    // -------- Message Validation --------
    if (!msgValue) {
        showMessage("Enter your message", "red");
        return false;
    }

    showMessage("Form submitted successfully!", "green");
    return true;
}



    // Calculator logic
    const calculateTotal = (price, qty) => price * qty;

    // ---------------- Event Callbacks ----------------

    sendMsg?.addEventListener("click", (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        setTimeout(clearForm, 5000);
    });

    clearBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        clearForm();
    });

    calculate?.addEventListener("click", () => {
        let price = Number(document.getElementById("calcPrice").value);
        let qty = Number(document.getElementById("calcQty").value);

        let total = calculateTotal(price, qty);
        document.getElementById("calcResult").innerText =
            "Total: $" + total;
    });


    // ================= DYNAMIC TITLE CHANGE =================
    const pageTitle = document.getElementById("page-title");
    const titleBtn = document.getElementById("title-btn");

    titleBtn?.addEventListener("click", () => {
        pageTitle.textContent = "My Interactive Portfolio ";
        console.log("Title updated dynamically");
    });

    // ================= BACKGROUND COLOR BUTTON =================
    document.addEventListener("DOMContentLoaded", () => {
        // Create the button dynamically (optional)
        const colorBtn = document.createElement("button");
        colorBtn.textContent = "Dark Mode";
        colorBtn.id = "color-btn";
        colorBtn.style.padding = "10px 20px";
        colorBtn.style.backgroundColor = "#1c91f1ff";
        colorBtn.style.color = "white";
        colorBtn.style.border = "none";
        colorBtn.style.borderRadius = "5px";
        colorBtn.style.cursor = "pointer";
        colorBtn.style.fontSize = "16px";
        colorBtn.style.margin = "10px";

        document.body.appendChild(colorBtn);

        // Add click functionality
        colorBtn.addEventListener("click", () => {
            document.body.style.backgroundColor = "#080808ff";
            document.body.style.color = "Whitesmoke";
            console.log("Background changed!"); // optional debug
        });
    });


    // =================================================
    // Product / Portfolio Section
    // =================================================

    // Product class
    class Product {
        constructor(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description;
        }

        displayProduct() {
            console.log(this.name);
            this.renderToHTML();
        }

        renderToHTML() {
            const container = document.getElementById("product-container");
            if (!container) return;

            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <h4>${this.name}</h4>
                <p>Price: ₹${this.price}</p>
                <p>${this.description}</p>
            `;
            container.appendChild(card);
        }
    }

    // DigitalProduct class (Inheritance)
    class DigitalProduct extends Product {
        constructor(name, price, description, fileSize) {
            super(name, price, description);
            this.fileSize = fileSize;
        }

        displayProduct() {
            console.log(
                `Digital Product: ${this.name}, Price: ₹${this.price}, File Size: ${this.fileSize}`
            );
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

    // Product data (array of objects)
    const products = [
        new Product("Mobile Phone", 15000, "Android smartphone"),
        new Product("Headphones", 2500, "Noise cancelling"),
        new DigitalProduct("E-Book", 299, "JavaScript Guide", "5MB"),
        new DigitalProduct("Online Course", 999, "Web Development Course", "2GB")
    ];

    // ---------------- forEach() ----------------
    products.forEach(product => product.displayProduct());

    // ---------------- filter() ----------------
    //  ADDED: products below ₹500
    const cheapProducts = products.filter(product => product.price < 500);

    console.log("Products below ₹500:");
    cheapProducts.forEach(product => {
        console.log(`${product.name} - ₹${product.price}`);
    });

    // ---------------- reduce() ----------------
    //  ADDED: calculate total price
    const totalPrice = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    console.log("Total price of all products: ₹" + totalPrice);

    // Optional HTML output
    const totalEl = document.getElementById("totalPrice");
    if (totalEl) {
        totalEl.textContent = "Total Product Value: ₹" + totalPrice;
    }

    // ================= HOVER EFFECTS =================
    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("product-card")) {
            e.target.style.backgroundColor = "#9e64f1ff";
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.classList.contains("product-card")) {
            e.target.style.backgroundColor = "";
        }
    });

})();
