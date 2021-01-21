import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigationaitems from '../NavigationItems/NavigationItems'


const toolbar = (props) => (

<header className = {classes.Toolbar}>

    <div onClick = {props.SideDrawer}>MENU</div>

    <Logo height='80%'/>

    <nav className={classes.DesktopOnly}>
        <Navigationaitems />
    </nav>

</header>

)

export default toolbar;