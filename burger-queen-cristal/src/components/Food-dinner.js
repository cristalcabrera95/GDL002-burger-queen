import React, { Component } from 'react';

import { OtherFood } from './food-and-dinner.json';


class FoodAndDinner extends Component{

constructor(){
  super();
  this.state = {
    OtherFood
  }
}  

    render(){
      const OtherFood = this.state.OtherFood.map((otherFood, i) => {
        return (
          
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{otherFood.title}</h5>
        <p className="card-text">{otherFood.Precio}</p>
        <button className="btn btn-primary">Pedir</button>
      </div>
    </div>
  </div>

        )
      })
      
        return(
          <div className="row">
            {OtherFood}
            </div>
        );
    }

}
export default FoodAndDinner;