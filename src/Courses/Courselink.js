import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contest from '../Contest/Contest';
import Reactcourse from './Reactcourse';




function Courselink() {
    return (
        <>
        <Switch>
        <Route exact path='/reactcourse' component={Reactcourse} />
        <Contest />
        </Switch>
        </>
    )
};

export default Courselink;
