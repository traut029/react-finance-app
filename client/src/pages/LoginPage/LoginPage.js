import React, { Component } from "react";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SideCard from "../../components/SideCard";
import './LoginPage.css';

// import RegistrationPage from "../RegistrationPage/RegistrationPage";

class LoginPage extends Component {
    state = {
        userName: "",
        password: "",
        email: "",
        cellPhone: "",
        address: "",
        zipCode: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }

    handleLoginSubmit = event => {
        event.preventDefault();
        API.loginUser({
            userName: this.state.userName,
            password: this.state.password
        })
            .then(res => {
                console.log(res.data)
                console.log("set userid ", res.data.id)
                sessionStorage.setItem("userID", res.data.id)
                this.props.history.push({
                    pathname: "/expenses",
                })
                console.log(this.state);
            })
            .catch(err => {
                console.log(err.response)
                if (err.response.data == "Bad Request") {

                }

                document.getElementById("userName").setAttribute("class", "invalid");
                document.getElementById("password").setAttribute("class", "invalid");
                window.M.toast({ html: 'Please double check your username and password' })
            })
    }

    render() {
        return (
            <main>
                <div id="loginpage" className="content">
                    <Container>
                        <Jumbotron id="jumbotron1">
                        </Jumbotron>

                        <Row id="loginbox">

                            <div class="d-flex align-items-center">

                                <Col size="md-3" additionalClass="small-screen">
                                    <SideCard
                                        id="left-side-card"
                                        imagePath={require("../../images/ID-10097478.jpg")}
                                        alt="left-side-image"
                                        cardText="Manage your Personal Expenses in an easier way"
                                    />
                                </Col>

                                <Col size="md-6 sm-12" colId="login-col">
                                        <div id="sign-in-card" class="card align-items-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Sign In</h5>
                                                <form>
                                                    <Row fluid>
                                                        <Input
                                                            id="userName"
                                                            name="userName"
                                                            value={this.state.userName}
                                                            onChange={this.handleInputChange}
                                                            placeholder="Username"
                                                        />
                                                    </Row>
                                                    <Row fluid>
                                                        <Input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            value={this.state.password}
                                                            onChange={this.handleInputChange}
                                                            placeholder="Password"
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Col size="md-12">
                                                            <div className="d-flex justify-content-around">
                                                                <a
                                                                    onClick={this.handleLoginSubmit}
                                                                    type="success"
                                                                    className="btn btn-info"
                                                                >Login</a>

                                                                <a
                                                                    href="/registration"
                                                                    className="btn btn-success"
                                                                >Signup</a>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </div>
                                        </div>
                                </Col>

                                <Col size="md-3" additionalClass="small-screen">
                                    <SideCard
                                        id="right-side-card"
                                        imagePath={require("../../images/investment.jpg")}
                                        alt="right-side-image"
                                        cardText="Manage your investments like Stocks and Crypto currencies."
                                    />
                                </Col>
                            </div>
                        </Row>
                        <Jumbotron id="jumbotron2">
                        </Jumbotron>
                    </Container>
                </div>
            </main >
        )
    }
}

export default withRouter(LoginPage);
