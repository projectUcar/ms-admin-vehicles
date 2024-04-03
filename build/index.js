"use strict";

var _app = _interopRequireDefault(require("./app"));
var _config = require("./config.js");
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = _config.PORT || 8080;
_app["default"].listen(port);
console.log('Server listening on port', port);