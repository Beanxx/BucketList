import React from "react";
import styled from "styled-components";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";

import { connect } from "react-redux";
import { loadBucket, createBucket } from "./redux/modules/bucket";
import Progress from "./Progress";

import { firestore } from "./firebase";

const mapStateToProps = (state) => {
  return { bucket_list: state.bucket.list };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucket());
    },

    create: (bucket) => {
      dispatch(createBucket(bucket));
    },
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.text = React.createRef();
  }

  componentDidMount() {
    const bucket = firestore.collection("bucket2");

    bucket.doc("bucket_item1").set({ text: "수영 배우기", completed: false });

    // bucket
    //   .doc("bucket_item")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc);
    //       console.log(doc.data());
    //       console.log(doc.id);
    //     }
    //     console.log(doc.exists);
    //   });

    // bucket.get().then((docs) => {
    //   let bucket_data = [];

    //   docs.forEach((doc) => {
    //     if (doc.exists) {
    //       bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
    //     }
    //   });

    //   console.log(bucket_data);
    // });

    // // bucket.add({ text: "드럼 배우기", completed: false }).then((docRef) => {
    // //   console.log(docRef);
    // //   console.log(docRef.id);
    // // });

    // // bucket.doc("bucket_item").update({ text: "기타 배우기2" });

    // bucket
    //   .doc("bucket_item2")
    //   .delete()
    //   .then((docRef) => {
    //     console.log("지웠어요!");
    //   });
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Title>My BucketList</Title>
          <Progress />
          <Line />
          <Switch>
            <Route path="/" exact component={BucketList} />
            <Route path="/detail/:index" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          위로가기
        </button>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    padding: 10px;
  }

  & input {
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid #5d5d5d;
    width: 60%;
    &:focus {
      border: 1px solid #a673ff;
    }
  }

  & button {
    width: 25%;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #6799ff;
    background-color: #6799ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: #5587ed;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
