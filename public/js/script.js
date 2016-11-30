/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(5);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n//import {checkUrlPath, createId, getUrlPaths} from './helpers/util';\n\n//import DeviceTypes from '../models/DeviceTypes';\n\n//import InfoScreen from './modules/InfoScreen';\n//import MobileVisitor from './modules/MobileVisitor';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _modulesHomepage = __webpack_require__(2);\n\nvar _modulesHomepage2 = _interopRequireDefault(_modulesHomepage);\n\n//let socket;\n//let clientDetails;\n\n//let infoscreen, mobilevisitor;\nvar homepage = undefined;\n\n/*const initSocket = () => {\n\n  // Must work with ip-adres on localhost to connect mobile\n  //socket = io(`172.20.10.2:3000`); // wifi hotspot\n  //socket = io(`172.20.10.3:3000`); // usb hotspot\n  //socket = io(`172.30.22.14:3000`); // howestwirelessfast\n  //socket = io(`172.30.22.23:3000`); // howestwireless\n  //socket = io(`172.30.22.13:3000`); // howestwireless\n  //socket = io(`192.168.0.178:3000`); // thuisnetwerk\n  //socket = io(`192.168.0.177:3000`); // sam's kot\n  //socket = io('https://thorrstevens.herokuapp.com/');\n\n  /*if(checkUrlPath('sdamtp')){\n    clientDetails = { deviceType: DeviceTypes.infoscreen };\n    clientDetails.timeperiodId = getUrlPaths()[4];\n    socket.on('screenConnect', initInfoScreen);\n  }else{\n    clientDetails = { deviceType: DeviceTypes.visitormobile };\n    socket.on('clientConnect', initMobile);\n  }\n\n  createNewClient();*/\n\n//};\n\n/*const createNewClient = () => {\n\n  console.log('[Script] Creating new client');\n\n  clientDetails.passcode = 5818; //Math.floor((Math.random()*8999)+1000);\n  clientDetails.refcode = `${createId(1, true)}${clientDetails.passcode}${createId(1, true)}`;\n  clientDetails.familyTree = 0; //Math.floor(Math.random()*1);\n\n  socket.emit('createClient', clientDetails);\n\n};*/\n\n/* --- MobileVisitor ------------------------------------------------- */\n\n/*const initMobile = () => {\n\n  mobilevisitor = new MobileVisitor(socket, clientDetails);\n  mobilevisitor.init();\n\n};*/\n\n/* --- InfoScreen ---------------------------------------------------- */\n\n/*const initInfoScreen = () => {\n\n  infoscreen = new InfoScreen(socket, clientDetails);\n  infoscreen.init();\n\n};*/\n\n/* --- Initcode ------------------------------------------------------ */\n\nvar init = function init() {\n\n  //initSocket();\n\n  homepage = new _modulesHomepage2['default']();\n  homepage.init();\n};\n\ninit();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\n__webpack_require__(3);\n\nvar Homepage = (function () {\n  function Homepage() {\n    var _this = this;\n\n    _classCallCheck(this, Homepage);\n\n    // -- Class Variables -------------\n    this.currentProject = 1;\n    this.lastProject = 7;\n\n    // -- Element Variables ----------\n    this.$btnPrev = document.querySelector('.prev');\n    this.$btnNext = document.querySelector('.next');\n    this.$projects = document.querySelector('.projects-overview');\n\n    // -- Event Handlers -------------\n    this.$btnPrev.addEventListener('click', function () {\n      return _this.navigateProject(-1);\n    });\n    this.$btnNext.addEventListener('click', function () {\n      return _this.navigateProject(1);\n    });\n  }\n\n  _createClass(Homepage, [{\n    key: 'init',\n    value: function init() {\n\n      console.log('[Homepage] Intialising homepage');\n    }\n\n    /* --- Navigate Projects ------------------------------------------------- */\n\n  }, {\n    key: 'navigateProject',\n    value: function navigateProject(direction) {\n\n      if (direction === -1 && this.currentProject > 1) {\n        this.currentProject += direction;\n      } else if (direction === 1 && this.currentProject < this.lastProject) {\n        this.currentProject += direction;\n      }\n\n      console.log('current project: ', this.currentProject);\n\n      if (this.currentProject === 1) {\n        console.log('start', this.currentProject);\n        this.$btnPrev.className = 'prev hidden';\n      } else if (this.currentProject === this.lastProject) {\n        console.log('end', this.currentProject);\n        this.$btnNext.className = 'next hidden';\n      } else {\n        console.log('middle', this.currentProject);\n        this.$btnPrev.className = 'prev';\n        this.$btnNext.className = 'next';\n      }\n\n      var margin = (this.currentProject - 1) * 100;\n      var strMargin = '-' + margin + '%';\n\n      this.$projects.style.marginLeft = strMargin;\n    }\n  }]);\n\n  return Homepage;\n})();\n\nexports['default'] = Homepage;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/modules/Homepage.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/modules/Homepage.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\n__webpack_require__(4);\n\nvar html = function html(strings) {\n  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    values[_key - 1] = arguments[_key];\n  }\n\n  var str = '';\n\n  if (Array.isArray(strings)) {\n    for (var i = 0; i < strings.length; i++) {\n      if (strings[i]) str += strings[i];\n      if (values[i]) str += values[i];\n    }\n  } else {\n    str = strings;\n  }\n\n  var doc = new DOMParser().parseFromString(str.trim(), 'text/html');\n\n  return doc.body.firstChild;\n};\n\nexports.html = html;\nvar prepend = function prepend($parent, $element) {\n\n  var $first = $parent.children[0];\n  $parent.insertBefore($element, $first);\n};\n\nexports.prepend = prepend;\nvar removeByClassName = function removeByClassName(selector) {\n\n  var $element = document.querySelector(selector);\n  $element.parentNode.removeChild($element);\n};\n\nexports.removeByClassName = removeByClassName;\nvar mobileCheck = function mobileCheck() {\n\n  var check = false;\n\n  (function (a) {\n    if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;\n  })(navigator.userAgent || navigator.vendor || window.opera);\n\n  //console.log(check);\n\n  //return true;\n  return check;\n};\n\nexports.mobileCheck = mobileCheck;\nvar mobileAndTabletCheck = function mobileAndTabletCheck() {\n\n  var check = false;\n\n  (function (a) {\n    if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;\n  })(navigator.userAgent || navigator.vendor || window.opera);\n\n  return check;\n};\n\nexports.mobileAndTabletCheck = mobileAndTabletCheck;\nvar hideAdressBar = function hideAdressBar() {\n\n  if (document.height < window.outerHeight) {\n    document.body.style.height = window.outerHeight + 50 + 'px';\n  }\n\n  setTimeout(function () {\n    window.scrollTo(0, 1);\n  }, 10);\n};\n\nexports.hideAdressBar = hideAdressBar;\nvar checkUrlPath = function checkUrlPath(keyword) {\n\n  var hashes = [];\n  var check = false;\n\n  hashes = window.location.pathname.split('/');\n  if (hashes.indexOf(keyword) > -1) {\n    check = true;\n  }\n\n  return check;\n};\n\nexports.checkUrlPath = checkUrlPath;\nvar getUrlPaths = function getUrlPaths() {\n  var customUrl = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n  var checkurl = undefined;\n  if (customUrl === '') {\n    checkurl = window.location.href;\n  } else {\n    checkurl = customUrl;\n  }\n\n  return checkurl.split('/');\n};\n\nexports.getUrlPaths = getUrlPaths;\nvar getUrlVars = function getUrlVars() {\n  var customUrl = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n  var checkurl = undefined;\n  if (customUrl === '') {\n    checkurl = window.location.href;\n  } else {\n    checkurl = customUrl;\n  }\n\n  var vars = [],\n      hash = undefined;\n  var hashes = checkurl.slice(checkurl.indexOf('?') + 1).split('&');\n  for (var i = 0; i < hashes.length; i++) {\n    hash = hashes[i].split('=');\n    vars.push(hash[0]);\n    vars[hash[0]] = hash[1];\n  }\n  return vars;\n};\n\nexports.getUrlVars = getUrlVars;\nvar redirectToPage = function redirectToPage(path) {\n\n  var index = undefined,\n      baseUrl = undefined,\n      redirectUrl = undefined;\n\n  if (checkUrlPath('connect')) {\n    index = window.location.href.indexOf('/connect');\n  } else if (checkUrlPath('m')) {\n    index = window.location.href.indexOf('/m');\n  } else if (checkUrlPath('d')) {\n    index = window.location.href.indexOf('/d');\n  } else {\n    index = window.location.href.indexOf('/');\n  }\n\n  baseUrl = window.location.href.substr(0, index);\n  redirectUrl = baseUrl + '/' + path;\n\n  window.location = redirectUrl;\n};\n\nexports.redirectToPage = redirectToPage;\nvar numbersFromString = function numbersFromString(checkString) {\n\n  var nums = checkString.match(/\\d/g);\n  return nums.join('');\n};\n\nexports.numbersFromString = numbersFromString;\nvar replaceCharAt = function replaceCharAt(str, index, character) {\n\n  return str.substr(0, index) + character + str.substr(index + character.length);\n};\n\nexports.replaceCharAt = replaceCharAt;\nvar createId = function createId(idLength) {\n  var noNums = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];\n\n  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  var uniqid = '';\n\n  if (noNums === true) {\n    possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';\n  }\n\n  for (var i = 0; i < idLength; i++) {\n    uniqid += possible.charAt(Math.floor(Math.random() * possible.length));\n  }\n\n  return uniqid;\n};\n\nexports.createId = createId;\nvar httpGet = function httpGet(theUrl) {\n\n  var xmlHttp = new XMLHttpRequest();\n  xmlHttp.open('GET', theUrl, false); // false for synchronous request\n  xmlHttp.send(null);\n  return xmlHttp.responseText;\n};\n\nexports.httpGet = httpGet;\nvar httpGetAsync = function httpGetAsync(theUrl, callback) {\n\n  var xmlHttp = new XMLHttpRequest();\n  xmlHttp.onreadystatechange = function () {\n\n    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {\n      callback(xmlHttp.responseText);\n    }\n  };\n\n  xmlHttp.open('GET', theUrl, true); // true for asynchronous\n  xmlHttp.send(null);\n};\n\nexports.httpGetAsync = httpGetAsync;\nvar rgbToHex = function rgbToHex(r, g, b) {\n\n  if (r > 255 || g > 255 || b > 255) {\n    throw 'Invalid color component';\n  }\n  return (r << 16 | g << 8 | b).toString(16);\n};\n\nexports.rgbToHex = rgbToHex;\nvar $ = function $(selector) {\n\n  var result = undefined;\n\n  if (selector === 'body') {\n    return document.body;\n  } else if (selector === 'head') {\n    return document.head;\n  } else if (/^[\\#.]?[\\w-]+$/.test(selector)) {\n\n    if (selector[0] === '#') {\n      return document.getElementById(selector.slice(1));\n    } else if (selector[0] === '.') {\n      result = document.getElementsByClassName(selector.slice(1));\n    } else {\n      result = document.getElementsByTagName(selector);\n    }\n  } else {\n    result = document.querySelectorAll(selector);\n  }\n\n  var elements = [].concat(_toConsumableArray(result));\n  if (elements.length === 1) return elements[0];\n  return elements;\n};\nexports.$ = $;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/helpers/util.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/helpers/util.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("/*! http://mths.be/array-from v0.2.0 by @mathias */\nif (!Array.from) {\n\t(function() {\n\t\t'use strict';\n\t\tvar defineProperty = (function() {\n\t\t\t// IE 8 only supports `Object.defineProperty` on DOM elements.\n\t\t\ttry {\n\t\t\t\tvar object = {};\n\t\t\t\tvar $defineProperty = Object.defineProperty;\n\t\t\t\tvar result = $defineProperty(object, object, object) && $defineProperty;\n\t\t\t} catch(error) {}\n\t\t\treturn result || function put(object, key, descriptor) {\n\t\t\t\tobject[key] = descriptor.value;\n\t\t\t};\n\t\t}());\n\t\tvar toStr = Object.prototype.toString;\n\t\tvar isCallable = function(fn) {\n\t\t\t// In a perfect world, the `typeof` check would be sufficient. However,\n\t\t\t// in Chrome 1–12, `typeof /x/ == 'object'`, and in IE 6–8\n\t\t\t// `typeof alert == 'object'` and similar for other host objects.\n\t\t\treturn typeof fn == 'function' || toStr.call(fn) == '[object Function]';\n\t\t};\n\t\tvar toInteger = function(value) {\n\t\t\tvar number = Number(value);\n\t\t\tif (isNaN(number)) {\n\t\t\t\treturn 0;\n\t\t\t}\n\t\t\tif (number == 0 || !isFinite(number)) {\n\t\t\t\treturn number;\n\t\t\t}\n\t\t\treturn (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\n\t\t};\n\t\tvar maxSafeInteger = Math.pow(2, 53) - 1;\n\t\tvar toLength = function(value) {\n\t\t\tvar len = toInteger(value);\n\t\t\treturn Math.min(Math.max(len, 0), maxSafeInteger);\n\t\t};\n\t\tvar from = function(arrayLike) {\n\t\t\tvar C = this;\n\t\t\tif (arrayLike == null) {\n\t\t\t\tthrow new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');\n\t\t\t}\n\t\t\tvar items = Object(arrayLike);\n\t\t\tvar mapping = arguments.length > 1;\n\n\t\t\tvar mapFn, T;\n\t\t\tif (arguments.length > 1) {\n\t\t\t\tmapFn = arguments[1];\n\t\t\t\tif (!isCallable(mapFn)) {\n\t\t\t\t\tthrow new TypeError('When provided, the second argument to `Array.from` must be a function');\n\t\t\t\t}\n\t\t\t\tif (arguments.length > 2) {\n\t\t\t\t\tT = arguments[2];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tvar len = toLength(items.length);\n\t\t\tvar A = isCallable(C) ? Object(new C(len)) : new Array(len);\n\t\t\tvar k = 0;\n\t\t\tvar kValue, mappedValue;\n\t\t\twhile (k < len) {\n\t\t\t\tkValue = items[k];\n\t\t\t\tif (mapFn) {\n\t\t\t\t\tmappedValue = typeof T == 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);\n\t\t\t\t} else {\n\t\t\t\t\tmappedValue = kValue;\n\t\t\t\t}\n\t\t\t\tdefineProperty(A, k, {\n\t\t\t\t\t'value': mappedValue,\n\t\t\t\t\t'configurable': true,\n\t\t\t\t\t'enumerable': true\n\t\t\t\t});\n\t\t\t\t++k;\n\t\t\t}\n\t\t\tA.length = len;\n\t\t\treturn A;\n\t\t};\n\t\tdefineProperty(Array, 'from', {\n\t\t\t'value': from,\n\t\t\t'configurable': true,\n\t\t\t'writable': true\n\t\t});\n\t}());\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/array.from/array-from.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/array.from/array-from.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);