import React from "react";
import Home from '../Pages/Home'
import ForgotPassword from "../Pages/ForgotPassword";
import Registrarse from "../Pages/Registrarse";
import HomeGestionRoles from '../Pages/HomeGestionRoles'
import NavbarSuperior from "./NavbarSuperior";
import FooterPrincipal from "./FooterPrincipal";
import Login from "../Pages/Login";
import GestionProductos from "../Pages/GestionProductos";
import Comprar from "../Pages/Comprar"

import IndexVentas from "../Pages/IndexVentas";


import Vendedores from "../Pages/Vendedores";

import {BrowserRouter, Route, Switch } from 'react-router-dom'

function App(){
    return (
        <BrowserRouter>
<div>
    <NavbarSuperior/>
    <div>
 
        <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/gestionRoles' component={HomeGestionRoles}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/login/forgotPassword' component={ForgotPassword}/>
        <Route exact path='/registrarse' component={Registrarse}/>
        <Route exact path='/home/indexVendedor' component={Vendedores}/>   

        <Route exact path='/home/gestionproductos' component={GestionProductos}/>
<Route exact path='/home/comprar' component={Comprar}/>
        <Route exact path='/home/indexventas' component={IndexVentas}/>
        

        </Switch>
        </div>
        <FooterPrincipal/>
        </div>
        </BrowserRouter>
    )

} 
export default App