import React from "react";
import "./InvestmentChart.css";
import { render } from 'react-dom'
import Highcharts from "highcharts"
import HighchartsReact from 'highcharts-react-official'



const InvestmentChart = props => (
<div>
  <HighchartsReact 
//   {props.test}
    highcharts={Highcharts}
    options={{
                      //Render Pi Chart
                    
                        chart: {
                            type: 'pie'
                        },
                        title: {
                            text: 'Investments'
                        },
                        subtitle: {
                            text: 'Total: <b>$' + 
                            // total.toFixed(2) 
                            "23"
                            + '</b>'
                        },
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    enabled: false,
                                    format: '{point.name}: {point.y:.1f}%'
                                }
                            }
                        },
    
                        tooltip: {
                            headerFormat: ' ',
                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.dollars}</b><br/> <b>{point.amount}</b><br/> <b>{point.y:.2f}%</b> of total'
                        },
    
                      "series": [
                            {
                                "name": "Investments",
                                "colorByPoint": true,
                                "data":
                                    // chartData
                                    [1,2,3]
                            }
                        ],
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
export default InvestmentChart;

