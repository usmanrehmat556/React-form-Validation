import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class Router extends Component {
    state = {
        login : JSON.parse(localStorage.getItem('currentUser')) ? true : false
    }
    render() {
        const {login} = this.state;
        return( 
        <BrowserRouter>
            <Switch>
            <PrivateRoute  path="/dashboard" login={login} component={Dashboard} />
            <Route  exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
         )}

}

const PrivateRoute = ({component : Component , login , ...rest}) => {
    return(
    <Route 
      {...rest}
      render= {(props) => login ? 
              <Component exact {...props} /> :
               <Redirect to="/" />
             }
    />
    )
}

export default Router;