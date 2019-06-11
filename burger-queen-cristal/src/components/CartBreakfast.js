import React, { Component } from 'react';
import { ConsumerDatab } from '../context';


export default class CartBreakfast extends Component {
  render() {


    return (
      <ConsumerDatab>
        {value => {
          const { id, title, Price } = this.props.menus;
          return (<div className="col-sm-6" key={id} >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${Price}.00</p>
                <button key={id} onClick={() => {
                  value.addToComanda(id);
                }} className="btn btn-primary">Pedir
          </button>
              </div>
            </div>
          </div>)
        }}
      </ConsumerDatab>
    )
  }
}

