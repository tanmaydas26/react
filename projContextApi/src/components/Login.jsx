import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div className="w-full max-w-xs mx-auto mt-10 bg-slate-600 py-10 px-5 rounded-md">
        <h1 className='text-3xl text-white'>Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" value={username}
            onChange={(e)=> setUsername(e.target.value)} 
            type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
         type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handelSubmit}>
            Sign In
          </button>
        </div>
    </div>
  )
}

export default Login
