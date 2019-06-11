import React, { Component } from 'react'
import {ConsumerDatab} from '../context'
import CartComanda from './CartComanda';

export default class Comanda extends Component {
    
    render() {
        return (
            <section>
                <h5 className="card-header">Tu Pedido</h5>
                <ConsumerDatab>
                {value=>{
                
                return value.comanda.map( order =>{
                    
                  return <CartComanda key={order.id} order = {order}/>;
                })
              }}
                </ConsumerDatab>
                <button className="btn btn-primary" onClick={prompt} >Enviar Pedido</button>
            </section>
        )
    }
}
