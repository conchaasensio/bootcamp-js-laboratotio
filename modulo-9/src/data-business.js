'use strict';

const baseUrl = 'https://www.breakingbadapi.com/api/';

const getCharacters = () => {
  return fetch(`${baseUrl}/characters`).then((response) => response.json());
};

const getCharacterById = (id) => {
  return fetch(`${baseUrl}/characters/${id}`).then((response) =>
    response.json()
  );
};

export { getCharacters, getCharacterById };
