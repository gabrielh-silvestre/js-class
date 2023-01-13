const { fizzBuzz } = require("challenge1.js");

describe("Desafio - #1", () => {
  it("Testa se a função fizzBuzz existe", () => {
    expect(fizzBuzz).toBeDefined();
  });

  it("Testa se a função fizzBuzz retorna fizz quando o número é divisível por 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(6)).toBe("fizz");
    expect(fizzBuzz(9)).toBe("fizz");
  });

  it("Testa se a função fizzBuzz retorna buzz quando o número é divisível por 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(10)).toBe("buzz");
    expect(fizzBuzz(20)).toBe("buzz");
  });

  it("Testa se a função fizzBuzz retorna fizzbuzz quando o número é divisível por 3 e 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
    expect(fizzBuzz(30)).toBe("fizzbuzz");
    expect(fizzBuzz(45)).toBe("fizzbuzz");
  });

  it("Testa se a função fizzBuzz retorna trem quando o número não é divisível por 3 e 5", () => {
    expect(fizzBuzz(1)).toBe("trem");
    expect(fizzBuzz(2)).toBe("trem");
    expect(fizzBuzz(4)).toBe("trem");
  });
});
