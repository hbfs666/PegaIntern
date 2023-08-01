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

const pcz ={ 
  data:[
  ['2023-06-26', '29%', '12%', '26%', '33%'],
  ['2023-06-27', '28%', '13%', '19%', '40%'],
  ['2023-06-28', '27%', '19%', '16%', '39%'],
  ['2023-06-29', '26%', '24%', '14%', '36%'],
  ['2023-06-30', '22%', '17%', '15%', '47%'],
  ['2023-07-03', '19%', '19%', '15%', '46%'],
  ['2023-07-04', ' ', ' ', ' ', ' '],
  ['2023-07-05', '22%', '17%', '10%', '51%'],
  ['2023-07-06', '31%', '14%', '15%', '40%'],
  ['2023-07-07', ' ', ' ', ' ', ' '],
],
average:[
  'Longterm Average','26%','18%','21%','35%'
]
}

const pjv = {
  data:[
  ['2023-06-26', '33%', '18%', '14%', '35%'],
  ['2023-06-27', '30%', '15%', '24%', '31%'],
  ['2023-06-28', '27%', '17%', '17%', '39%'],
  ['2023-06-29', '27%', '20%', '16%', '37%'],
  ['2023-06-30', '29%', '18%', '13%', '40%'],
  ['2023-07-03', '28%', '15%', '21%', '36%'],
  ['2023-07-04', ' ', ' ', ' ', ' '],
  ['2023-07-05', '22%', '18%', '32%', '28%'],
  ['2023-07-06', '27%', '16%', '32%', '25%'],
  ['2023-07-07', ' ', ' ', ' ', ' '],
],
average:[
  'Longterm Average','28%','21%','19%','31%'
]
}

const pyr = {
  data:[
  ['2023-06-26', '27%', '12%', '29%', '33%'],
  ['2023-06-27', '30%', '19%', '21%', '30%'],
  ['2023-06-28', '27%', '14%', '25%', '33%'],
  ['2023-06-29', '20%', '7%', '32%', '41%'],
  ['2023-06-30', '25%', '19%', '24%', '33%'],
  ['2023-07-03', '37%', '13%', '25%', '26%'],
  ['2023-07-04', ' ', ' ', ' ', ' '],
  ['2023-07-05', '21%', '12%', '38%', '29%'],
  ['2023-07-06', '29%', '23%', '27%', '22%'],
  ['2023-07-07', ' ', ' ', ' ', ' '],
],
average:[
  'Longterm Average','25%','16%','30%','28%'
]
}

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
    element:<PJVTeam/>
  },
  {
    path:"/PYRTeam",
    element:<PYRTeam/>
  },
  {
    path:"/PCZTeam",
    element:<PCZTeam/>
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
