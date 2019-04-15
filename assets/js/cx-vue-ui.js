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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_title__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_collapse__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_input__ = __webpack_require__(3);




Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_title__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_title__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_1__components_collapse__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__components_collapse__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_2__components_input__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__components_input__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Title = {
	name: 'cx-vui-title',
	template: '#cx-vui-title',
	props: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Collapse = {
	name: 'cx-vui-collapse',
	template: '#cx-vui-collapse',
	props: {
		collapsed: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			state: ''
		};
	},
	mounted() {
		if (this.collapsed) {
			this.state = 'collapsed';
		}
	},
	computed: {
		iconArrow() {
			if ('collapsed' === this.state) {
				return 'dashicons-arrow-right-alt2';
			} else {
				return 'dashicons-arrow-down-alt2';
			}
		}
	},
	methods: {
		switchState() {

			if ('collapsed' === this.state) {
				this.state = '';
			} else {
				this.state = 'collapsed';
			}

			this.$emit('state-switched', this.state);
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_assist__ = __webpack_require__(4);


const Input = {

	name: 'cx-vui-input',
	template: '#cx-vui-input',
	props: {
		type: {
			validator(value) {
				return Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["a" /* oneOf */])(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel']);
			},
			default: 'text'
		},
		value: {
			type: [String, Number],
			default: ''
		},
		size: {
			validator(value) {
				return Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["a" /* oneOf */])(value, ['small', 'large', 'default']);
			},
			default: 'default'
		},
		placeholder: {
			type: String,
			default: ''
		},
		maxlength: {
			type: Number
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		autocomplete: {
			validator(value) {
				return Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["a" /* oneOf */])(value, ['on', 'off']);
			},
			default: 'off'
		},
		elementId: {
			type: String
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		conditions: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId
		};
	},
	watch: {
		value(val) {
			this.setCurrentValue(val);
		}
	},
	mounted() {
		if (!this.currentId && this.name) {
			this.currentId = 'cx_' + this.name;
		}
	},
	methods: {
		isVisible() {

			if (!this.conditions.length) {
				return true;
			} else {

				let conditionsMet = [];

				for (var i = 0; i < this.conditions.length; i++) {
					switch (this.conditions[i].operator) {
						case 'equal':

							if (this.conditions[i].var === this.conditions[i].value) {
								conditionsMet.push(this.conditions[i].value);
							}

							break;
					}
				};

				return conditionsMet.length === this.conditions.length;
			}
		},
		classesList() {

			let classesList = ['cx-vui-component__input'];

			classesList.push('cx-vui-component--' + this.size);

			return classesList;
		},
		handleEnter(event) {
			this.$emit('on-enter', event);
		},
		handleKeydown(event) {
			this.$emit('on-keydown', event);
		},
		handleKeypress(event) {
			this.$emit('on-keypress', event);
		},
		handleKeyup(event) {
			this.$emit('on-keyup', event);
		},
		handleIconClick(event) {
			this.$emit('on-click', event);
		},
		handleFocus(event) {
			this.$emit('on-focus', event);
		},
		handleBlur(event) {
			this.$emit('on-blur', event);
		},
		handleInput(event) {
			let value = event.target.value;
			this.$emit('input', value);
			this.setCurrentValue(value);
			this.$emit('on-change', event);
		},
		handleChange(event) {
			this.$emit('on-input-change', event);
		},
		setCurrentValue(value) {

			if (value === this.currentValue) {
				return;
			}

			this.currentValue = value;
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = oneOf;
function oneOf(value, validList) {

	for (let i = 0; i < validList.length; i++) {
		if (value === validList[i]) {
			return true;
		}
	}

	return false;
}

/***/ })
/******/ ]);