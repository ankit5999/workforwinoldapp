import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./Resumebuilding/Resume";
import Resumesource from "./Resumebuilding/Resumesourse";
import Bloglink from "../Blog/BlogLink";
import Web1sourcecode from "./Web1sourcecode";
import Christmas from "./Christmas";
import Pythontexteditor from './Python projects/Pythontexteditor';
import Snakegame from './Python projects/Snakegame';


function Projectslink() {
  return (
    <>
      <Switch>
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/resumesource" component={Resumesource} />
        <Route exact path="/web-development-project1-sourcecode" component={Web1sourcecode} />
        <Route exact path="/merry-christmas-2020" component={Christmas} />
        <Route exact path='/how-to-build-software-in-python' component={Pythontexteditor} />
        <Route exact path='/snake-game-in-python' component={Snakegame} />
        <Bloglink />
      </Switch>
    </>
  );
}

export default Projectslink;
