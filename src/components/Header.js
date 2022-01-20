import React, { Component } from 'react'
import profilepic from '../img/logo cc.png'
import Navitems from './Navitems'

//Bebas Neue Regular
class Header extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            'NavActiveItems' : ''
        }
    }

    activeitem = (item) =>{
        
        if(this.state.NavActiveItems.length >0){
            document.getElementById(this.state.NavActiveItems).classList.remove('active');
        }
        this.setState({'NavActiveItems' : item}, ()=>{
            document.getElementById(this.state.NavActiveItems).classList.add('active');
        })
    }

    render(){
        const pathNames = window.location.pathname;
        console.log(pathNames);
        const idJack = document.getElementById("Jack")


        const activePathname =()=>{
            if(pathNames.toString() === "/jack"){
                console.log("RUNNN!!");
            }
            else{
                console.log("NOOOOOB!!");
            }

        }

        activePathname();
    return(
    <section className="content-header">
        <div className="header-block">
        <div className="box-logo">
            <img src={profilepic} alt="logo cc.png" className="logo-css"/>
        </div>
        <div className="navbar-item">
        
            <nav>
                <ul>
                    <Navitems item ="Jack" tolink="/jack" activenav={this.activeitem} activeurl={pathNames.toString() === "/jack" ? 'active item-menu' : 'item-menu'}></Navitems>
                    <Navitems item ="Queen" tolink="/queen" activenav={this.activeitem} activeurl={pathNames.toString() === "/queen" ? 'active item-menu' : 'item-menu'}></Navitems>
                    <Navitems item ="King" tolink="/king" activenav={this.activeitem} activeurl={pathNames.toString() === "/king" ? 'active item-menu' : 'item-menu'}></Navitems>
                    <Navitems item ="Joker" tolink="/joker" activenav={this.activeitem} activeurl={pathNames.toString() === "/joker" ? 'active item-menu' : 'item-menu'}></Navitems>
                    <Navitems item ="Contact" tolink="/contact" activenav={this.activeitem} activeurl={pathNames.toString() === "/contact" ? 'active item-menu' : 'item-menu'}></Navitems>
                </ul>
                </nav>
        </div>
        </div>
    </section>
    );
    }
}

export default Header;