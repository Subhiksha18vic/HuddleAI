"use strict";
self["webpackHotUpdatesmith"]("content_scripts/content-0",{

/***/ "./content/components/SpeechToText.tsx":
/*!*********************************************!*\
  !*** ./content/components/SpeechToText.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();

const SpeechToText = ()=>{
    _s();
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // To store the recognized text
    const [isListening, setIsListening] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let recognition;
    // Check if SpeechRecognition is available
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        // SpeechRecognition configuration
        recognition.continuous = true; // Keep listening for speech
        recognition.interimResults = true; // Only return final results
        recognition.lang = "en-US"; // Language for recognition
    } else {
        console.error("SpeechRecognition not supported in this browser");
        setError("SpeechRecognition not supported in this browser");
    }
    // Start listening to speech
    const startListening = ()=>{
        if (!recognition) {
            return;
        }
        recognition.start();
        setIsListening(true);
        // Event listeners
        recognition.onresult = (event)=>{
            let spokenText = "";
            for(let i = event.resultIndex; i < event.results.length; i++){
                spokenText += event.results[i][0].transcript;
            }
            setText((prevText)=>prevText + " " + spokenText);
        };
        recognition.onerror = (event)=>{
            console.error("Error occurred in speech recognition: ", event.error);
            setError(event.error);
            setIsListening(false);
        };
        recognition.onend = ()=>{
            setIsListening(false);
        };
    };
    // Stop listening to speech
    const stopListening = ()=>{
        if (!recognition) {
            return;
        }
        recognition.stop();
        setIsListening(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Clean up event listeners on component unmount
        return ()=>{
            if (recognition) {
                recognition.stop();
                recognition.onresult = null;
                recognition.onerror = null;
                recognition.onend = null;
            }
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mt-6 text-lg leading-8 text-gray-300",
                children: "Speech-to-Text Recognition"
            }, void 0, false, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        onClick: startListening,
                        disabled: isListening,
                        className: "bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold",
                        children: "Start Listening"
                    }, void 0, false, {
                        fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        onClick: stopListening,
                        disabled: !isListening,
                        className: "bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold",
                        children: "Stop Listening"
                    }, void 0, false, {
                        fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, undefined),
            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                style: {
                    color: "red"
                },
                children: [
                    "Error: ",
                    error
                ]
            }, void 0, true, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 93,
                columnNumber: 23
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                rows: 10,
                cols: 50,
                value: text,
                onChange: (e)=>setText(e.target.value),
                placeholder: "Speech will be converted to text here..."
            }, void 0, false, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, undefined);
};
_s(SpeechToText, "F2drLGVzVfDfwR1K17f6+OfrD0g=");
_c = SpeechToText;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeechToText);
var _c;
__webpack_require__.$Refresh$.register(_c, "SpeechToText");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d6df8d96e9ca42193ce1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=content-0.f94960feead39bd7456e.hot-update.js.map