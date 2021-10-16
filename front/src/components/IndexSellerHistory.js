import React from "react";
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import { Link } from 'react-router-dom'
class IndexSellerHistory extends React.Component{
render(){
    return(
        <div>
            <form action="/action_page.php">

                <div class="container">
                    <h1>Informacion  vendedor id</h1>
                    <p>Solo lectura</p>
                    <hr>
                        <div>
                            <table>
                                <tr>
                                    <th>IU Vendedor</th>
                                    <th><a href="./salesStates.html">Ventas en proceso</a></th>
                                    <th>Ventas canceladas</th>
                                    <th>Ventas confirmadas</th>
                                    <th>Reputación</th>
                                    <th>Tiempo de actividad</th>
                                </tr>
                                <tr>
                                    <td>msherrerap</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>107</td>
                                    <td>4,5/5</td>
                                    <td>174 días</td>
                                </tr>

                            </table>
                        </div>

                    </hr>
                    <a href="wcSeller.html">Regresar</a>
                </div>




            </form>

        </div>


    )
}


}
export default IndexSellerHistory