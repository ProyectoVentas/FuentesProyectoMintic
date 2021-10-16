import React from "react";
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

class InicioVendedores extends React.Component{
render(){
    return(
        <div>
            <form action="/action_page.php">
                <div class="container">
                    <h1>Bienvenido</h1>
                    <p>Si aún no ha ingresado sus datos bancarios, especialidad, 
                    quiere actualizar su información de contacto, o contraseña, elija <a href="./udSeller.html">Mi información</a></p>
                    <p>Si quiere ver la información de sus ventas, elija <a href="./salesBySeller.html">Mis ventas</a></p>
                </div>
            </form>          
        </div>


    )
}


}
export default InicioVendedores