import React from "react";
import './styles_gestion_rol/formatoConf.css'


import { Link } from 'react-router-dom'

const TextConfReg = () => {
return(
<div class="container">
      <h1 id="tituloConfirmacion"> Usuario Actualizado</h1>
     <hr/>
      <p>Actualizacion exitosa.</p>
      <br/>
     <p>Regresar a la pagina de <Link to="/home"><a>Home.</a></Link></p> 
      
      

    </div>
)
}

export default TextConfReg