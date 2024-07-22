class CashRegister {
    constructor() {
        this.total = 0;
    }

    scanItem(price) {
        this.total += price;
        this.displayTotal();
    }

    displayTotal() {
        document.getElementById('totalDisplay').innerText = `Total: $${this.total.toFixed(2)}`;
    }

    processPayment(payment) {
        let message = '';
        if (payment < this.total) {
            message = `Insufficient payment. You still owe $${(this.total - payment).toFixed(2)}`;
        } else {
            let change = payment - this.total;
            message = `Payment accepted. Change: $${change.toFixed(2)}`;
            this.total = 0;
            this.displayTotal();
        }
        document.getElementById('messageDisplay').innerText = message;
    }
}

const register = new CashRegister();

function scanItem() {
    const price = parseFloat(document.getElementById('itemPrice').value);
    if (!isNaN(price) && price > 0) {
        register.scanItem(price);
    }
    document.getElementById('itemPrice').value = '';
}

function processPayment() {
    const payment = parseFloat(document.getElementById('paymentAmount').value);
    if (!isNaN(payment) && payment > 0) {
        register.processPayment(payment);
    }
    document.getElementById('paymentAmount').value = '';
}
