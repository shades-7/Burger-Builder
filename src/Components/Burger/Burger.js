import React from 'react';

import classes from './Burger.module.css';
import BurgerIngrident from './BurgerIngrident/BurgerIngrident'


const Burger = (props) => {
    let transformedIngridents = Object.keys(props.ingridients)
    .map(igKey =>{
        return [...Array(props.ingridients[igKey])].map((_,i) => {
            return <BurgerIngrident key={igKey +i} type={igKey} />
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[])

    if(transformedIngridents.length === 0){
        transformedIngridents = <p>please Add ingridients</p>
    }
return(
        <div className = {classes.Burger}>
        <BurgerIngrident type = "bread-top" />
      {transformedIngridents}
        
        
        <BurgerIngrident type = "bread-bottom"/>

        
        </div>
    )
}

export default Burger;