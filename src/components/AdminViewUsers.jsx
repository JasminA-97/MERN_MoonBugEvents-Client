import React, { useEffect, useState } from 'react'
import {Table } from 'react-bootstrap';
import { usersWithBookingsAPI } from '../Services/allAPI';

const AdminViewUsers = () => {
  const [viewUsers,setViewUsers] = useState([])
  console.log(viewUsers);

  useEffect(()=>{
    fetchUsersWithBookings()
  },[])

  const fetchUsersWithBookings = async () => {
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      try{    
        const result = await usersWithBookingsAPI(reqHeader)  
        if(result.status == 200){
          setViewUsers(result.data)
        } 
      }catch(err){
        console.log(err);
      }
    }
  };


  return (
    <div style={{height:'100vh'}} className="p-5 bg-light">
      <h2>View Users</h2>
      <Table className='border border-2' hover>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>

          {
            viewUsers?.length>0?
            viewUsers?.map((usersWB,index)=>(
              <tr key={usersWB?._id}>
              <td>{index+1}</td>
              <td>{usersWB?.name}</td>
              <td>{usersWB?.email}</td>
              <td>{usersWB?.phone}</td>
            </tr>
            ))
            :
            <div className="fw-bolder text-danger">No users yet!</div>
          }     

        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewUsers