"use strict";
exports.__esModule = true;
exports.ChatList = void 0;
var react_1 = require("react");
var Box_1 = require("@mui/material/Box");
var List_1 = require("@mui/material/List");
var ListItem_1 = require("@mui/material/ListItem");
var ListItemButton_1 = require("@mui/material/ListItemButton");
var ListItemIcon_1 = require("@mui/material/ListItemIcon");
var ListItemText_1 = require("@mui/material/ListItemText");
var Avatar_1 = require("@mui/material/Avatar");
var react_router_dom_1 = require("react-router-dom");
exports.ChatList = function (_a) {
    var chats = _a.chats;
    return (react_1["default"].createElement(Box_1["default"], { sx: { width: '100%', maxWidth: 360, bgcolor: 'background.paper' } },
        react_1["default"].createElement("nav", { "aria-label": "main mailbox folders" },
            react_1["default"].createElement(List_1["default"], null, chats.map(function (chat) { return (react_1["default"].createElement(ListItem_1["default"], { disablePadding: true, key: chat.id },
                react_1["default"].createElement(ListItemButton_1["default"], null,
                    react_1["default"].createElement(ListItemIcon_1["default"], null,
                        react_1["default"].createElement(Avatar_1["default"], null)),
                    react_1["default"].createElement(ListItemText_1["default"], null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/chats/" + chat.id }, chat.autor))))); })))));
};
