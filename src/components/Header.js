import React from 'react';
import profilepic from '../img/logo cc.png'
//Bebas Neue Regular
function Header(){
    return(
    <section className="content-header">
        <div className="header-block">
        <div className="box-logo">
            <img src={profilepic} alt="logo cc.png" className="logo-css"/>
        </div>
        <div className="navbar-item">
                <ul>
                    <li>
                        <a href="#">Jack</a>
                    </li>
                    <li>
                        <a href="#">Queen</a>
                    </li>
                    <li>
                        <a href="#">King</a>
                    </li>
                    <li>
                        <a href="#">Joker</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    
                </ul>
        </div>
        </div>
    </section>
    );
}

export default Header;