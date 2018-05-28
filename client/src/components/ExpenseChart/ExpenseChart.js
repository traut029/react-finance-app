import React from "react";
import "./ExpenseChart.css";
import { render } from 'react-dom'
import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'

const ExpenseChart = props => (
<div className="card">
  <HighchartsReact 
    highcharts={Highcharts}
    options={{
        //Render Pi Chart
     
                 chart: {
                     type: 'pie'
                 },
                 title: {
                     text: 'Personal Expenses'
                 },
                 subtitle: {
                     text: 'Total: <b>$' + "23" + '</b>'
                 },
                 plotOptions: {
                     series: {
                         dataLabels: {
                             enabled: true,
                             format: '{point.name}: {point.y:.1f}%'
                         }
                     }
                 },
                 tooltip: {
                     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.amount}</b><br/> <b>{point.y:.2f}%</b> of total'
                 },
     
                 "series": [
                     {
                         "name": "Expenses",
                         "colorByPoint": true,
                         "data":
                            props.test
                     }
                 ],
                //  "drilldown": {
                //      "series": drillData
                //  },
                 responsive: {
                     rules: [{
                         condition: {
                             maxWidth: 500
                         },
                         chartOptions: {
                             series: {
                                 dataLabels: {
                                     enabled: false,
                                     format: '{point.name}: {point.y:.1f}%'
                                 }
                             }
                         }
                     },
                 {
                     condition: {
                         minWidth: 500
                     },
                     chartOptions: {
                         series: {
                             dataLabels: {
                                 enabled: true,
                                 format: '{point.name}: {point.y:.1f}%'
                             }
                         }
                     }
                 }]
                 }
       
             }} 
  />
</div>
);
export default ExpenseChart;

