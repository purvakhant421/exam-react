import { call, put } from "redux-saga/effects";
import { getCategory } from "../../Category/api/api";
import { GET_CATEGORY_ERROR, GET_CATEGORY_SUCCESS } from "../../Category/action/action";


// GET Category detail
export function* handleGetCategory(action) {
    try {
      const res = yield call(getCategory, action);
      const status = res.status;
      const data = res.data;
      if (status === 200) {
        yield put({ type: GET_CATEGORY_SUCCESS, data });
      } else {
        yield put({ type: GET_CATEGORY_ERROR, data });
      }
    } catch (e) {
      yield put({ type: GET_CATEGORY_ERROR, e });
    }
  }