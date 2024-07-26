import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import AdminAddEvents from './AdminAddEvents';
import AdminEditEvents from './AdminEditEvents';
import { deleteEventAPI, getAllEventsAPI } from '../Services/allAPI';
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI';
import SERVERURL from '../Services/serverurl';


const AdminManageEvent = () => {
  const [searchKey,setSearchKey] = useState("")
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const {addresponse,setAddresponse} = useContext(addResponseContext)
  const[allEvents,setAllevents] = useState([])

  useEffect(()=>{
    getAllEvents()
  },[addresponse,editResponse,searchKey])

  const getAllEvents = async()=>{
    try{
      const result = await getAllEventsAPI(searchKey)
      console.log(result);
      if(result.status==200){
        setAllevents(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDeleteEvent = async(eid)=>{
    try{
      const result = await deleteEventAPI(eid)
      if(result.status == 200){
        getAllEvents()
      }else{
        console.log(result);
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
     <div className="d-flex justify-content-between align-items-center p-5">
        <div><AdminAddEvents/></div>
        {/* search */}
        <div className='d-flex flex-wrap align-items-center bg-white rounded-4 p-1 border'> 
          <i className="fa-solid fa-magnifying-glass ps-2 pe-1"></i>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" style={{width:'300px',border:'none'}} className='search rounded-4 fs-5 ps-2'/>
        </div>
     </div>

      <div className='d-flex justify-content-center align-items-center'>
        <Table striped bordered hover variant="primary" className='w-75'>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Image</th>
              <th>Event Name</th>
              <th>Event Cost</th>  
              <th>Event Description</th> 
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              allEvents?.length>0 ?
                allEvents?.map((evnt,index)=>(
                  <tr key={evnt?._id}>
                    <td>{index + 1}</td>
                    <td><img style={{width:'50px',height:'50px'}}
                    src={evnt?.eventImg? `${SERVERURL}/uploads/${evnt.eventImg}` : ""}
                    alt=""
                    className="profile"/>
                    </td>
                    <td>{evnt?.eventName}</td>
                    <td>{evnt?.eventCost}</td>
                    <td>{evnt?.eventDescription.slice(0,30)}...</td> 
                    <td  className='d-flex justify-content-evenly align-items-center'><AdminEditEvents evnt={evnt}/>
                    <button onClick={()=>handleDeleteEvent(evnt?._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                    </td> 
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