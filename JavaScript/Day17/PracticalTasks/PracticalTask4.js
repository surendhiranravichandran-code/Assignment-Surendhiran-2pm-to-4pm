/* 

Day Finder with Switch
User inputs a number (1–7) → print weekday.

*/

const findDayBtn = document.getElementById("find-day-Btn");
const message = document.getElementById("clear-btn");
const result = document.getElementById("result");

findDayBtn.addEventListener("click", function () {
    const num = Number(document.getElementById("days").value);
    let day = "";

    switch (num) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid number! Enter 1-7 only."
    }
    result.textContent = ("Result:"+ day);
});

message.addEventListener("click", function () {
    document.getElementById("days").value = "";
    result.textContent = "";
})