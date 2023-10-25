import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { GET_CATEGORY_PROGRESS } from "../Redux-saga/Category/action/action";

const Data = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.categoryReducer);

  console.log(data);

  useEffect(()=>{
    dispatch({type: GET_CATEGORY_PROGRESS});
  },[]);


  return (
    <div>
      <div>
        {data.Category.map((e,ind) => (
            <h1 key={ind}> { e.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Data;