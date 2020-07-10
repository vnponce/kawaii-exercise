import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { Ghost } from 'react-kawaii';
import { motion } from "framer-motion"


const HeroStyled = styled.div`
    width: 100%;
    height: 100vh;
`;

function Hero() {
  const ref = useRef(null);
  // Valores iniciales cuando es de día y esta 'muerto' x_x
  const dayValue = {
    color: 'white',
    mood: 'ko',
    size: 200,
  };
  // Valores cuando es de noche y el fantasma aparece feliz :D
  const nightValue = {
    color: 'gray',
    mood: 'blissful',
    size: 400
  }

  const [ghost, setGhost] = useState(dayValue);

  // usado para cambiar el dark-mode
  function handleChange() {
    if(ref.current.checked) {
      document.body.classList.remove('is-light-mode');
      document.body.classList.add('is-dark-mode');
      // Es de noche y debe verse el fantasma
      setGhost(nightValue)
    } else {
      document.body.classList.remove('is-dark-mode');
      document.body.classList.add('is-light-mode');
      // Es de día y debe ocultarse el fantasma
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
       <div id="ghost">
         <Ghost size={200} mood="blissful" {...ghost} />
       </div>
       <div id="shadow"></div>
     </main>
   </HeroStyled>
 );
}

export default Hero;