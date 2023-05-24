import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Game from './Game.jsx';
import Results from './Results.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import './Global.css';

const routes = createBrowserRouter(
  [
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
);


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
   <StyledGlobals></StyledGlobals>
    <RouterProvider router={routes}>
      </RouterProvider>
  </React.StrictMode>,
)
