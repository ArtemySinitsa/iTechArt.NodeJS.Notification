import axios from 'axios';

export function userRegistrationRequest(user) {
    return axios.post('api/users', user);
}
