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

// import React, { useState, useEffect } from "react";
// const SpeechToText = () => {
//     const [text, setText] = useState(""); // To store the recognized text
//     const [isListening, setIsListening] = useState(false);
//     const [error, setError] = useState("");
//     let recognition: any;
//     // Check if SpeechRecognition is available
//     if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
//         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//         recognition = new SpeechRecognition();
//         // SpeechRecognition configuration
//         recognition.continuous = true; // Keep listening for speech
//         recognition.interimResults = true; // Only return final results
//         recognition.lang = "en-US"; // Language for recognition
//     } else {
//         console.error("SpeechRecognition not supported in this browser");
//         setError("SpeechRecognition not supported in this browser");
//     }
//     // Start listening to speech
//     const startListening = () => {
//         if (!recognition) {
//             return;
//         }
//         recognition.start();
//         setIsListening(true);
//         // Event listeners
//         recognition.onresult = (event) => {
//             let spokenText = "";
//             for (let i = event.resultIndex; i < event.results.length; i++) {
//                 spokenText += event.results[i][0].transcript;
//             }
//             setText((prevText) => prevText + " " + spokenText);
//         };
//         recognition.onerror = (event) => {
//             console.error("Error occurred in speech recognition: ", event.error);
//             setError(event.error);
//             setIsListening(false);
//         };
//         recognition.onend = () => {
//             setIsListening(false);
//         };
//     };
//     // Stop listening to speech
//     const stopListening = () => {
//         if (!recognition) {
//             return;
//         }
//         recognition.stop();
//         setIsListening(false);
//     };
//     useEffect(() => {
//         // Clean up event listeners on component unmount
//         return () => {
//             if (recognition) {
//                 recognition.stop();
//                 recognition.onresult = null;
//                 recognition.onerror = null;
//                 recognition.onend = null;
//             }
//         };
//     }, []);
//     return (
//         <div>
//             <p className="mt-6 text-lg leading-8 text-gray-300">Speech-to-Text Recognition</p>
//             <div>
//                 <button
//                     onClick={startListening}
//                     disabled={isListening}
//                     className="bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold my-4 mr-2"
//                 >
//                     Start Listening
//                 </button>
//                 <button
//                     onClick={stopListening}
//                     disabled={!isListening}
//                     className="bg-zinc-100 py-1 px-2 rounded-lg text-zinc-800 text-md hover:bg-zinc-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-2 font-bold my-4 mr-2"
//                 >
//                     Stop Listening
//                 </button>
//             </div>
//             {error && <p style={{ color: "red" }}>Error: {error}</p>}
//             <textarea
//                 rows={10}
//                 cols={50}
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Speech will be converted to text here..."
//             />
//         </div>
//     );
// };
// export default SpeechToText;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

var _s = __webpack_require__.$Refresh$.signature();

const TabAudioToText = ()=>{
    _s();
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // To store the recognized text
    const [isListening, setIsListening] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [stream, setStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let recognition = null;
    // Check if SpeechRecognition is available
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        // SpeechRecognition configuration
        recognition.continuous = true; // Keep listening for speech
        recognition.interimResults = true; // Include interim results
        recognition.lang = "en-US"; // Language for recognition
    } else {
        console.error("SpeechRecognition not supported in this browser");
        setError("SpeechRecognition not supported in this browser");
    }
    // Capture tab audio
    const captureTabAudio = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function*() {
            try {
                const audioStream = yield navigator.mediaDevices.getDisplayMedia({
                    video: false,
                    audio: true
                });
                setStream(audioStream);
                console.log("Tab audio captured successfully.");
            } catch (err) {
                console.error("Error capturing tab audio:", err);
                setError("Failed to capture tab audio. Ensure permissions are granted.");
            }
        });
        return function captureTabAudio() {
            return _ref.apply(this, arguments);
        };
    }();
    // Start listening to audio from the captured tab
    const startListening = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function*() {
            if (!recognition) {
                setError("SpeechRecognition is not available.");
                return;
            }
            if (!stream) {
                yield captureTabAudio(); // Attempt to capture tab audio if not already captured
            }
            if (!stream) {
                setError("Audio stream not available.");
                return;
            }
            // Start recognition
            recognition.start();
            setIsListening(true);
            // Event listeners for speech recognition
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
        });
        return function startListening() {
            return _ref.apply(this, arguments);
        };
    }();
    // Stop listening
    const stopListening = ()=>{
        if (!recognition) {
            return;
        }
        recognition.stop();
        setIsListening(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Cleanup on component unmount
        return ()=>{
            if (stream) {
                stream.getTracks().forEach((track)=>track.stop());
            }
            if (recognition) {
                recognition.stop();
                recognition.onresult = null;
                recognition.onerror = null;
                recognition.onend = null;
            }
        };
    }, [
        stream
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                children: "Browser Tab Audio to Text"
            }, void 0, false, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        onClick: startListening,
                        disabled: isListening,
                        className: "bg-blue-500 text-white px-4 py-2 rounded mr-2",
                        children: "Start Listening"
                    }, void 0, false, {
                        fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        onClick: stopListening,
                        disabled: !isListening,
                        className: "bg-red-500 text-white px-4 py-2 rounded",
                        children: "Stop Listening"
                    }, void 0, false, {
                        fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 214,
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
                lineNumber: 230,
                columnNumber: 23
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                rows: 10,
                cols: 50,
                value: text,
                onChange: (e)=>setText(e.target.value),
                placeholder: "Speech will be transcribed here...",
                className: "mt-4 w-full border rounded p-2"
            }, void 0, false, {
                fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/I528960/Documents/Projects/Personal/projectsmith/smith/content/components/SpeechToText.tsx",
        lineNumber: 212,
        columnNumber: 9
    }, undefined);
};
_s(TabAudioToText, "xEmwWLm9wRtnzB0YTC/27FNTAjs=");
_c = TabAudioToText;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabAudioToText);
var _c;
__webpack_require__.$Refresh$.register(_c, "TabAudioToText");


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
/******/ 	__webpack_require__.h = () => ("e1d3c3df0b5f18a80a78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=content-0.4724b3d9b1d8121fc716.hot-update.js.map