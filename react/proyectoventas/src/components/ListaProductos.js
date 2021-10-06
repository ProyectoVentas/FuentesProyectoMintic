import React from "react";
import './styles_productos/formato.css'
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

class ListaProductos extends React.Component{
render(){
    return(
       <form>
            <div class="card card-danger">
                <div class="card-body">

                    <div class="row">

                        <div class="col-12">
                            <h3>Productos</h3>
                            <button type="button" class="btn btn-primary" id="NuevoProducto" >Nuevo +</button> 
                        </div>
                        <br></br>

                      
                        <div class="col-md-12">
                            <div class="card">
                                
                                <div class="card-header">


                                    <div class="card-tools">
                                        <ul class="pagination pagination-sm float-right">
                                            <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                             
                                <div class="card-body p-0">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th >Id Producto</th>
                                                <th>Descripcion</th>
                                                <th>Estado</th>
                                                <th >Actualizar</th>
                                                <th >Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>Update software</td>
                                                <td>
                                                    Estado
                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>Clean database</td>
                                                <td>
                                                    Estado
                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3.</td>
                                                <td>Cron job running</td>
                                                <td>
                                                    Estado
                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4.</td>
                                                <td>Fix and squish bugs</td>
                                                <td>
                                                    Estado
                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                                <td>

                                                    <a class="btn btn-app">
                                                        <i class="fas fa-edit"></i> Editar
                                                    </a>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                               
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            </form>
   



    )
}


}
export default ListaProductos