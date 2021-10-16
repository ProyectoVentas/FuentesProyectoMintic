import React from "react";


import './styles_gestion_rol/formato.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'

class ClienteForm extends React.Component {
    render() {
        return (
            <form action="/action_page.php">
                <div class="container">
                    <h1>Agregar Cliente</h1>
                    <p>Por favor llena todos los campos.</p>
                    <hr />
                    <div>
                        <label for="Nombre"><b>Nombre</b></label>
                        <input type="text" placeholder="Nombre" name="Fname" id="fname" required />
                    </div>
                    <div>
                        <label for="Apellido"><b>Apellido</b></label>
                        <input type="text" placeholder="Apellido" name="Lname" id="Lname" required />
                    </div>
                    <div>
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Email" name="email" id="email" required />
                    </div>
                    <div>
                        <label for="phone"><b>Celular</b></label>
                        <input type="text" placeholder="Movil" name="phone" id="phone" required />

                    </div>

                    <div>
                        <label for="address"><b>Direccion</b></label>
                        <input type="text" placeholder="Direccion" name="address" id="address" required />

                    </div>
                   
                    <div>
                        
                        <button type="submit" class="registerbtn">Guardar Cliente</button>
                    </div>
                   

                </div>

            </form>
        )
    }


}
export default ClienteForm