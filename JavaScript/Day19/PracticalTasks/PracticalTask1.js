
//Accept height & weight → return BMI.


function calculateBMI(height, weight) {
    // height in meters, weight in kg
    var bmi = weight / (height * height);
    return bmi;
}

var result = calculateBMI(1.76, 70);
console.log("Your BMI is:", result);
