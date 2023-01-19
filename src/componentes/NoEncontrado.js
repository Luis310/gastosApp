import React from 'react';
import {Link} from 'react-router-dom'

//CON LINK PODREMOS CAMBIAR ENTRE PAGINAS
const NoEncontrado=()=>(
    <div>
        404 - <Link to="/">Ir a Inicio</Link>
    </div>
);


export default NoEncontrado;