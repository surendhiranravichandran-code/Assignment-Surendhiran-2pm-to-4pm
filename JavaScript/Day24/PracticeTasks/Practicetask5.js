//What is the use of throw?

/*

The throw keyword is used to manually create (raise) an error in JavaScript.

JavaScript throws errors automatically (like ReferenceError), but throw is used when:

Input is invalid
A condition fails
You want custom error messages
You want to enforce rules in your code

*/

try {
    let age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    console.log("Valid age");
}
catch (error) {
    console.log("Error:", error.message);
}
