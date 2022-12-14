import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.css';
import {RouterProvider} from "react-router-dom";
import router from './routes/Router';
import {Provider} from 'react-redux';
import store from './app/store'


// TODO:
/*
  *Crear Router - DONE
  *Crear Pagina/Componente de Inicio /Home - DONE
  *Crear Pagina/Componente de Carrito /Cart - DONE
  *Crear Pagina/Componente de Informacion/About
  *Crear Pagina/Componente de Confirmar Pago/Payment - DONE
  *Crear Pagina/Componente de Pago Exitoso/Payment
  *Crear Pagina/Componente de Creacion de Bebida/Product
  *Crear Pagina/Componente de Registro de Usuario/user - DONE
  *Crear Pagina/Componente de Login/User - DONE
  *Crear Pagina/Componente de Listado
  *Crear Store con Redux
  *Importar iconos de Fa Fa icons - DONE
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
<React.StrictMode>
      <Provider store={store}/>
      <RouterProvider router={router}/>
</React.StrictMode>);
