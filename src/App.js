import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa6'
import './App.css';

function App(){

  const [show, setShow] = useState(true)
  
const handleNav = () => {
    setShow(!show)
}

  return (
   <main>
     <section className='section'>
      <div className='header'>
        <h1>Coding      <span>Addict</span></h1>
        <div className={`icon ${show ? "icon-rotate" : null}`} onClick={handleNav}><GiHamburgerMenu/></div>
      </div>

      <div className='nav'>
          <ul className={`nav-items ${!show ? "nav-hide" : null}`}>
            <li className='item'>home</li>
            <li className='item'>about</li>
            <li className='item'>projects</li>
            <li className='item'>contact</li>
            <li className='item'>Company</li>
          </ul>
        </div>

        <div className='contact'>
         <BiLogoFacebookCircle/>
          <AiFillInstagram/>
          <AiFillLinkedin/>
          <FaGithub/>
        </div>
    </section>
   </main>
  );
}

export default App;
