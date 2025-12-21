//Create another class Manager that inherits from Employee and adds a department.


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

// Manager class inherits Employee
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // call parent constructor
        this.department = department;
    }

    displayManagerInfo() {
        this.displayInfo(); // parent method
        console.log("Department:", this.department);
    }
}

// Create Manager object
const mgr1 = new Manager("Surendhiran", 50000, "IT");

// Call method
mgr1.displayManagerInfo();
