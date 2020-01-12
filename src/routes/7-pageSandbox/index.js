import React from 'react';
import ScrollTester from '../../components/ScrollPanel/ScrollTester';

import './index.css';

export default class Sandbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        }

        this.load = this.load.bind(this);
    }

    // Simple Component Method
    load = () => {
        this.setState(({
            data: !this.state.data
        }))
        console.log(`Component updated from render() with updated state of ${this.state.data}`)
    };

    render() {
        return (
         <ScrollTester></ScrollTester>
        )
    }
}

