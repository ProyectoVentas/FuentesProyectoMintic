import React from "react";


import './styles_gestion_rol/formato.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

const data=[]

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_CUSTOMERS_PATH;

const RegistrarseForm = () => {

  const [newVal, setNewVal] = React.useState(0);
  const [usuario, setUsuario] = React.useState({
    data: data,
    form: {
      Fname: "",
      Lname: "",
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
  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`${BASE_URL}${PATH_CUSTOMERS}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          setUsuario({
            ...usuario,
            data: result
          });
        },
        (error) => {
          //setIsLoaded(true);
          //setErrors(error);
        }
      )
  }, [newVal]);

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
          <form action="/action_page.php">
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
         <input type="String" placeholder="Email" name="email" id="email" required onChange={handleChange}/>
        </div>
        <div>
        <label for="phone"><b>Celular</b></label>
        <input type="Number" placeholder="Movil" name="phone" id="phone" required onChange={handleChange}/>
    
    </div>
        
        <div>
            <label for="fechaDeNacimiento"><b>Fecha de Nacimiento</b></label>
            <input type="Date" placeholder="dd/mm/yyyy" name="bdate" id="bdate" required onChange={handleChange}/>
        </div>
          <br/>
          <div>
          <label for="psw"><b>Contrasena</b></label>
          <input type="String" placeholder="Contrasena" name="psw" id="psw" required onChange={handleChange}/>
        </div>
          <br/>
          <div>
          <label for="psw-repeat"><b>Repetir Contrasena</b></label>
      <input type="String" placeholder="Repetir contrasena" name="pswrepeat" id="psw-repeat" required onChange={handleChange}/>
        </div>
<br/>
<div>
          <label for="roles"><b>Roles</b></label>
         <input type="String" placeholder="rol" name="roles" id="roles" required onChange={handleChange}/>
        </div>
          <hr/>
         
      <div>
                    <p>Al crear la cuenta aceptas <a href="#">Terminos & Privacidad</a>.</p>
                    <button type="submit" class="registerbtn" onClick={insertar}>Registrarse</button>
          
        </div>
        <div class="container signin">
            <p>Ya tienes una cuenta? <a href="#">Login</a>.</p>
          </div>
        
          </div>
    
    </form>
        );
        
        
        }
     
    export default RegistrarseForm