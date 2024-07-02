import React from 'react'
import { Table } from 'react-bootstrap'
import AdminAddEvents from './AdminAddEvents';
import AdminEditEvents from './AdminEditEvents';
import AdminDeleteEvents from './AdminDeleteEvents';

const AdminManageEvent = () => {

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
              <th></th> 

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td> 
              <td  className='d-flex'><AdminEditEvents/><AdminDeleteEvents/></td> 
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>  
              <td className='d-flex'><AdminEditEvents/><AdminDeleteEvents/></td> 
            </tr>          
          </tbody>
        </Table>
      </div>

    </>
  )
}

export default AdminManageEvent