const { triangleType } = require("../challenge3");

describe("Desafio - #3 Tipo de Triangulo", () => {
  it("Testa se a função triangleType existe", () => {
    expect(triangleType).toBeDefined();
  });

  it("Testa se a função triangleType retorna equilátero quando os lados são iguais", () => {
    expect(triangleType(1, 1, 1)).toBe("equilátero");
    expect(triangleType(2, 2, 2)).toBe("equilátero");
    expect(triangleType(3, 3, 3)).toBe("equilátero");
  });

  it("Testa se a função triangleType retorna isósceles quando dois lados são iguais", () => {
    expect(triangleType(1, 1, 2)).toBe("isósceles");
    expect(triangleType(2, 2, 3)).toBe("isósceles");
    expect(triangleType(3, 3, 4)).toBe("isósceles");
  });

  it("Testa se a função triangleType retorna escaleno quando os lados são diferentes", () => {
    expect(triangleType(1, 2, 3)).toBe("escaleno");
    expect(triangleType(2, 3, 4)).toBe("escaleno");
    expect(triangleType(3, 4, 5)).toBe("escaleno");
  });
});
