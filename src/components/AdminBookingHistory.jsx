import React from 'react';
import { Table } from 'react-bootstrap';

const AdminBookingHistory = () => {
  // Fetch the booking history from the server (use useEffect and state for real data)
  const bookingHistory = [
    { id: 1, user: 'John Doe', event: 'Wedding', date: '2024-06-01', status: 'Completed' },
    { id: 2, user: 'Jane Smith', event: 'Birthday', date: '2024-06-15', status: 'Completed' },
  ];

  return (
    <div className="p-5">
      <h2>Booking History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
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

export default AdminBookingHistory;
