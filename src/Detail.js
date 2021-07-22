import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();

  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list, props);
  const bucket_index = parseInt(props.match.params.index);

  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
      <button
        onClick={() => {
          dispatch(deleteBucket(bucket_index));
          props.history.goBack();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
