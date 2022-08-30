import React from 'react';
import { useEffect, useState } from 'react';
import Tarjeta from './Tarjeta';

const Home = () => {
    const [productos, setProductos] = useState([]);
    const URL = process.env.REACT_APP_API_CAFETERIA;

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
            <h1>pagina principal</h1>
            <hr />

            <div className="row">
                {productos.map((producto) => (
                    <Tarjeta key={producto.id} producto={producto}></Tarjeta>
                ))}
            </div>
        </section>
    );
};

export default Home;
