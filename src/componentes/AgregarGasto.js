import React from 'react';
import FormularioGasto from './FormularioGasto';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { inicioAgregarGasto } from '../acciones/gastos'



export const AgregarGasto = () => {

    const dispatch = useDispatch();
    //HOOK QUE PERMITE REALIZAR NAVEGACIÓN DENTRO DE LOS COMPONENTES
    const history = useHistory();


    return (
        <div>
            <h1>Agregando gastos</h1>
            <FormularioGasto
                agregarGasto={(gasto) => {
                    console.log(gasto);
                    dispatch(inicioAgregarGasto(gasto));
                    //LUEGO DE AGREGAR EL GASTO, SE EJECUTA EL HOOK PARA LA NAVEGACIÓN
                    //EN ESTE CASO SERA AL DASHBOARD, PARA QUE EL USUARIO PUEDA VER EL GASTO RECIEN AGREGADO
                    history.push("/dashboard");
                }
                }
            />
        </div>
    );
}

