import React from 'react';
import { useDispatch } from 'react-redux';
import { inicioLogin } from '../acciones/autenticacion';

export const PaginaLogin = () => {
    
    const dispatch = useDispatch();

    return(
        <div className="box-layout">
    
        <div className="box-layout__box">
        <h1 className="box-layout__title" >App gastos</h1>
        <p>Administra tus gastos</p>
        <button onClick={dispatch(inicioLogin)} className="button">Login con Google</button>
        </div>
                
        </div>
    );
}

export default PaginaLogin;