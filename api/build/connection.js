"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _config = require("./config");
var sequelize = new _sequelize.Sequelize(_config.DATABASE_NAME, _config.DATABASE_USER, _config.DATABASE_PASS, {
  host: _config.DATABASE_HOST,
  dialect: "postgres"
});
var _default = exports["default"] = sequelize;