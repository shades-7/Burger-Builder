import React from 'react'
import Logo from '../../Logo/Logo';
import Navigationaitems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css';
import Backdrop  from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidedrawer = (props) => {
    let attached = [classes.SideDrawer, classes.Close]
    if(props.open){
        attached = [classes.SideDrawer , classes.Open]
    }
    return (
        <Aux>
        <Backdrop show={props.open} cancled={props.closed}/>
        <div className={attached.join(' ')}>
        <Logo height='7%'/>
        <nav>
        <Navigationaitems />
        </nav>
        
        </div>
        </Aux>
    )
}

export default sidedrawer;