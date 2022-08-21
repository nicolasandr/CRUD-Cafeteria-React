import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {
    cantidadCaracteres,
    validarCategoria,
    validarPrecio,
    validarURL,
} from './helpers';

const CrearProductos = () => {
    // crear states
    const [nombreProdcuto, seTNombreProdcuto] = useState('');
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //validar los datos
        if (
            cantidadCaracteres(nombreProdcuto) &&
            validarPrecio(precio) &&
            validarURL(imagen) &&
            validarCategoria(categoria)
        ) {
            console.log('los datos son correctos crear el objeto');
        } else {
            console.log('solicitar que guarde los datos correctamente');
        }
        //crear un objeto
        //enviar peticion a json-server
    };

    return (
        <section className="container">
            <h1 className="display-4 mt-5">Nuevo producto</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreProdcuto">
                    <Form.Label>Nombre producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        onChange={(e) => seTNombreProdcuto(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/foto/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                        onChange={(e) => setImagen(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Seleccione una opcion</option>
                        <option value="bebida-caliente">bebida caliente</option>
                        <option value="bebida-fria">bebida fria</option>
                        <option value="dulce">dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </section>
    );
};

export default CrearProductos;
