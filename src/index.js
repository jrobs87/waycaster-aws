// Import React + ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Import Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Routes (pages).
import Home from './routes/1-Home';
import Photography from './routes/2-Photography';
import Contact from './routes/3-Contact';
import FourOhFour from './routes/10-FourOhFour';
import Sandbox from './routes/7-pageSandbox';

// Import Components.
import Nav from './components/Nav';

// Import Bootstrap basic styling (additional Bootstrap themes can be integrated here).
import 'bootstrap/dist/css/bootstrap.min.css';

// Import stylesheets.
import './index.css';

// Declaring our app instance - can be named anything - eventually move to a Class Component to
// manage Global State (themes, user login status, etc.)

const App = (
    // Router must be the top level Component.  
    <Router>
        {/* Nav Options (insert Components here) */}
        <Nav />
        {/* Switch is used to provide a fallback route (404 page) */}
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/photography' component={Photography} />
            <Route path='/contact' component={Contact} />
            <Route path='/sandbox' component={Sandbox} />
            <Route component={FourOhFour} />
        </Switch>
    </Router>
)

// Call the render DOM method to render the app - entry point to HTML.
ReactDOM.render(App, document.getElementById('root'));

