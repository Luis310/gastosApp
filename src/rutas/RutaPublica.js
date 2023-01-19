import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const RutaPublica = ({component:Componente,...restoPropiedades}) => {
 
    const estaAutenticado = useSelector((state) => state.aut.uid);
    return (
        <Route {...restoPropiedades} component={(props)=>(
            estaAutenticado ? (
                <Redirect to="/dashboard" />
            ):(
                <Componente {...props} />
            )
        )} />
    )
}