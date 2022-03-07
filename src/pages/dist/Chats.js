/* eslint-disable no-redeclare */
'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
exports.__esModule = true;
exports.Chats = void 0;
/* eslint @typescript-eslint/no-var-requires: "off" */
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
var Form_1 = require('../components/Form/Form');
var MessageList_1 = require('../components/MessageList/MessageList');
var nanoid_1 = require('nanoid');
var ChatList_1 = require('../components/ChatList/ChatList');
var styles_1 = require('@mui/material/styles');
var Box_1 = require('@mui/material/Box');
var Paper_1 = require('@mui/material/Paper');
var Grid_1 = require('@mui/material/Grid');
var defaultMessages = {
  chat1: [{ author: 'User1', text: ' ', id: '1' }],
  chat2: [{ author: 'User2', text: ' ', id: '1' }],
  chat3: [{ author: 'User3', text: ' ', id: '1' }],
};
var chats = [
  { autor: 'User 1', id: '1' },
  { autor: 'User 2', id: '2' },
  { autor: 'User 3', id: '3' },
];
exports.Chats = function () {
  var _a = react_1.useState(defaultMessages),
    messages = _a[0],
    setMessages = _a[1];
  var chatId = react_router_dom_1.useParams().chatId;
  var Item = styles_1.styled(Paper_1['default'])(function (_a) {
    var theme = _a.theme;
    return __assign(
      __assign(
        { backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff' },
        theme.typography.body2
      ),
      {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }
    );
  });
  var sendMessage = react_1.useCallback(
    function (_a) {
      var text = _a.text,
        author = _a.author;
      setMessages(function (prevMessages) {
        var _a;
        return __assign(
          __assign({}, prevMessages),
          ((_a = {}),
          (_a['chat' + chatId] = __spreadArrays(prevMessages['chat' + chatId], [
            {
              id: nanoid_1.nanoid(),
              author: author,
              text: text,
            },
          ])),
          _a)
        );
      });
    },
    [chatId]
  );
  react_1.useEffect(
    function () {
      var _a;
      if (
        ((_a = messages['chat' + chatId]) === null || _a === void 0
          ? void 0
          : _a.length) &&
        messages['chat' + chatId][messages['chat' + chatId].length - 1]
          .author === 'User'
      ) {
        var timer_1 = setTimeout(function () {
          return sendMessage({
            author: 'BOT',
            text: 'Hello, I am Bot',
          });
        }, 1500);
        return function () {
          clearTimeout(timer_1);
        };
      }
    },
    [messages, chatId, sendMessage]
  );
  if (!messages['chat' + chatId]) {
    return react_1['default'].createElement(react_router_dom_1.Redirect, {
      to: '/',
    });
  }
  return react_1['default'].createElement(
    Box_1['default'],
    { sx: { flexGrow: 1 } },
    react_1['default'].createElement(
      Grid_1['default'],
      { container: true, spacing: 2 },
      react_1['default'].createElement(
        Grid_1['default'],
        { item: true, xs: 4 },
        react_1['default'].createElement(
          Item,
          null,
          react_1['default'].createElement(MessageList_1.MessageList, {
            messages: messages['chat' + chatId],
          })
        ),
        react_1['default'].createElement(
          Item,
          null,
          react_1['default'].createElement(Form_1.Form, {
            addMessage: sendMessage,
          })
        )
      ),
      react_1['default'].createElement(
        Grid_1['default'],
        { item: true, xs: 4 },
        react_1['default'].createElement(
          Item,
          null,
          react_1['default'].createElement(ChatList_1.ChatList, {
            chats: chats,
          })
        )
      )
    )
  );
};
