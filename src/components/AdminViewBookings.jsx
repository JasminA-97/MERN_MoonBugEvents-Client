import React from 'react'
import { Button, Table } from 'react-bootstrap';

const AdminViewBookings = () => {
  // Sample bookings
  const bookings = [
    { id: 1, user: 'John Doe', event: 'Wedding', date: '2024-06-01', status: 'Pending' },
    { id: 2, user: 'Jane Smith', event: 'Birthday', date: '2024-06-15', status: 'Confirmed' },
  ];

  return (
    <div className="p-5">
      <h2>View Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
              <td>{booking.event}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
              <td>
                <Button variant="info" className="me-2">View</Button>
                <Button variant="warning" className="me-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewBookings