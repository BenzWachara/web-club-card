import React, { Component } from 'react';
import Radioitems from '../components/Radioitem';


class Contactus extends Component{
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

export default Contactus;