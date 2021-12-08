import React, { Component } from 'react'
import profilepic from '../img/logo cc.png'
import Navitems from './Navitems'

//Bebas Neue Regular
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render(){
    return(
    <section className="content-header">
        <div className="header-block">
        <div className="box-logo">
            <img src={profilepic} alt="logo cc.png" className="logo-css"/>
        </div>
        <div className="navbar-item">
            
            <nav>
                <ul>
                    <Navitems item ="Jack" tolink="/jack"></Navitems>
                    <Navitems item ="Queen" tolink="/queen"></Navitems>
                    <Navitems item ="King" tolink="/king"></Navitems>
                    <Navitems item ="Joker" tolink="/joker"></Navitems>
                    <Navitems item ="Contact" tolink="/contact"></Navitems>
                </ul>
                </nav>
        </div>
        </div>
    </section>
    );
    }
}

export default Header;