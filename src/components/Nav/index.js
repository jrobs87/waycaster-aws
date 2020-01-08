import React from 'react';

import './index.css';

export default class Nav extends React.Component {
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
            <div className="wrapper">
            <div className={!this.state.data ? "nav-modal-smooth" : "nav-modal-smooth active"}></div>
            <div className="logo">
                
            </div>
                {/* <Gallery photos={this.photos} lightbox /> */}
                <div className={!this.state.data ? "nav-trigger" : "nav-trigger active"} onClick={this.load}>
                <div className={!this.state.data ? "nav-trigger_text" : "nav-trigger_text active"}>
                    <div className={!this.state.data ? "menu-open" : "menu-open active"}>MENU</div>
                    <div className={!this.state.data ? "menu-close" : "menu-close active"}>CLOSE</div>
                </div>
                </div>

                <div className={!this.state.data ? "nav-content" : "nav-content active"}>
                <div className={!this.state.data ? "nav-modal-inner" : "nav-modal-inner active"}></div>

                    <div className={!this.state.data ? "nav-elements" : "nav-elements active"}>
                        <div onClick={this.load}>photography</div>
                        <p><strong className="flex">My portfolio.</strong>  A selection of curated images spanning life.</p>
                        <div onClick={this.load}>fux with me</div>
                        <p><strong className="flex">Don't be a stranger. </strong>Let's get acquainted in 2020.</p>
                        <div onClick={this.load}>GO HOME</div>
                        <p><strong className="flex">Take me home, country roads.</strong> The homepage.</p>
                    </div>
                </div>
            </div>
        )
    }
}