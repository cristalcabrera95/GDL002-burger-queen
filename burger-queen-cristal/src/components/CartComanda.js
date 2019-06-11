import React, { Component } from "react";
import { ConsumerDatab } from "../context";

export default class CartComanda extends Component {
  render() {
    return (
      <ConsumerDatab>
        {value => {
          const { id, title, Price } = this.props.order;
          return (
            <li className="list-group-item">
              {title} ${Price}.00
              <button
                key={id}
                className="eraser"
                onClick={() => {
                  value.clearComanda(id);
                }}
              >
                <i className="lni-trash" />
              </button>
            </li>
          );
        }}
      </ConsumerDatab>
    );
  }
}
