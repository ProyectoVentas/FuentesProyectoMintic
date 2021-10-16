import React from "react";
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import {Link} from "react-router-dom"

class InicioVendedores extends React.Component{
render(){
    return(
        <div>
            <form action="/action_page.php">
                <div class="container">
                    <h1>Bienvenido</h1>
                    <p>Si aún no ha ingresado sus datos bancarios, especialidad, 
                    quiere actualizar su información de contacto, o contraseña, elija <Link to="/home/indexVendedor/udVendedor"><a >Mi información</a></Link></p>
                    <p>Si quiere ver la información de sus ventas, elija <Link to="/home/indexVendedor/salesBySeller"><a >Mis ventas</a></Link></p>
                </div>
            </form>          
        </div>


    )
}


}
export default InicioVendedores