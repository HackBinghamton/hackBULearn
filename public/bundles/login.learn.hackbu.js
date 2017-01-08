!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}(function(modules){for(var i in modules)if(Object.prototype.hasOwnProperty.call(modules,i))switch(typeof modules[i]){case"function":break;case"object":modules[i]=function(_m){var args=_m.slice(1),fn=modules[_m[0]];return function(a,b,c){fn.apply(this,[a,b,c].concat(args))}}(modules[i]);break;default:modules[i]=modules[modules[i]]}return modules}({0:function(module,exports,__webpack_require__){module.exports=__webpack_require__(282)},2:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(5)},3:function(module,exports){module.exports=vendor},4:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(38)},73:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(2)},76:function(module,exports,__webpack_require__){module.exports=__webpack_require__(3)(206)},85:function(module,exports){"use strict";function block(e){return new BEM_Block(e)}var _get=function e(t,r,n){var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var c=o.get;return void 0===c?void 0:c.call(n)},_inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},_classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.block=block;var BEM_Modifiable=function(){function e(t){if(_classCallCheck(this,e),"string"!=typeof t)throw new Error("Please specify a name for this BEM modifiable");this.name=t,this.modifiers=[]}return _createClass(e,[{key:"modifier",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=this;switch(Object.prototype.toString.call(e)){case"[object String]":this.modifiers.push(e);break;case"[object Object]":Object.keys(e).forEach(function(r){e[r]&&t.modifiers.push(r)});break;case"[object Array]":e.forEach(function(e){e&&t.modifiers.push(e)})}return this})}]),e}();exports.BEM_Modifiable=BEM_Modifiable;var BEM_Block=function(e){function t(e){if(_classCallCheck(this,t),"string"!=typeof e)throw new Error("Please specify a name for this BEM block");_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return _inherits(t,e),_createClass(t,[{key:"element",value:function(e){return new BEM_Element(this,e)}},{key:"toString",value:function(){var e=this;return[this.name].concat(this.modifiers.map(function(t){return e.name+"--"+t})).join(" ")}}]),t}(BEM_Modifiable);exports.BEM_Block=BEM_Block;var BEM_Element=function(e){function t(e,r){if(_classCallCheck(this,t),!(e instanceof BEM_Block))throw new Error("Please provide a parent block");if("string"!=typeof r)throw new Error("Please specify a name for this BEM element");_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,r),this.block=e}return _inherits(t,e),_createClass(t,[{key:"toString",value:function(){var e=this.block.name+"__"+this.name;return[e].concat(this.modifiers.map(function(t){return e+"--"+t})).join(" ")}},{key:"copy",value:function(){var e=new this.constructor(this.block,this.name);return e.modifiers=[].concat(this.modifiers),e}}]),t}(BEM_Modifiable);exports.BEM_Element=BEM_Element},89:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_bemClass=__webpack_require__(85);__webpack_require__(90);var ActivityIndicator=function(){var className=(0,_bemClass.block)("activity-indicator");return _react2.default.createElement("div",{className:className})};exports.default=ActivityIndicator},90:function(module,exports){},282:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(4),_reactDom2=_interopRequireDefault(_reactDom),_LoginForm=__webpack_require__(283),_LoginForm2=_interopRequireDefault(_LoginForm);__webpack_require__(287);var container=document.getElementById("login-container");_reactDom2.default.render(_react2.default.createElement(_LoginForm2.default,null),container)},283:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_bemClass=__webpack_require__(85),_isomorphicFetch=__webpack_require__(76),_isomorphicFetch2=_interopRequireDefault(_isomorphicFetch),_lodash=__webpack_require__(73),_lodash2=_interopRequireDefault(_lodash),_ActivityIndicator=__webpack_require__(89),_ActivityIndicator2=_interopRequireDefault(_ActivityIndicator);__webpack_require__(284);var LoginForm=function(_React$Component){function LoginForm(props){_classCallCheck(this,LoginForm);var _this=_possibleConstructorReturn(this,(LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).call(this,props));return _this.state={username:"",password:"",email:"",firstname:"",lastname:"",loading:!1,currentForm:"login",messages:{}},_this.onUsernameChange=_this.onUsernameChange.bind(_this),_this.onPasswordChange=_this.onPasswordChange.bind(_this),_this.onFirstNameChange=_this.onFirstNameChange.bind(_this),_this.onLastNameChange=_this.onLastNameChange.bind(_this),_this.onEmailChange=_this.onEmailChange.bind(_this),_this.submit=_this.submit.bind(_this),_this.switchForm=_this.switchForm.bind(_this),_this}return _inherits(LoginForm,_React$Component),_createClass(LoginForm,[{key:"onFirstNameChange",value:function(e){this.setState({firstname:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({lastname:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"submit",value:function(){var options={credentials:"include",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password,firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,register:"signup"==this.state.currentForm})};this.setState({loading:!0});var that=this;(0,_isomorphicFetch2.default)("/login",options).then(function(response){var json=response.json();return response.status>=200&&response.status<300?json:json.then(function(err){throw err})}).then(function(json){json.error?that.setState({loading:!1,messages:json.error}):window.location.href="/dashboard"}).catch(function(error){that.setState({loading:!1,messages:error.message})})}},{key:"switchForm",value:function(){"login"==this.state.currentForm?this.setState({currentForm:"signup",messages:{}}):this.setState({currentForm:"login",messages:{}})}},{key:"renderActivityIndicator",value:function(className){if(this.state.loading)return _react2.default.createElement("div",{className:className.element("activity-indicator")},_react2.default.createElement(_ActivityIndicator2.default,null))}},{key:"renderHeader",value:function(className){return _react2.default.createElement("div",{className:className.element("logo")})}},{key:"renderLoginForm",value:function(className){if(0==this.state.loading&&"login"==this.state.currentForm)return _react2.default.createElement("div",{className:className.element("fields").modifier("login")},this.renderHeader(className),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"Username"),_react2.default.createElement("input",{type:"text",value:this.state.username,onChange:this.onUsernameChange}),this.renderMessageFor("username",className)),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"Password"),_react2.default.createElement("input",{type:"password",value:this.state.password,onChange:this.onPasswordChange}),this.renderMessageFor("password",className)),this.renderButton(className))}},{key:"renderMessageFor",value:function(field,className){if(this.state.messages[field])return _lodash2.default.map(this.state.messages[field],function(message){return _react2.default.createElement("div",{className:className.element("message"),key:message},message)})}},{key:"renderSignupForm",value:function(className){if(0==this.state.loading&&"signup"==this.state.currentForm)return _react2.default.createElement("div",{className:className.element("fields").modifier("signup")},this.renderHeader(className),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"First Name"),_react2.default.createElement("input",{type:"text",value:this.state.firstname,onChange:this.onFirstNameChange}),this.renderMessageFor("firstname",className)),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"Last Name"),_react2.default.createElement("input",{type:"text",value:this.state.lastname,onChange:this.onLastNameChange}),this.renderMessageFor("lastname",className)),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"Email Address"),_react2.default.createElement("input",{type:"text",value:this.state.email,onChange:this.onEmailChange}),this.renderMessageFor("email",className)),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"Username"),_react2.default.createElement("input",{type:"text",value:this.state.username,onChange:this.onUsernameChange}),this.renderMessageFor("username",className)),_react2.default.createElement("div",{className:className.element("field")},_react2.default.createElement("label",null,"Password"),_react2.default.createElement("input",{type:"password",value:this.state.password,onChange:this.onPasswordChange}),this.renderMessageFor("password",className)),this.renderButton(className))}},{key:"renderButton",value:function(className){var text="Login";return"login"!=this.state.currentForm&&(text="Register"),_react2.default.createElement("div",{className:className.element("button"),onClick:this.submit},text)}},{key:"renderSwitchLink",value:function(className){if(0==this.state.loading)return"login"==this.state.currentForm?_react2.default.createElement("div",{className:className.element("switch-link")},"Don't have an account? ",_react2.default.createElement("b",{onClick:this.switchForm},"Sign Up")):_react2.default.createElement("div",{className:className.element("switch-link")},"Already have an account? ",_react2.default.createElement("b",{onClick:this.switchForm},"Log In"))}},{key:"render",value:function(){var className=(0,_bemClass.block)("auth-form");return _react2.default.createElement("div",{className:className},this.renderActivityIndicator(className),this.renderLoginForm(className),this.renderSignupForm(className),this.renderSwitchLink(className))}}]),LoginForm}(_react2.default.Component);LoginForm.propTypes={},exports.default=LoginForm},284:90,287:90}));