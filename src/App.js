import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        element:<Navbar/>,
        children:[
          {  path: "/", element:<News />},    
          {  path:"/Business", element:<News key="Business" category="Business"/>},
          {  path:"/Entertainment", element:<News key="Entertainment" category="Entertainment"/>},
          {  path:"/Generalhealth", element:<News key="Generalhealth" category="Generalhealth"/>},
          {  path:"/Science", element:<News key="Science" category="Science"/>},
          {  path:"/Sports", element:<News key="Sports" category="Sports"/>},
          {  path:"/Technology", element:<News key="Technology" category="Technology"/>}
        ]
      }
      
    ]);        
    return (
      <div>

        <RouterProvider router={router}/>
        {/* <News pageSize={5} country='in'/> */}
      </div>
    )
  }
}



