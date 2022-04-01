'use strict';

const reservations = [
  {
    tipoHabitacion: 'standard',
    pax: 1,
    noches: 3,
    precio: 100,
  },
  {
    tipoHabitacion: 'standard',
    pax: 1,
    noches: 4,
    precio: 100,
  },
  {
    tipoHabitacion: 'suite',
    pax: 2,
    noches: 1,
    precio: 150,
  },
];

class ReservationsList {
  constructor() {
    this._reservations = [];
  }

  get subtotal() {
    return this._reservations
      .map((reservation) => (reservation.precio * reservation.noches + (reservation.pax - 1) * 40) * 1.21)
      .reduce((a, b) => a + b, 0);
  }

  set reservations(reservations) {
    this._reservations = reservations;
  }
}

const customerReservations = new ReservationsList();
customerReservations.reservations = reservations;
console.log('subtotal', customerReservations.subtotal);
