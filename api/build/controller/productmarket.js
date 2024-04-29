"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findArticles = exports.createProductMarket = exports.createProductList = void 0;
var _console = require("console");
var _Products = require("../Services/Products");
var _Region = require("../Services/Region");
var _Supermerket = require("../Services/Supermerket");
var _promises = _interopRequireDefault(require("fs/promises"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var createProductMarket = exports.createProductMarket = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, product_name, supermarket_name, price, offer, no_offer, product_img, url, region, _yield$findSupermarke, SupermarketId, ProductId, _yield$findRegionByNa, RegionId, product;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, product_name = _req$body.product_name, supermarket_name = _req$body.supermarket_name, price = _req$body.price, offer = _req$body.offer, no_offer = _req$body.no_offer, product_img = _req$body.product_img, url = _req$body.url, region = _req$body.region;
          _context.next = 3;
          return (0, _Supermerket.findSupermarketByName)(supermarket_name);
        case 3:
          _yield$findSupermarke = _context.sent;
          SupermarketId = _yield$findSupermarke.SupermarketId;
          _context.next = 7;
          return (0, _Products.createProduct)(product_name, product_img);
        case 7:
          ProductId = _context.sent;
          _context.next = 10;
          return (0, _Region.findRegionByName)(region);
        case 10:
          _yield$findRegionByNa = _context.sent;
          RegionId = _yield$findRegionByNa.RegionId;
          if (!(SupermarketId === null)) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(400).send("No exite supermercado"));
        case 14:
          if (!(RegionId === null)) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(400).send("No exite region"));
        case 16:
          _context.next = 18;
          return (0, _Products.find_ProdMarket_ByName)(ProductId, SupermarketId);
        case 18:
          product = _context.sent;
          if (!product) {
            _context.next = 31;
            break;
          }
          _context.prev = 20;
          _context.next = 23;
          return (0, _Products.Actualize_ProductSupermaket)(price, offer, no_offer, ProductId, SupermarketId, RegionId);
        case 23:
          return _context.abrupt("return", res.json({
            "msg": "Update succesfully"
          }));
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](20);
          res.send("internal error").status(500);
        case 29:
          _context.next = 40;
          break;
        case 31:
          _context.prev = 31;
          _context.next = 34;
          return (0, _Products.Create_ProductSupermarket)(price, offer, url, no_offer, ProductId, SupermarketId, RegionId);
        case 34:
          res.json({
            "msg": "Create successfully"
          });
          _context.next = 40;
          break;
        case 37:
          _context.prev = 37;
          _context.t1 = _context["catch"](31);
          res.send("internal error").status(500);
        case 40:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[20, 26], [31, 37]]);
  }));
  return function createProductMarket(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var findArticles = exports.findArticles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$query, name, order, path, market, whereCondition, whereCondition2, SupermarketId, result, supermarkets;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, name = _req$query.name, order = _req$query.order, path = _req$query.path, market = _req$query.market;
          whereCondition = {};
          whereCondition2 = {};
          if (name) {
            whereCondition2.name = name;
          }
          if (!path) {
            whereCondition2.name = _defineProperty({}, _sequelize.Op.like, "%".concat(name, "%"));
          }
          if (!market) {
            _context2.next = 10;
            break;
          }
          _context2.next = 8;
          return findMarket_id(market);
        case 8:
          SupermarketId = _context2.sent;
          whereCondition.SupermarketId = SupermarketId;
        case 10:
          _context2.prev = 10;
          _context2.next = 13;
          return (0, _Products.find_ProductSupermarket)(whereCondition, whereCondition2);
        case 13:
          result = _context2.sent;
          supermarkets = [];
          result.forEach(function (element) {
            var supermarketName = element.Supermarket.name;
            var supermarketId = element.Supermarket.id;
            var supermarketLogo = element.Supermarket.logo;
            if (!supermarkets.some(function (supermarket) {
              return supermarket.name === supermarketName && supermarket.id === supermarketId;
            })) {
              supermarkets.push({
                name: supermarketName,
                id: supermarketId,
                logo: supermarketLogo
              });
            }
          });
          return _context2.abrupt("return", res.json({
            Pruducts: result,
            Supermarkets: supermarkets
          }));
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](10);
          console.error(_context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            error: "Internal Server Error"
          }));
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 19]]);
  }));
  return function findArticles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createProductList = exports.createProductList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var filename, result, _JSON$parse, products;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          filename = req.file.filename;
          _context4.prev = 1;
          _context4.next = 4;
          return _promises["default"].readFile("./uploads/".concat(filename));
        case 4:
          result = _context4.sent;
          _JSON$parse = JSON.parse(result), products = _JSON$parse.products;
          products.map( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(element) {
              var product_name, supermarket_name, price, offer, no_offer, product_img, url, region, _yield$findSupermarke2, SupermarketId, _yield$createProduct, ProductId, _yield$findRegionByNa2, RegionId, product;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    product_name = element.product_name, supermarket_name = element.supermarket_name, price = element.price, offer = element.offer, no_offer = element.no_offer, product_img = element.product_img, url = element.url, region = element.region;
                    _context3.next = 3;
                    return (0, _Supermerket.findSupermarketByName)(supermarket_name);
                  case 3:
                    _yield$findSupermarke2 = _context3.sent;
                    SupermarketId = _yield$findSupermarke2.SupermarketId;
                    _context3.next = 7;
                    return (0, _Products.createProduct)(product_name, product_img);
                  case 7:
                    _yield$createProduct = _context3.sent;
                    ProductId = _yield$createProduct.ProductId;
                    _context3.next = 11;
                    return (0, _Region.findRegionByName)(region);
                  case 11:
                    _yield$findRegionByNa2 = _context3.sent;
                    RegionId = _yield$findRegionByNa2.RegionId;
                    _context3.next = 15;
                    return (0, _Products.find_ProdMarket_ByName)(ProductId, SupermarketId);
                  case 15:
                    product = _context3.sent;
                    if (!product) {
                      _context3.next = 28;
                      break;
                    }
                    _context3.prev = 17;
                    _context3.next = 20;
                    return (0, _Products.Actualize_ProductSupermaket)(price, offer, no_offer, ProductId, SupermarketId, RegionId);
                  case 20:
                    console.log({
                      "msg": "Update succesfully"
                    });
                    _context3.next = 26;
                    break;
                  case 23:
                    _context3.prev = 23;
                    _context3.t0 = _context3["catch"](17);
                    console.log(_context3.t0);
                  case 26:
                    _context3.next = 37;
                    break;
                  case 28:
                    _context3.prev = 28;
                    _context3.next = 31;
                    return (0, _Products.Create_ProductSupermarket)(price, offer, url, no_offer, ProductId, SupermarketId, RegionId);
                  case 31:
                    console.log({
                      "msg": "Create successfully"
                    });
                    _context3.next = 37;
                    break;
                  case 34:
                    _context3.prev = 34;
                    _context3.t1 = _context3["catch"](28);
                    console.log(_context3.t1);
                  case 37:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[17, 23], [28, 34]]);
            }));
            return function (_x7) {
              return _ref4.apply(this, arguments);
            };
          }());
          res.json("CREATE SUCCESSFULLY");
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function createProductList(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();