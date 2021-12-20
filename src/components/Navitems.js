import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navitems extends Component {
    /*
    constructor(props){
        super(props);
        this.state = {
            'active': ''
        }
        
        const currentLocation = window.location.tolink;
        const menuItem = document.querySelectorAll('a');
        const menuLenght = menuItem.length
        for (let i=0; i<menuLenght; i++){
            if(menuItem[i].tolink === currentLocation){
                menuItem[i].className = "active"
            }
        }
        
    }
    */
    render(){
        return(
            <li id={this.props.item}>
                <Link to={this.props.tolink}>{this.props.item}</Link>
            </li>
        )
    }
    
}

export default Navitems;
