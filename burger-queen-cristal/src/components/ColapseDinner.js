import React, { Component } from 'react';
import CartBreakfast from './CartBreakfast';
import {ConsumerDatab} from '../context';

export default class ColapseDinner extends Component {
    render() {
        return (
            <div className="">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 COMIDA Y CENA
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
              <div className="row">
              <ConsumerDatab>
              {value=>{
                
                return value.dataD.map( menus =>{
                  return <CartBreakfast key={menus.id} menus = {menus}/>;
                })
              }}
              </ConsumerDatab>
            </div>
                  
              </div>
            </div>
          </div>
        
        )
    }
}
