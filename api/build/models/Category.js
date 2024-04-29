"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;
var _sequelize = require("sequelize");
var _connection = _interopRequireDefault(require("../connection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Category = exports.Category = _connection["default"].define("Category", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: _sequelize.DataTypes.STRING
});