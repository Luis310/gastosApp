import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { history } from './rutas/AppRutas';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import './firebase/firebase';
import 'normalize.css/normalize.css'
import './estilos/estilos.scss';
import PaginaCarga from './componentes/PaginaCarga';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login, logout } from './acciones/autenticacion';
import { inicioSetGastos } from './acciones/gastos';


const store = configStore();


const jsx = (

  <Provider store={store}>
    <App />
  </Provider>
)


let haRenderizado = false;
const renderizarApp = () => {
  if (!haRenderizado) {
    ReactDOM.render(jsx, document.getElementById('root'));
    haRenderizado = true;
  }
};


ReactDOM.render(<PaginaCarga />, document.getElementById('root'));


const auth = getAuth();

/*ESTAREMOS ESCUCHANDO CUALQUIER CAMBIO EN EL "AUTH"
  ES DECIR, SI EL USUARIO ESTA LOGUEADO O NO
*/
onAuthStateChanged(auth, (user) => {
  //SI EL USUARIO SE ENCUENTRA LOGUEADO
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(inicioSetGastos()).then(() => {
      renderizarApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard',);
      }
    });
    //SI EL USUARIO REALIZAR UN LOGOUT
  } else {
    store.dispatch(logout());
    renderizarApp();
    history.push('/');
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();