import axios from 'axios';
import requestHandler from '../api';

export function notificationSaveRequest(notification) {
  return requestHandler(axios.post('http://localhost:8080/api/notifications', notification));
}
export function notificationDeleteRequest(id) {
  return requestHandler(axios.delete(`http://localhost:8080/api/notifications/item/${id}`));
}
