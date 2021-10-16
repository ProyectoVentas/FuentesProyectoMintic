import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Alert,Spinner } from 'reactstrap';
import './styleslogin/login.css'
import PropTypes from 'prop-types';

import { auth, signInEmailAndPassword, signInWithGoogle  } from "../components/Firebase/Firebase";

const LoginForm = () => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [hasError, setHasError] = useState(false);
  const [login, setLogin] = useState(false);
  const [errors, setErrors] = useState("");
  const history = useHistory();
  const usernameRef = React.useRef(null)

  const handleErrors = (error) => {
    setErrors(error);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
    }
    if (user) history.replace("/users");
  }, [user, loading]);

  if (loading) {
    return <Spinner children="" style={{ width: '8rem', height: '8rem', position: 'fixed', top: '30%', left: '50%' } } />;
  } else {
    return (
      <div className="login">
         
        {login &&
            <Spinner children="" style={{ width: '8rem', height: '8rem', position: 'fixed', top: '20%', left: '50%' } } />
        }
        <div className="login__container">
        <h1 className="axis">AXIS</h1>
          {hasError &&
            <Alert color="warning">
              {errors}
            </Alert>
          }

          <input
            type="text"
            id="login__textBox"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo"
            ref={usernameRef}
          />
          <input
            type="password"
            id="login__textBox"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="contrasena"
          />
          <button
            className="login__btn"
            onClick={() => signInEmailAndPassword(email, password,setLogin,setHasError,setErrors)}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={() => signInWithGoogle(setLogin, setHasError,setErrors)}>
            Login with Google
          </button>
          <div>
            <Link to="/reset">Olvidé mi contraseña</Link>
          </div>
          <div>
            <Link to="/registrarse">Registrarse</Link> ahora.
          </div>
        </div>
      </div>);
  };
}

LoginForm.propTypes = {
  type: PropTypes.string, // default: 'border'
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string, // default: 'Loading...'
};

LoginForm.defaultProps = {};

export default LoginForm;