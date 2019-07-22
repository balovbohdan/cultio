/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var config = {};\nconfig.v = '0.0.1';\nconfig.devMode = process.env.MODE === 'dev';\nconfig.prodMode = !config.devMode;\nconfig.port = process.env.PORT || 1010;\nmodule.exports = config;\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./src/components/Books.tsx":
/*!**********************************!*\
  !*** ./src/components/Books.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_tag_1 = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar gql_query_1 = __webpack_require__(/*! @components/gql-query */ \"./src/components/gql-query/index.ts\");\nvar query = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n    {\\n        books {\\n            title\\n        }\\n    }\\n\"], [\"\\n    {\\n        books {\\n            title\\n        }\\n    }\\n\"])));\nexports.Books = function () {\n    return React.createElement(gql_query_1.GqlQuery, { query: query }, function (_a) {\n        var loading = _a.loading, error = _a.error, data = _a.data;\n        if (loading)\n            return 'Loading...';\n        if (error)\n            return \"Error: \" + error.message;\n        return data.books.map(function (i) { return React.createElement(\"div\", null, i.title); });\n    });\n};\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/components/Books.tsx?");

/***/ }),

/***/ "./src/components/gql-query/GqlQuery.tsx":
/*!***********************************************!*\
  !*** ./src/components/gql-query/GqlQuery.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_apollo_1 = __webpack_require__(/*! react-apollo */ \"react-apollo\");\nexports.GqlQuery = function (_a) {\n    var query = _a.query, children = _a.children;\n    // @ts-ignore\n    return React.createElement(react_apollo_1.Query, { query: query }, children);\n};\n\n\n//# sourceURL=webpack:///./src/components/gql-query/GqlQuery.tsx?");

/***/ }),

/***/ "./src/components/gql-query/index.ts":
/*!*******************************************!*\
  !*** ./src/components/gql-query/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GqlQuery_1 = __webpack_require__(/*! ./GqlQuery */ \"./src/components/gql-query/GqlQuery.tsx\");\nexports.GqlQuery = GqlQuery_1.GqlQuery;\n\n\n//# sourceURL=webpack:///./src/components/gql-query/index.ts?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar server_starter_1 = __webpack_require__(/*! @lib/server-starter */ \"./src/lib/server-starter/index.ts\");\nvar c = __webpack_require__(/*! ../config */ \"./config.js\");\nserver_starter_1.default({\n    port: c.port,\n    devMode: c.devMode\n});\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/lib/server-starter/endpoints/index.ts":
/*!***************************************************!*\
  !*** ./src/lib/server-starter/endpoints/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar root_1 = __webpack_require__(/*! ./root */ \"./src/lib/server-starter/endpoints/root.tsx\");\nexports.root = root_1.root;\n\n\n//# sourceURL=webpack:///./src/lib/server-starter/endpoints/index.ts?");

/***/ }),

/***/ "./src/lib/server-starter/endpoints/root.tsx":
/*!***************************************************!*\
  !*** ./src/lib/server-starter/endpoints/root.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar apollo_client_1 = __webpack_require__(/*! apollo-client */ \"apollo-client\");\nvar apollo_link_http_1 = __webpack_require__(/*! apollo-link-http */ \"apollo-link-http\");\nvar apollo_cache_inmemory_1 = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\nvar utils_1 = __webpack_require__(/*! @routes/app/utils */ \"./src/routes/app/utils/index.ts\");\nvar createListener = function (props) {\n    return function (req, res) { return __awaiter(_this, void 0, void 0, function () {\n        var client, app;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    client = createApolloClient({ req: req });\n                    return [4 /*yield*/, utils_1.createApp({\n                            client: client,\n                            context: {},\n                            location: req.url,\n                            devMode: props.devMode\n                        })];\n                case 1:\n                    app = _a.sent();\n                    res.status(200);\n                    res.send(app);\n                    res.end();\n                    return [2 /*return*/];\n            }\n        });\n    }); };\n};\nvar createApolloClient = function (_a) {\n    var req = _a.req;\n    return new apollo_client_1.ApolloClient({\n        ssrMode: true,\n        cache: new apollo_cache_inmemory_1.InMemoryCache(),\n        link: apollo_link_http_1.createHttpLink({\n            fetch: fetch,\n            uri: 'http://localhost:8080',\n            credentials: 'http://localhost:8080',\n            headers: {\n                cookie: req.header('Cookie')\n            }\n        })\n    });\n};\nexports.root = {\n    method: 'use',\n    createListener: createListener,\n    condition: /^\\/(?!reload).*/\n};\n\n\n//# sourceURL=webpack:///./src/lib/server-starter/endpoints/root.tsx?");

/***/ }),

/***/ "./src/lib/server-starter/factory.ts":
/*!*******************************************!*\
  !*** ./src/lib/server-starter/factory.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path = __webpack_require__(/*! path */ \"path\");\nvar watch = __webpack_require__(/*! watch */ \"watch\");\nvar reload = __webpack_require__(/*! reload */ \"reload\");\nvar Express = __webpack_require__(/*! express */ \"express\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/lib/server-starter/utils/index.ts\");\nexports.default = (function (props) {\n    var app = new Express();\n    doApplyEndpoints(app, props);\n    initHotReload(app, props);\n    return app;\n});\nvar doApplyEndpoints = function (app, _a) {\n    var devMode = _a.devMode;\n    return utils_1.applyEndpoints(app, { devMode: devMode });\n};\nvar initHotReload = function (app, _a) {\n    var devMode = _a.devMode;\n    if (!devMode)\n        return;\n    var success = function (r) {\n        var cb = function () { return r.reload(); };\n        var root = path.join(__dirname, '../../../dist');\n        watch.watchTree(root, cb);\n    };\n    var error = function (err) {\n        return console.log('Failed to init hot reload.', err.message);\n    };\n    reload(app)\n        .then(success)\n        .catch(error);\n    return app;\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src/lib/server-starter\"))\n\n//# sourceURL=webpack:///./src/lib/server-starter/factory.ts?");

/***/ }),

/***/ "./src/lib/server-starter/index.ts":
/*!*****************************************!*\
  !*** ./src/lib/server-starter/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar starter_1 = __webpack_require__(/*! ./starter */ \"./src/lib/server-starter/starter.ts\");\nexports.default = starter_1.default;\n\n\n//# sourceURL=webpack:///./src/lib/server-starter/index.ts?");

/***/ }),

/***/ "./src/lib/server-starter/starter.ts":
/*!*******************************************!*\
  !*** ./src/lib/server-starter/starter.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar factory_1 = __webpack_require__(/*! ./factory */ \"./src/lib/server-starter/factory.ts\");\nexports.default = (function (_a) {\n    var port = _a.port, devMode = _a.devMode;\n    var app = factory_1.default({ devMode: devMode });\n    app.listen(port, function () { return console.log('Server started.'); });\n});\n\n\n//# sourceURL=webpack:///./src/lib/server-starter/starter.ts?");

/***/ }),

/***/ "./src/lib/server-starter/utils/endpoints-applier.ts":
/*!***********************************************************!*\
  !*** ./src/lib/server-starter/utils/endpoints-applier.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar endpoints = __webpack_require__(/*! ../endpoints */ \"./src/lib/server-starter/endpoints/index.ts\");\nexports.applyEndpoints = function (app, props) {\n    for (var i in endpoints)\n        if (endpoints.hasOwnProperty(i))\n            applyEndpoint(app, props, endpoints[i]);\n    return app;\n};\nvar applyEndpoint = function (app, props, endpoint) {\n    var method = endpoint.method, condition = endpoint.condition, createListener = endpoint.createListener;\n    var listener = createListener(props);\n    app[method](condition, listener);\n};\n\n\n//# sourceURL=webpack:///./src/lib/server-starter/utils/endpoints-applier.ts?");

/***/ }),

/***/ "./src/lib/server-starter/utils/index.ts":
/*!***********************************************!*\
  !*** ./src/lib/server-starter/utils/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar endpoints_applier_1 = __webpack_require__(/*! ./endpoints-applier */ \"./src/lib/server-starter/utils/endpoints-applier.ts\");\nexports.applyEndpoints = endpoints_applier_1.applyEndpoints;\n\n\n//# sourceURL=webpack:///./src/lib/server-starter/utils/index.ts?");

/***/ }),

/***/ "./src/routes/app/App.tsx":
/*!********************************!*\
  !*** ./src/routes/app/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nexports.App = function (_a) {\n    var state = _a.state, content = _a.content, devMode = _a.devMode;\n    return React.createElement(\"html\", null,\n        React.createElement(\"body\", null,\n            React.createElement(Content, { content: content }),\n            React.createElement(HotReloadScript, { devMode: devMode }),\n            React.createElement(ApolloState, { state: state })));\n};\nvar Content = function (_a) {\n    var __html = _a.content;\n    return React.createElement(\"div\", { id: 'app', dangerouslySetInnerHTML: { __html: __html } });\n};\nvar HotReloadScript = function (_a) {\n    var devMode = _a.devMode;\n    return devMode\n        ? React.createElement(\"script\", { src: 'reload/reload.js' })\n        : null;\n};\nvar ApolloState = function (_a) {\n    var state = _a.state;\n    var stateSerialized = JSON.stringify(state).replace(/</g, '\\\\u003c');\n    var __html = \"window.__APOLLO_STATE__ = \" + stateSerialized + \";\";\n    return React.createElement(\"script\", { dangerouslySetInnerHTML: { __html: __html } });\n};\n\n\n//# sourceURL=webpack:///./src/routes/app/App.tsx?");

/***/ }),

/***/ "./src/routes/app/RouterSwitch.tsx":
/*!*****************************************!*\
  !*** ./src/routes/app/RouterSwitch.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nvar _routes_1 = __webpack_require__(/*! @routes */ \"./src/routes/index.tsx\");\nexports.RouterSwitch = function () {\n    return React.createElement(\"div\", null,\n        React.createElement(\"nav\", null,\n            React.createElement(\"ul\", null,\n                React.createElement(\"li\", null,\n                    React.createElement(react_router_dom_1.Link, { to: \"/\" }, \"Home\")),\n                React.createElement(\"li\", null,\n                    React.createElement(react_router_dom_1.Link, { to: \"/another\" }, \"Another page\")))),\n        React.createElement(react_router_1.Switch, null, _routes_1.routes.map(function (route) { return React.createElement(react_router_1.Route, __assign({ key: route.name }, route.meta)); })));\n};\n\n\n//# sourceURL=webpack:///./src/routes/app/RouterSwitch.tsx?");

/***/ }),

/***/ "./src/routes/app/Tree.tsx":
/*!*********************************!*\
  !*** ./src/routes/app/Tree.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nvar react_apollo_1 = __webpack_require__(/*! react-apollo */ \"react-apollo\");\nvar RouterSwitch_1 = __webpack_require__(/*! ./RouterSwitch */ \"./src/routes/app/RouterSwitch.tsx\");\nvar Books_1 = __webpack_require__(/*! ../../components/Books */ \"./src/components/Books.tsx\");\nexports.Tree = function (_a) {\n    var client = _a.client, context = _a.context, location = _a.location;\n    // @ts-ignore\n    return React.createElement(react_apollo_1.ApolloProvider, { client: client },\n        React.createElement(react_router_1.StaticRouter, { location: location, context: context },\n            React.createElement(\"h1\", null, \"hello world!\"),\n            React.createElement(Books_1.Books, null),\n            React.createElement(RouterSwitch_1.RouterSwitch, null)));\n};\n\n\n//# sourceURL=webpack:///./src/routes/app/Tree.tsx?");

/***/ }),

/***/ "./src/routes/app/utils/app-factory.tsx":
/*!**********************************************!*\
  !*** ./src/routes/app/utils/app-factory.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar html_factory_1 = __webpack_require__(/*! ./html-factory */ \"./src/routes/app/utils/html-factory.tsx\");\nexports.createApp = function (props) { return __awaiter(_this, void 0, void 0, function () {\n    var html;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, doCreateHtml(props)];\n            case 1:\n                html = _a.sent();\n                return [2 /*return*/, createStr(html)];\n        }\n    });\n}); };\nvar createStr = function (app) {\n    var appStr = ReactDOMServer.renderToStaticMarkup(app);\n    return \"<!doctype html>\\n\" + appStr;\n};\nvar doCreateHtml = function (_a) {\n    var client = _a.client, context = _a.context, devMode = _a.devMode, location = _a.location;\n    return html_factory_1.createHtml({\n        client: client,\n        devMode: devMode,\n        context: context,\n        location: location\n    });\n};\n\n\n//# sourceURL=webpack:///./src/routes/app/utils/app-factory.tsx?");

/***/ }),

/***/ "./src/routes/app/utils/html-factory.tsx":
/*!***********************************************!*\
  !*** ./src/routes/app/utils/html-factory.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_apollo_1 = __webpack_require__(/*! react-apollo */ \"react-apollo\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/routes/app/App.tsx\");\nvar Tree_1 = __webpack_require__(/*! ../Tree */ \"./src/routes/app/Tree.tsx\");\nexports.createHtml = function (props) { return __awaiter(_this, void 0, void 0, function () {\n    var state, content;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                state = props.client.extract();\n                return [4 /*yield*/, createTreeStr(props)];\n            case 1:\n                content = _a.sent();\n                return [2 /*return*/, React.createElement(App_1.App, { state: state, content: content, devMode: props.devMode })];\n        }\n    });\n}); };\nvar createTreeStr = function (_a) {\n    var context = _a.context, client = _a.client, location = _a.location;\n    return __awaiter(_this, void 0, void 0, function () {\n        var tree;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    tree = React.createElement(Tree_1.Tree, { client: client, context: context, location: location });\n                    return [4 /*yield*/, react_apollo_1.getDataFromTree(tree)];\n                case 1:\n                    _b.sent();\n                    return [2 /*return*/, ReactDOMServer.renderToString(tree)];\n            }\n        });\n    });\n};\n\n\n//# sourceURL=webpack:///./src/routes/app/utils/html-factory.tsx?");

/***/ }),

/***/ "./src/routes/app/utils/index.ts":
/*!***************************************!*\
  !*** ./src/routes/app/utils/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar app_factory_1 = __webpack_require__(/*! ./app-factory */ \"./src/routes/app/utils/app-factory.tsx\");\nexports.createApp = app_factory_1.createApp;\n\n\n//# sourceURL=webpack:///./src/routes/app/utils/index.ts?");

/***/ }),

/***/ "./src/routes/index.tsx":
/*!******************************!*\
  !*** ./src/routes/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar Home = function () { return React.createElement(\"h1\", null, \"home\"); };\nvar Another = function () { return React.createElement(\"h1\", null, \"another\"); };\nexports.routes = [\n    {\n        name: 'home',\n        meta: {\n            path: '/',\n            exact: true,\n            component: Home\n        }\n    },\n    {\n        name: 'another',\n        meta: {\n            path: '/another',\n            component: Another\n        }\n    }\n];\nexports.default = exports.routes;\n\n\n//# sourceURL=webpack:///./src/routes/index.tsx?");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");\n\n//# sourceURL=webpack:///external_%22apollo-cache-inmemory%22?");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");\n\n//# sourceURL=webpack:///external_%22apollo-client%22?");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-http\");\n\n//# sourceURL=webpack:///external_%22apollo-link-http%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");\n\n//# sourceURL=webpack:///external_%22graphql-tag%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");\n\n//# sourceURL=webpack:///external_%22react-apollo%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "reload":
/*!*************************!*\
  !*** external "reload" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reload\");\n\n//# sourceURL=webpack:///external_%22reload%22?");

/***/ }),

/***/ "watch":
/*!************************!*\
  !*** external "watch" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"watch\");\n\n//# sourceURL=webpack:///external_%22watch%22?");

/***/ })

/******/ });