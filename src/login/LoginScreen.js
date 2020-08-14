import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/Types';

const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);
    
    const history = useHistory();
    const handleLogin = (e) => {
        // history.push("/") <--- va hacia la ruta que se le diga pero permite volver atras
        // history.replace("/") // <--- va hacia la ruta que se le diga pero NO permite volver atras
        const lastPath = localStorage.getItem('lastPath')
        dispatch({
            type: types.LOGIN,
            payload: {
                name: 'Juan',
                logged: true
            }
        });
        
        history.replace(lastPath || '/');

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
            
                className="btn btn-primary"
                onClick={ handleLogin }

            >Login</button>
        </div>
    )
}

export default LoginScreen;
