import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Other from './Other';
import Day from './components/Day';
import Week from './components/Week';
import Month from './components/Month';
import App from './App';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/other" component={Other} />
            <Route path="/week" component={Week} />
            <Route path="/day" component={Day} />
            <Route path="/month" component={Month} />
            </Switch>
        </BrowserRouter>
    );
}
