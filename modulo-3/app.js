//Calculate total price of a product

const jsBook = { count: 3, price: 50.25, type: 'book' };

function getTotal(product) {
  return product.count > 0 ? product.count * product.price : 0;
}

console.log(getTotal(jsBook));

//Calculate IVA

const cinemaTicket = { count: 2, price: 8.75, type: 'entertainment' };
const bread = { count: 4, price: 0.5, type: 'food' };

function getVat(product) {
  let vat = 0.21;

  switch (product.type) {
    case 'book':
      vat = 0.1;
      break;
    case 'bread':
      vat = 0.04;
      break;
  }

  return (product.price * vat).toFixed(2);
}

console.log('El IVA del libro es ', getVat(jsBook));
console.log('El IVA de la entrada de cine es ', getVat(cinemaTicket));
console.log('El IVA de la barra de pan es ', getVat(bread));

//Calculate total price including VAT

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}

console.log('El IVA total de los 3 libros es ', getTotalVat(jsBook));

function printProductPrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log('Subtotal:', subtotal + '€');
  console.log('IVA:', vat + '€');
  console.log('Total:', total + '€');
}

printProductPrice(jsBook);

//Calculate NET salary

const employee = {
  grossSalary: 14_500,
  children: 2,
  wage: 14,
};

const salaryRanges = {
  first: 12_000,
  second: 24_000,
  third: 34_000,
};

const deduction = 2;

function calculateNetSalary(employee) {
  let retention;

  if (employee.grossSalary < salaryRanges.first) {
    retention = 0;
  } else if (employee.grossSalary < salaryRanges.second) {
    retention = 8;
  } else if (employee.grossSalary < salaryRanges.third) {
    retention = 16;
  } else {
    retention = 30;
  }

  if (employee.children > 0 && retention - deduction > 0) {
    retention = retention - deduction;
  }

  console.log(retention);

  return employee.grossSalary - (employee.grossSalary * retention) / 100;
}

console.log('Salario Neto', calculateNetSalary(employee));
