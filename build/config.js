"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET_KEY = exports.PORT = exports.MONGODB_URI = exports.AUTH_MS_URL = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = exports.MONGODB_URI = process.env.MONGODB_URI;
var PORT = exports.PORT = process.env.PORT || 4000;
var SECRET_KEY = exports.SECRET_KEY = process.env.SECRET;
var AUTH_MS_URL = exports.AUTH_MS_URL = process.env.AUTH_MS_URL;