/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    var depositNum = new Transaction('deposit', amount);
    this.transactions.push(depositNum);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && Math.sign(amount) === 1) {
    var withdrawNum = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawNum);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
