import React, {useEffect, useState} from 'react';
import { Planet, Backpack, Browser, Cat, Chocolate, CreditCard, File, Ghost, IceCream, Mug, SpeechBubble } from 'react-kawaii';
import styled from 'styled-components';
import './App.css';

const ButtonStyeld = styled.button`
  padding: 1em;
  border-radius: 5px;
  margin: auto;
  width: 50%;
  color: white;
  font-size: 20px;
  cursor:pointer;
`;


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

const FightFieldStyled = styled.div`
  height: 50%;
  width: 60%;
  border: 1px solid red;
  .field {
    display: flex;
    justify-content: space-around;
    button {
      align-self: center;
      //padding: 1em;
      //border-radius: 5px;
      //margin: auto;
      width: 20%;
      background: darkorange;
      //color: white;
      //font-size: 20px;
      //cursor:pointer;
      &:hover {
        background: orangered;
      }
    }
  }
`;

function App() {
  const defaultCharData = {
    mood: 'blissful',
    win: false,
  };
  const defailtCharPoints = 5;
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
  const [CurrentCharacter,setCurrentCharacter] = useState('Planet');
  const [charOne, setCharOne] = useState(defaultCharData)
  const [charTwo, setCharTwo] = useState(defaultCharData)

  const [charOnePoints,setCharOnePoints] = useState(defailtCharPoints);
  const [charTwoPoints,setCharTwoPoints] = useState(defailtCharPoints);

  const [battle,setBattle] = useState(true);

  useEffect(() => {}, [charOnePoints]);
  useEffect(() => {
    switch (charTwoPoints) {
      case 0: {
        setCharTwo({...charTwo, mood: 'ko'});
        setCharOne({...charOne, win: true, mood: 'lovestruck'})
        break
      }
      case 1: setCharTwo({...charTwo, mood: 'shocked'});
      break
      case 3:  setCharTwo({...charTwo, mood: 'happy'});
      break
      case 5: setCharTwo({...charTwo, mood: 'blissful'});
    }
  }, [charTwoPoints]);

  function changeCharacter(character) {
    setCurrentCharacter(character);
  }

  function toggleBattle() {
    setBattle(!battle);
    setCharOne(defaultCharData);
    setCharOnePoints(defailtCharPoints);
    setCharTwo(defaultCharData);
    setCharTwoPoints(defailtCharPoints);
  }

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
        <FightFieldStyled>
          <h1>la batalla</h1>
          <div className="field">
            <div className="char char-one">
              <h2>{charOnePoints}</h2>
              <Char size={200} mood={charOne.mood} color="#FDA7DC" />
              <h2>{charOne.win && 'Winner!!!'}</h2>
            </div>
            {!(charOne.win || charTwo.win) && <ButtonStyeld onClick={() => setCharTwoPoints(charTwoPoints - 1)}>Fight!</ButtonStyeld>}
            {(charOne.win || charTwo.win) && <ButtonStyeld onClick={toggleBattle}>Return to select char!</ButtonStyeld>}
            <div className="char char-two">
              <h2>{charTwoPoints}</h2>
              <Backpack size={200} mood={charTwo.mood} color="#ef5" />
              <h2>{charTwo.win && 'Winner!!!'}</h2>
            </div>
          </div>
        </FightFieldStyled>
      )}
    </div>
  );
}

export default App;
