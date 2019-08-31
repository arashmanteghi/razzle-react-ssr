import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Link } from 'react-router-dom'

import logo from './react.svg';
import './App.css';

const App = ({ routes, initialData }) => {
  return routes
    ? <div className="App">
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to Razzle</h2>
          </div>
          <ul className="Home-resources">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
              <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
              <a href="https://palmer.chat">Community Slack</a>
            </li>
          </ul>
        </div>
        <Switch>
          {routes.map((route, index) => {
            // pass in the initialData from the server or window.DATA for this
            // specific route
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props =>
                  React.createElement(route.component, {
                    ...props,
                    initialData: initialData[index] || null,
                  })}
              />
            );
          })}
        </Switch>
      </div>
    : null;
};

export default App;
