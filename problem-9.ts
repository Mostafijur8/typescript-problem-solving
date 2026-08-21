type Deposit = {
  type: "deposit";
  amount: number;
};

type Withdrawal = {
  type: "withdraw";
  amount: number;
};

function processTransaction(
  balance: number,
  transaction: Deposit | Withdrawal,
): number | string {
  if (transaction.type === "deposit") {
    return balance + transaction.amount;
  } else if (transaction.type === "withdraw") {
    if (transaction.amount > balance) {
      return "insufficient balance";
    }
    return balance - transaction.amount;
  }
  return balance;
}

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
// 7000

console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
// 3000

// insufficient balance:
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
// 5000  (unchanged)
// insufficient balance
