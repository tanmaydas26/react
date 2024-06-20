// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import CreateUser from './CreateUser';
import NavBar from './NavBar';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/add-user" element={<CreateUser/>}></Route>
        <Route path="/update-user/:userId" element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
