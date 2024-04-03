"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _helmet = _interopRequireDefault(require("helmet"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _vehicleRoutes = _interopRequireDefault(require("./routes/vehicle.routes.js"));
var _documentDriverRoutes = _interopRequireDefault(require("./routes/documentDriver.routes.js"));
var _infoDriverRoutes = _interopRequireDefault(require("./routes/infoDriver.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set('pkg', _package["default"]);
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.set("json spaces", 4);
app.use('/api/v1', _indexRoutes["default"]);
app.use('/api/v1/vehicles', _vehicleRoutes["default"]);
app.use('/api/v1/document-driver', _documentDriverRoutes["default"]);
app.use('/api/v1/driver', _infoDriverRoutes["default"]);
var _default = exports["default"] = app;