import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Account/Login/Login';

import Blog from './Blog/Blog';
import Home from './Blog/Home';
import Sobre from './Blog/Sobre';

function BlogRoute({children, ...rest}) {
    return (
        <Route
            {...rest}
            render={() =>
                <Blog count="10">
                    {(children)}
                </Blog>
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