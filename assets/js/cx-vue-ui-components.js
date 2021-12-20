/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 414:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// CONCATENATED MODULE: ./assets/src/js/mixins/wrapper-classes.js
var wrapperClasses = {
  methods: {
    wrapperClasses: function wrapperClasses() {
      var wrapperClassesList = ['cx-vui-component'];

      if (this.wrapperCss.length) {
        this.wrapperCss.forEach(function (className) {
          wrapperClassesList.push('cx-vui-component--' + className);
        });
      }

      return wrapperClassesList;
    }
  }
};
;// CONCATENATED MODULE: ./assets/src/js/utils/assist.js
function oneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value == validList[i]) {
      return true;
    }
  }

  return false;
}
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
;// CONCATENATED MODULE: ./assets/src/js/mixins/check-conditions.js

var checkConditions = {
  methods: {
    isVisible: function isVisible() {
      if (!this.conditions.length) {
        return true;
      } else {
        var conditionsMet = [];
        var operator = 'AND';
        var conditionsLength = this.conditions.length;

        for (var i = 0; i < this.conditions.length; i++) {
          if (this.conditions[i].operator) {
            operator = this.conditions[i].operator;
            conditionsLength--;
            continue;
          }

          switch (this.conditions[i].compare) {
            case 'equal':
              if (this.conditions[i].input === this.conditions[i].value) {
                conditionsMet.push(this.conditions[i].value);
              }

              break;

            case 'not_equal':
              if (this.conditions[i].input !== this.conditions[i].value) {
                conditionsMet.push(this.conditions[i].value);
              }

              break;

            case 'in':
              if (oneOf(this.conditions[i].input, this.conditions[i].value)) {
                conditionsMet.push(this.conditions[i].value);
              }

              break;

            case 'not_in':
              if (!oneOf(this.conditions[i].input, this.conditions[i].value)) {
                conditionsMet.push(this.conditions[i].value);
              }

              break;

            case 'contains':
              if (oneOf(this.conditions[i].value, this.conditions[i].input)) {
                conditionsMet.push(this.conditions[i].value);
              }

              break;

            case 'not_contains':
              if (!oneOf(this.conditions[i].value, this.conditions[i].input)) {
                conditionsMet.push(this.conditions[i].value);
              }

              break;
          }
        }

        ;

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
;// CONCATENATED MODULE: ./assets/src/js/components/layout/component-wrapper.js


var ComponentWrapper = {
  name: 'cx-vui-component-wrapper',
  template: '#cx-vui-component-wrapper',
  mixins: [wrapperClasses, checkConditions],
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
      "default": false
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  computed: {
    wrapperClassesRaw: function wrapperClassesRaw() {
      var classesList = ['cx-vui-component-raw'];

      if (this.wrapperCss) {
        this.wrapperCss.forEach(function (className) {
          classesList.push(className);
        });
      }

      return classesList;
    }
  }
};
/* harmony default export */ const component_wrapper = (ComponentWrapper);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/title.js
var Title = {
  name: 'cx-vui-title',
  template: '#cx-vui-title',
  props: {}
};
/* harmony default export */ const title = (Title);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/collapse.js

var Collapse = {
  name: 'cx-vui-collapse',
  template: '#cx-vui-collapse',
  mixins: [checkConditions],
  props: {
    collapsed: {
      type: Boolean,
      "default": false
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      state: ''
    };
  },
  mounted: function mounted() {
    if (this.collapsed) {
      this.state = 'collapsed';
    }
  },
  computed: {
    iconArrow: function iconArrow() {
      if ('collapsed' === this.state) {
        return 'dashicons-arrow-right-alt2';
      } else {
        return 'dashicons-arrow-down-alt2';
      }
    }
  },
  methods: {
    switchState: function switchState() {
      if ('collapsed' === this.state) {
        this.state = '';
      } else {
        this.state = 'collapsed';
      }

      this.$emit('state-switched', this.state);
    }
  }
};
/* harmony default export */ const collapse = (Collapse);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/button.js


var Button = {
  name: 'cx-vui-button',
  template: '#cx-vui-button',
  mixins: [checkConditions],
  props: {
    type: {
      validator: function validator(value) {
        return oneOf(value, ['button', 'submit', 'reset']);
      },
      "default": 'button'
    },
    buttonStyle: {
      validator: function validator(value) {
        return oneOf(value, ['default', 'accent', 'link-accent', 'link-error', 'accent-border', 'default-border']);
      },
      "default": 'default'
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['default', 'mini', 'link']);
      },
      "default": 'default'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    customCss: {
      type: String
    },
    url: {
      type: String
    },
    target: {
      type: String
    },
    tagName: {
      validator: function validator(value) {
        return oneOf(value, ['a', 'button']);
      },
      "default": 'button'
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      baseClass: 'cx-vui-button'
    };
  },
  computed: {
    classesList: function classesList() {
      var classesList = [this.baseClass, this.baseClass + '--style-' + this.buttonStyle, this.baseClass + '--size-' + this.size];

      if (this.loading) {
        classesList.push(this.baseClass + '--loading');
      }

      if (this.disabled) {
        classesList.push(this.baseClass + '--disabled');
      }

      if (this.customCss) {
        classesList.push(this.customCss);
      }

      return classesList;
    },
    tagAtts: function tagAtts() {
      var atts = {};

      if ('a' === this.tagName) {
        if (this.url) {
          atts.href = this.url;
        }

        if (this.target) {
          atts.target = this.target;
        }
      } else {
        atts.type = this.type;
      }

      return atts;
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (this.loading || this.disabled) {
        return;
      }

      this.$emit('click', event);
    }
  }
};
/* harmony default export */ const layout_button = (Button);
// EXTERNAL MODULE: ./node_modules/vue-slicksort/dist/vue-slicksort.umd.js
var vue_slicksort_umd = __webpack_require__(247);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/repeater.js


var Repeater = {
  name: 'cx-vui-repeater',
  template: '#cx-vui-repeater',
  mixins: [vue_slicksort_umd.ContainerMixin, checkConditions],
  props: {
    buttonLabel: {
      type: String
    },
    buttonStyle: {
      type: String,
      "default": 'accent'
    },
    buttonSize: {
      type: String,
      "default": 'default'
    },
    value: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    distance: {
      type: Number,
      "default": 20
    },
    useDragHandle: {
      type: Boolean,
      "default": true
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      inFocus: false,
      isMac: 'MacIntel' === navigator.platform
    };
  },
  methods: {
    handleClick: function handleClick(event) {
      this.$emit('add-new-item', event);
    }
  }
};
/* harmony default export */ const repeater = (Repeater);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/repeater-item.js

var RepeaterItem = {
  name: 'cx-vui-repeater-item',
  template: '#cx-vui-repeater-item',
  mixins: [vue_slicksort_umd.ElementMixin],
  directives: {
    handle: vue_slicksort_umd.HandleDirective
  },
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    collapsed: {
      type: Boolean,
      "default": true
    },
    index: {
      type: Number
    },
    customCss: {
      type: String
    }
  },
  data: function data() {
    return {
      fieldData: this.field,
      isCollapsed: this.collapsed,
      showConfirmTip: false
    };
  },
  computed: {
    customCssClass: function customCssClass() {
      return this.customCss;
    }
  },
  methods: {
    handleCopy: function handleCopy() {
      this.$emit('clone-item', this.index);
    },
    handleDelete: function handleDelete() {
      this.showConfirmTip = true;
    },
    confrimDeletion: function confrimDeletion() {
      this.showConfirmTip = false;
      this.$emit('delete-item', this.index);
    },
    cancelDeletion: function cancelDeletion() {
      this.showConfirmTip = false;
    }
  }
};
/* harmony default export */ const repeater_item = (RepeaterItem);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/popup.js
var Popup = {
  name: 'cx-vui-popup',
  template: '#cx-vui-popup',
  props: {
    value: {
      type: Boolean,
      "default": false
    },
    overlay: {
      type: Boolean,
      "default": true
    },
    close: {
      type: Boolean,
      "default": true
    },
    showOk: {
      type: Boolean,
      "default": true
    },
    showCancel: {
      type: Boolean,
      "default": true
    },
    header: {
      type: Boolean,
      "default": true
    },
    footer: {
      type: Boolean,
      "default": true
    },
    okLabel: {
      type: String,
      "default": 'OK'
    },
    cancelLabel: {
      type: String,
      "default": 'Cancel'
    },
    bodyWidth: {
      type: String,
      "default": 'auto'
    }
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  methods: {
    handleCancel: function handleCancel() {
      this.setCurrentValue(false);
      this.$emit('input', false);
      this.$emit('on-cancel');
    },
    handleOk: function handleOk() {
      this.setCurrentValue(false);
      this.$emit('input', false);
      this.$emit('on-ok');
    },
    setCurrentValue: function setCurrentValue(value) {
      if (this.currentValue === value) {
        return;
      }

      this.currentValue = value;
    }
  }
};
/* harmony default export */ const popup = (Popup);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/list-table.js

var ListTable = {
  name: 'cx-vui-list-table',
  template: '#cx-vui-list-table',
  mixins: [checkConditions],
  props: {
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    isEmpty: {
      type: Boolean,
      "default": false
    },
    emptyMessage: {
      type: String,
      "default": ''
    }
  }
};
/* harmony default export */ const list_table = (ListTable);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/list-table-item.js

var ListTableItem = {
  name: 'cx-vui-list-table-item',
  template: '#cx-vui-list-table-item',
  mixins: [checkConditions],
  props: {
    slots: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    className: {
      type: String,
      "default": ''
    }
  }
};
/* harmony default export */ const list_table_item = (ListTableItem);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/list-table-heading.js
var ListTableHeading = {
  name: 'cx-vui-list-table-heading',
  template: '#cx-vui-list-table-heading',
  props: {
    slots: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    className: {
      type: String,
      "default": ''
    }
  }
};
/* harmony default export */ const list_table_heading = (ListTableHeading);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/tabs.js


var Tabs = {
  name: 'cx-vui-tabs',
  template: '#cx-vui-tabs',
  mixins: [checkConditions],
  props: {
    value: {
      type: [String, Number],
      "default": ''
    },
    name: {
      type: String,
      "default": ''
    },
    invert: {
      type: Boolean,
      "default": false
    },
    inPanel: {
      type: Boolean,
      "default": false
    },
    layout: {
      validator: function validator(value) {
        return oneOf(value, ['horizontal', 'vertical']);
      },
      "default": 'horizontal'
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      navList: [],
      activeTab: this.value
    };
  },
  mounted: function mounted() {
    var tabs = this.getTabs();
    this.navList = tabs;

    if (!this.activeTab) {
      this.activeTab = tabs[0].name;
    }

    this.updateState();
  },
  methods: {
    isActive: function isActive(name) {
      return name === this.activeTab;
    },
    onTabClick: function onTabClick(tab) {
      this.activeTab = tab;
      this.$emit('input', this.activeTab);
      this.updateState();
    },
    updateState: function updateState() {
      var _this = this;

      var tabs = this.getTabs();
      this.navList = tabs;
      tabs.forEach(function (tab) {
        tab.show = _this.activeTab === tab.name;
      });
    },
    getTabs: function getTabs() {
      var _this2 = this;

      var allTabs = this.$children.filter(function (item) {
        return 'cx-vui-tabs-panel' === item.$options.name;
      });
      var tabs = [];
      allTabs.forEach(function (item) {
        if (item.tab && _this2.name) {
          if (item.tab === _this2.name) {
            tabs.push(item);
          }
        } else {
          tabs.push(item);
        }
      });
      return tabs;
    }
  }
};
/* harmony default export */ const tabs = (Tabs);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/tabs-panel.js
var TabsPanel = {
  name: 'cx-vui-tabs-panel',
  template: '#cx-vui-tabs-panel',
  props: {
    tab: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {}
};
/* harmony default export */ const tabs_panel = (TabsPanel);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/pagination.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Pagination = {
  name: 'cx-vui-pagination',
  template: '#cx-vui-pagination',
  mixins: [checkConditions],
  props: {
    current: {
      type: Number,
      "default": 1
    },
    total: {
      type: Number,
      "default": 0
    },
    pageSize: {
      type: Number,
      "default": 10
    },
    prevText: {
      type: String,
      "default": ''
    },
    nextText: {
      type: String,
      "default": ''
    },
    customCss: {
      type: String,
      "default": ''
    },
    elementId: {
      type: String,
      "default": ''
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      baseClass: 'cx-vui-pagination',
      currentPage: this.current,
      currentPageSize: this.pageSize
    };
  },
  watch: {
    total: function total(val) {
      var maxPage = Math.ceil(val / this.currentPageSize);

      if (maxPage < this.currentPage) {
        this.currentPage = maxPage === 0 ? 1 : maxPage;
      }
    },
    current: function current(val) {
      this.currentPage = val;
    },
    pageSize: function pageSize(val) {
      this.currentPageSize = val;
    }
  },
  computed: {
    classesList: function classesList() {
      var classesList = [this.baseClass];

      if (this.customCss) {
        classesList.push(this.customCss);
      }

      return classesList;
    },
    prevClasses: function prevClasses() {
      var _ref;

      return ["".concat(this.baseClass, "-item"), "".concat(this.baseClass, "-prev"), (_ref = {}, _defineProperty(_ref, "".concat(this.baseClass, "-disabled"), this.currentPage === 1 || false), _defineProperty(_ref, "".concat(this.baseClass, "-custom-text"), this.prevText !== ''), _ref)];
    },
    nextClasses: function nextClasses() {
      var _ref2;

      return ["".concat(this.baseClass, "-item"), "".concat(this.baseClass, "-next"), (_ref2 = {}, _defineProperty(_ref2, "".concat(this.baseClass, "-disabled"), this.currentPage === this.allPages || false), _defineProperty(_ref2, "".concat(this.baseClass, "-custom-text"), this.nextText !== ''), _ref2)];
    },
    firstPageClasses: function firstPageClasses() {
      return ["".concat(this.baseClass, "-item"), _defineProperty({}, "".concat(this.baseClass, "-item-active"), this.currentPage === 1)];
    },
    lastPageClasses: function lastPageClasses() {
      return ["".concat(this.baseClass, "-item"), _defineProperty({}, "".concat(this.baseClass, "-item-active"), this.currentPage === this.allPages)];
    },
    allPages: function allPages() {
      var allPage = Math.ceil(this.total / this.currentPageSize);
      return allPage === 0 ? 1 : allPage;
    }
  },
  methods: {
    changePage: function changePage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
        this.$emit('update:current', page);
        this.$emit('on-change', page);
      }
    },
    prev: function prev() {
      var current = this.currentPage;

      if (current <= 1) {
        return false;
      }

      this.changePage(current - 1);
    },
    next: function next() {
      var current = this.currentPage;

      if (current >= this.allPages) {
        return false;
      }

      this.changePage(current + 1);
    },
    fastPrev: function fastPrev() {
      var page = this.currentPage - 5;

      if (page > 0) {
        this.changePage(page);
      } else {
        this.changePage(1);
      }
    },
    fastNext: function fastNext() {
      var page = this.currentPage + 5;

      if (page > this.allPages) {
        this.changePage(this.allPages);
      } else {
        this.changePage(page);
      }
    }
  }
};
/* harmony default export */ const pagination = (Pagination);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/notice-component.js
var NoticeComponent = {
  name: 'cx-vui-notice',
  template: '#cx-vui-notice',
  data: function data() {
    return {
      stack: {},
      destroyQueue: {}
    };
  },
  methods: {
    addToStack: function addToStack(item, itemID) {
      var self = this;
      var destroyTimeout = setTimeout(function () {
        self.destroyItem(itemID);
      }, item.duration);
      self.$set(self.stack, itemID, item);
      self.$set(self.destroyQueue, itemID, destroyTimeout);
    },
    destroyItem: function destroyItem(itemID) {
      this.$delete(this.stack, itemID);

      if (this.destroyQueue[itemID]) {
        clearTimeout(this.destroyQueue[itemID]);
        this.$delete(this.destroyQueue, itemID);
      }
    },
    destroyAll: function destroyAll() {
      for (var itemID in this.destroyQueue) {
        console.log(this.destroyQueue[itemID]);
        clearTimeout(this.destroyQueue[itemID]);
      }

      this.stack = {};
      this.destroyQueue = {};
    },
    getIcon: function getIcon(type) {
      var icon;

      switch (type) {
        case 'success':
          icon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.38498 12.0188L13.5962 4.80751L12.4695 3.64319L6.38498 9.7277L3.53052 6.87324L2.40376 8L6.38498 12.0188ZM2.32864 2.3662C3.9061 0.788732 5.79656 0 8 0C10.2034 0 12.0814 0.788732 13.6338 2.3662C15.2113 3.91862 16 5.79656 16 8C16 10.2034 15.2113 12.0939 13.6338 13.6714C12.0814 15.2238 10.2034 16 8 16C5.79656 16 3.9061 15.2238 2.32864 13.6714C0.776213 12.0939 0 10.2034 0 8C0 5.79656 0.776213 3.91862 2.32864 2.3662Z"/></svg>';
          break;

        case 'error':
          icon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.71489 10.1136V6.71605H7.28511V10.1136H8.71489ZM8.71489 13.4716V11.7728H7.28511V13.4716H8.71489ZM0 16L8 0L16 16H0Z"/></svg>';
          break;

        default:
          icon = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.78873 5.59624V3.98122H7.21127V5.59624H8.78873ZM8.78873 12.0188V7.21127H7.21127V12.0188H8.78873ZM2.32864 2.3662C3.9061 0.788732 5.79656 0 8 0C10.2034 0 12.0814 0.788732 13.6338 2.3662C15.2113 3.91862 16 5.79656 16 8C16 10.2034 15.2113 12.0939 13.6338 13.6714C12.0814 15.2238 10.2034 16 8 16C5.79656 16 3.9061 15.2238 2.32864 13.6714C0.776213 12.0939 0 10.2034 0 8C0 5.79656 0.776213 3.91862 2.32864 2.3662Z"/></svg>';
          break;
      }

      return icon;
    }
  }
};
/* harmony default export */ const notice_component = (NoticeComponent);
;// CONCATENATED MODULE: ./assets/src/js/components/layout/notice.js

var CXNotice = {
  instance: null,
  stack: {},
  newInstance: function newInstance() {
    var NoticeComponentClass = Vue.extend(notice_component);
    this.instance = new NoticeComponentClass({
      propsData: {
        type: 'primary'
      }
    });
    this.instance.$mount();
    document.body.appendChild(this.instance.$el);
  },
  getRandId: function getRandId() {
    // Generates random string with 10 characters length
    return Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);
  },
  add: function add(options, id) {
    id = id || this.getRandId();

    if (!this.instance) {
      this.newInstance();
    }

    options.duration = options.duration || 4500;
    options.type = options.type || 'info';
    this.instance.addToStack(options, id);
  },
  close: function close(id) {
    if (id) {
      id = id.toString();

      if (this.instance) {
        this.instance.destroyItem(id);
      }
    } else {
      return false;
    }
  },
  closeAll: function closeAll() {
    this.instance.destroyAll();
  }
};
/* harmony default export */ const notice = (CXNotice);
;// CONCATENATED MODULE: ./assets/src/js/components/form/input.js


var Input = {
  name: 'cx-vui-input',
  template: '#cx-vui-input',
  mixins: [checkConditions],
  props: {
    type: {
      validator: function validator(value) {
        return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'range', 'tel']);
      },
      "default": 'text'
    },
    value: {
      type: [String, Number],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'fullwidth']);
      },
      "default": 'default'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    error: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    autofocus: {
      type: Boolean,
      "default": false
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    step: {
      type: Number
    },
    autocomplete: {
      validator: function validator(value) {
        return oneOf(value, ['on', 'off']);
      },
      "default": 'off'
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  computed: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-input'];
      classesList.push('size-' + this.size);

      if (this.error) {
        classesList.push('has-error');
      }

      return classesList;
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleKeydown: function handleKeydown(event) {
      this.$emit('on-keydown', event);
    },
    handleKeypress: function handleKeypress(event) {
      this.$emit('on-keypress', event);
    },
    handleKeyup: function handleKeyup(event) {
      this.$emit('on-keyup', event);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('on-blur', event);
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', event);
    },
    handleChange: function handleChange(event) {
      this.$emit('on-input-change', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }

      this.currentValue = value;
    }
  }
};
/* harmony default export */ const input = (Input);
;// CONCATENATED MODULE: ./assets/src/js/components/form/textarea.js


var textarea_Input = {
  name: 'cx-vui-textarea',
  template: '#cx-vui-textarea',
  mixins: [checkConditions],
  props: {
    value: {
      type: [String, Number],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'fullwidth']);
      },
      "default": 'default'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    rows: {
      type: Number
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    error: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  computed: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-textarea'];
      classesList.push('size-' + this.size);

      if (this.error) {
        classesList.push('has-error');
      }

      return classesList;
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleKeydown: function handleKeydown(event) {
      this.$emit('on-keydown', event);
    },
    handleKeypress: function handleKeypress(event) {
      this.$emit('on-keypress', event);
    },
    handleKeyup: function handleKeyup(event) {
      this.$emit('on-keyup', event);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('on-blur', event);
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', event);
    },
    handleChange: function handleChange(event) {
      this.$emit('on-input-change', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }

      this.currentValue = value;
    }
  }
};
/* harmony default export */ const form_textarea = (textarea_Input);
// EXTERNAL MODULE: ./node_modules/vue2-timepicker/dist/VueTimepicker.common.js
var VueTimepicker_common = __webpack_require__(848);
var VueTimepicker_common_default = /*#__PURE__*/__webpack_require__.n(VueTimepicker_common);
;// CONCATENATED MODULE: ./assets/src/js/components/form/time.js



var Time = {
  name: 'cx-vui-time',
  template: '#cx-vui-time',
  components: {
    VueTimepicker: (VueTimepicker_common_default())
  },
  mixins: [checkConditions],
  props: {
    format: {
      type: String,
      "default": 'HH:mm'
    },
    minValue: {
      type: Number,
      "default": 4800
    },
    maxValue: {
      type: Number,
      "default": 0
    },
    minuteInterval: {
      type: Number,
      "default": 1
    },
    secondInterval: {
      type: Number,
      "default": 1
    },
    hideClearButton: {
      type: Boolean,
      "default": false
    },
    closeOnComplete: {
      type: Boolean,
      "default": false
    },
    autoScroll: {
      type: Boolean,
      "default": true
    },
    hourRange: {
      type: Array,
      "default": function _default() {
        return null;
      }
    },
    minuteRange: {
      type: Array,
      "default": function _default() {
        return null;
      }
    },
    secondRange: {
      type: Array,
      "default": function _default() {
        return null;
      }
    },
    hideDisabledHours: {
      type: Boolean,
      "default": false
    },
    hideDisabledMinutes: {
      type: Boolean,
      "default": false
    },
    hideDisabledSeconds: {
      type: Boolean,
      "default": false
    },
    hideDisabledItems: {
      type: Boolean,
      "default": false
    },
    advancedKeyboard: {
      type: Boolean,
      "default": false
    },
    blurDelay: {
      type: Number,
      "default": 300
    },
    manualDnput: {
      type: Boolean,
      "default": false
    },
    manualInputTimeout: {
      type: Number,
      "default": 1000
    },
    hideDropdown: {
      type: Boolean,
      "default": false
    },
    fixedDropdownButton: {
      type: Boolean,
      "default": false
    },
    dropDirection: {
      validator: function validator(value) {
        return oneOf(value, ['down', 'up', 'auto']);
      },
      "default": 'down'
    },
    containerId: {
      type: String,
      "default": ''
    },
    dropOffsetHeight: {
      type: Number,
      "default": 160
    },
    lazy: {
      type: Boolean,
      "default": true
    },
    debugMode: {
      type: Boolean,
      "default": true
    },
    type: {
      validator: function validator(value) {
        return oneOf(value, ['time']);
      },
      "default": 'time'
    },
    value: {
      type: [String, Number],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'fullwidth']);
      },
      "default": 'default'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    autofocus: {
      type: Boolean,
      "default": false
    },
    autocomplete: {
      validator: function validator(value) {
        return oneOf(value, ['on', 'off']);
      },
      "default": 'off'
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  computed: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-time'];
      classesList.push('size-' + this.size);

      if (this.error) {
        classesList.push('has-error');
      }

      return classesList;
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleKeydown: function handleKeydown(event) {
      this.$emit('on-keydown', event);
    },
    handleKeypress: function handleKeypress(event) {
      this.$emit('on-keypress', event);
    },
    handleKeyup: function handleKeyup(event) {
      this.$emit('on-keyup', event);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('on-blur', event);
    },
    handleOpen: function handleOpen(event) {
      this.$emit('on-open', event);
    },
    handleClose: function handleClose(event) {
      this.$emit('on-close', event);
    },
    handleError: function handleError(event) {
      this.$emit('on-error', event);
    },
    handleInput: function handleInput(value) {
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', value);
    },
    handleChange: function handleChange(event) {
      this.$emit('on-input-change', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }

      this.currentValue = value;
    }
  }
};
/* harmony default export */ const time = (Time);
;// CONCATENATED MODULE: ./assets/src/js/components/form/switcher.js

var Switcher = {
  name: 'cx-vui-switcher',
  template: '#cx-vui-switcher',
  mixins: [checkConditions],
  props: {
    value: {
      type: [String, Number, Boolean],
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    returnTrue: {
      type: [String, Number, Boolean],
      "default": true
    },
    returnFalse: {
      type: [String, Number, Boolean],
      "default": ''
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId,
      isOn: false,
      inFocus: false
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);

      if (val === this.returnTrue) {
        this.isOn = true;
      } else {
        this.isOn = false;
      }
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }

    if (this.value === this.returnTrue) {
      this.isOn = true;
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
      this.switchState();
      this.inFocus = true;
    },
    handleFocus: function handleFocus(event) {
      this.inFocus = true;
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.inFocus = false;
      this.$emit('on-blur', event);
    },
    switchState: function switchState() {
      var value;
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
    handleChange: function handleChange(event) {
      this.$emit('on-input-change', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }

      this.currentValue = value;
    }
  }
};
/* harmony default export */ const switcher = (Switcher);
;// CONCATENATED MODULE: ./node_modules/v-click-outside-x/package.json
const package_namespaceObject = {"i8":"4.1.3"};
;// CONCATENATED MODULE: ./node_modules/v-click-outside-x/dist/v-click-outside-x.esm.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { v_click_outside_x_esm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function v_click_outside_x_esm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var version = package_namespaceObject.i8;
/**
 * @typedef {import("../types/index.d.ts")} VClickOutsidePlugin
 */

var CLICK = 'click';
var captureInstances = Object.create(null);
var nonCaptureInstances = Object.create(null);
var captureEventHandlers = Object.create(null);
var nonCaptureEventHandlers = Object.create(null);
var instancesList = [captureInstances, nonCaptureInstances];
/**
 * The common event handler for bot capture and non-capture events.
 *
 * @param {!object} context - The event context.
 * @param {!object} instances - The capture or non-capture registered instances.
 * @param {Event} event - The event object.
 * @param {string} arg - The event type.
 * @returns {undefined} Default.
 */

var commonHandler = function onCommonEvent(context, instances, event, arg) {
  var target = event.target;

  var itemIteratee = function itemIteratee(item) {
    var el = item.el;

    if (el !== target && !el.contains(target)) {
      var binding = item.binding;

      if (binding.modifiers.stop) {
        event.stopPropagation();
      }

      if (binding.modifiers.prevent) {
        event.preventDefault();
      }

      binding.value.call(context, event);
    }
  };

  instances[arg].forEach(itemIteratee);
};
/**
 * Get the correct event handler: Capture or non-capture.
 *
 * @param {boolean} useCapture - Indicate which handler to use; 'true' to use
 *  capture handler or 'false' for non-capture.
 * @param {string} arg - The event type.
 * @returns {Function} - The event handler.
 */


var getEventHandler = function getEventHandler(useCapture, arg) {
  if (useCapture) {
    if (captureEventHandlers[arg]) {
      return captureEventHandlers[arg];
    }
    /**
     * Event handler for capture events.
     *
     * @param {Event} event - The event object.
     */


    captureEventHandlers[arg] = function onCaptureEvent(event) {
      commonHandler(this, captureInstances, event, arg);
    };

    return captureEventHandlers[arg];
  }

  if (nonCaptureEventHandlers[arg]) {
    return nonCaptureEventHandlers[arg];
  }
  /**
   * Event handler for non-capture events.
   *
   * @param {Event} event - The event object.
   */


  nonCaptureEventHandlers[arg] = function onNonCaptureEvent(event) {
    commonHandler(this, nonCaptureInstances, event, arg);
  };

  return nonCaptureEventHandlers[arg];
};
/**
 * The directive definition.
 * {@link https://vuejs.org/v2/guide/custom-directive.html|Custom directive}.
 *
 * @type {VClickOutsidePlugin.directive}
 * @property {!object} $captureInstances - Registered capture instances.
 * @property {!object} $nonCaptureInstances - Registered non-capture instances.
 * @property {Function} $_onCaptureEvent - Event handler for capture events.
 * @property {Function} $_onNonCaptureEvent - Event handler for non-capture events.
 * @property {Function} bind - Called only once, when the directive is first
 *  bound to the element.
 * @property {Function} unbind - Called only once, when the directive is unbound
 *  from the element.
 * @property {string} version - The version number of this release.
 */


var directive = Object.defineProperties({}, {
  $captureInstances: {
    value: captureInstances
  },
  $nonCaptureInstances: {
    value: nonCaptureInstances
  },
  $captureEventHandlers: {
    value: captureEventHandlers
  },
  $nonCaptureEventHandlers: {
    value: nonCaptureEventHandlers
  },
  bind: {
    value: function bind(el, binding) {
      if (typeof binding.value !== 'function') {
        throw new TypeError('Binding value must be a function.');
      }

      var arg = binding.arg || CLICK;

      var normalisedBinding = _objectSpread(_objectSpread({}, binding), {
        arg: arg,
        modifiers: _objectSpread(_objectSpread({}, {
          capture: false,
          prevent: false,
          stop: false
        }), binding.modifiers)
      });

      var useCapture = normalisedBinding.modifiers.capture;
      var instances = useCapture ? captureInstances : nonCaptureInstances;

      if (!Array.isArray(instances[arg])) {
        instances[arg] = [];
      }

      if (instances[arg].push({
        el: el,
        binding: normalisedBinding
      }) === 1) {
        /* istanbul ignore next */
        if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document) {
          document.addEventListener(arg, getEventHandler(useCapture, arg), useCapture);
        }
      }
    }
  },
  unbind: {
    value: function unbind(el) {
      var compareElements = function compareElements(item) {
        return item.el !== el;
      };

      var instancesIteratee = function instancesIteratee(instances) {
        var instanceKeys = Object.keys(instances);

        if (instanceKeys.length) {
          var useCapture = instances === captureInstances;

          var keysIteratee = function keysIteratee(eventName) {
            var newInstance = instances[eventName].filter(compareElements);

            if (newInstance.length) {
              instances[eventName] = newInstance;
            } else {
              /* istanbul ignore next */
              if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document) {
                document.removeEventListener(eventName, getEventHandler(useCapture, eventName), useCapture);
              }

              delete instances[eventName];
            }
          };

          instanceKeys.forEach(keysIteratee);
        }
      };

      instancesList.forEach(instancesIteratee);
    }
  },

  /* Note: This needs to be manually updated to match package.json. */
  version: {
    enumerable: true,
    value: version
  }
});
/**
 * A Vue.js plugin should expose an install method. The method will be called
 * with the Vue constructor as the first argument, along with possible options.
 * {@link https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin|Writing a plugin}.
 *
 * @type {VClickOutsidePlugin.install}
 * @param {import("vue")} Vue - The Vue constructor.
 */

function install(Vue) {
  Vue.directive('click-outside', directive);
}

//# sourceMappingURL=v-click-outside-x.esm.js.map
;// CONCATENATED MODULE: ./assets/src/js/components/form/iconpicker.js



var Iconpicker = {
  name: 'cx-vui-iconpicker',
  template: '#cx-vui-iconpicker',
  mixins: [checkConditions],
  directives: {
    clickOutside: directive
  },
  props: {
    value: {
      type: [String],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'fullwidth']);
      },
      "default": 'default'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    autofocus: {
      type: Boolean,
      "default": false
    },
    elementId: {
      type: String
    },
    autocomplete: {
      validator: function validator(value) {
        return oneOf(value, ['on', 'off']);
      },
      "default": 'off'
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    iconBase: {
      type: String,
      "default": ''
    },
    iconPrefix: {
      type: String,
      "default": ''
    },
    icons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId,
      filterQuery: '',
      panelActive: false
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  computed: {
    prefixedIcons: function prefixedIcons() {
      var _this = this;

      var prefixedIcons = [];
      this.icons.forEach(function (icon) {
        prefixedIcons.push(_this.iconPrefix + icon);
      });
      return prefixedIcons;
    },
    filteredIcons: function filteredIcons() {
      var _this2 = this;

      if (!this.filterQuery) {
        return this.prefixedIcons;
      } else {
        return this.prefixedIcons.filter(function (icon) {
          return icon.includes(_this2.filterQuery);
        });
      }
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleKeydown: function handleKeydown(event) {
      this.$emit('on-keydown', event);
    },
    handleKeypress: function handleKeypress(event) {
      this.$emit('on-keypress', event);
    },
    handleKeyup: function handleKeyup(event) {
      this.$emit('on-keyup', event);
    },
    handleFocus: function handleFocus(event) {
      this.panelActive = true;
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('on-blur', event);
    },
    seclectIcon: function seclectIcon(icon) {
      this.$emit('input', icon);
      this.setCurrentValue(icon);
      this.$emit('on-change', icon);
      this.closePanel();
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;
      this.filterQuery = value;
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', event);
    },
    handleChange: function handleChange(event) {
      this.$emit('on-input-change', event);
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return;
      }

      this.currentValue = value;
    },
    onClickOutside: function onClickOutside(event) {
      this.closePanel();
    },
    closePanel: function closePanel() {
      if (this.panelActive) {
        this.panelActive = false;
        this.filterQuery = '';
        this.$emit('on-panel-closed');
      }
    }
  }
};
/* harmony default export */ const iconpicker = (Iconpicker);
;// CONCATENATED MODULE: ./assets/src/js/components/form/select.js
function select_typeof(obj) { "@babel/helpers - typeof"; return select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, select_typeof(obj); }



var SelectPlain = {
  name: 'cx-vui-select',
  template: '#cx-vui-select',
  mixins: [checkConditions],
  props: {
    value: {
      type: [String, Number, Array],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default', 'fullwidth']);
      },
      "default": 'default'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    optionsList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    groupsList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    remote: {
      type: Boolean,
      "default": false
    },
    remoteCallback: {
      type: Function
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      options: this.optionsList,
      currentValue: this.value,
      currentId: this.elementId,
      groups: this.groupsList
    };
  },
  watch: {
    value: function value(val) {
      this.storeCurrentValue(val);
    },
    optionsList: function optionsList(options) {
      this.setOptions(options);
    }
  },
  created: function created() {
    if (this.multiple) {
      if (this.currentValue && 'object' !== select_typeof(this.currentValue)) {
        this.currentValue = [this.currentValue];
      }
    } else {
      if (this.currentValue && 'object' === select_typeof(this.currentValue)) {
        this.currentValue = this.currentValue[0];
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }

    if (this.remote && this.remoteCallback) {
      var promise = this.remoteCallback();

      if (promise && promise.then) {
        promise.then(function (options) {
          if (options) {
            _this.options = options;
          }
        });
      }
    }
  },
  methods: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-select'];
      classesList.push('size-' + this.size);
      return classesList;
    },
    handleFocus: function handleFocus(event) {
      this.$emit('on-focus', event);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('on-blur', event);
    },
    handleInput: function handleInput() {
      this.$emit('input', this.currentValue);
      this.$emit('on-change', event);
    },
    storeCurrentValue: function storeCurrentValue(value) {
      if (this.multiple) {
        if (oneOf(value, this.currentValue)) {
          return;
        }

        if ('object' === select_typeof(value)) {
          if ('[object Array]' === Object.prototype.toString.call(value)) {
            this.currentValues.concat(value);
          } else {
            this.currentValues.push(value);
          }
        } else {
          this.currentValue.push(value);
        }
      } else {
        if (value === this.currentValue) {
          return;
        }

        this.currentValue = value;
      }
    },
    setOptions: function setOptions(options) {
      this.options = options;
    },
    isOptionSelected: function isOptionSelected(option) {
      if (!this.currentValue) {
        return false;
      }

      if (this.multiple) {
        return oneOf(option.value, this.currentValue);
      } else {
        return option.value === this.currentValue;
      }
    }
  }
};
/* harmony default export */ const form_select = (SelectPlain);
;// CONCATENATED MODULE: ./assets/src/js/components/form/f-select.js
function f_select_typeof(obj) { "@babel/helpers - typeof"; return f_select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, f_select_typeof(obj); }




var FilterableSelect = {
  name: 'cx-vui-f-select',
  template: '#cx-vui-f-select',
  mixins: [checkConditions],
  directives: {
    clickOutside: directive
  },
  props: {
    value: {
      type: [String, Number, Array],
      "default": ''
    },
    placeholder: {
      type: String,
      "default": ''
    },
    optionsList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    error: {
      type: Boolean,
      "default": false
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    elementId: {
      type: String
    },
    autocomplete: {
      type: String,
      "default": 'off'
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    remote: {
      type: Boolean,
      "default": false
    },
    remoteCallback: {
      type: Function
    },
    remoteTrigger: {
      type: Number,
      "default": 3
    },
    remoteTriggerMessage: {
      type: String,
      "default": 'Please enter %d char(s) to start search'
    },
    notFoundMeassge: {
      type: String,
      "default": 'There is no items find matching this query'
    },
    loadingMessage: {
      type: String,
      "default": 'Loading...'
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      options: this.optionsList,
      currentValues: this.value,
      currentId: this.elementId,
      selectedOptions: [],
      query: '',
      inFocus: false,
      optionInFocus: false,
      loading: false,
      loaded: false
    };
  },
  watch: {
    value: function value(newValue, oldValue) {
      if (this.multiple) {
        if (arraysEqual(newValue, oldValue)) {
          return;
        }
      } else {
        if (newValue === oldValue) {
          return;
        }
      }

      this.storeValues(newValue);
    },
    optionsList: function optionsList(options) {
      this.setOptions(options);
    }
  },
  created: function created() {
    if (!this.currentValues) {
      this.currentValues = [];
    } else if ('object' !== f_select_typeof(this.currentValues)) {
      if ('[object Array]' === Object.prototype.toString.call(this.currentValues)) {} else {
        this.currentValues = [this.currentValues];
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }

    if (this.remote && this.remoteCallback && this.currentValues.length) {
      this.remoteUpdateSelected();
    } else if (this.currentValues.length) {
      this.options.forEach(function (option) {
        if (oneOf(option.value, _this.currentValues)) {
          _this.selectedOptions.push(option);
        }
      });
    }
  },
  computed: {
    filteredOptions: function filteredOptions() {
      var _this2 = this;

      if (!this.query) {
        return this.options;
      } else {
        return this.options.filter(function (option) {
          if (_this2.remote) {
            return true;
          } else {
            return option.label.includes(_this2.query) || option.value.includes(_this2.query);
          }
        });
      }
    },
    parsedRemoteTriggerMessage: function parsedRemoteTriggerMessage() {
      return this.remoteTriggerMessage.replace(/\%d/g, this.charsDiff);
    },
    charsDiff: function charsDiff() {
      var queryLength = 0;

      if (this.query) {
        queryLength = this.query.length;
      }

      return this.remoteTrigger - queryLength;
    }
  },
  methods: {
    remoteUpdateSelected: function remoteUpdateSelected() {
      var _this3 = this;

      this.loading = true;
      var promise = this.remoteCallback(this.query, this.currentValues);

      if (promise && promise.then) {
        promise.then(function (options) {
          if (options) {
            _this3.selectedOptions = options;
            _this3.loaded = true;
            _this3.loading = false;
          }
        });
      }
    },
    setValues: function setValues(values) {
      values = values || [];
      this.selectedOptions = [];
      this.currentValues = [];
      this.storeValues(values);
    },
    handleFocus: function handleFocus(event) {
      this.inFocus = true;
      this.$emit('on-focus', event);
    },
    handleOptionsNav: function handleOptionsNav(event) {
      // next
      if ('ArrowUp' === event.key || 'Tab' === event.key) {
        this.navigateOptions(-1);
      } // prev


      if ('ArrowDown' === event.key) {
        this.navigateOptions(1);
      }
    },
    navigateOptions: function navigateOptions(direction) {
      if (false === this.optionInFocus) {
        this.optionInFocus = -1;
      }

      var index = this.optionInFocus + direction;
      var maxLength = this.filteredOptions.length - 1;

      if (maxLength < 0) {
        maxLength = 0;
      }

      if (index < 0) {
        index = 0;
      } else if (index > maxLength) {
        index = maxLength;
      }

      this.optionInFocus = index;
    },
    onClickOutside: function onClickOutside(event) {
      if (this.inFocus) {
        this.inFocus = false;
        this.$emit('on-blur', event);
      }
    },
    handleInput: function handleInput(event) {
      var _this4 = this;

      var value = event.target.value;
      this.query = value;
      this.$emit('input', this.currentValues);
      this.$emit('on-change', event);

      if (!this.inFocus) {
        this.inFocus = true;
      }

      if (this.remote && this.remoteCallback && this.charsDiff <= 0 && !this.loading) {
        this.loading = true;
        var promise = this.remoteCallback(this.query, []);

        if (promise && promise.then) {
          promise.then(function (options) {
            if (options) {
              _this4.options = options;
              _this4.loaded = true;
              _this4.loading = false;
            }
          });
        }
      } else if (this.remote && this.remoteCallback && this.loaded && this.charsDiff > 0) {
        this.resetRemoteOptions();
      }
    },
    handleEnter: function handleEnter() {
      if (false === this.optionInFocus || !this.options[this.optionInFocus]) {
        return;
      }

      var value = this.filteredOptions[this.optionInFocus].value;
      this.handleResultClick(value);
    },
    handleResultClick: function handleResultClick(value) {
      if (oneOf(value, this.currentValues)) {
        this.removeValue(value);
      } else {
        this.storeValues(value);
      }

      this.$emit('input', this.currentValues);
      this.$emit('on-change', this.currentValues);
      this.inFocus = false;
      this.optionInFocus = false;
      this.query = '';

      if (this.remote && this.remoteCallback && this.loaded) {
        this.resetRemoteOptions();
      }
    },
    resetRemoteOptions: function resetRemoteOptions() {
      this.options = [];
      this.loaded = false;
    },
    removeValue: function removeValue(value) {
      this.currentValues.splice(this.currentValues.indexOf(value), 1);
      this.removeFromSelected(value);
    },
    removeFromSelected: function removeFromSelected(value) {
      var _this5 = this;

      this.selectedOptions.forEach(function (option, index) {
        if (option.value === value) {
          _this5.selectedOptions.splice(index, 1);
        }
      });
    },
    pushToSelected: function pushToSelected(value, single) {
      var _this6 = this;

      this.options.forEach(function (option) {
        if (option.value === value) {
          if (!single) {
            _this6.selectedOptions.push(option);
          } else {
            _this6.selectedOptions = [option];
          }
        }
      });
    },
    storeValues: function storeValues(value) {
      var _this7 = this;

      if (oneOf(value, this.currentValues)) {
        return;
      }

      if (this.multiple) {
        if ('object' === f_select_typeof(value)) {
          if ('[object Array]' === Object.prototype.toString.call(value)) {
            value.forEach(function (singleVal) {
              if (!oneOf(singleVal, _this7.currentValues)) {
                _this7.currentValues.push(singleVal);

                _this7.pushToSelected(singleVal);
              }
            });
          } else {
            this.currentValues.push(value);
            this.pushToSelected(value);
          }
        } else {
          this.currentValues.push(value);
          this.pushToSelected(value);
        }
      } else {
        if ('object' === f_select_typeof(value)) {
          if ('[object Array]' === Object.prototype.toString.call(value)) {
            this.currentValues = value;
            value.forEach(function (singleVal) {
              _this7.pushToSelected(singleVal, true);
            });
          } else {
            this.currentValues = [value];
            this.pushToSelected(value, true);
          }
        } else {
          this.currentValues = [value];
          this.pushToSelected(value, true);
        }
      }
    },
    setOptions: function setOptions(options) {
      this.options = options;
    },
    isOptionSelected: function isOptionSelected(option) {
      if (!this.currentValues) {
        return false;
      }

      return oneOf(option.value, this.currentValues);
    }
  }
};
/* harmony default export */ const f_select = (FilterableSelect);
;// CONCATENATED MODULE: ./assets/src/js/components/form/checkbox.js


var Checkbox = {
  name: 'cx-vui-checkbox',
  template: '#cx-vui-checkbox',
  mixins: [checkConditions],
  props: {
    returnType: {
      validator: function validator(value) {
        return oneOf(value, ['array', 'object', 'single']);
      },
      "default": 'object'
    },
    value: {
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    optionsList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    returnTrue: {
      type: [Boolean, String, Number],
      "default": true
    },
    returnFalse: {
      type: [Boolean, String, Number],
      "default": false
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValues: this.value,
      currentId: this.elementId,
      optionInFocus: null
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValues(val);
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  computed: {
    inputType: function inputType() {
      if ('array' === this.returnType) {
        return 'checkbox';
      } else {
        return 'hidden';
      }
    }
  },
  methods: {
    inputValue: function inputValue(optionValue) {
      if ('checkbox' === this.inputType) {
        return this.returnTrue;
      } else {
        if (this.isChecked(optionValue)) {
          return this.returnTrue;
        } else {
          return this.returnFalse;
        }
      }
    },
    isChecked: function isChecked(optionValue) {
      if (!this.currentValues) {
        return false;
      }

      switch (this.returnType) {
        case 'single':
          return optionValue === this.currentValues;

        case 'array':
          return oneOf(optionValue, this.currentValues);

        case 'object':
          if (!this.currentValues[optionValue]) {
            return false;
          } else {
            if (this.currentValues[optionValue] === this.returnTrue) {
              return true;
            } else {
              return false;
            }
          }

          break;
      }

      ;
    },
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleClick: function handleClick(event) {
      this.$emit('on-click', event);
    },
    handleFocus: function handleFocus(event, value) {
      if (this.disabled) {
        return;
      }

      this.optionInFocus = value;
      this.$emit('on-focus', event, value);
    },
    handleBlur: function handleBlur(event, value) {
      if (this.disabled) {
        return;
      }

      if (value === this.optionInFocus) {
        this.optionInFocus = null;
      }

      this.$emit('on-blur', event, value);
    },
    handleParentFocus: function handleParentFocus() {
      if (this.disabled) {
        return;
      }

      if (null === this.optionInFocus && this.optionsList.length) {
        this.optionInFocus = this.optionsList[0].value;
      }
    },
    handleInput: function handleInput(event, value) {
      if (this.disabled) {
        return;
      }

      this.updateValueState(value);
      this.$emit('input', this.currentValues);
      this.$emit('on-change', event);
    },
    isOptionInFocus: function isOptionInFocus(value) {
      return value === this.optionInFocus;
    },
    updateValueState: function updateValueState(value) {
      switch (this.returnType) {
        case 'single':
          if (value !== this.currentValues) {
            this.currentValues = value;
          }

          break;

        case 'array':
          if (!oneOf(value, this.currentValues)) {
            this.currentValues.push(value);
          } else {
            this.currentValues.splice(this.currentValues.indexOf(value), 1);
          }

          break;

        case 'object':
          if (!this.currentValues[value]) {
            this.$set(this.currentValues, value, this.returnTrue);
          } else {
            if (this.currentValues[value] === this.returnTrue) {
              this.$set(this.currentValues, value, this.returnFalse);
            } else {
              this.$set(this.currentValues, value, this.returnTrue);
            }
          }

          break;
      }
    },
    setCurrentValues: function setCurrentValues(value) {
      switch (this.returnType) {
        case 'single':
          if (value !== this.currentValues) {
            this.currentValues = value;
          }

          break;

        case 'array':
        case 'object':
          this.currentValues = value;
          break;
      }

      ;
    }
  }
};
/* harmony default export */ const form_checkbox = (Checkbox);
;// CONCATENATED MODULE: ./assets/src/js/components/form/radio.js


var Radio = {
  name: 'cx-vui-radio',
  template: '#cx-vui-radio',
  mixins: [checkConditions],
  props: {
    value: {
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    optionsList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId,
      optionInFocus: null
    };
  },
  watch: {
    value: function value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  methods: {
    handleEnter: function handleEnter(event) {
      this.$emit('on-enter', event);
    },
    handleClick: function handleClick(event) {
      this.$emit('on-click', event);
    },
    handleFocus: function handleFocus(event, value) {
      if (this.disabled) {
        return;
      }

      this.optionInFocus = value;
      this.$emit('on-focus', event, value);
    },
    handleBlur: function handleBlur(event, value) {
      if (this.disabled) {
        return;
      }

      if (value === this.optionInFocus) {
        this.optionInFocus = null;
      }

      this.$emit('on-blur', event, value);
    },
    handleInput: function handleInput(event, value) {
      if (this.disabled) {
        return;
      }

      this.setCurrentValue(value);
      this.$emit('input', this.currentValue);
      this.$emit('on-change', event);
    },
    isOptionInFocus: function isOptionInFocus(value) {
      return value === this.optionInFocus;
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value !== this.currentValue) {
        this.currentValue = value;
      }
    }
  }
};
/* harmony default export */ const form_radio = (Radio);
// EXTERNAL MODULE: ./node_modules/vue-color/dist/vue-color.min.js
var vue_color_min = __webpack_require__(23);
;// CONCATENATED MODULE: ./assets/src/js/components/form/colorpicker.js




var Colorpicker = {
  name: 'cx-vui-colorpicker',
  template: '#cx-vui-colorpicker',
  mixins: [checkConditions],
  directives: {
    clickOutside: directive
  },
  props: {
    type: {
      validator: function validator(value) {
        return oneOf(value, ['rgba', 'hsla', 'hex', 'hex8']);
      },
      "default": 'rgba'
    },
    value: {
      type: [String],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default']);
      },
      "default": 'default'
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  components: {
    'chrome-picker': vue_color_min.Chrome
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId,
      panelActive: false
    };
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  computed: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-colorpicker'];
      classesList.push('size-' + this.size);
      return classesList;
    },
    isCloseVisible: function isCloseVisible() {
      return !this.currentValue ? false : true;
    }
  },
  methods: {
    setCurrentValue: function setCurrentValue(value) {
      var colorValue = '';

      switch (this.type) {
        case 'rgba':
          colorValue = "rgba(".concat(value.rgba.r, ",").concat(value.rgba.g, ",").concat(value.rgba.b, ",").concat(value.rgba.a, ")");
          break;

        case 'hsl':
          colorValue = "rgba(".concat(value.hsl.h, ",").concat(value.hsl.s, "%,").concat(value.hsl.l, "%,").concat(value.hsl.a, ")");
          break;

        case 'hex':
          colorValue = value.hex;
          break;

        case 'hex8':
          colorValue = value.hex8;
          break;

        default:
          colorValue = '';
          break;
      }

      if (colorValue === this.currentValue) {
        return;
      }

      this.$emit('input', colorValue);
      this.currentValue = colorValue;
      this.$emit('on-change', colorValue);
    },
    onClickOutside: function onClickOutside(event) {
      this.closePanel();
    },
    closePanel: function closePanel() {
      if (this.panelActive) {
        this.panelActive = false;
        this.$emit('on-panel-closed');
      }
    },
    clearColor: function clearColor() {
      this.$emit('input', '');
      this.currentValue = '';
      this.$emit('on-change', '');
    }
  }
};
/* harmony default export */ const colorpicker = (Colorpicker);
;// CONCATENATED MODULE: ./assets/src/js/components/form/wp-media.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var WpMedia = {
  name: 'cx-vui-wp-media',
  template: '#cx-vui-wp-media',
  mixins: [checkConditions],
  props: {
    returnType: {
      validator: function validator(value) {
        return oneOf(value, ['string', 'array']);
      },
      "default": 'string'
    },
    mediaType: {
      validator: function validator(value) {
        return oneOf(value, ['image', 'video']);
      },
      "default": 'image'
    },
    value: {
      type: [String],
      "default": ''
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['small', 'large', 'default']);
      },
      "default": 'default'
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      "default": true
    },
    mediaPopupTitle: {
      type: String
    },
    mediaPopupButton: {
      type: String
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  components: {
    SlickList: vue_slicksort_umd.SlickList,
    SlickItem: vue_slicksort_umd.SlickItem
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId,
      attachmentList: [],
      wpMedia: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }

    this.wpMedia = wp.media.frames.file_frame = wp.media({
      title: this.mediaPopupTitle,
      button: {
        text: this.mediaPopupButton
      },
      library: {
        type: this.mediaType
      },
      multiple: this.multiple
    });
    this.wpMedia.on('select', function () {
      var mediaAttachments = _this.wpMedia.state().get('selection').toJSON(),
          newAttachments = [];

      if (_this.multiple) {
        var _iterator = _createForOfIteratorHelper(mediaAttachments),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var attachment = _step.value;

            if (!_this.attachmentIdList.includes(attachment.id)) {
              newAttachments.push(attachment);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this.attachmentList = _this.attachmentList.concat(newAttachments);
      } else {
        _this.attachmentList = mediaAttachments;
      }

      _this.setCurrentValue();
    });
    this.getAttachmentsData();
  },
  computed: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-media'];
      classesList.push('size-' + this.size);
      return classesList;
    },
    inputValue: function inputValue() {
      if ('array' === this.returnType) {
        return JSON.stringify(this.currentValue);
      }

      return this.currentValue;
    },
    attachmentIdList: function attachmentIdList() {
      return this.attachmentList.map(function (item) {
        return item.id;
      });
    }
  },
  methods: {
    getAttachmentsData: function getAttachmentsData() {
      if (false === this.currentValue || '' === this.currentValue) {
        return;
      }

      var thisVue = this,
          attachmentIds = [],
          attachments = [];

      switch (this.returnType) {
        case 'string':
          attachmentIds = this.currentValue.split(',');
          break;

        case 'array':
          attachmentIds = this.currentValue;
          break;
      }

      wp.media.query({
        post__in: attachmentIds
      }).more().then(function () {
        var _iterator2 = _createForOfIteratorHelper(attachmentIds),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var attachmentId = _step2.value;
            attachments.push(wp.media.attachment(attachmentId).attributes);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        thisVue.attachmentList = attachments;
      });
    },
    openWpMediaPopup: function openWpMediaPopup() {
      this.wpMedia.open();
    },
    removeAttachment: function removeAttachment(id) {
      this.attachmentList = this.attachmentList.filter(function (obj) {
        return obj.id !== id;
      });
      this.setCurrentValue();
    },
    sortInput: function sortInput(sortedList) {
      this.setCurrentValue();
    },
    setCurrentValue: function setCurrentValue() {
      var currentValue;

      switch (this.returnType) {
        case 'string':
          currentValue = this.attachmentIdList.join(',');
          break;

        case 'array':
          currentValue = this.attachmentIdList;
          break;
      }

      this.$emit('input', currentValue);
      this.currentValue = currentValue;
      this.$emit('on-change', currentValue);
    }
  }
};
/* harmony default export */ const wp_media = (WpMedia);
;// CONCATENATED MODULE: ./assets/src/js/components/form/dimensions.js


var Dimensions = {
  name: 'cx-vui-dimensions',
  template: '#cx-vui-dimensions',
  mixins: [checkConditions],
  props: {
    value: {
      type: Object,
      "default": {
        'top': '',
        'right': '',
        'bottom': '',
        'left': '',
        'is_linked': true,
        'units': 'px'
      }
    },
    units: {
      type: Array,
      "default": function _default() {
        return [{
          unit: 'px',
          min: -1000,
          max: 1000,
          step: 1
        }, {
          unit: 'em',
          min: 0,
          max: 10,
          step: 0.1
        }, {
          unit: '%',
          min: 0,
          max: 100,
          step: 1
        }];
      }
    },
    size: {
      validator: function validator(value) {
        return oneOf(value, ['fullwidth', 'default']);
      },
      "default": 'default'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String
    },
    elementId: {
      type: String
    },
    conditions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Wrapper related props (should be passed into wrapper component)
    preventWrap: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    description: {
      type: String
    },
    wrapperCss: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  mounted: function mounted() {
    if (!this.currentId && this.name) {
      this.currentId = 'cx_' + this.name;
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      currentId: this.elementId,
      isLink: this.value['is_linked'] ? true : false
    };
  },
  computed: {
    controlClasses: function controlClasses() {
      var classesList = ['cx-vui-dimensions'];
      classesList.push('size-' + this.size);
      return classesList;
    },
    sanitizeValue: function sanitizeValue() {
      return {
        top: this.currentValue.top || '',
        right: this.currentValue.right || '',
        bottom: this.currentValue.bottom || '',
        left: this.currentValue.left || '',
        is_linked: this.isLink ? '1' : '0',
        units: this.currentValue.units || 'px'
      };
    },
    min: function min() {
      var _this = this;

      var unitData = this.units.filter(function (obj) {
        return obj.unit === _this.currentValue.units;
      });

      if (0 === unitData.length) {
        return false;
      }

      return unitData[0]['min'];
    },
    max: function max() {
      var _this2 = this;

      var unitData = this.units.filter(function (obj) {
        return obj.unit === _this2.currentValue.units;
      });

      if (0 === unitData.length) {
        return false;
      }

      return unitData[0]['max'];
    },
    step: function step() {
      var _this3 = this;

      var unitData = this.units.filter(function (obj) {
        return obj.unit === _this3.currentValue.units;
      });

      if (0 === unitData.length) {
        return false;
      }

      return unitData[0]['step'];
    }
  },
  methods: {
    handleInput: function handleInput(value) {
      if (this.isLink) {
        this.currentValue.top = value;
        this.currentValue.right = value;
        this.currentValue.bottom = value;
        this.currentValue.left = value;
      }

      this.$emit('input', this.sanitizeValue);
    },
    handleChange: function handleChange(event) {
      var value = event.target.value;

      if (this.isLink) {
        this.currentValue.top = value;
        this.currentValue.right = value;
        this.currentValue.bottom = value;
        this.currentValue.left = value;
      }

      this.$emit('on-change', this.sanitizeValue);
    },
    unitHandler: function unitHandler(unit) {
      this.currentValue.units = unit;
      this.$emit('input', this.sanitizeValue);
      this.$emit('on-change', this.sanitizeValue);
      this.$emit('on-unit-updated', unit);
    },
    linkHandler: function linkHandler() {
      this.isLink = !this.isLink;
      this.currentValue['is_linked'] = this.isLink ? '1' : '0';
      this.$emit('input', this.sanitizeValue);
      this.$emit('on-change', this.sanitizeValue);
      this.$emit('on-link-updated');
    }
  }
};
/* harmony default export */ const dimensions = (Dimensions);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./assets/src/scss/cx-vue-ui.scss
var cx_vue_ui = __webpack_require__(604);
;// CONCATENATED MODULE: ./assets/src/scss/cx-vue-ui.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cx_vue_ui/* default */.Z, options);




       /* harmony default export */ const scss_cx_vue_ui = (cx_vue_ui/* default */.Z && cx_vue_ui/* default.locals */.Z.locals ? cx_vue_ui/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./assets/src/js/cx-vue-ui-components.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





























var cxVueUiClass = /*#__PURE__*/function () {
  function cxVueUiClass() {
    _classCallCheck(this, cxVueUiClass);

    this.components = {
      ComponentWrapper: component_wrapper,
      Title: title,
      Collapse: collapse,
      Button: layout_button,
      Repeater: repeater,
      RepeaterItem: repeater_item,
      Popup: popup,
      ListTable: list_table,
      ListTableItem: list_table_item,
      ListTableHeading: list_table_heading,
      Tabs: tabs,
      TabsPanel: tabs_panel,
      Pagination: pagination,
      Input: input,
      Textarea: form_textarea,
      Time: time,
      Switcher: switcher,
      Iconpicker: iconpicker,
      SelectPlain: form_select,
      FilterableSelect: f_select,
      Checkbox: form_checkbox,
      Radio: form_radio,
      Colorpicker: colorpicker,
      WpMedia: wp_media,
      Dimensions: dimensions
    };
    this.extensions = {
      CXNotice: notice
    };
  }

  _createClass(cxVueUiClass, [{
    key: "registerGlobalComponents",
    value: function registerGlobalComponents(instance) {
      for (var component in this.components) {
        var _component = this.components[component];
        instance.component(_component.name, _component);
      }
    }
  }, {
    key: "registerGlobalExtensions",
    value: function registerGlobalExtensions() {
      for (var extension in this.extensions) {
        var _extensions = this.extensions[extension];
        Vue.prototype['$' + extension] = _extensions;
      }
    }
  }]);

  return cxVueUiClass;
}();

window.cxVueUi = new cxVueUiClass();

/***/ }),

/***/ 604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(954);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(270), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_vue2_timepicker_dist_VueTimepicker_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cx-vui-component{display:flex;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;padding:20px}.cx-vui-component+.cx-vui-component{border-top:1px solid #ececec}.cx-vui-component--equalwidth{justify-content:space-between}.cx-vui-component--equalwidth .cx-vui-component__meta,.cx-vui-component--equalwidth .cx-vui-component__meta+.cx-vui-component__control{flex:0 0 49%;max-width:49%}.cx-vui-component--vertical-fullwidth{flex-direction:column;padding-left:0;padding-right:0}.cx-vui-component--vertical-fullwidth .cx-vui-component__meta{border-bottom:1px solid #ececec;margin:0 0 25px;padding:0 0 20px}.cx-vui-component--vertical-fullwidth .cx-vui-component__label{padding:0 0 5px}.cx-vui-component--fullwidth-control .cx-vui-component__control{flex:0 0 100%;max-width:100%}.cx-vui-component__meta{align-items:flex-start;display:flex;flex-direction:column}.cx-vui-component__label{color:#23282d;display:block;font-size:15px;font-weight:500;line-height:20px}.cx-vui-component__desc{color:#7b7e81;font-size:13px;line-height:17px;padding:0 0 4px}.cx-vui-panel{background:#fff;border-radius:6px;box-shadow:0 2px 6px rgba(35,40,45,.07);font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;margin-bottom:30px}.cx-vui-inner-panel{background:#f5f5f5;border-radius:4px;padding:30px}.cs-vui-title,.wrap .cs-vui-title{font-size:24px;line-height:37px;padding:0 0 20px}.cs-vui-title,.cx-vui-subtitle,.wrap .cs-vui-title{color:#23282d;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:500;margin:0}.cx-vui-subtitle{font-size:18px;line-height:27px;padding:0}.cx-vui-text{color:#7b7e81;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:13px;line-height:20px;padding:15px 0}.cx-vui-hr{border-top:1px solid #dcdcdd;display:block;height:0;margin:30px 0;width:100%}.cx-vui-notice--error{background:#fbf0f0}.cx-vui-notice--success{background:#e9f6ea}.cx-vui-inline-notice{font-weight:700}.cx-vui-inline-notice--error{color:#c92c2c}.cx-vui-inline-notice--success{color:#46b450}.cx-vui-tooltip{background:#23282d;border-radius:3px;bottom:100%;box-shadow:0 1px 4px rgba(35,40,45,.24);color:#fff;font-size:12px;line-height:15px;margin:0 0 10px;padding:5px 15px;position:absolute;text-align:center}.cx-vui-tooltip:after{border-color:#23282d transparent transparent;border-style:solid;border-width:4px 4px 0;content:\"\";height:0;left:50%;margin:0 0 0 -4px;position:absolute;top:100%;width:0}.cx-vui-popup{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:999}.cx-vui-popup__overlay{background:#23282d;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0;z-index:1}.cx-vui-popup__body{background:#fff;border-radius:6px;box-shadow:0 2px 6px rgba(35,40,45,.07);font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;padding:30px 40px 40px;position:relative;z-index:2}.cx-vui-popup__header{padding:0 0 10px}.cx-vui-popup__content,.cx-vui-popup__content p{color:#7b7e81;font-size:13px;line-height:20px}.cx-vui-popup__content p{margin:0;padding:0 0 20px}.cx-vui-popup__footer{align-items:center;display:flex;padding:20px 0 0}.cx-vui-popup__footer .cx-vui-button+.cx-vui-button{margin:0 0 0 10px}.rtl .cx-vui-popup__footer .cx-vui-button+.cx-vui-button{margin:0 10px 0 0}.cx-vui-popup__close{cursor:pointer;position:absolute;right:12px;top:15px}.rtl .cx-vui-popup__close{left:12px;right:auto}.cx-vui-popup__close path{fill:#dcdcdd}.cx-vui-popup__close:hover path{fill:#7b7e81}.cx-vui-collapse{border-bottom:1px solid #dcdcdd}.cx-vui-collapse:last-child{border-bottom:none}.cx-vui-collapse__heading{align-items:center;cursor:pointer;display:flex;padding:20px 0}.cx-vui-collapse__heading-icon{font-size:18px;margin:0 5px 0 0}.rtl .cx-vui-collapse__heading-icon{margin:0 0 0 5px;transform:scaleX(-1)}.cx-vui-collapse--collapsed .cx-vui-collapse__content{display:none}input.cx-vui-input{background-color:#f4f4f5;border:none;border-radius:4px;box-shadow:none;box-sizing:border-box;color:#7b7e81;font-size:13px;line-height:20px;margin:0;max-width:100%;outline:none;padding:6px 12px}input.cx-vui-input:focus{background-color:#fff;box-shadow:inset 0 0 0 2px #80bddc;color:#23282d}input.cx-vui-input.has-error{box-shadow:inset 0 0 0 2px #e49595;color:#c92c2c}input.cx-vui-input.size-fullwidth{width:100%}input.cx-vui-input::-webkit-input-placeholder{color:#b0b4b9}input.cx-vui-input::-moz-placeholder{color:#b0b4b9}input.cx-vui-input:-ms-input-placeholder{color:#b0b4b9}input.cx-vui-input:-moz-placeholder{color:#b0b4b9}.e--ua-firefox.wp-admin .cx-vui-time .dropdown .select-list ul li{width:60px}.wp-admin .cx-vui-time{-webkit-appearance:none;height:auto}.wp-admin .cx-vui-time input[type=text]{background-color:#fff;border:1px solid #7e8993;border-radius:4px;box-shadow:0 0 0 transparent;color:#32373c}.wp-admin .cx-vui-time input[type=text]:focus{border-radius:4px 4px 0 0}.wp-admin .cx-vui-time .dropdown{border-radius:0 0 4px 4px;left:2px;overflow:hidden;width:unset}.wp-admin .cx-vui-time .dropdown .select-list{justify-content:flex-start;width:unset}.wp-admin .cx-vui-time .dropdown .select-list ul{background-color:#fff;color:#7b7e81;flex:0 1 58px}.wp-admin .cx-vui-time .dropdown .select-list ul li{background-color:transparent;margin-bottom:1px;padding:3px 0;width:36px}.wp-admin .cx-vui-time .dropdown .select-list ul li.active,.wp-admin .cx-vui-time .dropdown .select-list ul li:hover{background-color:#007cba;color:#fff}.wp-admin .cx-vui-time .dropdown .select-list ul li.hint{text-transform:uppercase}.wp-admin .cx-vui-time .dropdown .select-list ul li.hint:hover{background-color:#fff;color:#7b7e81}.wp-admin .cx-vui-time .dropdown .select-list ul::-webkit-scrollbar{width:6px}.wp-admin .cx-vui-time .dropdown .select-list ul::-webkit-scrollbar-thumb,.wp-admin .cx-vui-time .dropdown .select-list ul::-webkit-scrollbar-trac{background:#b7b9bb;border-radius:4px}.wp-admin .cx-vui-time .dropdown .select-list ul::-webkit-scrollbar-track-piece{background:#f8f8f8;opacity:.5}.wp-admin .cx-vui-time .dropdown .select-list ul::-webkit-scrollbar-track-piece:hover{opacity:1}.wp-admin .cx-vui-time .dropdown .select-list ul::-webkit-scrollbar-button:single-button{display:none}.wp-admin .cx-vui-time--size-default{font-size:15px;line-height:21px;padding:12px 25px 13px}.wp-admin .cx-vui-time--size-default .cx-vui-button__content .dashicons{margin:0 5px 0 -8px}.rtl .wp-admin .cx-vui-time--size-default .cx-vui-button__content .dashicons{margin:0 -8px 0 5px}.wp-admin .cx-vui-time--size-default .cx-vui-button__content span+.dashicons{margin:-8px 0 0 5px}.rtl .wp-admin .cx-vui-time--size-default .cx-vui-button__content span+.dashicons{margin:-8px 5px 0 0}.wp-admin .cx-vui-time--size-link{font-size:15px;line-height:18px}.wp-admin .cx-vui-time--size-link .cx-vui-button__content svg{margin:0 5px 1px 0}.rtl .wp-admin .cx-vui-time--size-link .cx-vui-button__content svg,.wp-admin .cx-vui-time--size-link .cx-vui-button__content span+svg{margin:0 0 1px 5px}.rtl .wp-admin .cx-vui-time--size-link .cx-vui-button__content span+svg{margin:0 5px 1px 0}.wp-admin .cx-vui-time--size-mini{font-size:13px;line-height:19px;padding:6px 14px 7px}.wp-admin .cx-vui-time--size-mini .cx-vui-button__content .dashicons{margin:0 4px 0 -5px}.rtl .wp-admin .cx-vui-time--size-mini .cx-vui-button__content .dashicons{margin:0 -5px 0 4px}.wp-admin .cx-vui-time--size-mini .cx-vui-button__content span+.dashicons{margin:-5px 0 0 4px}.rtl .wp-admin .cx-vui-time--size-mini .cx-vui-button__content span+.dashicons{margin:-5px 4px 0 0}.wp-admin .cx-vui-time--size-fullwidth{width:100%}.wp-admin .cx-vui-time--disabled{cursor:default;opacity:.3;pointer-events:none}textarea.cx-vui-textarea{background-color:#f4f4f5;border:none;border-radius:4px;box-shadow:none;box-sizing:border-box;color:#7b7e81;font-size:13px;line-height:20px;margin:0;max-width:100%;outline:none;padding:6px 12px;resize:vertical}textarea.cx-vui-textarea:focus{background-color:#fff;box-shadow:inset 0 0 0 2px #80bddc;color:#23282d}textarea.cx-vui-textarea.has-error{box-shadow:inset 0 0 0 2px #e49595;color:#c92c2c}textarea.cx-vui-textarea.size-fullwidth{width:100%}textarea.cx-vui-textarea::-webkit-input-placeholder{color:#b0b4b9}textarea.cx-vui-textarea::-moz-placeholder{color:#b0b4b9}textarea.cx-vui-textarea:-ms-input-placeholder{color:#b0b4b9}textarea.cx-vui-textarea:-moz-placeholder{color:#b0b4b9}.cx-vui-switcher{cursor:pointer;padding:3px 0;position:relative;width:36px}.cx-vui-switcher__panel{background:#ececec;border-radius:6px;height:12px;transition:all .15s linear;width:100%}.cx-vui-switcher--on .cx-vui-switcher__panel{background:#cce5f1}.cx-vui-switcher__trigger{background:#fff;border-radius:100%;box-shadow:0 1px 4px rgba(35,40,45,.24);height:18px;left:0;margin-top:-9px;position:absolute;top:50%;transition:all .15s linear;width:18px}.cx-vui-switcher--on .cx-vui-switcher__trigger{background:#007cba;left:calc(100% - 18px)}.cx-vui-switcher--in-focus .cx-vui-switcher__trigger{box-shadow:0 1px 4px rgba(35,40,45,.24),0 0 0 9px hsla(210,1%,65%,.2)}.cx-vui-switcher--on.cx-vui-switcher--in-focus .cx-vui-switcher__trigger{box-shadow:0 1px 4px rgba(35,40,45,.24),0 0 0 9px rgba(0,124,186,.2)}.cx-vui-iconpicker{position:relative}.cx-vui-iconpicker__fieldgroup{display:flex}.cx-vui-iconpicker__input{flex:1 0 auto}.cx-vui-iconpicker__preview{align-items:center;background:#f4f4f5;border-radius:4px;display:flex;flex:0 0 32px;height:32px;justify-content:center;margin:0 5px 0 0;width:32px}.rtl .cx-vui-iconpicker__preview{margin:0 0 0 5px}.cx-vui-iconpicker__canvas{background:#fff;border:1px solid #80bddc;border-radius:4px;box-shadow:0 4px 20px rgba(35,40,45,.24);left:0;margin:20px 0 0;max-width:100%;position:absolute;right:0;top:100%;width:311px;z-index:999}.cx-vui-iconpicker__canvas-content{border-radius:4px;max-height:312px;overflow-y:scroll;padding:10px}.cx-vui-iconpicker__canvas:before{border-color:transparent transparent #80bddc;border-style:solid;border-width:0 7px 7px;content:\"\";height:0;left:9px;position:absolute;top:-7px;width:0;z-index:1}.rtl .cx-vui-iconpicker__canvas:before{left:auto;right:9px}.cx-vui-iconpicker__canvas:after{border-color:transparent transparent #fff;border-style:solid;border-width:0 6px 6px;content:\"\";height:0;left:10px;position:absolute;top:-6px;width:0;z-index:2}.rtl .cx-vui-iconpicker__canvas:after{left:auto;right:10px}.cx-vui-iconpicker__canvas-list{display:flex;flex-wrap:wrap;margin:6px -3px}.cx-vui-iconpicker__canvas-icon{align-items:center;border:1px solid #ececec;border-radius:4px;box-sizing:border-box;cursor:pointer;display:flex;height:48px;justify-content:center;margin:4px;transition:all .15s linear;width:48px}.cx-vui-iconpicker__canvas-icon i{color:#7b7e81}.cx-vui-iconpicker__canvas-icon--selected{background:#edf6fa;border-color:#80bddc}.cx-vui-iconpicker__canvas-icon--selected i{color:#007cba}.cx-vui-iconpicker__canvas-icon:focus,.cx-vui-iconpicker__canvas-icon:hover{background:#007cba;border-color:#007cba}.cx-vui-iconpicker__canvas-icon:focus i,.cx-vui-iconpicker__canvas-icon:hover i{color:#fff}.wp-admin .cx-vui-select{-webkit-appearance:none;background-color:#f4f4f5;border:none;border-radius:4px;box-shadow:none;box-sizing:border-box;color:#7b7e81;font-size:13px;height:auto;line-height:20px;margin:0;max-width:100%;outline:none;padding:6px 12px}.wp-admin .cx-vui-select:focus{background-color:#fff;box-shadow:inset 0 0 0 2px #80bddc;color:#23282d}.wp-admin .cx-vui-select.has-error{box-shadow:inset 0 0 0 2px #e49595;color:#c92c2c}.wp-admin .cx-vui-select.size-fullwidth{width:100%}.wp-admin .cx-vui-select::-webkit-input-placeholder{color:#b0b4b9}.wp-admin .cx-vui-select::-moz-placeholder{color:#b0b4b9}.wp-admin .cx-vui-select:-ms-input-placeholder{color:#b0b4b9}.wp-admin .cx-vui-select:-moz-placeholder{color:#b0b4b9}.cx-vui-f-select__select-tag{display:none}.cx-vui-f-select__input.cx-vui-input--in-focus{background:#fff;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:inset 0 0 0 2px #80bddc}.cx-vui-f-select__control{position:relative}.cx-vui-f-select__results{background:#fff;border:1px solid #80bddc;border-radius:0 0 4px 4px;box-shadow:0 4px 20px rgba(35,40,45,.24);box-sizing:border-box;left:0;margin:-1px 0 0;padding:10px 0;position:absolute;right:0;top:100%;z-index:999}.cx-vui-f-select__results-loading,.cx-vui-f-select__results-message{color:#7b7e81;padding:0 10px}.cx-vui-f-select__result{color:#7b7e81;cursor:pointer;font-size:13px;line-height:17px;padding:3px 12px 4px;transition:all .15s linear}.cx-vui-f-select__result.is-selected{background:#edf6fa}.cx-vui-f-select__result.in-focus,.cx-vui-f-select__result:hover{background:#007cba;color:#fff}.cx-vui-f-select__selected{display:flex;flex-wrap:wrap}.cx-vui-f-select__selected-not-empty{margin:0 0 15px}.cx-vui-f-select__selected-option{align-items:center;background:#edf6fa;color:#7b7e81;cursor:pointer;display:flex;margin:0 5px 5px 0;padding:5px 11px 5px 5px;white-space:nowrap}.rtl .cx-vui-f-select__selected-option{margin:0 0 5px 5px;padding:5px 5px 5px 11px}.cx-vui-f-select__selected-option-icon{align-items:center;background:#fff;border-radius:1px;display:flex;height:22px;justify-content:center;margin:0 6px 0 0;transition:all liear .15s;width:22px}.rtl .cx-vui-f-select__selected-option-icon{margin:0 0 0 6px}.cx-vui-f-select__selected-option-icon path{fill:#7b7e81;transition:all liear .15s}.cx-vui-f-select__selected-option:hover .cx-vui-f-select__selected-option-icon{background:#007cba}.cx-vui-f-select__selected-option:hover .cx-vui-f-select__selected-option-icon path{fill:#fff}.cx-vui-button{border:none;border-radius:4px;box-shadow:0 4px 4px rgba(35,40,45,.24);box-sizing:border-box;cursor:pointer;display:inline-block;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:500;margin:0;outline:none;padding:0;position:relative;text-decoration:none;transition:all .15s linear}.cx-vui-button__content{align-items:center;display:flex;justify-content:center}.cx-vui-button--loading .cx-vui-button__content{opacity:0}.cx-vui-button--style-default{background:#f4f4f5;color:#007cba}.cx-vui-button--style-default:hover{background:#ececec;box-shadow:none;color:#007cba}.cx-vui-button--style-accent{background:#007cba;color:#fff}.cx-vui-button--style-accent:hover{background:#066ea2;box-shadow:none;color:#fff}.cx-vui-button--style-default-border{background:transparent;border:1px solid #dcdcdd;box-shadow:none;color:#7b7e81}.cx-vui-button--style-default-border:hover{background:#f3f5f6;border:1px solid #dcdcdd;color:#7b7e81}.cx-vui-button--style-accent-border{background:transparent;border:1px solid #007cba;box-shadow:none;color:#007cba}.cx-vui-button--style-accent-border:hover{background:#f3f5f6;border:1px solid #066ea2;color:#066ea2}.cx-vui-button--style-link-accent{background:none;box-shadow:none;color:#007cba}.cx-vui-button--style-link-accent path{fill:#007cba}.cx-vui-button--style-link-accent:hover{color:#066ea2}.cx-vui-button--style-link-accent:hover path{fill:#066ea2}.cx-vui-button--style-link-error{background:none;box-shadow:none;color:#c92c2c}.cx-vui-button--style-link-error path{fill:#c92c2c}.cx-vui-button--style-link-error:hover{color:#c92c2c}.cx-vui-button--size-default{font-size:15px;line-height:21px;padding:12px 25px 13px}.cx-vui-button--size-default .cx-vui-button__content .dashicons{margin:0 5px 0 -8px}.rtl .cx-vui-button--size-default .cx-vui-button__content .dashicons{margin:0 -8px 0 5px}.cx-vui-button--size-default .cx-vui-button__content span+.dashicons{margin:-8px 0 0 5px}.rtl .cx-vui-button--size-default .cx-vui-button__content span+.dashicons{margin:-8px 5px 0 0}.cx-vui-button--size-link{font-size:15px;line-height:18px}.cx-vui-button--size-link .cx-vui-button__content svg{margin:0 5px 1px 0}.cx-vui-button--size-link .cx-vui-button__content span+svg,.rtl .cx-vui-button--size-link .cx-vui-button__content svg{margin:0 0 1px 5px}.rtl .cx-vui-button--size-link .cx-vui-button__content span+svg{margin:0 5px 1px 0}.cx-vui-button--size-mini{font-size:13px;line-height:19px;padding:6px 14px 7px}.cx-vui-button--size-mini .cx-vui-button__content .dashicons{margin:0 4px 0 -5px}.rtl .cx-vui-button--size-mini .cx-vui-button__content .dashicons{margin:0 -5px 0 4px}.cx-vui-button--size-mini .cx-vui-button__content span+.dashicons{margin:-5px 0 0 4px}.rtl .cx-vui-button--size-mini .cx-vui-button__content span+.dashicons{margin:-5px 4px 0 0}.cx-vui-button--disabled{cursor:default;opacity:.3;pointer-events:none}.cx-vui-button--loading{cursor:default}.cx-vui-button__loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0}.cx-vui-button__loader .loader-icon{animation:spin 1.2s linear infinite}.cx-vui-button__loader .loader-icon path{fill:currentColor}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.cx-vui-button.fullwidth{width:100%}.cx-vui-repeater__actions{align-items:center;display:flex}.cx-vui-repeater__tip{color:#7b7e81;margin:0 0 0 20px}.rtl .cx-vui-repeater__tip{margin:0 20px 0 0}.cx-vui-collapse__content>.cx-vui-repeater{margin-bottom:25px}.cx-vui-repeater-item__handle{align-items:center;cursor:n-resize;display:flex;height:40px;justify-content:center;margin:-12px 0 -10px -16px;width:40px}.rtl .cx-vui-repeater-item__handle{margin:-12px -16px -10px 0}.cx-vui-repeater-item__handle svg line{stroke:#dcdcdd}.cx-vui-repeater-item__heading{-webkit-touch-callout:none;align-items:center;border-bottom:1px solid #ececec;display:flex;justify-content:space-between;padding:18px 20px 16px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cx-vui-repeater-item__heading--is-collpased{border-bottom:none}.cx-vui-repeater-item__heading-start{align-items:center;cursor:pointer;display:flex}.cx-vui-repeater-item__heading-end{align-items:center;display:flex}.cx-vui-repeater-item__subtitle,.cx-vui-repeater-item__title{font-size:15px;line-height:17px}.cx-vui-repeater-item__title{color:#007cba;font-weight:500;margin:0 10px 0 0}.rtl .cx-vui-repeater-item__title{margin:0 0 0 10px}.cx-vui-repeater-item__subtitle{color:#7b7e81;font-style:italic}.cx-vui-repeater-item__collapse{margin:0 8px 0 0}.rtl .cx-vui-repeater-item__collapse{margin:0 0 0 8px}.cx-vui-repeater-item__collapse--is-collpased{margin:0 8px 4px 0;transform:rotate(-90deg)}.rtl .cx-vui-repeater-item__collapse--is-collpased{margin:0 0 4px 8px}.cx-vui-repeater-item__collapse path{fill:#007cba}.cx-vui-repeater-item__content--is-collpased{display:none}.cx-vui-repeater-item__clean,.cx-vui-repeater-item__copy{align-items:center;cursor:pointer;display:flex;height:20px;justify-content:center;margin:0 0 0 10px;position:relative;width:20px}.rtl .cx-vui-repeater-item__clean,.rtl .cx-vui-repeater-item__copy{margin:0 10px 0 0}.cx-vui-repeater-item__clean .cx-vui-tooltip,.cx-vui-repeater-item__copy .cx-vui-tooltip{width:80px}.cx-vui-repeater-item__clean path,.cx-vui-repeater-item__copy path{fill:#7b7e81;transition:all .15s linear}.cx-vui-repeater-item__clean:hover path,.cx-vui-repeater-item__copy:hover path{fill:#007cba}.cx-vui-repeater-item__cancel-del,.cx-vui-repeater-item__confrim-del{text-decoration:underline}.cx-vui-repeater-item__confrim-del{color:#c92c2c}.cx-vui-checkbox{align-items:center;display:inline-flex;margin:0 0 10px}.cx-vui-checkbox--disabled{pointer-events:none}.cx-vui-checkgroup--single-item .cx-vui-checkbox{margin:0}.cx-vui-checkbox__check{align-items:center;border:2px solid #7b7e81;border-radius:4px;box-sizing:border-box;cursor:pointer;display:flex;height:18px;justify-content:center;margin:-1px 10px 0 0;width:18px}.rtl .cx-vui-checkbox__check{margin:-1px 0 0 10px}.cx-vui-checkbox__check--focused{border-color:#80bddc}.cx-vui-checkbox__check--checked{background:#007cba;border-color:#007cba}.cx-vui-checkbox__check--checked path{fill:#fff}.cx-vui-checkbox__check--disabled{cursor:default;opacity:.5;pointer-events:none}.cx-vui-checkbox__label{color:#7b7e81;cursor:pointer}.cx-vui-checkbox--disabled .cx-vui-checkbox__label{cursor:default}.cx-vui-checkbox__input[type=checkbox]{display:none}.cx-vui-radio{align-items:center;display:inline-flex;margin:0 0 10px}.cx-vui-radio--disabled{pointer-events:none}.cx-vui-radiogroup--single-item .cx-vui-radio{margin:0}.cx-vui-radio__input{left:-999em;position:absolute;visibility:hidden}.cx-vui-radio__mark{align-items:center;border:2px solid #7b7e81;border-radius:100%;box-sizing:border-box;cursor:pointer;display:flex;height:18px;justify-content:center;margin:0 10px 0 0;width:18px}.rtl .cx-vui-radio__mark{margin:0 0 0 10px}.cx-vui-radio__mark:before{border-radius:100%;content:\"\";height:10px;width:10px}.cx-vui-radio__mark--focused{border-color:#80bddc}.cx-vui-radio__mark--checked{border-color:#007cba}.cx-vui-radio__mark--checked:before{background:#007cba}.cx-vui-radio__mark--disabled{cursor:default;opacity:.5;pointer-events:none}.cx-vui-radio__label{color:#7b7e81;cursor:pointer}.cx-vui-radio--disabled .cx-vui-radio__label{cursor:default}.cx-vue-list-table{background:#fff;border-radius:6px;box-shadow:0 2px 6px rgba(35,40,45,.07);font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif}.cx-vue-list-table__items.is-empty{color:#7b7e81;font-size:13px;line-height:16px;padding:16px 20px 17px;text-align:center}.list-table-footer,.list-table-heading,.list-table-item{align-items:center;display:flex;justify-content:flex-start}.list-table-footer__cell,.list-table-heading__cell,.list-table-item__cell{box-sizing:border-box;padding:16px 20px 14px}.list-table-heading{border-bottom:1px solid #ececec}.cx-vue-list-table__footer .list-table-heading{border-bottom:none;border-top:1px solid #ececec}.list-table-heading__cell{color:#23282d;font-size:15px;font-weight:500;line-height:20px}.list-table-item{color:#7b7e81}.list-table-item:nth-child(odd){background:#f5f5f5}.list-table-item__cell{font-size:13px;line-height:16px}.list-table-item:first-child{border-top:none}.cx-vui-tabs.cx-vui-tabs--layout-vertical{align-items:stretch;display:flex}.cx-vui-tabs__nav{background:#f5f5f5}.cx-vui-tabs--layout-vertical>.cx-vui-tabs__nav{flex:0 0 20%;max-width:220px;padding:0 0 40px;width:20%}.cx-vui-tabs--layout-horizontal>.cx-vui-tabs__nav{display:flex;padding:0 40px}.cx-vui-tabs--invert>.cx-vui-tabs__nav{background:#fff}.cx-vui-tabs__nav-item{border:1px solid transparent;color:#23282d;cursor:pointer;font-size:15px;font-weight:500;line-height:20px;padding:14px 20px}.cx-vui-tabs--layout-vertical .cx-vui-tabs__nav-item{border-bottom:1px solid #dcdcdd}.cx-vui-tabs__nav-item:hover{color:#007cba}.cx-vui-tabs:not(.cx-vui-tabs--in-panel) .cx-vui-tabs__nav-item{border-top:none}.cx-vui-tabs__nav-item--active{background:#fff;color:#007cba;position:relative;z-index:3}.cx-vui-tabs--layout-horizontal .cx-vui-tabs__nav-item--active{border:1px solid #dcdcdd;border-bottom:none}.cx-vui-tabs--in-panel .cx-vui-tabs__nav-item--active{border-radius:4px 4px 0 0}.cx-vui-tabs--invert .cx-vui-tabs__nav-item--active{background:#f5f5f5}.cx-vui-tabs__content{padding:40px}.cx-vui-tabs--invert>.cx-vui-tabs__content{background:#f5f5f5}.cx-vui-tabs--layout-horizontal>.cx-vui-tabs__content{border-top:1px solid #dcdcdd;margin:-1px 0 0}.cx-vui-tabs--layout-vertical>.cx-vui-tabs__content{border-left:1px solid #dcdcdd;flex:1 1 auto;margin:0 0 0 -1px;padding:15px 40px}.rtl .cx-vui-tabs--layout-vertical>.cx-vui-tabs__content{border-left:none;border-right:1px solid #dcdcdd;margin:0 -1px 0 0}.cx-vui-pagination-items{align-items:center;display:flex;justify-content:flex-start}.cx-vui-pagination-item{align-items:center;background:transparent;border:1px solid #e8e8e8;border-radius:2px;color:#7b7e81;cursor:pointer;display:flex;font-size:13px;font-weight:600;height:32px;justify-content:center;line-height:normal;margin:0 3px;padding:4px 8px;position:relative;text-decoration:none;text-shadow:none;width:32px}.cx-vui-pagination-item:first-child{margin-left:0}.rtl .cx-vui-pagination-item:first-child{margin-left:3px;margin-right:0}.cx-vui-pagination-item:last-child{margin-right:0}.rtl .cx-vui-pagination-item:last-child{margin-left:0;margin-right:3px}.cx-vui-pagination-item-active{border:1px solid #007cba;color:#007cba}.cx-vui-pagination-disabled{cursor:not-allowed;opacity:.5}.rtl .cx-vui-pagination-next svg,.rtl .cx-vui-pagination-prev svg{transform:scale(-1)}.cx-vui-notices{position:fixed;right:20px;top:52px;z-index:9999}.rtl .cx-vui-notices{left:20px;right:auto}.cx-vui-notice{align-items:flex-start;background:#fff;border-radius:4px;box-shadow:0 2px 6px rgba(35,40,45,.07);box-sizing:border-box;color:#7b7e81;display:flex;font-size:15px;line-height:23px;margin:0 0 20px;max-width:450px;min-width:250px;padding:20px;transition:all .25s ease}.cx-vui-notice__icon{flex:0 0 24px;height:24px;margin:0 15px 0 0;overflow:hidden;width:24px}.rtl .cx-vui-notice__icon{margin:0 0 0 15px}.cx-vui-notice__icon svg{height:auto;width:100%}.cx-vui-notice__icon--info path{fill:#007cba}.cx-vui-notice__icon--success path{fill:#46b450}.cx-vui-notice__icon--error path{fill:#c92c2c}.cx-vui-notice__title{color:#23282d;font-weight:500}.cx-vui-notice__content{flex:1 1 auto}.cx-vui-notice__close{box-sizing:border-box;cursor:pointer;flex:0 0 16px;height:16px;margin:-2px 0 0 10px;padding:2px;width:16px}.rtl .cx-vui-notice__close{margin:-2px 10px 0 0}.cx-vui-notice__close svg{height:12px;width:12px}.cx-vui-notice__close path{fill:#dcdcdd}.cx-vui-notice__close:hover path{fill:#23282d}.cx-vui-notices-enter,.cx-vui-notices-leave-to{opacity:0;transform:translateX(30px)}.rtl .cx-vui-notices-enter,.rtl .cx-vui-notices-leave-to{transform:translateX(-30px)}.cx-vui-notices-leave-active{position:absolute}.cx-vui-colorpicker{display:inline-block;position:relative}.cx-vui-colorpicker__preview{align-items:center;border:1px solid #dcdcdd;border-radius:4px;cursor:pointer;display:flex;justify-content:flex-start}.cx-vui-colorpicker__color{align-items:center;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");border-radius:2px;display:flex;height:18px;justify-content:center;position:relative;width:18px}.cx-vui-colorpicker__color span{display:block;height:100%;width:100%}.cx-vui-colorpicker__clear{align-items:center;display:flex;justify-content:center;margin:0 0 0 10px}.rtl .cx-vui-colorpicker__clear{margin:0 10px 0 0}.cx-vui-colorpicker__clear:hover svg{fill:#c92c2c}.cx-vui-colorpicker__dropdown{left:0;position:absolute;top:38px;z-index:999}.rtl .cx-vui-colorpicker__dropdown{left:auto;right:0}.rtl .cx-vui-colorpicker__dropdown .vc-chrome-toggle-btn{text-align:left}.cx-vui-colorpicker.size-small .cx-vui-colorpicker__preview{padding:5px}.cx-vui-colorpicker.size-small .cx-vui-colorpicker__color{height:16px;width:16px}.cx-vui-colorpicker.size-default .cx-vui-colorpicker__preview{padding:7px}.cx-vui-colorpicker.size-default .cx-vui-colorpicker__color{height:18px;width:18px}.cx-vui-colorpicker.size-large .cx-vui-colorpicker__preview{padding:10px}.cx-vui-colorpicker.size-large .cx-vui-colorpicker__color{height:24px;width:24px}.cx-vui-colorpicker.size-large .cx-vui-colorpicker__clear svg{height:14px;width:14px}.cx-vui-media{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.cx-vui-media__attachment{background-color:#f4f4f5;border-radius:5px;display:inline-block;margin:0 5px 5px 0;overflow:hidden;position:relative}.rtl .cx-vui-media__attachment{margin:0 0 5px 5px}.cx-vui-media__attachment img{height:100%;object-fit:contain;width:100%}.cx-vui-media__attachment:hover .cx-vui-media__attachment-controls{pointer-events:all;visibility:visible}.cx-vui-media__attachment.attachment-type-image img{height:100%;object-fit:cover;width:100%}.cx-vui-media__control{filter:drop-shadow(1px 1px 1px rgba(35,40,45,.5));position:absolute;z-index:1}.cx-vui-media__control-remove{cursor:pointer;right:3px;top:3px}.rtl .cx-vui-media__control-remove{left:3px;right:auto}.cx-vui-media__attachment-controls{align-items:center;background:rgba(0,0,0,.3);display:flex;height:100%;justify-content:center;pointer-events:none;position:absolute;right:0;top:0;visibility:hidden;width:100%;z-index:1}.cx-vui-media__attachment-controls svg{cursor:pointer}.cx-vui-media__add-button{align-items:center;background:#fff;border:1px dashed #dcdcdd;border-radius:5px;cursor:pointer;display:flex;height:58px;justify-content:center;overflow:hidden;position:relative;transition:border-color .2s ease;width:58px}.cx-vui-media__add-button:hover{border:1px dashed #007cba}.cx-vui-media.size-small .cx-vui-media__attachment{height:50px;width:50px}.cx-vui-media.size-small .cx-vui-media__add-button{height:48px;width:48px}.cx-vui-media.size-default .cx-vui-media__attachment{height:80px;width:80px}.cx-vui-media.size-default .cx-vui-media__add-button{height:78px;width:78px}.cx-vui-media.size-large .cx-vui-media__attachment{height:120px;width:120px}.cx-vui-media.size-large .cx-vui-media__add-button{height:118px;width:118px}.cx-vui-dimensions{align-items:stretch;display:flex;flex-direction:column;justify-content:flex-start}.cx-vui-dimensions__units{align-items:center;display:flex;justify-content:flex-end;margin:0 42px 5px 0}.rtl .cx-vui-dimensions__units{margin:0 0 5px 42px}.cx-vui-dimensions__units span{color:#7b7e81;cursor:pointer;margin:0 0 0 2px}.rtl .cx-vui-dimensions__units span{margin:0 2px 0 0}.cx-vui-dimensions__units span:first-child{margin:0}.cx-vui-dimensions__units span.active{color:#007cba}.cx-vui-dimensions__inputs{align-items:flex-start;display:flex;justify-content:flex-start}.cx-vui-dimensions__inputs .cx-vui-component-raw{flex:1 1 100px;margin:0 0 0 5px}.rtl .cx-vui-dimensions__inputs .cx-vui-component-raw{margin:0 5px 0 0}.cx-vui-dimensions__inputs .cx-vui-component-raw:first-child{margin:0}.cx-vui-dimensions__link{align-items:center;cursor:pointer;display:flex;flex-shrink:0;height:32px;justify-content:center;margin:0 0 0 10px;width:32px}.rtl .cx-vui-dimensions__link{margin:0 10px 0 0}.cx-vui-dimensions.size-default{max-width:100%;width:442px}.cx-vui-dimensions.size-fullwidth{max-width:100%;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue__time-picker{display:inline-block;position:relative;font-size:1em;width:10em;font-family:sans-serif;vertical-align:middle}.vue__time-picker *{-webkit-box-sizing:border-box;box-sizing:border-box}.vue__time-picker input.display-time{border:1px solid #d2d2d2;width:10em;height:2.2em;padding:.3em .5em;font-size:1em}.vue__time-picker input.has-custom-icon{padding-left:1.8em}.vue__time-picker input.display-time.invalid:not(.skip-error-style){border-color:#c03;outline-color:#c03}.vue__time-picker input.display-time.disabled,.vue__time-picker input.display-time:disabled{color:#d2d2d2}.vue__time-picker .controls{position:absolute;top:0;bottom:0;right:0;z-index:3;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;pointer-events:none}.vue__time-picker .controls,.vue__time-picker .controls>*{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.vue__time-picker .controls>*{cursor:pointer;width:auto;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 .35em;color:#d2d2d2;line-height:100%;font-style:normal;pointer-events:auto;-webkit-transition:color .2s,opacity .2s;transition:color .2s,opacity .2s}.vue__time-picker .controls>:hover{color:#797979}.vue__time-picker .controls>:active,.vue__time-picker .controls>:focus{outline:0}.vue__time-picker .controls .char{font-size:1.1em;line-height:100%;-webkit-margin-before:-.15em}.vue__time-picker .custom-icon{z-index:2;position:absolute;left:0;top:0;bottom:0;width:1.8em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none}.vue__time-picker .controls img,.vue__time-picker .controls svg,.vue__time-picker .custom-icon img,.vue__time-picker .custom-icon svg{display:inline-block;vertical-align:middle;margin:0;border:0;outline:0;max-width:1em;height:auto}.vue__time-picker .time-picker-overlay{z-index:4;position:fixed;top:0;left:0;right:0;bottom:0}.vue__time-picker-dropdown,.vue__time-picker .dropdown{position:absolute;z-index:5;top:calc(2.2em + 2px);left:0;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.15);box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.vue__time-picker-dropdown{position:fixed;z-index:100}.vue__time-picker-dropdown.drop-up,.vue__time-picker .dropdown.drop-up{top:auto;bottom:calc(2.2em + 1px)}.vue__time-picker-dropdown .select-list,.vue__time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue__time-picker-dropdown .select-list:active,.vue__time-picker-dropdown .select-list:focus,.vue__time-picker .dropdown .select-list:active,.vue__time-picker .dropdown .select-list:focus{outline:0}.vue__time-picker-dropdown ul,.vue__time-picker .dropdown ul{padding:0;margin:0;list-style:none;outline:0;-webkit-box-flex:1;-ms-flex:1 1 0.00001px;flex:1 1 0.00001px;overflow-x:hidden;overflow-y:auto}.vue__time-picker-dropdown ul.apms,.vue__time-picker-dropdown ul.minutes,.vue__time-picker-dropdown ul.seconds,.vue__time-picker .dropdown ul.apms,.vue__time-picker .dropdown ul.minutes,.vue__time-picker .dropdown ul.seconds{border-left:1px solid #fff}.vue__time-picker-dropdown ul li,.vue__time-picker .dropdown ul li{list-style:none;text-align:center;padding:.3em 0;color:#161616}.vue__time-picker-dropdown ul li:not(.hint):not([disabled]):focus,.vue__time-picker-dropdown ul li:not(.hint):not([disabled]):hover,.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):focus,.vue__time-picker .dropdown ul li:not(.hint):not([disabled]):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.vue__time-picker-dropdown ul li:not([disabled]).active,.vue__time-picker-dropdown ul li:not([disabled]).active:focus,.vue__time-picker-dropdown ul li:not([disabled]).active:hover,.vue__time-picker .dropdown ul li:not([disabled]).active,.vue__time-picker .dropdown ul li:not([disabled]).active:focus,.vue__time-picker .dropdown ul li:not([disabled]).active:hover{background:#41b883;color:#fff}.vue__time-picker-dropdown ul li[disabled],.vue__time-picker-dropdown ul li[disabled]:hover,.vue__time-picker .dropdown ul li[disabled],.vue__time-picker .dropdown ul li[disabled]:hover{background:transparent;opacity:.3;cursor:not-allowed}.vue__time-picker-dropdown .hint,.vue__time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 23:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(x){var o=h++;r=d||(d=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(b,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(64),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,p=!1,v=function(){},g=null,b="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){p=n,g=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:l}}},function(e,t,n){"use strict";function r(e,t){var n,r=e&&e.a;!(n=e&&e.hsl?(0,o.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,o.default)(e.hex):e&&e.hsv?(0,o.default)(e.hsv):e&&e.rgba?(0,o.default)(e.rgba):e&&e.rgb?(0,o.default)(e.rgb):(0,o.default)(e))||void 0!==n._a&&null!==n._a||n.setAlpha(r||1);var i=n.toHsl(),a=n.toHsv();return 0===i.s&&(a.h=i.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:i,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:a,oldHue:e.h||t||i.h,source:e.source,a:e.a||n.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(65),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={props:["value"],data:function(){return{val:r(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=r(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=r(e,t||this.oldHue)},isValidHex:function(e){return(0,o.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],n=0,r=0,i=0;i<t.length;i++){var o=t[i];e[o]&&(n++,isNaN(e[o])||r++)}if(n===r)return e},paletteUpperCase:function(e){return e.map(function(e){return e.toUpperCase()})},isTransparent:function(e){return 0===(0,o.default)(e).getAlpha()}}}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){"use strict";function r(e){c||n(66)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(68),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/EditableInput.vue",t.default=f.exports},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(8),i=n(18);e.exports=n(9)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(16),i=n(42),o=n(25),a=Object.defineProperty;t.f=n(9)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(90),i=n(24);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(29)("wks"),i=n(19),o=n(4).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";function r(e){c||n(111)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(51),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(113),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Hue.vue",t.default=f.exports},function(e,t){e.exports=!0},function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(12);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){"use strict";function r(e){c||n(123)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(54),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(127),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Saturation.vue",t.default=f.exports},function(e,t,n){"use strict";function r(e){c||n(128)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(55),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(133),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Alpha.vue",t.default=f.exports},function(e,t,n){"use strict";function r(e){c||n(130)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(56),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(132),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Checkboard.vue",t.default=f.exports},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(12);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports={}},function(e,t,n){var r=n(46),i=n(30);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(29)("keys"),i=n(19);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){var r=n(15),i=n(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(8).f,i=n(6),o=n(11)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){t.f=n(11)},function(e,t,n){var r=n(4),i=n(15),o=n(14),a=n(32),s=n(8).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[o.default],props:{palette:{type:Array,default:function(){return c}}},components:{"ed-in":s.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown:function(e){var t=this.val,n=Number(t);if(n){var r=this.arrowOffset||1;38===e.keyCode&&(t=n+r,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=n-r,this.handleChange(t),e.preventDefault())}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[i.default],props:{palette:{type:Array,default:function(){return o}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(3),s=r(a);t.default={name:"Material",mixins:[s.default],components:{"ed-in":o.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(81),o=r(i),a=n(3),s=r(a),c=n(13),l=r(c);t.default={name:"Slider",mixins:[s.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:l.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(e){return"object"!==(void 0===e?"undefined":(0,o.default)(e))?{s:.5,l:e}:e})}},methods:{isActive:function(e,t){var n=this.colors.hsl;return 1===n.l&&1===e.l||(0===n.l&&0===e.l||Math.abs(n.l-e.l)<.01&&Math.abs(n.s-e.s)<.01)},hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:t.s,l:t.l,source:"hsl"})}}}},function(e,t,n){"use strict";var r=n(14),i=n(41),o=n(44),a=n(7),s=n(26),c=n(88),l=n(31),u=n(95),f=n(11)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,n,p,v,g,b){c(n,t,p);var x,m,_,w=function(e){if(!d&&e in F)return F[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},y=t+" Iterator",C="values"==v,k=!1,F=e.prototype,S=F[f]||F["@@iterator"]||v&&F[v],A=S||w(v),O=v?C?w("entries"):A:void 0,E="Array"==t?F.entries||S:S;if(E&&(_=u(E.call(new e)))!==Object.prototype&&_.next&&(l(_,y,!0),r||"function"==typeof _[f]||a(_,f,h)),C&&S&&"values"!==S.name&&(k=!0,A=function(){return S.call(this)}),r&&!b||!d&&!k&&F[f]||a(F,f,A),s[t]=A,s[y]=h,v)if(x={values:C?A:w("values"),keys:g?A:w("keys"),entries:O},b)for(m in x)m in F||o(F,m,x[m]);else i(i.P+i.F*(d||k),t,x);return x}},function(e,t,n){var r=n(4),i=n(15),o=n(86),a=n(7),s=n(6),c=function(e,t,n){var l,u,f,d=e&c.F,h=e&c.G,p=e&c.S,v=e&c.P,g=e&c.B,b=e&c.W,x=h?i:i[t]||(i[t]={}),m=x.prototype,_=h?r:p?r[t]:(r[t]||{}).prototype;h&&(n=t);for(l in n)(u=!d&&_&&void 0!==_[l])&&s(x,l)||(f=u?_[l]:n[l],x[l]=h&&"function"!=typeof _[l]?n[l]:g&&u?o(f,r):b&&_[l]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[l]=f,e&c.R&&m&&!m[l]&&a(m,l,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){e.exports=!n(9)&&!n(17)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(12),i=n(4).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(16),i=n(89),o=n(30),a=n(28)("IE_PROTO"),s=function(){},c=function(){var e,t=n(43)("iframe"),r=o.length;for(t.style.display="none",n(94).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[o[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(6),i=n(10),o=n(91)(!1),a=n(28)("IE_PROTO");e.exports=function(e,t){var n,s=i(e),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;t.length>c;)r(s,n=t[c++])&&(~o(l,n)||l.push(n));return l}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(24);e.exports=function(e){return Object(r(e))}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(46),i=n(30).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r,i,o=n.clientWidth,a=n.clientHeight,s=n.getBoundingClientRect().left+window.pageXOffset,c=n.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),f=l-s,d=u-c;"vertical"===this.direction?(d<0?r=360:d>a?r=0:(i=-100*d/a+100,r=360*i/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(f<0?r=0:f>o?r=360:(i=100*f/o,r=360*i/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(118),o=r(i),a=n(3),s=r(a),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],l=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(t){var n=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?n=n.concat(["#000000","#FFFFFF"]):l.forEach(function(e){var r=o.default[t][e];n.push(r.toUpperCase())}),e.push(n)}),e}();t.default={name:"Swatches",mixins:[s.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d);t.default={name:"Photoshop",mixins:[o.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(125),o=r(i),a=n(126),s=r(a);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,s.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r=n.clientWidth,i=n.clientHeight,a=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),l=e.pageY||(e.touches?e.touches[0].pageY:0),u=(0,o.default)(c-a,0,r),f=(0,o.default)(l-s,0,i),d=u/r,h=(0,o.default)(-f/i+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:d,v:h,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r,i=n.clientWidth,o=n.getBoundingClientRect().left+window.pageXOffset,a=e.pageX||(e.touches?e.touches[0].pageX:0),s=a-o;r=s<0?0:s>i?1:Math.round(100*s/i)/100,this.colors.a!==r&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:r,source:"rgba"})}},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e,t,n){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*n;var i=r.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,r.width,r.height),i.fillStyle=t,i.fillRect(0,0,n,n),i.translate(n,n),i.fillRect(0,0,n,n),r.toDataURL()):null}function i(e,t,n){var i=e+","+t+","+n;if(o[i])return o[i];var a=r(e,t,n);return o[i]=a,a}Object.defineProperty(t,"__esModule",{value:!0});var o={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+i(this.white,this.grey,this.size)+")"}}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d),p=n(22),v=r(p),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];t.default={name:"Sketch",mixins:[o.default],components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default,checkboard:v.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var e=void 0;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d),p=n(22),v=r(p);t.default={name:"Chrome",mixins:[o.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default,checkboard:v.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,n=e.s,r=e.l;return{h:t.toFixed(),s:(100*n).toFixed()+"%",l:(100*r).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,n=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:n,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(3),s=r(a),c=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];t.default={name:"Twitter",mixins:[s.default],components:{editableInput:o.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return c}},triangle:{default:"top-left",validator:function(e){return["hide","top-left","top-right"].includes(e)}}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(61),o=r(i),a=n(70),s=r(a),c=n(74),l=r(c),u=n(78),f=r(u),d=n(115),h=r(d),p=n(120),v=r(p),g=n(135),b=r(g),x=n(139),m=r(x),_=n(143),w=r(_),y=n(21),C=r(y),k=n(22),F=r(k),S=n(5),A=r(S),O=n(13),E=r(O),M=n(20),j=r(M),L=n(3),P=r(L),R={version:"2.8.1",Compact:o.default,Grayscale:s.default,Twitter:w.default,Material:l.default,Slider:f.default,Swatches:h.default,Photoshop:v.default,Sketch:b.default,Chrome:m.default,Alpha:C.default,Checkboard:F.default,EditableInput:A.default,Hue:E.default,Saturation:j.default,ColorMixin:P.default};e.exports=R},function(e,t,n){"use strict";function r(e){c||n(62)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(35),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(69),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Compact.vue",t.default=f.exports},function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6ce8a5a8",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 245px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],c=o[2],l=o[3],u={id:e+":"+i,css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(e,t,n){var r;!function(i){function o(e,t){if(e=e||"",t=t||{},e instanceof o)return e;if(!(this instanceof o))return new o(e,t);var n=a(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=G(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=G(this._r)),this._g<1&&(this._g=G(this._g)),this._b<1&&(this._b=G(this._b)),this._ok=n.ok,this._tc_id=U++}function a(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,c=!1;return"string"==typeof e&&(e=N(e)),"object"==typeof e&&(H(e.r)&&H(e.g)&&H(e.b)?(t=s(e.r,e.g,e.b),a=!0,c="%"===String(e.r).substr(-1)?"prgb":"rgb"):H(e.h)&&H(e.s)&&H(e.v)?(r=D(e.s),i=D(e.v),t=f(e.h,r,i),a=!0,c="hsv"):H(e.h)&&H(e.s)&&H(e.l)&&(r=D(e.s),o=D(e.l),t=l(e.h,r,o),a=!0,c="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=O(n),{ok:a,format:e.format||c,r:V(255,q(t.r,0)),g:V(255,q(t.g,0)),b:V(255,q(t.b,0)),a:n}}function s(e,t,n){return{r:255*E(e,255),g:255*E(t,255),b:255*E(n,255)}}function c(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,i,o=q(e,t,n),a=V(e,t,n),s=(o+a)/2;if(o==a)r=i=0;else{var c=o-a;switch(i=s>.5?c/(2-o-a):c/(o+a),o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,l:s}}function l(e,t,n){function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var i,o,a;if(e=E(e,360),t=E(t,100),n=E(n,100),0===t)i=o=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=r(c,s,e+1/3),o=r(c,s,e),a=r(c,s,e-1/3)}return{r:255*i,g:255*o,b:255*a}}function u(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,i,o=q(e,t,n),a=V(e,t,n),s=o,c=o-a;if(i=0===o?0:c/o,o==a)r=0;else{switch(o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,v:s}}function f(e,t,n){e=6*E(e,360),t=E(t,100),n=E(n,100);var r=i.floor(e),o=e-r,a=n*(1-t),s=n*(1-o*t),c=n*(1-(1-o)*t),l=r%6;return{r:255*[n,s,a,a,c,n][l],g:255*[c,n,n,s,a,a][l],b:255*[a,a,c,n,n,s][l]}}function d(e,t,n,r){var i=[R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function h(e,t,n,r,i){var o=[R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16)),R(B(r))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function p(e,t,n,r){return[R(B(r)),R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.s-=t/100,n.s=M(n.s),o(n)}function g(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.s+=t/100,n.s=M(n.s),o(n)}function b(e){return o(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.l+=t/100,n.l=M(n.l),o(n)}function m(e,t){t=0===t?0:t||10;var n=o(e).toRgb();return n.r=q(0,V(255,n.r-G(-t/100*255))),n.g=q(0,V(255,n.g-G(-t/100*255))),n.b=q(0,V(255,n.b-G(-t/100*255))),o(n)}function _(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.l-=t/100,n.l=M(n.l),o(n)}function w(e,t){var n=o(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,o(n)}function y(e){var t=o(e).toHsl();return t.h=(t.h+180)%360,o(t)}function C(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+120)%360,s:t.s,l:t.l}),o({h:(n+240)%360,s:t.s,l:t.l})]}function k(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+90)%360,s:t.s,l:t.l}),o({h:(n+180)%360,s:t.s,l:t.l}),o({h:(n+270)%360,s:t.s,l:t.l})]}function F(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+72)%360,s:t.s,l:t.l}),o({h:(n+216)%360,s:t.s,l:t.l})]}function S(e,t,n){t=t||6,n=n||30;var r=o(e).toHsl(),i=360/n,a=[o(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(o(r));return a}function A(e,t){t=t||6;for(var n=o(e).toHsv(),r=n.h,i=n.s,a=n.v,s=[],c=1/t;t--;)s.push(o({h:r,s:i,v:a})),a=(a+c)%1;return s}function O(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,t){L(e)&&(e="100%");var n=P(e);return e=V(t,q(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),i.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function M(e){return V(1,q(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function P(e){return"string"==typeof e&&-1!=e.indexOf("%")}function R(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function B(e){return i.round(255*parseFloat(e)).toString(16)}function T(e){return j(e)/255}function H(e){return!!J.CSS_UNIT.exec(e)}function N(e){e=e.replace(I,"").replace($,"").toLowerCase();var t=!1;if(W[e])e=W[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=J.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=J.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=J.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=J.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=J.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=J.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=J.hex8.exec(e))?{r:j(n[1]),g:j(n[2]),b:j(n[3]),a:T(n[4]),format:t?"name":"hex8"}:(n=J.hex6.exec(e))?{r:j(n[1]),g:j(n[2]),b:j(n[3]),format:t?"name":"hex"}:(n=J.hex4.exec(e))?{r:j(n[1]+""+n[1]),g:j(n[2]+""+n[2]),b:j(n[3]+""+n[3]),a:T(n[4]+""+n[4]),format:t?"name":"hex8"}:!!(n=J.hex3.exec(e))&&{r:j(n[1]+""+n[1]),g:j(n[2]+""+n[2]),b:j(n[3]+""+n[3]),format:t?"name":"hex"}}function z(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:t,size:n}}var I=/^\s+/,$=/\s+$/,U=0,G=i.round,V=i.min,q=i.max,X=i.random;o.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r,o,a,s=this.toRgb();return e=s.r/255,t=s.g/255,n=s.b/255,r=e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4),o=t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4),a=n<=.03928?n/12.92:i.pow((n+.055)/1.055,2.4),.2126*r+.7152*o+.0722*a},setAlpha:function(e){return this._a=O(e),this._roundA=G(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),t=G(360*e.h),n=G(100*e.s),r=G(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=G(360*e.h),n=G(100*e.s),r=G(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return d(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return h(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:G(this._r),g:G(this._g),b:G(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+G(this._r)+", "+G(this._g)+", "+G(this._b)+")":"rgba("+G(this._r)+", "+G(this._g)+", "+G(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:G(100*E(this._r,255))+"%",g:G(100*E(this._g,255))+"%",b:G(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+G(100*E(this._r,255))+"%, "+G(100*E(this._g,255))+"%, "+G(100*E(this._b,255))+"%)":"rgba("+G(100*E(this._r,255))+"%, "+G(100*E(this._g,255))+"%, "+G(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Y[d(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=o(e);n="#"+p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return o(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(y,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(C,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},o.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return o(e,t)},o.equals=function(e,t){return!(!e||!t)&&o(e).toRgbString()==o(t).toRgbString()},o.random=function(){return o.fromRatio({r:X(),g:X(),b:X()})},o.mix=function(e,t,n){n=0===n?0:n||50;var r=o(e).toRgb(),i=o(t).toRgb(),a=n/100;return o({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},o.readability=function(e,t){var n=o(e),r=o(t);return(i.max(n.getLuminance(),r.getLuminance())+.05)/(i.min(n.getLuminance(),r.getLuminance())+.05)},o.isReadable=function(e,t,n){var r,i,a=o.readability(e,t);switch(i=!1,r=z(n),r.level+r.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7}return i},o.mostReadable=function(e,t,n){var r,i,a,s,c=null,l=0;n=n||{},i=n.includeFallbackColors,a=n.level,s=n.size;for(var u=0;u<t.length;u++)(r=o.readability(e,t[u]))>l&&(l=r,c=o(t[u]));return o.isReadable(e,c,{level:a,size:s})||!i?c:(n.includeFallbackColors=!1,o.mostReadable(e,["#fff","#000"],n))};var W=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y=o.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(W),J=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();void 0!==e&&e.exports?e.exports=o:void 0!==(r=function(){return o}.call(t,n,t,e))&&(e.exports=r)}(Math)},function(e,t,n){var r=n(67);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("0f73e73c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-editable-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":e.labelId},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),n("span",{staticClass:"vc-input__label",attrs:{for:e.label,id:e.labelId}},[e._v(e._s(e.labelSpanText))]),e._v(" "),n("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[n("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},attrs:{role:"option","aria-label":"color:"+t,"aria-selected":t===e.pick},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(71)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(37),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(73),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Grayscale.vue",t.default=f.exports},function(e,t,n){var r=n(72);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("21ddbb74",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[n("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":t===e.pick},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(75)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(77),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Material.vue",t.default=f.exports},function(e,t,n){var r=n(76);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1ff3af73",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n',""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[n("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.$set(e.colors,"hex",t)},expression:"colors.hex"}}),e._v(" "),n("div",{staticClass:"vc-material-split"},[n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.$set(e.colors.rgba,"r",t)},expression:"colors.rgba.r"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.$set(e.colors.rgba,"g",t)},expression:"colors.rgba.g"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.$set(e.colors.rgba,"b",t)},expression:"colors.rgba.b"}})],1)])],1)},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(79)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(39),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(114),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Slider.vue",t.default=f.exports},function(e,t,n){var r=n(80);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7982aa43",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 0.6px #ddd;\n}\n",""])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(82),o=r(i),a=n(100),s=r(a),c="function"==typeof s.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===c(o.default)?function(e){return void 0===e?"undefined":c(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":c(e)}},function(e,t,n){e.exports={default:n(83),__esModule:!0}},function(e,t,n){n(84),n(96),e.exports=n(32).f("iterator")},function(e,t,n){"use strict";var r=n(85)(!0);n(40)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(23),i=n(24);e.exports=function(e){return function(t,n){var o,a,s=String(i(t)),c=r(n),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},function(e,t,n){var r=n(87);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(45),i=n(18),o=n(31),a={};n(7)(a,n(11)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(8),i=n(16),o=n(27);e.exports=n(9)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),s=a.length,c=0;s>c;)r.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var r=n(47);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(10),i=n(92),o=n(93);e.exports=function(e){return function(t,n,a){var s,c=r(t),l=i(c.length),u=o(a,l);if(e&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}}},function(e,t,n){var r=n(23),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(23),i=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(4).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(6),i=n(48),o=n(28)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){n(97);for(var r=n(4),i=n(7),o=n(26),a=n(11)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],u=r[l],f=u&&u.prototype;f&&!f[a]&&i(f,a,l),o[l]=o.Array}},function(e,t,n){"use strict";var r=n(98),i=n(99),o=n(26),a=n(10);e.exports=n(40)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,n):"values"==t?i(0,e[n]):i(0,[n,e[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(101),__esModule:!0}},function(e,t,n){n(102),n(108),n(109),n(110),e.exports=n(15).Symbol},function(e,t,n){"use strict";var r=n(4),i=n(6),o=n(9),a=n(41),s=n(44),c=n(103).KEY,l=n(17),u=n(29),f=n(31),d=n(19),h=n(11),p=n(32),v=n(33),g=n(104),b=n(105),x=n(16),m=n(12),_=n(48),w=n(10),y=n(25),C=n(18),k=n(45),F=n(106),S=n(107),A=n(49),O=n(8),E=n(27),M=S.f,j=O.f,L=F.f,P=r.Symbol,R=r.JSON,D=R&&R.stringify,B=h("_hidden"),T=h("toPrimitive"),H={}.propertyIsEnumerable,N=u("symbol-registry"),z=u("symbols"),I=u("op-symbols"),$=Object.prototype,U="function"==typeof P&&!!A.f,G=r.QObject,V=!G||!G.prototype||!G.prototype.findChild,q=o&&l(function(){return 7!=k(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=M($,t);r&&delete $[t],j(e,t,n),r&&e!==$&&j($,t,r)}:j,X=function(e){var t=z[e]=k(P.prototype);return t._k=e,t},W=U&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},Y=function(e,t,n){return e===$&&Y(I,t,n),x(e),t=y(t,!0),x(n),i(z,t)?(n.enumerable?(i(e,B)&&e[B][t]&&(e[B][t]=!1),n=k(n,{enumerable:C(0,!1)})):(i(e,B)||j(e,B,C(1,{})),e[B][t]=!0),q(e,t,n)):j(e,t,n)},J=function(e,t){x(e);for(var n,r=g(t=w(t)),i=0,o=r.length;o>i;)Y(e,n=r[i++],t[n]);return e},K=function(e,t){return void 0===t?k(e):J(k(e),t)},Z=function(e){var t=H.call(this,e=y(e,!0));return!(this===$&&i(z,e)&&!i(I,e))&&(!(t||!i(this,e)||!i(z,e)||i(this,B)&&this[B][e])||t)},Q=function(e,t){if(e=w(e),t=y(t,!0),e!==$||!i(z,t)||i(I,t)){var n=M(e,t);return!n||!i(z,t)||i(e,B)&&e[B][t]||(n.enumerable=!0),n}},ee=function(e){for(var t,n=L(w(e)),r=[],o=0;n.length>o;)i(z,t=n[o++])||t==B||t==c||r.push(t);return r},te=function(e){for(var t,n=e===$,r=L(n?I:w(e)),o=[],a=0;r.length>a;)!i(z,t=r[a++])||n&&!i($,t)||o.push(z[t]);return o};U||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===$&&t.call(I,n),i(this,B)&&i(this[B],e)&&(this[B][e]=!1),q(this,e,C(1,n))};return o&&V&&q($,e,{configurable:!0,set:t}),X(e)},s(P.prototype,"toString",function(){return this._k}),S.f=Q,O.f=Y,n(50).f=F.f=ee,n(34).f=Z,A.f=te,o&&!n(14)&&s($,"propertyIsEnumerable",Z,!0),p.f=function(e){return X(h(e))}),a(a.G+a.W+a.F*!U,{Symbol:P});for(var ne="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ne.length>re;)h(ne[re++]);for(var ie=E(h.store),oe=0;ie.length>oe;)v(ie[oe++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return i(N,e+="")?N[e]:N[e]=P(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!U,"Object",{create:K,defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:ee,getOwnPropertySymbols:te});var ae=l(function(){A.f(1)});a(a.S+a.F*ae,"Object",{getOwnPropertySymbols:function(e){return A.f(_(e))}}),R&&a(a.S+a.F*(!U||l(function(){var e=P();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=t=r[1],(m(t)||void 0!==e)&&!W(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!W(t))return t}),r[1]=t,D.apply(R,r)}}),P.prototype[T]||n(7)(P.prototype,T,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(e,t,n){var r=n(19)("meta"),i=n(12),o=n(6),a=n(8).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(17)(function(){return c(Object.preventExtensions({}))}),u=function(e){a(e,r,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[r].i},d=function(e,t){if(!o(e,r)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[r].w},h=function(e){return l&&p.NEED&&c(e)&&!o(e,r)&&u(e),e},p=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},function(e,t,n){var r=n(27),i=n(49),o=n(34);e.exports=function(e){var t=r(e),n=i.f;if(n)for(var a,s=n(e),c=o.f,l=0;s.length>l;)c.call(e,a=s[l++])&&t.push(a);return t}},function(e,t,n){var r=n(47);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(10),i=n(50).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},function(e,t,n){var r=n(34),i=n(18),o=n(10),a=n(25),s=n(6),c=n(42),l=Object.getOwnPropertyDescriptor;t.f=n(9)?l:function(e,t){if(e=o(e),t=a(t,!0),c)try{return l(e,t)}catch(e){}if(s(e,t))return i(!r.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(33)("asyncIterator")},function(e,t,n){n(33)("observable")},function(e,t,n){var r=n(112);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7c5f1a1c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-hue",e.directionClass]},[n("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":e.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft},attrs:{role:"presentation"}},[n("div",{staticClass:"vc-hue-picker"})])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[n("div",{staticClass:"vc-slider-hue-warp"},[n("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},e._l(e.normalizedSwatches,function(t,r){return n("div",{key:r,staticClass:"vc-slider-swatch",attrs:{"data-index":r,"aria-label":"color:"+e.colors.hex,role:"button"},on:{click:function(n){return e.handleSwClick(r,t)}}},[n("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":e.isActive(t,r),"vc-slider-swatch-picker--white":1===t.l},style:{background:"hsl("+e.colors.hsl.h+", "+100*t.s+"%, "+100*t.l+"%)"}})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(116)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(52),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(119),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Swatches.vue",t.default=f.exports},function(e,t,n){var r=n(117);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("10f839a2",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"red",function(){return r}),n.d(t,"pink",function(){return i}),n.d(t,"purple",function(){return o}),n.d(t,"deepPurple",function(){return a}),n.d(t,"indigo",function(){return s}),n.d(t,"blue",function(){return c}),n.d(t,"lightBlue",function(){return l}),n.d(t,"cyan",function(){return u}),n.d(t,"teal",function(){return f}),n.d(t,"green",function(){return d}),n.d(t,"lightGreen",function(){return h}),n.d(t,"lime",function(){return p}),n.d(t,"yellow",function(){return v}),n.d(t,"amber",function(){return g}),n.d(t,"orange",function(){return b}),n.d(t,"deepOrange",function(){return x}),n.d(t,"brown",function(){return m}),n.d(t,"grey",function(){return _}),n.d(t,"blueGrey",function(){return w}),n.d(t,"darkText",function(){return y}),n.d(t,"lightText",function(){return C}),n.d(t,"darkIcons",function(){return k}),n.d(t,"lightIcons",function(){return F}),n.d(t,"white",function(){return S}),n.d(t,"black",function(){return A});var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},i={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},o={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},a={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},s={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},c={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},u={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},f={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},d={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},h={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},p={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},v={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},g={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},x={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},m={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},y={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},C={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},k={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},F={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},S="#ffffff",A="#000000";t.default={red:r,pink:i,purple:o,deepPurple:a,indigo:s,blue:c,lightBlue:l,cyan:u,teal:f,green:d,lightGreen:h,lime:p,yellow:v,amber:g,orange:b,deepOrange:x,brown:m,grey:_,blueGrey:w,darkText:y,lightText:C,darkIcons:k,lightIcons:F,white:S,black:A}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":e.pick}},[n("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},e._l(e.palette,function(t,r){return n("div",{key:r,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return n("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":e.equal(t),"data-color":t},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(121)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(53),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(134),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Photoshop.vue",t.default=f.exports},function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("080365d4",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n',""])},function(e,t,n){var r=n(124);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("b5380e52",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n",""])},function(e,t){function n(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}e.exports=n},function(e,t){function n(e,t,n){function r(t){var n=v,r=g;return v=g=void 0,k=t,x=e.apply(r,n)}function o(e){return k=e,m=setTimeout(u,t),F?r(e):x}function a(e){var n=e-_,r=e-k,i=t-n;return S?y(i,b-r):i}function l(e){var n=e-_,r=e-k;return void 0===_||n>=t||n<0||S&&r>=b}function u(){var e=C();if(l(e))return f(e);m=setTimeout(u,a(e))}function f(e){return m=void 0,A&&v?r(e):(v=g=void 0,x)}function d(){void 0!==m&&clearTimeout(m),k=0,v=_=g=m=void 0}function h(){return void 0===m?x:f(C())}function p(){var e=C(),n=l(e);if(v=arguments,g=this,_=e,n){if(void 0===m)return o(_);if(S)return m=setTimeout(u,t),r(_)}return void 0===m&&(m=setTimeout(u,t)),x}var v,g,b,x,m,_,k=0,F=!1,S=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,i(n)&&(F=!!n.leading,S="maxWait"in n,b=S?w(s(n.maxWait)||0,t):b,A="trailing"in n?!!n.trailing:A),p.cancel=d,p.flush=h,p}function r(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||o(e)&&_.call(e)==u}function s(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=h.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):d.test(e)?l:+e}var c="Expected a function",l=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,b="object"==typeof self&&self&&self.Object===Object&&self,x=g||b||Function("return this")(),m=Object.prototype,_=m.toString,w=Math.max,y=Math.min,C=function(){return x.Date.now()};e.exports=r},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-saturation--white"}),e._v(" "),n("div",{staticClass:"vc-saturation--black"}),e._v(" "),n("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[n("div",{staticClass:"vc-saturation-circle"})])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){var r=n(129);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4dc1b086",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n",""])},function(e,t,n){var r=n(131);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7e15c05b",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-alpha"},[n("div",{staticClass:"vc-alpha-checkboard-wrap"},[n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),n("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"}},[n("div",{staticClass:"vc-alpha-picker"})])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[n("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[e._v(e._s(e.head))]),e._v(" "),n("div",{staticClass:"vc-ps-body"},[n("div",{staticClass:"vc-ps-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-ps-hue-wrap"},[n("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[n("div",{staticClass:"vc-ps-hue-pointer"},[n("i",{staticClass:"vc-ps-hue-pointer--left"}),n("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),n("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[n("div",{staticClass:"vc-ps-previews"},[n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.newLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-previews__swatches"},[n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex},attrs:{"aria-label":"New color is "+e.colors.hex}}),e._v(" "),n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},attrs:{"aria-label":"Current color is "+e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.currentLabel))])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-ps-actions"},[n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.acceptLabel},on:{click:e.handleAccept}},[e._v(e._s(e.acceptLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.cancelLabel},on:{click:e.handleCancel}},[e._v(e._s(e.cancelLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-fields"},[n("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),e.hasResetButton?n("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:e.handleReset}},[e._v(e._s(e.resetLabel))]):e._e()])])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(136)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(57),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(138),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Sketch.vue",t.default=f.exports},function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("612c6604",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 90%;\n  padding: 4px 0 3px 10%;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 10px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch-presets-color .vc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  border-radius: 3px;\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[n("div",{staticClass:"vc-sketch-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-controls"},[n("div",{staticClass:"vc-sketch-sliders"},[n("div",{staticClass:"vc-sketch-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-color-wrap"},[n("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor},attrs:{"aria-label":"Current color is "+e.activeColor}}),e._v(" "),n("checkboard")],1)]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-sketch-field"},[n("div",{staticClass:"vc-sketch-field--double"},[n("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[e._l(e.presetColors,function(t){return[e.isTransparent(t)?n("div",{key:t,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+t},on:{click:function(n){return e.handlePreset(t)}}},[n("checkboard")],1):n("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(n){return e.handlePreset(t)}}})]})],2)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(140)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(58),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(142),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Chrome.vue",t.default=f.exports},function(e,t,n){var r=n(141);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1cd16048",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[n("div",{staticClass:"vc-chrome-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-body"},[n("div",{staticClass:"vc-chrome-controls"},[n("div",{staticClass:"vc-chrome-color-wrap"},[n("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor},attrs:{"aria-label":"current color is "+e.colors.hex}}),e._v(" "),e.disableAlpha?e._e():n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-chrome-sliders"},[n("div",{staticClass:"vc-chrome-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-chrome-fields-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[e.hasAlpha?e._e():n("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}}),e._v(" "),e.hasAlpha?n("ed-in",{attrs:{label:"hex",value:e.colors.hex8},on:{change:e.inputChange}}):e._e()],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:e.toggleViews}},[n("div",{staticClass:"vc-chrome-toggle-icon"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[n("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(144)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(59),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(146),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Twitter.vue",t.default=f.exports},function(e,t,n){var r=n(145);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("669a48a5",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-twitter {\n  background: #fff;\n  border: 0 solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 4px;\n  position: relative;\n}\n.vc-twitter-triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent #fff transparent;\n  position: absolute;\n}\n.vc-twitter-triangle-shadow {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;\n  position: absolute;\n}\n.vc-twitter-body {\n  padding: 15px 9px 9px 15px;\n}\n.vc-twitter .vc-editable-input {\n  position: relative;\n}\n.vc-twitter .vc-editable-input input {\n  width: 100px;\n  font-size: 14px;\n  color: #666;\n  border: 0px;\n  outline: none;\n  height: 28px;\n  box-shadow: inset 0 0 0 1px #F0F0F0;\n  box-sizing: content-box;\n  border-radius: 0 4px 4px 0;\n  float: left;\n  padding: 1px;\n  padding-left: 8px;\n}\n.vc-twitter .vc-editable-input span {\n  display: none;\n}\n.vc-twitter-hash {\n  background: #F0F0F0;\n  height: 30px;\n  width: 30px;\n  border-radius: 4px 0 0 4px;\n  float: left;\n  color: #98A1A4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vc-twitter-swatch {\n  width: 30px;\n  height: 30px;\n  float: left;\n  border-radius: 4px;\n  margin: 0 6px 6px 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.vc-twitter-clear {\n  clear: both;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle {\n  display: none;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {\n  display: none;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle{\n  top: -10px;\n  left: 12px;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  left: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle{\n  top: -10px;\n  right: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  right: 12px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":"hide"===e.triangle,"vc-twitter-top-left-triangle ":"top-left"===e.triangle,"vc-twitter-top-right-triangle ":"top-right"===e.triangle},style:{width:"number"==typeof e.width?e.width+"px":e.width}},[n("div",{staticClass:"vc-twitter-triangle-shadow"}),e._v(" "),n("div",{staticClass:"vc-twitter-triangle"}),e._v(" "),n("div",{staticClass:"vc-twitter-body"},[e._l(e.defaultColors,function(t,r){return n("span",{key:r,staticClass:"vc-twitter-swatch",style:{background:t,boxShadow:"0 0 4px "+(e.equal(t)?t:"transparent")},on:{click:function(n){return e.handlerClick(t)}}})}),e._v(" "),n("div",{staticClass:"vc-twitter-hash"},[e._v("#")]),e._v(" "),n("editable-input",{attrs:{label:"#",value:e.hex},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-twitter-clear"})],2)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o}])});

/***/ }),

/***/ 247:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
	 true ? factory(exports) :
	0;
}(this, (function (exports) { 'use strict';

// Export Sortable Element Component Mixin
var ElementMixin = {
  inject: ['manager'],
  props: {
    index: {
      type: Number,
      required: true
    },
    collection: {
      type: [String, Number],
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  mounted: function mounted() {
    var _$props = this.$props,
        collection = _$props.collection,
        disabled = _$props.disabled,
        index = _$props.index;


    if (!disabled) {
      this.setDraggable(collection, index);
    }
  },


  watch: {
    index: function index(newIndex) {
      if (this.$el && this.$el.sortableInfo) {
        this.$el.sortableInfo.index = newIndex;
      }
    },
    disabled: function disabled(isDisabled) {
      if (isDisabled) {
        this.removeDraggable(this.collection);
      } else {
        this.setDraggable(this.collection, this.index);
      }
    },
    collection: function collection(newCollection, oldCollection) {
      this.removeDraggable(oldCollection);
      this.setDraggable(newCollection, this.index);
    }
  },

  beforeDestroy: function beforeDestroy() {
    var collection = this.collection,
        disabled = this.disabled;


    if (!disabled) this.removeDraggable(collection);
  },

  methods: {
    setDraggable: function setDraggable(collection, index) {
      var node = this.$el;

      node.sortableInfo = {
        index: index,
        collection: collection,
        manager: this.manager
      };

      this.ref = { node: node };
      this.manager.add(collection, this.ref);
    },
    removeDraggable: function removeDraggable(collection) {
      this.manager.remove(collection, this.ref);
    }
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



























var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Manager = function () {
  function Manager() {
    classCallCheck(this, Manager);

    this.refs = {};
  }

  createClass(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;

      return this.refs[collection].sort(function (a, b) {
        return a.node.sortableInfo.index - b.node.sortableInfo.index;
      });
    }
  }]);
  return Manager;
}();

function arrayMove(arr, previousIndex, newIndex) {
  var array = arr.slice(0);
  if (newIndex >= array.length) {
    var k = newIndex - array.length;
    while (k-- + 1) {
      array.push(undefined);
    }
  }
  array.splice(newIndex, 0, array.splice(previousIndex, 1)[0]);
  return array;
}

var events = {
  start: ['touchstart', 'mousedown'],
  move: ['touchmove', 'mousemove'],
  end: ['touchend', 'touchcancel', 'mouseup']
};

var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return ''; // server environment
  // fix for:
  //    https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  //    window.getComputedStyle() returns null inside an iframe with display: none
  // in this case return an array with a fake mozilla style in it.
  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();

function closest(el, fn) {
  while (el) {
    if (fn(el)) return el;
    el = el.parentNode;
  }
}

function limit(min, max, value) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

function getCSSPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }
  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);

  return {
    top: getCSSPixelValue(style.marginTop),
    right: getCSSPixelValue(style.marginRight),
    bottom: getCSSPixelValue(style.marginBottom),
    left: getCSSPixelValue(style.marginLeft)
  };
}

// Export Sortable Container Component Mixin
var ContainerMixin = {
  data: function data() {
    return {
      sorting: false,
      sortingIndex: null,
      manager: new Manager(),
      events: {
        start: this.handleStart,
        move: this.handleMove,
        end: this.handleEnd
      }
    };
  },


  props: {
    value: { type: Array, required: true },
    axis: { type: String, default: 'y' }, // 'x', 'y', 'xy'
    distance: { type: Number, default: 0 },
    pressDelay: { type: Number, default: 0 },
    pressThreshold: { type: Number, default: 5 },
    useDragHandle: { type: Boolean, default: false },
    useWindowAsScrollContainer: { type: Boolean, default: false },
    hideSortableGhost: { type: Boolean, default: true },
    lockToContainerEdges: { type: Boolean, default: false },
    lockOffset: { type: [String, Number, Array], default: '50%' },
    transitionDuration: { type: Number, default: 300 },
    appendTo: { type: String, default: 'body' },
    draggedSettlingDuration: { type: Number, default: null },
    lockAxis: String,
    helperClass: String,
    contentWindow: Object,
    shouldCancelStart: {
      type: Function,
      default: function _default(e) {
        // Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
        var disabledElements = ['input', 'textarea', 'select', 'option', 'button'];
        return disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1;
      }
    },
    getHelperDimensions: {
      type: Function,
      default: function _default(_ref) {
        var node = _ref.node;
        return {
          width: node.offsetWidth,
          height: node.offsetHeight
        };
      }
    }
  },

  provide: function provide() {
    return {
      manager: this.manager
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.container = this.$el;
    this.document = this.container.ownerDocument || document;
    this._window = this.contentWindow || window;
    this.scrollContainer = this.useWindowAsScrollContainer ? this.document.body : this.container;

    var _loop = function _loop(key) {
      if (_this.events.hasOwnProperty(key)) {
        events[key].forEach(function (eventName) {
          return _this.container.addEventListener(eventName, _this.events[key], { passive: true });
        });
      }
    };

    for (var key in this.events) {
      _loop(key);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var _this2 = this;

    var _loop2 = function _loop2(key) {
      if (_this2.events.hasOwnProperty(key)) {
        events[key].forEach(function (eventName) {
          return _this2.container.removeEventListener(eventName, _this2.events[key]);
        });
      }
    };

    for (var key in this.events) {
      _loop2(key);
    }
  },


  methods: {
    handleStart: function handleStart(e) {
      var _this3 = this;

      var _$props = this.$props,
          distance = _$props.distance,
          shouldCancelStart = _$props.shouldCancelStart;


      if (e.button === 2 || shouldCancelStart(e)) {
        return false;
      }

      this._touched = true;
      this._pos = this.getOffset(e);

      var node = closest(e.target, function (el) {
        return el.sortableInfo != null;
      });

      if (node && node.sortableInfo && this.nodeIsChild(node) && !this.sorting) {
        var useDragHandle = this.$props.useDragHandle;
        var _node$sortableInfo = node.sortableInfo,
            index = _node$sortableInfo.index,
            collection = _node$sortableInfo.collection;


        if (useDragHandle && !closest(e.target, function (el) {
          return el.sortableHandle != null;
        })) return;

        this.manager.active = { index: index, collection: collection };

        /*
        * Fixes a bug in Firefox where the :active state of anchor tags
        * prevent subsequent 'mousemove' events from being fired
        * (see https://github.com/clauderic/react-sortable-hoc/issues/118)
        */
        if (e.target.tagName.toLowerCase() === 'a') {
          e.preventDefault();
        }

        if (!distance) {
          if (this.$props.pressDelay === 0) {
            this.handlePress(e);
          } else {
            this.pressTimer = setTimeout(function () {
              return _this3.handlePress(e);
            }, this.$props.pressDelay);
          }
        }
      }
    },
    nodeIsChild: function nodeIsChild(node) {
      return node.sortableInfo.manager === this.manager;
    },
    handleMove: function handleMove(e) {
      var _$props2 = this.$props,
          distance = _$props2.distance,
          pressThreshold = _$props2.pressThreshold;


      if (!this.sorting && this._touched) {
        var offset = this.getOffset(e);
        this._delta = {
          x: this._pos.x - offset.x,
          y: this._pos.y - offset.y
        };
        var delta = Math.abs(this._delta.x) + Math.abs(this._delta.y);

        if (!distance && (!pressThreshold || pressThreshold && delta >= pressThreshold)) {
          clearTimeout(this.cancelTimer);
          this.cancelTimer = setTimeout(this.cancel, 0);
        } else if (distance && delta >= distance && this.manager.isActive()) {
          this.handlePress(e);
        }
      }
    },
    handleEnd: function handleEnd() {
      var distance = this.$props.distance;


      this._touched = false;

      if (!distance) {
        this.cancel();
      }
    },
    cancel: function cancel() {
      if (!this.sorting) {
        clearTimeout(this.pressTimer);
        this.manager.active = null;
      }
    },
    handlePress: function handlePress(e) {
      var _this4 = this;

      e.stopPropagation();
      var active = this.manager.getActive();

      if (active) {
        var _$props3 = this.$props,
            axis = _$props3.axis,
            getHelperDimensions = _$props3.getHelperDimensions,
            helperClass = _$props3.helperClass,
            hideSortableGhost = _$props3.hideSortableGhost,
            useWindowAsScrollContainer = _$props3.useWindowAsScrollContainer,
            appendTo = _$props3.appendTo;
        var node = active.node,
            collection = active.collection;
        var index = node.sortableInfo.index;

        var margin = getElementMargin(node);

        var containerBoundingRect = this.container.getBoundingClientRect();
        var dimensions = getHelperDimensions({ index: index, node: node, collection: collection });

        this.node = node;
        this.margin = margin;
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.marginOffset = {
          x: this.margin.left + this.margin.right,
          y: Math.max(this.margin.top, this.margin.bottom)
        };
        this.boundingClientRect = node.getBoundingClientRect();
        this.containerBoundingRect = containerBoundingRect;
        this.index = index;
        this.newIndex = index;

        this._axis = {
          x: axis.indexOf('x') >= 0,
          y: axis.indexOf('y') >= 0
        };
        this.offsetEdge = this.getEdgeOffset(node);
        this.initialOffset = this.getOffset(e);
        this.initialScroll = {
          top: this.scrollContainer.scrollTop,
          left: this.scrollContainer.scrollLeft
        };

        this.initialWindowScroll = {
          top: window.pageYOffset,
          left: window.pageXOffset
        };

        var fields = node.querySelectorAll('input, textarea, select');
        var clonedNode = node.cloneNode(true);
        var clonedFields = [].concat(toConsumableArray(clonedNode.querySelectorAll('input, textarea, select'))); // Convert NodeList to Array

        clonedFields.forEach(function (field, index) {
          if (field.type !== 'file' && fields[index]) {
            field.value = fields[index].value;
          }
        });

        this.helper = this.document.querySelector(appendTo).appendChild(clonedNode);

        this.helper.style.position = 'fixed';
        this.helper.style.top = this.boundingClientRect.top - margin.top + 'px';
        this.helper.style.left = this.boundingClientRect.left - margin.left + 'px';
        this.helper.style.width = this.width + 'px';
        this.helper.style.height = this.height + 'px';
        this.helper.style.boxSizing = 'border-box';
        this.helper.style.pointerEvents = 'none';

        if (hideSortableGhost) {
          this.sortableGhost = node;
          node.style.visibility = 'hidden';
          node.style.opacity = 0;
        }

        this.translate = {};
        this.minTranslate = {};
        this.maxTranslate = {};
        if (this._axis.x) {
          this.minTranslate.x = (useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - this.boundingClientRect.left - this.width / 2;
          this.maxTranslate.x = (useWindowAsScrollContainer ? this._window.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - this.boundingClientRect.left - this.width / 2;
        }
        if (this._axis.y) {
          this.minTranslate.y = (useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - this.boundingClientRect.top - this.height / 2;
          this.maxTranslate.y = (useWindowAsScrollContainer ? this._window.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - this.boundingClientRect.top - this.height / 2;
        }

        if (helperClass) {
          var _helper$classList;

          (_helper$classList = this.helper.classList).add.apply(_helper$classList, toConsumableArray(helperClass.split(' ')));
        }

        this.listenerNode = e.touches ? node : this._window;
        events.move.forEach(function (eventName) {
          return _this4.listenerNode.addEventListener(eventName, _this4.handleSortMove, false);
        });
        events.end.forEach(function (eventName) {
          return _this4.listenerNode.addEventListener(eventName, _this4.handleSortEnd, false);
        });

        this.sorting = true;
        this.sortingIndex = index;

        this.$emit('sort-start', { event: e, node: node, index: index, collection: collection });
      }
    },
    handleSortMove: function handleSortMove(e) {
      e.preventDefault(); // Prevent scrolling on mobile

      this.updatePosition(e);
      this.animateNodes();
      this.autoscroll();

      this.$emit('sort-move', { event: e });
    },
    handleSortEnd: function handleSortEnd(e) {
      var _this5 = this;

      var collection = this.manager.active.collection;

      // Remove the event listeners if the node is still in the DOM

      if (this.listenerNode) {
        events.move.forEach(function (eventName) {
          return _this5.listenerNode.removeEventListener(eventName, _this5.handleSortMove);
        });
        events.end.forEach(function (eventName) {
          return _this5.listenerNode.removeEventListener(eventName, _this5.handleSortEnd);
        });
      }

      var nodes = this.manager.refs[collection];

      var onEnd = function onEnd() {
        // Remove the helper from the DOM
        _this5.helper.parentNode.removeChild(_this5.helper);

        if (_this5.hideSortableGhost && _this5.sortableGhost) {
          _this5.sortableGhost.style.visibility = '';
          _this5.sortableGhost.style.opacity = '';
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var node = nodes[i];
          var el = node.node;

          // Clear the cached offsetTop / offsetLeft value
          node.edgeOffset = null;

          // Remove the transforms / transitions
          el.style[vendorPrefix + 'Transform'] = '';
          el.style[vendorPrefix + 'TransitionDuration'] = '';
        }

        // Stop autoscroll
        clearInterval(_this5.autoscrollInterval);
        _this5.autoscrollInterval = null;

        // Update state
        _this5.manager.active = null;

        _this5.sorting = false;
        _this5.sortingIndex = null;

        _this5.$emit('sort-end', {
          event: e,
          oldIndex: _this5.index,
          newIndex: _this5.newIndex,
          collection: collection
        });
        _this5.$emit('input', arrayMove(_this5.value, _this5.index, _this5.newIndex));

        _this5._touched = false;
      };

      if (this.$props.transitionDuration || this.$props.draggedSettlingDuration) {
        this.transitionHelperIntoPlace(nodes).then(function () {
          return onEnd();
        });
      } else {
        onEnd();
      }
    },
    transitionHelperIntoPlace: function transitionHelperIntoPlace(nodes) {
      var _this6 = this;

      if (this.$props.draggedSettlingDuration === 0 || nodes.length === 0) {
        return Promise.resolve();
      }

      var deltaScroll = {
        left: this.scrollContainer.scrollLeft - this.initialScroll.left,
        top: this.scrollContainer.scrollTop - this.initialScroll.top
      };
      var indexNode = nodes[this.index].node;
      var newIndexNode = nodes[this.newIndex].node;

      var targetX = -deltaScroll.left;
      if (this.translate && this.translate.x > 0) {
        // Diff against right edge when moving to the right
        targetX += newIndexNode.offsetLeft + newIndexNode.offsetWidth - (indexNode.offsetLeft + indexNode.offsetWidth);
      } else {
        targetX += newIndexNode.offsetLeft - indexNode.offsetLeft;
      }

      var targetY = -deltaScroll.top;
      if (this.translate && this.translate.y > 0) {
        // Diff against the bottom edge when moving down
        targetY += newIndexNode.offsetTop + newIndexNode.offsetHeight - (indexNode.offsetTop + indexNode.offsetHeight);
      } else {
        targetY += newIndexNode.offsetTop - indexNode.offsetTop;
      }

      var duration = this.$props.draggedSettlingDuration !== null ? this.$props.draggedSettlingDuration : this.$props.transitionDuration;

      this.helper.style[vendorPrefix + 'Transform'] = 'translate3d(' + targetX + 'px,' + targetY + 'px, 0)';
      this.helper.style[vendorPrefix + 'TransitionDuration'] = duration + 'ms';

      return new Promise(function (resolve) {
        // Register an event handler to clean up styles when the transition
        // finishes.
        var cleanup = function cleanup(event) {
          if (!event || event.propertyName === 'transform') {
            clearTimeout(cleanupTimer);
            _this6.helper.style[vendorPrefix + 'Transform'] = '';
            _this6.helper.style[vendorPrefix + 'TransitionDuration'] = '';
            resolve();
          }
        };
        // Force cleanup in case 'transitionend' never fires
        var cleanupTimer = setTimeout(cleanup, duration + 10);
        _this6.helper.addEventListener('transitionend', cleanup, false);
      });
    },
    getEdgeOffset: function getEdgeOffset(node) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { top: 0, left: 0 };

      // Get the actual offsetTop / offsetLeft value, no matter how deep the node is nested
      if (node) {
        var nodeOffset = {
          top: offset.top + node.offsetTop,
          left: offset.left + node.offsetLeft
        };
        if (node.parentNode !== this.container) {
          return this.getEdgeOffset(node.parentNode, nodeOffset);
        } else {
          return nodeOffset;
        }
      }
    },
    getOffset: function getOffset(e) {
      var _ref2 = e.touches ? e.touches[0] : e,
          pageX = _ref2.pageX,
          pageY = _ref2.pageY;

      return {
        x: pageX,
        y: pageY
      };
    },
    getLockPixelOffsets: function getLockPixelOffsets() {
      var lockOffset = this.$props.lockOffset;


      if (!Array.isArray(this.lockOffset)) {
        lockOffset = [lockOffset, lockOffset];
      }

      if (lockOffset.length !== 2) {
        throw new Error('lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given ' + lockOffset);
      }

      var _lockOffset = lockOffset,
          _lockOffset2 = slicedToArray(_lockOffset, 2),
          minLockOffset = _lockOffset2[0],
          maxLockOffset = _lockOffset2[1];

      return [this.getLockPixelOffset(minLockOffset), this.getLockPixelOffset(maxLockOffset)];
    },
    getLockPixelOffset: function getLockPixelOffset(lockOffset) {
      var offsetX = lockOffset;
      var offsetY = lockOffset;
      var unit = 'px';

      if (typeof lockOffset === 'string') {
        var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);

        if (match === null) {
          throw new Error('lockOffset value should be a number or a string of a number followed by "px" or "%". Given ' + lockOffset);
        }

        offsetX = offsetY = parseFloat(lockOffset);
        unit = match[1];
      }

      if (!isFinite(offsetX) || !isFinite(offsetY)) {
        throw new Error('lockOffset value should be a finite. Given ' + lockOffset);
      }

      if (unit === '%') {
        offsetX = offsetX * this.width / 100;
        offsetY = offsetY * this.height / 100;
      }

      return {
        x: offsetX,
        y: offsetY
      };
    },
    updatePosition: function updatePosition(e) {
      var _$props4 = this.$props,
          lockAxis = _$props4.lockAxis,
          lockToContainerEdges = _$props4.lockToContainerEdges;


      var offset = this.getOffset(e);
      var translate = {
        x: offset.x - this.initialOffset.x,
        y: offset.y - this.initialOffset.y
      };
      // Adjust for window scroll
      translate.y -= window.pageYOffset - this.initialWindowScroll.top;
      translate.x -= window.pageXOffset - this.initialWindowScroll.left;

      this.translate = translate;

      if (lockToContainerEdges) {
        var _getLockPixelOffsets = this.getLockPixelOffsets(),
            _getLockPixelOffsets2 = slicedToArray(_getLockPixelOffsets, 2),
            minLockOffset = _getLockPixelOffsets2[0],
            maxLockOffset = _getLockPixelOffsets2[1];

        var minOffset = {
          x: this.width / 2 - minLockOffset.x,
          y: this.height / 2 - minLockOffset.y
        };
        var maxOffset = {
          x: this.width / 2 - maxLockOffset.x,
          y: this.height / 2 - maxLockOffset.y
        };

        translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
        translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
      }

      if (lockAxis === 'x') {
        translate.y = 0;
      } else if (lockAxis === 'y') {
        translate.x = 0;
      }

      this.helper.style[vendorPrefix + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px, 0)';
    },
    animateNodes: function animateNodes() {
      var _$props5 = this.$props,
          transitionDuration = _$props5.transitionDuration,
          hideSortableGhost = _$props5.hideSortableGhost;

      var nodes = this.manager.getOrderedRefs();
      var deltaScroll = {
        left: this.scrollContainer.scrollLeft - this.initialScroll.left,
        top: this.scrollContainer.scrollTop - this.initialScroll.top
      };
      var sortingOffset = {
        left: this.offsetEdge.left + this.translate.x + deltaScroll.left,
        top: this.offsetEdge.top + this.translate.y + deltaScroll.top
      };
      var scrollDifference = {
        top: window.pageYOffset - this.initialWindowScroll.top,
        left: window.pageXOffset - this.initialWindowScroll.left
      };
      this.newIndex = null;

      for (var i = 0, len = nodes.length; i < len; i++) {
        var node = nodes[i].node;

        var index = node.sortableInfo.index;
        var width = node.offsetWidth;
        var height = node.offsetHeight;
        var offset = {
          width: this.width > width ? width / 2 : this.width / 2,
          height: this.height > height ? height / 2 : this.height / 2
        };

        var translate = {
          x: 0,
          y: 0
        };
        var edgeOffset = nodes[i].edgeOffset;

        // If we haven't cached the node's offsetTop / offsetLeft value

        if (!edgeOffset) {
          nodes[i].edgeOffset = edgeOffset = this.getEdgeOffset(node);
        }

        // Get a reference to the next and previous node
        var nextNode = i < nodes.length - 1 && nodes[i + 1];
        var prevNode = i > 0 && nodes[i - 1];

        // Also cache the next node's edge offset if needed.
        // We need this for calculating the animation in a grid setup
        if (nextNode && !nextNode.edgeOffset) {
          nextNode.edgeOffset = this.getEdgeOffset(nextNode.node);
        }

        // If the node is the one we're currently animating, skip it
        if (index === this.index) {
          if (hideSortableGhost) {
            /*
            * With windowing libraries such as `react-virtualized`, the sortableGhost
            * node may change while scrolling down and then back up (or vice-versa),
            * so we need to update the reference to the new node just to be safe.
            */
            this.sortableGhost = node;
            node.style.visibility = 'hidden';
            node.style.opacity = 0;
          }
          continue;
        }

        if (transitionDuration) {
          node.style[vendorPrefix + 'TransitionDuration'] = transitionDuration + 'ms';
        }

        if (this._axis.x) {
          if (this._axis.y) {
            // Calculations for a grid setup
            if (index < this.index && (sortingOffset.left + scrollDifference.left - offset.width <= edgeOffset.left && sortingOffset.top + scrollDifference.top <= edgeOffset.top + offset.height || sortingOffset.top + scrollDifference.top + offset.height <= edgeOffset.top)) {
              // If the current node is to the left on the same row, or above the node that's being dragged
              // then move it to the right
              translate.x = this.width + this.marginOffset.x;
              if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                // If it moves passed the right bounds, then animate it to the first position of the next row.
                // We just use the offset of the next node to calculate where to move, because that node's original position
                // is exactly where we want to go
                translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                translate.y = nextNode.edgeOffset.top - edgeOffset.top;
              }
              if (this.newIndex === null) {
                this.newIndex = index;
              }
            } else if (index > this.index && (sortingOffset.left + scrollDifference.left + offset.width >= edgeOffset.left && sortingOffset.top + scrollDifference.top + offset.height >= edgeOffset.top || sortingOffset.top + scrollDifference.top + offset.height >= edgeOffset.top + height)) {
              // If the current node is to the right on the same row, or below the node that's being dragged
              // then move it to the left
              translate.x = -(this.width + this.marginOffset.x);
              if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                // If it moves passed the left bounds, then animate it to the last position of the previous row.
                // We just use the offset of the previous node to calculate where to move, because that node's original position
                // is exactly where we want to go
                translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                translate.y = prevNode.edgeOffset.top - edgeOffset.top;
              }
              this.newIndex = index;
            }
          } else {
            if (index > this.index && sortingOffset.left + scrollDifference.left + offset.width >= edgeOffset.left) {
              translate.x = -(this.width + this.marginOffset.x);
              this.newIndex = index;
            } else if (index < this.index && sortingOffset.left + scrollDifference.left <= edgeOffset.left + offset.width) {
              translate.x = this.width + this.marginOffset.x;
              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }
        } else if (this._axis.y) {
          if (index > this.index && sortingOffset.top + scrollDifference.top + offset.height >= edgeOffset.top) {
            translate.y = -(this.height + this.marginOffset.y);
            this.newIndex = index;
          } else if (index < this.index && sortingOffset.top + scrollDifference.top <= edgeOffset.top + offset.height) {
            translate.y = this.height + this.marginOffset.y;
            if (this.newIndex == null) {
              this.newIndex = index;
            }
          }
        }
        node.style[vendorPrefix + 'Transform'] = 'translate3d(' + translate.x + 'px,' + translate.y + 'px,0)';
      }

      if (this.newIndex == null) {
        this.newIndex = this.index;
      }
    },
    autoscroll: function autoscroll() {
      var _this7 = this;

      var translate = this.translate;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };

      if (translate.y >= this.maxTranslate.y - this.height / 2) {
        direction.y = 1; // Scroll Down
        speed.y = acceleration.y * Math.abs((this.maxTranslate.y - this.height / 2 - translate.y) / this.height);
      } else if (translate.x >= this.maxTranslate.x - this.width / 2) {
        direction.x = 1; // Scroll Right
        speed.x = acceleration.x * Math.abs((this.maxTranslate.x - this.width / 2 - translate.x) / this.width);
      } else if (translate.y <= this.minTranslate.y + this.height / 2) {
        direction.y = -1; // Scroll Up
        speed.y = acceleration.y * Math.abs((translate.y - this.height / 2 - this.minTranslate.y) / this.height);
      } else if (translate.x <= this.minTranslate.x + this.width / 2) {
        direction.x = -1; // Scroll Left
        speed.x = acceleration.x * Math.abs((translate.x - this.width / 2 - this.minTranslate.x) / this.width);
      }

      if (this.autoscrollInterval) {
        clearInterval(this.autoscrollInterval);
        this.autoscrollInterval = null;
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.autoscrollInterval = setInterval(function () {
          _this7.isAutoScrolling = true;
          var offset = {
            left: 1 * speed.x * direction.x,
            top: 1 * speed.y * direction.y
          };
          _this7.scrollContainer.scrollTop += offset.top;
          _this7.scrollContainer.scrollLeft += offset.left;
          _this7.translate.x += offset.left;
          _this7.translate.y += offset.top;
          _this7.animateNodes();
        }, 5);
      }
    }
  }
};

// Export Sortable Element Handle Directive
var HandleDirective = {
  bind: function bind(el) {
    el.sortableHandle = true;
  }
};

function create(name, mixin) {
  return {
    name: name,
    mixins: [mixin],
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render: function render(h) {
      return h(this.tag, this.$slots.default);
    }
  };
}

var SlickList = create('slick-list', ContainerMixin);
var SlickItem = create('slick-item', ElementMixin);

exports.ElementMixin = ElementMixin;
exports.ContainerMixin = ContainerMixin;
exports.HandleDirective = HandleDirective;
exports.SlickList = SlickList;
exports.SlickItem = SlickItem;
exports.arrayMove = arrayMove;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 848:
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
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
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

var wellKnownSymbol = __nested_webpack_require_3663__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __nested_webpack_require_3943__) {

var aFunction = __nested_webpack_require_3943__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __nested_webpack_require_4619__) {

var toIndexedObject = __nested_webpack_require_4619__("fc6a");
var nativeGetOwnPropertyNames = __nested_webpack_require_4619__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __nested_webpack_require_5400__) {

var DESCRIPTORS = __nested_webpack_require_5400__("83ab");
var propertyIsEnumerableModule = __nested_webpack_require_5400__("d1e7");
var createPropertyDescriptor = __nested_webpack_require_5400__("5c6c");
var toIndexedObject = __nested_webpack_require_5400__("fc6a");
var toPrimitive = __nested_webpack_require_5400__("c04e");
var has = __nested_webpack_require_5400__("5135");
var IE8_DOM_DEFINE = __nested_webpack_require_5400__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __nested_webpack_require_6394__) {

var DESCRIPTORS = __nested_webpack_require_6394__("83ab");
var fails = __nested_webpack_require_6394__("d039");
var createElement = __nested_webpack_require_6394__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __nested_webpack_require_6826__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_6826__("d784");
var isRegExp = __nested_webpack_require_6826__("44e7");
var anObject = __nested_webpack_require_6826__("825a");
var requireObjectCoercible = __nested_webpack_require_6826__("1d80");
var speciesConstructor = __nested_webpack_require_6826__("4840");
var advanceStringIndex = __nested_webpack_require_6826__("8aa5");
var toLength = __nested_webpack_require_6826__("50c4");
var callRegExpExec = __nested_webpack_require_6826__("14c3");
var regexpExec = __nested_webpack_require_6826__("9263");
var fails = __nested_webpack_require_6826__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __nested_webpack_require_12244__) {

var classof = __nested_webpack_require_12244__("c6b6");
var regexpExec = __nested_webpack_require_12244__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __nested_webpack_require_12932__) {

var global = __nested_webpack_require_12932__("da84");
var DOMIterables = __nested_webpack_require_12932__("fdbc");
var forEach = __nested_webpack_require_12932__("17c2");
var createNonEnumerableProperty = __nested_webpack_require_12932__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __nested_webpack_require_13656__) {

"use strict";

var $forEach = __nested_webpack_require_13656__("b727").forEach;
var arrayMethodIsStrict = __nested_webpack_require_13656__("a640");
var arrayMethodUsesToLength = __nested_webpack_require_13656__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __nested_webpack_require_14350__) {

var getBuiltIn = __nested_webpack_require_14350__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __nested_webpack_require_14744__) {

var wellKnownSymbol = __nested_webpack_require_14744__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __nested_webpack_require_16041__) {

var fails = __nested_webpack_require_16041__("d039");
var wellKnownSymbol = __nested_webpack_require_16041__("b622");
var V8_VERSION = __nested_webpack_require_16041__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __nested_webpack_require_16768__) {

var toInteger = __nested_webpack_require_16768__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __nested_webpack_require_17284__) {

var global = __nested_webpack_require_17284__("da84");
var getOwnPropertyDescriptor = __nested_webpack_require_17284__("06cf").f;
var createNonEnumerableProperty = __nested_webpack_require_17284__("9112");
var redefine = __nested_webpack_require_17284__("6eeb");
var setGlobal = __nested_webpack_require_17284__("ce4e");
var copyConstructorProperties = __nested_webpack_require_17284__("e893");
var isForced = __nested_webpack_require_17284__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __nested_webpack_require_19784__) {

var internalObjectKeys = __nested_webpack_require_19784__("ca84");
var enumBugKeys = __nested_webpack_require_19784__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __nested_webpack_require_20259__) {

"use strict";

var $ = __nested_webpack_require_20259__("23e7");
var notARegExp = __nested_webpack_require_20259__("5a34");
var requireObjectCoercible = __nested_webpack_require_20259__("1d80");
var correctIsRegExpLogic = __nested_webpack_require_20259__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __nested_webpack_require_20958__) {

"use strict";

var redefine = __nested_webpack_require_20958__("6eeb");
var anObject = __nested_webpack_require_20958__("825a");
var fails = __nested_webpack_require_20958__("d039");
var flags = __nested_webpack_require_20958__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __nested_webpack_require_22006__) {

"use strict";

var getBuiltIn = __nested_webpack_require_22006__("d066");
var definePropertyModule = __nested_webpack_require_22006__("9bf2");
var wellKnownSymbol = __nested_webpack_require_22006__("b622");
var DESCRIPTORS = __nested_webpack_require_22006__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __nested_webpack_require_22679__) {

var global = __nested_webpack_require_22679__("da84");
var userAgent = __nested_webpack_require_22679__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __nested_webpack_require_23274__) {

var getBuiltIn = __nested_webpack_require_23274__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __nested_webpack_require_23466__) {

var classof = __nested_webpack_require_23466__("f5df");
var Iterators = __nested_webpack_require_23466__("3f8c");
var wellKnownSymbol = __nested_webpack_require_23466__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __nested_webpack_require_23869__) {

var DESCRIPTORS = __nested_webpack_require_23869__("83ab");
var definePropertyModule = __nested_webpack_require_23869__("9bf2");
var anObject = __nested_webpack_require_23869__("825a");
var objectKeys = __nested_webpack_require_23869__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __nested_webpack_require_24559__) {

var isObject = __nested_webpack_require_24559__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __nested_webpack_require_24845__) {

"use strict";

var charAt = __nested_webpack_require_24845__("6547").charAt;
var InternalStateModule = __nested_webpack_require_24845__("69f3");
var defineIterator = __nested_webpack_require_24845__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __nested_webpack_require_26030__) {

"use strict";

var $ = __nested_webpack_require_26030__("23e7");
var forEach = __nested_webpack_require_26030__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __nested_webpack_require_26401__) {

var global = __nested_webpack_require_26401__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __nested_webpack_require_26553__) {

var fails = __nested_webpack_require_26553__("d039");
var classof = __nested_webpack_require_26553__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __nested_webpack_require_27130__) {

var wellKnownSymbol = __nested_webpack_require_27130__("b622");
var create = __nested_webpack_require_27130__("7c73");
var definePropertyModule = __nested_webpack_require_27130__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __nested_webpack_require_27844__) {

var isObject = __nested_webpack_require_27844__("861d");
var classof = __nested_webpack_require_27844__("c6b6");
var wellKnownSymbol = __nested_webpack_require_27844__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __nested_webpack_require_28343__) {

"use strict";

var $ = __nested_webpack_require_28343__("23e7");
var $some = __nested_webpack_require_28343__("b727").some;
var arrayMethodIsStrict = __nested_webpack_require_28343__("a640");
var arrayMethodUsesToLength = __nested_webpack_require_28343__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __nested_webpack_require_29063__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_29063__("d784");
var anObject = __nested_webpack_require_29063__("825a");
var toLength = __nested_webpack_require_29063__("50c4");
var requireObjectCoercible = __nested_webpack_require_29063__("1d80");
var advanceStringIndex = __nested_webpack_require_29063__("8aa5");
var regExpExec = __nested_webpack_require_29063__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __nested_webpack_require_30699__) {

var anObject = __nested_webpack_require_30699__("825a");
var aFunction = __nested_webpack_require_30699__("1c0b");
var wellKnownSymbol = __nested_webpack_require_30699__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __nested_webpack_require_31272__) {

var fails = __nested_webpack_require_31272__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __nested_webpack_require_31597__) {

"use strict";

var $ = __nested_webpack_require_31597__("23e7");
var $trim = __nested_webpack_require_31597__("58a8").trim;
var forcedStringTrimMethod = __nested_webpack_require_31597__("c8d2");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __nested_webpack_require_32070__) {

var DESCRIPTORS = __nested_webpack_require_32070__("83ab");
var global = __nested_webpack_require_32070__("da84");
var isForced = __nested_webpack_require_32070__("94ca");
var inheritIfRequired = __nested_webpack_require_32070__("7156");
var defineProperty = __nested_webpack_require_32070__("9bf2").f;
var getOwnPropertyNames = __nested_webpack_require_32070__("241c").f;
var isRegExp = __nested_webpack_require_32070__("44e7");
var getFlags = __nested_webpack_require_32070__("ad6d");
var stickyHelpers = __nested_webpack_require_32070__("9f7f");
var redefine = __nested_webpack_require_32070__("6eeb");
var fails = __nested_webpack_require_32070__("d039");
var setInternalState = __nested_webpack_require_32070__("69f3").set;
var setSpecies = __nested_webpack_require_32070__("2626");
var wellKnownSymbol = __nested_webpack_require_32070__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __nested_webpack_require_35151__) {

var toIndexedObject = __nested_webpack_require_35151__("fc6a");
var toLength = __nested_webpack_require_35151__("50c4");
var toAbsoluteIndex = __nested_webpack_require_35151__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __nested_webpack_require_36484__) {

"use strict";

var $ = __nested_webpack_require_36484__("23e7");
var $filter = __nested_webpack_require_36484__("b727").filter;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_36484__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_36484__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __nested_webpack_require_37306__) {

"use strict";

var bind = __nested_webpack_require_37306__("0366");
var toObject = __nested_webpack_require_37306__("7b0b");
var callWithSafeIterationClosing = __nested_webpack_require_37306__("9bdd");
var isArrayIteratorMethod = __nested_webpack_require_37306__("e95a");
var toLength = __nested_webpack_require_37306__("50c4");
var createProperty = __nested_webpack_require_37306__("8418");
var getIteratorMethod = __nested_webpack_require_37306__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __nested_webpack_require_39126__) {

var toInteger = __nested_webpack_require_39126__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __nested_webpack_require_39691__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_39691__("d784");
var anObject = __nested_webpack_require_39691__("825a");
var toObject = __nested_webpack_require_39691__("7b0b");
var toLength = __nested_webpack_require_39691__("50c4");
var toInteger = __nested_webpack_require_39691__("a691");
var requireObjectCoercible = __nested_webpack_require_39691__("1d80");
var advanceStringIndex = __nested_webpack_require_39691__("8aa5");
var regExpExec = __nested_webpack_require_39691__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __nested_webpack_require_45065__) {

var IS_PURE = __nested_webpack_require_45065__("c430");
var store = __nested_webpack_require_45065__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __nested_webpack_require_45487__) {

var getBuiltIn = __nested_webpack_require_45487__("d066");
var getOwnPropertyNamesModule = __nested_webpack_require_45487__("241c");
var getOwnPropertySymbolsModule = __nested_webpack_require_45487__("7418");
var anObject = __nested_webpack_require_45487__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __nested_webpack_require_46433__) {

var requireObjectCoercible = __nested_webpack_require_46433__("1d80");
var whitespaces = __nested_webpack_require_46433__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __nested_webpack_require_47567__) {

var isRegExp = __nested_webpack_require_47567__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __nested_webpack_require_48075__) {

"use strict";

var DESCRIPTORS = __nested_webpack_require_48075__("83ab");
var fails = __nested_webpack_require_48075__("d039");
var objectKeys = __nested_webpack_require_48075__("df75");
var getOwnPropertySymbolsModule = __nested_webpack_require_48075__("7418");
var propertyIsEnumerableModule = __nested_webpack_require_48075__("d1e7");
var toObject = __nested_webpack_require_48075__("7b0b");
var IndexedObject = __nested_webpack_require_48075__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __nested_webpack_require_50145__) {

var toInteger = __nested_webpack_require_50145__("a691");
var requireObjectCoercible = __nested_webpack_require_50145__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __nested_webpack_require_51351__) {

var isObject = __nested_webpack_require_51351__("861d");
var isArray = __nested_webpack_require_51351__("e8b5");
var wellKnownSymbol = __nested_webpack_require_51351__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __nested_webpack_require_52131__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_52131__("7f9a");
var global = __nested_webpack_require_52131__("da84");
var isObject = __nested_webpack_require_52131__("861d");
var createNonEnumerableProperty = __nested_webpack_require_52131__("9112");
var objectHas = __nested_webpack_require_52131__("5135");
var sharedKey = __nested_webpack_require_52131__("f772");
var hiddenKeys = __nested_webpack_require_52131__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __nested_webpack_require_53698__) {

var global = __nested_webpack_require_53698__("da84");
var createNonEnumerableProperty = __nested_webpack_require_53698__("9112");
var has = __nested_webpack_require_53698__("5135");
var setGlobal = __nested_webpack_require_53698__("ce4e");
var inspectSource = __nested_webpack_require_53698__("8925");
var InternalStateModule = __nested_webpack_require_53698__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __nested_webpack_require_55233__) {

var isObject = __nested_webpack_require_55233__("861d");
var setPrototypeOf = __nested_webpack_require_55233__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __nested_webpack_require_56089__) {

var path = __nested_webpack_require_56089__("428f");
var has = __nested_webpack_require_56089__("5135");
var wrappedWellKnownSymbolModule = __nested_webpack_require_56089__("e538");
var defineProperty = __nested_webpack_require_56089__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __nested_webpack_require_56809__) {

var requireObjectCoercible = __nested_webpack_require_56809__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __nested_webpack_require_57126__) {

var anObject = __nested_webpack_require_57126__("825a");
var defineProperties = __nested_webpack_require_57126__("37e8");
var enumBugKeys = __nested_webpack_require_57126__("7839");
var hiddenKeys = __nested_webpack_require_57126__("d012");
var html = __nested_webpack_require_57126__("1be4");
var documentCreateElement = __nested_webpack_require_57126__("cc12");
var sharedKey = __nested_webpack_require_57126__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __nested_webpack_require_60019__) {

"use strict";

var $ = __nested_webpack_require_60019__("23e7");
var createIteratorConstructor = __nested_webpack_require_60019__("9ed3");
var getPrototypeOf = __nested_webpack_require_60019__("e163");
var setPrototypeOf = __nested_webpack_require_60019__("d2bb");
var setToStringTag = __nested_webpack_require_60019__("d44e");
var createNonEnumerableProperty = __nested_webpack_require_60019__("9112");
var redefine = __nested_webpack_require_60019__("6eeb");
var wellKnownSymbol = __nested_webpack_require_60019__("b622");
var IS_PURE = __nested_webpack_require_60019__("c430");
var Iterators = __nested_webpack_require_60019__("3f8c");
var IteratorsCore = __nested_webpack_require_60019__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __nested_webpack_require_63998__) {

var global = __nested_webpack_require_63998__("da84");
var inspectSource = __nested_webpack_require_63998__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __nested_webpack_require_64299__) {

var isObject = __nested_webpack_require_64299__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __nested_webpack_require_64557__) {

var fails = __nested_webpack_require_64557__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __nested_webpack_require_64852__) {

"use strict";

var toPrimitive = __nested_webpack_require_64852__("c04e");
var definePropertyModule = __nested_webpack_require_64852__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_64852__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __nested_webpack_require_68436__) {

var store = __nested_webpack_require_68436__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __nested_webpack_require_68849__) {

"use strict";

var charAt = __nested_webpack_require_68849__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __nested_webpack_require_69448__) {

var DESCRIPTORS = __nested_webpack_require_69448__("83ab");
var definePropertyModule = __nested_webpack_require_69448__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_69448__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __nested_webpack_require_69920__) {

"use strict";

var regexpFlags = __nested_webpack_require_69920__("ad6d");
var stickyHelpers = __nested_webpack_require_69920__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __nested_webpack_require_72816__) {

var fails = __nested_webpack_require_72816__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __nested_webpack_require_73471__) {

"use strict";

var $ = __nested_webpack_require_73471__("23e7");
var fails = __nested_webpack_require_73471__("d039");
var isArray = __nested_webpack_require_73471__("e8b5");
var isObject = __nested_webpack_require_73471__("861d");
var toObject = __nested_webpack_require_73471__("7b0b");
var toLength = __nested_webpack_require_73471__("50c4");
var createProperty = __nested_webpack_require_73471__("8418");
var arraySpeciesCreate = __nested_webpack_require_73471__("65f0");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_73471__("1dde");
var wellKnownSymbol = __nested_webpack_require_73471__("b622");
var V8_VERSION = __nested_webpack_require_73471__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __nested_webpack_require_75843__) {

var anObject = __nested_webpack_require_75843__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __nested_webpack_require_76377__) {

var DESCRIPTORS = __nested_webpack_require_76377__("83ab");
var IE8_DOM_DEFINE = __nested_webpack_require_76377__("0cfb");
var anObject = __nested_webpack_require_76377__("825a");
var toPrimitive = __nested_webpack_require_76377__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __nested_webpack_require_77232__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_77232__("ae93").IteratorPrototype;
var create = __nested_webpack_require_77232__("7c73");
var createPropertyDescriptor = __nested_webpack_require_77232__("5c6c");
var setToStringTag = __nested_webpack_require_77232__("d44e");
var Iterators = __nested_webpack_require_77232__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __nested_webpack_require_77999__) {

"use strict";


var fails = __nested_webpack_require_77999__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __nested_webpack_require_78697__) {

"use strict";

var $ = __nested_webpack_require_78697__("23e7");
var IndexedObject = __nested_webpack_require_78697__("44ad");
var toIndexedObject = __nested_webpack_require_78697__("fc6a");
var arrayMethodIsStrict = __nested_webpack_require_78697__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __nested_webpack_require_79421__) {

"use strict";

var $ = __nested_webpack_require_79421__("23e7");
var toAbsoluteIndex = __nested_webpack_require_79421__("23cb");
var toInteger = __nested_webpack_require_79421__("a691");
var toLength = __nested_webpack_require_79421__("50c4");
var toObject = __nested_webpack_require_79421__("7b0b");
var arraySpeciesCreate = __nested_webpack_require_79421__("65f0");
var createProperty = __nested_webpack_require_79421__("8418");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_79421__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_79421__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __nested_webpack_require_82225__) {

"use strict";

var $ = __nested_webpack_require_82225__("23e7");
var global = __nested_webpack_require_82225__("da84");
var getBuiltIn = __nested_webpack_require_82225__("d066");
var IS_PURE = __nested_webpack_require_82225__("c430");
var DESCRIPTORS = __nested_webpack_require_82225__("83ab");
var NATIVE_SYMBOL = __nested_webpack_require_82225__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_82225__("fdbf");
var fails = __nested_webpack_require_82225__("d039");
var has = __nested_webpack_require_82225__("5135");
var isArray = __nested_webpack_require_82225__("e8b5");
var isObject = __nested_webpack_require_82225__("861d");
var anObject = __nested_webpack_require_82225__("825a");
var toObject = __nested_webpack_require_82225__("7b0b");
var toIndexedObject = __nested_webpack_require_82225__("fc6a");
var toPrimitive = __nested_webpack_require_82225__("c04e");
var createPropertyDescriptor = __nested_webpack_require_82225__("5c6c");
var nativeObjectCreate = __nested_webpack_require_82225__("7c73");
var objectKeys = __nested_webpack_require_82225__("df75");
var getOwnPropertyNamesModule = __nested_webpack_require_82225__("241c");
var getOwnPropertyNamesExternal = __nested_webpack_require_82225__("057f");
var getOwnPropertySymbolsModule = __nested_webpack_require_82225__("7418");
var getOwnPropertyDescriptorModule = __nested_webpack_require_82225__("06cf");
var definePropertyModule = __nested_webpack_require_82225__("9bf2");
var propertyIsEnumerableModule = __nested_webpack_require_82225__("d1e7");
var createNonEnumerableProperty = __nested_webpack_require_82225__("9112");
var redefine = __nested_webpack_require_82225__("6eeb");
var shared = __nested_webpack_require_82225__("5692");
var sharedKey = __nested_webpack_require_82225__("f772");
var hiddenKeys = __nested_webpack_require_82225__("d012");
var uid = __nested_webpack_require_82225__("90e3");
var wellKnownSymbol = __nested_webpack_require_82225__("b622");
var wrappedWellKnownSymbolModule = __nested_webpack_require_82225__("e538");
var defineWellKnownSymbol = __nested_webpack_require_82225__("746f");
var setToStringTag = __nested_webpack_require_82225__("d44e");
var InternalStateModule = __nested_webpack_require_82225__("69f3");
var $forEach = __nested_webpack_require_82225__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __nested_webpack_require_94977__) {

var $ = __nested_webpack_require_94977__("23e7");
var from = __nested_webpack_require_94977__("4df4");
var checkCorrectnessOfIteration = __nested_webpack_require_94977__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __nested_webpack_require_95464__) {

"use strict";

var fails = __nested_webpack_require_95464__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __nested_webpack_require_96187__) {

"use strict";

var DESCRIPTORS = __nested_webpack_require_96187__("83ab");
var global = __nested_webpack_require_96187__("da84");
var isForced = __nested_webpack_require_96187__("94ca");
var redefine = __nested_webpack_require_96187__("6eeb");
var has = __nested_webpack_require_96187__("5135");
var classof = __nested_webpack_require_96187__("c6b6");
var inheritIfRequired = __nested_webpack_require_96187__("7156");
var toPrimitive = __nested_webpack_require_96187__("c04e");
var fails = __nested_webpack_require_96187__("d039");
var create = __nested_webpack_require_96187__("7c73");
var getOwnPropertyNames = __nested_webpack_require_96187__("241c").f;
var getOwnPropertyDescriptor = __nested_webpack_require_96187__("06cf").f;
var defineProperty = __nested_webpack_require_96187__("9bf2").f;
var trim = __nested_webpack_require_96187__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aab0":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_99665__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_timepicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99665__("fd6f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_timepicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_99665__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_timepicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_timepicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __nested_webpack_require_101674__) {

var wellKnownSymbol = __nested_webpack_require_101674__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __nested_webpack_require_102100__) {

"use strict";

var $ = __nested_webpack_require_102100__("23e7");
var exec = __nested_webpack_require_102100__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __nested_webpack_require_102360__) {

"use strict";

var anObject = __nested_webpack_require_102360__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __nested_webpack_require_102931__) {

var DESCRIPTORS = __nested_webpack_require_102931__("83ab");
var fails = __nested_webpack_require_102931__("d039");
var has = __nested_webpack_require_102931__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __nested_webpack_require_103899__) {

"use strict";

var getPrototypeOf = __nested_webpack_require_103899__("e163");
var createNonEnumerableProperty = __nested_webpack_require_103899__("9112");
var has = __nested_webpack_require_103899__("5135");
var wellKnownSymbol = __nested_webpack_require_103899__("b622");
var IS_PURE = __nested_webpack_require_103899__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __nested_webpack_require_105270__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_105270__("00ee");
var classof = __nested_webpack_require_105270__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __nested_webpack_require_105711__) {

var DESCRIPTORS = __nested_webpack_require_105711__("83ab");
var defineProperty = __nested_webpack_require_105711__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __nested_webpack_require_106448__) {

var global = __nested_webpack_require_106448__("da84");
var shared = __nested_webpack_require_106448__("5692");
var has = __nested_webpack_require_106448__("5135");
var uid = __nested_webpack_require_106448__("90e3");
var NATIVE_SYMBOL = __nested_webpack_require_106448__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_106448__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __nested_webpack_require_107254__) {

var $ = __nested_webpack_require_107254__("23e7");
var toObject = __nested_webpack_require_107254__("7b0b");
var nativeKeys = __nested_webpack_require_107254__("df75");
var fails = __nested_webpack_require_107254__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __nested_webpack_require_107788__) {

var bind = __nested_webpack_require_107788__("0366");
var IndexedObject = __nested_webpack_require_107788__("44ad");
var toObject = __nested_webpack_require_107788__("7b0b");
var toLength = __nested_webpack_require_107788__("50c4");
var arraySpeciesCreate = __nested_webpack_require_107788__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __nested_webpack_require_110374__) {

var isObject = __nested_webpack_require_110374__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __nested_webpack_require_111487__) {

var global = __nested_webpack_require_111487__("da84");
var setGlobal = __nested_webpack_require_111487__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __nested_webpack_require_111772__) {

"use strict";

var $ = __nested_webpack_require_111772__("23e7");
var $findIndex = __nested_webpack_require_111772__("b727").findIndex;
var addToUnscopables = __nested_webpack_require_111772__("44d2");
var arrayMethodUsesToLength = __nested_webpack_require_111772__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __nested_webpack_require_113282__) {

var fails = __nested_webpack_require_113282__("d039");
var whitespaces = __nested_webpack_require_113282__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __nested_webpack_require_113779__) {

"use strict";

var $ = __nested_webpack_require_113779__("23e7");
var $indexOf = __nested_webpack_require_113779__("4d64").indexOf;
var arrayMethodIsStrict = __nested_webpack_require_113779__("a640");
var arrayMethodUsesToLength = __nested_webpack_require_113779__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __nested_webpack_require_114780__) {

var has = __nested_webpack_require_114780__("5135");
var toIndexedObject = __nested_webpack_require_114780__("fc6a");
var indexOf = __nested_webpack_require_114780__("4d64").indexOf;
var hiddenKeys = __nested_webpack_require_114780__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __nested_webpack_require_115413__) {

"use strict";

var $ = __nested_webpack_require_115413__("23e7");
var $includes = __nested_webpack_require_115413__("4d64").includes;
var addToUnscopables = __nested_webpack_require_115413__("44d2");
var arrayMethodUsesToLength = __nested_webpack_require_115413__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __nested_webpack_require_116211__) {

var global = __nested_webpack_require_116211__("da84");
var isObject = __nested_webpack_require_116211__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __nested_webpack_require_116626__) {

var $ = __nested_webpack_require_116626__("23e7");
var assign = __nested_webpack_require_116626__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __nested_webpack_require_116962__) {

var global = __nested_webpack_require_116962__("da84");
var createNonEnumerableProperty = __nested_webpack_require_116962__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __nested_webpack_require_117575__) {

var path = __nested_webpack_require_117575__("428f");
var global = __nested_webpack_require_117575__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __nested_webpack_require_118764__) {

var defineWellKnownSymbol = __nested_webpack_require_118764__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __nested_webpack_require_119035__) {

var anObject = __nested_webpack_require_119035__("825a");
var aPossiblePrototype = __nested_webpack_require_119035__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __nested_webpack_require_119955__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_119955__("00ee");
var redefine = __nested_webpack_require_119955__("6eeb");
var toString = __nested_webpack_require_119955__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __nested_webpack_require_120390__) {

var defineProperty = __nested_webpack_require_120390__("9bf2").f;
var has = __nested_webpack_require_120390__("5135");
var wellKnownSymbol = __nested_webpack_require_120390__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __nested_webpack_require_120866__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__nested_webpack_require_120866__("ac1f");
var redefine = __nested_webpack_require_120866__("6eeb");
var fails = __nested_webpack_require_120866__("d039");
var wellKnownSymbol = __nested_webpack_require_120866__("b622");
var regexpExec = __nested_webpack_require_120866__("9263");
var createNonEnumerableProperty = __nested_webpack_require_120866__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __nested_webpack_require_125549__) {

"use strict";

var $ = __nested_webpack_require_125549__("23e7");
var $map = __nested_webpack_require_125549__("b727").map;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_125549__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_125549__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __nested_webpack_require_126341__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_126341__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __nested_webpack_require_127006__) {

var global = __nested_webpack_require_127006__("da84");
var DOMIterables = __nested_webpack_require_127006__("fdbc");
var ArrayIteratorMethods = __nested_webpack_require_127006__("e260");
var createNonEnumerableProperty = __nested_webpack_require_127006__("9112");
var wellKnownSymbol = __nested_webpack_require_127006__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __nested_webpack_require_128589__) {

var internalObjectKeys = __nested_webpack_require_128589__("ca84");
var enumBugKeys = __nested_webpack_require_128589__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __nested_webpack_require_128949__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __nested_webpack_require_128949__("23e7");
var DESCRIPTORS = __nested_webpack_require_128949__("83ab");
var global = __nested_webpack_require_128949__("da84");
var has = __nested_webpack_require_128949__("5135");
var isObject = __nested_webpack_require_128949__("861d");
var defineProperty = __nested_webpack_require_128949__("9bf2").f;
var copyConstructorProperties = __nested_webpack_require_128949__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __nested_webpack_require_131100__) {

var has = __nested_webpack_require_131100__("5135");
var toObject = __nested_webpack_require_131100__("7b0b");
var sharedKey = __nested_webpack_require_131100__("f772");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_131100__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __nested_webpack_require_131863__) {

var fails = __nested_webpack_require_131863__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __nested_webpack_require_132153__) {

"use strict";

var toIndexedObject = __nested_webpack_require_132153__("fc6a");
var addToUnscopables = __nested_webpack_require_132153__("44d2");
var Iterators = __nested_webpack_require_132153__("3f8c");
var InternalStateModule = __nested_webpack_require_132153__("69f3");
var defineIterator = __nested_webpack_require_132153__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __nested_webpack_require_134396__) {

var wellKnownSymbol = __nested_webpack_require_134396__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __nested_webpack_require_134561__) {

var has = __nested_webpack_require_134561__("5135");
var ownKeys = __nested_webpack_require_134561__("56ef");
var getOwnPropertyDescriptorModule = __nested_webpack_require_134561__("06cf");
var definePropertyModule = __nested_webpack_require_134561__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __nested_webpack_require_135206__) {

var classof = __nested_webpack_require_135206__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __nested_webpack_require_135508__) {

var wellKnownSymbol = __nested_webpack_require_135508__("b622");
var Iterators = __nested_webpack_require_135508__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __nested_webpack_require_135933__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_135933__("00ee");
var classofRaw = __nested_webpack_require_135933__("c6b6");
var wellKnownSymbol = __nested_webpack_require_135933__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __nested_webpack_require_136986__) {

var shared = __nested_webpack_require_136986__("5692");
var uid = __nested_webpack_require_136986__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_137275__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_137275__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_137275__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_137275__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08a1de70-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-timepicker.vue?vue&type=template&id=7502c349&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"vue__time-picker time-picker",style:(_vm.inputWidthStyle)},[_c('input',{ref:"input",staticClass:"display-time",class:[_vm.inputClass, {'is-empty': _vm.inputIsEmpty, 'invalid': _vm.hasInvalidInput, 'all-selected': _vm.allValueSelected, 'disabled': _vm.disabled, 'has-custom-icon': _vm.$slots && _vm.$slots.icon }],style:(_vm.inputWidthStyle),attrs:{"type":"text","id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder ? _vm.placeholder : _vm.formatString,"tabindex":_vm.disabled ? -1 : _vm.tabindex,"disabled":_vm.disabled,"readonly":!_vm.manualInput,"autocomplete":_vm.autocomplete},domProps:{"value":_vm.inputIsEmpty ? null : _vm.customDisplayTime},on:{"focus":_vm.onFocus,"change":_vm.onChange,"blur":function($event){_vm.debounceBlur(); _vm.blurEvent()},"mousedown":_vm.onMouseDown,"keydown":[_vm.keyDownHandler,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.escBlur($event)}],"compositionstart":_vm.onCompostionStart,"compositionend":_vm.onCompostionEnd,"paste":_vm.pasteHandler}}),(_vm.showClearBtn || _vm.showDropdownBtn)?_c('div',{staticClass:"controls",attrs:{"tabindex":"-1"}},[(!_vm.isActive && _vm.showClearBtn)?_c('span',{staticClass:"clear-btn",class:{'has-custom-btn': _vm.$slots && _vm.$slots.clearButton },attrs:{"tabindex":"-1"},on:{"click":_vm.clearTime}},[_vm._t("clearButton",[_c('span',{staticClass:"char"},[_vm._v("×")])])],2):_vm._e(),(_vm.showDropdownBtn)?_c('span',{staticClass:"dropdown-btn",class:{'has-custom-btn': _vm.$slots && _vm.$slots.dropdownButton },attrs:{"tabindex":"-1"},on:{"click":function($event){return _vm.setDropdownState(_vm.fixedDropdownButton ? !_vm.showDropdown : true, true)},"mousedown":_vm.keepFocusing}},[_vm._t("dropdownButton",[_c('span',{staticClass:"char"},[_vm._v("▾")])])],2):_vm._e()]):_vm._e(),(_vm.$slots && _vm.$slots.icon)?_c('div',{staticClass:"custom-icon"},[_vm._t("icon")],2):_vm._e(),(_vm.showDropdown)?_c('div',{staticClass:"time-picker-overlay",attrs:{"tabindex":"-1"},on:{"click":_vm.toggleActive}}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDropdown),expression:"showDropdown"}],ref:"dropdown",staticClass:"dropdown",class:[_vm.dropdownDirClass],style:(_vm.inputWidthStyle),attrs:{"tabindex":"-1"},on:{"mouseup":_vm.keepFocusing,"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"select-list",style:(_vm.inputWidthStyle),attrs:{"tabindex":"-1"}},[(!_vm.advancedKeyboard)?[_vm._l((_vm.columnsSequence),function(column){return [(column === 'hour')?_c('ul',{key:column,staticClass:"hours",on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.hourLabelText)}}),_vm._l((_vm.hours),function(hr,hIndex){return [(!_vm.opts.hideDisabledHours || (_vm.opts.hideDisabledHours && !_vm.isDisabled('hour', hr)))?_c('li',{key:hIndex,class:{active: _vm.hour === hr},attrs:{"disabled":_vm.isDisabled('hour', hr),"data-key":hr},domProps:{"textContent":_vm._s(hr)},on:{"click":function($event){return _vm.select('hour', hr)}}}):_vm._e()]})],2):_vm._e(),(column === 'minute')?_c('ul',{key:column,staticClass:"minutes",on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.minuteLabelText)}}),_vm._l((_vm.minutes),function(m,mIndex){return [(!_vm.opts.hideDisabledMinutes || (_vm.opts.hideDisabledMinutes && !_vm.isDisabled('minute', m)))?_c('li',{key:mIndex,class:{active: _vm.minute === m},attrs:{"disabled":_vm.isDisabled('minute', m),"data-key":m},domProps:{"textContent":_vm._s(m)},on:{"click":function($event){return _vm.select('minute', m)}}}):_vm._e()]})],2):_vm._e(),(column === 'second')?_c('ul',{key:column,staticClass:"seconds",on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.secondLabelText)}}),_vm._l((_vm.seconds),function(s,sIndex){return [(!_vm.opts.hideDisabledSeconds || (_vm.opts.hideDisabledSeconds && !_vm.isDisabled('second', s)))?_c('li',{key:sIndex,class:{active: _vm.second === s},attrs:{"disabled":_vm.isDisabled('second', s),"data-key":s},domProps:{"textContent":_vm._s(s)},on:{"click":function($event){return _vm.select('second', s)}}}):_vm._e()]})],2):_vm._e(),(column === 'apm')?_c('ul',{key:column,staticClass:"apms",on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.apmLabelText)}}),_vm._l((_vm.apms),function(a,aIndex){return [(!_vm.opts.hideDisabledHours || (_vm.opts.hideDisabledHours && !_vm.isDisabled('apm', a)))?_c('li',{key:aIndex,class:{active: _vm.apm === a},attrs:{"disabled":_vm.isDisabled('apm', a),"data-key":a},domProps:{"textContent":_vm._s(_vm.apmDisplayText(a))},on:{"click":function($event){return _vm.select('apm', a)}}}):_vm._e()]})],2):_vm._e()]})]:_vm._e(),(_vm.advancedKeyboard)?[_vm._l((_vm.columnsSequence),function(column){return [(column === 'hour')?_c('ul',{key:column,staticClass:"hours",attrs:{"tabindex":"-1"},on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",attrs:{"tabindex":"-1"},domProps:{"textContent":_vm._s(_vm.hourLabelText)}}),_vm._l((_vm.hours),function(hr,hIndex){return [(!_vm.opts.hideDisabledHours || (_vm.opts.hideDisabledHours && !_vm.isDisabled('hour', hr)))?_c('li',{key:hIndex,class:{active: _vm.hour === hr},attrs:{"tabindex":_vm.isDisabled('hour', hr) ? -1 : _vm.tabindex,"data-key":hr,"disabled":_vm.isDisabled('hour', hr)},domProps:{"textContent":_vm._s(hr)},on:{"click":function($event){return _vm.select('hour', hr)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.onTab('hour', hr, $event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.select('hour', hr)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.select('hour', hr)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.prevItem('hour', hr)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.nextItem('hour', hr)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();return _vm.toLeftColumn('hour')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();return _vm.toRightColumn('hour')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.debounceBlur($event)}],"blur":_vm.debounceBlur,"focus":_vm.keepFocusing}}):_vm._e()]})],2):_vm._e(),(column === 'minute')?_c('ul',{key:column,staticClass:"minutes",attrs:{"tabindex":"-1"},on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",attrs:{"tabindex":"-1"},domProps:{"textContent":_vm._s(_vm.minuteLabelText)}}),_vm._l((_vm.minutes),function(m,mIndex){return [(!_vm.opts.hideDisabledMinutes || (_vm.opts.hideDisabledMinutes && !_vm.isDisabled('minute', m)))?_c('li',{key:mIndex,class:{active: _vm.minute === m},attrs:{"tabindex":_vm.isDisabled('minute', m) ? -1 : _vm.tabindex,"data-key":m,"disabled":_vm.isDisabled('minute', m)},domProps:{"textContent":_vm._s(m)},on:{"click":function($event){return _vm.select('minute', m)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.onTab('minute', m, $event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.select('minute', m)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.select('minute', m)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.prevItem('minute', m)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.nextItem('minute', m)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();return _vm.toLeftColumn('minute')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();return _vm.toRightColumn('minute')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.debounceBlur($event)}],"blur":_vm.debounceBlur,"focus":_vm.keepFocusing}}):_vm._e()]})],2):_vm._e(),(column === 'second')?_c('ul',{key:column,staticClass:"seconds",attrs:{"tabindex":"-1"},on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",attrs:{"tabindex":"-1"},domProps:{"textContent":_vm._s(_vm.secondLabelText)}}),_vm._l((_vm.seconds),function(s,sIndex){return [(!_vm.opts.hideDisabledSeconds || (_vm.opts.hideDisabledSeconds && !_vm.isDisabled('second', s)))?_c('li',{key:sIndex,class:{active: _vm.second === s},attrs:{"tabindex":_vm.isDisabled('second', s) ? -1 : _vm.tabindex,"data-key":s,"disabled":_vm.isDisabled('second', s)},domProps:{"textContent":_vm._s(s)},on:{"click":function($event){return _vm.select('second', s)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.onTab('second', s, $event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.select('second', s)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.select('second', s)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.prevItem('second', s)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.nextItem('second', s)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();return _vm.toLeftColumn('second')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();return _vm.toRightColumn('second')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.debounceBlur($event)}],"blur":_vm.debounceBlur,"focus":_vm.keepFocusing}}):_vm._e()]})],2):_vm._e(),(column === 'apm')?_c('ul',{key:column,staticClass:"apms",attrs:{"tabindex":"-1"},on:{"scroll":_vm.keepFocusing}},[_c('li',{staticClass:"hint",attrs:{"tabindex":"-1"},domProps:{"textContent":_vm._s(_vm.apmLabelText)}}),_vm._l((_vm.apms),function(a,aIndex){return [(!_vm.opts.hideDisabledHours || (_vm.opts.hideDisabledHours && !_vm.isDisabled('apm', a)))?_c('li',{key:aIndex,class:{active: _vm.apm === a},attrs:{"tabindex":_vm.isDisabled('apm', a) ? -1 : _vm.tabindex,"data-key":a,"disabled":_vm.isDisabled('apm', a)},domProps:{"textContent":_vm._s(_vm.apmDisplayText(a))},on:{"click":function($event){return _vm.select('apm', a)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.onTab('apm', a, $event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.select('apm', a)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.select('apm', a)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.prevItem('apm', a)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.nextItem('apm', a)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();return _vm.toLeftColumn('apm')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();return _vm.toRightColumn('apm')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.debounceBlur($event)}],"blur":_vm.debounceBlur,"focus":_vm.keepFocusing}}):_vm._e()]})],2):_vm._e()]})]:_vm._e()],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-timepicker.vue?vue&type=template&id=7502c349&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __nested_webpack_require_137275__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __nested_webpack_require_137275__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __nested_webpack_require_137275__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __nested_webpack_require_137275__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __nested_webpack_require_137275__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __nested_webpack_require_137275__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __nested_webpack_require_137275__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __nested_webpack_require_137275__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __nested_webpack_require_137275__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __nested_webpack_require_137275__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __nested_webpack_require_137275__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __nested_webpack_require_137275__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __nested_webpack_require_137275__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __nested_webpack_require_137275__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __nested_webpack_require_137275__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __nested_webpack_require_137275__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __nested_webpack_require_137275__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __nested_webpack_require_137275__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __nested_webpack_require_137275__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __nested_webpack_require_137275__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __nested_webpack_require_137275__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __nested_webpack_require_137275__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __nested_webpack_require_137275__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __nested_webpack_require_137275__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __nested_webpack_require_137275__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __nested_webpack_require_137275__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __nested_webpack_require_137275__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __nested_webpack_require_137275__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __nested_webpack_require_137275__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __nested_webpack_require_137275__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __nested_webpack_require_137275__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __nested_webpack_require_137275__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-timepicker.vue?vue&type=script&lang=js&


























var CONFIG = {
  HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
  MINUTE_TOKENS: ['mm', 'm'],
  SECOND_TOKENS: ['ss', 's'],
  APM_TOKENS: ['A', 'a'],
  BASIC_TYPES: ['hour', 'minute', 'second', 'apm']
};
var DEFAULT_OPTIONS = {
  format: 'HH:mm',
  minuteInterval: 1,
  secondInterval: 1,
  hourRange: null,
  minuteRange: null,
  secondRange: null,
  hideDisabledHours: false,
  hideDisabledMinutes: false,
  hideDisabledSeconds: false,
  hideDisabledItems: false,
  hideDropdown: false,
  blurDelay: 300,
  manualInputTimeout: 1000,
  dropOffsetHeight: 160
};
/* harmony default export */ var vue_timepickervue_type_script_lang_js_ = ({
  name: 'VueTimepicker',
  props: {
    value: {
      type: [Object, String]
    },
    format: {
      type: String
    },
    minuteInterval: {
      type: [Number, String]
    },
    secondInterval: {
      type: [Number, String]
    },
    hourRange: {
      type: Array
    },
    minuteRange: {
      type: Array
    },
    secondRange: {
      type: Array
    },
    hideDisabledHours: {
      type: Boolean,
      default: false
    },
    hideDisabledMinutes: {
      type: Boolean,
      default: false
    },
    hideDisabledSeconds: {
      type: Boolean,
      default: false
    },
    hideDisabledItems: {
      type: Boolean,
      default: false
    },
    hideClearButton: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closeOnComplete: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    inputClass: {
      type: [String, Object, Array]
    },
    placeholder: {
      type: String
    },
    tabindex: {
      type: [Number, String],
      default: 0
    },
    inputWidth: {
      type: String
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    hourLabel: {
      type: String
    },
    minuteLabel: {
      type: String
    },
    secondLabel: {
      type: String
    },
    apmLabel: {
      type: String
    },
    amText: {
      type: String
    },
    pmText: {
      type: String
    },
    blurDelay: {
      type: [Number, String]
    },
    advancedKeyboard: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: false
    },
    dropDirection: {
      type: String,
      default: 'down'
    },
    dropOffsetHeight: {
      type: [Number, String]
    },
    containerId: {
      type: String
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    manualInput: {
      type: Boolean,
      default: false
    },
    manualInputTimeout: {
      type: [Number, String]
    },
    hideDropdown: {
      type: Boolean,
      default: false
    },
    fixedDropdownButton: {
      type: Boolean,
      default: false
    },
    debugMode: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      timeValue: {},
      hours: [],
      minutes: [],
      seconds: [],
      apms: [],
      isActive: false,
      showDropdown: false,
      isFocusing: false,
      debounceTimer: undefined,
      hourType: 'HH',
      minuteType: 'mm',
      secondType: '',
      apmType: '',
      hour: '',
      minute: '',
      second: '',
      apm: '',
      fullValues: undefined,
      bakDisplayTime: undefined,
      doClearApmChecking: false,
      selectionTimer: undefined,
      kbInputTimer: undefined,
      kbInputLog: '',
      bakCurrentPos: undefined,
      forceDropOnTop: false
    };
  },
  computed: {
    opts: function opts() {
      var options = Object.assign({}, DEFAULT_OPTIONS);

      if (this.format && this.format.length) {
        options.format = String(this.format);
      }

      if (this.isNumber(this.minuteInterval)) {
        options.minuteInterval = +this.minuteInterval;
      } // minuteInterval failsafe


      if (!options.minuteInterval || options.minuteInterval < 1 || options.minuteInterval > 60) {
        if (this.debugMode) {
          if (options.minuteInterval > 60) {
            this.debugLog("\"minute-interval\" should be less than 60. Current value is ".concat(this.minuteInterval));
          } else if (options.minuteInterval === 0 || options.minuteInterval < 1) {
            this.debugLog("\"minute-interval\" should be NO less than 1. Current value is ".concat(this.minuteInterval));
          }
        }

        if (options.minuteInterval === 0) {
          options.minuteInterval = 60;
        } else {
          options.minuteInterval = 1;
        }
      }

      if (this.isNumber(this.secondInterval)) {
        options.secondInterval = +this.secondInterval;
      } // secondInterval failsafe


      if (!options.secondInterval || options.secondInterval < 1 || options.secondInterval > 60) {
        if (this.debugMode) {
          if (options.secondInterval > 60) {
            this.debugLog("\"second-interval\" should be less than 60. Current value is ".concat(this.secondInterval));
          } else if (options.secondInterval === 0 || options.secondInterval < 1) {
            this.debugLog("\"second-interval\" should be NO less than 1. Current value is ".concat(this.secondInterval));
          }
        }

        if (options.secondInterval === 0) {
          options.secondInterval = 60;
        } else {
          options.secondInterval = 1;
        }
      }

      if (this.hourRange && Array.isArray(this.hourRange)) {
        options.hourRange = JSON.parse(JSON.stringify(this.hourRange));

        if (!this.hourRange.length && this.debugMode) {
          this.debugLog('The "hour-range" array is empty (length === 0)');
        }
      }

      if (this.minuteRange && Array.isArray(this.minuteRange)) {
        options.minuteRange = JSON.parse(JSON.stringify(this.minuteRange));

        if (!this.minuteRange.length && this.debugMode) {
          this.debugLog('The "minute-range" array is empty (length === 0)');
        }
      }

      if (this.secondRange && Array.isArray(this.secondRange)) {
        options.secondRange = JSON.parse(JSON.stringify(this.secondRange));

        if (!this.secondRange.length && this.debugMode) {
          this.debugLog('The "second-range" array is empty (length === 0)');
        }
      }

      if (this.hideDisabledItems) {
        options.hideDisabledItems = true;
      }

      if (this.hideDisabledHours || this.hideDisabledItems) {
        options.hideDisabledHours = true;
      }

      if (this.hideDisabledMinutes || this.hideDisabledItems) {
        options.hideDisabledMinutes = true;
      }

      if (this.hideDisabledSeconds || this.hideDisabledItems) {
        options.hideDisabledSeconds = true;
      }

      if (this.hideDropdown) {
        if (this.manualInput) {
          options.hideDropdown = true;
        } else if (this.debugMode) {
          this.debugLog('"hide-dropdown" only works with "manual-input" mode');
        }
      }

      if (this.blurDelay && +this.blurDelay > 0) {
        options.blurDelay = +this.blurDelay;
      }

      if (this.manualInputTimeout && +this.manualInputTimeout > 0) {
        options.manualInputTimeout = +this.manualInputTimeout;
      }

      if (this.dropOffsetHeight && +this.dropOffsetHeight > 0) {
        options.dropOffsetHeight = +this.dropOffsetHeight;
      }

      return options;
    },
    useStringValue: function useStringValue() {
      return typeof this.value === 'string';
    },
    formatString: function formatString() {
      return this.opts.format || DEFAULT_OPTIONS.format;
    },
    inUse: function inUse() {
      var _this = this;

      var typesInUse = CONFIG.BASIC_TYPES.filter(function (type) {
        return _this.getTokenByType(type);
      }); // Sort types and tokens by their sequence in the "format" string

      typesInUse.sort(function (l, r) {
        return _this.formatString.indexOf(_this.getTokenByType(l) || null) - _this.formatString.indexOf(_this.getTokenByType(r) || null);
      });
      var tokensInUse = typesInUse.map(function (type) {
        return _this.getTokenByType(type);
      });
      return {
        hour: !!this.hourType,
        minute: !!this.minuteType,
        second: !!this.secondType,
        apm: !!this.apmType,
        types: typesInUse || [],
        tokens: tokensInUse || []
      };
    },
    displayTime: function displayTime() {
      var formatString = String(this.formatString);

      if (this.hour) {
        formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour);
      }

      if (this.minute) {
        formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute);
      }

      if (this.second && this.secondType) {
        formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second);
      }

      if (this.apm && this.apmType) {
        formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm);
      }

      return formatString;
    },
    customDisplayTime: function customDisplayTime() {
      if (!this.amText && !this.pmText) {
        return this.displayTime;
      }

      return this.displayTime.replace(new RegExp(this.apm, 'g'), this.apmDisplayText(this.apm));
    },
    inputIsEmpty: function inputIsEmpty() {
      return this.formatString === this.displayTime;
    },
    allValueSelected: function allValueSelected() {
      if (this.inUse.hour && !this.hour || this.inUse.minute && !this.minute || this.inUse.second && !this.second || this.inUse.apm && !this.apm) {
        return false;
      }

      return true;
    },
    columnsSequence: function columnsSequence() {
      return this.inUse.types.map(function (type) {
        return type;
      }) || [];
    },
    showClearBtn: function showClearBtn() {
      if (this.hideClearButton || this.disabled) {
        return false;
      }

      return !this.inputIsEmpty;
    },
    showDropdownBtn: function showDropdownBtn() {
      if (this.fixedDropdownButton) {
        return true;
      }

      if (this.opts.hideDropdown && this.isActive && !this.showDropdown) {
        return true;
      }

      return false;
    },
    baseOn12Hours: function baseOn12Hours() {
      return this.hourType === 'h' || this.hourType === 'hh';
    },
    hourRangeIn24HrFormat: function hourRangeIn24HrFormat() {
      var _this2 = this;

      if (!this.hourType || !this.opts.hourRange) {
        return false;
      }

      if (!this.opts.hourRange.length) {
        return [];
      }

      var range = [];
      this.opts.hourRange.forEach(function (value) {
        if (value instanceof Array) {
          if (value.length > 2 && _this2.debugMode) {
            _this2.debugLog("Nested array within \"hour-range\" must contain no more than two items. Only the first two items of ".concat(JSON.stringify(value), " will be taken into account."));
          }

          var start = value[0];
          var end = value[1] || value[0];

          if (_this2.is12hRange(start)) {
            start = _this2.translate12hRange(start);
          }

          if (_this2.is12hRange(end)) {
            end = _this2.translate12hRange(end);
          }

          for (var i = +start; i <= +end; i++) {
            if (i < 0 || i > 24) {
              continue;
            }

            if (!range.includes(i)) {
              range.push(i);
            }
          }
        } else {
          if (_this2.is12hRange(value)) {
            value = _this2.translate12hRange(value);
          } else {
            value = +value;
          }

          if (value < 0 || value > 24) {
            return;
          }

          if (!range.includes(value)) {
            range.push(value);
          }
        }
      });
      range.sort(function (l, r) {
        return l - r;
      });
      return range;
    },
    restrictedHourRange: function restrictedHourRange() {
      // No restriction
      if (!this.hourRangeIn24HrFormat) {
        return false;
      } // 12-Hour


      if (this.baseOn12Hours) {
        var range = this.hourRangeIn24HrFormat.map(function (value) {
          if (value === 12) {
            return '12p';
          } else if (value === 24 || value === 0) {
            return '12a';
          }

          return value > 12 ? "".concat(value % 12, "p") : "".concat(value, "a");
        });
        return range;
      } // 24-Hour


      return this.hourRangeIn24HrFormat;
    },
    validHoursList: function validHoursList() {
      var _this3 = this;

      if (!this.manualInput) {
        return false;
      }

      if (this.restrictedHourRange) {
        var list = [];

        if (this.baseOn12Hours) {
          list = this.restrictedHourRange.map(function (hr) {
            var l = hr.substr(0, hr.length - 1);
            var r = hr.substr(-1);
            return "".concat(_this3.formatValue(_this3.hourType, l)).concat(r);
          });
          var am12Index = list.indexOf('12a');

          if (am12Index > 0) {
            // Make '12a' the first item in h/hh
            list.unshift(list.splice(am12Index, 1)[0]);
          }

          return list;
        }

        list = this.restrictedHourRange.map(function (hr) {
          return _this3.formatValue(_this3.hourType, hr);
        });

        if (list.length > 1 && list[0] && list[0] === '24') {
          // Make '24' the last item in k/kk
          list.push(list.shift());
        }

        return list;
      }

      if (this.baseOn12Hours) {
        return [].concat([], this.hours.map(function (hr) {
          return "".concat(hr, "a");
        }), this.hours.map(function (hr) {
          return "".concat(hr, "p");
        }));
      }

      return this.hours;
    },
    has: function has() {
      var result = {
        customApmText: false
      };
      var apmEnabled = !!this.apmType;

      if (apmEnabled && this.hourRangeIn24HrFormat && this.hourRangeIn24HrFormat.length) {
        var range = [].concat([], this.hourRangeIn24HrFormat);
        result.am = range.some(function (value) {
          return value < 12 || value === 24;
        });
        result.pm = range.some(function (value) {
          return value >= 12 && value < 24;
        });
      } else {
        result.am = apmEnabled;
        result.pm = apmEnabled;
      }

      if (this.amText && this.amText.length || this.pmText && this.pmText.length) {
        result.customApmText = true;
      }

      return result;
    },
    minuteRangeList: function minuteRangeList() {
      if (!this.minuteType || !this.opts.minuteRange) {
        return false;
      }

      if (!this.opts.minuteRange.length) {
        return [];
      }

      return this.renderRangeList(this.opts.minuteRange, 'minute');
    },
    secondRangeList: function secondRangeList() {
      if (!this.secondType || !this.opts.secondRange) {
        return false;
      }

      if (!this.opts.secondRange.length) {
        return [];
      }

      return this.renderRangeList(this.opts.secondRange, 'second');
    },
    hourLabelText: function hourLabelText() {
      return this.hourLabel || this.hourType;
    },
    minuteLabelText: function minuteLabelText() {
      return this.minuteLabel || this.minuteType;
    },
    secondLabelText: function secondLabelText() {
      return this.secondLabel || this.secondType;
    },
    apmLabelText: function apmLabelText() {
      return this.apmLabel || this.apmType;
    },
    inputWidthStyle: function inputWidthStyle() {
      if (!this.inputWidth || !this.inputWidth.length) {
        return;
      }

      return {
        width: this.inputWidth
      };
    },
    tokenRegexBase: function tokenRegexBase() {
      return this.inUse.tokens.join('|');
    },
    tokenChunks: function tokenChunks() {
      if (!this.manualInput && !this.useStringValue) {
        return false;
      }

      var formatString = String(this.formatString);
      var tokensRegxStr = "(".concat(this.tokenRegexBase, ")+?");
      var tokensMatchAll = this.getMatchAllByRegex(formatString, tokensRegxStr);
      var tokenChunks = [];

      var _iterator = _createForOfIteratorHelper(tokensMatchAll),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tkMatch = _step.value;
          var rawToken = tkMatch[0];
          var tokenMatchItem = {
            index: tkMatch.index,
            token: rawToken,
            type: this.getTokenType(rawToken),
            needsCalibrate: rawToken.length < 2,
            len: (rawToken || '').length
          };
          tokenChunks.push(tokenMatchItem);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return tokenChunks;
    },
    needsPosCalibrate: function needsPosCalibrate() {
      if (!this.manualInput) {
        return false;
      }

      return this.tokenChunks.some(function (chk) {
        return chk.needsCalibrate;
      });
    },
    tokenChunksPos: function tokenChunksPos() {
      var _this4 = this;

      if (!this.manualInput) {
        return false;
      }

      if (!this.needsPosCalibrate) {
        return this.tokenChunks.map(function (chk) {
          return {
            token: chk.token,
            type: chk.type,
            start: chk.index,
            end: chk.index + chk.len
          };
        });
      }

      var list = [];
      var calibrateLen = 0;
      this.tokenChunks.forEach(function (chk) {
        var chunkCurrentLen; // Adjust for customized AM/PM text

        if (chk.type === 'apm' && _this4.has.customApmText) {
          if (_this4.apm && _this4.apm.length) {
            var customApmText = _this4.apm.toLowerCase() === 'am' ? _this4.amText : _this4.pmText;
            chunkCurrentLen = customApmText && customApmText.length ? customApmText.length : chk.len;
          } else {
            chunkCurrentLen = chk.len;
          } // Others

        } else {
          chunkCurrentLen = _this4[chk.type] && _this4[chk.type].length ? _this4[chk.type].length : chk.len;
        }

        list.push({
          token: chk.token,
          type: chk.type,
          start: chk.index + calibrateLen,
          end: chk.index + calibrateLen + chunkCurrentLen
        });

        if (chk.needsCalibrate && chunkCurrentLen > chk.len) {
          calibrateLen += chunkCurrentLen - chk.len;
        }
      });
      return list;
    },
    invalidValues: function invalidValues() {
      if (this.inputIsEmpty) {
        return [];
      }

      if (!this.restrictedHourRange && !this.minuteRangeList && !this.secondRangeList && this.opts.minuteInterval === 1 && this.opts.secondInterval === 1) {
        return [];
      }

      var result = [];

      if (this.inUse.hour && !this.isEmptyValue(this.hourType, this.hour) && (!this.isValidValue(this.hourType, this.hour) || this.isDisabled('hour', this.hour))) {
        result.push('hour');
      }

      if (this.inUse.minute && !this.isEmptyValue(this.minuteType, this.minute) && (!this.isValidValue(this.minuteType, this.minute) || this.isDisabled('minute', this.minute) || this.notInInterval('minute', this.minute))) {
        result.push('minute');
      }

      if (this.inUse.second && !this.isEmptyValue(this.secondType, this.second) && (!this.isValidValue(this.secondType, this.second) || this.isDisabled('second', this.second) || this.notInInterval('second', this.second))) {
        result.push('second');
      }

      if (this.inUse.apm && !this.isEmptyValue(this.apmType, this.apm) && (!this.isValidValue(this.apmType, this.apm) || this.isDisabled('apm', this.apm))) {
        result.push('apm');
      }

      if (result.length) {
        return result;
      }

      return [];
    },
    hasInvalidInput: function hasInvalidInput() {
      return Boolean(this.invalidValues && this.invalidValues.length);
    },
    autoDirectionEnabled: function autoDirectionEnabled() {
      return this.dropDirection === 'auto';
    },
    dropdownDirClass: function dropdownDirClass() {
      if (this.autoDirectionEnabled) {
        return this.forceDropOnTop ? 'drop-up' : 'drop-down';
      }

      return this.dropDirection === 'up' ? 'drop-up' : 'drop-down';
    }
  },
  watch: {
    'opts.format': function optsFormat(newValue) {
      this.renderFormat(newValue);
    },
    'opts.minuteInterval': function optsMinuteInterval(newInteval) {
      this.renderList('minute', newInteval);
    },
    'opts.secondInterval': function optsSecondInterval(newInteval) {
      this.renderList('second', newInteval);
    },
    value: {
      deep: true,
      handler: function handler() {
        this.readValues();
      }
    },
    displayTime: function displayTime() {
      this.fillValues();
    },
    disabled: function disabled(toDisabled) {
      if (toDisabled) {
        // Force close dropdown and reset status when disabled
        if (this.isActive) {
          this.isActive = false;
        }

        if (this.showDropdown) {
          this.showDropdown = false;
        }
      }
    },
    'invalidValues.length': function invalidValuesLength(newLength, oldLength) {
      if (newLength && newLength >= 1) {
        this.$emit('error', this.invalidValues);
      } else if (oldLength && oldLength >= 1) {
        this.$emit('error', []);
      }
    }
  },
  methods: {
    formatValue: function formatValue(token, i) {
      if (!this.isNumber(i)) {
        return '';
      }

      i = +i;

      switch (token) {
        case 'H':
        case 'h':
        case 'k':
        case 'm':
        case 's':
          if (['h', 'k'].includes(token) && i === 0) {
            return token === 'k' ? '24' : '12';
          }

          return String(i);

        case 'HH':
        case 'mm':
        case 'ss':
        case 'hh':
        case 'kk':
          if (['hh', 'kk'].includes(token) && i === 0) {
            return token === 'kk' ? '24' : '12';
          }

          return i < 10 ? "0".concat(i) : String(i);

        default:
          return '';
      }
    },
    checkAcceptingType: function checkAcceptingType(validValues, formatString) {
      if (!validValues || !formatString || !formatString.length) {
        return '';
      }

      for (var i = 0; i < validValues.length; i++) {
        if (formatString.indexOf(validValues[i]) > -1) {
          return validValues[i];
        }
      }

      return '';
    },
    renderFormat: function renderFormat(newFormat) {
      var _this5 = this;

      newFormat = newFormat || this.opts.format || DEFAULT_OPTIONS.format;
      var hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat);
      var minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat);
      this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
      this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat); // Failsafe checking

      if (!hourType && !minuteType && !this.secondType && !this.apmType) {
        if (this.debugMode && this.format) {
          this.debugLog("No valid tokens found in your defined \"format\" string \"".concat(this.format, "\". Fallback to the default \"HH:mm\" format."));
        }

        hourType = 'HH';
        minuteType = 'mm';
      }

      this.hourType = hourType;
      this.minuteType = minuteType;
      this.hourType ? this.renderHoursList() : this.hours = [];
      this.minuteType ? this.renderList('minute') : this.minutes = [];
      this.secondType ? this.renderList('second') : this.seconds = [];
      this.apmType ? this.renderApmList() : this.apms = [];
      this.$nextTick(function () {
        _this5.readValues();
      });
    },
    renderHoursList: function renderHoursList() {
      var hoursCount = this.baseOn12Hours ? 12 : 24;
      var hours = [];

      for (var i = 0; i < hoursCount; i++) {
        if (this.hourType === 'k' || this.hourType === 'kk') {
          hours.push(this.formatValue(this.hourType, i + 1));
        } else {
          hours.push(this.formatValue(this.hourType, i));
        }
      }

      this.hours = hours;
    },
    renderList: function renderList(listType, interval) {
      if (!this.isMinuteOrSecond(listType)) {
        return;
      }

      var isMinute = listType === 'minute';
      interval = interval || (isMinute ? this.opts.minuteInterval || DEFAULT_OPTIONS.minuteInterval : this.opts.secondInterval || DEFAULT_OPTIONS.secondInterval);
      var result = [];

      for (var i = 0; i < 60; i += interval) {
        result.push(this.formatValue(isMinute ? this.minuteType : this.secondType, i));
      }

      isMinute ? this.minutes = result : this.seconds = result;
    },
    renderApmList: function renderApmList() {
      this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
    },
    readValues: function readValues() {
      if (this.useStringValue) {
        if (this.debugMode) {
          this.debugLog("Received a string value: \"".concat(this.value, "\""));
        }

        this.readStringValues(this.value);
      } else {
        if (this.debugMode) {
          this.debugLog("Received an object value: \"".concat(JSON.stringify(this.value || {}), "\""));
        }

        this.readObjectValues(this.value);
      }
    },
    readObjectValues: function readObjectValues(objValue) {
      var _this6 = this;

      var timeValue = JSON.parse(JSON.stringify(objValue || {}));
      var values = Object.keys(timeValue); // Failsafe for empty `v-model` object

      if (values.length === 0) {
        this.addFallbackValues();
        return;
      }

      CONFIG.BASIC_TYPES.forEach(function (type) {
        var token = _this6.getTokenByType(type);

        if (values.indexOf(token) > -1) {
          var sanitizedValue = _this6.sanitizedValue(token, timeValue[token]);

          _this6[type] = sanitizedValue;
          timeValue[token] = sanitizedValue;
        } else {
          _this6[type] = '';
        }
      });
      this.timeValue = timeValue;
    },
    getMatchAllByRegex: function getMatchAllByRegex(testString, regexString) {
      var str = 'polyfillTest';
      var needsPolyfill = Boolean(!str.matchAll || typeof str.matchAll !== 'function');
      return needsPolyfill ? this.polyfillMatchAll(testString, regexString) : testString.matchAll(new RegExp(regexString, 'g'));
    },
    readStringValues: function readStringValues(stringValue) {
      var _this7 = this;

      // Failsafe for empty `v-model` string
      if (!stringValue || !stringValue.length) {
        this.addFallbackValues();
        return;
      }

      var formatString = String(this.formatString);
      var tokensRegxStr = "(".concat(this.tokenRegexBase, ")+?");
      var othersRegxStr = "[^(".concat(this.tokenRegexBase, ")]+");
      var tokensMatchAll = this.getMatchAllByRegex(formatString, tokensRegxStr);
      var othersMatchAll = this.getMatchAllByRegex(formatString, othersRegxStr);
      var chunks = [];
      var tokenChunks = [];

      var _iterator2 = _createForOfIteratorHelper(tokensMatchAll),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tkMatch = _step2.value;
          var tokenMatchItem = {
            index: tkMatch.index,
            token: tkMatch[0],
            isValueToken: true
          };
          chunks.push(tokenMatchItem);
          tokenChunks.push(tokenMatchItem);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(othersMatchAll),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var otMatch = _step3.value;
          chunks.push({
            index: otMatch.index,
            token: otMatch[0]
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      chunks.sort(function (l, r) {
        return l.index < r.index ? -1 : 1;
      });
      var regexCombo = '';
      chunks.forEach(function (chunk) {
        if (chunk.isValueToken) {
          var tokenRegex = _this7.getTokenRegex(chunk.token) || '';
          regexCombo += tokenRegex;
        } else {
          var safeChars = chunk.token.replace(/\\{0}(\*|\?|\.|\+)/g, '\\$1');
          regexCombo += "(?:".concat(safeChars, ")");
        }
      });
      var comboReg = new RegExp(regexCombo); // Do test before match

      if (comboReg.test(stringValue)) {
        var matchResults = stringValue.match(new RegExp(regexCombo));
        var valueResults = matchResults.slice(1, tokenChunks.length + 1);
        var timeValue = {};
        valueResults.forEach(function (value, vrIndex) {
          if (tokenChunks[vrIndex]) {
            var targetToken = tokenChunks[vrIndex].token;
            timeValue[targetToken] = _this7.setValueFromString(value, targetToken);
          }
        });
        this.timeValue = timeValue;

        if (this.debugMode) {
          var tokenChunksForLog = tokenChunks.map(function (tChunk) {
            return tChunk && tChunk.token;
          });
          this.debugLog("Successfully parsed values ".concat(JSON.stringify(valueResults), "\nfor ").concat(JSON.stringify(tokenChunksForLog), "\nin format pattern '").concat(this.formatString, "'"));
        }
      } else {
        if (this.debugMode) {
          this.debugLog("The input string in \"v-model\" does NOT match the \"format\" pattern\nformat: ".concat(this.formatString, "\nv-model: ").concat(stringValue));
        }
      }
    },
    polyfillMatchAll: function polyfillMatchAll(targetString, regxStr) {
      var matchesList = targetString.match(new RegExp(regxStr, 'g'));
      var result = [];
      var indicesReg = [];

      if (matchesList && matchesList.length) {
        matchesList.forEach(function (matchedItem) {
          var existIndex = indicesReg.findIndex(function (idxItem) {
            return idxItem.str === matchedItem;
          });
          var index;

          if (existIndex >= 0) {
            if (indicesReg[existIndex] && indicesReg[existIndex].regex) {
              index = indicesReg[existIndex].regex.exec(targetString).index;
            }
          } else {
            var itemIndicesRegex = new RegExp(matchedItem, 'g');
            index = itemIndicesRegex.exec(targetString).index;
            indicesReg.push({
              str: String(matchedItem),
              regex: itemIndicesRegex
            });
          }

          result.push({
            0: String(matchedItem),
            index: index
          });
        });
      }

      return result;
    },
    addFallbackValues: function addFallbackValues() {
      var _this8 = this;

      var timeValue = {};
      this.inUse.types.forEach(function (type) {
        timeValue[_this8.getTokenByType(type)] = '';
      });
      this.timeValue = timeValue;
    },
    setValueFromString: function setValueFromString(parsedValue, token) {
      if (!token || !parsedValue) {
        return '';
      }

      var tokenType = this.getTokenType(token);

      if (!tokenType || !tokenType.length) {
        return '';
      }

      var stdValue = parsedValue !== this.getTokenByType(tokenType) ? parsedValue : '';
      this[tokenType] = stdValue;
      return stdValue;
    },
    fillValues: function fillValues(forceEmit) {
      var _this9 = this;

      var fullValues = {};
      var baseHour = this.hour;
      var baseHourType = this.hourType;
      var apmValue; // Hour type or hour value is NOT set in the "format" string

      if (!baseHourType || !this.isNumber(baseHour)) {
        CONFIG.HOUR_TOKENS.forEach(function (token) {
          return fullValues[token] = '';
        });
        apmValue = this.lowerCasedApm(this.apm || '');
        fullValues.a = apmValue;
        fullValues.A = apmValue.toUpperCase(); // Both Hour type and value are set
      } else {
        var hourValue = +baseHour;

        var _apmValue = this.baseOn12Hours && this.apm ? this.lowerCasedApm(this.apm) : false;

        CONFIG.HOUR_TOKENS.forEach(function (token) {
          if (token === baseHourType) {
            fullValues[token] = baseHour;
            return;
          }

          var value;
          var apm;

          switch (token) {
            case 'H':
            case 'HH':
            case 'k':
            case 'kk':
              if (_this9.baseOn12Hours) {
                if (_apmValue === 'pm') {
                  value = hourValue < 12 ? hourValue + 12 : hourValue;
                } else if (['k', 'kk'].includes(token)) {
                  value = hourValue === 12 ? 24 : hourValue;
                } else {
                  value = hourValue % 12;
                }
              } else {
                if (['k', 'kk'].includes(token)) {
                  value = hourValue === 0 ? 24 : hourValue;
                } else {
                  value = hourValue % 24;
                }
              }

              fullValues[token] = _this9.formatValue(token, value);
              break;

            case 'h':
            case 'hh':
              // h <-> hh
              if (_this9.baseOn12Hours) {
                value = hourValue;
                apm = _apmValue || ''; // Read from other hour formats
              } else {
                if (hourValue > 11 && hourValue < 24) {
                  apm = 'pm';
                  value = hourValue === 12 ? 12 : hourValue % 12;
                } else {
                  apm = 'am';
                  value = hourValue % 12 === 0 ? 12 : hourValue;
                }
              }

              fullValues[token] = _this9.formatValue(token, value);
              fullValues.a = apm;
              fullValues.A = apm.toUpperCase();
              break;
          }
        });
      }

      fullValues.m = this.formatValue('m', this.minute);
      fullValues.mm = this.formatValue('mm', this.minute);
      fullValues.s = this.formatValue('s', this.second);
      fullValues.ss = this.formatValue('ss', this.second);
      this.fullValues = fullValues; // On lazy mode, emit `input` and `change` events only when:
      // - The user pick a new value and then close the dropdown
      // - The user click the ("x") clear button

      if (!this.lazy || forceEmit) {
        this.emitTimeValue();
      }

      if (this.closeOnComplete && this.allValueSelected && this.showDropdown) {
        this.toggleActive();
      }
    },
    getFullData: function getFullData() {
      if (!this.fullValues) {
        this.fillValues();
      }

      return {
        data: JSON.parse(JSON.stringify(this.fullValues)),
        displayTime: this.inputIsEmpty ? '' : String(this.displayTime)
      };
    },
    emitTimeValue: function emitTimeValue() {
      if (this.lazy && this.bakDisplayTime === this.displayTime) {
        if (this.debugMode) {
          this.debugLog('The value does not change on `lazy` mode. Skip the emitting `input` and `change` event.');
        }

        return;
      }

      var fullData = this.getFullData();

      if (this.useStringValue) {
        this.$emit('input', fullData.displayTime);
      } else {
        var fullValues = fullData.data;
        var tokensInUse = this.inUse.tokens || [];
        var timeValue = {};
        tokensInUse.forEach(function (token) {
          timeValue[token] = fullValues[token] || '';
        });
        this.$emit('input', JSON.parse(JSON.stringify(timeValue)));
      }

      this.$emit('change', fullData);
    },
    translate12hRange: function translate12hRange(value) {
      var valueT = this.match12hRange(value);

      if (+valueT[1] === 12) {
        return +valueT[1] + (valueT[2].toLowerCase() === 'p' ? 0 : 12);
      }

      return +valueT[1] + (valueT[2].toLowerCase() === 'p' ? 12 : 0);
    },
    isDisabled: function isDisabled(type, value) {
      if (!this.isBasicType(type) || !this.inUse[type]) {
        return true;
      }

      switch (type) {
        case 'hour':
          return this.isDisabledHour(value);

        case 'minute':
        case 'second':
          if (!this["".concat(type, "RangeList")]) {
            return false;
          }

          return !this["".concat(type, "RangeList")].includes(value);

        case 'apm':
          if (!this.restrictedHourRange) {
            return false;
          }

          return !this.has[this.lowerCasedApm(value)];

        default:
          return true;
      }
    },
    isDisabledHour: function isDisabledHour(value) {
      if (!this.restrictedHourRange) {
        return false;
      }

      if (this.baseOn12Hours) {
        if (!this.apm || !this.apm.length) {
          return false;
        } else {
          var token = this.apm.toLowerCase() === 'am' ? 'a' : 'p';
          return !this.restrictedHourRange.includes("".concat(+value).concat(token));
        }
      } // Fallback for 'HH' and 'H hour format with a `hour-range` in a 12-hour form


      if ((this.hourType === 'HH' || this.hourType === 'H') && +value === 0 && this.restrictedHourRange.includes(24)) {
        return false;
      }

      return !this.restrictedHourRange.includes(+value);
    },
    notInInterval: function notInInterval(section, value) {
      if (!section || !this.isMinuteOrSecond(section)) {
        return;
      }

      if (this.opts["".concat(section, "Interval")] === 1) {
        return false;
      }

      return +value % this.opts["".concat(section, "Interval")] !== 0;
    },
    renderRangeList: function renderRangeList(rawRange, section) {
      var _this10 = this;

      if (!rawRange || !section || !this.isMinuteOrSecond(section)) {
        return [];
      }

      var range = [];
      var formatedValue;
      rawRange.forEach(function (value) {
        if (value instanceof Array) {
          if (value.length > 2 && _this10.debugMode) {
            _this10.debugLog("Nested array within \"".concat(section, "-range\" must contain no more than two items. Only the first two items of ").concat(JSON.stringify(value), " will be taken into account."));
          }

          var start = value[0];
          var end = value[1] || value[0];

          for (var i = +start; i <= +end; i++) {
            if (i < 0 || i > 59) {
              continue;
            }

            formatedValue = _this10.formatValue(_this10.getTokenByType(section), i);

            if (!range.includes(formatedValue)) {
              range.push(formatedValue);
            }
          }
        } else {
          if (+value < 0 || +value > 59) {
            return;
          }

          formatedValue = _this10.formatValue(_this10.getTokenByType(section), value);

          if (!range.includes(formatedValue)) {
            range.push(formatedValue);
          }
        }
      });
      range.sort(function (l, r) {
        return l - r;
      }); // Debug Mode

      if (this.debugMode) {
        var fullList = (section === 'minute' ? this.minutes : this.seconds) || [];
        var validItems = fullList.filter(function (item) {
          return range.includes(item);
        });

        if (!validItems || !validItems.length) {
          if (section === 'minute') {
            this.debugLog("The minute list is empty due to the \"minute-range\" config\nminute-range: ".concat(JSON.stringify(this.minuteRange), "\nminute-interval: ").concat(this.opts.minuteInterval));
          } else {
            this.debugLog("The second list is empty due to the \"second-range\" config\nsecond-range: ".concat(JSON.stringify(this.secondRange), "\nsecond-interval: ").concat(this.opts.secondInterval));
          }
        }
      }

      return range;
    },
    forceApmSelection: function forceApmSelection() {
      if (this.manualInput) {
        // Skip this to allow users to paste a string value from the clipboard in Manual Input mode
        return;
      }

      if (this.apmType && !this.apm) {
        if (this.has.am || this.has.pm) {
          this.doClearApmChecking = true;
          var apmValue = this.has.am ? 'am' : 'pm';
          this.apm = this.apmType === 'A' ? apmValue.toUpperCase() : apmValue;
        }
      }
    },
    emptyApmSelection: function emptyApmSelection() {
      if (this.doClearApmChecking && this.hour === '' && this.minute === '' && this.second === '') {
        this.apm = '';
      }

      this.doClearApmChecking = false;
    },
    apmDisplayText: function apmDisplayText(apmValue) {
      if (this.amText && this.lowerCasedApm(apmValue) === 'am') {
        return this.amText;
      }

      if (this.pmText && this.lowerCasedApm(apmValue) === 'pm') {
        return this.pmText;
      }

      return apmValue;
    },
    toggleActive: function toggleActive() {
      var _this11 = this;

      if (this.disabled) {
        return;
      }

      this.isActive = !this.isActive;

      if (this.isActive) {
        this.isFocusing = true;

        if (this.manualInput) {
          this.$emit('focus');
        }

        if (!this.opts.hideDropdown) {
          this.setDropdownState(true);
        } // Record to check if value did change in the later phase


        if (this.lazy) {
          this.bakDisplayTime = String(this.displayTime || '');
        }

        if (this.manualInput && !this.inputIsEmpty) {
          this.$nextTick(function () {
            if (_this11.$refs.input && _this11.$refs.input.selectionStart === 0 && _this11.$refs.input.selectionEnd === _this11.displayTime.length) {
              // Select the first slot instead of the whole value string when tabbed in
              _this11.selectFirstSlot();
            }
          });
        }
      } else {
        if (this.showDropdown) {
          this.setDropdownState(false);
        } else if (this.manualInput) {
          this.$emit('blur', this.getFullData());
        }

        this.isFocusing = false;

        if (this.lazy) {
          this.fillValues(true);
          this.bakDisplayTime = undefined;
        }
      }

      if (this.restrictedHourRange && this.baseOn12Hours) {
        this.showDropdown ? this.forceApmSelection() : this.emptyApmSelection();
      }

      if (this.showDropdown) {
        this.checkForAutoScroll();
      }
    },
    setDropdownState: function setDropdownState(toShow) {
      var fromUserClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (toShow) {
        if (this.appendToBody) {
          this.appendDropdownToBody();
        }

        this.keepFocusing();

        if (this.autoDirectionEnabled) {
          this.checkDropDirection();
        }

        this.showDropdown = true;
        this.$emit('open');

        if (fromUserClick) {
          if (this.fixedDropdownButton) {
            this.isActive = true;
          }

          this.$emit('blur', this.getFullData());
          this.checkForAutoScroll();
        }
      } else {
        this.showDropdown = false;
        this.$emit('close', this.getFullData());

        if (this.appendToBody) {
          this.removeDropdownFromBody();
        }
      }
    },
    appendDropdownToBody: function appendDropdownToBody() {
      var dropdown = this.$refs && this.$refs.dropdown;
      var body = document.getElementsByTagName('body')[0];

      if (body && dropdown) {
        window.addEventListener('scroll', this.updateDropdownPos);
        dropdown.classList.add('vue__time-picker-dropdown');
        this.updateDropdownPos();
        body.appendChild(dropdown);
      }
    },
    updateDropdownPos: function updateDropdownPos() {
      if (!this.appendToBody) {
        return;
      }

      var dropdown = this.$refs && this.$refs.dropdown;
      var body = document.getElementsByTagName('body')[0];

      if (body && dropdown) {
        var box = this.$el.getBoundingClientRect();

        if (this.dropdownDirClass === 'drop-up') {
          dropdown.style.bottom = "".concat(window.innerHeight - box.y, "px");
          dropdown.style.top = 'auto';
        } else {
          dropdown.style.top = "".concat(box.y + box.height, "px");
          dropdown.style.bottom = 'auto';
        }

        dropdown.style.left = "".concat(box.x, "px");
      }
    },
    removeDropdownFromBody: function removeDropdownFromBody() {
      var dropdown = this.$refs && this.$refs.dropdown;
      var body = document.getElementsByTagName('body')[0];

      if (body && dropdown && body.contains(dropdown)) {
        body.removeChild(dropdown);
      }

      if (dropdown) {
        dropdown.classList.remove('vue__time-picker-dropdown');
        dropdown.style.top = '';
        dropdown.style.bottom = '';
        dropdown.style.left = '';
        this.$el.appendChild(dropdown);
      }

      window.removeEventListener('scroll', this.updateDropdownPos);
    },
    blurEvent: function blurEvent() {
      if (this.manualInput && !this.opts.hideDropdown) {
        // hideDropdown's `blur` event is handled somewhere else
        this.$emit('blur', this.getFullData());
      }
    },
    select: function select(type, value) {
      if (this.isBasicType(type) && !this.isDisabled(type, value)) {
        this[type] = value;

        if (this.doClearApmChecking) {
          this.doClearApmChecking = false;
        }
      }
    },
    clearTime: function clearTime() {
      if (this.disabled) {
        return;
      }

      this.hour = '';
      this.minute = '';
      this.second = '';
      this.apm = '';

      if (this.manualInput && this.$refs && this.$refs.input && this.$refs.input.value.length) {
        this.$refs.input.value = '';
      }

      if (this.lazy) {
        this.fillValues(true);
      }
    },
    //
    // Auto-Scroll
    //
    checkForAutoScroll: function checkForAutoScroll() {
      var _this12 = this;

      if (this.inputIsEmpty) {
        return;
      }

      if (this.autoScroll) {
        this.$nextTick(function () {
          _this12.scrollToSelectedValues();
        });
      } else if (this.advancedKeyboard) {
        // Auto-focus on selected value in the first column for advanced-keyboard
        this.$nextTick(function () {
          var firstColumn = _this12.inUse.types[0];

          _this12.scrollToSelected(firstColumn, true);
        });
      }
    },
    scrollToSelected: function scrollToSelected(column) {
      var allowFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.timeValue || this.inputIsEmpty) {
        return;
      }

      var targetList;

      if (this.appendToBody && this.$refs && this.$refs.dropdown) {
        targetList = this.$refs.dropdown.querySelectorAll("ul.".concat(column, "s"))[0];
      } else {
        targetList = this.$el.querySelectorAll("ul.".concat(column, "s"))[0];
      }

      var targetValue = this.activeItemInCol(column)[0];

      if (!targetValue && allowFallback) {
        // No value selected in the target column, fallback to the first found valid item
        targetValue = this.validItemsInCol(column)[0];
      }

      if (targetList && targetValue) {
        targetList.scrollTop = targetValue.offsetTop || 0;

        if (this.advancedKeyboard) {
          targetValue.focus();
        }
      }
    },
    scrollToSelectedValues: function scrollToSelectedValues() {
      var _this13 = this;

      if (!this.timeValue || this.inputIsEmpty) {
        return;
      }

      this.inUse.types.forEach(function (section) {
        _this13.scrollToSelected(section);
      });
    },
    //
    // Additional Keyboard Navigation
    //
    onFocus: function onFocus() {
      if (this.disabled) {
        return;
      }

      if (!this.isFocusing) {
        this.isFocusing = true;
      }

      if (!this.isActive) {
        this.toggleActive();
      }
    },
    escBlur: function escBlur() {
      if (this.disabled) {
        return;
      }

      window.clearTimeout(this.debounceTimer);
      this.isFocusing = false;
      var inputBox = this.$el.querySelectorAll('input.display-time')[0];

      if (inputBox) {
        inputBox.blur();
      }
    },
    debounceBlur: function debounceBlur() {
      var _this14 = this;

      if (this.disabled) {
        return;
      }

      this.isFocusing = false;
      window.clearTimeout(this.debounceTimer);
      this.debounceTimer = window.setTimeout(function () {
        window.clearTimeout(_this14.debounceTimer);

        _this14.onBlur();
      }, this.opts.blurDelay);
    },
    onBlur: function onBlur() {
      if (!this.disabled && !this.isFocusing && this.isActive) {
        this.toggleActive();
      }
    },
    keepFocusing: function keepFocusing() {
      if (this.disabled) {
        return;
      }

      window.clearTimeout(this.debounceTimer);

      if (!this.isFocusing) {
        this.isFocusing = true;
      }
    },
    onTab: function onTab(column, value, evt) {
      if (this.appendToBody && evt.shiftKey) {
        var firstColumn = this.inUse.types[0];

        if (column !== firstColumn) {
          return;
        }

        var firstValidValue = this.validItemsInCol(firstColumn)[0]; // Is the first valid item in the first column

        if (firstValidValue && firstValidValue.getAttribute('data-key') === String(value)) {
          evt.preventDefault(); // Focus back on <input>

          if (this.$refs && this.$refs.input) {
            this.$refs.input.focus();
          }
        }
      }
    },
    validItemsInCol: function validItemsInCol(column) {
      var columnClass = "".concat(column, "s");

      if (this.appendToBody && this.$refs && this.$refs.dropdown) {
        return this.$refs.dropdown.querySelectorAll("ul.".concat(columnClass, " > li:not(.hint):not([disabled])"));
      }

      return this.$el.querySelectorAll("ul.".concat(columnClass, " > li:not(.hint):not([disabled])"));
    },
    activeItemInCol: function activeItemInCol(column) {
      var columnClass = "".concat(column, "s");

      if (this.appendToBody && this.$refs && this.$refs.dropdown) {
        return this.$refs.dropdown.querySelectorAll("ul.".concat(columnClass, " > li.active:not(.hint)"));
      }

      return this.$el.querySelectorAll("ul.".concat(columnClass, " > li.active:not(.hint)"));
    },
    getClosestSibling: function getClosestSibling(column, dataKey) {
      var getPrevious = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var siblingsInCol = this.validItemsInCol(column);
      var selfIndex = Array.prototype.findIndex.call(siblingsInCol, function (sbl) {
        return sbl.getAttribute('data-key') === dataKey;
      }); // Already the first item

      if (getPrevious && selfIndex === 0) {
        return siblingsInCol[siblingsInCol.length - 1];
      } // Already the last item


      if (!getPrevious && selfIndex === siblingsInCol.length - 1) {
        return siblingsInCol[0];
      } // Selected value not in the valid values list


      if (selfIndex < 0) {
        return siblingsInCol[0];
      }

      if (getPrevious) {
        return siblingsInCol[selfIndex - 1];
      }

      return siblingsInCol[selfIndex + 1];
    },
    prevItem: function prevItem(column, dataKey) {
      var isManualInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var targetItem = this.getClosestSibling(column, dataKey, true);

      if (targetItem) {
        return isManualInput ? targetItem : targetItem.focus();
      }
    },
    nextItem: function nextItem(column, dataKey) {
      var isManualInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var targetItem = this.getClosestSibling(column, dataKey, false);

      if (targetItem) {
        return isManualInput ? targetItem : targetItem.focus();
      }
    },
    getSideColumnName: function getSideColumnName(currentColumn) {
      var toLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var currentColumnIndex = this.inUse.types.indexOf(currentColumn);

      if (toLeft && currentColumnIndex <= 0) {
        if (this.debugMode) {
          this.debugLog('You\'re in the leftmost list already');
        }

        return;
      } else if (!toLeft && currentColumnIndex === this.inUse.types.length - 1) {
        if (this.debugMode) {
          this.debugLog('You\'re in the rightmost list already');
        }

        return;
      }

      return this.inUse.types[toLeft ? currentColumnIndex - 1 : currentColumnIndex + 1];
    },
    getFirstItemInSideColumn: function getFirstItemInSideColumn(currentColumn) {
      var toLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var targetColumn = this.getSideColumnName(currentColumn, toLeft);

      if (!targetColumn) {
        return;
      }

      var listItems = this.validItemsInCol(targetColumn);

      if (listItems && listItems[0]) {
        return listItems[0];
      }
    },
    getActiveItemInSideColumn: function getActiveItemInSideColumn(currentColumn) {
      var toLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var targetColumn = this.getSideColumnName(currentColumn, toLeft);

      if (!targetColumn) {
        return;
      }

      var activeItems = this.activeItemInCol(targetColumn);

      if (activeItems && activeItems[0]) {
        return activeItems[0];
      }
    },
    toLeftColumn: function toLeftColumn(currentColumn) {
      var targetItem = this.getActiveItemInSideColumn(currentColumn, true) || this.getFirstItemInSideColumn(currentColumn, true);

      if (targetItem) {
        targetItem.focus();
      }
    },
    toRightColumn: function toRightColumn(currentColumn) {
      var targetItem = this.getActiveItemInSideColumn(currentColumn, false) || this.getFirstItemInSideColumn(currentColumn, false);

      if (targetItem) {
        targetItem.focus();
      }
    },
    //
    // Manual Input
    //
    onMouseDown: function onMouseDown() {
      var _this15 = this;

      if (!this.manualInput) {
        return;
      }

      window.clearTimeout(this.selectionTimer);
      this.selectionTimer = window.setTimeout(function () {
        window.clearTimeout(_this15.selectionTimer);

        if (_this15.$refs && _this15.$refs.input) {
          var nearestSlot = _this15.getNearestChunkByPos(_this15.$refs.input.selectionStart || 0);

          _this15.debounceSetInputSelection(nearestSlot);
        }
      }, 50);
    },
    keyDownHandler: function keyDownHandler(evt) {
      if (evt.isComposing || evt.keyCode === 229) {
        // Skip IME inputs
        evt.preventDefault();
        evt.stopPropagation();
        return false;
      } // Numbers


      if (evt.keyCode >= 48 && evt.keyCode <= 57 || evt.keyCode >= 96 && evt.keyCode <= 105) {
        evt.preventDefault();
        this.keyboardInput(evt.key); // A|P|M
      } else if ([65, 80, 77].includes(evt.keyCode)) {
        evt.preventDefault();
        this.keyboardInput(evt.key, true); // Arrow keys
      } else if (evt.keyCode >= 37 && evt.keyCode <= 40) {
        evt.preventDefault();
        this.clearKbInputLog();
        this.arrowHandler(evt); // Delete|Backspace
      } else if (evt.keyCode === 8 || evt.keyCode === 46) {
        evt.preventDefault();
        this.clearKbInputLog();
        this.clearTime(); // Tab
      } else if (evt.keyCode === 9) {
        this.clearKbInputLog();
        this.tabHandler(evt); // Colon|Space
      } else if (evt.keyCode === 186 || evt.keyCode === 32) {
        evt.preventDefault();
        this.clearKbInputLog();
        this.toNextSlot(); // Prevent any Non-ESC and non-pasting inputs
      } else if (evt.keyCode !== 27 && !(evt.metaKey || evt.ctrlKey)) {
        evt.preventDefault();
      }
    },
    onCompostionStart: function onCompostionStart(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.bakCurrentPos = this.getCurrentTokenChunk();
      return false;
    },
    onCompostionEnd: function onCompostionEnd(evt) {
      var _this16 = this;

      evt.preventDefault();
      evt.stopPropagation();
      var cpsData = evt.data;
      var inputIsCustomApmText = false;

      if (this.has.customApmText) {
        inputIsCustomApmText = this.isCustomApmText(cpsData);
      }

      if (inputIsCustomApmText) {
        this.setSanitizedValueToSection('apm', inputIsCustomApmText);
      }

      this.$refs.input.value = this.has.customApmText ? this.customDisplayTime : this.displayTime;
      this.$nextTick(function () {
        if (_this16.bakCurrentPos) {
          var bakPos = JSON.parse(JSON.stringify(_this16.bakCurrentPos));

          if (inputIsCustomApmText) {
            bakPos.end = bakPos.start + cpsData.length;
          }

          _this16.debounceSetInputSelection(bakPos);

          _this16.bakCurrentPos = null;
        }
      });
      return false;
    },
    pasteHandler: function pasteHandler(evt) {
      evt.preventDefault();
      var pastingText = (evt.clipboardData || window.clipboardData).getData('text');

      if (this.debugMode) {
        this.debugLog("Pasting value \"".concat(pastingText, "\" from clipboard"));
      }

      if (!pastingText || !pastingText.length) {
        return;
      } // Replace custom AM/PM text (if any)


      if (this.has.customApmText) {
        pastingText = this.replaceCustomApmText(pastingText);
      }

      if (this.inputIsEmpty) {
        this.readStringValues(pastingText);
      } else {
        this.kbInputLog = pastingText.substr(-2, 2);
        this.setKbInput();
        this.debounceClearKbLog();
      }
    },
    arrowHandler: function arrowHandler(evt) {
      var direction = {
        37: 'L',
        38: 'U',
        39: 'R',
        40: 'D'
      }[evt.keyCode];

      if (direction === 'U' || direction === 'D') {
        if (this.inputIsEmpty) {
          this.selectFirstValidValue();
        } else {
          var currentChunk = this.getCurrentTokenChunk();

          if (!currentChunk) {
            this.selectFirstValidValue();
            return;
          }

          var tokenType = currentChunk.type;
          this.getClosestValidItemInCol(tokenType, this[tokenType], direction);
          var newChunkPos = this.getCurrentTokenChunk();
          this.debounceSetInputSelection(newChunkPos);
        }
      } else if (direction === 'R') {
        this.toLateralToken(false);
      } else if (direction === 'L') {
        this.toLateralToken(true);
      }
    },
    tabHandler: function tabHandler(evt) {
      if (!this.inputIsEmpty && this.tokenChunksPos && this.tokenChunksPos.length) {
        var currentChunk = this.getCurrentTokenChunk();

        if (!currentChunk) {
          return;
        }

        var firstChunk = this.tokenChunksPos[0];
        var lastChunk = this.tokenChunksPos[this.tokenChunksPos.length - 1];

        if (evt.shiftKey && currentChunk.token !== firstChunk.token || !evt.shiftKey && currentChunk.token !== lastChunk.token) {
          evt.preventDefault();
          this.toLateralToken(evt.shiftKey);
        }
      } else if (this.appendToBody && this.advancedKeyboard) {
        if (evt.shiftKey) {
          return;
        }

        evt.preventDefault();

        if (this.inputIsEmpty) {
          var firstColumn = this.inUse.types[0];
          var targetValue = this.validItemsInCol(firstColumn)[0];

          if (targetValue) {
            targetValue.focus();
          }
        }
      }
    },
    keyboardInput: function keyboardInput(newChar) {
      var isApm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var currentChunk = this.getCurrentTokenChunk();

      if (!currentChunk || currentChunk.type !== 'apm' && isApm || currentChunk.type === 'apm' && !isApm) {
        return;
      }

      this.kbInputLog = "".concat(this.kbInputLog.substr(-1)).concat(newChar);
      this.setKbInput();
      this.debounceClearKbLog();
    },
    clearKbInputLog: function clearKbInputLog() {
      window.clearTimeout(this.kbInputTimer);
      this.kbInputLog = '';
    },
    debounceClearKbLog: function debounceClearKbLog() {
      var _this17 = this;

      window.clearTimeout(this.kbInputTimer);
      this.kbInputTimer = window.setTimeout(function () {
        _this17.clearKbInputLog();
      }, this.opts.manualInputTimeout);
    },
    setKbInput: function setKbInput(value) {
      value = value || this.kbInputLog;
      var currentChunk = this.getCurrentTokenChunk();

      if (!currentChunk || !value || !value.length) {
        return;
      }

      var chunkType = currentChunk.type;
      var chunkToken = currentChunk.token;
      var validValue;

      if (chunkType === 'apm') {
        if (this.lowerCasedApm(value).includes('a')) {
          validValue = 'am';
        } else if (this.lowerCasedApm(value).includes('p')) {
          validValue = 'pm';
        }

        if (validValue) {
          validValue = chunkToken === 'A' ? validValue.toUpperCase() : validValue;
        }
      } else {
        if (this.isValidValue(chunkToken, value)) {
          validValue = value;
        } else {
          var lastInputValue = this.formatValue(chunkToken, value.substr(-1));

          if (this.isValidValue(chunkToken, lastInputValue)) {
            validValue = lastInputValue;
          }
        }
      }

      if (validValue) {
        this.setSanitizedValueToSection(chunkType, validValue);
        var newChunkPos = this.getCurrentTokenChunk();
        this.debounceSetInputSelection(newChunkPos);
      }

      if (this.debugMode) {
        if (validValue) {
          this.debugLog("Successfully set value \"".concat(validValue, "\" from latest input \"").concat(value, "\" for the \"").concat(chunkType, "\" slot"));
        } else {
          this.debugLog("Value \"".concat(value, "\" is invalid in the \"").concat(chunkType, "\" slot"));
        }
      }
    },
    // Form Autofill
    onChange: function onChange() {
      if (!this.manualInput || !this.$refs || !this.$refs.input) {
        return;
      }

      var autoFillValue = this.$refs.input.value || '';

      if (autoFillValue && autoFillValue.length) {
        this.readStringValues(autoFillValue);
      }
    },
    getNearestChunkByPos: function getNearestChunkByPos(startPos) {
      if (!this.tokenChunksPos || !this.tokenChunksPos.length) {
        return;
      }

      var nearest;
      var nearestDelta = -1;

      for (var i = 0; i < this.tokenChunksPos.length; i++) {
        var chunk = JSON.parse(JSON.stringify(this.tokenChunksPos[i]));

        if (chunk.start === startPos) {
          return chunk;
        }

        var delta = Math.abs(chunk.start - startPos);

        if (nearestDelta < 0) {
          nearest = chunk;
          nearestDelta = delta;
        } else {
          if (nearestDelta <= delta) {
            return nearest;
          }

          nearestDelta = delta;
          nearest = chunk;
        }
      }

      return nearest;
    },
    selectFirstValidValue: function selectFirstValidValue() {
      if (!this.tokenChunksPos || !this.tokenChunksPos.length) {
        return;
      }

      var firstSlotType = this.tokenChunksPos[0].type;

      if (firstSlotType === 'hour') {
        this.getClosestHourItem();
      } else {
        this.getClosestValidItemInCol(firstSlotType, this[firstSlotType]);
      }

      this.selectFirstSlot();
    },
    getClosestHourItem: function getClosestHourItem(currentValue) {
      var _this18 = this;

      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'U';

      if (!this.validHoursList || !this.validHoursList.length) {
        if (this.debugMode) {
          this.debugLog("No valid hour values found, please check your \"hour-range\" config\nhour-range: ".concat(JSON.stringify(this.hourRange)));
        }

        return;
      }

      if (!currentValue) {
        this.setManualHour(this.validHoursList[0]);
        return;
      }

      var currentIndex = this.validHoursList.findIndex(function (item) {
        if (!_this18.baseOn12Hours) {
          return item === currentValue;
        } else {
          var valueKey = "".concat(currentValue).concat(_this18.lowerCasedApm(_this18.apm) === 'pm' ? 'p' : 'a');
          return item === valueKey;
        }
      });
      var nextIndex;

      if (currentIndex === -1) {
        nextIndex = 0;
      } else if (direction === 'D') {
        nextIndex = currentIndex === 0 ? this.validHoursList.length - 1 : currentIndex - 1;
      } else {
        nextIndex = (currentIndex + 1) % this.validHoursList.length;
      }

      var nextItem = this.validHoursList[nextIndex];
      this.setManualHour(nextItem);
    },
    getClosestValidItemInCol: function getClosestValidItemInCol(column, currentValue) {
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'U';

      if (column === 'hour') {
        this.getClosestHourItem(currentValue, direction);
      } else {
        var nextItem = direction === 'D' ? this.prevItem(column, this[column], true) : this.nextItem(column, this[column], true);

        if (nextItem) {
          this.select(column, nextItem.getAttribute('data-key'));
        }
      }
    },
    setSanitizedValueToSection: function setSanitizedValueToSection(section, inputValue) {
      if (!section || !this.getTokenByType(section)) {
        return;
      } // NOTE: Disabled values are allowed here, followed by an 'error' event, though


      var sanitizedValue = this.sanitizedValue(this.getTokenByType(section), inputValue);
      this[section] = sanitizedValue;
    },
    setManualHour: function setManualHour(nextItem) {
      if (this.is12hRange(nextItem)) {
        var hourT = this.match12hRange(nextItem);
        var apmValue = hourT[2] === 'a' ? 'AM' : 'PM';
        this.setSanitizedValueToSection('apm', this.apmType === 'a' ? apmValue.toLowerCase() : apmValue);
        this.setSanitizedValueToSection('hour', hourT[1]);
      } else {
        this.setSanitizedValueToSection('hour', nextItem);
      }
    },
    debounceSetInputSelection: function debounceSetInputSelection(_ref) {
      var _this19 = this;

      var _ref$start = _ref.start,
          start = _ref$start === void 0 ? 0 : _ref$start,
          _ref$end = _ref.end,
          end = _ref$end === void 0 ? 0 : _ref$end;
      this.$nextTick(function () {
        _this19.setInputSelectionRange(start, end);
      });
      window.clearTimeout(this.selectionTimer);
      this.selectionTimer = window.setTimeout(function () {
        window.clearTimeout(_this19.selectionTimer); // Double-check selection for 12hr format

        if (_this19.$refs.input && (_this19.$refs.input.selectionStart !== start || _this19.$refs.input.selectionEnd !== end)) {
          _this19.setInputSelectionRange(start, end);
        }
      }, 30);
    },
    setInputSelectionRange: function setInputSelectionRange(start, end) {
      if (this.$refs && this.$refs.input) {
        this.$refs.input.setSelectionRange(start, end);
      }
    },
    getCurrentTokenChunk: function getCurrentTokenChunk() {
      return this.getNearestChunkByPos(this.$refs.input && this.$refs.input.selectionStart || 0);
    },
    selectFirstSlot: function selectFirstSlot() {
      var firstChunkPos = this.getNearestChunkByPos(0);
      this.debounceSetInputSelection(firstChunkPos);
    },
    toNextSlot: function toNextSlot() {
      if (!this.inputIsEmpty && this.tokenChunksPos && this.tokenChunksPos.length) {
        var currentChunk = this.getCurrentTokenChunk();

        if (!currentChunk) {
          return;
        }

        var lastChunk = this.tokenChunksPos[this.tokenChunksPos.length - 1];

        if (currentChunk.token !== lastChunk.token) {
          this.toLateralToken(false);
        }
      }
    },
    toLateralToken: function toLateralToken(toLeft) {
      var currentChunk = this.getCurrentTokenChunk();

      if (!currentChunk) {
        this.selectFirstValidValue();
        return;
      }

      var currentChunkIndex = this.tokenChunksPos.findIndex(function (chk) {
        return chk.token === currentChunk.token;
      });

      if (!toLeft && currentChunkIndex >= this.tokenChunksPos.length - 1 || toLeft && currentChunkIndex === 0) {
        if (this.debugMode) {
          if (toLeft) {
            this.debugLog('You\'re in the leftmost slot already');
          } else {
            this.debugLog('You\'re in the rightmost slot already');
          }
        }

        return;
      }

      var targetSlotPos = toLeft ? this.tokenChunksPos[currentChunkIndex - 1] : this.tokenChunksPos[currentChunkIndex + 1];
      this.debounceSetInputSelection(targetSlotPos);
    },
    isCustomApmText: function isCustomApmText(inputData) {
      if (!inputData || !inputData.length) {
        return false;
      }

      if (this.amText && this.amText === inputData) {
        return this.apmType === 'A' ? 'AM' : 'am';
      }

      if (this.pmText && this.pmText === inputData) {
        return this.apmType === 'A' ? 'PM' : 'pm';
      }

      return false;
    },
    replaceCustomApmText: function replaceCustomApmText(inputString) {
      if (this.amText && this.amText.length && inputString.includes(this.amText)) {
        return inputString.replace(new RegExp(this.amText, 'g'), this.apmType === 'A' ? 'AM' : 'am');
      } else if (this.pmText && this.pmText.length && inputString.includes(this.pmText)) {
        return inputString.replace(new RegExp(this.pmText, 'g'), this.apmType === 'A' ? 'PM' : 'pm');
      }

      return inputString;
    },
    checkDropDirection: function checkDropDirection() {
      if (!this.$el) {
        return;
      }

      var container;

      if (this.containerId && this.containerId.length) {
        container = document.getElementById(this.containerId);

        if (!container && this.debugMode) {
          this.debugLog("Container with id \"".concat(this.containerId, "\" not found. Fallback to document body."));
        }
      }

      var el = this.$el;
      var spaceDown;

      if (container && container.offsetHeight) {
        // Valid container found
        spaceDown = container.offsetTop + container.offsetHeight - (el.offsetTop + el.offsetHeight);
      } else {
        // Fallback to document body
        var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        spaceDown = docHeight - (el.offsetTop + el.offsetHeight);
      }

      this.forceDropOnTop = this.opts.dropOffsetHeight > spaceDown;
    },
    //
    // Helpers
    //
    is12hRange: function is12hRange(value) {
      return /^\d{1,2}(a|p|A|P)$/.test(value);
    },
    match12hRange: function match12hRange(value) {
      return value.match(/^(\d{1,2})(a|p|A|P)$/);
    },
    isNumber: function isNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    },
    isBasicType: function isBasicType(type) {
      return CONFIG.BASIC_TYPES.includes(type);
    },
    lowerCasedApm: function lowerCasedApm(apmValue) {
      return (apmValue || '').toLowerCase();
    },
    getTokenRegex: function getTokenRegex(token) {
      switch (token) {
        case 'HH':
          return '([01][0-9]|2[0-3]|H{2})';

        case 'H':
          return '([0-9]{1}|1[0-9]|2[0-3]|H{1})';

        case 'hh':
          return '(0[1-9]|1[0-2]|h{2})';

        case 'h':
          return '([1-9]{1}|1[0-2]|h{1})';

        case 'kk':
          return '(0[1-9]|1[0-9]|2[0-4]|k{2})';

        case 'k':
          return '([1-9]{1}|1[0-9]|2[0-4]|k{1})';

        case 'mm':
          return '([0-5][0-9]|m{2})';

        case 'ss':
          return '([0-5][0-9]|s{2})';

        case 'm':
          return '([0-9]{1}|[1-5][0-9]|m{1})';

        case 's':
          return '([0-9]{1}|[1-5][0-9]|s{1})';

        case 'A':
          return '(AM|PM|A{1})';

        case 'a':
          return '(am|pm|a{1})';

        default:
          return '';
      }
    },
    isEmptyValue: function isEmptyValue(targetToken, testValue) {
      return !testValue || !testValue.length || testValue && testValue === targetToken;
    },
    isValidValue: function isValidValue(targetToken, testValue) {
      if (!targetToken || this.isEmptyValue(targetToken, testValue)) {
        return false;
      }

      var tokenRegexStr = this.getTokenRegex(targetToken);

      if (!tokenRegexStr || !tokenRegexStr.length) {
        return false;
      }

      return new RegExp("^".concat(tokenRegexStr, "$")).test(testValue);
    },
    sanitizedValue: function sanitizedValue(targetToken, inputValue) {
      if (this.isValidValue(targetToken, inputValue)) {
        return inputValue;
      }

      return '';
    },
    getTokenType: function getTokenType(token) {
      return this.inUse.types[this.inUse.tokens.indexOf(token)] || '';
    },
    getTokenByType: function getTokenByType(type) {
      return this["".concat(type, "Type")] || '';
    },
    isMinuteOrSecond: function isMinuteOrSecond(type) {
      return ['minute', 'second'].includes(type);
    },
    debugLog: function debugLog(logText) {
      var _this20 = this;

      if (!logText || !logText.length) {
        return;
      }

      var identifier = '';

      if (this.id) {
        identifier += "#".concat(this.id);
      }

      if (this.name) {
        identifier += "[name=".concat(this.name, "]");
      }

      if (this.inputClass) {
        var inputClasses = [];

        if (typeof this.inputClass === 'string') {
          inputClasses = this.inputClass.split(/\s/g);
        } else if (Array.isArray(this.inputClass)) {
          inputClasses = [].concat([], this.inputClass);
        } else if (_typeof(this.inputClass) === 'object') {
          Object.keys(this.inputClass).forEach(function (clsName) {
            if (_this20.inputClass[clsName]) {
              inputClasses.push(clsName);
            }
          });
        }

        var _iterator4 = _createForOfIteratorHelper(inputClasses),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var inputClass = _step4.value;

            if (inputClass && inputClass.trim().length) {
              identifier += ".".concat(inputClass.trim());
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      var finalLogText = "DEBUG: ".concat(logText).concat(identifier ? "\n\t(".concat(identifier, ")") : '');

      if (window.console.debug && typeof window.console.debug === 'function') {
        window.console.debug(finalLogText);
      } else {
        window.console.log(finalLogText);
      }
    }
  },
  mounted: function mounted() {
    window.clearTimeout(this.debounceTimer);
    window.clearTimeout(this.selectionTimer);
    window.clearTimeout(this.kbInputTimer);
    this.renderFormat();
  },
  beforeDestroy: function beforeDestroy() {
    window.clearTimeout(this.debounceTimer);
    window.clearTimeout(this.selectionTimer);
    window.clearTimeout(this.kbInputTimer);
  }
});
// CONCATENATED MODULE: ./src/vue-timepicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_timepickervue_type_script_lang_js_ = (vue_timepickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-timepicker.vue?vue&type=style&index=0&lang=css&
var vue_timepickervue_type_style_index_0_lang_css_ = __nested_webpack_require_137275__("aab0");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-timepicker.vue






/* normalize component */

var component = normalizeComponent(
  src_vue_timepickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_timepicker = (component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src_0 = (vue_timepicker);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __nested_webpack_require_239197__) {

"use strict";

var $ = __nested_webpack_require_239197__("23e7");
var isObject = __nested_webpack_require_239197__("861d");
var isArray = __nested_webpack_require_239197__("e8b5");
var toAbsoluteIndex = __nested_webpack_require_239197__("23cb");
var toLength = __nested_webpack_require_239197__("50c4");
var toIndexedObject = __nested_webpack_require_239197__("fc6a");
var createProperty = __nested_webpack_require_239197__("8418");
var wellKnownSymbol = __nested_webpack_require_239197__("b622");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_239197__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_239197__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __nested_webpack_require_241339__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_241339__("44ad");
var requireObjectCoercible = __nested_webpack_require_241339__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fd6f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __nested_webpack_require_242615__) {

var NATIVE_SYMBOL = __nested_webpack_require_242615__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=VueTimepicker.common.js.map

/***/ }),

/***/ 270:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			351: 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(414);
/******/ 	
/******/ })()
;