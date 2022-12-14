import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import ItemProducto from './ItemProducto';
import { Link } from 'react-router-dom';

const AdministrarProductos = () => {
    const URL = process.env.REACT_APP_API_CAFETERIA;
    // console.log(URL);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        // peticion get
        try {
            //codigo que quiero ejecutar
            const respuesta = await fetch(URL);
            const listaProductos = await respuesta.json();

            setProductos(listaProductos);
        } catch (error) {
            console.log(error);
            //agregar un mensaje intuitivo para el usuario
        }
    };

    return (
        <section className="container py-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-4 ">Productos disponibles</h1>
                <Link
                    to="/administrar/producto/crear"
                    className="btn btn-primary"
                >
                    Agregar
                </Link>
            </div>
            <hr />
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL de Imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* aqui tengo que hacer un map */}
                    {productos.map((producto) => (
                        <ItemProducto
                            key={producto._id}
                            producto={producto}
                            consultarAPI={consultarAPI}
                        ></ItemProducto>
                    ))}
                </tbody>
            </Table>
        </section>
    );
};

export default AdministrarProductos;
