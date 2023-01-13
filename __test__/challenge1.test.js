const { fizzBuzz } = require("../challenge1");

describe("Desafio - #1 FizzBuzz", () => {
  it("A função fizzBuzz deve existir", () => {
    expect(fizzBuzz).toBeDefined();
  });

  it("A função fizzBuzz deve retornar 'fizz' quando o número é divisível por 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(6)).toBe("fizz");
    expect(fizzBuzz(9)).toBe("fizz");
  });

  it("A função fizzBuzz deve retornar 'buzz' quando o número é divisível por 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(10)).toBe("buzz");
    expect(fizzBuzz(20)).toBe("buzz");
  });

  it("A função fizzBuzz deve retornar 'fizzbuzz' quando o número é divisível por 3 e 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
    expect(fizzBuzz(30)).toBe("fizzbuzz");
    expect(fizzBuzz(45)).toBe("fizzbuzz");
  });

  it("A função fizzBuzz deve retornar 'trem' quando o número não é divisível por 3 e 5", () => {
    expect(fizzBuzz(1)).toBe("trem");
    expect(fizzBuzz(2)).toBe("trem");
    expect(fizzBuzz(4)).toBe("trem");
  });
});
