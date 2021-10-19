import React from "react";
import { connect } from "react-redux";

const About = (props) => {
  return (
    <div>
      <span>Count (test value from redux state): {props.count}</span>
    </div>
  );
};

const mapStateToPorps = (state) => ({
  count: state.app.testValue,
});

export default connect(mapStateToPorps)(About);
