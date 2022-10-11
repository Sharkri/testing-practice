const alphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftCharacter(letter) {
  const index = alphabet.indexOf(letter.toLowerCase());
  // if not found in alphabet
  if (index === -1) return letter;
  // wrap z to a
  else if (index === 25) return "a";
  // shift letter to the next letter
  const shiftedChar = alphabet[index + 1];
  // keep same case
  if (letter.toUpperCase() === letter) return shiftedChar.toUpperCase();
  else return shiftedChar;
}

export default function caesarCipher(string) {
  const stringArray = string.split("");
  return stringArray.map((letter) => shiftCharacter(letter)).join("");
}
