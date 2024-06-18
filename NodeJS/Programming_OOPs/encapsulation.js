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
    getbalance() {
        console.log(`Current balance: ${this.bal}`);
        return this.bal;
    }
}
  
function main() {
    console.log("Account opened with 100 rupees");
    const acc = new account(100);
    acc.getbalance();
    console.log("Despositing amount Rs 50...");
    acc.deposit(50);
    acc.getbalance();
    console.log("Withdrawing amount Rs 30...");
    acc.withdraw(30);
    acc.getbalance();
    console.log("Withdrawing amount Rs 150...");  
    acc.withdraw(150);
    acc.getbalance();
}
  
main();