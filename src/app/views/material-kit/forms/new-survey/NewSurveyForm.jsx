import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Grid
} from "@material-ui/core";
import "date-fns";
import Form from "@rjsf/material-ui";
//import Form from "@rjsf/fluent-ui";
import "./Survey.css";


class NewSurveyForm extends Component {
  state = {
    username: "",
    firstName: "",
    email: "",
    date: new Date(),
    creditCard: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agreement: ""
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    // console.log("submitted");
    // console.log(event);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    // console.log(date);

    this.setState({ date });
  };

  render() {

    //Internals
    const schema = require("./schema.json");
    const uiSchema = require("./ui-schema.json");
    const formData = require("./form-data.json");

    return (
      <div>
         <Grid container spacing={12}>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <Form className="mb-4 w-full"
                schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                onSubmit={this.handleSubmit}
                submitOnEnter
                activityIndicatorEnabled
              />
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default NewSurveyForm;