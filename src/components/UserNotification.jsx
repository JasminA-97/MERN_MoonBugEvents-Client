import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';

const UserNotification = () => {
 // Sample notifications
 const notifications = [
  { id: 1, message: 'Your booking for Wedding is confirmed.', date: '2024-06-01' },
  { id: 2, message: 'Your booking for Birthday is pending.', date: '2024-06-15' },
];

return (
  <div className="p-5">
    <h2>Notifications</h2>
    <ListGroup>
      {notifications.map((notification) => (
        <ListGroup.Item key={notification.id}>
          {notification.message} <Badge bg="secondary">{notification.date}</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);
};

export default UserNotification