import React from 'react';
import { useDispatch } from 'react-redux';
import { inicioLogout } from '../acciones/autenticacion';
import {NavLink} from 'react-router-dom';


const Encabezado=()=>{

  const dispatch = useDispatch();

  return(
    <header className="header">
    <div className="content-container">
    <div className="header__content">
    <h1 className="header__title">Gastos</h1>
    <NavLink className="button" to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink className="button" to="/crear" activeClassName="is-active">Crear</NavLink>
      <button className="button button--link" onClick={dispatch(inicioLogout)}>Logout</button>
      </div>
    </div>
    </header>
);
}
export default Encabezado;