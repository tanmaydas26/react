import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7000/create', values)
      .then(res => navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <div className='container mt-5'>
      <h3>create user</h3>
      <div className="row">
        <div className="col-md-6" style={{ border: "1px solid #333", padding: "10px" }} >
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input type="text" name="name" className='form-control' placeholder='Enter Name' onChange={(e)=>setValues({...values, name: e.target.value})} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="email" name="email" className='form-control' placeholder='Enter Email' onChange={(e)=>setValues({...values, email: e.target.value})} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Phone</label>
              <input type="number" name="phone" className='form-control' placeholder='Enter Phone' onChange={(e)=>setValues({...values, phone: e.target.value})}/>
            </div>
            <div className="mb-2">
              <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateUser
