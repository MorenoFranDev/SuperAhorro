"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductMarket = void 0;
var _sequelize = require("sequelize");
var _connection = _interopRequireDefault(require("../connection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_connection["default"].sync();
var ProductMarket = exports.ProductMarket = _connection["default"].define("ProductMarket", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  price: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: false
  },
  offer: {
    type: _sequelize.DataTypes.STRING
  },
  no_offer: {
    type: _sequelize.DataTypes.FLOAT
  },
  url: {
    type: _sequelize.DataTypes.STRING
  }
});