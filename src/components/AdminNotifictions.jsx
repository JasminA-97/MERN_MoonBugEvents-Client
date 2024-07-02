import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap';

const AdminNotifictions = () => {
   // Sample notifications
   const notifications = [
    { id: 1, message: 'New booking received', timestamp: '2024-06-01 10:00 AM' },
    { id: 2, message: 'User John Doe updated profile', timestamp: '2024-06-02 11:30 AM' },
  ];

  return (
    <div className="p-5">
      <h2>Notifications</h2>
      <ListGroup>
        {notifications.map((notification) => (
          <ListGroup.Item key={notification.id}>
            {notification.message} <Badge>{notification.timestamp}</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default AdminNotifictions