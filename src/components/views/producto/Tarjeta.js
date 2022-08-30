import React from 'react';
import { Card,Button } from 'react-bootstrap';

const Tarjeta = ({producto}) => {
        const { nombreProducto, id, categoria, imagen, precio } = { ...producto,};

        return (
            <div className="col-12 col-md-3 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{nombreProducto}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <div className="row text-center">
                            <div className="col-6">
                                <h2>{precio}</h2>
                            </div>
                            <div className="col-6">
                                <Button variant="danger">Ver Mas</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
};

export default Tarjeta;