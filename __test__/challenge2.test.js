const { highestNumber } = require("../challenge2");

describe("Desafio - #2 Maior Número", () => {
  it("A função highestNumber deve existir", () => {
    expect(highestNumber).toBeDefined();
  });

  it("A função highestNumber deve retornar o maior número de um array", () => {
    expect(highestNumber([1, 11, 3])).toBe(11);
    expect(highestNumber([10, 2, 3])).toBe(10);
    expect(highestNumber([10, 20, 30])).toBe(30);
  });

  it("A função highestNumber deve retornar o maior número de um array com números negativos", () => {
    expect(highestNumber([-1, -2, -3])).toBe(-1);
    expect(highestNumber([-10, -2, -3])).toBe(-2);
    expect(highestNumber([-10, -20, -30])).toBe(-10);
  });
});
