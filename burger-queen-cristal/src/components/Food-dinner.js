import React, { Component } from 'react';

import { OtherFood } from './food-and-dinner.json';


class FoodAndDinner extends Component{

constructor(){
  super();
  this.state = {
    OtherFood,
    OrderDinner:[]
  }
}  
addOrderDinner = (event) =>{
  const evento = event.currentTarget;
  const nameOfTarget = evento.getAttribute("name")
  const priceOfTarget = evento.getAttribute("value")
  console.log(nameOfTarget, priceOfTarget);

  const object= {
    nameOfTarget,
    priceOfTarget
  }
  this.setState({
    OrderDinner:[...this.state.OrderDinner, object]
  }, ()=> console.log(this.state.OrderDinner)
  )
}

    render(){
      const OtherFood = this.state.OtherFood.map((otherFood, i) => {
        return (
          
  <div className="col-sm-6"  key={i}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{otherFood.title}</h5>
        <p className="card-text">{otherFood.Precio}</p>
        <button key = {i} name={otherFood.title} value={otherFood.Precio} onClick={this.addOrderDinner} className="btn btn-primary">Pedir</button>
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