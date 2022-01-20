import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

class Navitems extends Component {

    render(){
        const namePaht = window.location.pathname
        const namelink = this.props.tolink
        
        return(
            <li id={this.props.item} className={this.props.activeurl}>
                <Link to={this.props.tolink} onClick={this.props.activenav.bind(this, this.props.item)}>{this.props.item}</Link>
            </li>
        )
    }
    
}

export default Navitems;
