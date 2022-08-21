import React from 'react';
import { Button } from 'react-bootstrap';

const ItemProducto = (props) => {
    return (
        <tr>
            <td>1</td>
            <td>{props.product.nombreProdcuto}</td>
            <td>{props.product.precio}</td>
            <td>
                <div className="row">
                    <div className="col-5 text-truncate">
                        {props.product.imagen}
                    </div>
                </div>
            </td>
            <td>{props.product.categoria}</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
