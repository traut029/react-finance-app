import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Chart from "../../components/Chart"

class ExpensesPage extends Component {
  state = {
    test:[
      {
          "name": "Food",
          "y": 5,
          "drilldown": "Food",
          "amount": "$" + "25"
      },
      {
          "name": "Entertainment",
          "y": 10,
          "drilldown": "Entertainment",
          "amount": "$" + "25"
      },
      {
          "name": "Housing",
          "y": 30,
          "drilldown": "Housing",
          "amount": "$" + "25"
      },
      {
          "name": "Automobile",
          "y": 50,
          "drilldown": "Automobile",
          "amount": "$" + "25"
      },
      {
          "name": "Other",
          "y": 5,
          "drilldown": "Other",
          "amount": "$" + "25"
      }
  ]
  };

  componentDidMount() {
           //Render Pi Chart
        //    Highcharts.chart('container', {
        //     chart: {
        //         type: 'pie'
        //     },
        //     title: {
        //         text: 'Personal Expenses'
        //     },
        //     subtitle: {
        //         text: 'Total: <b>$' + "23" + '</b>'
        //     },
        //     plotOptions: {
        //         series: {
        //             dataLabels: {
        //                 enabled: true,
        //                 format: '{point.name}: {point.y:.1f}%'
        //             }
        //         }
        //     },
        //     tooltip: {
        //         headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        //         pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.amount}</b><br/> <b>{point.y:.2f}%</b> of total'
        //     },

        //     "series": [
        //         {
        //             "name": "Expenses",
        //             "colorByPoint": true,
        //             "data":
        //                 this.state.test
        //         }
        //     ],
        //     // "drilldown": {
        //     //     "series": drillData
        //     // },
        //     responsive: {
        //         rules: [{
        //             condition: {
        //                 maxWidth: 500
        //             },
        //             chartOptions: {
        //                 series: {
        //                     dataLabels: {
        //                         enabled: false,
        //                         format: '{point.name}: {point.y:.1f}%'
        //                     }
        //                 }
        //             }
        //         },
        //     {
        //         condition: {
        //             minWidth: 500
        //         },
        //         chartOptions: {
        //             series: {
        //                 dataLabels: {
        //                     enabled: true,
        //                     format: '{point.name}: {point.y:.1f}%'
        //                 }
        //             }
        //         }
        //     }]
        //     }
        // });
  }

 

  render() {
    return (
      <Container fluid>
      <p>Expenses</p>
      <Chart test={this.state.test}/>
      </Container>
    );
  }
}

export default ExpensesPage;
