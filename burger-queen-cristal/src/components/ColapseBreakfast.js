import React, { Component } from 'react';
import CartBreakfast from './CartBreakfast';
import {ConsumerDatab} from '../context';

export default class ColapseBreakfast extends Component {

  render() {
    
    return (
      <React.Fragment>
      <div className="Colapse">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              DESAYUNO
        </button>
          </h2>
        </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
           
            <div className="row">
              <ConsumerDatab>
              {value=>{
                
                return value.dataB.map( menus =>{
                  return <CartBreakfast key={menus.id} menus = {menus}/>;
                })
              }}
              </ConsumerDatab>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

