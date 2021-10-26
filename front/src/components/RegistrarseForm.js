import React from "react";
import { Link } from 'react-router-dom'

import '../components/styles_gestion_rol/formato.css'

const data=[]

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_CUSTOMERS_PATH;

const RegistrarseForm = () => {
 
 

  const [newVal, setNewVal] = React.useState(0);
  const [error,setError]=React.useState(null);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      bdate: "",
      password: "",
      pswrepeat: "",
      roles:""

    }
  });

  const handleChange = (e) => {
    setUsuario((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      }
    }));
  };
 
  const insertar = () => {
   
   
    let usuarioACrear = { ...usuario.form };
    console.log(usuarioACrear);
    const requestOptions = {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuarioACrear)
    };

   
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
   
      .then(
       
        (response) => {
         
          response.json();
            setNewVal(newVal + 1);
            console.log(response)
    
            
        },
       
     
          (err) => {
            setError(err.message)
          
          }
          );
      }

 

     
      

 
        return(
        
        


            <div class="container"  >
              
          <h1>Registro</h1>
          <p>Por favor llena todos los campos.</p>
          <hr/>
          <form id='formregistro'>
          { error && <div>{ error }</div> }
          <div>
          <label for="Nombre"><b>Nombre</b></label>
         <input type="String" placeholder="Nombre" name="fName" id="fname" required  onChange={handleChange}/>
        </div>
          <div>
          <label for="Apellido"><b>Apellido</b></label>
         <input type="String" placeholder="Apellido" name="lName" id="Lname" required onChange={handleChange}/>
        </div>
          <div>
          <label for="email"><b>Email</b></label>
         <input type="email" placeholder="Email" name="email" id="email" required onChange={handleChange}/>
        </div>
        <div>
        <label for="phone"><b>Celular</b></label>
        <input type="Number" placeholder="Movil" name="phone" id="phone" required onChange={handleChange}/>
    
    </div>
        
        <div>
            <label for="fechaDeNacimiento"><b>Fecha de Nacimiento</b></label>
            <input type="Date" placeholder="dd/mm/yyyy" name="bdate" id="bdate" required onChange={handleChange} />
        </div>
          <br/>
         

       
<div class="dropdown" id="dropdownRol">
<label for="Rol"><b>Escoger Rol:</b></label>
            <select name="roles" id="roles" >
              <option value="vendedor">Vendedor</option>
              <option value="administrador">Administrador</option>
              <option value="ejecutivo">Ejecutivo</option>
              <option value="operario">Operario</option>
              <option value="director">Director</option>
              <option value="gerenteComercial">Gerente Comercial</option>
              <option value="Seguridad">Seguridad</option>
            </select>
            <div>

              
            
        <text></text>
        </div>
          </div>
       

          <div>
          <label for="psw"><b>Contrasena</b></label>
          <input type="Password" placeholder="Contrasena" name="password" id="psw" required onChange={handleChange} />
        </div>
          <br/>
          <div>
          <label for="psw-repeat"><b>Repetir Contrasena</b></label>
      <input type="Password" placeholder="Repetir contrasena" name="pswrepeat" id="psw-repeat" required onChange={handleChange}/>
        </div>
<br/>

                        <div>
                    <p>Al crear la cuenta aceptas <a href="#">Terminos & Privacidad</a>.</p>

                  <Link to="/home/login/registrarse/confirmation">  <button type="submit" class="registerbtn" onClick={insertar}>Registrarse</button></Link>
          


        </div>
        </form>
        <div class="container signin">
            <p>Ya tienes una cuenta? <a href="#">Login</a>.</p>
          </div>
        
          </div>
         
       
          

        
        );
        
      
            
}
    export default RegistrarseForm