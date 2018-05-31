import React, { Component } from "react";

import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ExpenseChart from "../../components/ExpenseChart"
import Jumbotron from "../../components/Jumbotron";
import ExpensesForm from "../../components/ExpensesForm";
import ExpenseTable from "../../components/ExpenseTable";
import ErrorModal from "../../components/ErrorModal";

class ExpensesPage extends React.Component {
    state = {
        test: [
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

    }



    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 class="display-4">Personal Expenses</h1>
                    <h3 id="first-name"></h3>

                    <h4 class="text-right">
                        <Link to="/investments">Go To Investments </Link> | <Link to="/">Logout</Link>
                    </h4>
                    <hr class="my-4"></hr>
                </Jumbotron>
      
                <Row>
                    <Col size="md-4">
                        <ExpensesForm />
                    </Col>
                    <Col size="md-8">
                        <ExpenseChart test={this.state.test} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <ExpenseTable />
                    </Col>
                </Row>
                <ErrorModal />
            </Container>
        );
    }
}

export default ExpensesPage;
