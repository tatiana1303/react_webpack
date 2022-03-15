'use strict';
/* eslint-disable linebreak-style */
exports.__esModule = true;
exports.App = void 0;
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
require('./App.css');
var Chats_1 = require('./pages/Chats');
var Main_1 = require('./pages/Main');
var Profile_1 = require('./pages/Profile');
var NavBar_1 = require('./components/NavBar/NavBar');
exports.App = function () {
  return react_1['default'].createElement(
    react_router_dom_1.BrowserRouter,
    null,
    react_1['default'].createElement(NavBar_1.NavBar, null),
    react_1['default'].createElement(
      react_router_dom_1.Switch,
      null,
      react_1['default'].createElement(react_router_dom_1.Route, {
        exact: true,
        path: '/',
        component: Main_1.Main,
      }),
      react_1['default'].createElement(
        react_router_dom_1.Route,
        { path: '/chats' },
        react_1['default'].createElement(
          react_router_dom_1.Route,
          { exact: true, path: '/chats' },
          react_1['default'].createElement(react_router_dom_1.Redirect, {
            to: '/chats/1',
          })
        ),
        react_1['default'].createElement(react_router_dom_1.Route, {
          path: '/chats/:chatId',
          component: Chats_1.Chats,
        })
      ),
      react_1['default'].createElement(react_router_dom_1.Route, {
        exact: true,
        path: '/profile',
        component: Profile_1.Profile,
      })
    )
  );
};
