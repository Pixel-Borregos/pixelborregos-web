import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import '../style/NavBar.css';

function NavBar1 () {
  const [click, setClick] = useState(false);
  const[button,setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

const showButton = () => {
  if(window.innerWidth <= 960){
    setButton(false);
  }
  else{
    setButton(true);
  }
};

useEffect(() => {
  showButton()
},[]);

window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Nav.Link href="/Landing" className='nav-links' onClick={closeMobileMenu}>
                <img src='/images/logo.png' width={90} height={50} />
                  Pixel Borregos
                </Nav.Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Nav.Link href='/' className='nav-links' onClick={closeMobileMenu}>
                      About us
                    </Nav.Link>
                  </li>
                  <li className='nav-item'>
                    <Nav.Link href='/News' className='nav-links' onClick={closeMobileMenu}>
                      Newsfeed
                    </Nav.Link>
                  </li>
                  <li className='nav-item'>
                    <Nav.Link href='/ContactUs' className='nav-links' onClick={closeMobileMenu}>
                      Contact us
                    </Nav.Link>
                  </li>
                  <li className='nav-item'>
                    <Nav.Link href='/Projects' className='nav-links' onClick={closeMobileMenu}>
                      Projects
                    </Nav.Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar1