import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log("result ", result);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data,
      })
    );
  } catch (e) {
    console.log("error ", e);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
