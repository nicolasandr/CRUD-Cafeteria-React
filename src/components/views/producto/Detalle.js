import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detalle = () => {
    const [producto, setProducto] = useState('');
    const URL = process.env.REACT_APP_API_CAFETERIA;
    const { id } = useParams();

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const listaProductos = await respuesta.json();
            const encontrado = listaProductos.find(
                (item) => item.id === parseInt(id)
            );
            setProducto(encontrado);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container d-flex justify-content-center py-5 my-auto">
            <Card className="flex-md-row">
                <Card.Img src={producto.imagen} className="w-50" />
                <Card.Body className="container">
                    <Card.Title>
                        <h2>{producto.nombreProducto}</h2>
                    </Card.Title>
                    <hr />
                    <p className="badge bg-success fs-5">
                        {producto.categoria}
                    </p>
                    <Card.Text className="py-3">
                        <p>
                            <h4>Descripcion:</h4>
                            {producto.detalleProducto}
                        </p>
                    </Card.Text>
                    <h4>Precio: $ {producto.precio}</h4>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Detalle;
