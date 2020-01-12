import React, { Component } from 'react';
import Panel from './panel';

const style = {
    width: '100%',
    height: '90vh',
    fontSize: '1em',
    // lineHeight: '0.66em',
    padding: '2em',
}

class ScrollTester extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollStatus: 'end',
            panelCurrent: 5,
            scrollDirection: 'down',
            panelNext: '',
            disableScroll: false,
            panels: [
                {
                    title: 'landing'
                },
                {
                    title: 'BORK',
                    blurb: 'A fun little project with a big heart.  Swipe-based dog adoption app modeled on Tinder features.',
                    year: '2019 June',
                    client: 'Georgia Tech - Conceptual Demo',
                    color: 'purple',
                },
                {
                    title: 'IMMERSIO',
                    blurb: 'A real-time language translation messenger app.  Cheers!',
                    year: '2019 August',
                    client: 'Georgia Tech - Conceptual Demo',
                    color: 'blue'
                },
                {
                    title: 'Shrug',
                    blurb: 'Date planning app for the laziest of us.  I use it all the time.',
                    year: 2019,
                    client: 'Georgia Tech',
                    color: 'orangered'
                },
                {
                    title: 'Atlanta CFO Forum',
                    blurb: "Job Board and Event Planning site for Atlanta's top exectuive talent.",
                    year: 2019,
                    client: 'The Atlanta CFO Forum',
                    color: 'navy'
                },
                {
                    title: 'Waycaster Allred',
                    blurb: "Job Board and Event Planning site for Atlanta's top exectuive talent.",
                    year: 2019,
                    client: 'Waycaster and Allred, Attorneys at Law',
                    color: 'crimson'
                },
                {
                    title: 'Popa Duck Lodge',
                    blurb: "Job Board and Event Planning site for Atlanta's top exectuive talent.",
                    year: 2019,
                    client: 'Waycaster and Allred, Attorneys at Law',
                    color: 'green'
                },{
                    title: 'Thank You',
                    blurb: null,
                    year: '',
                    client: 'tiktaalikdesign@gmail.com'
                }
            ]
        };
    }
  
    render() {
       
        // onScroll={this.handleScroll} onWheel={this.handleScroll}
        return <div style={style} >
            {/* <p>JOHN ROBERTSON</p>
            <br /> */}
            
        </div>
    }
}

export default ScrollTester
