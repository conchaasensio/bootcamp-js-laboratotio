'use strict';

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const encryptedText = document.getElementById('encrypted');
const decryptedText = document.getElementById('decrypted');
const encryptButton = document.getElementById('encrypt_button');
const decryptButton = document.getElementById('decrypt_button');

const searchIndex = (alphabet, letter) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      return i;
    }
  }
  return -1;
};

function translateMessage(input, alphabet, target) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const letterIndex = searchIndex(alphabet, input[i]);

    if (letterIndex === -1) {
      output += input[i];
    } else {
      const convertedLetter = target[letterIndex];
      output += convertedLetter;
    }
  }
  return output;
}

const encrypt = (input) =>
  translateMessage(input, plainAlphabet, encryptedAlphabet);

const decrypt = (input) =>
  translateMessage(input, encryptedAlphabet, plainAlphabet);

encryptButton.addEventListener('click', () => {
  decryptedText.value = encrypt(encryptedText.value);
});

decryptButton.addEventListener('click', () => {
  encryptedText.value = decrypt(decryptedText.value);
});
