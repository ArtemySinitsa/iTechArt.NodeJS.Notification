import {USER_REGISTRATION_REQUEST} from './constants';

export function userRegistrationRequest(user) {
    return { type: USER_REGISTRATION_REQUEST, user }
}