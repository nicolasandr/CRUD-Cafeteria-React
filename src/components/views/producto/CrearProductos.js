
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {
    cantidadCaracteres,
    validarCategoria,
    validarPrecio,
    validarURL,
    validarDetalleProducto,
} from './helpers';

const CrearProductos = () => {
    // crear states
    const [nombreProducto, seTNombreProdcuto] = useState('');
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [msjError, SetMsjerror] = useState(false);
    const [detalleProducto,seTDetalleProdcuto] = useState('');
    //variable de entorno con la direccion de mi api
    const URL = process.env.REACT_APP_API_CAFETERIA;
    // inicializar useNavigate
    const navegacion = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        //validar los datos
        if (
            cantidadCaracteres(nombreProducto) &&
            validarPrecio(precio) &&
            validarURL(imagen) &&
            validarCategoria(categoria) &&
            validarDetalleProducto(detalleProducto)
        ) {
            console.log('los datos son correctos crear el objeto');
            SetMsjerror(false);
            //crear un objeto
            const nuevoPorducto = {
                nombreProducto: nombreProducto,
                precio: precio,
                imagen: imagen,
                categoria: categoria,
                detalleProducto: detalleProducto,
            };
            console.log(nuevoPorducto);
            //enviar peticion a json-server (API)
            try {
                const respuesta = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevoPorducto),
                });
                if (respuesta.status === 201) {
                    //mostrar mensaje que todo salio bien
                    Swal.fire(
                        'Producto creado!',
                        'El producto fue agregado correctamente!',
                        'success'
                    );
                    //redireccionar a la pagina de administracion
                    navegacion('/administrar');
                }
            } catch (error) {
                console.log(error);
                //mostrar mensaje al ususario
            }
        } else {
            console.log('solicitar que guarde los datos correctamente');
            SetMsjerror(true);
        }
    };

    return (
        <section className="container py-5">
            <h1 className="display-4">Nuevo producto</h1>
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
                <Form.Group className="mb-3" controlId="formDetalleProdcuto">
                    <Form.Label>Detalle de producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Descripcion de producto"
                        onChange={(e) => seTDetalleProdcuto(e.target.value)}
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
            {msjError ? (
                <Alert variant="danger" className="mt-4">
                    Debe corregir los datos
                </Alert>
            ) : null}
        </section>
    );
};

export default CrearProductos;
