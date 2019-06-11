import React, { Component } from 'react'
import ColapseBreakfast from './ColapseBreakfast';
import ColapseDinner from './ColapseDinner';
import Comanda from './Comanda';

export default class Menu extends Component {
    render() {
        return (
            <div className="row menu">
                 <div className="col-6">
                    <ColapseBreakfast></ColapseBreakfast>
                    <ColapseDinner></ColapseDinner>   
            
                </div>
                <div className="col-6">
                    <Comanda></Comanda>
                </div>
            </div>
        )
    }
}
