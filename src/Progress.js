import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;

  let goal_per = bucket_list.map((l, idx) => {
    if (l.completed) {
      count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"}></HighLight>
      <Dot />
    </ProgressBar>
  );
};
const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  display: flex;
  border-radius: 10px;
  align-items: center;
`;

const HighLight = styled.div`
  background: #a566ff;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
  transition: 2s;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #a566ff;
  box-sizing: border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export default Progress;
