function aSquareMinusBSquare(a, b) {
  const aSquare = a ** 2;
  const bSquare = b ** 2;

  return aSquare - bSquare;
}

function multipleSquareMinusSquare(a, b, c, d) {

    return aSquareMinusBSquare(aSquareMinusBSquare(a, b), aSquareMinusBSquare (c, d));
}

module.exports = multipleSquareMinusSquare;

// examples

console.log(multipleSquareMinusSquare(4, 3, 2, 1)); // 40
