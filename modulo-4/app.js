const operator1Input = document.getElementById('js-operator1');
const operator2Input = document.getElementById('js-operator2');
const resultElement = document.getElementById('js-result');
const addButton = document.getElementById('js-add');
const substractButton = document.getElementById('js-substract');
const multiplyButton = document.getElementById('js-multiply');
const divideButton = document.getElementById('js-divide');
const clearButton = document.getElementById('js-clear');

const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const renderResult = (operation) => {
  const result = operation(
    parseInt(operator1Input.value),
    parseInt(operator2Input.value)
  );
  if (operator1Input.value && operator2Input.value) {
    resultElement.innerHTML = result;
  } else {
    resultElement.innerHTML = 'Error';
  }
};

const clearInputsAndResult = () => {
  operator1Input.value = '';
  operator2Input.value = '';
  resultElement.innerHTML = '';
};

function handleClick(operation) {
  renderResult(operation);
}

addButton.addEventListener('click', () => handleClick(add));
substractButton.addEventListener('click', () => handleClick(substract));
multiplyButton.addEventListener('click', () => handleClick(multiply));
divideButton.addEventListener('click', () => handleClick(divide));
clearButton.addEventListener('click', clearInputsAndResult);
