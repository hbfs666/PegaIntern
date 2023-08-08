import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Styles

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Components

import PczPerformance from './components/PczPerformance'
import Performance from './components/Performance';
import Request from './components/Request'
import MainLayout from './components/MainLayout';
import Combination from './components/Combination';
import Ramp from './components/Ramp'
import PJVTeam from './components/part_requests/PJVTeam';
import PYRTeam from './components/part_requests/PYRTeam';
import PCZTeam from './components/part_requests/PCZTeam';
import All from './components/part_requests/All';
import PRR from './components/part_requests/PRR';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Performance endpoint = "/perf_pjv?max=10&week=W27"/>,
  },
  {
    path: "/performance/pcz",
    element: <PczPerformance endpoint = "/perf_pcz?max=10&week=W27"/>,
  },
  {
    path: "/request/pcz",
    element: <Request title="PCZ" endpoint ="/pcz?max=11"/>,
  },
  {
    path: "/request/pjv",
    element: <Request title='PJV' endpoint ="/pjv?max=11"/>,
  },
  {
    path: "/request/pyr",
    element: <Request title='PYR' endpoint ="/pyramid?max=8"/>,
  },
  {
    path:"/comb",
    element: <Combination/>
  },
  {
    path:"/ramp",
    element: <Ramp/>
  },
  {
    path:"/PJVTeam",
    element:<PCZTeam title='PJV Team'/>
  },
  {
    path:"/PYRTeam",
    element:<PCZTeam title='PYR Team'/>
  },
  {
    path:"/PCZTeam",
    element:<PCZTeam title='PCZ Team'/>
  },
  {
    path:"/PRR",
    element:<All/>
  },
  {
    path:"/PYRrequest",
    element:<PRR title='PYR' endpoint='/pyramid?max=8'/>
  },
  {
    path:"/PJVrequest",
    element:<PRR title='PJV' endpoint='/pjv?max=11'/>
  },
  {
    path:"/PCZrequest",
    element:<PRR title='PCZ' endpoint='/pcz?max=11'/>
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div className="App">
    <MainLayout>
      <header className="App-header">
        <RouterProvider router={router} />
    </header>
    </MainLayout>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
