import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useSelector, useDispatch } from "react-redux";
import { updateBucketFB, deleteBucketFB } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();

  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(bucket_list, props);
  const bucket_index = parseInt(props.match.params.index);

  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <ButtonGroup>
        <Button
          color="secondary"
          onClick={() => {
            dispatch(deleteBucketFB(bucket_index));
            props.history.goBack();
          }}
        >
          삭제하기
        </Button>
        <Button
          color="primary"
          onClick={() => {
            dispatch(updateBucketFB(bucket_index));
            props.history.goBack();
          }}
        >
          완료하기
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Detail;
