import React from 'react';
import { useDispatch } from 'react-redux';
import { inicioLogin } from '../acciones/autenticacion';

export const PaginaLogin = () => {
    
    const dispatch = useDispatch();

    return(
        <div>
    
        <div >
        <h1 >App gastos</h1>
        <p>Administra tus gastos</p>
        <button onClick={dispatch(inicioLogin)}>Login con Google</button>
        </div>
                
        </div>
    );
}

export default PaginaLogin;