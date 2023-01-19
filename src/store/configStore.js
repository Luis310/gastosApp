import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducerGastos from '../reducers/gastos';
import reducerFiltros from '../reducers/filtros';
import autenticacion from '../reducers/autenticacion';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default ()=>{
    const store=createStore(
        combineReducers({
            gastos:reducerGastos,
            filtros: reducerFiltros,
            aut: autenticacion
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};