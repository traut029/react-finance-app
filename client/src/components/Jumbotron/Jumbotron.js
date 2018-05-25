import React from "react";

const Jumbotron = props => (
  <div className="jumbotron" id={props.id}>
    {props.children}
  </div>
);

export default Jumbotron;
