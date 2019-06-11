import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
 import Navar from "./components/Navar";
 import Menu from "./components/Menu";
 import Kitchen from './components/Kitchen'


class App extends Component{
  render(){
    return(
   <React.Fragment>
       <Navar></Navar>
     <Switch>
      <Route  exact path="/" component={Menu}/>
      <Route path="/kitchen" component={Kitchen}/>
     </Switch>
       
     </React.Fragment>  
      //  <div className="header">
      //    <header className="headerApp">
      //      <h1>Welcome to Burguer Queen</h1>
      //    </header>
      //  </div>
    );
  }
}
export default App;

