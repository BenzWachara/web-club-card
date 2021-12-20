import { element } from 'prop-types';
import React, { Component } from 'react'
import profilepic from '../img/logo cc.png'
import Navitems from './Navitems'

//Bebas Neue Regular
class Header extends Component{
    
    constructor(props){
        super(props)
        
        
    }

      /* activeitem = (i) => {
            const currentLocation = window.location.href;
            const menuItem = document.querySelectorAll('li');
            const menuLenght = menuItem.length
            if(this.state.NavItemActive.length === ){

            }

        const currentLocation = window.location.href;
        const menuItem = document.querySelectorAll('li');
        const menuLenght = menuItem.length
        for (let i=0; i<menuLenght; i++){
            if(menuItem[i].href === currentLocation){
                menuItem[i].className = "active"
            }
        }
    }*/
      

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