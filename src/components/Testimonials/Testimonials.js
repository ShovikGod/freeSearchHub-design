import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './Testimonials.css'

function Testimonials() {
    return(
        <>
            <h3 className='heading'>Testimonials</h3>
            <Carousel className="t pb-5">
                <Carousel.Item>
                    <Card>                 
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis massa et dui rutrum molestie. Nullam bibendum placerat ante, in suscipit velit rutrum vitae. Donec lectus enim, hendrerit.</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                
                <Carousel.Item>
                    <Card>                 
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis massa et dui rutrum molestie. Nullam bibendum placerat ante, in suscipit velit rutrum vitae. Donec lectus enim, hendrerit.</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                
                <Carousel.Item>
                    <Card>                 
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis massa et dui rutrum molestie. Nullam bibendum placerat ante, in suscipit velit rutrum vitae. Donec lectus enim, hendrerit.</Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Testimonials;
