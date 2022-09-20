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
        <section className="container py-4">
            <h1 className="display-4">pagina principal</h1>
            <hr />

            <div className="row mb-5">
                {productos.map((producto) => (
                    <Tarjeta key={producto._id} producto={producto}></Tarjeta>
                ))}
            </div>
        </section>
    );
};

export default Home;
