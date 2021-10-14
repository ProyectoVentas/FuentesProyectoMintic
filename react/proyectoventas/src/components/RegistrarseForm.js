import React from "react";
import { Link } from 'react-router-dom'

import './styles_gestion_rol/formato.css'

const data=[]

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_CUSTOMERS_PATH;

const RegistrarseForm = () => {

  const [newVal, setNewVal] = React.useState(0);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      bdate: "",
      psw: "",
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
        },
        (error) => {
          //setIsLoaded(true);
          //setErrors(error);
  });}

  
        return(
          
          <form action="/" method='POST'>
            <div class="container">
          <h1>Registro</h1>
          <p>Por favor llena todos los campos.</p>
          <hr/>
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
          <form method="POST" action="/">      
<div class="dropdown" id="dropdownRol">
<label for="Rol"><b>Escoger Rol:</b></label>
            <select name="rol" id="roles" >
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
          </form>      

          <div>
          <label for="psw"><b>Contrasena</b></label>
          <input type="Password" placeholder="Contrasena" name="psw" id="psw" required onChange={handleChange} />
        </div>
          <br/>
          <div>
          <label for="psw-repeat"><b>Repetir Contrasena</b></label>
      <input type="Password" placeholder="Repetir contrasena" name="pswrepeat" id="psw-repeat" required onChange={handleChange}/>
        </div>
<br/>

                        <div>
                    <p>Al crear la cuenta aceptas <a href="#">Terminos & Privacidad</a>.</p>
                    <Link to="/home/login"><button type="submit" class="registerbtn" onClick={insertar}>Registrarse</button> </Link>
          
        </div>
        <div class="container signin">
            <p>Ya tienes una cuenta? <a href="#">Login</a>.</p>
          </div>
        
          </div>
         
    
    </form>
        );
        
        
        }
     
     
    export default RegistrarseForm