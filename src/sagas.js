import { USER_REGISTRATION_REQUEST } from './authorization/actions/constants';
import { userRegistrationRequest } from './authorization/services/api';
import { take, call, put, fork, race,apply } from 'redux-saga/effects';

export function* registerFlow() {
    while (true) {
        let request = yield take(USER_REGISTRATION_REQUEST);
        let  user  = request.user;
        let wasSuccessful = yield call(userRegistrationRequest,user);

        if (wasSuccessful) {
           //TODO
        }
    }
}

export default function* root() {
    yield fork(registerFlow)
}