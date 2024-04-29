"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Supermarket = void 0;
var _sequelize = require("sequelize");
var _connection = _interopRequireDefault(require("../connection"));
var _ProductMarket = require("./ProductMarket.module");
var _Product = require("./Product.model");
var _Region = require("./Region");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_connection["default"].sync();
var Supermarket = exports.Supermarket = _connection["default"].define("Supermarket", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  logo: {
    type: _sequelize.DataTypes.STRING
  }
});
Supermarket.hasMany(_ProductMarket.ProductMarket);
_Product.Product.hasMany(_ProductMarket.ProductMarket);
_Region.Region.hasMany(_ProductMarket.ProductMarket);
_ProductMarket.ProductMarket.belongsTo(Supermarket);
_ProductMarket.ProductMarket.belongsTo(_Product.Product);