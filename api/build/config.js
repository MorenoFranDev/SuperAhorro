"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_USER = exports.DATABASE_PASS = exports.DATABASE_NAME = exports.DATABASE_HOST = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var DATABASE_NAME = exports.DATABASE_NAME = process.env.DATABASE_NAME;
var DATABASE_USER = exports.DATABASE_USER = process.env.DATABASE_USER;
var DATABASE_PASS = exports.DATABASE_PASS = process.env.DATABASE_PASS;
var DATABASE_HOST = exports.DATABASE_HOST = process.env.DATABASE_HOST;