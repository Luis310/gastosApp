import React from 'react';
import { useDispatch } from 'react-redux';
import { inicioLogout } from '../acciones/autenticacion';
import {NavLink} from 'react-router-dom';


const Encabezado=()=>{

  const dispatch = useDispatch();

  return(
    <header>
      <h1>Gastos</h1>
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/crear" activeClassName="is-active">Crear</NavLink>
      <button onClick={dispatch(inicioLogout)}>Logout</button>
    </header>
);
}
export default Encabezado;