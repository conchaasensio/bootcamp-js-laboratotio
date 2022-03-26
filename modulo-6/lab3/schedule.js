'use strict';

const workHours = [
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
];

const myTeam = [
  {
    name: 'María',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Pedro',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Esther',
    availability: new Array(8).fill(true),
  },
  {
    name: 'Marcos',
    availability: new Array(8).fill(true),
  },
];

const generateRandomAvailability = () => Math.random() >= 0.5;

function fillScheduleRandomly() {
  for (const person of myTeam) {
    for (let i = 0; i < person.availability.length; i++) {
      person.availability[i] = generateRandomAvailability();
    }
  }
  return myTeam;
}

function printTeamSchedule() {
  for (const person of myTeam) {
    console.log(`Disponibilidad de ${person.name}:`);
    for (let i = 0; i < person.availability.length; i++) {
      console.log(`${workHours[i]}: ${person.availability[i] ? 'Sí' : 'No'} `);
    }
  }
}

function searchFullAvailability() {
  for (let i = 0; i < workHours.length; i++) {
    let availabilities = [];
    for (const person of myTeam) {
      availabilities.push(person.availability[i]);
    }
    if (availabilities.every((value) => value)) {
      return `Hueco encontrado en el horario ${workHours[i]}`;
    }
  }
  return 'Lo siento. No hay hueco disponible en el equipo.';
}

fillScheduleRandomly();
printTeamSchedule();
console.log(searchFullAvailability());
