import React, { Component } from 'react';
import Radioitems from '../components/Radioitem';

class Slidepage extends Component{
    render(){
        const pathNames = window.location.pathname;
    return(
        <div className="slide-page">
                <div className="navigation-manual">
                        <Radioitems tolink="/jack" activeradio={pathNames.toString() === "/jack" ? 'manual-btn active' : 'manual-btn'}></Radioitems>
                        <Radioitems tolink="/queen" activeradio={pathNames.toString() === "/queen" ? 'manual-btn active' : 'manual-btn'}></Radioitems>
                        <Radioitems tolink="/king"></Radioitems>
                        <Radioitems tolink="/joker"></Radioitems>
                        <Radioitems tolink="/contact"></Radioitems>
                    </div>
        </div>
    );
    }
}

export default Slidepage;