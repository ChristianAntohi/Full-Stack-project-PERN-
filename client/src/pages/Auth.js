import React from 'react';
import { Container, Form, Card, Button, Row, NavLink } from 'react-bootstrap';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { useLocation } from 'react-router-dom';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(location)
    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-2'
                    placeholder="Insert your email..."
                />

                <Form.Control
                className='mt-2'
                placeholder="Insert your password..."
                />
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ? 
                        <div>
                            Don't have an account?<NavLink to={REGISTRATION_ROUTE} style={{color:'blue'}}>Register!</NavLink>
                        </div>
                        :
                        <div>
                            Have an account?<NavLink to={LOGIN_ROUTE} style={{color:'blue'}}>Log In</NavLink>
                        </div>
                        }
                        <Button 
                        variant={"outline-success"}
                        >
                           {isLogin ?
                           'Enter'
                           :
                           'Register'
                        }
                        </Button> 
                </Row>
            </Form>
        </Card>
        </Container>
    );
};
export default Auth;