import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact-us" element={ <ContactUs/> } />
      <Route path="user/:id" element={ <User/> } />
      <Route path="github" element={ <Github/> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
    {/* <App /> */}
  </React.StrictMode>,
)
