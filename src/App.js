import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Team from "./components/Team";
import SingleTeam from "./components/SingleTeam";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
   return (
      <>
         <Router>
            <Nav />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/service/:id" component={SingleTeam} />
            </Switch>
         </Router>
      </>
   );
}

export default App;
