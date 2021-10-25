import React from "react";
import './styleshome/css/main.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'
import { Link } from 'react-router-dom'
class UdInfoSeller extends React.Component{
render(){
    return(
        <div>
            <form action="/action_page.php"></form>
                <div class="container">
                    <h1>Información personal</h1>
                    <p>Actualice la información adicional requerida</p>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Email" name="email" id="email" required>
                    <label for="phone"><b>Celular</b></label>
                    <input type="text" placeholder="Movil" name="phone" id="phone" required>
                    <label for="Especialidad"><b>Especialidad</b></label>
                    <input type="text" placeholder="Especialidad" name="esp" id="esp" required>
                    <label for="Numero de cuenta"><b>Numero de cuenta</b></label>
                    <input type="text" placeholder="Numero de cuenta" name="accountNumber" id="accountNumber" required>
                    <label for="psw"><b>Contrasena</b></label>
                    <input type="password" placeholder="Contrasena" name="psw" id="psw" required>
                    <label for="psw-repeat"><b>Repetir Contrasena</b></label>
                    <input type="password" placeholder="Repetir contrasena" name="psw-repeat" id="psw-repeat" required>
                    <label for="Ahorros/Corriente"><b>Escoger tipo de cuenta:</b></label>
                    <select name="Ahorros/Corriente" id="Ahorros/Corriente">
                        <option value="Ahorros">Ahorros</option>
                        <option value="Corriente">Corriente</option>
                    </select>
                    <label for="Banco"><b>Escoger Banco:</b></label>
                    <select name="Banco" id="Banco">
                        <option value="Davivienda">Davivienda</option>
                        <option value="Banagrario">Banagrario</option>
                        <option value="AVVillas">AVVillas</option>
                        <option value="BBVA">BBVA</option>
                        <option value="Bancolombia">Bancolombia</option>
                    </select>
                    <a href="wcSeller.html">Regresar</a>
                    <button type="submit" class="confirmButton" id="confirmButton">Actualizar</button>
                </div>
            </form>

        </div>


    )
}


}
export default UdInfoSeller