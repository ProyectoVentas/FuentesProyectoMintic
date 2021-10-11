import React from "react";


import './styles_gestion_rol/formato.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

class ComprarForm extends React.Component {
    render() {
        return (
            <div id="comprarForm">
                
                    <label>Id:123456 Nuevo Pedido</label> <label>ID Vendedor: idVendedor</label>
                

                <hr />
                

                    <div>
                        <label>Cliente</label>
                        <input type="text" class="form-control" placeholder="Nombre o Identificacion" />
                        </div>

                        <div>
                    <button type="button" class="btn btn-primary" id="nuevoCliente"> Nuevo Cliente +</button>
                </div>

<br/>
                        <div>
                        <label>
                            Fecha
                        </label>
                        <input type="Date" class="form-control" placeholder="Fecha" />
                        </div>
                
                        <div>
                        <label>Agregar Producto</label>
                        <input type="text" class="form-control" placeholder="Agregar Producto" />
                        </div>

<div>
<button type="button" class="btn btn-primary" id="agregarProducto"> Agregar Producto</button>
</div>


              

               
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
                        <thead>
                            <tr>
                                <th>id producto</th>
                                <th>cantidad</th>
                                <th>valor u</th>
                                <th>valor total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>183</td>
                                <td>John Doe</td>
                                <td>11-7-2014</td>
                                <td><span class="tag tag-success">Approved</span></td>

                            </tr>
                            <tr>
                                <td>219</td>
                                <td>Alexander Pierce</td>
                                <td>11-7-2014</td>
                                <td><span class="tag tag-warning">Pending</span></td>

                            </tr>
                            <tr>
                                <td>657</td>
                                <td>Bob Doe</td>
                                <td>11-7-2014</td>
                                <td><span class="tag tag-primary">Approved</span></td>

                            </tr>
                            <tr>
                                <td>175</td>
                                <td>Mike Doe</td>
                                <td>11-7-2014</td>
                                <td><span class="tag tag-danger">Denied</span></td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <button type="submit" class="guardar-pedido">Comprar</button>
            </div>
        )
    }


}
export default ComprarForm