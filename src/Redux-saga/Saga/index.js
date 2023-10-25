import { all } from "@redux-saga/core/effects";
import { getCategorySaga } from "./Root/rootcategory";

export function* rootSaga() {
    yield all([getCategorySaga()]);
  }