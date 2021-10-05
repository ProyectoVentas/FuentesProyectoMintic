import React from "react";
import './styleshome/css/main.css'
import './styleshome/css/formatoHome.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

function TablaIntegrantes(){
    return(
        <div>
        <h1>Equipo 4</h1>

    <h2>Proyecto Ventas</h2>

    <h3> Integrantes del grupo</h3>

    <br/>

    <div class="container">

    <table class="table table-hover" >
        
          <tr>
            
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            
          </tr>
        
        <tbody>
          <tr>
           
            <td>Andrés Coronado</td>
            <td>andrescoronadob5@gmail.com</td>
           
          </tr>
          <tr>
           
            <td>Julián Andrés Ortiz</td>
            <td>julianortizvillar@gmail.com</td>
            
          </tr>
          <tr>
           
            <td>Alejandra Fernández García</td>
            <td>alejandrafernandezg9701@gmail.com</td>
            
          </tr>

          <tr>
           
            <td>Mauricio Herrera Palacio</td>
            <td>mauricioherrerapalacio@gmail.com</td>
            
          </tr>

        </tbody>
      </table>
    </div>
    </div>


    )

}
export default TablaIntegrantes