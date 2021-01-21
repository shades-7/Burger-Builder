import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
const INGRIDENTS_PRICE={
    meat: 1.3,
    salad:0.5,
    bacon:0.7,
    cheese:0.4
}

class BurgerBuilder extends Component {
    state = {
        ingridients: {
            meat: 0,
            salad:0,
            bacon:0,
            cheese:0
        },
        totalPrice:4,
        purchasable : false,
        purchasing: false
    }

    updatePurchasable=(ingridients)=> {
        const sum = Object.keys(ingridients)
        .map(igKey => {
            return ingridients[igKey]
        })
        .reduce((sum , el) => {
            return sum+el
        },0)
        this.setState ({purchasable: sum > 0})

    }

    addIngridentsHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedcount = oldCount+1;
        const updatedIngridents = {
            ...this.state.ingridients
        };
        updatedIngridents[type] = updatedcount;
        const priceAddition = INGRIDENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingridients : updatedIngridents , totalPrice:newPrice})
        this.updatePurchasable(updatedIngridents)
    }

    removeIngridentsHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedcount = oldCount-1;
        const updatedIngridents = {
            ...this.state.ingridients
        };
        updatedIngridents[type] = updatedcount;
        const priceDeduction = INGRIDENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ingridients : updatedIngridents , totalPrice:newPrice})
        this.updatePurchasable(updatedIngridents)
    }

    purchaseHandler=()=> {
        this.setState({purchasing:true})
    }

    purchasingDelete=()=>{
        this.setState({purchasing:false})
    }

    purchaseContinue=()=>{
        return alert('your order is placed')
    }

    render(){
        const disabledInfo = {
            ...this.state.ingridients
        }
        for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0}
        return(
            <Aux>
              
<Burger ingridients = {this.state.ingridients}/>
<Modal show={this.state.purchasing}
modalcancel={this.purchasingDelete}>
    <OrderSummary 
    price={this.state.totalPrice}
    ingridients = {this.state.ingridients} 
    purchaseDelete={this.purchasingDelete}
    purchaseContinue={this.purchaseContinue}
    />
</Modal>
              
               <BuildControls 
               addIngrident = {this.addIngridentsHandler}
               removeIngrident = {this.removeIngridentsHandler}
               disabled={disabledInfo}
               price={this.state.totalPrice}
               purchasable = {this.state.purchasable}
               ordered={this.purchaseHandler}
               />
            </Aux>

        );
    }
}

export default BurgerBuilder;