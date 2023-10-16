import React, { useContext } from 'react';
import { Context } from '../index';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SHOP_ROUTE } from '../utils/consts';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <NavLink style={{color:'white'}} to ={SHOP_ROUTE}> Buy something</NavLink>
          <Nav className="ml-auto" style={{color:'white'}} >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>
    );
};
export default NavBar;