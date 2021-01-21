import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const Control = [
    {label: 'Salad' , type:'salad'},
    {label: 'Cheese' , type:'cheese'},
    {label: 'Meat' , type:'meat'},
    {label: 'Bacon' , type:'bacon'},
]

const buildControls = (props) => (
        <div className = {classes.BuildControls}>
        <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {Control.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added = {() => {props.addIngrident(ctrl.type)}}
            removed={() => {props.removeIngrident(ctrl.type)}}
            disabled={props.disabled[ctrl.type]}
            />
            
            
        ))}
        <button 
        disabled = {!props.purchasable}
        className = {classes.OrderButton}
        onClick = {props.ordered}
        >ORDER NOW</button>
        </div>
    
)

export default buildControls