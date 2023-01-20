import React from 'react';
import ListaDeGastos from './ListaDeGastos';
import {ListaFiltros} from './ListaFiltros';

const DashboardGastos=()=>(
    <div>
    <div className="content-container">
    <h1>Dashboard de gastos</h1>
    </div>
    <ListaFiltros/>
    <ListaDeGastos />
    </div>
);


export default DashboardGastos;