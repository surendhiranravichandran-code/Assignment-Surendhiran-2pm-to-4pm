/* 

Login Logic
If username and password match → print Welcome.

*/

const loginBtn = document.getElementById("login-btn");
const message = document.getElementById("message");
const clearBtn = document.getElementById("clear-btn");



loginBtn.addEventListener("click", function () {

    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    const user = {
        name: "admin",
        pass: "1234"
    };

    if (username === user.name && password === user.pass) {
        message.textContent = "Welcome..";
        message.style.color = "Green";
    } else {
        message.textContent = "Invalid Username or Password";
        message.style.color = "Red";
    }

})

clearBtn.addEventListener("click", function () {
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    message.textContent = "";
});
