import React, { Component } from 'react'
import {data} from './components/Data';

const providerDatab = React.createContext();

let dataB = data.filter(item=>(item.type ==="breakfast"))
let dataD = data.filter(item=>(item.type ==="dinner"))

class DatabProvider extends Component {
    
    
    state = {
        menu:[],
        dataB:dataB,
        dataD:dataD,
        comanda:[],
        comandaTotal:0
    }
    setProducts=() =>{
        let tempProducts =[];
        data.forEach(item =>{
            const singleItem ={...item};
            tempProducts = [...tempProducts, singleItem];
            
        });
        this.setState({
            menu:tempProducts,
        });

    }

    componentDidMount(){
        this.setProducts();
    }
    getItem = (id) =>{
        const product = this.state.menu.find(item => item.id ===id);
        return product;
    }
    
    addTotal =()=>{let total=0;
    this.state.comanda.map(item=>(total += item.total))
    this.setState(()=>{
        return{comandaTotal:total}
    })
}
    
 addToComanda = (id) =>{
     let orderProducts = [...this.state.menu];
     
     
      const index = orderProducts.indexOf(this.getItem(id));
       const product = orderProducts[index];
       product.status = true;
       product.count = 1;
       const price = product.value;
       product.total = price

       this.setState(()=>{
           return{menu:orderProducts, comanda:[...this.state.comanda, product] };
       }, ()=>{this.addTotal();    
        console.log(this.state.comandaTotal);
        
       }); 
     }
        
    
    increment = (id) =>{
        console.log('this is increment'); 
    }
    decrement = (id) =>{
        console.log('this is decrement'); 
    }
    removeItem = (id) =>{
        console.log('this is remove item');
        
    }
    clearComanda = (id) =>{
   let tempProducts = [...this.state.menu];
   let tempOrder = [...this.state.comanda];
   
   tempOrder = tempOrder.filter(item => item.id !==id);
   const index = this.getItem(id);
   console.log(index);
   

//    let removeOrder = tempProducts[index];
//    removeOrder.status = false;
//    removeOrder.count = 0;
//    removeOrder.value = 0;

   this.setState(()=>{
       return{
           order:[...tempOrder],
           menu:[...tempProducts]
       }
   },()=>{
       this.addTotal();
   })
    
    }

    render() {
        return (
            <providerDatab.Provider value ={{
                ...this.state,
                addToComanda: this.addToComanda,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearComanda:this.clearComanda

            }}>
                {this.props.children}
            </providerDatab.Provider>
        )
    } 
}

const ConsumerDatab = providerDatab.Consumer;

export {DatabProvider, ConsumerDatab}