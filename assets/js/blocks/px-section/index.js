/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/px-components/media-uploader.js":
/*!****************************************************!*\
  !*** ./src/blocks/px-components/media-uploader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaUploader)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/
//===> WordPress Modules <===//

 //===> Media Uploader <===//

var MediaUploader = /*#__PURE__*/function (_Component) {
  _inherits(MediaUploader, _Component);

  var _super = _createSuper(MediaUploader);

  function MediaUploader() {
    _classCallCheck(this, MediaUploader);

    return _super.apply(this, arguments);
  }

  _createClass(MediaUploader, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          size = _this$props.size,
          setValue = _this$props.setValue; //===> Output <===//

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: setValue,
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/React.createElement("div", {
            "class": "mb-15 cursor-pointer",
            onClick: open
          }, label ? /*#__PURE__*/React.createElement("label", {
            className: "mb-10"
          }, label) : '', /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between"
          }, size === 'small' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
            src: value,
            style: {
              "max-height": "2.25rem"
            }
          }), /*#__PURE__*/React.createElement("button", {
            onClick: open,
            "class": "btn square primary small radius-sm fs-12 fal fa-upload"
          })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
            src: value,
            className: "radius-sm radius-top",
            style: {
              "max-width": "100%",
              "display": "block"
            }
          }), /*#__PURE__*/React.createElement("button", {
            onClick: open,
            "class": "btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"
          }, "Select Image"))));
        }
      }));
    }
  }]);

  return MediaUploader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



/***/ }),

/***/ "./src/blocks/px-components/px-background.js":
/*!***************************************************!*\
  !*** ./src/blocks/px-components/px-background.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhenixBackground)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _px_components_media_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../px-components/media-uploader */ "./src/blocks/px-components/media-uploader.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//

 //===> Phenix Background <===//

var PhenixBackground = /*#__PURE__*/function (_Component) {
  _inherits(PhenixBackground, _Component);

  var _super = _createSuper(PhenixBackground);

  function PhenixBackground() {
    var _this;

    _classCallCheck(this, PhenixBackground);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      main: ["bg-transparent", "bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-alpha-05", "bg-alpha-10", "bg-alpha-25", "bg-alpha-50", "bg-alpha-75"],
      offwhite: ["bg-offwhite-primary", "bg-offwhite-secondary", "bg-offwhite-info", "bg-offwhite-success", "bg-ffwhite-danger", "bg-offwhite-warning", "bg-offwhite-smoke", "bg-offwhite-smoke", "bg-offwhite-gray", "bg-offwhite-snow", "bg-offwhite-snow", "bg-offwhite-honeydew", "bg-offwhite-mintcream", "bg-offwhite-aliceblue", "bg-offwhite-ghost", "bg-offwhite-seashell", "bg-offwhite-beige", "bg-offwhite-oldlace", "bg-offwhite-floral", "bg-offwhite-ivory", "bg-offwhite-antique", "bg-offwhite-linen", "bg-offwhite-lavenderblush"],
      brands: ["bg-facebook", "bg-twitter", "bg-youtube", "bg-instagram", "bg-snapchat", "bg-whatsapp", "bg-pinterest", "bg-linkedin", "bg-behance", "bg-dribbble", "bg-flicker"],
      gradients: ["bg-grade-primary", "bg-grade-secondary", "bg-grade-warning", "bg-grade-danger", "bg-grade-success", "bg-grade-water", "bg-grade-ice", "bg-grade-fire", "bg-grade-purple"],
      rotation: ['bg-grade-0', 'bg-grade-45', 'bg-grade-90', 'bg-grade-120', 'bg-grade-120n', 'bg-grade-90n', 'bg-grade-45n', 'bg-grade-180'],
      placeholder: "https://via.placeholder.com/480x200.webp?text=Example"
    });

    return _this;
  }

  _createClass(PhenixBackground, [{
    key: "render",
    value: //===> Render <===//
    function render() {
      var _this2 = this;

      //===> Properties <===//
      var _this$props = this.props,
          type = _this$props.type,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Returned Value <===//

      var options = {}; //===> Type Activator <===//

      var activeBtn = function activeBtn(current) {
        return type === current ? 'primary' : 'light';
      };

      var activeTab = function activeTab(current) {
        return type === current ? '' : 'hidden';
      }; //===> Set Background <===//


      var setBackground = function setBackground(clicked) {
        //===> Colors & Gradients <===//
        if (clicked.target) {
          //===> Get Value <===//
          var button = clicked.target,
              btnType = button.getAttribute('data-type'),
              btnValue = button.getAttribute('data-value'); //===> Rotate Gradient <===//

          if (btnType === 'rotate') {
            //===> Clear Exisitng Directions <===//
            var current = options.value,
                saved = value.replaceAll('   ', ''); //===> Clear Exisitng Directions <===//

            _this2.state.rotation.forEach(function (name) {
              if (name !== btnValue) {
                saved = saved.replaceAll(name, '').replaceAll(' n', '');
                if (current) options.value = current.replaceAll(name, '').replaceAll(' n', '');
              }

              ;
            }); //===> Set New Direction <===//


            options.type = 'gradient';
            options.value = saved;
            options.rotation = btnValue;
          } else {
            //===> Set Background <===//
            options.type = btnType;
            options.value = btnValue;
            options.rotation = null;
          }
        } //===> Image Type <===//
        else {
          //===> Set New Direction <===//
          options.type = 'image';
          options.value = clicked.url;
        } //===> Return Options <===//


        return onChange(options);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list, type) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index]; //===> Convert to Title <===//

          var title = list[index].replace('bg-', '');
          title = title.replace('-', ' ');
          title = title.replace('grade', ''); //===> UpperCase Title <===//

          title = title.replace(/^\w/, function (c) {
            return c.toUpperCase();
          });
          output.push( /*#__PURE__*/React.createElement("button", {
            onClick: setBackground,
            title: title,
            "data-value": name,
            "data-type": type,
            className: "".concat(name, " btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(value.includes(name) ? 'px-active' : '')
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Icons Buttons <===//


      var makeRotations = function makeRotations(list, type) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index]; //===> Rotation <===//

          var rotation = name.replace('bg-grade-', '');
          if (name.endsWith('n')) rotation = "-".concat(rotation.slice(0, -1)); //===> Get Value <===//

          output.push( /*#__PURE__*/React.createElement("button", {
            "data-type": type,
            onClick: setBackground,
            "data-value": name,
            className: "btn square tiny light ".concat(value.includes(name) ? 'px-active' : '')
          }, /*#__PURE__*/React.createElement("i", {
            className: "inline-block fas fa-arrow-to-bottom",
            style: {
              transform: "rotate(".concat(rotation, "deg)")
            }
          })));
        } //===> Return Buttons <===//


        return output;
      }; //===> Options Changer <===//


      var changeType = function changeType(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector('.primary')),
            currentType = "".concat(element[0].getAttribute('data-value'), "-options"),
            targetElement = optionsList.querySelector(".".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector('.flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> Component Design <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"
      }, /*#__PURE__*/React.createElement("button", {
        className: "btn tiny col ".concat(activeBtn('color')),
        onClick: changeType,
        "data-value": "color"
      }, "Colors"), /*#__PURE__*/React.createElement("button", {
        className: "btn tiny col ".concat(activeBtn('gradient')),
        onClick: changeType,
        "data-value": "gradient"
      }, "Gradients"), /*#__PURE__*/React.createElement("button", {
        className: "btn tiny col ".concat(activeBtn('image')),
        onClick: changeType,
        "data-value": "image"
      }, "Image"), /*#__PURE__*/React.createElement("button", {
        className: "btn tiny bg-offwhite-smoke col far fa-ellipsis-v",
        style: {
          padding: '0 8px'
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox color-options ".concat(activeTab('color'))
      }, makeButtons(this.state.main, 'color'), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), makeButtons(this.state.offwhite, 'color'), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), makeButtons(this.state.brands, 'color')), /*#__PURE__*/React.createElement("div", {
        className: "flexbox gradient-options ".concat(activeTab('gradient'))
      }, makeButtons(this.state.gradients, 'gradient'), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), /*#__PURE__*/React.createElement("label", {
        className: "mb-10 col-12"
      }, "Gradient Direction"), /*#__PURE__*/React.createElement("div", {
        className: "px-group icon-btns radius-sm border-1 border-solid border-alpha-10 borderd-group mb-10"
      }, makeRotations(this.state.rotation, 'rotate'))), /*#__PURE__*/React.createElement("div", {
        className: "flexbox image-options ".concat(activeTab('image'))
      }, /*#__PURE__*/React.createElement(_px_components_media_uploader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: type !== 'image' ? this.state.placeholder : value,
        setValue: setBackground
      }))));
    }
  }]);

  return PhenixBackground;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-components/px-colors.js":
/*!***********************************************!*\
  !*** ./src/blocks/px-components/px-colors.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhenixColors)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//
 //===> Phenix Background <===//

var PhenixColors = /*#__PURE__*/function (_Component) {
  _inherits(PhenixColors, _Component);

  var _super = _createSuper(PhenixColors);

  function PhenixColors() {
    _classCallCheck(this, PhenixColors);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixColors, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Colors List <===//

      var pxPallete = {
        main: ["color-inherit", "color-primary", "color-secondary", "color-gray", "color-dark", "color-white", "color-success", "color-danger", "color-warning", "color-info", "color-transparent"],
        brands: ["color-facebook", "color-twitter", "color-youtube", "color-instagram", "color-snapchat", "color-whatsapp", "color-pinterest", "color-linkedin", "color-behance", "color-dribbble", "color-flicker"]
      }; //===> Set Background <===//

      var setColor = function setColor(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            value = button.getAttribute('data-value'); //===> Return Options <===//

        return onChange(value);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index]; //===> Convert to Title <===//

          var title = list[index].replace('color-', '');
          title = title.replace('-', ' '); //===> UpperCase Title <===//

          title = title.replace(/^\w/, function (c) {
            return c.toUpperCase();
          });
          output.push( /*#__PURE__*/React.createElement("button", {
            onClick: setColor,
            title: title,
            "data-value": name,
            className: "".concat(name.replace('color-', 'bg-'), " btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(value === name ? 'px-active' : null)
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10"
      }, "Select Color"), /*#__PURE__*/React.createElement("div", {
        className: "flexbox options-list"
      }, makeButtons(pxPallete.main), /*#__PURE__*/React.createElement("span", {
        className: "border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), makeButtons(pxPallete.brands)));
    }
  }]);

  return PhenixColors;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-section/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/px-section/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _px_components_px_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-components/px-background */ "./src/blocks/px-components/px-background.js");
/* harmony import */ var _px_components_px_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-components/px-colors */ "./src/blocks/px-components/px-colors.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//====> WP Modules <====//


 //====> Phenix Modules <====//


 //====> Edit Mode <====//

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_size = function set_size(size) {
    return setAttributes({
      size: size
    });
  };

  var set_tagName = function set_tagName(tagName) {
    return setAttributes({
      tagName: tagName
    });
  };

  var set_container = function set_container(container) {
    return setAttributes({
      container: container
    });
  };

  var set_container_flex = function set_container_flex(container_flex) {
    return setAttributes({
      container_flex: container_flex
    });
  }; //===> Set Phenix View <===//


  var setPhenixView = function setPhenixView() {
    //===> Check Site Editor <===//
    var siteEditor = window.frames['editor-canvas'],
        blockElement = '.wp-block-design-px-section[data-src]'; //===> Get the Element from Site Editor <===//

    if (siteEditor) {
      blockElement = siteEditor.document.querySelectorAll('.px-media');
      blockElement = _toConsumableArray(blockElement);
      Phenix(blockElement).multimedia();
    } //===> Set Background <===//


    if (!siteEditor) Phenix(blockElement).multimedia();
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    //===> Original Classes <===//
    var original = attributes.className.replaceAll('  ', ' ').replace(' px-media', ''),
        current = attributes.px_bg,
        rotate = attributes.px_bg_rotate; //===> Remove Current Value <===//

    if (attributes.px_bg) original = original.replace(current, '');
    if (rotate) original = original.replace(rotate, ''); //===> Update Background <===//

    setAttributes({
      px_bg: background.value,
      px_bg_type: background.type
    }); //===> Update Rotation <===//

    if (background.rotation) {
      original = original.replace(rotate, '');
      setAttributes({
        px_bg_rotate: background.rotation
      });
    } //===> Set Background [Colors, Gradients] <===//


    if (background.type != 'image') {
      setAttributes({
        className: "".concat(original, " ").concat(background.value).concat(background.rotation ? ' ' + background.rotation : '')
      });
    } //===> Set Backgeround Image <===//
    else if (background.value) {
      //===> Set Background <===//
      setPhenixView();
      setAttributes({
        className: "".concat(original, " px-media")
      });
    }
  }; //===> Set Color <===//


  var set_color = function set_color(color) {
    //===> Get Value <===//
    var current = attributes.px_color,
        original = attributes.className.replace('  ', ' '); //===> Remove Current Value <===//

    if (current) original = original.replace(current, ''); //===> Set New Value <===//

    setAttributes({
      px_color: color,
      className: "".concat(original, " ").concat(color)
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var TagName = attributes.tagName; //===> onLoad Set Background <===//

  if (attributes.px_bg_type === 'image') {
    blockProps["data-src"] = attributes.px_bg;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
      return setPhenixView();
    });
  } //===> Container Options <===//


  var container_options = {
    size: attributes.size,
    flexbox: attributes.container_flex ? 'flexbox' : ''
  }; //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Section Settings"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    key: "tagName",
    label: "HTML Tag",
    value: attributes.tagName,
    onChange: set_tagName,
    options: [{
      label: 'Default <div>',
      value: 'div'
    }, {
      label: 'Main <main>',
      value: 'main'
    }, {
      label: 'Aside <aside>',
      value: 'aside'
    }, {
      label: 'Section <section>',
      value: 'section'
    }, {
      label: 'Header <header>',
      value: 'header'
    }, {
      label: 'Footer <footer>',
      value: 'footer'
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "With Container",
    checked: attributes.container,
    onChange: set_container
  })), attributes.container ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Container",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    key: "container_size",
    label: "Container Size",
    value: attributes.size,
    onChange: set_size,
    options: [{
      label: 'Small',
      value: 'container-sm'
    }, {
      label: 'Medium',
      value: 'container-md'
    }, {
      label: 'Normal',
      value: 'container'
    }, {
      label: 'Large',
      value: 'container-xl'
    }, {
      label: 'Full Width',
      value: 'container-fluid'
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Flex Container",
    checked: attributes.container_flex,
    onChange: set_container_flex
  })) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Typography",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_components_px_colors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: set_color,
    value: attributes.px_color
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Background",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_components_px_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: set_background,
    type: attributes.px_bg_type,
    value: attributes.px_bg
  }))), /*#__PURE__*/React.createElement(TagName, blockProps, attributes.container ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(container_options.size, " ").concat(container_options.flexbox)
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null)) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null)));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/blocks/px-section/block.json":
/*!******************************************!*\
  !*** ./src/blocks/px-section/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"design/px-section","version":"0.1.0","title":"Phenix Section","category":"design","description":"Main Header Block for Phenix Themes.","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"div"},"container":{"type":"boolean","default":true},"container_flex":{"type":"boolean","default":false},"size":{"type":"string","default":"container"},"px_bg_type":{"type":"string","default":"color"},"px_bg_rotate":{"type":"string","default":""},"px_bg":{"type":"string","default":""},"px_color":{"type":"string","default":""}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/blocks/px-section/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/px-section/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/px-section/block.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/
//===> Block Data <===//

 //===> WordPress Modules <===//


 //===> Register Block <===//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M96 384h448V128H96V384zM32 96C14.34 96 0 110.3 0 128v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128C64 110.3 49.66 96 32 96zM608 96c-17.66 0-32 14.34-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128C640 110.3 625.7 96 608 96z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    var TagName = attributes.tagName; //===> Container Options <===//

    var container_options = {
      size: attributes.size,
      flexbox: attributes.container_flex ? 'flexbox' : ''
    }; //===> .Check Background Image. <===//

    if (attributes.px_bg_type === 'image') {
      blockProps["data-src"] = attributes.px_bg;
    } //===> Render <===//


    return /*#__PURE__*/React.createElement(TagName, blockProps, attributes.container ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(container_options.size, " ").concat(container_options.flexbox)
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map