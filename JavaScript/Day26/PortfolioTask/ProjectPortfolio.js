/* 
----------------- Day 1 ---------------------------------

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


------------------  Day 8 -----------------------------------------------

Add error handling to form inputs
Handle API failures using try/catch
Show user-friendly error messages
Log errors for debugging
Improve app reliability and UX

------------------ Day 9 -------------------------------------------------

Use closures for private state
Use async/await for API calls
Prevent blocking UI using async logic
Combine with error handling
Prepare codebase for real APIs

----------------- Day 10 --------------------------------------------------

Use closures for private state
Use async/await for API calls
Avoid UI blocking with async logic
Combine with error handling
Prepare structure for real backend integration

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

    // ---------------- PRIVATE STATE USING CLOSURE ----------------
    const AppState = (() => {
        let isSending = false;

        return {
            isSending: () => isSending,
            setSending: (val) => isSending = val
        };
    })();

    // ---------------- Functions ----------------

    // Show confirmation message
    const showMessage = (text, color) => {
        if (!confirmation) return;
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

    // Validate form inputs with regex and error handling
    const validateForm = () => {
        try {
            if (!myName || !mailId || !msg) throw new Error("Form inputs not found");

            const nameValue = myName.value.trim();
            const emailValue = mailId.value.trim();
            const msgValue = msg.value.trim();

            const nameRegex = /^[A-Za-z0-9 ]+$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nameValue) throw new Error("Enter your name");
            if (!nameRegex.test(nameValue)) throw new Error("Name should contain only letters and numbers");

            if (!emailValue) throw new Error("Enter your email");
            if (!emailRegex.test(emailValue)) throw new Error("Enter a valid email address");

            if (!msgValue) throw new Error("Enter your message");

            showMessage("Form submitted successfully!", "green");
            return true;

        } catch (error) {
            console.error("Form Validation Error:", error);
            showMessage(error.message, "red");
            return false;
        }
    };

    // Mock API call simulation
    const sendMessageToAPI = async (data) => {
        try {
            console.log("Sending data to API...", data);

            // simulate network delay (non-blocking)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // mock successful response
            return {
                status: "success",
                message: "Message sent"
            };

        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    };


    // Calculator logic
    const calculateTotal = (price, qty) => price * qty;

    // ---------------- Event Callbacks ----------------

    sendMsg?.addEventListener("click", async (e) => {
        e.preventDefault();

        if (AppState.isSending()) return;
        if (!validateForm()) return;

        try {
            AppState.setSending(true);
            sendMsg.disabled = true;
            showMessage("Sending message...", "orange");

            await sendMessageToAPI({
                name: myName.value,
                email: mailId.value,
                message: msg.value
            });

            showMessage("Message sent successfully 🎉", "green");
            setTimeout(clearForm, 5000);

        } catch (error) {
            showMessage("Unable to send message. Try again later.", "red");

        } finally {
            AppState.setSending(false);
            sendMsg.disabled = false;
        }
    });

    clearBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        clearForm();
    });

    calculate?.addEventListener("click", () => {
        try {
            let price = Number(document.getElementById("calcPrice").value);
            let qty = Number(document.getElementById("calcQty").value);

            if (isNaN(price) || isNaN(qty) || price <= 0 || qty <= 0) {
                throw new Error("Price and quantity must be numbers greater than zero");
            }

            let total = calculateTotal(price, qty);
            document.getElementById("calcResult").innerText = "Total: $" + total;

        } catch (error) {
            console.error("Calculation Error:", error);
            alert(error.message);
        }
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
        try {
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

            let darkMode = false;

            colorBtn.addEventListener("click", () => {
                darkMode = !darkMode;

                if (darkMode) {
                    document.body.style.backgroundColor = "#080808ff";
                    document.body.style.color = "Whitesmoke";
                    colorBtn.textContent = "Normal Mode";
                } else {
                    document.body.style.backgroundColor = "";
                    document.body.style.color = "";
                    colorBtn.textContent = "Dark Mode";
                }
            });

        } catch (error) {
            console.error("UI Button Error:", error);
        }
    });

    // =================================================
    // Product / Portfolio Section
    // =================================================

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

    class DigitalProduct extends Product {
        constructor(name, price, description, fileSize) {
            super(name, price, description);
            this.fileSize = fileSize;
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

    const products = [
        new Product("Mobile Phone", 15000, "Android smartphone"),
        new Product("Headphones", 2500, "Noise cancelling"),
        new DigitalProduct("E-Book", 299, "JavaScript Guide", "5MB"),
        new DigitalProduct("Online Course", 999, "Web Development Course", "2GB")
    ];

    products.forEach(product => product.displayProduct());

    const cheapProducts = products.filter(product => product.price < 500);
    console.log("Products below ₹500:", cheapProducts);

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    console.log("Total price:", totalPrice);

    const totalEl = document.getElementById("totalPrice");
    if (totalEl) totalEl.textContent = "Total Product Value: ₹" + totalPrice;

    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("product-card")) {
            e.target.style.backgroundColor = "#7f8d8dff";
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.classList.contains("product-card")) {
            e.target.style.backgroundColor = "";
        }
    });

})();
