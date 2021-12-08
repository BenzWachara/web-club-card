import React, { Component } from 'react';
import Playcard from '../img/card-king.png'

class Kingcard extends Component{
    render(){
    return(
        <section className="body-content">
            <div className="content-block">
            <div className="content-card">
                <div className="size-text"><h1>CARD KING</h1></div>
                <h2>KING OF SPADES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn-more-info">MORE INFO</button>
                
            </div>
            <div className="show-card">
            <img src={Playcard} alt="card-king.png" className="card-king"/>

            </div>
            </div>
        </section>
    );
    }
}

export default Kingcard;