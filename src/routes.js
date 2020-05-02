import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Account/Login/Login';

import App from './Blog/App';
import Home from './Blog/Home';
import Sobre from './Blog/Sobre';

function BlogRoute({children, ...rest}) {
    return (
        <Route
            {...rest}
            render={() =>
                <App count="10">
                    {(children)}
                </App>
            } />
    )
} 

function Routes() { 
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <BlogRoute path="/Sobre"> 
                <Sobre /> 
            </BlogRoute>
            <BlogRoute path="/blog"> 
                <Home /> 
            </BlogRoute>
            <BlogRoute path="/" exact> 
                <Home /> 
            </BlogRoute>
        </Switch>
    );
}
export default Routes;