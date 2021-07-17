import React from "react";

// 함수형 컴포넌트 방법 1.
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 방법 2. =>가 들어간 함수: 화살표 함수
// () 안에 props: 부모 컴포넌트에게 받아온 데이터
const BucketList = (props) => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야하나
  const my_lists = props.list;

  console.log(props);
  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환
  return (
    <div className="lists">
      {
        // js의 내장 함수 중 하나인 map. 리스트의 갯수만큼 => 오른쪽 구문 반복.
        my_lists.map((list, index) => {
          console.log(list);
          return (
            <div className="list-item" key={index}>
              {list}
            </div>
          );
        })
      }
    </div>
  );
};

export default BucketList;
