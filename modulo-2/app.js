var hotels = {
  REINA: {
    name: 'Reina',
    location: 'Vera',
    img: './img/hotel-reina.jpeg',
  },
  INDALO: {
    name: 'Indalo',
    location: 'Mojácar',
    img: './img/hotel-indalo.jpeg',
  },
  PALACE: {
    name: 'Granada Palace',
    location: 'Granada',
    img: './img/granada-palace.jpeg',
  },
};

var selectedHotel = prompt(
  'Indique el hotel sobre el que quiere hacer la reseña: Reina, Indalo o Granada Palace'
).toUpperCase();

document.getElementById('hotel-name').innerHTML =
  'Hotel ' + hotels[selectedHotel].name;
document.getElementById('hotel-location').innerHTML =
  'Ubicado en ' + hotels[selectedHotel].location;
document.getElementById('hotel-image').src = hotels[selectedHotel].img;

var stars = {
  1: '<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
  2: '<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>',
  3: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>',
  4: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>',
  5: '<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>',
};

var rating = prompt('Otorga tu puntuación: 1, 2, 3, 4 o 5 estrellas');

document.getElementById('hotel-rating').innerHTML = stars[rating];

var anonymous = confirm('¿Quieres realizar una reseña anónima?');

document.getElementById('anonymous').checked = anonymous;
