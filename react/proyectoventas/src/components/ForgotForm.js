import React from "react";
import './styleshome/css/main.css'
import './styleshome/css/formatoHome.css'
import './styleshome/plugins/fontawesome-free/css/all.min.css'
import './styleshome/dist/css/adminlte.min.css'


class ForgotForm extends React.Component{
render(){
    return(
        <div>
            <body class="hold-transition login-page">
	<div class="login-box">
		<div class="card card-outline card-primary">
			<div class="card-header text-center h1">
				<b>Axis</b>
			</div>
			<div class="card-body">
				<p class="login-box-msg">¿Olvidaste tu contraseña? Aquí puedes obtener una nueva contraseña.</p>
				
				<form action="#" method="post">
					<div class="input-group mb-3">
						<input type="email" class="form-control" placeholder="Email"/>
						<div class="input-group-append">
							<div class="input-group-text">
								<span class="fas fa-envelope"></span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<button type="submit" class="btn btn-primary btn-block">Solicitar nueva contraseña</button>
						</div>
						</div>
				</form>
			
			</div>
			
		</div>
	</div>
	
</body>

        
        </div>



    )
}


}
export default ForgotForm