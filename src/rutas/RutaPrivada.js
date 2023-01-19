import React from 'react';
import Encabezado from '../componentes/Encabezado';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const RutaPrivada = ({component:Componente,...restoPropiedades}) => {
 
    const estaAutenticado = useSelector((state) => state.aut.uid);
    return (
        <Route {...restoPropiedades} component={(props)=>(
            estaAutenticado ? (
                <div>
                <Encabezado/>
                <Componente {...props} />
                </div>
            ):(
                <Redirect to="/" />
            )
        )} />
    )
}