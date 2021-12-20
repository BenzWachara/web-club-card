import React, { Component } from 'react';
import Radioitems from '../components/Radioitem';

import K1 from '../img/K1.png'
import K2 from '../img/K2.png'
import KKKK from '../img/KKKK.png'
import K3 from '../img/K3.png'
import K4 from '../img/K4.png'

class Queencard extends Component{
    render(){
    return(
        <section className="body-content">
            <div className="content-block">
            <div className="content-card">
                <div className="size-text"><h1>CARD Queen</h1></div>
                <h2>KING OF SPADES</h2>
                <p className="description-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn-more-info">MORE INFO</button>
                
            </div>
            <div className="show-card">
                <div className="c1">
                    <div className="c2">
                    <div className="line-card"></div></div>
                    <img src={KKKK} alt="KKKK.png" className="play-card tage-front"/>
                    <img src={K1} alt="K1.png" className="play-card card-pic1"/>
                    <img src={K2} alt="K2.png" className="play-card card-pic2"/>
                    <img src={K3} alt="K3.png" className="play-card card-text"/>
                    <img src={K4} alt="K4.png" className="play-card card-text"/>
                    
                </div>
                <div className="slide-page">
                <div className="navigation-manual">
                        <Radioitems tolink="/jack"></Radioitems>
                        <Radioitems tolink="/queen"></Radioitems>
                        <Radioitems tolink="/king"></Radioitems>
                        <Radioitems tolink="/joker"></Radioitems>
                        <Radioitems tolink="/contact"></Radioitems>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
    }
}

export default Queencard;