import React from 'react';
//IMPORTAMOS "connect" ya que con esto nos podremos conectar a nuestra store de REDUX
import { connect } from 'react-redux'; 
import ElementoLista from './ElementoLista';
import SeleccionadorGastos from '../seleccionador/gastos';

const ListaDeGastos = (props)=>(
    <div className="content-container">
    <div className="list-header">
        <h1>Gasto</h1>
        <h2>Cantidad de gastos: {props.gastos.length}</h2>
    </div>
        <div className="list-body">
            {
                props.gastos.length === 0 ?

                    (
                        <div className="list-item list-item--message">
                            <span>No hay gastos registrados</span>
                        </div>
                    )
                    :

                    (
                        //AQUI REGRESAMOS UN NUEVO ARREGLO CON INSTANCIAS DEL ELEMENTO LISTA
               props.gastos.map((gasto,index)=>{
                   //SE UTILIZA EL OPERADOR "SPREAD" PARA ITERAR SOBRE LOS ELEMENTOS DE CADA GASTO
                   //ES DECIR: "Descripcion", "cantidad", "nota", entre otros. 
                  return <ElementoLista key={gasto.id}{...gasto} />
               })
                    )
            }
        </div>
    </div>
)

//CREAREMOS UNA FUNCIÓN QUE "CONVERTIRA" EL ESTADO DE LA STORE A PROPIEDADES QUE EL COMPONENTE PUEDA UTLIZAR
const mapStateToProps = (state)=>{
    //DENTRO DE ESTA FUNCION, TENEMOS QUE INDICAR QUE INFORMACIÓN DE LA STORE(REDUX)
    //QUEREMOS QUE NUESTRO COMPONENTE TENGA ACCESO
    return{
        //AQUI ESTAMOS ACCESANDO A LOS GASTOS ALMACENADOS EN LA STORE
        //gastos: state.gastos
        //AHORA PARA ACCEDER A LOS GASTOS LO HAREMOS DIRECTAMENTE DESDE EL "SELECCIONADOR"
        gastos: SeleccionadorGastos(state.gastos, state.filtros)
    }
}

//AQUI HACEMOS USO DEL PATRON HOC, al llamar al componente "ListaDeGastos"
export default connect(mapStateToProps)(ListaDeGastos);