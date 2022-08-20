import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdministrarProductos from './components/views/AdministrarProductos';
import CrearProductos from './components/views/CrearProductos';
import Home from './components/views/Home';
import EditarProducto from './components/views/EditarProducto';
import Error404 from './components/views/Error404';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';

const App = () => {
    return (
        <div>
           <BrowserRouter>
           <Menu></Menu>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route exact path='/administrar' element={<AdministrarProductos></AdministrarProductos>}></Route>
                <Route exact path='/administrar/producto/crear' element={<CrearProductos></CrearProductos>}></Route>
                <Route exact path='/administrar/producto/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
                <Route exact path='*' element={<Error404></Error404>}></Route>
            </Routes>
            <Footer></Footer>
           </BrowserRouter>
        </div>
    );
};

export default App;