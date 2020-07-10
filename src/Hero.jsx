import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { Cat, Ghost } from 'react-kawaii';


const HeroStyled = styled.div`
    width: 100%;
    height: 100vh;
    header {
      color: var(--baseColor);
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 30px;
      box-sizing: border-box;
      background: var(--basebackGround);
      border-bottom: 3px solid var(--baseColor);
      a {
        margin-left: 30px;
        text-decoration: none;
        color: inherit;
      }
      label, [type=checkbox] {
        cursor:pointer;
      }
    }
    main {
      background: var(--basebackGround);
      display: flex;
      width: 100%;
      height: calc(100% - 100px);
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--baseColor)
    }
`;

function Hero() {
  const ref = useRef(null);
  const dayValue = {
    color: 'white',
    mood: 'ko',
    size: 200,
  };
  const nightValue = {
    color: 'gray',
    mood: 'blissful',
    size: 400
  }
  const [ghost, setGhost] = useState(dayValue);
  function handleChange() {
    if(ref.current.checked) {
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
      setGhost(nightValue)
    } else {
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
      setGhost(dayValue)
    }
  }
 return (
   <HeroStyled className="hero-image">
     <header>
       <nav>
         <a href="#">Home</a>
         <a href="#">About</a>
         <a href="#">Contact</a>
       </nav>
       <input ref={ref} onChange={handleChange} type="checkbox" id="checkbox"/>
       <label className="switch" htmlFor="checkbox">
         Dark mode
       </label>
     </header>
     <main className="hero-text">
       {/*<h1>I am John Doe</h1>*/}
       {/*<p>And I'm a Photographer</p>*/}
       {/*<button>Hire me</button>*/}
       <Ghost size={200} mood="blissful" {...ghost} />
     </main>
   </HeroStyled>
 );
}

export default Hero;