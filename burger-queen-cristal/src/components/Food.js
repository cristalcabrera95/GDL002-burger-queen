import React, { Component } from 'react';

import { Breakfast } from './Breakfast.json';


class Food extends Component{

constructor(){
  super();
  this.state = {
    Breakfast
  }
}  

    render(){
      const Breakfast = this.state.Breakfast.map((breakfast, i) => {
        return (
          
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{breakfast.title}</h5>
        <p className="card-text">{breakfast.Precio}</p>
        <button className="btn btn-primary">Pedir</button>
      </div>
    </div>
  </div>

        )
      })
      
        return(
          <div className="row">
            {Breakfast}
            </div>
        );
    }

}
export default Food;