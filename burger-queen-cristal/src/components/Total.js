import React, { Component } from 'react';

class Total extends Component{
    render(){
        return(
          <div class="cardTotal">
  <h5 className="card-header">Tu Pedido</h5>
  <div className="card-body">
  <input type="number" min="1" className="Input-number"></input>
  <h5 className="card-title">Numero de Cliente</h5>
   <br></br>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <button className="btn btn-primary">Enviar Pedido</button>
  </div>
</div>
        )
    }
}
export default Total
