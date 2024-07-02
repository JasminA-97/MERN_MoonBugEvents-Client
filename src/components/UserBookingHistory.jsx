import React from 'react'
import { Table } from 'react-bootstrap';

const UserBookingHistory = () => {
   // Sample booking history
   const bookingHistory = [
    { id: 1, event: 'Wedding', date: '2024-06-01', status: 'Completed' },
    { id: 2, event: 'Birthday', date: '2024-06-15', status: 'Completed' },
  ];

  return (
    <div className="p-5">
      <h2>Booking History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.event}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserBookingHistory

// import React from 'react';
// import { Table, Button } from 'react-bootstrap';

// const UserBookingHistory = () => {
//   // Sample user bookings
//   const userBookings = [
//     { id: 1, event: 'Wedding', date: '2024-06-01', status: 'Confirmed' },
//     { id: 2, event: 'Birthday', date: '2024-06-15', status: 'Pending' },
//   ];

//   return (
//     <div className="p-5">
//       <h2>Booking History</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Event</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userBookings.map((booking) => (
//             <tr key={booking.id}>
//               <td>{booking.id}</td>
//               <td>{booking.event}</td>
//               <td>{booking.date}</td>
//               <td>{booking.status}</td>
//               <td>
//                 <Button variant="info" className="me-2">View</Button>
//                 <Button variant="danger">Cancel</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default UserBookingHistory;
