"use strict";
exports.__esModule = true;
exports.MessageList = void 0;
var react_1 = require("react");
var Box_1 = require("@mui/material/Box");
var Paper_1 = require("@mui/material/Paper");
exports.MessageList = function (_a) {
    var messages = _a.messages;
    return (react_1["default"].createElement(Box_1["default"], { sx: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 400,
                height: 400
            }
        } },
        react_1["default"].createElement(Paper_1["default"], null,
            react_1["default"].createElement("ul", null, messages.map(function (message) { return (react_1["default"].createElement("li", { key: message.id, className: "Message-text" },
                message.author,
                ": ",
                message.text)); })))));
};
