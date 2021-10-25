import React from "react";
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import './styles_ventas/formato.css'
const data=[]

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PATH_VENTAS = process.env.REACT_APP_API_VENTAS_PATH;

const IndexGestionVentas = () => {
    var modal = document.getElementById("myModal");
<<<<<<< HEAD:react/proyectoventas/src/components/IndexGestionVentas.js
    const [modalActualizar, setModalActualizar] = React.useState(false);
=======
    const [modalActualizar] = React.useState(false);
>>>>>>> 67d5b702dec92062ff0ff5c045751d7ad4c99c3e:front/src/components/IndexGestionVentas.js
    const [newVal, setNewVal] = React.useState(0);
     
      const [usuario, setUsuario] = React.useState({
        data: data,
        form: {
        fechaCreacion: "",
        embalaje: "",
        despachoRuta: "",
        ubicacion: "",
        estado: "",
        ruta: "",
        medioPago: "",
        vendedor:"",
        cliente:""
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
        actualizarVentas(usuarioAModificar);
        modal.style.display = "none";
      };
    
      const eliminar = (e) => {
        let arregloUsuarios = usuario.data;
        arregloUsuarios.map((registro) => {
          if (e.target.id === registro._id) {
            let opcion = window.confirm("¿Está seguro que desea eliminar el valor " + registro.fechaCreacion + "?");
            if (opcion) {
              borrarVentas(registro._id);
            }
          }
          
        });
      };
    
      const actualizarVentas = (ventas) => {
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ventas)
        };
        fetch(`${BASE_URL}${PATH_VENTAS}/${ventas._id}`, requestOptions)
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
        fetch(`${BASE_URL}${PATH_VENTAS}`, requestOptions)
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
    
    
      const borrarVentas = (id) => {
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        };
        fetch(`${BASE_URL}${PATH_VENTAS}/${id}`, requestOptions)
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
             <h1 id="titulotabla">Informacion ventas</h1>
            <p id="parrafotabla">Actualizar o Eliminar ventas.</p>
            <hr/>
            <table>
              <thead>
                <tr>
                  <th>Fecha Creacion</th>
                  <th>Embalaje</th>
                  <th>Despacho ruta</th>
                  <th>Ubicacion</th>
                  <th>Estado</th>
                  <th>Ruta</th>
                  <th>Medio de pago</th>
                  <th>Vendedor</th>
                  <th>Cliente</th>

                  
                </tr>
              </thead>
    
              <tbody>
                {usuario.data.map((dato) => (
                  <tr key={dato._id}>
                    <td>{dato.fechaCreacion}</td>
                    <td>{dato.embalaje}</td>
                    <td>{dato.despachoRuta}</td>
                    <td>{dato.ubicacion}</td>
                    <td>{dato.estado}</td>
                    <td>{dato.ruta}</td>
                    <td>{dato.medioPago}</td>
                    <td>{dato.vendedor}</td>
                    <td>{dato.cliente}</td>
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
  <modal isOpen={modalActualizar} >
  <div id="modalb">
  <modalheader>
    <div><h3>Actualizar ventas </h3></div>
  </modalheader>
  
  <modalbody >
  
    <formgroup>
  
    <label for="fechaCreacion"><b>Fecha creacion</b></label>
    <input type="Date" placeholder="dd/mm/yyyy" name="fechaCreacion" id="fechaCreacion" required onChange={handleChange} value={usuario.form.fechaCreacion}/>    
      
           </formgroup>
  <br/>
           <formgroup>
    <label for="embalaje"><b>Embalaje</b></label>
           <input type="String" placeholder="embalaje" name="embalaje" id="embalaje" required onChange={handleChange} value={usuario.form.embalaje}/>
      
           </formgroup>
           <br/>
           <formgroup>
           <label for="despachoRuta"><b>Despacho ruta</b></label>
           <input type="String" placeholder="despachoRuta" name="despachoRuta" id="despachoRuta" required onChange={handleChange} value={usuario.form.despachoRuta}/>
      
           </formgroup>
           <br/>
           <formgroup>
         
           <label for="ubicacion"><b>Ubicacion</b></label>
           <input type="String" placeholder="ubicacion" name="ubicacion" id="ubicacion" required onChange={handleChange} value={usuario.form.ubicacion}/>
           </formgroup>
           <br/>
           <formgroup>
        
           <label for="estado"><b>Estado</b></label>
            <input type="String" placeholder="estado" name="estado" id="estado" required onChange={handleChange} value={usuario.form.estado}/>
         </formgroup>
         <br/>
         <formgroup>
         
         <label for="ruta"><b>Ruta</b></label>
        <input type="String" placeholder="ruta" name="ruta" id="ruta" required onChange={handleChange} value={usuario.form.ruta}/>
       </formgroup>
       <br/>
  
       <formgroup>
         
       <label for="medioPago"><b>Medio de pago</b></label>
           <input type="String" placeholder="medioPago" name="medioPago" id="medioPago" required onChange={handleChange} value={usuario.form.medioPago}/>
       </formgroup>
       <br/>
       <formgroup>
         
       <label for="vendedor"><b>Vendedor</b></label>
           <input type="String" placeholder="vendedor" name="vendedor" id="vendedor" required onChange={handleChange} value={usuario.form.vendedor}/>
       </formgroup>
       <br/>
       <formgroup>
         
       <label for="cliente"><b>Cliente</b></label>
           <input type="String" placeholder="cliente" name="cliente" id="cliente" required onChange={handleChange} value={usuario.form.cliente}/>
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
     
    export default IndexGestionVentas