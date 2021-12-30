import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Gate2020 from './Gate2020';
import Developervsdesigner from './Developervsdesigner';
import Googleinterview from './Googleinterview';
import Integrategit from './Integrategit';
import Datascienceinternship from './datascienceinternship';
import Googleheadquater from './Googleheadquater';
import Machinedays from './Machinedays';
import Gtquestion from './Gtquestion';
import PPT from './Pptlink';
import Courselink from '../Courses/Courselink';





function Bloglink() {
    return (
        <>
        <Switch>
        <Route exact path='/how-to-prepare-for-gate-cse-without-coaching' component={Gate2020} />
        <Route exact path='/web-developer-vs-web-designer' component={Developervsdesigner} />
        <Route exact path='/how-to-get-interview-at-google' component={Googleinterview} />
        <Route exact path='/integrate-git-bash-with-vscode' component={Integrategit} />
        <Route exact path='/how-to-get-a-data-science-internship-in-india' component={Datascienceinternship} />
        <Route exact path='/inside-google-headquarter' component={Googleheadquater} />
        <Route exact path='/21-days-of-machine-learning' component={Machinedays} />
        <Route exact path='/google-most-tricy-interview-questions' component={Gtquestion} />
        <Route exact path='/ppt' component={PPT} />
        <Courselink />
        </Switch>
        </>
    )
};

export default Bloglink;
