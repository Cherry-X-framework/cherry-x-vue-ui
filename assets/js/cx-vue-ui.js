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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const checkConditions = {
	methods: {
		isVisible() {

			if (!this.conditions.length) {
				return true;
			} else {

				let conditionsMet = [];
				let operator = 'AND';
				let conditionsLength = this.conditions.length;

				for (var i = 0; i < this.conditions.length; i++) {

					if (this.conditions[i].operator) {
						operator = this.conditions[i].operator;
						conditionsLength--;
						continue;
					}

					switch (this.conditions[i].compare) {
						case 'equal':

							if (this.conditions[i].var === this.conditions[i].value) {
								conditionsMet.push(this.conditions[i].value);
							}

							break;
						case 'not_equal':

							if (this.conditions[i].var !== this.conditions[i].value) {
								conditionsMet.push(this.conditions[i].value);
							}

							break;
					}
				};

				switch (operator) {
					case 'AND':
						return conditionsMet.length === conditionsLength;
					case 'OR':
						if (conditionsMet.length) {
							return true;
						} else {
							return false;
						}
				}
			}
		}
	}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = checkConditions;


/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_title__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_collapse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_component_wrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_input__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form_switcher__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_form_iconpicker__ = __webpack_require__(9);







Vue.component(__WEBPACK_IMPORTED_MODULE_0__components_layout_title__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_layout_title__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_1__components_layout_collapse__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__components_layout_collapse__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_2__components_layout_component_wrapper__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__components_layout_component_wrapper__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_3__components_form_input__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__components_form_input__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_4__components_form_switcher__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__components_form_switcher__["a" /* default */]);
Vue.component(__WEBPACK_IMPORTED_MODULE_5__components_form_iconpicker__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__components_form_iconpicker__["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Title = {
	name: 'cx-vui-title',
	template: '#cx-vui-title',
	props: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_wrapper_classes__ = __webpack_require__(6);


const ComponentWrapper = {

	name: 'cx-vui-component-wrapper',
	template: '#cx-vui-component-wrapper',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_wrapper_classes__["a" /* wrapperClasses */]],
	props: {
		elementId: {
			type: String
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		preventWrap: {
			type: Boolean,
			default: false
		},
		wrapperCss: {
			type: Array,
			default: function () {
				return [];
			}
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (ComponentWrapper);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const wrapperClasses = {
	methods: {
		wrapperClasses() {

			var wrapperClassesList = ['cx-vui-component'];

			if (this.wrapperCss.length) {
				this.wrapperCss.forEach(className => {
					wrapperClassesList.push('cx-vui-component--' + className);
				});
			}

			return wrapperClassesList;
		}
	}
};
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapperClasses;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_assist__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_check_conditions__ = __webpack_require__(0);



const Input = {

	name: 'cx-vui-input',
	template: '#cx-vui-input',
	mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_check_conditions__["a" /* checkConditions */]],
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
				return Object(__WEBPACK_IMPORTED_MODULE_0__utils_assist__["a" /* oneOf */])(value, ['small', 'large', 'default', 'fullwidth']);
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
		conditions: {
			type: Array,
			default: function () {
				return [];
			}
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		wrapperCss: {
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
		controlClasses() {

			var classesList = ['cx-vui-input'];

			classesList.push('size-' + this.size);

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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_check_conditions__ = __webpack_require__(0);


const Switcher = {

	name: 'cx-vui-switcher',
	template: '#cx-vui-switcher',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_check_conditions__["a" /* checkConditions */]],
	props: {
		value: {
			type: [String, Number, Boolean],
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		elementId: {
			type: String
		},
		conditions: {
			type: Array,
			default: function () {
				return [];
			}
		},
		returnTrue: {
			type: [String, Number, Boolean],
			default: true
		},
		returnFalse: {
			type: [String, Number, Boolean],
			default: ''
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		wrapperCss: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			isOn: false,
			inFocus: false
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

		if (this.value === this.returnTrue) {
			this.isOn = true;
		}
	},
	methods: {
		handleEnter(event) {
			this.$emit('on-enter', event);
			this.switchState();
			this.inFocus = true;
		},
		handleFocus(event) {
			this.inFocus = true;
			this.$emit('on-focus', event);
		},
		handleBlur(event) {
			this.inFocus = false;
			this.$emit('on-blur', event);
		},
		switchState() {

			let value;

			this.isOn = !this.isOn;

			if (this.isOn) {
				value = this.returnTrue;
			} else {
				value = this.returnFalse;
			}

			this.$emit('input', value);
			this.setCurrentValue(value);
			this.$emit('on-change', event);

			this.inFocus = false;
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

/* harmony default export */ __webpack_exports__["a"] = (Switcher);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside_x__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside_x__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_assist__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_check_conditions__ = __webpack_require__(0);




const Iconpicker = {

	name: 'cx-vui-iconpicker',
	template: '#cx-vui-iconpicker',
	mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_check_conditions__["a" /* checkConditions */]],
	directives: { clickOutside: __WEBPACK_IMPORTED_MODULE_0_v_click_outside_x__["directive"] },
	props: {
		value: {
			type: [String],
			default: ''
		},
		size: {
			validator(value) {
				return Object(__WEBPACK_IMPORTED_MODULE_1__utils_assist__["a" /* oneOf */])(value, ['small', 'large', 'default', 'fullwidth']);
			},
			default: 'default'
		},
		placeholder: {
			type: String,
			default: ''
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
		elementId: {
			type: String
		},
		conditions: {
			type: Array,
			default: function () {
				return [];
			}
		},
		iconBase: {
			type: String,
			default: ''
		},
		iconPrefix: {
			type: String,
			default: ''
		},
		icons: {
			type: Array,
			default: function () {
				return [];
			}
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		wrapperCss: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			filterQuery: '',
			panelActive: false
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
		handleFocus(event) {
			this.panelActive = true;
			this.$emit('on-focus', event);
		},
		handleBlur(event) {
			this.$emit('on-blur', event);
		},
		seclectIcon(icon) {

			icon = this.iconPrefix + icon;

			this.$emit('input', icon);
			this.setCurrentValue(icon);
			this.$emit('on-change', icon);
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
		filteredIcons(icons) {
			if (!this.filterQuery) {
				return icons;
			} else {
				return icons.filter(icon => {
					return icon.includes(this.filterQuery);
				});
			}
		},
		setCurrentValue(value) {

			if (value === this.currentValue) {
				return;
			}

			this.currentValue = value;
		},
		onClickOutside(event) {
			this.closePanel();
		},
		closePanel() {

			this.panelActive = false;
			this.filterQuery = '';

			this.$emit('on-panel-closed');
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Iconpicker);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
{
  "copywrite": "Copyright (c) 2018-present",
  "date": "2019-03-23T14:29:43.450Z",
  "describe": "",
  "description": "Vue directive to react on clicks outside an element.",
  "file": "v-click-outside-x.min.js",
  "hash": "b169ac562038bd75244d",
  "license": "MIT",
  "version": "4.0.2"
}
*/
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vClickOutside=t():e.vClickOutside=t()}(function(){"use strict";return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:Function("return this")()}(),function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.install=function(e){e.directive("click-outside",s)},t.directive=void 0;var i=Object.create(null),c=Object.create(null),f=Object.create(null),l=Object.create(null),a=[i,c],d=function(e,t,n,r){var o=n.target;t[r].forEach(function(t){var r=t.el;if(r!==o&&!r.contains(o)){var u=t.binding;u.modifiers.stop&&n.stopPropagation(),u.modifiers.prevent&&n.preventDefault(),u.value.call(e,n)}})},p=function(e,t){return e?f[t]?f[t]:(f[t]=function(e){d(this,i,e,t)},f[t]):l[t]?l[t]:(l[t]=function(e){d(this,c,e,t)},l[t])},s=Object.defineProperties({},{$_captureInstances:{value:i},$_nonCaptureInstances:{value:c},$_captureEventHandlers:{value:f},$_nonCaptureEventHandlers:{value:l},bind:{value:function(e,t){if("function"!=typeof t.value)throw new TypeError("Binding value must be a function.");var n=t.arg||"click",u=o({},t,{arg:n,modifiers:o({},{capture:!1,prevent:!1,stop:!1},t.modifiers)}),f=u.modifiers.capture,l=f?i:c;Array.isArray(l[n])||(l[n]=[]),1===l[n].push({el:e,binding:u})&&"object"===("undefined"==typeof document?"undefined":r(document))&&document&&document.addEventListener(n,p(f,n),f)}},unbind:{value:function(e){var t=function(t){return t.el!==e};a.forEach(function(e){var n=Object.keys(e);if(n.length){var o=e===i;n.forEach(function(n){var u=e[n].filter(t);u.length?e[n]=u:("object"===("undefined"==typeof document?"undefined":r(document))&&document&&document.removeEventListener(n,p(o,n),o),delete e[n])})}})}},version:{enumerable:!0,value:"4.0.2"}});t.directive=s}])});
//# sourceMappingURL=v-click-outside-x.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);