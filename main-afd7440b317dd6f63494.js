/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Animation/Animation.js":
/*!************************************!*\
  !*** ./src/Animation/Animation.js ***!
  \************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Animation = /*#__PURE__*/function () {\n  function Animation() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        canvas = _ref.canvas,\n        _ref$virtualCanvas = _ref.virtualCanvas,\n        virtualCanvas = _ref$virtualCanvas === void 0 ? document.createElement(\"canvas\") : _ref$virtualCanvas,\n        animationScene = _ref.animationScene;\n\n    _classCallCheck(this, Animation);\n\n    if (!canvas) {\n      throw new Error(\"Flocking Boids: option canvas is Requried\");\n    }\n\n    this.isRunning = false;\n    this.renderHandle = null;\n    this.animationScene = animationScene;\n    this.canvas = canvas;\n    this.virtualCanvas = virtualCanvas;\n    this.virtualCanvas.width = this.canvas.width * 2;\n    this.virtualCanvas.height = this.canvas.height * 2;\n  }\n\n  _createClass(Animation, [{\n    key: \"play\",\n    value: function play() {\n      this.isRunning = true;\n      this.tick();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      window.cancelAnimationFrame(this.renderHandle);\n      this.renderHandle = null;\n      this.isRunning = false;\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.animationScene.tick();\n      this.requestRender();\n\n      if (this.isRunning) {\n        setTimeout(this.tick.bind(this), 20);\n      }\n    }\n  }, {\n    key: \"requestRender\",\n    value: function requestRender() {\n      var _this = this;\n\n      if (!this.renderHandle) {\n        this.renderHandle = window.requestAnimationFrame(function () {\n          _this.render();\n\n          _this.renderHandle = null;\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var virtualContext = this.virtualCanvas.getContext(\"2d\");\n      virtualContext.clearRect(0, 0, this.virtualCanvas.width, this.virtualCanvas.height);\n      virtualContext.fillStyle = \"black\";\n      this.animationScene.render(virtualContext);\n      var canvasContext = this.canvas.getContext(\"2d\");\n      canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      canvasContext.drawImage(this.virtualCanvas, 0, 0, this.virtualCanvas.width, this.virtualCanvas.height, 0, 0, this.canvas.width, this.canvas.height);\n    }\n  }]);\n\n  return Animation;\n}();\n\nexports.default = Animation;\n\n//# sourceURL=webpack://flocking-boids/./src/Animation/Animation.js?");

/***/ }),

/***/ "./src/Animation/ControlUnit.js":
/*!**************************************!*\
  !*** ./src/Animation/ControlUnit.js ***!
  \**************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ControlUnit = /*#__PURE__*/function () {\n  function ControlUnit(animation, settings) {\n    _classCallCheck(this, ControlUnit);\n\n    this.animation = animation;\n    this.settings = settings;\n  }\n\n  _createClass(ControlUnit, [{\n    key: \"play\",\n    value: function play() {\n      this.animation.play();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.animation.pause();\n    }\n  }]);\n\n  return ControlUnit;\n}();\n\nexports.default = ControlUnit;\n\n//# sourceURL=webpack://flocking-boids/./src/Animation/ControlUnit.js?");

/***/ }),

/***/ "./src/Scene/Scene.js":
/*!****************************!*\
  !*** ./src/Scene/Scene.js ***!
  \****************************/
/*! flagged exports */
/*! export BOID_TYPES [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = exports.BOID_TYPES = void 0;\n\nvar _mutableFilter = _interopRequireDefault(__webpack_require__(/*! ./utils/mutableFilter */ \"./src/Scene/utils/mutableFilter.js\"));\n\nvar _Predator = _interopRequireDefault(__webpack_require__(/*! ./objects/Predator */ \"./src/Scene/objects/Predator.js\"));\n\nvar _FlockingBoid = _interopRequireDefault(__webpack_require__(/*! ./objects/FlockingBoid */ \"./src/Scene/objects/FlockingBoid.js\"));\n\nvar _accelerateFlockingBoids = _interopRequireDefault(__webpack_require__(/*! ./physics/accelerateFlockingBoids */ \"./src/Scene/physics/accelerateFlockingBoids/index.js\"));\n\nvar _acceleratePredators = _interopRequireDefault(__webpack_require__(/*! ./physics/acceleratePredators */ \"./src/Scene/physics/acceleratePredators.js\"));\n\nvar _move = _interopRequireDefault(__webpack_require__(/*! ./physics/move */ \"./src/Scene/physics/move.js\"));\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ./settings */ \"./src/Scene/settings/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BOID_TYPES = {\n  FLOCKING_BOIDS: \"flockingBoids\",\n  PREDATORS: \"predators\"\n};\nexports.BOID_TYPES = BOID_TYPES;\n\nvar Scene = /*#__PURE__*/function () {\n  function Scene(_ref) {\n    var mouse = _ref.mouse;\n\n    _classCallCheck(this, Scene);\n\n    this.mouse = mouse;\n    this.instances = {\n      flockingBoids: [],\n      predators: [],\n      manualPredator: null\n    };\n  }\n\n  _createClass(Scene, [{\n    key: \"tick\",\n    value: function tick() {\n      var flockingBoids = this.instances.flockingBoids;\n      var predators = this.instances.predators;\n      this.resolveMousePredator();\n      this.populate(\"flockingBoids\", _FlockingBoid[\"default\"]);\n      this.populate(\"predators\", _Predator[\"default\"]);\n      (0, _accelerateFlockingBoids[\"default\"])(flockingBoids, predators);\n      (0, _acceleratePredators[\"default\"])(predators, flockingBoids);\n      (0, _move[\"default\"])(predators, _settings[\"default\"].characteristics.predators.speedRatio);\n      (0, _move[\"default\"])(flockingBoids, _settings[\"default\"].characteristics.flockingBoids.speedRatio);\n    }\n  }, {\n    key: \"resolveMousePredator\",\n    value: function resolveMousePredator() {\n      var _this$mouse;\n\n      _settings[\"default\"].characteristics.manualPredator = ((_this$mouse = this.mouse) === null || _this$mouse === void 0 ? void 0 : _this$mouse.hasFocus) ? {\n        position: this.mouse.getPosition()\n      } : null;\n    }\n  }, {\n    key: \"populate\",\n    value: function populate(boidType, BoidClass) {\n      var instances = this.instances[boidType];\n      var characteristic = _settings[\"default\"].characteristics[boidType];\n      var diff = characteristic.count - instances.length;\n\n      if (!diff) {\n        return;\n      }\n\n      var _characteristic$spawn = characteristic.spawnPattern;\n      _characteristic$spawn = _characteristic$spawn === void 0 ? {} : _characteristic$spawn;\n      var _characteristic$spawn2 = _characteristic$spawn.maxGrowthPerTick,\n          maxGrowthPerTick = _characteristic$spawn2 === void 0 ? Infinity : _characteristic$spawn2,\n          _characteristic$spawn3 = _characteristic$spawn.maxShrinkPerTick,\n          maxShrinkPerTick = _characteristic$spawn3 === void 0 ? Infinity : _characteristic$spawn3;\n      var effect = Math.max(-maxShrinkPerTick, Math.min(diff, maxGrowthPerTick));\n\n      if (effect > 0) {\n        for (var i = 0; i < effect; i += 1) {\n          instances.push(new BoidClass(characteristic));\n        }\n      } else {\n        var reduceEachOf = instances.length / effect;\n        (0, _mutableFilter[\"default\"])(instances, function (_, i) {\n          return i % reduceEachOf;\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render(virtualContext) {\n      var _this$instances = this.instances,\n          flockingBoids = _this$instances.flockingBoids,\n          predators = _this$instances.predators;\n\n      for (var i = 0; i < predators.length; i += 1) {\n        predators[i].render(virtualContext);\n      }\n\n      for (var _i = 0; _i < flockingBoids.length; _i += 1) {\n        flockingBoids[_i].render(virtualContext);\n      }\n    }\n  }]);\n\n  return Scene;\n}();\n\nexports.default = Scene;\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/Scene.js?");

/***/ }),

/***/ "./src/Scene/objects/Boid.js":
/*!***********************************!*\
  !*** ./src/Scene/objects/Boid.js ***!
  \***********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar vectorImmutable = _interopRequireWildcard(__webpack_require__(/*! ../utils/vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\"));\n\nvar vectorMutable = _interopRequireWildcard(__webpack_require__(/*! ../utils/vectorMutable */ \"./src/Scene/utils/vectorMutable.js\"));\n\nvar _spawn = __webpack_require__(/*! ../utils/spawn */ \"./src/Scene/utils/spawn.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Boid = /*#__PURE__*/function () {\n  function Boid(_ref) {\n    var spawnPattern = _ref.spawnPattern;\n\n    _classCallCheck(this, Boid);\n\n    _defineProperty(this, \"size\", 1);\n\n    _defineProperty(this, \"color\", \"#000\");\n\n    this.spawn(spawnPattern);\n  }\n\n  _createClass(Boid, [{\n    key: \"spawn\",\n    value: function spawn(spawnPattern) {\n      this.position = (0, _spawn.spawnPosition)(spawnPattern);\n      this.speed = (0, _spawn.spawnSpeed)(this.position, spawnPattern);\n    }\n  }, {\n    key: \"accelerate\",\n    value: function accelerate(factors) {\n      this.speed = vectorMutable.normalize(factors.reduce(function (acc, factor) {\n        if (!factor) {\n          return acc;\n        }\n\n        var force = factor.force,\n            strength = factor.strength;\n        return vectorMutable.add(acc, vectorMutable.multiply(vectorImmutable.normalize(force), strength));\n      }, this.speed));\n    }\n  }, {\n    key: \"render\",\n    value: function render(context) {\n      context.save();\n      context.translate(this.position.x * context.canvas.width, this.position.y * context.canvas.height);\n      context.rotate(Math.PI / 2 - (Math.PI / 2 - Math.acos(this.speed.x)) / 1.5); // eslint-disable-next-line no-param-reassign\n\n      context.fillStyle = this.color;\n      context.beginPath();\n      context.moveTo(0, 0);\n      context.lineTo(-3 * this.size, 12 * this.size);\n      context.lineTo(3 * this.size, 0);\n      context.lineTo(-3 * this.size, -12 * this.size);\n      context.closePath();\n      context.fill();\n      context.restore();\n    }\n  }]);\n\n  return Boid;\n}();\n\nexports.default = Boid;\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/objects/Boid.js?");

/***/ }),

/***/ "./src/Scene/objects/FlockingBoid.js":
/*!*******************************************!*\
  !*** ./src/Scene/objects/FlockingBoid.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../settings */ \"./src/Scene/settings/index.js\"));\n\nvar vectorImmutable = _interopRequireWildcard(__webpack_require__(/*! ../utils/vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\"));\n\nvar vectorMutable = _interopRequireWildcard(__webpack_require__(/*! ../utils/vectorMutable */ \"./src/Scene/utils/vectorMutable.js\"));\n\nvar _Boid2 = _interopRequireDefault(__webpack_require__(/*! ./Boid */ \"./src/Scene/objects/Boid.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar FlockingBoid = /*#__PURE__*/function (_Boid) {\n  _inherits(FlockingBoid, _Boid);\n\n  var _super = _createSuper(FlockingBoid);\n\n  _createClass(FlockingBoid, null, [{\n    key: \"calcFlockingForces\",\n    value: function calcFlockingForces(boids, callback) {\n      var actualBoids = boids.sort(function (_ref, _ref2) {\n        var aX = _ref.position.x;\n        var bX = _ref2.position.x;\n        return aX - bX;\n      });\n      var maxInfluenceDistance = Math.max(_settings[\"default\"].forces.alignment.distance, _settings[\"default\"].forces.avoidance.distance, _settings[\"default\"].forces.cohesion.distance);\n      var firstCloseEnoughBoidIndex = 0;\n      var length = actualBoids.length;\n\n      for (var i = 0; i < length; i += 1) {\n        var currentBoid = actualBoids[i];\n        currentBoid.resetFlockingForces();\n\n        for (var j = firstCloseEnoughBoidIndex; j < i; j += 1) {\n          var influencingBoid = actualBoids[j];\n\n          if (currentBoid.position.x - influencingBoid.position.x <= maxInfluenceDistance) {\n            currentBoid.accumulateFlockingForces(influencingBoid);\n          } else {\n            firstCloseEnoughBoidIndex += 1;\n          }\n        }\n\n        for (var _j = i + 1; _j < length; _j += 1) {\n          var _influencingBoid = actualBoids[_j];\n\n          if (_influencingBoid.position.x - currentBoid.position.x <= maxInfluenceDistance) {\n            currentBoid.accumulateFlockingForces(_influencingBoid);\n          } else {\n            break;\n          }\n        }\n\n        callback(actualBoids[i]);\n      }\n    }\n  }]);\n\n  function FlockingBoid(options) {\n    var _this;\n\n    _classCallCheck(this, FlockingBoid);\n\n    _this = _super.call(this, options);\n\n    _this.resetFlockingForces();\n\n    _this.carelessnessRatio = 1 + Math.random();\n    return _this;\n  }\n\n  _createClass(FlockingBoid, [{\n    key: \"resetFlockingForces\",\n    value: function resetFlockingForces() {\n      this.flockingForces = {\n        avoidance: {\n          x: 0,\n          y: 0,\n          z: 0\n        },\n        alignment: {\n          x: 0,\n          y: 0,\n          z: 0\n        },\n        cohesion: {\n          x: 0,\n          y: 0,\n          z: 0\n        }\n      };\n    }\n  }, {\n    key: \"accumulateFlockingForces\",\n    value: function accumulateFlockingForces(influencingBoid) {\n      var _settings$forces = _settings[\"default\"].forces,\n          alignmentDistance = _settings$forces.alignment.distance,\n          avoidanceDistance = _settings$forces.avoidance.distance,\n          cohesionDistance = _settings$forces.cohesion.distance;\n      var boidsDistance = vectorImmutable.squareDistance(this.position, influencingBoid.position);\n\n      if (boidsDistance < avoidanceDistance) {\n        vectorMutable.add(this.flockingForces.avoidance, vectorMutable.multiply(vectorImmutable.subtract(this.position, influencingBoid.position), calcAvoidanceRatio(boidsDistance, avoidanceDistance)));\n      }\n\n      if (boidsDistance < alignmentDistance) {\n        vectorMutable.add(this.flockingForces.alignment, influencingBoid.speed);\n      }\n\n      if (boidsDistance < cohesionDistance) {\n        vectorMutable.add(this.flockingForces.cohesion, vectorImmutable.subtract(influencingBoid.position, this.position));\n      }\n    }\n  }, {\n    key: \"resolveFlockingForceFactors\",\n    value: function resolveFlockingForceFactors() {\n      if (vectorImmutable.checkHasLength(this.flockingForces.avoidance)) {\n        return [{\n          force: this.flockingForces.avoidance,\n          strength: _settings[\"default\"].forces.avoidance.strength\n        }];\n      }\n\n      return [{\n        force: this.flockingForces.alignment,\n        strength: _settings[\"default\"].forces.alignment.strength\n      }, {\n        force: this.flockingForces.cohesion,\n        strength: _settings[\"default\"].forces.cohesion.strength\n      }];\n    }\n  }]);\n\n  return FlockingBoid;\n}(_Boid2[\"default\"]);\n\nexports.default = FlockingBoid;\n\nfunction calcAvoidanceRatio(boidsDistance, avoidanceDistance) {\n  return Math.pow(1 - boidsDistance / avoidanceDistance, 2);\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/objects/FlockingBoid.js?");

/***/ }),

/***/ "./src/Scene/objects/Predator.js":
/*!***************************************!*\
  !*** ./src/Scene/objects/Predator.js ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _Boid2 = _interopRequireDefault(__webpack_require__(/*! ./Boid */ \"./src/Scene/objects/Boid.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Predator = /*#__PURE__*/function (_Boid) {\n  _inherits(Predator, _Boid);\n\n  var _super = _createSuper(Predator);\n\n  function Predator() {\n    var _this;\n\n    _classCallCheck(this, Predator);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"size\", 3);\n\n    _defineProperty(_assertThisInitialized(_this), \"color\", \"#826264\");\n\n    return _this;\n  }\n\n  return Predator;\n}(_Boid2[\"default\"]);\n\nexports.default = Predator;\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/objects/Predator.js?");

/***/ }),

/***/ "./src/Scene/physics/accelerateFlockingBoids/calcAvoidHumanForceFactor.js":
/*!********************************************************************************!*\
  !*** ./src/Scene/physics/accelerateFlockingBoids/calcAvoidHumanForceFactor.js ***!
  \********************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = calcRoostForceFactor;\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../../settings */ \"./src/Scene/settings/index.js\"));\n\nvar vectorImmutable = _interopRequireWildcard(__webpack_require__(/*! ../../utils/vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction calcRoostForceFactor(flockingBoid) {\n  var carelessnessRatio = flockingBoid.carelessnessRatio || 1;\n  var manualPredator = _settings[\"default\"].characteristics.manualPredator;\n\n  if (!manualPredator) {\n    return null;\n  }\n\n  if (!checkIsCloseEnough(flockingBoid, manualPredator, _settings[\"default\"].forces.predatorAvoidance.distance / Math.pow(carelessnessRatio, 2))) {\n    return null;\n  }\n\n  return {\n    force: vectorImmutable.subtract(flockingBoid.position, manualPredator.position),\n    strength: _settings[\"default\"].forces.predatorAvoidance.strength / carelessnessRatio\n  };\n}\n\nfunction checkIsCloseEnough(boidA, boidB, distance) {\n  return vectorImmutable.squareDistance(boidA.position, boidB.position) < distance;\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/physics/accelerateFlockingBoids/calcAvoidHumanForceFactor.js?");

/***/ }),

/***/ "./src/Scene/physics/accelerateFlockingBoids/calcAvoidPredatorsFactor.js":
/*!*******************************************************************************!*\
  !*** ./src/Scene/physics/accelerateFlockingBoids/calcAvoidPredatorsFactor.js ***!
  \*******************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = calcAvoidPredatorsFactor;\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../../settings */ \"./src/Scene/settings/index.js\"));\n\nvar vectorImmutable = _interopRequireWildcard(__webpack_require__(/*! ../../utils/vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\"));\n\nvar vectorMutable = _interopRequireWildcard(__webpack_require__(/*! ../../utils/vectorMutable */ \"./src/Scene/utils/vectorMutable.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction calcAvoidPredatorsFactor(flockingBoid, predators) {\n  var carelessnessRatio = flockingBoid.carelessnessRatio || 1;\n  var predatorAvoidanceForce = {\n    x: 0,\n    y: 0,\n    z: 0\n  };\n  var predatorAvoidanceDistance = _settings[\"default\"].forces.predatorAvoidance.distance;\n  var predatorAvoidanceDistancePerBoid = predatorAvoidanceDistance / carelessnessRatio;\n\n  for (var i = 0; i < predators.length; i += 1) {\n    var boidsDistance = vectorImmutable.squareDistance(flockingBoid.position, predators[i].position);\n\n    if (boidsDistance < predatorAvoidanceDistancePerBoid) {\n      vectorMutable.add(predatorAvoidanceForce, vectorMutable.multiply(vectorImmutable.subtract(flockingBoid.position, predators[i].position), calcAvoidanceRatio(boidsDistance, predatorAvoidanceDistancePerBoid)));\n    }\n  }\n\n  return {\n    force: predatorAvoidanceForce,\n    strength: _settings[\"default\"].forces.predatorAvoidance.strength / carelessnessRatio\n  };\n}\n\nfunction calcAvoidanceRatio(boidsDistance, avoidanceDistance) {\n  return Math.pow(1 - boidsDistance / avoidanceDistance, 2);\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/physics/accelerateFlockingBoids/calcAvoidPredatorsFactor.js?");

/***/ }),

/***/ "./src/Scene/physics/accelerateFlockingBoids/calcRoostForceFactor.js":
/*!***************************************************************************!*\
  !*** ./src/Scene/physics/accelerateFlockingBoids/calcRoostForceFactor.js ***!
  \***************************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = calcRoostForceFactor;\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../../settings */ \"./src/Scene/settings/index.js\"));\n\nvar vectorImmutable = _interopRequireWildcard(__webpack_require__(/*! ../../utils/vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction calcRoostForceFactor(flockingBoid) {\n  var roostPosition = _settings[\"default\"].characteristics.roost.position;\n  var flockingBoidPosition = flockingBoid.position;\n\n  var isOutOfRoost = vectorImmutable.squareDistance(flockingBoidPosition, roostPosition) > _settings[\"default\"].forces.roosting.distance;\n\n  if (!isOutOfRoost) {\n    return null;\n  }\n\n  return {\n    force: {\n      x: roostPosition.x - flockingBoidPosition.x,\n      y: roostPosition.y - flockingBoidPosition.y,\n      z: 0\n    },\n    strength: _settings[\"default\"].forces.roosting.strength\n  };\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/physics/accelerateFlockingBoids/calcRoostForceFactor.js?");

/***/ }),

/***/ "./src/Scene/physics/accelerateFlockingBoids/index.js":
/*!************************************************************!*\
  !*** ./src/Scene/physics/accelerateFlockingBoids/index.js ***!
  \************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = accelerateFlockingBoids;\n\nvar _FlockingBoid = _interopRequireDefault(__webpack_require__(/*! ../../objects/FlockingBoid */ \"./src/Scene/objects/FlockingBoid.js\"));\n\nvar _calcRoostForceFactor = _interopRequireDefault(__webpack_require__(/*! ./calcRoostForceFactor */ \"./src/Scene/physics/accelerateFlockingBoids/calcRoostForceFactor.js\"));\n\nvar _calcAvoidHumanForceFactor = _interopRequireDefault(__webpack_require__(/*! ./calcAvoidHumanForceFactor */ \"./src/Scene/physics/accelerateFlockingBoids/calcAvoidHumanForceFactor.js\"));\n\nvar _calcAvoidPredatorsFactor = _interopRequireDefault(__webpack_require__(/*! ./calcAvoidPredatorsFactor */ \"./src/Scene/physics/accelerateFlockingBoids/calcAvoidPredatorsFactor.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction accelerateFlockingBoids(flockingBoids, predators) {\n  _FlockingBoid[\"default\"].calcFlockingForces(flockingBoids, function applyForces(flockingBoid) {\n    flockingBoid.accelerate([].concat(_toConsumableArray(flockingBoid.resolveFlockingForceFactors()), [(0, _calcAvoidPredatorsFactor[\"default\"])(flockingBoid, predators), (0, _calcRoostForceFactor[\"default\"])(flockingBoid), (0, _calcAvoidHumanForceFactor[\"default\"])(flockingBoid)]));\n  });\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/physics/accelerateFlockingBoids/index.js?");

/***/ }),

/***/ "./src/Scene/physics/acceleratePredators.js":
/*!**************************************************!*\
  !*** ./src/Scene/physics/acceleratePredators.js ***!
  \**************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = acceleratePredators;\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../settings */ \"./src/Scene/settings/index.js\"));\n\nvar vectorImmutable = _interopRequireWildcard(__webpack_require__(/*! ../utils/vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable */\nfunction acceleratePredators(predators, flockingBoids) {\n  for (var i = 0; i < predators.length; i += 1) {\n    var targetBoid = findTargetBoid(predators[i], flockingBoids);\n    predators[i].accelerate([{\n      force: vectorImmutable.subtract(flockingBoids[targetBoid].position, predators[i].position),\n      strength: _settings[\"default\"].forces.predatorToPrey.strength\n    }]);\n  }\n}\n\nfunction findTargetBoid(predator, flockingBoids) {\n  var min = Infinity;\n  var targetBoid = 0;\n\n  for (var i = 0; i < flockingBoids.length; i += 1) {\n    var current = vectorImmutable.squareDistance(predator.position, flockingBoids[i].position);\n\n    if (current < min) {\n      min = current;\n      targetBoid = i;\n    }\n  }\n\n  return targetBoid;\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/physics/acceleratePredators.js?");

/***/ }),

/***/ "./src/Scene/physics/move.js":
/*!***********************************!*\
  !*** ./src/Scene/physics/move.js ***!
  \***********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = move;\n\nfunction move(boids, speedRatio) {\n  for (var i = 0; i < boids.length; i += 1) {\n    boids[i].position.x = (boids[i].position.x + speedRatio * boids[i].speed.x + 1) % 1;\n    boids[i].position.y = (boids[i].position.y + speedRatio * boids[i].speed.y + 1) % 1;\n  }\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/physics/move.js?");

/***/ }),

/***/ "./src/Scene/settings/index.js":
/*!*************************************!*\
  !*** ./src/Scene/settings/index.js ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _spawn = __webpack_require__(/*! ../utils/spawn */ \"./src/Scene/utils/spawn.js\");\n\nvar _default = {\n  forces: {\n    alignment: {\n      distance: 0.01,\n      strength: 0.3\n    },\n    avoidance: {\n      distance: 0.0001,\n      strength: 0.5\n    },\n    cohesion: {\n      distance: 0.02,\n      strength: 0.15\n    },\n    predatorAvoidance: {\n      distance: 0.03,\n      strength: 2\n    },\n    roosting: {\n      distance: 0.2,\n      strength: 0.1\n    },\n    predatorToPrey: {\n      strength: 0.1\n    }\n  },\n  characteristics: {\n    roost: {\n      position: {\n        x: 0.5,\n        y: 0.5,\n        z: 0\n      }\n    },\n    predators: {\n      spawnPattern: {\n        spotPattern: _spawn.SPAWN_SPOT_PATTERNS.EDGE,\n        speedPattern: _spawn.SPAWN_SPEED_PATTERNS.TO_CENTER\n      },\n      count: 1,\n      speedRatio: 0.005\n    },\n    flockingBoids: {\n      spawnPattern: {\n        spotPattern: _spawn.SPAWN_SPOT_PATTERNS.CIRCLE,\n        spotVariance: 0.1,\n        speedPattern: _spawn.SPAWN_SPEED_PATTERNS.FROM_CENTER,\n        speedRotation: 45,\n        maxShrinkPerTick: 5,\n        maxGrowthPerTick: 100\n      },\n      count: 1000,\n      speedRatio: 0.004\n    },\n    manualPredator: null\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/settings/index.js?");

/***/ }),

/***/ "./src/Scene/utils/mutableFilter.js":
/*!******************************************!*\
  !*** ./src/Scene/utils/mutableFilter.js ***!
  \******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = mutableFilter;\n\nfunction mutableFilter(array, iteratee) {\n  var i = 0,\n      j = 0;\n\n  while (i < array.length) {\n    var val = array[i];\n    if (iteratee(val, i, array)) array[j++] = val;\n    i++;\n  }\n\n  array.length = j;\n  return array;\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/utils/mutableFilter.js?");

/***/ }),

/***/ "./src/Scene/utils/spawn.js":
/*!**********************************!*\
  !*** ./src/Scene/utils/spawn.js ***!
  \**********************************/
/*! flagged exports */
/*! export SPAWN_SPEED_PATTERNS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SPAWN_SPOT_PATTERNS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export spawnPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export spawnSpeed [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.spawnPosition = spawnPosition;\nexports.spawnSpeed = spawnSpeed;\nexports.SPAWN_SPEED_PATTERNS = exports.SPAWN_SPOT_PATTERNS = void 0;\n\nvar vectorMutable = _interopRequireWildcard(__webpack_require__(/*! ./vectorMutable */ \"./src/Scene/utils/vectorMutable.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar SPAWN_SPOT_PATTERNS = {\n  RANDOM: \"RANDOM\",\n  CIRCLE: \"CIRCLE\",\n  EDGE: \"EDGE\"\n};\nexports.SPAWN_SPOT_PATTERNS = SPAWN_SPOT_PATTERNS;\nvar SPAWN_SPEED_PATTERNS = {\n  RANDOM: \"RANDOM\",\n  IDLE: \"IDLE\",\n  TO_CENTER: \"TO_CENTER\",\n  FROM_CENTER: \"FROM_CENTER\",\n  STRAIGHT: \"STRAIGHT\"\n};\nexports.SPAWN_SPEED_PATTERNS = SPAWN_SPEED_PATTERNS;\nvar DEFAULT_CIRCLE_RADIUS = 0.4;\n\nfunction spawnPosition() {\n  var spawnConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _spawnConfig$spotPatt = spawnConfig.spotPattern,\n      spotPattern = _spawnConfig$spotPatt === void 0 ? SPAWN_SPOT_PATTERNS.RANDOM : _spawnConfig$spotPatt,\n      spotVariance = spawnConfig.spotVariance;\n  var spotPosition;\n\n  switch (spotPattern) {\n    case SPAWN_SPOT_PATTERNS.CIRCLE:\n      var _spawnConfig$circleRa = spawnConfig.circleRadius,\n          circleRadius = _spawnConfig$circleRa === void 0 ? DEFAULT_CIRCLE_RADIUS : _spawnConfig$circleRa;\n      var x = 2 * circleRadius * (Math.random() - 0.5);\n      var y = Math.sign(Math.random() - 0.5) * Math.sqrt(Math.pow(circleRadius, 2) - Math.pow(x, 2));\n      spotPosition = {\n        x: x + 0.5 + (Math.random() - 0.5) * 0.05,\n        y: y + 0.5 + (Math.random() - 0.5) * 0.05,\n        z: 0\n      };\n      break;\n\n    case SPAWN_SPOT_PATTERNS.EDGE:\n      spotPosition = {\n        x: Math.ceil(Math.random() - 0.5),\n        y: Math.ceil(Math.random() - 0.5),\n        z: 0\n      };\n      break;\n\n    case SPAWN_SPOT_PATTERNS.RANDOM:\n    default:\n      spotPosition = {\n        x: Math.random(),\n        y: Math.random(),\n        z: 0\n      };\n  }\n\n  if (spotVariance) {\n    spotPosition.x += (Math.random() - 0.5) * spotVariance;\n    spotPosition.y += (Math.random() - 0.5) * spotVariance;\n  }\n\n  spotPosition.x = Math.abs(spotPosition.x % 1);\n  spotPosition.y = Math.abs(spotPosition.y % 1);\n  return spotPosition;\n}\n\nfunction spawnSpeed(position) {\n  var spawnConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var _spawnConfig$speedPat = spawnConfig.speedPattern,\n      speedPattern = _spawnConfig$speedPat === void 0 ? SPAWN_SPEED_PATTERNS.RANDOM : _spawnConfig$speedPat,\n      speedRotation = spawnConfig.speedRotation;\n  var speed;\n\n  switch (speedPattern) {\n    case SPAWN_SPEED_PATTERNS.IDLE:\n      return {\n        x: 0,\n        y: 0,\n        z: 0\n      };\n\n    case SPAWN_SPEED_PATTERNS.STRAIGHT:\n      speed = {\n        x: 1,\n        y: 0,\n        z: 0\n      };\n      break;\n\n    case SPAWN_SPEED_PATTERNS.TO_CENTER:\n      speed = vectorMutable.normalize({\n        x: 0.5 - position.x,\n        y: 0.5 - position.y,\n        z: 0\n      });\n      break;\n\n    case SPAWN_SPEED_PATTERNS.FROM_CENTER:\n      speed = vectorMutable.normalize({\n        x: position.x - 0.5,\n        y: position.y - 0.5,\n        z: 0\n      });\n      break;\n\n    case SPAWN_SPEED_PATTERNS.RANDOM:\n    default:\n      speed = vectorMutable.normalize({\n        x: Math.random(),\n        y: Math.random(),\n        z: 0\n      });\n  }\n\n  vectorMutable.normalize(speed);\n\n  if (speedRotation) {\n    vectorMutable.rotate(speed, speedRotation / 180 * Math.PI);\n  }\n\n  return speed;\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/utils/spawn.js?");

/***/ }),

/***/ "./src/Scene/utils/vectorImmutable.js":
/*!********************************************!*\
  !*** ./src/Scene/utils/vectorImmutable.js ***!
  \********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkHasLength [provided] [no usage info] [missing usage info prevents renaming] */
/*! export length [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiply [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export squareDistance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.normalize = normalize;\nexports.length = length;\nexports.checkHasLength = checkHasLength;\nexports.squareDistance = squareDistance;\nexports.multiply = multiply;\nexports.add = add;\nexports.subtract = subtract;\nexports.rotate = rotate;\n\n/* eslint-disable no-param-reassign */\nfunction normalize(vector) {\n  var vectorLength = length(vector);\n\n  if (vectorLength > 0) {\n    return {\n      x: vector.x / vectorLength,\n      y: vector.y / vectorLength,\n      z: vector.z / vectorLength\n    };\n  }\n\n  return vector;\n}\n\nfunction length(vector) {\n  return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2) + Math.pow(vector.z, 2));\n}\n\nfunction checkHasLength(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      z = _ref.z;\n  return x || y || z;\n} // no need to calc root, because result used only for comparison\n\n\nfunction squareDistance(vectorA, vectorB) {\n  return Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2) + Math.pow(vectorA.z - vectorB.z, 2);\n}\n\nfunction multiply(vector, scalar) {\n  return {\n    x: vector.x * scalar,\n    y: vector.y * scalar,\n    z: vector.z * scalar\n  };\n}\n\nfunction add(vectorA, vectorB) {\n  return {\n    x: vectorA.x + vectorB.x,\n    y: vectorA.y + vectorB.y,\n    z: vectorA.z + vectorB.z\n  };\n}\n\nfunction subtract(vectorA, vectorB) {\n  return {\n    x: vectorA.x - vectorB.x,\n    y: vectorA.y - vectorB.y,\n    z: vectorA.z - vectorB.z\n  };\n}\n\nfunction rotate(vectorA, angle) {\n  return {\n    x: vectorA.x * Math.cos(angle) - vectorA.y * Math.sin(angle),\n    y: vectorA.x * Math.sin(angle) + vectorA.y * Math.cos(angle),\n    z: vectorA.z\n  };\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/utils/vectorImmutable.js?");

/***/ }),

/***/ "./src/Scene/utils/vectorMutable.js":
/*!******************************************!*\
  !*** ./src/Scene/utils/vectorMutable.js ***!
  \******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkHasLength [provided] [no usage info] [missing usage info prevents renaming] */
/*! export length [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multiply [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export squareDistance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subtract [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.normalize = normalize;\nexports.multiply = multiply;\nexports.add = add;\nexports.subtract = subtract;\nexports.rotate = rotate;\nObject.defineProperty(exports, \"length\", ({\n  enumerable: true,\n  get: function get() {\n    return _vectorImmutable.length;\n  }\n}));\nObject.defineProperty(exports, \"squareDistance\", ({\n  enumerable: true,\n  get: function get() {\n    return _vectorImmutable.squareDistance;\n  }\n}));\nObject.defineProperty(exports, \"checkHasLength\", ({\n  enumerable: true,\n  get: function get() {\n    return _vectorImmutable.checkHasLength;\n  }\n}));\n\nvar _vectorImmutable = __webpack_require__(/*! ./vectorImmutable */ \"./src/Scene/utils/vectorImmutable.js\");\n\n/* eslint-disable no-param-reassign */\nfunction normalize(vector) {\n  var vectorLength = (0, _vectorImmutable.length)(vector);\n\n  if (vectorLength > 0) {\n    vector.x /= vectorLength;\n    vector.y /= vectorLength;\n    vector.z /= vectorLength;\n  }\n\n  return vector;\n}\n\nfunction multiply(vector, scalar) {\n  vector.x *= scalar;\n  vector.y *= scalar;\n  vector.z *= scalar;\n  return vector;\n}\n\nfunction add(vectorA, vectorB) {\n  vectorA.x += vectorB.x;\n  vectorA.y += vectorB.y;\n  vectorA.z += vectorB.z;\n  return vectorA;\n}\n\nfunction subtract(vectorA, vectorB) {\n  vectorA.x -= vectorB.x;\n  vectorA.y -= vectorB.y;\n  vectorA.z -= vectorB.z;\n  return vectorA;\n}\n\nfunction rotate(vectorA, angle) {\n  var x = vectorA.x * Math.cos(angle) - vectorA.y * Math.sin(angle);\n  vectorA.y = vectorA.x * Math.sin(angle) + vectorA.y * Math.cos(angle);\n  vectorA.x = x;\n  return vectorA;\n}\n\n//# sourceURL=webpack://flocking-boids/./src/Scene/utils/vectorMutable.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = animateFlockingBoids;\n\nvar _Animation = _interopRequireDefault(__webpack_require__(/*! ./Animation */ \"./src/Animation/Animation.js\"));\n\nvar _ControlUnit = _interopRequireDefault(__webpack_require__(/*! ./Animation/ControlUnit */ \"./src/Animation/ControlUnit.js\"));\n\nvar _Scene = _interopRequireDefault(__webpack_require__(/*! ./Scene */ \"./src/Scene/Scene.js\"));\n\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ./Scene/settings */ \"./src/Scene/settings/index.js\"));\n\nvar _trackMouse = _interopRequireDefault(__webpack_require__(/*! ./utils/trackMouse */ \"./src/utils/trackMouse.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction animateFlockingBoids() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var canvas = options.canvas,\n      virtualCanvas = options.virtualCanvas;\n  var mouseTracker = (0, _trackMouse[\"default\"])(canvas);\n  var animationScene = new _Scene[\"default\"]({\n    mouse: mouseTracker\n  });\n  var animation = new _Animation[\"default\"]({\n    canvas: canvas,\n    virtualCanvas: virtualCanvas,\n    animationScene: animationScene\n  });\n  return new _ControlUnit[\"default\"](animation, _settings[\"default\"]);\n}\n\n//# sourceURL=webpack://flocking-boids/./src/index.js?");

/***/ }),

/***/ "./src/utils/trackMouse.js":
/*!*********************************!*\
  !*** ./src/utils/trackMouse.js ***!
  \*********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = trackMouse;\n\nfunction trackMouse(canvas) {\n  var mouse = {\n    x: 0,\n    y: 0,\n    hasFocus: false,\n    getPosition: function getPosition() {\n      return {\n        x: mouse.x / canvas.width,\n        y: mouse.y / canvas.height,\n        z: 0\n      };\n    }\n  };\n  canvas.addEventListener(\"mousemove\", function (event) {\n    mouse.hasFocus = true;\n    mouse.x = event.offsetX;\n    mouse.y = event.offsetY;\n  });\n  canvas.addEventListener(\"mouseout\", function () {\n    mouse.hasFocus = false;\n  });\n  return mouse;\n}\n\n//# sourceURL=webpack://flocking-boids/./src/utils/trackMouse.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../src/index */ \"./src/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  var flockingBoidsAnimation = (0, _index[\"default\"])({\n    canvas: canvas\n  });\n  window.flockingBoidsAnimation = flockingBoidsAnimation;\n  flockingBoidsAnimation.settings.characteristics.predators.count = 0;\n  flockingBoidsAnimation.play();\n  setTimeout(function () {\n    flockingBoidsAnimation.settings.characteristics.predators.count = 1;\n  }, 5000);\n});\n\n//# sourceURL=webpack://flocking-boids/./demo/index.js?");
})();

/******/ })()
;