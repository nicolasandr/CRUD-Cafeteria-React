import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tarjeta = ({ producto }) => {
    const { nombreProducto, _id, imagen, precio, detalleProducto } = {
        ...producto,
    };

    return (
        <div className="col-6 col-md-4 col-lg-3 mt-4 ">
            <Card className="h-100">
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombreProducto}</Card.Title>
                    <div className="row">
                        <Card.Text className="col-10 text-truncate pb-4">
                            {detalleProducto}
                        </Card.Text>
                    </div>

                    <div className="row text-center">
                        <div className="col-6">
                            <h2>$ {precio}</h2>
                        </div>
                        <div className="col-6">
                            <Link
                                to={`/Detalle/${_id}`}
                                className="btn btn-primary"
                            >
                                Ver Mas
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tarjeta;
