import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

const BucketList = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            completed={list.completed}
            key={index}
            onClick={() => {
              props.history.push("/detail/" + index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  font-size: 16px;
  color: "#212121";
  background-color: ${(props) => (props.completed ? "#E8D9FF" : "#eee")};
  box-sizing: border-box;
`;

export default BucketList;
