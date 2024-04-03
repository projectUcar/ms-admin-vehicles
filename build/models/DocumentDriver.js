"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var documentDriverSchema = new _mongoose["default"].Schema({
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  documentType: {
    type: String,
    required: true
  },
  documentNumber: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var DocumentDriver = _mongoose["default"].model('DocumentDriver', documentDriverSchema);
var _default = exports["default"] = DocumentDriver;