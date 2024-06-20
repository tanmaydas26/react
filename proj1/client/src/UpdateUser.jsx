import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const {userId} = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:7000/update/' + userId, values)
      .then(res => navigate('/'))
      .catch(err => console.log(err));
  };

  //console.log(values.name);

  useEffect(() => {
    axios.get('http://localhost:7000/getrecord/' + userId)
      .then(res => setValues(res.data[0]))
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div className='container mt-5'>
      <h3>Update user</h3>
      <div className="row">
        <div className="col-md-6" style={{ border: "1px solid #333", padding: "10px" }} >
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input type="text" name="name" className='form-control' placeholder='Enter Name' value={values.name} onChange={(e)=>setValues({...values, name: e.target.value})} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="email" name="email" className='form-control' placeholder='Enter Email' value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Phone</label>
              <input type="number" name="phone" className='form-control' placeholder='Enter Phone' value={values.phone} onChange={(e)=>setValues({...values, phone: e.target.value})}/>
            </div>
            <div className="mb-2">
              <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
