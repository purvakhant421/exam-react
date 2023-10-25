import { takeLatest } from "redux-saga/effects";
import { handleGetCategory } from "../managecategory/managecategory";
import { GET_CATEGORY_PROGRESS } from "../../Category/action/action";

export function* getCategorySaga() {
    yield takeLatest(GET_CATEGORY_PROGRESS, handleGetCategory);
}