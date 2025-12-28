//Explain try/catch/finally

/*

try->Put code that might cause an error inside try.

try {
    let x = y + 10; // y is not defined
}


catch->Runs only if an error occurs in try.
Receives the error object.

catch (error) {
    console.log("Error occurred:", error.message);
}


finally->Always runs, whether an error occurs or not.
Used for cleanup tasks.

finally {
    console.log("Done executing try-catch");
}


*/

try {
    let num = 10;
    console.log(num / x); // x not defined
}
catch (error) {
    console.log("Error:", error.message);
}
finally {
    console.log("Execution completed");
}
