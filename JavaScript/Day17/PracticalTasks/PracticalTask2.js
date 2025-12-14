/* 

Simple Calculator
Use operators to add, subtract, multiply, divide two numbers.

*/

document.getElementById("add-btn").addEventListener("click", function() {
    calc("add");
});
document.getElementById("sub-btn").addEventListener("click", function() {
    calc("sub");
});
document.getElementById("mul-btn").addEventListener("click", function() {
    calc("mul");
});
document.getElementById("div-btn").addEventListener("click", function() {
    calc("div");
});


function calc(type) {
            const n1 = Number(document.getElementById("num1").value);
            const n2 = Number(document.getElementById("num2").value);
            let output;

            if (type === "add") output = n1 + n2;
            if (type === "sub") output = n1 - n2;
            if (type === "mul") output = n1 * n2;
            if (type === "div") output = n1 / n2;

            document.getElementById("result").textContent = "Result: " + output;

}


document.getElementById("clear-btn").addEventListener("click",function(){
   result.innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
})