import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { returnToHomePage } from "./actions/form";
import { push } from "connected-react-router";

export class Form extends Component {
  componentDidMount() {
    console.log("MOUNT");
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  submit = (e, values) => {
      e.preventDefault();
      this.props.returnToHomePage();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <Field name="name" component="input" type="text" />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)  =>
  bindActionCreators({
    returnToHomePage,
    push
  }, dispatch);


const connectedForm = reduxForm({form: 'basicForm'})(Form);

export default connect(null, mapDispatchToProps)(connectedForm);
