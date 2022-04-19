class employee {
    constructor(emp_Id, emp_Name, emp_Email) {
        this.emp_Id = emp_Id;
        this.emp_Name = emp_Name;
        this.emp_Email = emp_Email;
    }
    get_Employee_Details() {
        console.log(`Employee Id:${this.emp_Id},Employee Name${this.emp_Name},Employee Email${this.emp_Email}`)
    }  
}
let c1 = new employee(101, "rahul", "rahul@gmail.com")
let c2 = new employee(102, "sonia", "sonia@gmail.com")
let c3 = new employee(103, "rajni", "rajni@gmail.com")
console.log(c1)
console.log(c2)
console.log(c3)
