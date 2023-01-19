import React from "react";
import numeral from "numeral";
import moment from "moment";
import 'moment/locale/es';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { inicioQuitarGasto } from '../acciones/gastos';


//AQUI ESTAMOS HACIENDO UNA DESESTRUCTURACIÓN DE LAS PROPIEDAS RECIBIDAS POR EL COMPONENTE PADRE
const ElementoLista = ({ descripcion, cantidad, creado, id }) => {
    //Aqui hacemos uso del Hook "useSelector", al accesar al state de "gastos"
    //const gastos = useSelector((state) => state.gastos);
    //Con esto podemos realizar cambios a nuestra "store" por medio de las "acciones"
    const dispatch = useDispatch();

    //Aplicando la región, español 
    moment.locale('es');
    

    return (
        <div>
        {/* Enlace para redigirnos a la pagina edición por medio del ID */}
            <Link to={`/edicion/${id}`}>
                <h3>{descripcion}</h3>
            </Link>
            <span >Creado el: {moment(creado).format('DD MMMM YYYY')}</span>
            <h3 >Cantidad: Q {numeral(cantidad/100).format('0,0.00')}</h3>
            {/* Aqui se utiliza el método onClick, es decir,
                al dar click al botón "Remover" haremos la llamada al hook "dispatch"
                con la acción "quitarGasto" por medio del id */}
            <button onClick={() => {
                dispatch(inicioQuitarGasto({ id }))
            }}>Remover</button>
        </div>
    );
};


export default ElementoLista;