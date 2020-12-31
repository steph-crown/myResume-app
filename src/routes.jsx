import React from 'react';
import NavBar from './components/HomePage/NavBar';
import Homepage from './components/HomePage';
import SignUpPage from './components/SignUpPage'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import history from './utilities/history';

const routes = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" render={()=><Homepage />} />
                        <Route path="/signup" render={()=><SignUpPage />} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default routes;
