import React from 'react';
import ListaDeGastos from './ListaDeGastos';
import {ListaFiltros} from './ListaFiltros';

const DashboardGastos=()=>(
    <div>
    <h1>DASHBOARD PRINCIPAL DE GASTOS</h1>
    <ListaFiltros/>
    <ListaDeGastos />
    </div>
);


export default DashboardGastos;