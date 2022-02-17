import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import Auth from './view/auth';

const Routes = () => (
    <Router>
        <Suspense fallback={<div className='d-flex justify-content-center mt-5 pt5'><CircularProgress /></div>}>
            <Switch>
                <Route exact path='/' component={Auth} />
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;
