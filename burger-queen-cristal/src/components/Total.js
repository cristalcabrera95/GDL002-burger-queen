import React, { Component } from 'react';
import {ConsumerDatab} from '../context';




class Total extends Component{
 
    render(){
        return(
          <div className="cardTotal">
  <h5 className="card-header">Tu Pedido</h5>
  <div className="card-body">
  {/* <input type="number" min="1" className="Input-number"></input> */}
  {/* <h5 className="card-title">Numero de Cliente</h5> */}
   <br></br>
    <p className="card-text totalfood" ></p>
    <button className="btn btn-primary" onClick={prompt} >Enviar Pedido</button>
  </div>
</div>
        )
    }
}
export default Total