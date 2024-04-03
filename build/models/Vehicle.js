"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var vehicleSchema = new _mongoose["default"].Schema({
  owner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  line: {
    type: String,
    required: true
  },
  plate: {
    type: String,
    required: true,
    match: /^[A-Z]{3}\d{3}$/,
    unique: true
  },
  color: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  doors: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    "enum": ['pending', 'approved', 'rejected'],
    "default": 'pending'
  }
}, {
  timestamps: true,
  versionKey: false
});
var Vehicle = _mongoose["default"].model('Vehicle', vehicleSchema);
var _default = exports["default"] = Vehicle;