import React from "react";
import './styleshome/css/main.css'
import './styles_gestion_rol/formato.css'

import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

function BuscarRolInput(){
    return(
<div>
        
   
        <div class="container">
          <h1>Buscar Empleado</h1>
          <p>Introduzca correo del empleado para buscar sus datos.</p>
          <hr/>
          <div>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Email" name="email" id="email" required/>
          </div>
          <hr/>
           
        
        
        </div>
            

            </div>

    )

}
export default BuscarRolInput