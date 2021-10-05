import React from "react";
import './styleshome/css/main.css'
import './styleshome/css/formatoHome.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import { Link } from 'react-router-dom'


class NavbarSuperior extends React.Component{
render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark gradient">
        <a className="navbar-brand" href="#">Axis</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="/home">    <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../Mauricio/wcSeller.html">Vendedores</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="../Julian/IndexGestionVentas.html"> Gestion Ventas</a>
                </li>
                <li className="nav-item">
                <Link to="/home/gestionRoles"> <a className="nav-link" href="">Gestion Roles</a></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../Alejandra/moduloProductos.html">Gestion de productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../Alejandra/rVenta.html">Compras</a>
                </li>
            </ul>
            </div>
    </nav>



    )
}


}
export default NavbarSuperior