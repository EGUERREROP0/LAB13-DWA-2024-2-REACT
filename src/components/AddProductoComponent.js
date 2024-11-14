
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';

function AddProductoComponent() {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    const saveOrUpdateProducto = (e) => {
        e.preventDefault();

        const producto = { nombre, precio, stock, categoria }

        if (id) {
            ProductoService.updateProducto(id, producto)
                .then((response) => {
                    console.log(producto)
                    navigate('/productos')
                }).catch((error) => {
                    console.error(error)
                })
        } else {
            ProductoService.createProducto(producto).then((response) => {
                console.log(producto)
                navigate('/productos')
            }).catch((error) => {
                console.error(error)
            })
        }
    }

    useEffect(() => {
        ProductoService.getProductoById(id).then((response) => {
            setNombre(response.data.nombre)
            setPrecio(response.data.precio)
            setCategoria(response.data.categoria)
            setStock(response.data.stock)
        })
            .catch((error) => {
                console.error(error)
            });
    }, [])

    const titulo = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar Producto</h2>
        }
        else {
            return <h2 className='text-center'>Registrar Producto</h2>
        }
    }

    return (
        <div>
            <div className='container' style={{ marginTop: "80px" }}>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>

                        <h2> {titulo()}</h2>

                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Nombre del Producto:</label>
                                    <input
                                        type='text'
                                        placeholder='Escriba el nombre del producto'
                                        name='txtNombreProducto'
                                        className='form-control'
                                        value={nombre} onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Precio:</label>
                                    <input
                                        type='number'
                                        placeholder='Escriba el precio del producto'
                                        name='txtPrecio'
                                        className='form-control'
                                        value={precio} onChange={(e) => setPrecio(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cantidad en Stock:</label>
                                    <input
                                        type='number'
                                        placeholder='Escriba la cantidad disponible'
                                        name='txtStock'
                                        className='form-control'
                                        value={stock} onChange={(e) => setStock(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Categoría:</label>
                                    <input
                                        type='text'
                                        placeholder='Escriba la categoría del producto'
                                        name='txtCategoria'
                                        className='form-control'
                                        value={categoria} onChange={(e) => setCategoria(e.target.value)}
                                    />
                                </div>
                                <div className='botones'>
                                    <button className='btn btn-danger' onClick={(e) => saveOrUpdateProducto(e)}>Guardar</button>
                                    <Link to='/productos' className='btn btn-primary'>Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddProductoComponent;
