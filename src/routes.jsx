import React from 'react';
import NavBar from './components/HomePage/NavBar';
import Homepage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import AboutPage from './components/AboutPage';
import CreateResumePage from './components/CreateResumePage';
import HelpPage from './components/HelpPage';
import LoginPage from './components/LoginPage';
import MobileMenu from './components/MobileMenuPage';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import history from './utilities/history';

const routes = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" render={()=><Homepage />} />
                        <Route path="/signup" render={()=><SignUpPage />} />
                        <Route path="/about" render={()=><AboutPage />} />
                        <Route path="/new" render={()=><CreateResumePage />} />
                        <Route path="/help" render={()=><HelpPage />} />
                        <Route path="/login" render={()=><LoginPage />} />
                        <Route path="/menu" render={()=><MobileMenu />} />
                        
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default routes;
