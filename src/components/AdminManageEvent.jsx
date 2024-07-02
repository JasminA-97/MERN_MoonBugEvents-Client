import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import AdminAddEvents from './AdminAddEvents';
import AdminEditEvents from './AdminEditEvents';
import AdminDeleteEvents from './AdminDeleteEvents';
import { getAllEventsAPI } from '../Services/allAPI';
import { addResponseContext } from '../contexts/ContextAPI';

const AdminManageEvent = () => {
  const {addresponse,setAddresponse} = useContext(addResponseContext)
  const[allEvents,setAllevents] = useState([])

  useEffect(()=>{
    getAllEvents()
  },[addresponse])

  const getAllEvents = async()=>{
    try{
      const result = await getAllEventsAPI()
      console.log(result);
      if(result.status==200){
        setAllevents(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
     <div className="d-flex justify-content-between align-items-center p-5">
        <div><AdminAddEvents/></div>
        <div className='d-flex flex-wrap align-items-center bg-white rounded-4 p-1 border'> 
          <i className="fa-solid fa-magnifying-glass ps-2 pe-1"></i>
          <input type="text" style={{width:'300px',border:'none'}} className='search rounded-4 fs-5 ps-2'/>
        </div>
     </div>

      <div className='d-flex justify-content-center align-items-center'>
        <Table striped bordered hover variant="primary" className='w-75'>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Event Name</th>
              <th>Event Cost</th>  
              <th>Event Description</th> 
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              allEvents?.length>0 ?
                allEvents?.map(evnt=>(
                  <tr key={evnt?._id}>
                    <td></td>
                    <td>{evnt.eventName}</td>
                    <td>{evnt.eventCost}</td>
                    <td>{evnt.eventDescription}</td> 
                    <td  className='d-flex'><AdminEditEvents evnt={evnt}/><AdminDeleteEvents/></td> 
                  </tr>  
               ))
              :
               <div className="fw-bolder text-danger">No events added!</div>
            }       
          </tbody>
        </Table>
      </div>

    </>
  )
}

export default AdminManageEvent