import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, RouterProvider, Routes, createBrowserRouter, createRoutesFromChildren, useLocation, useOutlet } from 'react-router-dom'
import Home from './Home.jsx'
import Game from './Game.jsx';
import Results from './Results.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import './Global.css';
import { AnimatePresence, motion } from 'framer-motion';

const routes = createBrowserRouter(
  [
    {
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/game',
          element:<Game/>
        },
        {
          path:'/results',
          element:<Results/>
        }
      ]
    }
  ]
);


const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};


// const routes = createBrowserRouter(
//   createRoutesFromChildren(
//     <Route element={'layout'}>
//       <Route></Route>
//     </Route>
//   )
// )

const StyledGlobals = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      --fontMain: 'Montserrat',sans-serif;
  }


  body{
      font-family: var(--fontMain);
  }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

function App(){

  return (
   <>
    <StyledGlobals></StyledGlobals>
    <RouterProvider router={routes}>
    </RouterProvider>
   </>
  )
}
function Layout(){
  const location = useLocation();
  return (
    <Outlet/>
  )
}