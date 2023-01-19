import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtroPorTexto,ordenarPorFecha,ordenarPorCantidad } from '../acciones/filtros';


export const ListaFiltros = () => {

    //Aqui hacemos uso del Hook "useSelector", al accesar al state de "filtros"
    const filtros = useSelector((state) => state.filtros);
    //Con esto podemos realizar cambios a nuestra "store" por medio de las "acciones"
    const dispatch= useDispatch();

    const verificarCambios=(e)=>{
        //Se utiliza el hook "useDispatch" el cual requiere de una acción, la cual ya fue creada para "Filtrar por texto"
        dispatch(filtroPorTexto(e.target.value))
    }

    const verificarOrdenamiento=(e)=>{
        //Se utiliza el hook "useDispatch" el cual requiere de una acción, la cual ya fue creada para "ordenarPorFecha" u "ordenarPorCantidad"
        if(e.target.value==="fecha"){
            dispatch(ordenarPorFecha());
        }else if(e.target.value==="cantidad"){
            dispatch(ordenarPorCantidad());
        }
    }

    return (
        <div>
            <input type='text' value={filtros.texto} onChange={verificarCambios}></input>

            <select value={filtros.ordenarPor} onChange={verificarOrdenamiento}>
                <option value="fecha">Fecha</option>
                <option value="cantidad">Cantidad</option>
            </select>
        </div>
    );
}
