import React from 'react'
import './styles_gestion_rol/formato.css'

import { Link } from 'react-router-dom'

const Buscar = () => (
    <div class="container">
   <Link to="/home/gestionRoles/buscar"> <button  type="button" class="searchButton" id="searchButton">Buscar</button> </Link>
        
   </div>
)

export default   Buscar