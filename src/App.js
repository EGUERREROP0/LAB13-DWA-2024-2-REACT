import React from 'react';
import './App.css';
import ListClientesComponent from './components/ListClientesComponent'; // Asegúrate de que la ruta sea correcta

import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProductosComponent from './components/ListProductosComponent';
import AddProductoComponent from './components/AddProductoComponent';
import { HeaderComponent } from './components/HeaderComponent';
import AddClienteComponent from './components/AddClientesComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/clients' element={<ListClientesComponent />}></Route>
            <Route path='/clientes' element={<ListClientesComponent />}></Route>
            <Route path='/add-cliente' element={<AddClienteComponent />}></Route>
            <Route path='/edit-cliente/:id' element={<AddClienteComponent />}></Route>

            <Route exact path='/products' element={<ListProductosComponent />}></Route>
            <Route path='/productos' element={<ListProductosComponent />}></Route>
            <Route path='/add-producto' element={<AddProductoComponent />}></Route>
            <Route path='/edit-producto/:id' element={<AddProductoComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
