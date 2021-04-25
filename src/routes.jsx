import React from 'react';
import Homepage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import AboutPage from './components/AboutPage';
import ProfileForm from './components/ProfileForm';
import HelpPage from './components/HelpPage';
import LoginPage from './components/LoginPage';
import MobileMenu from './components/MobileMenuPage';
import Profiles from './components/Dashboard/Profiles';
import Downloads from './components/Dashboard/Downloads';
import P404 from './components/P404'

import { Route, Router, Switch } from "react-router-dom";
import history from './utilities/history';

const routes = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" render={()=><Homepage />} /> 
                        <Route exact path="/signup" render={()=><SignUpPage />} /> 
                        <Route exact path="/about" render={()=><AboutPage />} />  
                        <Route exact path="/edit/:id/:page" component={ProfileForm} />
                        <Route exact path="/help" render={()=><HelpPage />} />
                        <Route exact path="/login" render={()=><LoginPage />} />
                        <Route exact path="/menu" render={()=><MobileMenu />} />
                        <Route exact path="/dashboard" render={() => <Profiles />} />
                        <Route exact path="/downloads" render={() => <Downloads />} />

                        <Route render={()=><P404 />} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default routes;
