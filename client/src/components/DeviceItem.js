import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'

const DeviceItem = observer((device) => {
    return (
        <Col md={3}>
            <Card
                style={{width:150, cursor: 'pointer'}}
                border={'light'}
            >
                <Image width={150} height={150} src={device.img}/>
                <div className='text-black-50 mt-1 mb-1 d-flex justify-content-between align-items-center'>
                    <div>Samsung</div>
                    <div className='d-flex'>
                        <div>{device.rating}</div>
                        <Image width={17} height={17} src={star}/>
                    </div>
                </div>
                    <div>{device.name}</div>

            </Card>
        </Col>
    );
});

export default DeviceItem;