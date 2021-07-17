import React from "react";
import BucketList from "./BucketList";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state 정의
    this.state = {
      list: ["여행 가기", "매일 책읽기", "기타 배우기", "드라마 정주행하기"],
    };
  }

  // render() 안에 리액트 엘리먼트를 넣어줌.
  render() {
    // this 키워드를 통해 state에 접근
    console.log(this.state);

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">내 버킷리스트</h1>
          <hr className="line" />
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
