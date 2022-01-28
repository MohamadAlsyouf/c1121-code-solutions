process.on('unhandledRejection', () => {});

// ternary
//  ?
//  :

module.exports = function takeAChance(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ternary
      Math.random() <= 0.5 // condition
        ? resolve(`Hooray! You're so lucky, ${name}!`) // condition is truthy
        : reject(new Error(`It's just bad luck, ${name}.`)); // condition is falsy
    }, 2000);
  });
};
