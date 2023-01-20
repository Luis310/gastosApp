import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormularioGasto from './FormularioGasto';
import { inicioEditarGasto } from '../acciones/gastos';

export const EditarGasto = (props) => {
    //Aqui hacemos uso del Hook "useSelector", al accesar al state de "gastos" 
    //y buscar el gasto en la store
    //que sean el mismo que deseamos editar
    const gastoStore = useSelector((state) => state.gastos.find((gasto) => gasto.id === props.match.params.id));
    const dispatch = useDispatch();
    //HOOK QUE PERMITE REALIZAR NAVEGACIÓN DENTRO DE LOS COMPONENTES
    const history = useHistory();
    return (
        <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Editar gasto</h1>
                    </div>
                </div>
        <div className="content-container">
            <FormularioGasto
                gasto={gastoStore}
                agregarGasto={(gasto) => {
                    dispatch(inicioEditarGasto(gastoStore.id,gasto));
                    history.push('/dashboard');
                }
                }
            />
        </div>
        </div>
    )
}
