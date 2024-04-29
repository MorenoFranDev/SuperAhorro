"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Region = void 0;
var _sequelize = require("sequelize");
var _connection = _interopRequireDefault(require("../connection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Region = exports.Region = _connection["default"].define("Region", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: _sequelize.DataTypes.STRING
});