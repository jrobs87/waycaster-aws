import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img from '../../imgs/16-Waycaster125633-R1-E011.jpg'

function RouteOne() {
    console.log("Rendered path '/route-1' - RouteOne.");

    const style = {
        backgroundImage: 'url(' + img + ')',
        height: '70vh',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // filter: 'grayscale(100%)'
    
    }

    return (
        <div className="page-wrapper">
            <Container>
                <Row>
                    <Col lg={12}>
                        <p style={{ fontSize: '0.8rem', textTransform: 'uppercase'}}>Shia Ridge - Calgary, Wyoming</p>
                        <div style={style}></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RouteOne