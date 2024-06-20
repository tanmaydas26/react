import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000')
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, []);

  const handelDelete = (id) => {
    axios.delete('http://localhost:7000/delete/' + id)
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-md-12 d-flex justify-content-between ">
          <h3 className='float-right'>User list</h3>
          <Link to="/add-user" >
            <button className='btn btn-primary btn-sm float-left'>Add User</button>
          </Link>
        </div>
      </div>
      
      <div className="row mt-2">
        <div className="col-md-12">
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(row => 
                <tr key={row.id}>
                    <td>{ row.name }</td>
                    <td>{ row.email }</td>
                    <td>{row.phone}</td>
                    <td>
                      <Link to={`/update-user/${row.id}`} className='btn btn-primary btn-sm me-2'>
                        Edit
                      </Link>
                      <button onClick={()=>handelDelete(row.id)} className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserList
