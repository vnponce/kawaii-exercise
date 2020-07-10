import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { Ghost } from 'react-kawaii';
import { motion } from "framer-motion"


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
       {/*Motion viene de la librería framer-motion https://www.framer.com/motion/ para realizar animaciones*/}
       <motion.div
         initial={{ opacity: 0.5 }}
         animate={{ y: 15, x: 10, opacity: 1 }}
         transition={{ yoyo: Infinity, duration: 3, ease: "easeInOut" }}
       >
         <Ghost size={200} mood="blissful" {...ghost} />
       </motion.div>
     </main>
   </HeroStyled>
 );
}

export default Hero;