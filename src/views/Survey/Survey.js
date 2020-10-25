import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Form from "@rjsf/material-ui";


import avatar from "assets/img/faces/marc.jpg";

//Internals
const schema = require('./schema.json');
const uiSchema = require('./ui-schema.json');
const formData = require('./form-data.json');

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

function onSubmit(value) {
	  alert(JSON.stringify(value.formData));
	  return null;
}

export default function Survey() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit new survey</h4>
              <p className={classes.cardCategoryWhite}>Set survey sections and questions</p>
            </CardHeader>
            <CardBody>
            	<Form
		            schema={schema}
		            uiSchema={uiSchema}
		            formData={formData}
            		onSubmit={onSubmit}
		            submitOnEnter
		            activityIndicatorEnabled
            	/>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

/*
// Library
import React from 'react';
import ReactDOM from 'react-dom';
import Form from "@rjsf/material-ui";
import { makeStyles } from "@material-ui/core/styles";
//core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// Internals
const schema = require('./schema.json');
const uiSchema = require('./ui-schema.json');
const formData = require('./form-data.json');

const styles = {
		  cardCategoryWhite: {
		    color: "rgba(255,255,255,.62)",
		    margin: "0",
		    fontSize: "14px",
		    marginTop: "0",
		    marginBottom: "0"
		  },
		  cardTitleWhite: {
		    color: "#FFFFFF",
		    marginTop: "0px",
		    minHeight: "auto",
		    fontWeight: "300",
		    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		    marginBottom: "3px",
		    textDecoration: "none"
		  }
		};
const useStyles = makeStyles(styles);
//const classes = useStyles();

class Survey extends React.Component {
	
    onSubmit = (value, callback) => {
        alert('onSubmit: '+ JSON.stringify(value.formData)); // eslint-disable-line no-console
        //setTimeout(() => callback && callback(), 2000); // just an example in real world can be your XHR call
    }
    onCancel = () => {
        console.log('on reset being called');
    }
    onFormChanged = ({ formData }) => {
        console.log('onFormChanged: ',formData); // eslint-disable-line no-console
    }
    onUpload = (value) => {
        console.log('onUpload: ', value); // eslint-disable-line no-console
    }
    render() {
    	const classes = useStyles();
        return (
        	    <div>
        	      <GridContainer>
        	        <GridItem xs={12} sm={12} md={8}>
        	          <Card>
        	            <CardHeader color="primary">
        	            </CardHeader>
        	            <CardBody>

				             <Form
				                  schema={schema}
				                  uiSchema={uiSchema}
				                  formData={formData}
				                  onCancel={this.onCancel}
				                  onSubmit={this.onSubmit}
				                  onUpload={this.onUpload}
				                  onChange={this.onFormChanged}
				                  submitOnEnter
				                  activityIndicatorEnabled
				            />
				        </CardBody>
				      </Card>
				    </GridItem>
				  </GridContainer>
				</div>
        );
    }
}


export default Survey

*/
