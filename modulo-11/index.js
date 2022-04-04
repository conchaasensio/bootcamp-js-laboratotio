'use strict';

const reservations = [
  {
    roomCategory: 'standard',
    pax: 1,
    nights: 3,
  },
  {
    roomCategory: 'standard',
    pax: 1,
    nights: 4,
  },
  {
    roomCategory: 'suite',
    pax: 2,
    nights: 1,
  },
];

class ReservationsList {
  constructor() {
    this._reservations = [];
  }

  get subtotal() {
    return this._reservations
      .map((reservation) => this.roomPrice(reservation) * reservation.nights + calculatePricePerPerson(reservation))
      .reduce((a, b) => a + b, 0);

    function calculatePricePerPerson(reservation) {
      return (reservation.pax - 1) * 40;
    }
  }

  roomPrice(reservation) {
    const categoryRoomPrices = {
      standard: 100,
      suite: 150,
    };
    return categoryRoomPrices[reservation.roomCategory];
  }

  get total() {
    const iva = 1.21;

    return this.subtotal * iva;
  }

  set reservations(reservations) {
    this._reservations = reservations;
  }
}

class TouristOperator extends ReservationsList {
  roomPrice(reservation) {
    return 100;
  }
  get subtotal() {
    return super.subtotal * 0.85;
  }
}

const customerReservations = new ReservationsList();
customerReservations.reservations = reservations;
console.log('subtotal', customerReservations.total.toFixed(2));

const touristOperatorReservations = new TouristOperator();
touristOperatorReservations.reservations = reservations;
console.log('subtotal', touristOperatorReservations.total.toFixed(2));
