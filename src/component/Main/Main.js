import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Form from './Form/Form';
import EditHero from './EditHero/EditHero';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Form} />
                <Route path="/edit/:id" component={EditHero} />
            </Switch>
        </div>
    )
}

export default Main;