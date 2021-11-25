
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat} from "@apollo/client"
import * as Routes from './routes';

import { AddExpense, CreateEvent,EditProfile, Event,Help, Home, Login, Register, ResetPassword} from './pages';
import { PrivateRoute } from "./components";
import {GlobalStyles} from './GeneralStyles.style';

const httpLink = new HttpLink({ uri: 'https://iou-api.onrender.com/graphql'});
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => {
    const token = localStorage.getItem('token');
    if(!token){
      return {
        headers: {
          headers
        }
      };
    }

    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }
  });

  return forward(operation);
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <GlobalStyles />
        <Router forceRefresh={true}>
          <Switch>
            <Route path={Routes.AUTH_LOGIN} component={ Login } />
            <Route path={Routes.AUTH_REGISTER} component={ Register } />
            <Route path={Routes.HELP} component={ Help } />
            <PrivateRoute path={Routes.Event} component={ Event }  />
            <PrivateRoute path={Routes.Edit_Profile} component={ EditProfile } />
            <PrivateRoute path={Routes.Reset_Pass} component={ ResetPassword }  />
            <PrivateRoute path={Routes.Create_Event} component={ CreateEvent }  />
            <PrivateRoute path={Routes.Add_Expense} component={ AddExpense }  />
            <Redirect from={Routes.HOME} to={Routes.LANDING}/>
            <PrivateRoute path={Routes.LANDING} component={ Home } />
            </Switch>
        </Router>
      </div>
    </ApolloProvider>
    

  );
}

export default App;
