/* 

Student Grading System
Use conditions to return A/B/C/D/F based on marks.

*/


const gradeBtn = document.getElementById("grade-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("result");

gradeBtn.addEventListener("click", function () {
    const marks = Number(document.getElementById("marks").value);
    let grade = "";

    if (marks <= 100 && marks >= 0) {

        if (marks < 35) {
            grade = "F";
        }
        else if (marks > 35 && marks <= 50) {
            grade = "D";
        }
        else if (marks > 50 && marks <= 65) {
            grade = "C";
        }
        else if (marks > 65 && marks <= 80) {
            grade = "B";
        }
        else if (marks > 80) {
            grade = "A";
        }
        else {
            grade = "Invalid Marks.";
        }
        result.textContent = ("Result:" + grade);
    } else {
        result.textContent="Please check the marks 0 -100 only valid!";
    }
})

clear.addEventListener("click", function () {
    document.getElementById("marks").value = "";
    result.textContent = "";
})


