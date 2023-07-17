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

const pyn = {
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
    element: <Performance/>,
  },
  {
    path: "/performance/pcz",
    element: <PczPerformance/>,
  },
  {
    path: "/request/pcz",
    element: <Request data={pcz.data} average = {pcz.average} title="PCZ"/>,
  },
  {
    path: "/request/pjv",
    element: <Request data={pjv.data} average = {pjv.average} title='PJV'/>,
  },
  {
    path: "/request/pyn",
    element: <Request data={pyn.data} average = {pyn.average} title='PYN'/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
    </header>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
