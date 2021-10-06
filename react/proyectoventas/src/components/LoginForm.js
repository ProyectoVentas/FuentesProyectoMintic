import React from "react";
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import { Link } from 'react-router-dom'
class LoginForm extends React.Component{
render(){
    return(
        <div>
            <body class="hold-transition login-page">
            <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center h1">
                    <b>AXIS</b>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Ingresa tus credenciales</p>
    
                    <form action="#" method="post">
                        <div class="form-group">
                        <label>Rol</label>
                        <select class="form-control">
                            <option>Administrador</option>
                            <option>Análisis de requisitos</option>
                            <option>Director</option>
                            <option>Diseño de módulo</option>
                            <option>Ejecutivo</option>
                            <option>Gerente comercial</option>
                            <option>Operario</option>
                            <option>Seguridad</option>
                            <option>Vendedor</option>
                        </select>
                        </div>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email"/>
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Contraseña"/>
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            
                            <div class="col-6">
                                <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
                            </div>
                          
                        </div>
                    </form>
    
                    <p class="mb-1">
                    <Link to="/home/login/forgotPassword"><a >Olvidé mi contraseña</a> </Link>
                    </p>
                    <p class="mb-1">
                    <Link to="/home/login/registrarse"> <a >Registrarse</a></Link>
                    </p>
                </div>
                
            </div>
            
        </div>
        </body>
        </div>


    )
}


}
export default LoginForm