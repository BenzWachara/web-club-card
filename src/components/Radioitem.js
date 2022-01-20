import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Radioitems extends Component {
    render(){
        return(
            <label id={this.props.buttom} className="box-btn-slide">
                <Link to={this.props.tolink}><label className={this.props.activeradio} className="manual-btn"/></Link>
            </label>
        )
    }
}

export default Radioitems;