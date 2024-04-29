"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;
var _sequelize = require("sequelize");
var _connection = _interopRequireDefault(require("../connection"));
var _ProductMarket = require("./ProductMarket.module");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_connection["default"].sync();
var Product = exports.Product = _connection["default"].define("Product", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: _sequelize.DataTypes.STRING,
  img: _sequelize.DataTypes.STRING
});