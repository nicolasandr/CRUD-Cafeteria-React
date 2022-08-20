import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const AdministrarProductos = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA;
  console.log(URL);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //peticion get
    try {
      //codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const listaProductos = await respuesta.json();

      setProductos(listaProductos);
      //estructura por si se rompe todo
    } catch (error) {
      console.log(error);
      //agregar mensaje intuitivo para usuario
    }
  };
  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Poductos disponibles</h1>
        <Button variant="primary">Agregar</Button>
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
          </tr>
        </thead>
        <tbody>
          {/* aqui tengo que hacer un map */}
          {
            productos.map((producto)=><ItemProducto key={producto.id} product={producto} ></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default AdministrarProductos;
