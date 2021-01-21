import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const ordersummary = (props) => {
    const ingridientsSummary = Object.keys(props.ingridients)
    .map(igkey => {
        return <li><span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingridients[igkey]}</li>
    })
    return (
<Aux>
    <Button btnTypes="left" clicked={props.purchaseDelete}>X</Button>
<h3>Your Order</h3> 
<p>A delicious burger with the following ingridients:</p>
<ul>
{ingridientsSummary}
</ul>
<p><strong>Total Price: {props.price}</strong></p>
<p>Continue to Checkout?</p>
<Button btnTypes="Danger" clicked={props.purchaseDelete}>CANCEL</Button>
<Button btnTypes="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
</Aux>
    )
}
export default ordersummary