"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_router_1 = require("react-router");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
exports.NavBar = function () {
    return (react_1["default"].createElement(Box_1["default"], { sx: { display: 'flex', alignItems: 'center', textAlign: 'center' } },
        react_1["default"].createElement(Typography_1["default"], { sx: { minWidth: 100, fontSize: 20 } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Main")),
        react_1["default"].createElement(Typography_1["default"], { sx: { minWidth: 100, fontSize: 20 } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/chats" }, "Chats")),
        react_1["default"].createElement(Typography_1["default"], { sx: { minWidth: 100, fontSize: 20 } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/profile" }, "Profile"))));
};
exports["default"] = react_router_1.withRouter(exports.NavBar);
