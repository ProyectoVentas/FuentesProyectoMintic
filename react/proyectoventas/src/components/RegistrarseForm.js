import React from "react";


import './styles_gestion_rol/formato.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

class RegistrarseForm extends React.Component{
    render(){
        return(
            <div class="container">
          <h1>Registro</h1>
          <p>Por favor llena todos los campos.</p>
          <hr/>
          <div>
          <label for="Nombre"><b>Nombre</b></label>
          <input type="text" placeholder="Nombre" name="Fname" id="fname" required/>
        </div>
          <div>
          <label for="Apellido"><b>Apellido</b></label>
          <input type="text" placeholder="Apellido" name="Lname" id="Lname" required/>
        </div>
          <div>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Email" name="email" id="email" required/>
        </div>
        <div>
        <label for="phone"><b>Celular</b></label>
        <input type="text" placeholder="Movil" name="phone" id="phone" required/>
    
    </div>
        
        <div>
            <label for="fechaDeNacimiento"><b>Fecha de Nacimiento</b></label>
            <input type="date" placeholder="dd/mm/yyyy" name="bdate" id="bdate" required/>
        </div>
          <br/>
          <div>
          <label for="psw"><b>Contrasena</b></label>
          <input type="password" placeholder="Contrasena" name="psw" id="psw" required/>
        </div>
          <br/>
          <div>
          <label for="psw-repeat"><b>Repetir Contrasena</b></label>
          <input type="password" placeholder="Repetir contrasena" name="psw-repeat" id="psw-repeat" required/>
        </div>
<br/>
<label for="Rol"><b>Escoger Rol:</b></label>
        <div class="dropdown">
            
            <select name="roles" id="roles">
              <option value="vendedor">Vendedor</option>
              <option value="administrador">Administrador</option>
              <option value="ejecutivo">Ejecutivo</option>
              <option value="operario">Operario</option>
              <option value="director">Director</option>
              <option value="gerenteComercial">Gerente Comercial</option>
              <option value="Seguridad">Seguridad</option>
            </select>
            <br></br>
          </div>
          <hr/>
         
      <div>
                    <p>Al crear la cuenta aceptas <a href="#">Terminos & Privacidad</a>.</p>
          <button type="submit" class="registerbtn">Registrarse</button>
        </div>
        <div class="container signin">
            <p>Ya tienes una cuenta? <a href="#">Login</a>.</p>
          </div>
        
          </div>
    
    
        )
    }
    
    
    }
    export default RegistrarseForm