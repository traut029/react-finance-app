import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import ExpensesPage from "./pages/ExpensesPage";
import InvestmentsPage from "./pages/InvestmentsPage";
// import NoMatch from "./pages/NoMatch";
// import Footer from './components/Footer';

const App = () => (
  <div>
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LoginPage} /> */}
        <Route exact path="/expenses" component={ExpensesPage} />
        <Route exact path="/investments" component={InvestmentsPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
    {/* <Footer /> */}
  </div>
);

export default App;
