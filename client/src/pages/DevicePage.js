import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import BigStar from '../assets/BigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: "15 pro max", price: 10000, rating: 5, img: 'https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_1280.png'}
    const description = [
        {id:1, title: 'RAM Memory', description: '5GB'},
        {id:2, title: 'Camera', description: '48MP'},
        {id:3, title: 'Processor', description: 'A2'},
        {id:4, title: 'Core count', description: '5'},
        {id:5, title: 'Battery life', description: '5200mAh'},
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${BigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height:300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price}  $</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Specifications:</h1>
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>
           
        </Container>
    );
};
export default DevicePage;