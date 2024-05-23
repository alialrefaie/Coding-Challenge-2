// U72955273
// Tip Calculator

function calculateTip(bill) {

const tip = bill > 300 ? bill * 0.20 : bill * 0.15;
return tip;
}

const billAmount = 275;
const tipAmount = calculateTip(billAmount);
const totalAmount = billAmount + tipAmount;
console.log(`The bill was $${billAmount}, the tip was $${tipAmount.toFixed(2)}, total cost (bill plus tip) was $${totalAmount.toFixed(2)}`);

function calcTip(bill) {
    return bill > 300 ? bill * 0.20 : bill * 0.15;
}

const bills = [125, 555, 44]; // Array of bill amounts
const tips = bills.map(bill => calcTip(bill)); // Calculate tips for each bill
const totals = bills.map((bill, index) => bill + tips[index]); // Calculate total amounts

console.log(bills); // Output bill amounts
console.log(tips); // Output calculated tips
console.log(totals); // Output total amounts