import React , {Component}from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        ShowSideDrawer: false,
    }
    showSideDrawerHandler = () => {
        this.setState({ShowSideDrawer: false})
                }

    SideDrawerappear = () => {
        this.setState((prevState) => {
            return{
                ShowSideDrawer: !prevState.ShowSideDrawer
            }
        })
    }            

    render(){
        return (
            
            <Aux>
        <Toolbar SideDrawer={this.SideDrawerappear}/>
        
        
        <SideDrawer 
        open={this.state.ShowSideDrawer}
        closed={this.showSideDrawerHandler}/>

        <main className={classes.Content} >
            {this.props.children}
        </main>
        </Aux>

        )
    }
}


export default  Layout; 