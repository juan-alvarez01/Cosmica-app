import Home from './components/templates/home/home';
import Alta from './components/templates/create/CreateForm'
import Contacto from './components/templates/contact/Contact'
import Nosotros from './components/templates/about/about'
import "./components/cards/Cards.css";
import "./components/header/Header.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
      path: '/*',
      element: <Home />
  },
  {
      path: '/alta/*',
      element: <Alta />
  },
  {
      path: '/contacto/*',
      element: <Contacto />
  },
  {
      path: '/nosotros/*',
      element: <Nosotros />
  },
]);

export default function App() {
 return (
     <RouterProvider
    router={router}
    fallbackElement={<Home/>}/>
 )
   
}