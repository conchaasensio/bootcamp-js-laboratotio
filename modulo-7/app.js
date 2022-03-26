'use strict';

// IBAN Validator

const IBANs = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

// First Case:
const ibanPatternFirstCase = /^(ES)(\d{22})$/;

// Second Case:

const ibanPatternSecondCase = /^(ES)(\d{2})(\s?\d{4}){5}$/;

// Third Case:

const ibanPatternThridCase = /^(ES)(\d{2})[\s?\d{4}]+$/;

const validateIBAN = (iban, pattern) => pattern.test(iban);

const extractIBAN = (iban, pattern) => pattern.exec(iban);

IBANs.forEach((iban) => {
  console.log(`IBAN First Case ${validateIBAN(iban, ibanPatternFirstCase)}`);
  console.log(`IBAN Second Case ${validateIBAN(iban, ibanPatternSecondCase)}`);
  console.log(`IBAN Third Case ${extractIBAN(iban, ibanPatternThridCase)}`);
});

// Car Number Plate Validator

const carNumberPlates = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

const carPattern = /^(\d{4})(\s|\-)?([BCDFGHJKLMNPQRSTVWXYZ]{3})$/;

const validateCarNumberPlate = (carNumber, pattern) => pattern.test(carNumber);

const extractCarNumberPlate = (carNumber, pattern) => pattern.exec(carNumber);

carNumberPlates.forEach((carNumber) => {
  console.log(
    `Car Validation ${validateCarNumberPlate(carNumber, carPattern)}`
  );
  console.log(`Car extract ${extractCarNumberPlate(carNumber, carPattern)}`);
});
