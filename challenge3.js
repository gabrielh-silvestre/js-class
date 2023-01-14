module.exports = { triangleType };

const triangleType = (a, b, c) => {
  const isEquilateral = a === b && b === c;
  const isIsosceles = a === b || b === c || a === c;
  const isScalene = a !== b && b !== c && a !== c;

  if (isEquilateral) return "equilátero";
  if (isIsosceles) return "isósceles";
  if (isScalene) return "escaleno";
};
