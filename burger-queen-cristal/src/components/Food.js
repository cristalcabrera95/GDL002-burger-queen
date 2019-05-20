import React, { Component } from 'react';

import { Breakfast } from './Breakfast.json';


class Food extends Component{

constructor(props){
  super(props);
  this.state = {
    order:[]
  }
  
} 
// onAddOrder = () =>{
//   this.setState(state =>{
//     const order = state.list.concat(state.order);
//   console.log(order);

//   })
  
// }
    render(){
      
        return(
          <div className="row">
          {Breakfast.map((breakfast, index ) =>
          <div className="col-sm-6" key={index}>
          <div className="card">
          <div className="card-body">
            <h5 className="card-title">{breakfast.title}</h5>
            <p className="card-text">{breakfast.Precio}</p>
            <button onClick={this.onAddOrder} type="submit" className="btn btn-primary">Pedir</button>
          </div>
        </div>
            </div>
             )}
            </div>
       
        )}

}
export default Food;