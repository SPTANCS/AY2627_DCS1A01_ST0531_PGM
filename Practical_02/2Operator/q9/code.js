function aSquareMinusBSquare(a, b) {

  const aSquare = a ** 2;
  const bSquare = b ** 2;

  return aSquare - bSquare;
}

module.exports = aSquareMinusBSquare;

// examples

console.log(aSquareMinusBSquare(10, 1)); // 99
