import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/logo.png';


const Navbar = () => {
  const[showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
          <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>

          </div>
          
        <button className="desktopMenuBtn" onClick={() =>{
          document.getElementById('contact').scrollIntoView();
        }}>
          <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>
          <img src={menu} alt="Menu" className='logo' />
          <div className="navMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={() =>setShowMenu(!showMenu)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={() =>setShowMenu(!showMenu)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={() =>setShowMenu(!showMenu)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={() =>setShowMenu(!showMenu)}>Clients</Link>
            <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={() =>setShowMenu(!showMenu)}>Contacts</Link>

          </div>
          


    </nav>
  )
}

export default Navbar;
