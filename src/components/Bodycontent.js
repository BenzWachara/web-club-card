import React from 'react';
import Playcard from '../img/card-king.png'

function Bodycontent(){
    return(
        <section className="body-content">
            <div className="content-card">
                <h1>CARD KING</h1>
                <h2>KING OF SPADES</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="show-card">
            <img src={Playcard} alt="card-king.png" className="card-king"/>
            </div>
        </section>
    );
}

export default Bodycontent;