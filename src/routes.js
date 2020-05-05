import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Account/Login/Login';

import App from './Blog/App';
import Home from './Blog/Pages/Home';
import Sobre from './Blog/Pages/Sobre';
import Categorias from './Blog/Pages/Categorias';
import Contato from './Blog/Pages/Contato';

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
            <BlogRoute path="/sobre"> 
                <Sobre /> 
            </BlogRoute>
            <BlogRoute path="/categorias"> 
                <Categorias /> 
            </BlogRoute>
            <BlogRoute path="/contato"> 
                <Contato /> 
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