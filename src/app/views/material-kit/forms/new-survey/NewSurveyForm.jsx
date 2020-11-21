import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import FirebaseAuthService from "../../../../services/firebase/firebaseAuthService";
import APIClient from "../../../../services/api/apiClient"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


import {
  Grid
} from "@material-ui/core";
import "date-fns";
import Form from "@rjsf/material-ui";
import "./Survey.css";


class NewSurveyForm extends Component {

  constructor(props){
    super(props);
    this.state = {dialog: false, formData: {}}
  }

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

  handleSubmit = () => {
    // Get root reference
    var storageRef = FirebaseAuthService.getStorage();
    var formData = this.state.formData;

    require('crypto').randomBytes(48, function(err, buffer) {
      var token = buffer.toString('hex');

      formData.survey_id = token

      var file = new File([JSON.stringify(formData)], "survey.json");
      // Metadata
      var metadata = {
        contentType: "application/json",
      };

      storageRef
        .child("current_survey_test/" + "survey.json")
        .put(file, metadata)
        .then(function (snapshot) {
          console.log("Uploaded a blob or file!");
      });
    });

    const apiClient = new APIClient("");

    apiClient.postClientDasboard(formData.sections).then((data) => {
      console.log("Survey sent...")
      console.log(this.state.formData)
    });
  };


  handleClickOpen = event => {
    this.setState({dialog: true,formData: event.formData});
    
  }

  handleClose = (fb) => {
    this.setState({dialog: false});
    switch(fb) {
      case 'OK':
        this.handleSubmit();
        break;
      default:
        return null;
      }
  }

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
                onSubmit={this.handleClickOpen}
                submitOnEnter
                activityIndicatorEnabled
              />
            </Grid>
          </Grid>
          <Dialog
            open={this.state.dialog}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to submit this new form?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Submitting this form means all client applications will be updated with those new data.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleClose('NOK')} color="primary">
                Disagree
              </Button>
              <Button onClick={() => this.handleClose('OK')} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default NewSurveyForm;
