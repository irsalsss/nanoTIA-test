import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import navbartia from '../assets/tia-navbar.png';

const NavbarTIA = () => {
  return (
    <Navbar bg="light" variant="light">
      <Link to='/'><img src={navbartia} alt="navbar-tia" width={200} /></Link>
    </Navbar>
  )
}

export default NavbarTIA
