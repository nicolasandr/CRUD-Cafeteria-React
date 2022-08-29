import React from 'react';
import { Form, Button } from 'react-bootstrap';

const EditarProducto = () => {
    return (
        <div>
            <section className="container">
                <h1 className="display-4 mt-5">Editar producto</h1>
                <hr />
                <Form>
                    <Form.Group className="mb-3" controlId="formNombreProdcuto">
                        <Form.Label>Nombre producto*</Form.Label>
                        <Form.Control type="text" placeholder="Ej: Cafe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrecio">
                        <Form.Label>Precio*</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 50" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrecio">
                        <Form.Label>Imagen URL*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: https://www.pexels.com/es-es/foto/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrecio">
                        <Form.Label>Categoria*</Form.Label>
                        <Form.Select>
                            <option value="">Seleccione una opcion</option>
                            <option value="bebida-caliente">
                                bebida caliente
                            </option>
                            <option value="bebida-fria">bebida fria</option>
                            <option value="dulce">dulce</option>
                            <option value="salado">Salado</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
                {/* {msjError ? (
                    <Alert variant="danger" className="mt-4">
                        Debe corregir los datos
                    </Alert>
                ) : null} */}
            </section>
        </div>
    );
};

export default EditarProducto;
