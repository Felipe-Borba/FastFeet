function getRandomUppercaseLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function generateArray(length = 10) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomUppercaseLetter());
  }
  return result;
}

// Example usage:
// const randomArray = generateArray(10);

module.exports = {
  randomArray: generateArray,
};
