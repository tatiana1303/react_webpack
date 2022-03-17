"use strict";
exports.__esModule = true;
exports.Profile = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../store/profile/actions");
exports.Profile = function () {
    var visible = react_redux_1.useSelector(function (state) { return state.visible; });
    var _a = react_redux_1.useSelector(function (state) { return state; }), showName = _a.showName, name = _a.name;
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h2", null, "Profile page"),
        react_1["default"].createElement("input", { type: "checkbox", checked: visible }),
        showName && react_1["default"].createElement("p", null, name),
        react_1["default"].createElement("button", { onClick: function () { return dispatch(actions_1.toggleVisible); } }, "change profile")));
};
