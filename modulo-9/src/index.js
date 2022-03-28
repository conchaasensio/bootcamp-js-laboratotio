'use strict';
import './styles.css';
import { getCharacters, getCharacterById } from './data-business';
import { createCharacterRow, showCharacter } from './utils';

const appRootElement = document.getElementById('root');

getCharacters().then((data) => {
  appRootElement.textContent = '';

  data.forEach((character) => {
    const element = createCharacterRow(character);
    appRootElement.appendChild(element);
    element.addEventListener('click', () => handleClick(character.char_id));
  });
});

const handleClick = (characterId) => {
  getCharacterById(characterId).then((data) => {
    showCharacter(data);
  });
};
