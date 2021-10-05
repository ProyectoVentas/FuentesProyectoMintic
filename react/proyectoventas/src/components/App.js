import React from "react";
import Home from '../Pages/Home'
import HomeGestionRoles from '../Pages/HomeGestionRoles'
import TablaRol from "../Pages/TablaRol";
import NavbarSuperior from "./NavbarSuperior";
import FooterPrincipal from "./FooterPrincipal";


import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
function App(){
    return (
        <BrowserRouter>
<div>
    <NavbarSuperior/>
    <Redirect
            from="/"
            to="/home" />
        <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/gestionRoles' component={HomeGestionRoles}/>
        <Route exact path='/home/gestionRoles/Buscar' component={TablaRol}/>
        </Switch>

        <FooterPrincipal/>
        </div>
        </BrowserRouter>
    )

} 
export default App