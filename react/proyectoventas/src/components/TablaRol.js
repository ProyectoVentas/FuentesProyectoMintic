import React from "react";
import './styles_buscar/formato.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'


const data=[]
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_CUSTOMERS = process.env.REACT_APP_API_CUSTOMERS_PATH;

const TablaRol = () => {
  var modal = document.getElementById("myModal");
  const [modalActualizar] = React.useState(false);
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
    const mostrarModalActualizar = (e) => {
      let arregloUsuarios = usuario.data;
      let userToModify;
      arregloUsuarios.map((registro) => {
        if (e.target.id === registro._id) {
          userToModify = registro;
        }
      });
      setUsuario({
        ...usuario,
        form: userToModify
      });
      modal.style.display = "block";
    };
  
    const cerrarModalActualizar = () => {
      modal.style.display = "none";
    };
  

  
    const editar = () => {
      let usuarioAModificar = { ...usuario.form };
      actualizarCustomer(usuarioAModificar);
      modal.style.display = "none";
    };
  
    const eliminar = (e) => {
      let arregloUsuarios = usuario.data;
      arregloUsuarios.map((registro) => {
        if (e.target.id === registro._id) {
          let opcion = window.confirm("¿Está seguro que desea eliminar el valor " + registro.fName + "?");
          if (opcion) {
            borrarCustomer(registro._id);
          }
        }
        
      });
    };
  
    const actualizarCustomer = (customer) => {
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      };
      fetch(`${BASE_URL}${PATH_CUSTOMERS}/${customer._id}`, requestOptions)
        .then(result => result.json())
        .then(
          (result) => {
            setNewVal(newVal + 1);
          },
          (error) => {
            console.log(error);
          }
        );
    }  
  
    
  
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
  
  
    const borrarCustomer = (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      fetch(`${BASE_URL}${PATH_CUSTOMERS}/${id}`, requestOptions)
        .then(result => result.json())
        .then(
          (result) => {
            setNewVal(newVal + 1);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  
  
   
  
    return (
   <div>
        <container>
        <div id="tablas">
           <h1 id="titulotabla">Informacion  Empleado</h1>
          <p id="parrafotabla">Actualizar o Eliminar empleado.</p>
          <hr/>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Birth Date</th>
                <th>Contrasena</th>
                <th>Conf contrasena</th>
                <th>Roles</th>
                
              </tr>
            </thead>
  
            <tbody>
              {usuario.data.map((dato) => (
                <tr key={dato._id}>
                  <td>{dato.fName}</td>
                  <td>{dato.lName}</td>
                  <td>{dato.email}</td>
                  <td>{dato.phone}</td>
                  <td>{dato.bdate}</td>
                  <td>{dato.psw}</td>
                  <td>{dato.pswrepeat}</td>
                  <td>{dato.roles}</td>
                  <td>
                    <button  id={dato._id} class="update" onClick={mostrarModalActualizar}>Actualizar</button>
                    <button id={dato._id} color="danger"  class="delete" onClick={eliminar}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr/>
          </div>
  </container>
<div id="myModal" class="modales">
<modal isOpen={modalActualizar} id="modales">
<div id="modalb">
<modalheader>
  <div><h3>Actualizar Usuario </h3></div>
</modalheader>

<modalbody >

  <formgroup>

  <label for="Nombre"><b>Nombre</b></label>
         <input type="String" placeholder="Nombre" name="fName" id="fname" required  onChange={handleChange}  value={usuario.form.fName}/>
    
         </formgroup>
<br/>
         <formgroup>
  <label for="Apellido"><b>Apellido</b></label>
         <input type="String" placeholder="Apellido" name="lName" id="Lname" required onChange={handleChange} value={usuario.form.lName}/>
    
         </formgroup>
         <br/>
         <formgroup>
         <label for="email"><b>Email</b></label>
         <input type="String" placeholder="Email" name="email" id="email" required onChange={handleChange} value={usuario.form.email}/>
    
         </formgroup>
         <br/>
         <formgroup>
       
         <label for="phone"><b>Celular</b></label>
        <input type="Number" placeholder="Movil" name="phone" id="phone" required onChange={handleChange} value={usuario.form.phone}/>    
         </formgroup>
         <br/>
         <formgroup>
       
         <label for="fechaDeNacimiento"><b>Fecha de Nacimiento</b></label>
            <input type="Date" placeholder="dd/mm/yyyy" name="bdate" id="bdate" required onChange={handleChange} value={usuario.form.bdate}/>    
         </formgroup>
         <br/>
         <formgroup>
       
         <label for="psw"><b>Contrasena</b></label>
          <input type="String" placeholder="Contrasena" name="psw" id="psw" required onChange={handleChange} value={usuario.form.psw}/>
       </formgroup>
       <br/>
       <formgroup>
       
       <label for="psw-repeat"><b>Repetir Contrasena</b></label>
      <input type="String" placeholder="Repetir contrasena" name="pswrepeat" id="psw-repeat" required onChange={handleChange} value={usuario.form.pswrepeat}/>
     </formgroup>
     <br/>

     <formgroup>
       
     <label for="roles"><b>Roles</b></label>
         <input type="String" placeholder="rol" name="roles" id="roles" required onChange={handleChange} value={usuario.form.roles}/>
     </formgroup>



  
</modalbody>
<br/>
<modalfooter>
  <button
    color="primary"
    class="update"
    onClick={editar}
  >
    Actualizar
  </button>
  <button
    class="delete"
    onClick={cerrarModalActualizar}
  >
    Cancelar
  </button>
</modalfooter>
</div>
</modal>
</div>
</div>

    );
  }
  export default TablaRol;