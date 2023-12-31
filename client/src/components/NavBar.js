import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar = observer (() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <NavLink className="ml-auto" style={{color:'white'}} to={SHOP_ROUTE}> Buy something</NavLink>
          {user.isAuth ?
          <Nav className="ms-auto" style={{color:'white'}} >
               <Button variant="outline-light">Admin panel</Button>
               <Button variant="outline-light" className="ml-1">Log out</Button>
          </Nav>
          :
          <Nav className="ms-auto" style={{color:'white'}} >
              <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Authorization</Button>
          </Nav>
          }
          </Container>
      </Navbar>
    );
});
export default NavBar;