export const cantidadCaracteres = (input) => {
    if (input.length >= 2 && input.length <= 20) {
        return true;
    } else {
        return false;
    }
};

export const validarPrecio = (dato) => {
    let patron = /^[\d]{1,4}$/;
    if (patron.test(dato)) {
        return true;
    } else {
        return false;
    }
};
export const validarURL = (datoUrl) => {
    let patron = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/;
    if (patron.test(datoUrl)) {
        return true;
    } else {
        return false;
    }
};

export const validarCategoria = (input) => {
    if (input.trim().length > 0) {
        return true;
    } else {
        return false;
    }
};
