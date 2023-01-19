import React from 'react';
import DashboardGastos from '../componentes/DashboardGastos';
import {AgregarGasto} from '../componentes/AgregarGasto';
import {EditarGasto} from '../componentes/EditarGasto';
import NoEncontrado from '../componentes/NoEncontrado';
import PaginaLogin from '../componentes/PaginaLogin';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { RutaPrivada } from './RutaPrivada';
import { RutaPublica } from './RutaPublica';

export const history= createBrowserHistory();

const AppRutas=()=>(
    //PASAREMOS EL HISTORIAL EN TODA LA APLICACIÓN 
    <Router history={history}>
    <div>
    <Switch>
        {/* SE COLOCA EL exact=true YA QUE ROUTER AL TENER VARIAS RUTAS QUE COMIENZAN CON EL MISMO NOMBRE, EN ESTE CASO EL SIMBOLO /
            EL ROUTER RECORRERA POR TODAS LAS RUTAS Y SI DESEAMOS IR POR EJEMPLO A /crear NOS DEVOLVERA AL Dashboard Y NO A LA RUTA /crear
         */}
      <RutaPublica path='/' component={PaginaLogin} exact={true}/>
      <RutaPrivada path='/dashboard' component={DashboardGastos}/>
      <RutaPrivada path='/crear' component={AgregarGasto}/>
      <RutaPrivada path='/edicion/:id' component={EditarGasto}/>
      {/* AL NO COLOCAR UN PATH SE LE INDICA A LA APLICACION QUE CUALQUIER PAGINA NO DECLARADA
          SEA LANZADA A NUESTRA PAGINA 404 YA CREADA, CON ESTO MANEJAREMOS DICHO ERROR
       */}
      <Route component={NoEncontrado}/>
      </Switch>  
    </div>
    </Router>
);


export default AppRutas; 