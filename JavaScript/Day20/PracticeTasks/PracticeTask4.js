//Create a class Employee with name and salary — add a method to display info.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayInfo() {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

// Create an object
const emp1 = new Employee("Surendhiran", 25000);

// Call the method
emp1.displayInfo();
