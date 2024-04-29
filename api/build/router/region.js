"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Regions = require("../controller/Regions");
var _express = require("express");
var router = (0, _express.Router)();
router.post("/add", _Regions.createRegion);
router.get("/", _Regions.getRegions);
var _default = exports["default"] = router;