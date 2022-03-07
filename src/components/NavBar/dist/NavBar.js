'use strict';
exports.__esModule = true;
exports.NavBar = void 0;
/* eslint @typescript-eslint/no-var-requires: "off" */
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
var react_router_1 = require('react-router');
exports.NavBar = function () {
  return react_1['default'].createElement(
    'ul',
    null,
    react_1['default'].createElement(
      'li',
      null,
      react_1['default'].createElement(
        react_router_dom_1.Link,
        { to: '/' },
        'Main'
      )
    ),
    react_1['default'].createElement(
      'li',
      null,
      react_1['default'].createElement(
        react_router_dom_1.Link,
        { to: '/chats' },
        'Chats'
      )
    ),
    react_1['default'].createElement(
      'li',
      null,
      react_1['default'].createElement(
        react_router_dom_1.Link,
        { to: '/profile' },
        'Profile'
      )
    )
  );
};
exports['default'] = react_router_1.withRouter(exports.NavBar);
