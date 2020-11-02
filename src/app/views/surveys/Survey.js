import React, { Component } from "react";
import { Breadcrumb } from "matx";
import NewSurveyForm from "../material-kit/forms/new-survey/NewSurveyForm";
import { Card } from "@material-ui/core";

class Survey extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Survey", path: "/forms" },
              { name: "New Survey" }
            ]}
          />
        </div>
        <Card className="px-6 pt-2 pb-4"><NewSurveyForm /></Card>
      </div>
    );
  }
}

export default Survey;
