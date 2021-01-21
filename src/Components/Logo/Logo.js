import React from 'react'
import burgerlogo from '../../assest/images/original.png'
import classes from './Logo.module.css'
const logo = (props) => (
    <div className= {classes.Logo} style={{height:props.height}}>
<img src = {burgerlogo} />
</div>
)

export default logo;