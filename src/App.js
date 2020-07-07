import React, {useEffect, useState} from 'react';
import { Planet, Backpack, Browser, Cat, Chocolate, CreditCard, File, Ghost, IceCream, Mug, SpeechBubble } from 'react-kawaii';
import styled from 'styled-components';
import './App.css';

const SelectCharacterStyled = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  .box {
    border: 1px solid red;
  }
  .preview {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
  .options {
    width: 60%;
    //display: flex;
    //flex-wrap: wrap;
    span {
      display: inline-block;
      height: fit-content;
      background: cadetblue;
      color: white;
      padding: 1em;
      margin: 1em;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background: darkcyan;
      }
    }
    button {
      display: block;
      padding: 1em;
      border-radius: 5px;
      margin: auto;
      margin-top: 3em;
      width: 50%;
      background: darkorange;
      color: white;
      font-size: 20px;
      cursor:pointer;
      &:hover {
        background: orangered;
      }
    }
  }
`;

function App() {
  const [CurrentCharacter,setCurrentCharacter] = useState('Planet');
  const [battle,setBattle] = useState(false);
  const components = {
    Backpack,
    Browser,
    Cat,
    Chocolate,
    CreditCard,
    File,
    Ghost,
    IceCream,
    Mug,
    Planet,
    SpeechBubble,
  }

  function changeCharacter(character) {
    setCurrentCharacter(character);
  }

  function toggleBattle() {
    setBattle(!battle);
  }

  console.log('char =>', components[CurrentCharacter]);
  const Char = components[CurrentCharacter];
  return (
    <div className="App">
      {!battle && (
        <SelectCharacterStyled>
          <div className="box preview">
            <Char size={200} mood="blissful" color="#FDA7DC" />
          </div>
          <div className="box options">
            {Object.keys(components).map(item => <span onClick={() => changeCharacter(item)}>{item}</span>)}
            <button onClick={toggleBattle}>Ready!</button>
          </div>
        </SelectCharacterStyled>
      )}
      {battle && (
        <>
          <h1>la batalla</h1>
          <button onClick={toggleBattle}>Pelear</button>
        </>
      )}
    </div>
  );
}

export default App;
