import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Sintomas from "./pages/Sistomas"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sintomas" component={Sintomas}/>
            </Switch>
        </BrowserRouter>
    )
}