import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tarjeta = ({producto}) => {
        const { nombreProducto, id, imagen, precio,detalleProducto } = { ...producto,};

        return (
            <div className="col-12 col-md-3 py-3 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{nombreProducto}</Card.Title>
                        <div className="row">
                            <Card.Text>
                                {/* <div className='row'> */}
                                <div className='col-10 text-truncate pb-4'>
                                {detalleProducto}
                                </div>
                            {/* </div> */}
                            </Card.Text>
                        </div>

                        <div className="row text-center">
                            <div className="col-6">
                                <h2>$ {precio}</h2>
                            </div>
                            <div className="col-6">
                                <Link
                                    to={`/Detalle/${id}`}
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