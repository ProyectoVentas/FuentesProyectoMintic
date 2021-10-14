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
import ConfirmacionRegistro from "../Pages/ConfirmacionRegistro";

import Vendedores from "../Pages/Vendedores";
import SalesBySeller from "../Pages/SalesBySeller";
import SalesStates from "../Pages/SalesStates";
import UdSeller from "../Pages/UdSeller";

import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App(){
    return (
        <BrowserRouter>
<div>
    <NavbarSuperior/>
    <div>
    <Redirect
            from="/"
            to="/home" />
        <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/gestionRoles' component={HomeGestionRoles}/>
        <Route exact path='/home/login' component={Login}/>
        <Route exact path='/home/login/forgotPassword' component={ForgotPassword}/>
        <Route exact path='/home/login/registrarse' component={Registrarse}/>
        <Route exact path='/home/login/registrarse/confirmation' component={ConfirmacionRegistro}/>
        <Route exact path='/home/indexVendedor' component={Vendedores}/>   
        <Route exact path='/home/indexVendedor/udVendedor' component={UdSeller}/>
        <Route exact path='/home/indexVendedor/salesBySeller' component={SalesBySeller}/> 
        <Route exact path='/home/indexVendedor/salesBySeller/salesStates' component={SalesStates}/>   

        <Route exact path='/home/gestionproductos' component={GestionProductos}/>
<Route exact path ='/home/comprar' component={Comprar}/>
        <Route exact path='/home/indexventas' component={IndexVentas}/>
        

        </Switch>
        </div>
        <FooterPrincipal/>
        </div>
        </BrowserRouter>
    )

} 
export default App