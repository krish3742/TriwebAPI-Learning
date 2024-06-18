class account {
    bal = 0;
    constructor(initBal) {
        this.bal = initBal;
    }
    deposit(amt) {
        if (amt > 0) {
            this.bal += amt;
            console.log(`Deposited: ${amt}`);
        } else {
            console.log('Deposit amount must be positive');
        }
    }
    withdraw(amt) {
        if (amt > 0 && amt <= this.bal) {
            this.bal -= amt;
            console.log(`Withdrew: ${amt}`);
        } else {
            console.log('Invalid withdraw amount');
        }
    }
    getbal() {
        console.log(`Current balance: ${this.bal}`);
        return this.bal;
    }
}
  
function main() {
    const acc = new account(100);
    acc.getbal();
  
    acc.deposit(50);
    acc.getbal();
  
    acc.withdraw(30);
    acc.getbal();
  
    acc.withdraw(150);
    acc.getbal();
}
  
main();