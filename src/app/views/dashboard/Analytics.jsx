import React, { Component, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";

import DoughnutChart from "../charts/echarts/Doughnut";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { readFirebaseDatabase } from "../../redux/actions/FirebaseActions";


class Dashboard1 extends Component {

  constructor(props){
    super(props);
    this.props.readFirebaseDatabase("surveyTest");
    this.props.areaChart.description = "";
  }

  render() {
    let { theme } = this.props;
    return (
      <Fragment>
        <div className="pb-24 pt-7 px-8 bg-primary">
          <div className="card-title capitalize text-white mb-4 text-white-secondary">
            {"-" + this.props.areaChart.description + "-"}
          </div>
          <ModifiedAreaChart
            height="280px"
            option={{
              series: [
                {
                  data: this.props.areaChart.data,
                  type: "line"
                }
              ],
              xAxis: {
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec"
                ]
              }
            }}
          ></ModifiedAreaChart>
        </div>

        <div className="analytics m-sm-30 mt--18">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards />

              {/* Top Selling Products */}
              {/* <TableCard />*/}

              {/* <StatCards2 /> */}

              {/* <h4 className="card-title text-muted mb-4">Ongoing Projects</h4>
              <RowCards /> */}
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card className="px-6 py-4 mb-6">
                <div className="card-title">Traffic Sources</div>
                <div className="card-subtitle">Last 30 days</div>
                <DoughnutChart
                  height="300px"
                  color={[
                    theme.palette.primary.dark,
                    theme.palette.primary.main,
                    theme.palette.primary.light
                  ]}
                />
              </Card>
{/* 
              <UpgradeCard /> 

              <Campaigns /> */}
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => (
  {
    areaChart: state.firebase.areaChart
  }
);

export default withStyles({}, { withTheme: true })(
  withRouter(connect(mapStateToProps,{readFirebaseDatabase})(Dashboard1))
);
