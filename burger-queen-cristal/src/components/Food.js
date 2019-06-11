import React, { Component } from 'react';
import firebase, { initializeApp } from 'firebase'
import { config } from './firebaseData'
import 'firebase/database'
import { breakfast } from './Breakfast.json';


class Food extends Component {

  constructor(props) {
    super(props);
    this.state = {
      breakfast,
      order: []
    }
    this.app = initializeApp(config);
    this.db = this.app.database().ref().child('OrderFood')
  }

  // componentDidMount (){
  //   const {Order} = this.state;
  // this.db.on("child_added", snap =>{
  // Order.push({
  //   nameOfEvent,
  //   priceOfEvent
  // })
  // this.setState({Order})
  // })  
  // }

  addOrder = (event) => {
    const target = event.currentTarget;
    const nameOfEvent = target.getAttribute("name")
    const priceOfEvent = target.getAttribute("value")

    console.log(nameOfEvent, priceOfEvent);

    const object = {
      nameOfEvent,
      priceOfEvent
    }

    this.setState({
      order: [...this.state.order, object]
    }, () => {
      const totalfood = document.getElementsByClassName("totalfood")[0]
      totalfood.innerHTML = ""
      this.state.order.map((item, i) => {
        totalfood.innerHTML += " <li class='list-group-item'>" + item.nameOfEvent + " " + item.priceOfEvent + "</li>"
      })
      console.log(this.state.order)
    })


  }

  render() {
    const breakfast = this.state.breakfast.map((breakfast, e) => {
      return (

        <div className="col-sm-6" key={e}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{breakfast.title}</h5>
              <p className="card-text">{breakfast.Precio}</p>
              <button key={e} name={breakfast.title} value={breakfast.Precio} onClick={this.addOrder} className="btn btn-primary">Pedir</button>
            </div>
          </div>
        </div>

      )
    })
    return (
      <div className="row">
        {breakfast}
      </div>
    );
  }

}
export default Food;