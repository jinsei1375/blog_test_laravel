/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /app/resources/js/app.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:17):\n\n\u001b[0m \u001b[90m  6 |\u001b[39m \u001b[36mif\u001b[39m (container) {\u001b[0m\n\u001b[0m \u001b[90m  7 |\u001b[39m     \u001b[36mconst\u001b[39m root \u001b[33m=\u001b[39m createRoot(container)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 |\u001b[39m     root\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mExampleComponent\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n\nIf you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.\nYou can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:\n\tnpx cross-env BABEL_SHOW_CONFIG_FOR=/app/resources/js/app.js <your build command>\nSee https://babeljs.io/docs/configuration#print-effective-configs for more info.\n\n    at constructor (/app/node_modules/@babel/parser/lib/index.js:353:19)\n    at Parser.raise (/app/node_modules/@babel/parser/lib/index.js:3277:19)\n    at Parser.expectOnePlugin (/app/node_modules/@babel/parser/lib/index.js:3311:18)\n    at Parser.parseExprAtom (/app/node_modules/@babel/parser/lib/index.js:10935:18)\n    at Parser.parseExprSubscripts (/app/node_modules/@babel/parser/lib/index.js:10590:23)\n    at Parser.parseUpdate (/app/node_modules/@babel/parser/lib/index.js:10573:21)\n    at Parser.parseMaybeUnary (/app/node_modules/@babel/parser/lib/index.js:10551:23)\n    at Parser.parseMaybeUnaryOrPrivate (/app/node_modules/@babel/parser/lib/index.js:10405:61)\n    at Parser.parseExprOps (/app/node_modules/@babel/parser/lib/index.js:10410:23)\n    at Parser.parseMaybeConditional (/app/node_modules/@babel/parser/lib/index.js:10387:23)\n    at Parser.parseMaybeAssign (/app/node_modules/@babel/parser/lib/index.js:10348:21)\n    at /app/node_modules/@babel/parser/lib/index.js:10318:39\n    at Parser.allowInAnd (/app/node_modules/@babel/parser/lib/index.js:11936:12)\n    at Parser.parseMaybeAssignAllowIn (/app/node_modules/@babel/parser/lib/index.js:10318:17)\n    at Parser.parseExprListItem (/app/node_modules/@babel/parser/lib/index.js:11696:18)\n    at Parser.parseCallExpressionArguments (/app/node_modules/@babel/parser/lib/index.js:10776:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/app/node_modules/@babel/parser/lib/index.js:10693:29)\n    at Parser.parseSubscript (/app/node_modules/@babel/parser/lib/index.js:10630:19)\n    at Parser.parseSubscripts (/app/node_modules/@babel/parser/lib/index.js:10603:19)\n    at Parser.parseExprSubscripts (/app/node_modules/@babel/parser/lib/index.js:10594:17)\n    at Parser.parseUpdate (/app/node_modules/@babel/parser/lib/index.js:10573:21)\n    at Parser.parseMaybeUnary (/app/node_modules/@babel/parser/lib/index.js:10551:23)\n    at Parser.parseMaybeUnaryOrPrivate (/app/node_modules/@babel/parser/lib/index.js:10405:61)\n    at Parser.parseExprOps (/app/node_modules/@babel/parser/lib/index.js:10410:23)\n    at Parser.parseMaybeConditional (/app/node_modules/@babel/parser/lib/index.js:10387:23)\n    at Parser.parseMaybeAssign (/app/node_modules/@babel/parser/lib/index.js:10348:21)\n    at Parser.parseExpressionBase (/app/node_modules/@babel/parser/lib/index.js:10302:23)\n    at /app/node_modules/@babel/parser/lib/index.js:10298:39\n    at Parser.allowInAnd (/app/node_modules/@babel/parser/lib/index.js:11931:16)\n    at Parser.parseExpression (/app/node_modules/@babel/parser/lib/index.js:10298:17)\n    at Parser.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:12372:23)\n    at Parser.parseStatementLike (/app/node_modules/@babel/parser/lib/index.js:12239:17)\n    at Parser.parseStatementListItem (/app/node_modules/@babel/parser/lib/index.js:12219:17)\n    at Parser.parseBlockOrModuleBlockBody (/app/node_modules/@babel/parser/lib/index.js:12796:61)\n    at Parser.parseBlockBody (/app/node_modules/@babel/parser/lib/index.js:12789:10)\n    at Parser.parseBlock (/app/node_modules/@babel/parser/lib/index.js:12777:10)\n    at Parser.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:12329:21)\n    at Parser.parseStatementLike (/app/node_modules/@babel/parser/lib/index.js:12239:17)\n    at Parser.parseStatementOrSloppyAnnexBFunctionDeclaration (/app/node_modules/@babel/parser/lib/index.js:12229:17)\n    at Parser.parseIfStatement (/app/node_modules/@babel/parser/lib/index.js:12607:28)\n    at Parser.parseStatementContent (/app/node_modules/@babel/parser/lib/index.js:12268:21)\n    at Parser.parseStatementLike (/app/node_modules/@babel/parser/lib/index.js:12239:17)\n    at Parser.parseModuleItem (/app/node_modules/@babel/parser/lib/index.js:12216:17)\n    at Parser.parseBlockOrModuleBlockBody (/app/node_modules/@babel/parser/lib/index.js:12796:36)\n    at Parser.parseBlockBody (/app/node_modules/@babel/parser/lib/index.js:12789:10)\n    at Parser.parseProgram (/app/node_modules/@babel/parser/lib/index.js:12116:10)\n    at Parser.parseTopLevel (/app/node_modules/@babel/parser/lib/index.js:12106:25)\n    at Parser.parse (/app/node_modules/@babel/parser/lib/index.js:13905:10)\n    at parse (/app/node_modules/@babel/parser/lib/index.js:13947:38)\n    at parser (/app/node_modules/@babel/core/lib/parser/index.js:41:34)");

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;