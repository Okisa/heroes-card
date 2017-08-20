import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeContainer from './home/HomeContainer';
import Card from './card/Card';


export default (
    <Route path="/">
        <IndexRoute component={HomeContainer} />
        <Route path="/card" component={Card} />
    </Route>
);