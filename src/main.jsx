import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Inicio from './views/Inicio/Inicio.jsx'
import InicioDeSesion from './views/InicioDeSesion/InicioDeSesion.jsx'
import AcercaDeNosotros from './views/AcercaDeNosotros/AcercaDeNosotros.jsx'
import Carrito from './views/Carrito/Carrito.jsx'
import Contactanos from './views/Contactanos/Contactanos.jsx'
import EdicionPerfil from './views/EdicionPerfil/EdicionPerfil.jsx'
import Historia from './views/Historia/Historia.jsx'
import ListaDeDeseos from './views/ListadeDeseios/ListaDeDeseos.jsx'
import Perfil from './views/Perfil/Perfil.jsx'
import Producto from './views/Producto/Producto.jsx'
import Productos from './views/Productos/Productos.jsx'
import Registro from './views/Registro/Registro.jsx'
const router = createBrowserRouter([
  {path:'/',element:<Inicio/>},
  {path:'/about-us',element:<AcercaDeNosotros/>},
  {path:'/cart',element:<Carrito/>},
  {path:'/contact-us',element:<Contactanos/>},
  {path:'/acount/profile',element:<EdicionPerfil/>},
  {path:'/our-story',element:<Historia/>},
  {path:'/acount/login',element:<InicioDeSesion/>},
  {path:'/wishlist',element:<ListaDeDeseos/>},
  {path:'acount',element:<Perfil/>},
  {path:'/product',element:<Producto/>},
  {path:'/products/men',element:<Productos/>},
  {path:'/products/women',element:<Productos/>},
  {path:'/products/kids',element:<Productos/>},
  {path:'/products/sport',element:<Productos/>},
  {path:'/products/new-products',element:<Productos/>},
  {path:'/register',element:<Registro/>}
],
{
    basename: '/frontEnd-Huizache', 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
