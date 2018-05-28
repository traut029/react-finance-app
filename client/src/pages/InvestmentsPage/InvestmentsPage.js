import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import InvestmentChart from "../../components/InvestmentChart"

class InvestmentsPage extends Component {
  state = {
  
  };

  componentDidMount() {
   
  }

 

  render() {
    return (
      <Container fluid>
      <p>Investments</p>
      <InvestmentChart/>
      </Container>
    );
  }
}

export default InvestmentsPage;
