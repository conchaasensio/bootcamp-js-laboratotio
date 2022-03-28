'use strict';
import './styles.css';
import { getCharacters, getCharacterById } from './data-business';
import { createCharacterRow, showCharacter } from './utils';

const appRootElement = document.getElementById('root');

const onHandleClick = (characterId) => {
  getCharacterById(characterId).then((data) => showCharacter(data[0]));
};

getCharacters().then((data) => {
  appRootElement.textContent = '';

  data.forEach((character) => {
    const element = createCharacterRow(character);
    appRootElement.appendChild(element);
    element.addEventListener('click', () => onHandleClick(character.char_id));
  });
});
