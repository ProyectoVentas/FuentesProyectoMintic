import React from "react";
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import { Link } from 'react-router-dom'
class IndexActiveSalesSeller extends React.Component{
render(){
    return(
        <div>
            <form action="/action_page.php">

                <div class="container">
                    <h1>Ventas activas</h1>
                    <p>Solo lectura</p>
                    <hr/>
                        <div>
                            <table>
                                <tr>
                                    <th>IU Vendedor</th>
                                    <th>IU Venta</th>
                                    <th>Estado de venta</th>
                                    <th>Comentarios</th>
                                </tr>
                                <tr>
                                    <td>msherrerap</td>
                                    <td>108</td>
                                    <td>Cotización</td>
                                    <td>El cliente se muestra afanado por terminar la compra</td>
                                </tr>

                            </table>
                        </div>

                    <hr/>
                    <Link to='/home/indexVendedor/salesBySeller'> <a >Regresar</a></Link>
                </div>




            </form>

        </div>


    )
}


}
export default IndexActiveSalesSeller