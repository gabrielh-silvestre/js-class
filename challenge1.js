const fizzBuzz = (num) => {
  const isFizzBuzz = num % 3 === 0 && num % 5 === 0;
  const isFizz = num % 3 === 0;
  const isBuzz = num % 5 === 0;

  if (isFizzBuzz) return "fizzbuzz";
  if (isFizz) return "fizz";
  if (isBuzz) return "buzz";
  return "trem";
};

module.exports = { fizzBuzz };
