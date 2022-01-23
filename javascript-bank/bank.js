/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && Math.sign(balance) === 1) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  if (this.accounts.number !== number) {
    return null;
  }
};

//
Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  if (this.accounts.length === 0) {
    return 0;
  }
  for (var i = 0; i <= this.accounts.length - 1; i++) {
    totalBalance += this.accounts[i].getBalance();
  }
  return totalBalance;
};
