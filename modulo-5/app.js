'use strict';

const cart = [
  {
    id: 198752,
    name: 'Tinta DJ27 Color',
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: 'Impresora ticketera PRO-201',
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: 'Caja de rollos de papel para ticketera',
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: 'Caja de folios DIN-A4 80gr',
    price: 9.95,
    count: 2,
    premium: false,
  },
];

const cartContainerElement = document.getElementById('js-cart-container');
const totalCartElement = document.getElementById('js-total-cart');
const premiumInputElement = document.getElementById('js-premium');
const shippingCostElement = document.getElementById('js-shipping-cost');

printCart();

function printCart() {
  let products = cart;

  const htmlElements = products.map((product) => {
    return `<li>
          <span>Nombre: ${product.name}</span>
          <span>Precio: ${product.price}</span>
          <span>Cantidad: ${product.count}</span>
          <span>Premium: ${product.premium ? 'Sí' : 'No'}<span>
          <button onClick="handleRemoveProduct(${
            product.id
          })">Eliminar Producto</button>
          </li>`;
  });

  cartContainerElement.innerHTML = `<ul>${htmlElements.join('')}</ul>`;
}

function handleRemoveProduct(id) {
  removeProduct(id);
  printCart();
}

function removeProduct(id) {
  const productIndex = cart.findIndex((product) => product.id === id);

  if (productIndex != -1) {
    cart.splice(productIndex, 1);
  }
}
