import React from 'react';
import App from './App';
import Login from './Login';
import { MemoryRouter,Route,Switch,Redirect } from 'react-router';
import {isAuthenticated} from './Auth'

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={
        props=> (
            isAuthenticated() ? (<Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
            )
        )
    }
        
    />
    )
 
class Main extends React.Component{


    render(){
        return(
            <MemoryRouter>
                    <Switch>
                        <PrivateRoute exact path="/" component={App} />
                        <Route exact path='/login' component={Login}/>
                    </Switch>
            </MemoryRouter>)
    }

}

export default Main