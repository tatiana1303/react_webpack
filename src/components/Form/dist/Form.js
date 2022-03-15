'use strict';
exports.__esModule = true;
exports.Form = void 0;
var react_1 = require('react');
var material_1 = require('@mui/material');
exports.Form = function (_a) {
  var addMessage = _a.addMessage;
  var _b = react_1.useState(''),
    text = _b[0],
    setText = _b[1];
  var textInput = react_1['default'].useRef();
  var handleText = function (ev) {
    ev.preventDefault();
    addMessage({
      text: text,
      author: 'User',
    });
    setText('');
  };
  return react_1['default'].createElement(
    'form',
    { onSubmit: handleText },
    react_1['default'].createElement(material_1.Input, {
      className: 'Input-btn',
      type: 'text',
      ref: textInput,
      value: text,
      onChange: function (ev) {
        return setText(ev.target.value);
      },
    }),
    react_1['default'].createElement(
      material_1.Button,
      { type: 'submit', variant: 'outlined' },
      '\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C'
    )
  );
};
