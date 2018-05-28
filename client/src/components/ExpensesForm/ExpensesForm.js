import React from "react";
import "./ExpensesForm.css";

const ExpensesForm = props => (
    <div className="card input-card">
        <form className="expenses">
            Item:
        <br></br>
            <input type="text" required id="item" name="item" placeholder="ham" />
            <br></br> Amount($):
        <br></br>
            <input type="number" step="0.01" required min="0" name="amount" id="amount" placeholder="10" />
            <br></br>
            <div className="btn-group-toggle radio-buttons" data-toggle="buttons">
                <label className="btn btn-secondary active radio-button-single">
                    <input type="radio" name="category" id="food" autocomplete="off" value="Food" checked /> Food
                        </label>
                <label className="btn btn-secondary radio-button-single">
                    <input type="radio" name="category" id="entertainment" autocomplete="off" value="Entertainment" /> Entertainment
                        </label>
                <label className="btn btn-secondary radio-button-single">
                    <input type="radio" name="category" id="housing" autocomplete="off" value="Housing" /> Housing
                        </label>
                <label className="btn btn-secondary radio-button-single">
                    <input type="radio" name="category" id="automobile" autocomplete="off" value="Automobile" /> Automobile
                        </label>
                <label className="btn btn-secondary radio-button-single">
                    <input type="radio" name="category" id="other" autocomplete="off" value="Other" /> Other
                        </label>
            </div>
            <br /> Date Purchased (optional):
        <br />
            <input type="date" name="date" id="date" placeholder="Today" />
            <br />
            <br />
            <input type="submit" className="btn btn-secondary btn-lg" value="Submit" />
        </form>
    </div>
);
export default ExpensesForm;