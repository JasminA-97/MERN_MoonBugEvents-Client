import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import AdminAddEvents from './AdminAddEvents';
import AdminEditEvents from './AdminEditEvents';
import { deleteEventAPI, getAllEventsAPI } from '../Services/allAPI';
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI';
import SERVERURL from '../Services/serverurl';
import ReactPaginate from 'react-paginate';

const AdminManageEvent = () => {
  const [searchKey,setSearchKey] = useState("")
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const {addresponse,setAddresponse} = useContext(addResponseContext)
  const [allEvents,setAllevents] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 7;

  useEffect(()=>{
    getAllEvents()
  },[addresponse,editResponse,searchKey])

  const getAllEvents = async()=>{
    try{
      const result = await getAllEventsAPI(searchKey)
      console.log(result);
      if(result.status === 200){
        setAllevents(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleDeleteEvent = async(eid)=>{
    try{
      const result = await deleteEventAPI(eid)
      if(result.status === 200){
        getAllEvents()
      }else{
        console.log(result);
      }
    }catch(err){
      console.log(err);
    }
  }

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const displayEvents = allEvents.slice(currentPage * eventsPerPage, (currentPage + 1) * eventsPerPage);

  return (
    <div className='bg-light'>
      <div className="d-flex justify-content-between align-items-center mt-3 ps-5 pe-5 pt-5 pb-4">
        <div><AdminAddEvents/></div>
        <div className='d-flex flex-wrap align-items-center bg-white rounded-4 p-1 border'> 
          <i className="fa-solid fa-magnifying-glass ps-2 pe-1"></i>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" style={{width:'300px',border:'none'}} className='search rounded-4 fs-6 ps-2 pt-1' placeholder='Search By Event Name'/>
        </div>
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <Table hover className='w-75'>
          <thead>
            <tr>
              <th className='p-3'>Sl.No</th>
              <th className='p-3'>Image</th>
              <th className='p-3'>Event Name</th>
              <th className='p-3'>Event Cost</th>  
              <th className='p-3'>Event Description</th> 
              <th className='p-3'></th>
            </tr>
          </thead>
          <tbody>
            {
              displayEvents.length > 0 ?
                displayEvents.map((evnt, index) => (
                  <tr key={evnt?._id}>
                    <td>{currentPage * eventsPerPage + index + 1}</td>
                    <td>
                      <img
                        style={{width:'50px',height:'50px'}}
                        src={evnt?.eventImg ? `${SERVERURL}/uploads/${evnt.eventImg}` : ""}
                        alt=""
                        className="profile"
                      />
                    </td>
                    <td>{evnt?.eventName}</td>
                    <td>{evnt?.eventCost}</td>
                    <td>{evnt?.eventDescription.slice(0,30)}...</td> 
                    <td className='justify-content-evenly align-items-center'>
                      <AdminEditEvents evnt={evnt}/>
                      <button onClick={()=>handleDeleteEvent(evnt?._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                    </td> 
                  </tr>  
               ))
              :
               <tr><td colSpan="6" className="fw-bolder text-danger">No events added!</td></tr>
            }       
          </tbody>
        </Table>
      </div>

      <div className='d-flex justify-content-center'>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(allEvents.length / eventsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        activeClassName={'active'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakClassName={'page-item'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        disabledClassName={'disabled'}
        activeLinkClassName={'active'}
      />
      </div>
    </div>
  )
}
export default AdminManageEvent
