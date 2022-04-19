class Savings_Account {
    min_Bal = 500;
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    open_Account() {
        console.log("Your account has been opened successfully!")
    }
    get_Bal() {
        return this.amount - this.min_Bal
    }

}
let c1 = new Savings_Account(101, "Zedan", 45000)
let c2 = new Savings_Account(102, "john cena", 75000)
console.log(c1.get_Bal())
console.log(c2.get_Bal())
console.log(c1.open_Account())



