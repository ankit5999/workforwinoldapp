import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contest from './Contest';



function Codinglink() {
    return (
        <>
        <Switch>
        <Route exact path='/contest' component={Contest} />
        </Switch>
        </>
    )
};

export default Codinglink;
