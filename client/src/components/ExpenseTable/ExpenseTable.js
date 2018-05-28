import React from "react";
import "./ExpenseTable.css";

const ExpenseTable = props => (
    <div>
        <div class="text-center">
            <button data-toggle="collapse" class="btn btn-secondary btn-block display-button" data-target="#demo">Display Table</button>
        </div>
        <div id="demo" class="collapse">
            <div class="card food-card">
                <h2 class="card-title">Food</h2>
            </div>
            <div class="card entertainment-card">
                <h2 class="card-title">Entertainment</h2>
            </div>
            <div class="card housing-card">
                <h2 class="card-title">Housing</h2>
            </div>
            <div class="card automobile-card">
                <h2 class="card-title">Automobile</h2>
            </div>
            <div class="card other-card">
                <h2 class="card-title">Other</h2>
            </div>
        </div>
    </div>
);
export default ExpenseTable;