import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PaperCard.css';
import { BiDownload } from 'react-icons/bi';

function PaperCard({
    title,
    issn
}) {
    return (
        <div className='col my-0'>
            <Card className="p mb-0">
                <Card.Img variant="top" src="./1.jpg" />
                <Card.Body className='p-0'>
                    <div className='p-3'>
                        <Card.Title>{ title }</Card.Title>
                        <Card.Text>
                            ISSN: { issn }
                        </Card.Text>
                    </div>
                    <Button variant='success'><BiDownload /> Download</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PaperCard;
