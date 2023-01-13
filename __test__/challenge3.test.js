const { triangleType } = require("../challenge3");

describe("Desafio - #3 Tipo de Triangulo", () => {
  it("A função triangleType deve existir", () => {
    expect(triangleType).toBeDefined();
  });

  it("A função triangleType deve retornar equilátero quando os lados são iguais", () => {
    expect(triangleType(1, 1, 1)).toBe("equilátero");
    expect(triangleType(2, 2, 2)).toBe("equilátero");
    expect(triangleType(3, 3, 3)).toBe("equilátero");
  });

  it("A função triangleType deve retornar isósceles quando dois lados são iguais", () => {
    expect(triangleType(1, 1, 2)).toBe("isósceles");
    expect(triangleType(2, 2, 3)).toBe("isósceles");
    expect(triangleType(3, 3, 4)).toBe("isósceles");
  });

  it("A função triangleType deve retornar escaleno quando os lados são diferentes", () => {
    expect(triangleType(1, 2, 3)).toBe("escaleno");
    expect(triangleType(2, 3, 4)).toBe("escaleno");
    expect(triangleType(3, 4, 5)).toBe("escaleno");
  });
});
