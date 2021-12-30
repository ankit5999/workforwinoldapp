import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CompetitiveCoding1 from './Competitive-Coding1';
import CompetitiveCoding2 from './Competitive-Coding2';
import CompetitiveCoding3 from './Competitive-Coding3';
import Twosum from './CompetitiveCoding/Twosum';
import Projectslink from '../Project/Projectslink';



function Codinglink() {
    return (
        <>
        <Switch>
        <Route exact path='/competitive-coding1' component={CompetitiveCoding1} />
        <Route exact path='/competitive-coding2' component={CompetitiveCoding2} />
        <Route exact path='/competitive-coding3' component={CompetitiveCoding3} />
        <Route exact path='/twosum' component={Twosum} />
        <Projectslink />
        </Switch>
        </>
    )
};

export default Codinglink;
