// Tip Calculator

function calculateTip(bill) {

const tip = bill > 300 ? bill * .20 : bill * 0.15;
return tip;
}

const billAmount = 275;
const tipAmount = calculateTip(billAmount);
const totalAmount = billAmount + tipAmount;
console.log(`The bill was $${billAmount}, the tip was $${tipAmount.toFixed(2)}, total cost (bill plus tip) was $${totalAmount.toFixed(2)}`);

function calcTip(bill) {
    return bill > 300 ? bill * .20 : bill * .15;
}

const bills = (125, 555, 44);
const tips = bill.map(bill > calcTip(bill));
const totals = bill.map((bill, index) > bill + tip(index));

console.log(bills);
console.log(tips);
console.log(totals);