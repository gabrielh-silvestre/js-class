module.exports = { highestNumber };

// const highestNumber = (arr) => Math.max(...arr);

const highestNumber = (arr) => {
  let highest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
};
