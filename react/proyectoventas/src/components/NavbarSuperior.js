import React from "react";
import './styleshome/css/main.css'
import './styleshome/css/formatoHome.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import { Link } from 'react-router-dom'


class NavbarSuperior extends React.Component{
render(){
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark gradient">
        <Link to="/home"><a className="navbar-brand">Axis</a></Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="/home">    <a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Vendedores</a>
                </li>

                <li className="nav-item">
                 <Link to="/home/indexventas"> <a className="nav-link" >Gestion Ventas</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/home/gestionRoles"> <a className="nav-link" >Gestion Roles</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/home/gestionproductos"><a className="nav-link" >Gestion de productos</a></Link> 
                </li>
                <li className="nav-item">
                <Link to="/home/comprar"> <a className="nav-link" >Compras</a></Link>
                </li>
                </ul>
                <ul class="navbar-nav navbar-right">
                <Link to="/home/login"><li><a class="btn btn-primary">Login</a></li></Link>
            

            </ul>
            </div>
    </nav>
    </header>



    )
}


}
export default NavbarSuperior