import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Food from './Food';
import FoodAndDinner from './Food-dinner';


class Counter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="accordion" id="accordionExample">
          <div className="card1">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  DESAYUNO
        </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <Food />
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  COMIDA Y CENA
        </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                <FoodAndDinner />

              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Counter