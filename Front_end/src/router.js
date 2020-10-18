import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './pages/mainPage';
import RegisterPage from './pages/registerPage'
import accessPage from './pages/accessPage'
import ComponenteHome from './components/teste'
import Arsenal from './pages/home'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/access" component={accessPage} />
                <Route path="/home" component={ComponenteHome} />
                <Route path="/arsenal"  component={Arsenal} />
            </Switch> 
        </BrowserRouter>
    )
}

export default Routes;